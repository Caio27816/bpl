exports.run = (client, message, args) => {


  var ev = message.guild.roles.find("name", "@everyone");
  var au = message.guild.member(message.member);
  if (message.member.hasPermission("ADMINISTRATOR")) {
  message.guild.channels.forEach(canais => {
    canais.overwritePermissions(ev, {
       SEND_MESSAGES: true
    });
  });
  message.channel.send("Todos os canais foram ***desmutados*** com sucesso!");
  return;
  }
}