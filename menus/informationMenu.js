module.exports = {
    customId: "information_menu",

    async execute (interaction) {
        const value = interaction.values[0];

        if (value === "about_us") {
            return interaction.reply({
  "flags": 32832,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "Welcome to <:KC:1508232616623738890> Klopps Commissions! We were founded by <@1091720910135889990> on May 24, 2026. We are a server who strive in creating quality, and affordable products for all of our customer's. If you need any embeds made, feel free to open a service's ticket, if you need get a rough price as well. Thanks for joining us!"
        }
      ]
    }
  ]
});


        }

        if (value === "discord_rules") {
            return interaction.reply({
  "flags": 32832,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "`1.` Remain Respectful\n> We ask our community members to remain respectful towards others at all times. You are expected to remain respectful at all times.\n`2.` Causing Drama\n> Please refrain from causing drama. This includes not arguing in public chats. \n`3.` Common Sense\n> Please use common sense at all times. Don't do anything that will obviously get you into trouble or violates some of our rules.\n`4.` Alt Accounts\n> If you are found using an Alt Account, it will be automatically banned and your main account will also be banned.\n`5.` Advertising\n> Any advertising of any other server, be that in a public channel or through DM's will result in an automatic ban which is unappealable. This is treated as member theft.\n`6.` Privacy\n> Please respect everyone's privacy, do not share any sensitive or personal user information for anyone, including yourself.\n`7.` Discord ToS\n> Please follow Discord ToS at all times this can be found here\n`8.` Stealing\n> Stealing members personal designs and works is not permitted at all and will be heavily moderated. Please only use YOUR work.\n`9.` Respect Our Staff\n> They are here to help you in any case, whether that be present in a ticket or in general chat. Do not disrespect them or there will be consequences.\n`10.` Correct Channel Usage\n> Use channels for their intended use. For example, media should not be sent in ⁠general, bot commands should be done in ⁠commands etc.\n`11.` Have Fun!\n> This server is basically a hub to hang out with friends, get stuff you want for good prices, etc! This should be a place to connect with people, collaborate, do things with the people in here!"
        }
      ]
    }
  ]
})
        }
        if (value === "tos") {
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
}