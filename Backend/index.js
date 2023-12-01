const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express(); // <-- Corrected this line

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
    const { username } = req.body;
    const { secret } = req.body;

    try {
        const r = await axios.get(
            'https://api.chatengine.io/users/me/',
            {headers:{
                "Project-ID":"82804fee-ab84-4291-a0e1-aabb04324297",
                "User-Name":username,
                "User-Secret":secret
            }},
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