// local and can only be accessed in this file
const secret = 'SUPER SECRET'
// shared and can be access in multiple files due to it being exported
const john = 'john'
const peter = 'peter'

module.exports = { john, peter } // exported file so it can be accessed throughout the application
