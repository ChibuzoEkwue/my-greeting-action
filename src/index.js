import * as core from "@actions/core";

async function run() {
	try {
		const name = core.getInput("name") || "World";
		const time = new Date().toLocaleTimeString();
		const greeting = `Hello, ${name}! The time is ${time}`;
		core.setOutput("greeting", greeting);
	} catch (error) {
		core.setFailed(error.message);
	}
}

run();
