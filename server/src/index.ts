/* eslint-disable @typescript-eslint/no-var-requires */
import Express from 'express';
import cors from 'cors';
import router from './router';
import connectDB from './lib/mongodb';
import rateLimit from 'express-rate-limit';

require('dotenv').config({
	path: '.env.local',
});

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 50,
	message: 'Too many requests, please try again later!',
});

app.use('/api', limiter);

connectDB();

app.use('/api', router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
