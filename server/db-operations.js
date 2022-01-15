const getAllPlayers = async (db) => {
  const query = "SELECT * FROM celebrity.players";
  try {
    const [rows] = await db.execute(query);
    return rows;
  } catch (err) {
    throw new Error("Query error: get all players failed");
  }
};

const addPlayer = async (db, newPlayer) => {
  const query = "INSERT  INTO celebrity.players (name , points, maxpoints) VALUES(?, ?, ?)";
  const params = [newPlayer.name, newPlayer.points, newPlayer.maxpoints];
  try {
    const [row] = await db.execute(query, params);
    return row.insertId;
  } catch (err) {
    throw new Error("Error: add player failed");
  }
};

const getPlayer = async (db, playerId) => {
  const query = "SELECT * FROM celebrity.players WHERE id=?";
  try {
    const [rows] = await db.execute(query, [playerId]);
    return rows[0];
  } catch (err) {
    throw new Error("Query error: get player failed");
  }
};

const updatePlayer = async (db, playerId, player) => {
  const query = "UPDATE celebrity.players SET name=?, points=?, maxpoints=? WHERE id=?";
  const params = [player.name, player.points, player.maxpoints, playerId];
  try {
    const [row] = await db.execute(query, params);
    return row.affectedRows;
  } catch (err) {
    throw new Error("Error: update player failed");
  }
};

const deletePlayer = async (db, playerId) => {
  const query = "DELETE FROM celebrity.players WHERE id=?";
  try {
    const [row] = await db.execute(query, [playerId]);
    return row.affectedRows;
  } catch (err) {
    throw new Error("Error: delete player failed");
  }
};

const getLeaders = async (db, n) => {
  const query = "SELECT * FROM celebrity.players ORDER BY maxpoints DESC LIMIT ?";
  try {
    const [rows] = await db.execute(query, [n]);
    return rows;
  } catch (err) {
    throw new Error("Query error: get leaders failed");
  }
};

const checkDuplicate = async (db, name) => {
  const query = "SELECT * FROM celebrity.players WHERE name=?";
  try {
    const [rows] = await db.execute(query, [name]);
    return rows;
  } catch (err) {
    throw new Error("Query error: check duplicate failed");
  }
};

module.exports = {
  getAllPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer, getLeaders, checkDuplicate,
};
