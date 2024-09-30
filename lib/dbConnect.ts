import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const dbConnect = async () => {
  if (isConnected) {
    return; // If already connected, return
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};
