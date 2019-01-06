exports.run = (client, message, args) => {


  var ev = message.guild.roles.find("name", "@everyone");
  var au = message.guild.member(message.member);
 if(message.member.hasPermissions("ADMINISTRATOR")) {
  message.guild.channels.forEach(canais => {
    canais.overwritePermissions(ev, {
       SEND_MESSAGES: false
    
    });
  });
 }
  message.channel.send("Todos os canais foram **mutados** com sucesso!\n**"+message.author.username+"**, utilize !!unmuteall para desmutá-los!");
}