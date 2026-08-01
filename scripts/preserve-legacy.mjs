import { cp, mkdir, readdir } from 'node:fs/promises';

await mkdir('build/assets', { recursive: true });
await cp('assets', 'build/assets', { recursive: true, force: true });

// Keep rendered legacy course pages and their embedded resources available.
await mkdir('build/teaching', { recursive: true });
for (const entry of await readdir('_teaching')) {
  if (entry === 'index.html') continue;
  await cp(`_teaching/${entry}`, `build/teaching/${entry}`, { recursive: true, force: true });
}

for (const item of ['CNAME', 'robots.txt']) {
  await cp(item, `build/${item}`, { force: true });
}
