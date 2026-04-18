import {promises as fs} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const websiteDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(websiteDir, '..');
const buildDir = path.join(websiteDir, 'build');

const passthroughFiles = ['index.json', 'policy.json'];

async function copyFileIfExists(fileName) {
  const sourcePath = path.join(repoRoot, fileName);
  const destinationPath = path.join(buildDir, fileName);

  try {
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`Copied ${fileName}`);
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      console.warn(`Skipped missing file: ${fileName}`);
      return;
    }

    throw error;
  }
}

async function copyZipArtifacts() {
  const entries = await fs.readdir(repoRoot, {withFileTypes: true});

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.zip')) {
      continue;
    }

    const sourcePath = path.join(repoRoot, entry.name);
    const destinationPath = path.join(buildDir, entry.name);
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`Copied ${entry.name}`);
  }
}

await fs.mkdir(buildDir, {recursive: true});

for (const fileName of passthroughFiles) {
  await copyFileIfExists(fileName);
}

await copyZipArtifacts();
