
const discord = require("discord.js");
 exports.run = async (client, message, args) => {
    let user = message.author;
    message.channel.send(new discord.RichEmbed()
 .setAuthor("Ajuda")
 .setColor([113, 149, 68])
 .addField(":joystick:Informações:joystick:", "IP: 198.50.224.191:7777\nTS3: ts.brasilplaylife.com.br", true)                        
 .setThumbnail("https://brasilplaylife.com.br/forum/uploads/monthly_2019_01/logo.png.9c3a9d9dc947779e8afaba954aae3395.png")
 .setDescription(`Olá, **${user.username}**, somos do **Brasil Play Life**, um servidor RPG para SAMP. \nAqui (e no SAMP) você pode encontrar **eventos, organizações e muita diversão** para sua vida!`)
 .setFooter(message.author.username , "https://brasilplaylife.com.br/forum/uploads/monthly_2019_01/logo.png.9c3a9d9dc947779e8afaba954aae3395.png")
 ); 


}