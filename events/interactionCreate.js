module.exports = {
  name: "interactionCreate",

  async execute(client, interaction) {
    try {
      if (interaction.isChatInputCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (cmd) await cmd.execute(interaction);
      }

      if (interaction.isButton()) {

        console.log("BUTTON CLICKED:", interaction.customId);

        const btn =
          client.buttons.get(interaction.customId) ||
          [...client.buttons.values()].find(button =>
            interaction.customId.startsWith(button.customId)
          );

        console.log("BUTTON FOUND:", !!btn);

        if (btn) {
          await btn.execute(interaction);
        }
      }

      if (interaction.isStringSelectMenu()) {
        const menu = client.menus.get(interaction.customId);
        if (menu) await menu.execute(interaction);
      }

      if (interaction.isModalSubmit()) {
        const modal = client.modals.get(interaction.customId);
        if (modal) await modal.execute(interaction);
      }

    } catch (err) {
      console.error(err);

      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "<:xmark:1511585286679822526> An error occurred.",
          flags: 64
        }).catch(() => {});
      }
    }
  }
};