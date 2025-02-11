/* eslint-disable @typescript-eslint/no-var-requires */
import Express from 'express';
import cors from 'cors';
import router from './router';

require('dotenv').config({
	path: '.env.local',
});

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/api', router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
