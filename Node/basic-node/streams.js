const fs = require ('fs');

const readStream = fs.createReadStream('./files/text1.txt', {encoding: 'utf8'});
//the encoding is so that the stream/chunk/buffer will be in human readable format
const writeStream = fs.createWriteStream('./files/text2.txt');

readStream.on('data', (chunk)=>{
    console.log(" ------ NEW CHUNK ------");
    console.log(chunk);
    writeStream.write('\nNew CHUNK\n');
    writeStream.write(chunk);
})
