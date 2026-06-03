const { SlashCommandBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Leave a review for your recent order experience.")
    .addUserOption(option => option
        .setName("designer")
        .setDescription("Select the designer of your order.")
        .setRequired(true)

    )
    .addStringOption(option => option
        .setName("product")
        .setDescription("Select the product you ordered.")
        .addChoices(
            {name: "Liveries", value: "Liveries"},
            {name: "Clothing", value: "Clothing"},
            {name: "Discord", value: "Discord"},
            {name: "Graphics", value: "Graphics"},
            {name: "Bot", value: "Bot"}
        )
        .setRequired(true)

    )
    .addStringOption(option => option
        .setName("rating")
        .setDescription("Select the rating of your order.")
        .addChoices(
            {name: "⭐", value: "⭐"},
            {name: "⭐⭐", value: "⭐⭐"},
            {name: "⭐⭐⭐", value: "⭐⭐⭐"},
            {name: "⭐⭐⭐⭐", value: "⭐⭐⭐⭐"},
            {name: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐"}

        )
        .setRequired(true)

    )
    
    .addStringOption(option => option
        .setName("feedback")
        .setDescription("Input feedback for your order.")
        .setRequired(true)

    ),

    async execute (interaction) {
        const isClient = interaction.member.roles.cache.has("1508185576367456408");
        const isAdmin = interaction.member.permissions.has("Administrator");
        if (!isClient && !isAdmin) {
            return interaction.reply({content: "<:xmark:1511585286679822526> You must be a client to be able to leave a review.", flags: 64})
        }
        const designer = interaction.options.getUser("designer");
        const product = interaction.options.getString("product");
        const rating = interaction.options.getString("rating");
        const feedback = interaction.options.getString("feedback");

        const channel = interaction.guild.channels.cache.get("1508990128218046566");
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
                "url": "https://media.discordapp.net/attachments/1503255904743719043/1511581506433187900/image.png?ex=6a20f97a&is=6a1fa7fa&hm=7ffc796e7ef036b73a7cf5c13e3afe51fbb8e7fda57fcde1bec782e8c1e014e3&=&format=webp&quality=lossless&width=550&height=183"
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
          "content": `${interaction.user} is the client of this order.\n\n**Designer:** ${designer}\n**Product:** ${product}\n**Rating:** ${rating}\n**Feedback:** ${feedback}\n\nThanks for ordering with **Tide Creations**. We hope you enjoyed your order experience, and we hope to see you again.`
        }
      ]
    }
  ]
});
    await interaction.reply({content: "<:check:1511585270984736920> **Successfully** sent review. Thanks for ordering with **Klopp's Commissions**.", flags: 64})
    }

}