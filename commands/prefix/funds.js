const axios = require("axios");

module.exports = {
  name: "funds",

  async execute(message) {
    if (message.author.bot) return;

    // ============== CONFIG ==============
    const GROUP_ID = "516364128";
    const ROBLOSECURITY = process.env.ROBLOX_COOKIE;
    // ====================================

    // ===== PERMISSIONS (ADMIN ONLY) =====
    const isAdmin = message.member.permissions.has("Administrator");

    if (!isAdmin) {
      return message.reply(
        "<:xmark:1511585286679822526> You do **not** have **permission** to use this command."
      );
    }

    if (!ROBLOSECURITY || !GROUP_ID) {
      return message.reply(
        "<:xmark:1511585286679822526> Bot is **not** configured correctly."
      );
    }

    const headers = {
      Cookie: `.ROBLOSECURITY=${ROBLOSECURITY}`
    };

    try {
      // ===== CURRENT FUNDS =====
      const currentFundsRes = await axios.get(
        `https://economy.roblox.com/v1/groups/${GROUP_ID}/currency`,
        { headers }
      );

      let pendingFunds = 0;

      try {
        // ===== PENDING FUNDS =====
        const pendingFundsRes = await axios.get(
          `https://economy.roblox.com/v1/groups/${GROUP_ID}/revenue/summary/Day`,
          { headers }
        );

        console.log("Revenue Summary:", pendingFundsRes.data);

        pendingFunds = pendingFundsRes.data.pendingRobux ?? 0;
      } catch (err) {
        console.log(
          "Failed to fetch pending funds:",
          err.response?.data || err.message
        );
      }

      const currentFunds = currentFundsRes.data.robux ?? 0;
      const totalFunds = currentFunds + pendingFunds;

      await message.reply({
        embeds: [
          {
            author: {
              name: "Group Funds"
            },
            color: 2303016,
            fields: [
              {
                name: "Current Funds",
                value: `**${currentFunds.toLocaleString()} ROBUX**`,
                inline: true
              },
              {
                name: "Incoming Funds",
                value: `**${pendingFunds.toLocaleString()} ROBUX**`,
                inline: true
              },
              {
                name: "Total Funds",
                value: `**${totalFunds.toLocaleString()} ROBUX**`,
                inline: true
              }
            ],
            image: {
              url: "https://media.discordapp.net/attachments/1503255904743719043/1511582257553608734/image.png?ex=6a2445ee&is=6a22f46e&hm=f5e91e2e960f1baa27835b9f6c57c43843b0f05c3e9451a03c791fb0879f8e5f&=&format=webp&quality=lossless"
            }
          }
        ]
      });
    } catch (error) {
      console.error(
        "FUNDS ERROR:",
        error.response?.data || error.message || error
      );

      await message.reply(
        "<:xmark:1511585286679822526> Failed to fetch **group** funds."
      );
    }
  }
};