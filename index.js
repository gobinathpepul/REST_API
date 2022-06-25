const express = require("express"); //importing express
const app=express();
const PORT = 8080;

app.use(express.json());//Middleware

app.listen(PORT, () => console.log(`It's a alive on http://localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ Message: "We need a logo!" });
  }
  res.send({
    tshirt: `👕 with your ${logo} and ID oof ${id}`,
  });
});
