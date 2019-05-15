const express = require('express');
const server = express();
const PORT = 3030 || process.env.PORT;

server.listen(PORT, () => {
	console.log(`Server listening on port ${ PORT }...`);
});