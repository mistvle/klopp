module.exports = {
    name: "dashboard",

    async execute (message) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return;
        }

        const channel = message.guild.channels.cache.get("1508176846829912164");
        await channel.send({

  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1503255904743719043/1511581369732694072/image.png?ex=6a20f95a&is=6a1fa7da&hm=27cb6ebddd483783fde93622a5ea20fe8c2d3da7e4b1b1f242e753b4a0ec8112&=&format=webp&quality=lossless&width=550&height=183"
              }
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "Welcome to <:unknown:1508232616623738890> **Klopps Commissions!** We are a commissions server, specializing in cheap quality products! Feel free to browse around, and open a ticket if you need any support!"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 1,
          "components": [
            {
              "style": 2,
              "type": 2,
              "label": "Assistance",
              "emoji": {
                "id": "1511502626842476677",
                "name": "unknown",
                "animated": false
              },
              "custom_id": "help"
            },
            {
              "type": 2,
              "style": 5,
              "label": "Roblox Group",
              "emoji": {
                "id": "1507716857522815077",
                "name": "unknown",
                "animated": false
              },
              "url": "https://discohook.app/",
            },
            {
              "style": 2,
              "type": 2,
              "label": "Self Role",
              "emoji": {
                "id": "1511502983320440872",
                "name": "unknown",
                "animated": false
              },
              "disabled": true,
              "flow": {
                "actions": []
              },
              "custom_id": "p_309099330613022743"
            }
          ]
        },
        {
          "type": 1,
          "components": [
            {
              "type": 3,
              "custom_id": "information_menu",
              "options": [
                {
                  "label": "About Us",
                  "value": "about_us",
                  "description": "View our story here.",
                  "emoji": {
                    "id": "1511501901240205394",
                    "name": "unknown",
                    "animated": false
                  }
                },
                {
                  "label": "Discord Rules",
                  "value": "discord_rules",
                  "description": "View our Discord Rules here.",
                  "emoji": {
                    "id": "1511505240904438003",
                    "name": "unknown",
                    "animated": false
                  }
                },
                {
                  "label": "Terms of Serivice",
                  "value": "tos",
                  "description": "View out ToS here.",
                  "emoji": {
                    "id": "1507717051018514437",
                    "name": "unknown",
                    "animated": false
                  }
                }
              ],
              "min_values": 1,
              "max_values": 1
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1503255904743719043/1511582257553608734/image.png?ex=6a20fa2e&is=6a1fa8ae&hm=7326317cd441c5432d1148a385ea0059e7fd336738068eead528c188462ff46c&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ],

})
    }
}