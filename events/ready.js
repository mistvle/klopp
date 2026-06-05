const giveawayManager = require("../utils/giveawayManager");
const purchaseLogger = require("../utils/purchaseLogger");
module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);

    const guild = client.guilds.cache.get(process.env.GUILD_ID);

        client.user.setPresence({
            activities: [{
                name: `Looking After ${guild.memberCount.toLocaleString()} Members`,
                type: 3 // Watching
            }],
            status: "online"
        });

            giveawayManager.loadGiveaways(client);

    await purchaseLogger.startPurchaseLogger(client);

    

  }
};