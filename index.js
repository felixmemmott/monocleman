const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();
const tallyho = ["Tally Ho! Off to search I go!","How Spiffing, a search result!","A search result! Marvelous!", "Absolutely Cracking, open a search result on me old chap!"];
const responsecount = 3;

client.once('ready', () => {
  console.log('Ready!');
})

client.on('message', message => {


  try {
    //amazonsearch
    if (message.content.startsWith(`${prefix}asearch`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(9,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("Amazon search results for: " + item);
      message.channel.send("https://www.amazon.com/gp/search?ie=UTF8&tag=fragginfelix-20&linkCode=ur2&linkId=99fd2185ee30fec478facdf1fb76b17b&camp=1789&creative=9325&index=aps&keywords=" + item_formatted);
    }

    //ebaysearch
    if (message.content.startsWith(`${prefix}esearch`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(9,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("Ebay search results for: " + item);
      message.channel.send("https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=" + item_formatted);
    }

    //googlesearch
    if (message.content.startsWith(`${prefix}gsearch`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(9,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("Google search results for: " + item);
      message.channel.send("https://www.google.com/search?source=hp&ei=KvtOXev-C6iRlwTCx7L4Bg&q=" + item_formatted);
    }

    //letmegooglethatforyou
    if (message.content.startsWith(`${prefix}lmgtfy`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(8,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("LMGTFY link for: " + item);
      message.channel.send("https://lmgtfy.com/?q=" + item_formatted);
    }

    //youtubesearch
    if (message.content.startsWith(`${prefix}ysearch`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(9,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("Youtube search results for: " + item);
      message.channel.send("https://www.youtube.com/results?search_query=" + item_formatted);
    }

    //soundcloudsearch
    if (message.content.startsWith(`${prefix}ssearch`)){
      console.log(message.author + " : " + message.content);
      i = Math.floor((Math.random() * responsecount));
      message.channel.send(tallyho[i]);

      item = (message.content).substring(9,((message.content).length)+ 1);
      item_formatted = item.replace(/ /g,"%20");
      message.channel.send("Soundcloud search results for: " + item);
      message.channel.send("https://soundcloud.com/search?q=" + item_formatted);
    }

  } catch(err) {
    message.channel.send("Oh crumbs, an unknown command!");
  }



})

client.login(token);
