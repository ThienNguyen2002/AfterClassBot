import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages],
});

client.login(process.env.DICORD_TOKEN);

client.on("messageCreate", async (message) => {console.log(message)
if(!message?.author.bot){
   //Bot echos to your dms the message you sent

    message.author.send('Echo ${message.content}')
}
});

//when bot is added, it'll ask the user what time should the bot ping 
client.on("guildMemberAdd", async (member) => {
    member.send('What time should I ping you?')
});

//then the bot should listen the user's time input in military time


//then the bot should ping the user at the time they inputted


//then the bot should ask the user if they want to change the time they inputted


//if yes, then the bot should ask the user what time should the bot ping


//data base for hold classes and times