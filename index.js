console.log("Heelooo");
const fs=require("fs");
const content = 'hello!';

// fs.writeFile('a.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("successful");
//   }
// });
fs.readFile('a.txt', 'utf8', (err, data) => {
    let data1="From Node JS";
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
