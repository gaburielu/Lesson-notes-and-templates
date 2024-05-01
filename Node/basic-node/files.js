const fs = require("fs");

///// READ FILE

fs.readFile("./files/text.txt", (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(data.toString());
  //the raw data is a buffer so need to convert using toString() first
});

///// WRITING FILE

fs.writeFile("./files/text.txt", "Hello world the second time!", () => {
  console.log("succesfully overwritten");
});
//if the file doesnt exist, it will create a new file

///// /DIRECTORY

if (!fs.existsSync("./newDirectory")) {
  //check if the directory already exist
  fs.mkdir("./newDirectory", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Succesfully make a new directory");
  });
  // make new directory
} else {
  fs.rmdir("./newDirectory", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Succesfully delete the directory");
  });
  // delete the dir
}

///// DELETING FILES

if (!fs.existsSync("./files/deleteMe.txt")) {
  fs.unlink("./files/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
