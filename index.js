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
    else if (msg.content.startsWith('/step')) {
        arrstr=["입출력과 사칙연산","조건문","반복문","1차원 배열","문자열","심화 1","2차원 배열","일반 수학 1","약수, 배수와 소수","기하: 직사각형과 삼각형","시간 복잡도","브루트 포스","정렬","집합과 맵","약수, 배수와 소수 2","스택, 큐, 덱"];
        arrnum=[1,4,3,6,7,52,2,8,10,50,53,9,49,18,11];
        const str = msg.content.slice('/step'.length).trim();
        const index = arrstr.indexOf(str);
        msg.reply(`단계별로 풀어보기 링크: https://www.acmicpc.net/step/${arrnum[index]}`);
    }
});