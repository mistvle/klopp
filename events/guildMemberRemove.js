module.exports = {
    name: "guildMemberRemove",

    async execute(member) {
        member.client.user.setPresence({
            activities: [{
                name: `Looking After ${member.guild.memberCount.toLocaleString()} Members`,
                type: 3 // Watching
            }],
            status: "online"
        });
    }
};