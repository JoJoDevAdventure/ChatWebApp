const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express(); // <-- Corrected this line

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name:username},
            {headers:{"private-key": "d80cf0a3-98f9-4216-87c7-aecabaeddd91"}},
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.data)
    }
});

const PORT = process.env.PORT || 3001; // <-- Added this line for better configuration
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});