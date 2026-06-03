module.exports = {
    name: 'tax',

    async execute (message, args) {
        const amount = args[0];
        if (!amount) {
            return message.reply("<:xmark:1511585286679822526> Please provide a valid integer to calculate Roblox tax with.")
        }
        const charge = Math.round(amount * 1.3);

        await message.reply({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `To receive **R$${amount}**, you must charge **R$${charge}**.`
        }
      ]
    }
  ]
})

    }
}