module.exports = {
    name: 'group',

    async execute (message) {
        return message.reply({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "Join our **ROBLOX** group below"
        },
        {
          "type": 1,
          "components": [
            {
              "type": 2,
              "style": 5,
              "label": "Group",
              "url": "https://www.roblox.com/communities/516364128/Klopps-Commissions#!/about",
            }
          ]
        }
      ]
    }
  ]
})
    }
}