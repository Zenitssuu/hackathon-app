import mongoose from "mongoose"

const contestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['past', 'active', 'upcoming'],
    default: 'active'
  },
  startDate: {
    // type: String,
    type:Date,
    required: true
  },
  endDate: {
    // type: String,
    type:Date,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default:'medium',
    required: true
  },user:{
    
  }
}, {
  timestamps: true
});

export const Contest = mongoose.model('Contest', contestSchema);

