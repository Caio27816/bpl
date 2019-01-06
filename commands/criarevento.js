exports.run = async (client, message, args) => {
 
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  var discord = require("discord.js");
  let formato = "?criarevento tipo";
  let user = message.author;
  let guild = message.guild;
  let tipo = args[0];
  let pergunta = "O Big é bonito?";
  if(tipo === "quiz") {
   var embedP = new discord.RichEmbed()
  .setAuthor("Pergunta mágica!", "https://cdn.discordapp.com/attachments/512371887259516955/524030630422380544/ponto-de-interrogacao_318-52837.png" || user.avatarURL)
  .setColor("RANDOM")
  .setDescription("RPergunta: `"+pergunta+"`?")  .setFooter(client.user.tag+", quiz!", client.user.avatarURL)
  .setTimestamp(Date.now())
  .setThumbnail(client.user.avatarURL);

   var embedRP = new discord.RichEmbed()
  .setAuthor("Pergunta mágica!", "https://cdn.discordapp.com/attachments/512371887259516955/524030630422380544/ponto-de-interrogacao_318-52837.png" || user.avatarURL)
  .setColor("RANDOM")
  .setDescription("Resposta certa: "+"\n\nGanhador: `"+"")
  .setFooter(client.user.tag+", quiz!", client.user.avatarURL)
  .setTimestamp(Date.now())
  .setThumbnail(client.user.avatarURL);
   const msg = await message.channel.send(embedP);
    await msg.react("✅");
  client.on("messageReactionAdd", async (reaction, users) => {
  if(reaction.message.id !== msg.id) return;
  if(reaction.emoji.name !== "✅") return;
  if(users.id === client.user.id) return;
  var role = reaction.message.guild.roles.find(r => r.id === "487884439565631508");
  var userss = reaction.message.guild.members.get(users.id);
  userss.addRole(role);
  reaction.remove(users);
  users.send(embedRP);   
  reaction.remove(client.user);  
});  
  }
  
  
   
  
}