var spawn = require('child_process').spawn
var options = {
  env: {user: 'brad'},
  detached: false,
  stdio: ['pipe', 'pipe', 'pipe']
}
var child = spawn(
  'netstat',
  ['-p', 'tcp']
)
console.log('may take some time to get response.')
child.stdout.on('data', (data) => {
  console.log(data.toString())
})
child.stderr.on('data', (data) => {
  console.log(data.toString())
})
child.on('exit', (code) => {
  console.log('Child exited with code', code)
})