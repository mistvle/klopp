module.exports = {
    name: 'completed',

    async execute (message) {
        if (!message.member.permissions.has("Administrator")) {
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
          "content": "# <:m_Heart:1512143930102124684> Order Completed"
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
          "content": "Your order has been completed. Thank you for ordering with **Klopp's Comissions**. We hope to see you return in the future if you need more embeds or features. Ensure to refer us as your embed builder, and to give credits when needed."
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
              "label": "Completed",
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
});


    }
}