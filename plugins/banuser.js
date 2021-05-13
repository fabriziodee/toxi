let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '*Tag anyone & use this command*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Tag One*'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `*User Banned SucessFully!! ✅️*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
