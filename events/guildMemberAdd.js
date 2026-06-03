module.exports = {
    name: "guildMemberAdd",

    async execute(client, member) {
        const channel = member.guild.channels.cache.get("1508179444114784336");
        await channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 10,
      "content": `<:wave:1511634264045916290> Welcome to **Klopp's Commissions**, thanks for joining. We hope you enjoy your stay here. You can order in our [services](https://discord.com/channels/1507161354111418488/1508179935552995349) channel.`
    },
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "type": 2,
          "label": `${member.guild.memberCount}`,
          "emoji": {
            "id": "1511634592807780372",
            "name": "person",
            "animated": false
          },
          "disabled": true,
          "flow": {
            "actions": []
          },
          "custom_id": "p_309231584773410818"
        },
        {
          "type": 2,
          "style": 5,
          "label": "Dashboard",
          "url": "https://discord.com/channels/1507161354111418488/1508176846829912164",
        }
      ]
    }
  ]
})
        member.client.user.setPresence({
            activities: [{
                name: `Looking After ${member.guild.memberCount.toLocaleString()} Members`,
                type: 3 // Watching
            }],
            status: "online"
        });
    }
};