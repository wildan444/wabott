let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.thanks)}`, m)
}
handler.customPrefix = /makasih|thanks|terimakasih|thank|mksh|Thanks|Terimakasih|Makasih|Thank$/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.thanks = [
'sama sama kakak'
'iya kak sama sama'
'sama sama'
'hooh sama sama'
'iya sama sama'
]