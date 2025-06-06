import connectDB from '@/lib/mogo';
import mongoose, { models } from 'mongoose';
connectDB();

const UserSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	nickName: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: String,
	tempToken: String,
	tempTokenDueDate: Date,
	role: { type: String, default: 'user' },
	avatar: String,
	resetPassword: String,
	resetPasswordDueDate: Date,
	createdAt: { type: Date, default: Date.now },
});

const User = models.User || mongoose.model('User', UserSchema);

export default User;
