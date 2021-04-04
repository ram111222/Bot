const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fetch = require('node-fetch');
const keepalive = require('./Server.js');

client.on('ready', () => {
  console.log("bot is online dingus")
  client.user.setActivity(`foody 2.0 ${client.guilds.cache.size} servers | prefix is f-`);
});

client.on('message', async message => {
  if(message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift();

   if(command.toLowerCase() === "invite") {
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=786803841328742451&permissions=4094033009&scope=bot') 
   }
   if (command === "ping") {

    const timeTaken = Date.now() - message.createdTimestamp;
     message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    };
   if(command.toLowerCase() === "support") {
    message.channel.send('https://discord.gg/EppgcjMWaY') 
   };
   if(command.toLowerCase() === 'order');
     if(!args[0]) return message.channel.send('What should I order, specify next time. ');
     if(args[0].toLowerCase() === 'random') {
      let rnd = await fetch('https://foodish-api.herokuapp.com/api/');
      rnd = await rnd.json()
      message.channel.send(rnd.image);
     }
     else if(args[0].toLowerCase() === 'pizza') {
       const pizzas = ['https://sfo2.digitaloceanspaces.com/couchsessions-api/2019/06/Pizza-Wallpaper-pizza-6333801-1024-768-600x337.jpg', 'https://www.skigondel.nl/images/stories/virtuemart/product/pizza-catering-event.jpg', 'https://s.abcnews.com/images/US/GTY_pizza_jef_140528_12x5_992.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2yX1zcGQbZqEerEpZlPIMFkO7jl7XAfFKA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdSN4DLhfDU-mwavEPvGhBbkHPMRNO38Dow&usqp=CAU'
      , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBxGhJdakeHCG7bBkMnRIuAlgv5sOohqn_g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQjpGQpmJyd83bq8JfFlFMfVV_pd5gYt2iQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMQj_Jt4jpSlhU8COZd3Vk7TktZFs2kRncw&usqp=CAU'];
      message.channel.send(pizzas[Math.floor(Math.random() * pizzas.length)]);
     }
     else if(args[0].toLowerCase() === 'sushi') {
       const sushi = 
       ['https://th.bing.com/th/id/OIP.6ZUlugyCnpqOeWuldPlXAQHaE2?pid=ImgDet&rs=1','https://c1.staticflickr.com/7/6136/6001005824_6385c79666_b.jpg','https://i.pinimg.com/originals/44/f5/ff/44f5ffcb972f347d70b9856bb6aa64f0.jpg','https://th.bing.com/th/id/OIP.lH4OTjLDpyW2wdFJnxtOoQHaHc?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.s11tvGUn9CaQi4gvBxmg2gEgDY?pid=ImgDet&w=653&h=490&rs=1','https://th.bing.com/th/id/OIP.YeV0ShpglicByEH0WKCgEwAAAA?pid=ImgDet&w=258&h=258&rs=1'];
      message.channel.send(sushi[Math.floor(Math.random() * sushi.length)]);
     }
     else if(args[0].toLowerCase() === 'ramen') {
       const ramen = ['https://th.bing.com/th/id/Raf7d843c97ae907a3dde6fea78412297?rik=zlBO8VvwuhYNGQ&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f54ad654b6529d92b2c045e13%2fmaster%2fpass%2f51197040_turkey-ramen_1x1.jpg&ehk=vZld64Xev81%2bGHgr9ehubR2WXr5obUVpev8YqoL%2bL2w%3d&risl=&pid=ImgRaw', 'https://th.bing.com/th/id/OIP.aUAa2AZFwNkMWFVbaxKPowAAAA?pid=ImgDet&w=400&h=400&rs=1', 'https://th.bing.com/th/id/OIP.u_xWb2D13ub-VHhCR_QjeAHaHa?pid=ImgDet&w=1000&h=1000&rs=1', 'https://th.bing.com/th/id/OIP.9DIa4wWX_cfu67IM_1vqPgHaHa?pid=ImgDet&w=690&h=690&rs=1', 'https://th.bing.com/th/id/OIP.W_mJeVQMnIRFPoJC5zLG4QHaHa?pid=ImgDet&w=640&h=640&rs=1', 'https://th.bing.com/th/id/OIP.Qtu-9RSmDR4Uj0lQsKPhbgHaFj?pid=ImgDet&w=1140&h=855&rs=1'];
      message.channel.send(ramen[Math.floor(Math.random() * ramen.length)]);
     }
     else if(args[0].toLowerCase() === 'chicken') {
       const chicken = ['https://natashaskitchen.com/wp-content/uploads/2020/01/Whole-Chicken.jpg','https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_Pats-Beercan-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539876282.jpeg'];
      message.channel.send(chicken[Math.floor(Math.random() * chicken.length)]);
     }
     else if(args[0].toLowerCase() === 'hotdog') {
       const hotdog = ['https://img.huffingtonpost.com/asset/564243d1180000a700304513.jpeg?ops=1910_1000','https://th.bing.com/th/id/OIP.U_pzhIZ3JGAxWjleAm_hNgAAAA?pid=ImgDet&w=450&h=392&rs=1','https://th.bing.com/th/id/OIP.SAOQDaAZNGrAERvb7Agh3QHaGI?pid=ImgDet&w=234&h=194&rs=1','https://th.bing.com/th/id/OIP.D3QI6FFiyc4D44RGhl2wOQHaEK?pid=ImgDet&w=480&h=270&rs=1'];
      message.channel.send(hotdog[Math.floor(Math.random() * hotdog.length)]);
     }
     else if(args.join(' ') === ('orange chicken')) {
       const orange_chicken = ['https://dinnerthendessert.com/wp-content/uploads/2017/08/Panda-Express-Orange-Chicken-8-.jpg','https://th.bing.com/th/id/OIP.IpLGpNBzVUSJUCBH90yWfgHaLH?pid=ImgDet&w=680&h=1020&rs=1'];
      message.channel.send(orange_chicken[Math.floor(Math.random() * orange_chicken.length)]);
     }
     else if(args.join(' ') === ('corn dogs')) {
       const corn_dog = ['https://th.bing.com/th/id/OIP.k4eLOleHxjQJBfk4m2ziyAHaE6?pid=ImgDet&rs=1','https://www.pnglib.com/wp-content/uploads/2020/08/corn-dog-with-mustard_5f346b1cd646e.png','https://th.bing.com/th/id/OIP.Pnv2RcxeSKARIqE2HzOl5gAAAA?pid=ImgDet&w=340&h=270&rs=1','https://th.bing.com/th/id/Rb27c6848b79ceb50e66956fc2f88b65e?rik=S6l7vk2Zbp3cTA&riu=http%3a%2f%2fwww.lovethatfood.com%2fimages%2fbeef%2fcorn-dogs%2fcorn-dogs-lg.jpg&ehk=joqY8RZOXbpialrq%2bknifOd5caAoh92xFuidP0kBwSs%3d&risl=&pid=ImgRaw'];
      message.channel.send(corn_dog[Math.floor(Math.random() * corn_dog.length)]);
   }
     else if(args.join(' ') === ('steak')) {
       const steak = ['https://th.bing.com/th/id/R1cc27aeb51932e50976a10255075910e?rik=Gp8R7UJSFdr8Sw&riu=http%3a%2f%2ftherenaissancebeard.com%2fwp-content%2fuploads%2f2014%2f01%2fthick-steak.jpg&ehk=8Bi2BHvTK%2b6uY8w9vRjsIFCCVOLTNj2e%2fvHwYnjEI5s%3d&risl=&pid=ImgRaw','https://th.bing.com/th/id/OIP.XiyD_xtvg-BeY1voLS0cAAHaFj?pid=ImgDet&w=1396&h=1047&rs=1','https://th.bing.com/th/id/OIP.Xs4Rm4KHw4_1HvSppXeRxwHaHe?pid=ImgDet&w=1118&h=1128&rs=1','https://th.bing.com/th/id/OIP.4Agg78l1P_9G_Yn_JOKkcAAAAA?pid=ImgDet&w=363&h=484&rs=1'];
      message.channel.send(steak[Math.floor(Math.random() * steak.length)]); 
     }
})
keepalive()
client.login(config.token);