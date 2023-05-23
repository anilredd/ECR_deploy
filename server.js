const app = require("./src/app");

const port = process.env.PORT || 8000;

//errorHandler middleware
const errorHandler = require("./src/middleware/errorHandler");

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
