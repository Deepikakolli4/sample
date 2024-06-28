import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("June 24, 2023 11:13:00");
    const day = today.getDay();
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "it's time to take a break";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Your server is starting at port ${port}`);
});
