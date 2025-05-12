import { watch} from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
const hostname = 'localhost';
const port = 6958;
let needsReload = false;

watch('public/im_mockup.js', async (event, filename) => {
  if (event != 'change') return;
  const file = await readFile('./public/im_mockup.js', 'utf-8');
  const mini = file
    .replaceAll(/(\r\n|\n|\r)/gm, '')
    .replaceAll(/(  )/gm, '');
  await writeFile('./public/im_mockup.min.js', mini);
  needsReload = true;
});

createServer(async (req, res) => {
  let file;
  console.log("req.url", req.url)

  switch (req.url) {
    case '/':
      file = await readFile('./public/index.html');
      res.writeHead(200);
      break;
    case '/im_mockup.min.js':
      file = await readFile('./public/im_mockup.min.js');
      res.writeHead(200, { 'content-type': 'text/javascript' });
      break;
    case '/needs_reload':
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write(JSON.stringify({ needsReload }));
      needsReload = false;
      break;
  }
  file && res.write(file);
  res.end();
}).listen(6958);

console.log(`Server running at http://${hostname}:${port}/`);
