const Auth = require('../utils/auth');

exports.run = (message, args) => {
   
   if (Auth.isAdmin(message.member)) {
      if(!args || args.length < 1) return message.reply("Must provide the text of the poll question after the command.");

      const question = args.join(' ')
  
      let text = "**POLL:** " + question

      message.channel.send(text)
         .then(function (msg) {
            msg.react("✅")
            msg.react("❌")
         }).catch(function() {
            //Something
         });
      message.delete();
   } else {
      message.reply('You must be an admin in order to run this command.');
   }
    
};