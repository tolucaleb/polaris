import path from 'path';
import chokidar from 'chokidar';

import genSiteJson from './gen-site-json.mjs';

const mdPath = path.join(process.cwd(), 'content');

// Run intially
await genSiteJson();

// Run whenever there is a change to a .md file
chokidar.watch(mdPath).on('change', async () => await genSiteJson());