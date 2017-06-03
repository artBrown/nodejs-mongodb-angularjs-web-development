/**
 * Created by tetsuya on 6/3/17.
 *
 * https://stackoverflow.com/questions/34628305/using-promises-with-fs-readfile-in-a-loop
 *
 */
// make promise version of fs.readFile()
fs.readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}