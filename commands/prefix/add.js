module.exports = {
    name: "add",

    async execute(message, args) {
        const user =
            message.mentions.users.first() ||
            await message.client.users.fetch(args[0]).catch(() => null);

        if (!user) {
            return message.reply("<:xmark:1511585286679822526> Please provide a valid user.");
        }

        await message.channel.permissionOverwrites.edit(user.id, {
            ViewChannel: true,
            SendMessages: true,
            AttachFiles: true,
            EmbedLinks: true
        });

        message.reply(`<:check:1511585270984736920> **Successfully** added ${user} to the ticket.`);
    }
};