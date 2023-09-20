const path = require("path");
const a = path.basename("home/node/file/modules/index.php")
const b = path.dirname("home/node/file/modules/index.php")
const c = path.extname("home/node/file/modules/index.php")

console.log(a);
// output => index.php     end of the url name is the base name

console.log(b);
// output => home/node/file/modules     only file name is the dirname

console.log(c);
// output => .php     extname 