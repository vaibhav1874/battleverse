import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: [true, 'Please provide an artist name.'],
  },
  stageName: {
    type: String,
    required: [true, 'Please provide a stage name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  contact: {
    type: String,
    required: [true, 'Please provide a contact number.'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other',
  },
  industryExperience: {
    type: String,
    required: [true, 'Please provide industry experience.'],
  },
  followedBattleverse: {
    type: Boolean,
    default: false,
  },
  photoUrl: {
    type: String,
    required: [true, 'Please provide a photo URL.'],
  },
  audioUrl: {
    type: String,
    required: [true, 'Please provide an audio URL.'],
  },
  status: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
