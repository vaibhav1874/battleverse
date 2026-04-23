import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration from '@/models/Registration';
import mongoose from 'mongoose';
import { Readable } from 'stream';
import { sendConfirmationEmail } from '@/lib/mail';

// Helper to upload to GridFS
async function uploadToGridFS(file, filename) {
  const db = mongoose.connection.db;
  const bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: 'uploads'
  });

  const buffer = Buffer.from(await file.arrayBuffer());
  const stream = Readable.from(buffer);
  
  const uploadStream = bucket.openUploadStream(filename, {
    contentType: file.type
  });

  return new Promise((resolve, reject) => {
    stream.pipe(uploadStream)
      .on('error', reject)
      .on('finish', () => {
        resolve(`/api/files/${uploadStream.id}`);
      });
  });
}

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();

    const artistName = formData.get('artistName');
    const stageName = formData.get('stageName');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const gender = formData.get('gender');
    const industryExperience = formData.get('industryExperience');
    const followedBattleverse = formData.get('followedBattleverse') === 'true';
    const photo = formData.get('photo');
    const audio = formData.get('audio');

    // Basic validation
    if (!photo || !audio) {
      return NextResponse.json({ success: false, error: 'Missing files' }, { status: 400 });
    }

    // 1. Upload files to GridFS
    const photoUrl = await uploadToGridFS(photo, `photo_${Date.now()}_${photo.name}`);
    const audioUrl = await uploadToGridFS(audio, `audio_${Date.now()}_${audio.name}`);

    // 2. Create Registration
    const registration = await Registration.create({
      artistName,
      stageName,
      email,
      contact,
      gender,
      industryExperience,
      followedBattleverse,
      photoUrl,
      audioUrl,
    });

    // 3. Send Confirmation Email (Async)
    try {
      await sendConfirmationEmail(email, artistName);
    } catch (mailError) {
      console.error('Email fallback error:', mailError);
    }

    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error) {
    console.error('Registration API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server Error' },
      { status: 500 }
    );
  }
}
