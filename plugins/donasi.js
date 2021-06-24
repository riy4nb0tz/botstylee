let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Axis [083153406515]
│ • Gopay [Minta Ke Owner]
│ DONASI NGAB BIAR DOSA LU BERKURANG
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283153406515
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
