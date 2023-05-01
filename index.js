const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`)   ;
})
