module.exports = {
    customId: "pricing",

    async execute (interaction) {
        return interaction.reply({
  "username": "Klopps Commissions",
  "avatar_url": "https://cdn.discordapp.com/emojis/1508232616623738890.webp?size=240",
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# <:unknown:1511491360744669357> **Pricing**\nAt <:unknown:1508232616623738890> **Klopps Commissions** believe in reasonable pricing, while ensuring we produce quality products. Pricing is done based on the complexity of what you would like, but we always try and keep it as affordable as possible.\n"
        }
      ]
    },
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# <:unknown:1408923523581476934> Accepted Payments\nCurrently we are only accepting <:unknown:1408923523581476934> **Robux.** As we expand in the future, we will look to switching to a wider variety of payment types, which are tax free as Roblox's 30% tax doesn't help. "
        }
      ]
    }
  ],
  "author": {
    "icon_url": "https://cdn.discordapp.com/emojis/1508232616623738890.webp?size=240",
    "name": "Klopps Commissions"
  }
})
    }
}