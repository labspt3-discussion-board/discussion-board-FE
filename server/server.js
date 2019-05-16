const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.PORT || 3030;

server.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});
  
server.use('/', express.static(path.join(__dirname, '/../client/build')));

server.listen(PORT, () => {
	console.log(`Server listening on port ${ PORT }...`);
});