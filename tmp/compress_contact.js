import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const assetsDir = 'c:/Users/bennydan7/Documents/work/agenda-money-platform/src/assets';

async function compress(filename, format = 'webp') {
    const inputPath = path.join(assetsDir, filename);
    const outFilename = filename.split('.')[0] + '.' + format;
    const outputPath = path.join(assetsDir, outFilename);

    console.log(`Compressing and resizing ${filename} to ${format}...`);
    try {
        const pipeline = sharp(inputPath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 75 });

        await pipeline.toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`Success! New size: ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error(`Error compressing ${filename}:`, err);
    }
}

async function run() {
    await compress('contact-us.png');
}

run();
