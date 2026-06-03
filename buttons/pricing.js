module.exports = {
    customId: "pricing",

    async execute (interaction) {
        return interaction.reply({
  "flags": 32832,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "- Simple Embeds: 60R$ each\n- Advanced Embeds: 80R$ - 100R$ each\n-# Pricing depends on your order complexity, budget, and quantity. More information will be provided to you upon opening a ticket."
        }
      ]
    }
  ]
})
    }
}