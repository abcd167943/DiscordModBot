const config = require("../config/config");
const Discord = require("discord.js");

module.exports = {
	do: async function(params) {
		if (!params.message.member.roles.has(config.staffrole)) return params.message.channel.send("Nice try! :joy:");

		try {
			await params.message.channel.send("Der Bot fährt herunter...");

			process.exit();
		} catch(e) {
			params.message.channel.send(`ERROR: ${e.message}`);
		}
	}
}
