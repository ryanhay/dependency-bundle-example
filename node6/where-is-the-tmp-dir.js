const os = require("os");
// newer versions of Node use os.tmpdir()
const temp = os.tmpDir();
console.log("Your Operating System temp directory is: " + temp);
