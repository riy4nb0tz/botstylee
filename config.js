global.DeveloperMode = 'false' //true Or false
global.linkGC = ['hhttps://chat.whatsapp.com/G3971DPsggdJFU4LgBujuB]
global.owner = ['6282114499086', '6282114499086', '6282114499086']// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  bg: 'http://bochil.ddns.net',
  bsbt: 'https://bsbt-api-rest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael'
}

// Sticker WM
global.packname = 'Benniganteng\'benniismael'
global.author = 'Benniismael'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
