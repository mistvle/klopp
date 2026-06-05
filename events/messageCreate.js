module.exports = {
  name: "messageCreate",

  async execute(client, message) {
    console.log("MESSAGE EVENT FIRED");
    console.log("MESSAGE RECEIVED:", message.content);
    if (message.author.bot) return;
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const cmd = client.prefixCommands.get(cmdName);

console.log("Command name:", cmdName);
console.log("Commands loaded:", client.prefixCommands.size);
console.log("Command found:", !!cmd);

if (!cmd) return;

    try {
      await cmd.execute(message, args);
    } catch (err) {
      console.error(err);
    }
  }
};