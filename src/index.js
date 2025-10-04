import * as core from "@actions/core";

const run = async () => {
	try {
		const name = core.getInput("name") || "World";
		const time = new Date().toLocaleString("en-US", {
			timeZone: "Africa/Lagos",
		});
		const greeting = `Hello, ${name}! The time is ${time}`;
		core.setOutput("greeting", greeting);
	} catch (error) {
		core.setFailed(error.message);
	}
};

run();
