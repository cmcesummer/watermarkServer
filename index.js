const path = require("path");
const Koa = require("koa");

const app = new Koa();

app.use(require("koa-static")(path.join(__dirname, "./static")));

app.listen(9998, () => {
    console.log(`open at 9988`);
});