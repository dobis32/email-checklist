const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/dist'));

app.get('*', async (req, res) => {
	res.sendFile(__dirname + '/dist/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App listening on ${PORT}`);
});
