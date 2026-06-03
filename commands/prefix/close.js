const discordTranscripts = require("discord-html-transcripts");

module.exports = {
  name: "close",

  async execute(message) {

    const isAdmin = message.member.permissions.has("Administrator");
    const hasRole = message.member.roles.cache.has("1508186630618615899");

    if (!isAdmin && !hasRole) {
      return message.reply({
        content: "<:xmark:1511585286679822526> You do not have permission to run this command.",
        allowedMentions: { repliedUser: false }
      });
    }

    if (!message.channel.topic || !/^\d+(\|\d+)?$/.test(message.channel.topic)) {
      return message.reply({
        content: "<:xmark:1511585286679822526> You can only close a ticket channel.",
        allowedMentions: { repliedUser: false }
      });
    }

    try {

      const channel = message.channel;

      const [ownerId] = (channel.topic || "").split("|");

      const user = await message.client.users.fetch(ownerId).catch(() => null);

      // =========================
      // DM USER
      // =========================
      if (user) {
        await user.send({
          "flags": 32768,
          "components": [
            {
              "type": 17,
              "components": [
                {
                  "type": 10,
                  "content": "# <:bell:1511608062321098903> Ticket Closed"
                },
                {
                  "type": 10,
                  "content": "Your ticket in **Klopp's Commissions** has been closed. If you need further assistance, do not hesitate to contact us again. We hope you enjoyed your experience with our team."
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
        }).catch(() => {});
      }

      await message.delete().catch(() => {});

      await channel.send({
        "flags": 32768,
        "components": [
          {
            "type": 17,
            "components": [
              {
                "type": 10,
                "content": "<a:loading:1511607952845574178> Closing ticket..."
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

      // =========================
      // GET TICKET DETAILS
      // =========================
      const messages = await channel.messages.fetch({ limit: 10 });

      const panel = messages.find(m =>
  m.components?.[0]?.components?.some(c =>
    c.content?.includes("Ticket Details") ||
    c.content?.includes("Budget:")
  )
);

      let inquiry = "N/A";

      if (panel) {

        const textBlock = panel.components[0].components.find(c =>
  c.content?.includes("Ticket Details") ||
  c.content?.includes("Budget:")
);

        if (textBlock) {

          const content = textBlock.content;

          // GENERAL / ADMIN
          if (
            channel.name.startsWith("support-") ||
            channel.name.startsWith("aa-")
          ) {

            const lines = content.split("\n");

            const inquiryLine = lines.find(line =>
              line.includes("Inquiry:")
            );

            if (inquiryLine) {
              inquiry = inquiryLine.replace("- Inquiry:", "").trim();
            }
          }

          // IA
          if (channel.name.startsWith("ia-")) {

            const lines = content.split("\n");

            const callsign =
              lines.find(l => l.includes("Deputy Callsign:"))
              ?.replace("- Deputy Callsign:", "")
              ?.trim() || "N/A";

            const username =
              lines.find(l => l.includes("Deputy Username:"))
              ?.replace("- Deputy Username:", "")
              ?.trim() || "N/A";

            const reason =
              lines.find(l => l.includes("Reason:"))
              ?.replace("- Reason:", "")
              ?.trim() || "N/A";

            inquiry =
`Deputy Callsign: ${callsign}
Deputy Username: ${username}
Reason: ${reason}`;
          }
          if (channel.name.startsWith("order-")) {
    const orderBlock = panel?.components?.[0]?.components?.find(
        c => c.content?.includes("Budget:")
    );

    if (orderBlock) {
        const lines = orderBlock.content.split("\n");

        const budget =
            lines.find(l => l.includes("Budget:"))
            ?.replace("**Budget:**", "")
            ?.trim() || "N/A";

        const quantity =
            lines.find(l => l.includes("Quantity:"))
            ?.replace("**Quantity:**", "")
            ?.trim() || "N/A";

        const description =
            lines.find(l => l.includes("Description:"))
            ?.replace("**Description:**", "")
            ?.trim() || "N/A";

        inquiry =
`Budget: ${budget}
Quantity: ${quantity}
Description: ${description}`;
    }
}
        }
      }

      // =========================
      // TRANSCRIPT
      // =========================
      const attachment = await discordTranscripts.createTranscript(channel, {
        limit: -1,
        returnType: "attachment",
        filename: `transcript-${channel.id}.html`
      });

      const logChannel = message.guild.channels.cache.get("1508234986837512252");

      const embed = {
        title: "Ticket Closed",
        color: 4079169,
        image: {
          url: "https://media.discordapp.net/attachments/1503255904743719043/1511582257553608734/image.png?ex=6a20fa2e&is=6a1fa8ae&hm=7326317cd441c5432d1148a385ea0059e7fd336738068eead528c188462ff46c&=&format=webp&quality=lossless"
        },
        description:
`A ticket has been closed. Review information regarding it below.

**Channel Name:** ${channel.name}
**Channel ID:** ${channel.id}
**Inquiry:** ${inquiry || "N/A"}

**Opened By:** <@${ownerId}>
**Closed By:** ${message.author}`
      };

      await logChannel.send({
        embeds: [embed],
        files: [attachment]
      });

      setTimeout(async () => {
        await channel.delete().catch(() => {});
      }, 3000);

    } catch (err) {
      console.error(err);

      return message.reply({
        content: "<:tide_xmark:1508994577518952518> An error occurred.",
        allowedMentions: { repliedUser: false }
      });
    }
  }
};