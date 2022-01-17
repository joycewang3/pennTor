// Create express app
const express = require("express");
require('dotenv').config();
const path = require("path");
const cors = require("cors");
const conn = require("./db-config");
const dbOperations = require("./db-operations");
const { Server } = require("http");
const Mailer = require('./mailing/Mailer');
const emailTemplate = require('./mailing/emailTemplate');

const webapp = express();
webapp.use(cors());
webapp.use(express.json());
webapp.use(
  express.urlencoded({
    extended: true,
  }),
);
webapp.use(express.static(path.join(__dirname, "../client/build")));
// Create connection and connect to host
let mysqldb;
// Root endpoint
// TODO: Will need to alter this for deployment

// TODO: define all endpoints as specified in REST API
webapp.get("/api/user/:id", async (req, res) => {
  try {
    const results = await dbOperations.getUserById(mysqldb, req.params.id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: "bad url" });
  }
});


webapp.post("/api/mentor", async (req, res) => {
  try {
    await dbOperations.postMentor(mysqldb, req.body).then(() => {
      res.status(201).json("sucessful");
    });
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
});

webapp.post("/api/matches", async (req, res) => {
  try {
    await dbOperations.postMatches(mysqldb, req.body).then(() => {
      res.status(201).json("sucessful");
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({ error: err.message });
  }
});

webapp.get("/api/matches", async (req, res) => {
  try {
    const results = await dbOperations.getAllMatches(mysqldb);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

webapp.get("/api/mentors", async (req, res) => {
  try {
    const results = await dbOperations.getMentors(mysqldb);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

webapp.get("/api/mentees", async (req, res) => {
  try {
    const results = await dbOperations.getMentees(mysqldb);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: "bad url" });
  }
});

webapp.post('/api/sendemails', async (req, res)=>{
  const {mentorfirstname, mentorlastname, menteefirstname, menteelastname, mentormessage, menteemessage, mentoremail, menteeemail} = req.body;
  const match = {
    subject:"MCIT Mentor/Mentee Mactching Result",
    menteeemail,
    mentoremail, 
    menteefirstname,
    mentorfirstname,
    menteelastname,
    mentorlastname,
    mentormessage,
    menteemessage
  };
  
  //send an email!
  const mailer = new Mailer(match, emailTemplate(match));
  try{
    await mailer.send();
    res.status(200).json("successful");
  }catch(err){
    console.log(err.message);
    res.status(422).json({error: err.message});
  }

});

/* webapp.get("/players", async (req, res) => {
  try {
    const results = await dbOperations.getAllPlayers(mysqldb);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: "bad url" });
  }
});

 webapp.post("/player", async (req, res) => {
  try {
    if (req.body.name === undefined || req.body.maxpoints === undefined) {
      res.status(400).json({ error: "invalid input, object invalid" });
      return;
    }
    const checkDup = await dbOperations.checkDuplicate(mysqldb, req.body.name);
    if (checkDup.length > 0) {
      res.status(409).json({ error: "the player already exists in the database" });
      return;
    }
    await dbOperations.addPlayer(mysqldb, req.body).then(async (result) => {
      const queryPlayer = await dbOperations.getPlayer(mysqldb, result);
      res.status(201).json(queryPlayer);
    });
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
});

webapp.get("/player/:id", async (req, res) => {
  try {
    const result = await dbOperations.getPlayer(mysqldb, req.params.id);
    if (result === undefined) {
      res.status(404).json({ error: "player not found" });
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

webapp.put("/player/:id", async (req, res) => {
  try {
    if (req.body.name === undefined || req.body.maxpoints === undefined) {
      res.status(400).json({ error: "invalid input, object invalid" });
      return;
    }
    await dbOperations.updatePlayer(mysqldb, req.params.id, req.body).then(async (result) => {
      if (Number(result) === 0) {
        res.status(404).json({ error: "player not found" });
      } else {
        const player = await dbOperations.getPlayer(mysqldb, req.params.id);
        res.status(200).json(player);
      }
    });
    return;
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

webapp.delete("/player/:id", async (req, res) => {
  try {
    const queryPlayer = await dbOperations.getPlayer(mysqldb, req.params.id);
    const result = await dbOperations.deletePlayer(mysqldb, req.params.id);
    if (Number(result) === 0) {
      res.status(404).json({ error: "player not found" });
      return;
    }
    if (result === 1) {
      res.status(200).json(queryPlayer);
    }
  } catch (err) {
    res.status(404).json({ error: "player not found" });
  }
});

webapp.get("/leaders/:n", async (req, res) => {
  try {
    if (req.params.n.match(/[^0-9]/i)) {
      res.status(400).json({ error: "bad url" });
      return;
    }
    const results = await dbOperations.getLeaders(mysqldb, req.params.n);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: "bad url" });
  }
}); */

// Default response for any other request


webapp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

webapp.use((_req, res) => {
  res.status(404);
});

// Start server
const port = process.env.PORT || 5000;
webapp.listen(port, async () => {
  mysqldb = await conn();
  console.log(`Server running on port:${port}`);
});

// for testing
module.exports = webapp;
