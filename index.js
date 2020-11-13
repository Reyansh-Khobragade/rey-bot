const discord = require('discord.js')
const client = new discord.Client()
client.login('your token here')

client.on('ready', () => {
    console.log('The Bot has Started!');
    client.user.setActivity("I am Running", {
        type: "PLAYING",
        name: "itt"
      });
    });
    client.on('message', message => {
        let prefix = '.'
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if(command === "rm"){
       let nice = args.join(" ");
       let embed = new discord.MessageEmbed()
        .setDescription(nice)
        .setColor("RANDOM")
         message.channel.send(embed)
        } 
        let em = args.join(" ");
        if(command === "nitro") {
            const nitrro = client.emojis.cache.find(emoji => emoji.name === em);
            message.channel.send(`${nitrro}`)
        }
        if(command === 'help') {
        let embed = new discord.MessageEmbed()
        .setTitle('Help')
        .addField('Prefix','The prefix of the bot is `.`')
        .addField('.help','shows this')
        .addField('.about', 'about the bot')
        .addField('.rm', 'This will make a embed of you text you wanted to repeat(repeat me)')
        .addField('.nitro', 'This will help you use nitro emoji from the server if you dont have nitro')
        .addField('Rock Paper Scissors', 'command is `rps`', 'you can play rock paper scissors with the bot')
        .addField(".avatar", 'get the avatar of the user you want to')
        .addField('.whiteboard', 'type the text you want to see on the white board')
        .addField('Normal Text commands', 'many reactions and text while saying cat, bye, rick, cool,lol, oof, XD, pinging reyansh, no, f, rip ,butt etc.')
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/774847277092962345/774847506777374772/standard.gif')
        .setFooter('Requested by ' + message.author.username)
         message.channel.send(embed)
        }
        if (command === 'avatar') {
              const user = message.mentions.users.first() || message.author;
              const hmmembed = new discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor(user.username)
                  .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 4096 }));;
              message.channel.send(hmmembed);
        }
        if(command === 'about') {
            let embed = new discord.MessageEmbed()
            .addField('About Me', 'A Simple Discord Bot Which Is Fun To Use')
            .addField('.help','to know more about the bot use commands `.help`')
            .addField('Version', '1.2')
            .addField('Consider Supporting Me','Subscribe to this channel https://www.youtube.com/channel/UCeJOySzx_kPMlgIyW398tRA?sub_confirmation=1')
                .setColor("RANDOM")
                .setFooter('Requested by ' + message.author.username)
            message.channel.send(embed)
        }
        
    });
    client.on('message', async message => {
        let prefix = '.' // Replace with your Prefix
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
             let text = args.join(" ");
      if(command === "whiteboard"){
              const jimp = require('jimp');
      let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) // there is WHITE too
      let theimage = await jimp.read('https://cdn.discordapp.com/attachments/774847277092962345/775611963157512192/hmm.png') // Load the Main Image
      theimage.print(font, 104, 130, `${text}`) // Place Text on the Image and Position it
      theimage.write('hmm.png') // Output the Image
      message.channel.send(``, { files: ["./hmm.png"] })
                                                   }
    });

    client.on ('message', async message => {
        if(message.content.toLowerCase() === 'cat'){
            message.channel.send('<a:catyes:773862641265147944>')
         return message.react("<a:catyes:773862641265147944>")
        }
        if(message.content.toLowerCase() == 'bye'){
         message.channel.send('<a:wave:773927372847579176>') 
          return message.react("<a:wave:773927372847579176>")
        }
        if(message.content.toLowerCase() == 'rick'){
           message.channel.send('<a:rickroll:773941923383214102>') 
         return message.react("<<a:rickroll:773941923383214102>")
        }
        if(message.content.toLowerCase() == 'cool'){
            message.channel.send('<a:Pikachu:773927039551406100>') 
        return message.react("<a:Pikachu:773927039551406100>")
        }
        if(message.content.toLowerCase() == 'lol'){
            return message.react("🤣")
        }
        if(message.content.toLowerCase() == 'oof'){
            message.react("<a:oof:774232327614103582>")
         return message.channel.send('oof!') 
        } 
        if(message.content.toLowerCase() == 'xd'){
           return message.react("<:XD:774143453838835723>")
        }
        if(message.content.toLowerCase() == 'no'){
           return message.channel.send('<a:no:774196897237172244>') 
        }
        if (message.content.toLowerCase() === 'ping') {  
           message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
        if(message.content.toLowerCase() == 'f'){
            return message.reply('Have Payed Their Respect!')   
        }
        if(message.content == '69'){
            return message.react('<:a:nicenice:774242161787928616>') 
        }
        if(message.content.toLowerCase() == 'rip'){
        return message.react("<a:rip:774233181884514335>")
        }
        if(message.content.toLowerCase() == 'butt'){
            return message.channel.send("https://tenor.com/view/smack-that-booty-massage-gif-13340994")
        }
        if(message.content.toLowerCase() == 'hi'){
            return message.reply('Hello <a:pikahi:774893437023289344>') 
        }
        if(message.content.toLowerCase() == 'hello'){
            return message.reply('Hello <a:pikahi:774893437023289344>') 
        }

    });
       client.on('message', message => { 
        if (message.content.toLowerCase() == 'rps') {
            // Player Gets
          const whatyouget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
      const playergets = whatyouget[Math.floor(Math.random() * whatyouget.length)]; 
      // Bot Gets
          const whatbotget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
      const botgets = whatbotget[Math.floor(Math.random() * whatbotget.length)]; 
       
      
      let embed = new discord.MessageEmbed()
      .setTitle("RPS :scissors:/ :newspaper2:/ :shell:")
      .setDescription("Who will win " + message.author.username + " or  Bot")
      .addField("Bot got",botgets)
      .addField(message.author.username + " got", playergets)
      .setColor("RANDOM")
      if (botgets == playergets) {
              const wow = client.emojis.cache.find(emoji => emoji.name === "spongebobdancepants");
          embed.addField("Its a tie",wow)
      
      }
          
      if (botgets == "paper :newspaper2:" && playergets == "rock :shell:") {
          embed.addField("Rock Beats paper " + message.author.username + " wins",":sunglasses:")
      
      }
          
          if (botgets == "rock :shell:" && playergets == "paper :newspaper2:") {
                  const wow = client.emojis.cache.find(emoji => emoji.name === "warn");
      
          embed.addField("Rock Beats paper Bot wins",wow)
      
      }
          
          if (botgets == "paper :newspaper2:" && playergets == "scissors :scissors:") {
            const wow = client.emojis.cache.find(emoji => emoji.name === "wow");
      
          embed.addField("Scissors Cuts paper " + message.author.username + " wins",wow)
      
      }
        
          if (botgets == "rock :shell:" && playergets == "scissors :scissors:") {
            const wow = client.emojis.cache.find(emoji => emoji.name === "blob_party");
      
          embed.addField("Rock Smashes Scissors Bot wins",wow)
      
      }
          
              if (botgets == "scissors :scissors:" && playergets == "rock :shell:") {
            const wow = client.emojis.cache.find(emoji => emoji.name === "thinky");
      
          embed.addField("Rock Smashes Scissors " + message.author.username + " wins",wow)
      
      }
          
                  if (botgets == "scissors :scissors:" && playergets == "paper :newspaper2:") {
            const wow = client.emojis.cache.find(emoji => emoji.name === "thonk_gif");
      
          embed.addField("Scissors cuts Paper Bot wins",wow)
      
      }
      message.channel.send(embed)
    }
})
