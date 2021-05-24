let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*Will Be Available Soon*
`.trim(), m)
}
handler.help = ['list']
handler.tags = ['tools']
handler.command = /^(alive)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
