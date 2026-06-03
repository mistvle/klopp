module.exports = {
    name: 'cr',

    async execute (message, args) {
        const hasRole = message.member.roles.cache.has("1508186630618615899");
        const isAdmin = message.member.permissions.has("Administrator");
        if (!hasRole && !isAdmin) {
            return;
        }
        const [userId] = (message.channel.topic || "").split("|");
        const reason = args.join(" ");
        await message.delete();
        await message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `# <:bell:1511608062321098903> Close Request\n-# <@${userId}>`
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": `${message.author} has requested to close this ticket. Click the close button if there's nothing else we can assist you with. If you need further assistance, click keep open.`
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "style": 4,
              "type": 2,
              "label": "Close",
              "flow": {
                "actions": []
              },
              "custom_id": "crclose"
            },
            {
              "style": 3,
              "type": 2,
              "label": "Keep Open",
              "flow": {
                "actions": []
              },
              "custom_id": "keep_open"
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
  ]
})
    }
}