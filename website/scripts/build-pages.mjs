import {promises as fs} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const websiteDir = path.resolve(__dirname, '..');
const buildDir = path.join(websiteDir, 'build');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

await fs.rm(buildDir, {recursive: true, force: true});

const buildResult = spawnSync(npmCommand, ['run', 'build'], {
  cwd: websiteDir,
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

const copyResult = spawnSync(process.execPath, ['scripts/copy-pages-assets.mjs'], {
  cwd: websiteDir,
  stdio: 'inherit',
});

if (copyResult.status !== 0) {
  process.exit(copyResult.status ?? 1);
}
