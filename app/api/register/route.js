import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration from '@/models/Registration';
import { sendConfirmationEmail } from '@/lib/mail';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const {
      artistName,
      stageName,
      email,
      contact,
      gender,
      industryExperience,
      followedBattleverse,
      photoUrl,
      audioUrl
    } = body;

    // Basic validation
    if (!photoUrl || !audioUrl) {
      return NextResponse.json({ success: false, error: 'Missing file URLs from Firebase' }, { status: 400 });
    }

    // 1. Create Registration in MongoDB with Firebase URLs
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

    // 2. Send Confirmation Email (Async)
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
