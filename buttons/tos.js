module.exports = {
    customId: "order_tos",

    async execute (interaction) {
        return interaction.reply({
  "flags": 32832,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "## Terms of Service\nMust read if you are purchasing a product. Upon ordering, you will be asked to accept ToS. If you accept it, you agree to all of the below.\n\n`-` Refunds\n> We do not usually offer refunds. Only for exponential circumstances for example, your order is unable to be complete. Or it is agreed and authorised by the executive(s). if you do agree to a refund, then it has to be complete within 5 days, otherwise it is voided.\n`-` Purchasing Before Creation\n> For your order to begin, you need to pay the full price upfront. If you do not, then you will not receive your products and the ticket will be closed.\n`-` Time to Complete\n> Your order will be complete as soon as it can be. But, due to us being a commissions server, it means that orders are only complete by executives, so expect delay's. If you want to jump the queue, priority can be discussed with your designer.\n`-` References and Product Information\n> To make it easier for your designer, please provide all references, explanations of what you want and were you want it straight after opening the services ticket. This makes the process quicker and smoother.\n\nThank you for reading our ToS. Not everything here is listed though. Please use your common sense and open a support ticket if you have any questions."
        }
      ]
    }
  ]
})
    }
}