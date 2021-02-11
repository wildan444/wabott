let handler = async m => m.reply(`
╭─〘 DONASI 〙
│ • PULSA : 0895384315758
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
