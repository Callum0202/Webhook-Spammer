const request = require('request');
const Timeout = require('await-timeout');

const webhookurl = "https://discordapp.com/api/webhooks/.."

async function run() {

	for (let a = 0; a < 100; a++) {
		request({
			method: "POST",
			url: webhookurl,
			headers: {
				"Content-Type": "application/json"
			},
			json: {
				"content": "@everyone txm on ya forehead"
			}
		}, (err, res, body) => {
			if (err) console.error(err);
			else {
				console.log(body);
			}
		});
		await Timeout.set(1000);
	}
}

run();