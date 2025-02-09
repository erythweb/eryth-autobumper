const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config();

const getNow = () => {

  return {

	  time: new Date().toLocaleString("fr-FR", {
		timeZone: "Europe/Paris",
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"

	  })
	};
  };

client.on('ready', async () => {

      console.log(`
                                 ▄████████    ▄████████ ▄██   ▄       ███        ▄█    █▄    
                                ███    ███   ███    ███ ███   ██▄ ▀█████████▄   ███    ███   
                                ███    █▀    ███    ███ ███▄▄▄███    ▀███▀▀██   ███    ███   
                               ▄███▄▄▄      ▄███▄▄▄▄██▀ ▀▀▀▀▀▀███     ███   ▀  ▄███▄▄▄▄███▄▄ 
                              ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ▄██   ███     ███     ▀▀███▀▀▀▀███▀  
                                ███    █▄  ▀███████████ ███   ███     ███       ███    ███   
                                ███    ███   ███    ███ ███   ███     ███       ███    ███   
                                ██████████   ███    ███  ▀█████▀     ▄████▀     ███    █▀    
                                             ███    ███                                    1.0.0
                                                            ⊹
                                                      @nostalgique
                                                            ⊹
                                                                                                                                                  
    `)  

      console.log(`                                ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`)
      console.log(`                                                              ⊹                          `)
      console.log(`                                       [Account]     ${client.user.tag} à ${getNow().time}`);
      console.log(`                                                              ⊹                          `)
      console.log(`                                ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`)
      console.log(`                                                              ⊹                          `)

    const channel = await client.channels.fetch(process.env.CHANNEL_ID)
    
    async function bump() {

        await channel.sendSlash('302050872383242240', 'bump')
        console.count('bump sent')
    }

    function loop() {

        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            bump()
            loop()

        }, randomNum)
    }
    
    bump()
    loop()
})

client.login(process.env.TOKEN) /// connect to your acc via "src/.env"