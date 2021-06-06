const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1215186",
    key: "1ff29638bf146f0e5c16",
    secret: "e6e4a19f2ca843c11d35",
    cluster: "ap2",
    useTLS: true
});


const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('listening to port 8000');
app.listen(8000)
