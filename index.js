require('dotenv').config();
const Discord = require('discord.js');
const PREFIX = '!';
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log('This bot is on GGs');
    bot.user.setActivity(`use !help , watching ${bot.guilds.cache.size} servers`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/ejbean2op"
    });
});

bot.on('message' , async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]){
        case 'ft100yq':
var stat = "ongoing"
var illu = "Atsuo Ueda"
var writ = "Hiro Mashima"
//let guildA = client.guilds.cache.get("GUILD ID");
if (!args[1]) return message.author.send(new Discord.MessageEmbed()
.setTitle("Fairy Tail 100 years quest Index")
.addFields(
{name: 'How to use this command' , value: '```!ft100yq <chapter number>```' ,},)
.setTimestamp())
if(!message.content.startsWith(PREFIX)) return;
if (args[1] === '1') return message.author.send(new Discord.MessageEmbed()
.setAuthor("Fairy Tail: 100 Years Quest" , "https://cdn.discordapp.com/attachments/802857839488008206/804086708458094642/images_4.jpeg")
.setTitle("Volume 1 Chapter 1")
.setColor('RED') 
.setImage('https://cdn.discordapp.com/attachments/802857839488008206/804096920092016690/images_5.jpeg')
.addFields(
//{name: '' , value: '' ,},
{name: 'Chapter name' , value: '**The "first" guild and the "strongest" guild**' ,},
{name: 'Read here:' , value: 'https://mangadex.org/chapter/415335' ,},
{name: 'Provider' , value: 'Sorcerer Weekly' ,},
{name: 'Author' , value: writ ,},
{name: 'Illustrated by' , value: illu ,},
{name: 'Demographic' , value: 'shōnen' ,},
{name: 'Support us' , value: 'https://discord.gg/fairytail' ,},
)
.setFooter(`status : ${stat}`)
.setTimestamp()).catch(async err => message.reply("I can't DM this user"));
if (args[1] === '2') return message.author.send(new Discord.MessageEmbed()
.setAuthor("Fairy Tail: 100 Years Quest" , "https://cdn.discordapp.com/attachments/802857839488008206/804086708458094642/images_4.jpeg")
.setTitle("Volume 1 Chapter 2")
.setColor('RED') 
.setImage('https://cdn.discordapp.com/attachments/802857839488008206/804096920092016690/images_5.jpeg')
.addFields(
//{name: '' , value: '' ,},
{name: 'Chapter name' , value: '**Pedigree of dragon slayers**' ,},
{name: 'Read here:' , value: 'https://mangadex.org/chapter/415504' ,},
{name: 'Provider' , value: 'Sorcerer Weekly' ,},
{name: 'Author' , value: writ ,},
{name: 'Illustrated by' , value: illu ,},
{name: 'Demographic' , value: 'shōnen' ,},
{name: 'Support us' , value: 'https://discord.gg/fairytail' ,},
)
.setFooter(`status : ${stat}`)
.setTimestamp()).catch(async err => message.reply("I am not able to DM you, make sure you have your DMs opened 👍 "));

break; 
    } 
})