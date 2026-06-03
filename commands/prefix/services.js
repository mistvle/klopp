module.exports = {
    name: 'services',

    async execute (message) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return;
        }
        await message.delete();
        const channel = message.guild.channels.cache.get("1508179935552995349");
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
                "url": "https://media.discordapp.net/attachments/1503255904743719043/1511581405837263018/image.png?ex=6a20f962&is=6a1fa7e2&hm=addaab972f8f07a12edd0bb26ad3f5628efe1706184c165bca821dce6dc18829&=&format=webp&quality=lossless"
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
          "content": "Welcome to <:unknown:1508232616623738890> **Klopps Commissions services.** Here you can open up a ticket and and we create your products! To begin, select below what you wish to order.  "
        },
        {
          "type": 1,
          "components": [
            {
              "style": 1,
              "type": 2,
              "label": "Order",
              "flow": {
                "actions": []
              },
              "custom_id": "order"
            },
            {
              "style": 2,
              "type": 2,
              "label": "Pricing",
              "custom_id": "pricing"
            },
            {
              "style": 2,
              "type": 2,
              "label": "Terms of Service",
              "custom_id": "order_tos"
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