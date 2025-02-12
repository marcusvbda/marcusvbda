import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			dbName: process.env.DATABASE_NAME,
		} as mongoose.ConnectOptions);
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

export default connectDB;
