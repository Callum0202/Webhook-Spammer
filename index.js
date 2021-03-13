const request = require('request');
const Timeout = require('await-timeout');

const webhookurl = "https://discordapp.com/api/webhooks/622910304791167016/fvQwZ261fm71ktHNp1SCxDrGqB1OOMSjjchOntcZgmTouM00TsidgYQJE-LeMHY8FDHt"

async function run() {

	for (let a = 0; a < 100; a++) {
		request({
			method: "POST",
			url: webhookurl,
			headers: {
				"Content-Type": "application/json"
			},
			json: {
				"content": "@everyone THIS IS A SCAM SERVER. NOTIFICATION COURTESY OF @NOTIFY STAFF ."
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