import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  image: {
    asset_id: {
      type: String,
    },
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
    secure_url: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});