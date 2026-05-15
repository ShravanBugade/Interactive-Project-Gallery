const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/pending-list", (req, res) => {
  const cif = req.query.cif;
console.log(`Received request for CIF: ${cif}`);
 
const random = Math.random();

if (cif === "CIF001") {
  return res.status(400).json({
    status: "FAILURE",
    error: "Server error"
  });
}
else if (cif === "CIF002") {
   return res.json({
      status: "EMPTY",
      data: []
    });
}else{

  return res.json({
    status: "SUCCESS",
    data: [
      { id: 1, cif, name: "Account A", amount: 5000 },
      { id: 2, cif, name: "Account B", amount: 12000 },
      { id: 3, cif, name: "Account C", amount: 12000222 }
    ]
  });
}
/*
  // FAILURE
  if (random < 0.3) {
    return res.status(500).json({
      status: "FAILURE",
      error: "Server error"
    });
  }

  // EMPTY
  if (random < 0.6) {
    return res.json({
      status: "EMPTY",
      data: []
    });
  }
*/
  // // SUCCESS
  // return res.json({
  //   status: "SUCCESS",
  //   data: [
  //     { id: 1, cif, name: "Account A", amount: 5000 },
  //     { id: 2, cif, name: "Account B", amount: 12000 },
  //     { id: 3, cif, name: "Account C", amount: 12000222 }
  //   ]
  // });
});

app.listen(3000, () => console.log("Server running"));