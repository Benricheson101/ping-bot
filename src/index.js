const { Client, Collection } = require("discord.js");
const triggers = require("./setup");
const client = new Client();
const setup = new Collection(triggers);
const cooldowns = new Collection();

client.on("ready", () => console.log(`Online as ${client.user.tag}`))

client.on("message", async (message) => {
    if (message.author.id === message.guild.me.id) return;
    const config = setup.get(message.author.id);

    if (!config) return;
    if (config.channel && message.channel.id !== config.channel) return;

    const now = Date.now();

    if (config.cooldown) {

        if (!cooldowns.has(message.author.id)) cooldowns.set(message.author.id, now);

        const expirationTime = cooldowns.get(message.author.id);

        if (expirationTime > now) return;
    }

    const str = config.message
        .replace(/{{role}}/g, config.roles.map((i) => `<@&${i}>`).join(" "));

    let roles = config.roles.map((r) => message.guild.roles.cache.get(r));

    for (let role of roles) await role.setMentionable(true, "Pinging...")


    await message.channel.send(str)

    for (let role of roles) await role.setMentionable(false, "Setting role back to unpingable...");

    if (author.cooldown) {
        cooldowns.set(message.author.id, now + (config.cooldown * 1000));
        setTimeout(() => {
            cooldowns.delete(message.author.id);
        }, config.cooldown * 1000);
    }
})

client.login(process.env.TOKEN);