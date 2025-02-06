/* eslint-disable @typescript-eslint/no-var-requires */
const Express = require('express');
const cors = require('cors');
require('dotenv').config({
	path: '.env.local',
});

const app = Express();

app.use(cors());

app.get('/api/hello', (req: any, res: any) => {
	res.json({ message: 'Hello from Express!' });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
