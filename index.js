const { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
client.login('MTIxMTc1ODIyMDYyOTExNDkxMQ.GYsrh9.F2yy-iei6RtJarsTik1rraoBDJHi5q7cTm3pWs');

client.on('messageCreate', (msg) => {
    if (msg.content.startsWith('/problem')) {
        const num= msg.content.slice('/problem'.length).trim();
        msg.reply(`문제 링크: https://www.acmicpc.net/problem/${num}`);
    }
});