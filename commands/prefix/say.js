module.exports = {
    name: 'say',

    async execute (message, args) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return;
        }
        const text = args.join(" ")
        await message.delete();
        await message.channel.send(text)
    }
}