// Terimakasih kpd RC047 :v
// Fitur By Xteams

const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { usedPrefix, conn, args, text }) => {
  let [tipe, emoji] = text.includes('/') ? text.split('/') : args
  if (tipe && !emoji) {
    emoji = tipe
    tipe = 'whatsapp'
  }
  if (!emoji) throw `Please enter a emoji\n\nExample ${usedPrefix}semoji whatsapp/😎\n\nList of types:
- whatsapp
- facebook
- apple
- google
- microsoft`
  let stiker = await sticker(null, global.API('xteam', '/sticker/emojitopng' + encodeURI(tipe.trim().toLowerCase()), { emo: emoji.trim() }, 'APIKEY'), global.packname, global.author)
//   m.reply(`
// Tipe: ${tipe.trim().toLowerCase()}
// Emoji: ${emoji.trim()}
// `.trim())
  m.reply(stiker)
}
handler.help = ['semoji']
handler.tags = ['sticker']
handler.command = /^s?emo(ji)?$/i
module.exports = handler
