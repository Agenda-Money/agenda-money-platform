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
            .resize({ width: 1200, withoutEnlargement: true }) // Cap width at 1200px
            .webp({ quality: 75 }); // Lower quality slightly for better savings

        await pipeline.toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`Success! New size: ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error(`Error compressing ${filename}:`, err);
    }
}

async function run() {
    await compress('aku.jpg');
    await compress('alex.jpg');
    await compress('adiza.png');
    await compress('beatrice.png');
}

run();
