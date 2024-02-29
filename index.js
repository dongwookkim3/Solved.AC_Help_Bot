const { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
const fs= require('fs');
client.login(fs.readFileSync('token.txt', 'utf8'));

client.on('messageCreate', (msg) => {
    if (msg.content.startsWith('/problem')) {
        const num= msg.content.slice('/problem'.length).trim();
        msg.reply(`문제 링크: https://www.acmicpc.net/problem/${num}`);
    }
    else if (msg.content.startsWith('/user')) {
        const num = msg.content.slice('/user'.length).trim();
        msg.reply(`사용자 정보: https://solved.ac/profile/${num}`);
    }
});