let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
- - - - - - - - *[ ALIVE ]*  - - - - - - - - -

*Hey Bro I am Still Alive & Kicking 🥳*

_Developer :_ *TOXIC DEVIL*
_Contact Developer :_ *Wa.me/919544707896*

_Branch :_ *master*
_Version :_ *1.0.0*

*Type !menu for all Commands 😁*

 - - - - - - - - *[ ALIVE ]* - - - - - - - - -
`.trim(), m)
}
handler.help = ['alive']
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
