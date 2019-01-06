const Discord = require("discord.js");
exports.run = (client,message,args)=>{

  const sayMessage = args.join(" ");
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  if(!sayMessage) return message.channel.send("**Faltou o aviso**");
    const thumb = message.guild.iconURL;
     
  message.guild.members.forEach(member => {
          
       if(member.user.bot) return;       
         
       const embed = new Discord.RichEmbed()
.setTitle('📢Aviso geral📢')
.setDescription(sayMessage)
.setFooter(`Enviado por: ${message.author.username}`)
.setTimestamp(new Date())
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL);
      
             member.send(embed);
  
   
      message.channel.send("Aviso enviado com sucesso!"); 
  });
  }
                                      