module.exports = {
    name: 'received',

    async execute (message, args) {
        const hasRole = message.member.roles.cache.has("1508186630618615899");
        const isAdmin = message.member.permissions.has("Administrator");
        if (!hasRole && !isAdmin) {
            return;
        }
        const amount = args[0];
        if (!amount) {
            return message.reply("<:xmark:1511585286679822526> Provide a valid integer for the amount.")

        }
        await message.delete();
        await message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `<:check:1511585270984736920> Payment verified of **R$${amount}.** Your order will begin shortly.`
        }
      ],
      "accent_color": 4050814
    }
  ]
})
    }
}