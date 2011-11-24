var readline = require('readline')
  , rl = readline.createInterface(process.stdin, process.stdout)
  , prefix = 'OHAI> '

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
      console.log('world!')
      break
    case 'error':
        throw new Error('Sample error!')
      break
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`')
      break
  }
  rl.setPrompt(prefix, prefix.length)
  rl.prompt()
}).on('close', function() {
  console.log('Have a great day!')
  process.exit(0)
})

console.log(prefix + 'Good to see you. Try typing `hello` or `error`.')
rl.setPrompt(prefix, prefix.length)
rl.prompt()
