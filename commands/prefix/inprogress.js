module.exports = {
    name: 'inprogress',

    async execute (message) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return;

    }

        await message.delete();
        const [userId] = (message.channel.topic || "").split("|");
        await message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# <:m_Heart:1512143930102124684> Order In-Progress"
        },
        {
          "type": 10,
          "content": `-# <@${userId}>`
        },
        {
          "type": 14,
          "divider": true,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "Your payment has been verified & your order is now in progress. If you need any additional features, ensure to let Klopp know. Additionally, if you have any questions, ensure to ask promptly. Thank you for ordering with **Klopp's Commissions**, & we hope you have an enjoyable order experience."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "style": 1,
              "type": 2,
              "label": "In Progress",
              "disabled": true,
              "flow": {
                "actions": []
              },
              "custom_id": "p_308636898354532355"
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
                "url": "https://media.discordapp.net/attachments/1503255904743719043/1511582257553608734/image.png?ex=6a22f46e&is=6a21a2ee&hm=050b4effb932b4fd8cdce8869ac7c5ce88c7cbd4cce49eadeb0f576b2afcea68&=&format=webp&quality=lossless"
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