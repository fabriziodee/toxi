let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
	if (!user.autolevelup) return
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
Congratulations!! You Have Leveled Up!!
*${before}* -> *${user.level}*
Type *.profile* to Check
	`.trim())
}

module.exports = handler
