import db from '../lib/db'

import init from './seeds/init';
import createContent from './seeds/createContent';

export async function main() {
	await Promise.all([
		init(db),
		createContent(db)
	]);
}

main();
