let handler = async m => m.reply(`
╭─〘 DONASI 〙
│ • AXIS : 083856085455
│ • DANA: 083856085455
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
