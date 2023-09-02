require("./module")

global.owner = "6283157565343"," 6285285797378"
global.namabot = "𝗣𝗔𝗜𝗦𝗥𝗖 "
global.namaCreator = "ঔৣ⃕᭝ 𝗣𝗔𝗜𝗦𝐌𝚯𝐃͢𝐙᭄`"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "Hola Mek Sv 𝗣𝗔𝗜𝗦"
global.tekspushkonv2 = "Hola Sv 𝗣𝗔𝗜𝗦"
global.packname = "ঔৣ⃕᭝𝗣𝗔𝗜𝗦𝐌𝚯𝐃͢𝐙᭄"
global.author = "Sticker By 𝗣𝗔𝗜𝗦"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})