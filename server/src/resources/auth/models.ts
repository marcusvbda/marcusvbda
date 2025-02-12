import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: String,
	email: { type: String, unique: true, required: true },
	password: String,
	role: { type: String, default: 'user' },
	createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', UserSchema);
