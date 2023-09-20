// const fs = require("fs")
// fs.writeFile("file.txt", "Data is added to file", ()=>{
//   console.log("Data added successfully");
// })
// console.log("Simply added data");

// // output => Simply added data
// //           Data added successfully

// // first run Simply added data console data because this is not used async await function 
// // That is called NON BLOCKING IO MODULE



// *******************************************************************************



// const fs = require("fs")
// const a = fs.writeFileSync("file2.txt", "Data added")
// console.log(a);
// console.log("Simply added data");

// // output => undefined
// //           Simply added data

// // this is used async await function that's why print one by one



// *********************************************************************************



const fs = require("fs")

// // for file add 
// const a = fs.writeFileSync("file3.txt", "file added successfully")
// console.log(a);

// for view or read purpose
fs.readFile("file.txt", 'utf-8', (err, data) => {
  console.log(data);
})

// for update purpose
fs.appendFile("file2.txt", 'this is updated data', (err) => {
  console.log(err);
})

// for file rename 
fs.rename("file2.txt", "renameFile.txt", (err) => {
  console.log(err);
})

// for delete
fs.unlinkSync("file2.txt")



// **************************************************************



