let handler = function (m) {
  if (!m.quoted) throw 'Reply to any Message!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw '*Can Only Delete Messages Send By The Bot*'
  if (!isBaileys) throw 'The Message Was Not Send By The Bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
