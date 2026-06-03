const { SlashCommandBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("log")
    .setDescription('log stuff')
    .addSubcommand(subcommand => subcommand
        .setName("order")
        .setDescription("Log an order.")
        .addUserOption(option => option
            .setName("client")
            .setDescription("Select the client of the order.")
            .setRequired(true)

        )
        .addChannelOption(option => option
            .setName("ticket")
            .setDescription("Select the order ticket.")
            .setRequired(true)
        )
        .addIntegerOption(option => option
            .setName("amount_paid")
            .setDescription("Input the amount paid (whole number only, do not include 'ROBUX' or '$'.")
            .setRequired(true)

        )
        .addStringOption(option => option
            .setName('product')
            .setDescription("Select the product the customer ordered.")
            .addChoices(
                {name: "Embeds", value: "Embeds"}

            )
            .setRequired(true)


        )
    ),

    async execute (interaction) {
        const isAdmin = interaction.member.permissions.has("Administrator")
        if (!isAdmin) {
            return interaction.reply({content: "<:xmark:1511585286679822526> You do not have permission to run this command.", flags: 64})
            

        }
        const client = interaction.options.getUser('client');
        const ticket = interaction.options.getChannel('ticket');
        const amount_paid = interaction.options.getInteger('amount_paid');
        const product = interaction.options.getString('product');
        const member = await interaction.guild.members.fetch(client.id)
        const amount_received = Math.round(amount_paid * 0.7);
        await member.roles.add("1508185576367456408");

        const channel = interaction.guild.channels.cache.get("1508235004835008614");
        await channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# Order Log"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": `${client} is the client of this order.\n\n**Ticket:** ${ticket}\n**Amount Paid:** ${amount_paid} R$\n**Amount Received:** ${amount_received} R$\n**Product:** ${product}\n-# This order was logged by ${interaction.user}.`
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
});
    await interaction.reply({
    content: "<:check:1511585270984736920> **Successfully** logged order.",
    flags: 64
});
    }
}