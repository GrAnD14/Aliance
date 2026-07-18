const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [{
        id: 1,
        name: "Даниил",
        text: "Здравствуйте!"
    },

    {
        id: 2,
        name: "Кузя",
        text: "Пока"
    },

    {
        id: 3,
        name: "Зина",
        text: "Хорошо"
    }


];


// GET запрос
app.get("/users", (req, res) => {
    res.json(users);
});


// POST запрос
app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        
    };

    users.push(user);

    res.json(user);
});


app.listen(3000, () => {
    console.log("Backend запущен на 3000 порту");
});