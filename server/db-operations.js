const getUserById = async (db, id) => {
  const query = "SELECT * FROM sys.user WHERE iduser=?";
  const params = [id];
  try {
    const [rows] = await db.execute(query, params);
    return rows;
  } catch (err) {
    throw new Error("Query error: get user failed");
  }
};

const postMentor = async (db, mentor) => {
  const query = "INSERT INTO sys.user (firstname, lastname, email, position, matchingnum, country, language, major, frequency, interest, message, topic) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const params = [mentor.firstName, mentor.lastName, mentor.email, 1, mentor.menteeCount, mentor.country, mentor.languages, mentor.major, mentor.frequency, mentor.selfDescriptors, mentor.message, mentor.subjects];
  try {
    const [row] = await db.execute(query, params);
    return row.insertId;
  } catch (err) {
    throw new Error(err.message);
  }
}

const postMentee = async (db, mentee) => {
  const query = "INSERT INTO sys.user (firstname, lastname, email, position, matchingnum, country, language, major, frequency, interest, message, topic) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const params = [mentee.firstName, mentee.lastName, mentee.email, 0, 1, mentee.country, mentee.languages, mentee.major, mentee.frequency, mentee.selfDescriptors, mentee.message, mentee.subjects];
  try {
    const [row] = await db.execute(query, params);
    return row.insertId;
  } catch (err) {
    throw new Error(err.message);
  }
}

const getMentees = async (db) => {
  const query = "SELECT * FROM sys.user WHERE position=0";
  try {
    const [rows] = await db.execute(query);
    return rows;
  } catch (err) {
    throw new Error(err.message);
  }
}

const getMentors = async (db) => {
  const query = "SELECT * FROM sys.user WHERE position=1";
  try {
    const [rows] = await db.execute(query);
    return rows;
  } catch (err) {
    throw new Error(err.message);
  }
}

const postMatches = async (db, matches) => {
  const query = "INSERT INTO sys.matched (mentorid, menteeid) VALUES(?, ?)";
  const params = [matches.mentorid, matches.menteeid];
  try {
    const [row] = await db.execute(query, params);
    return row.insertId;
  } catch (err) {
    throw new Error(err.message);
  }
}

const getAllMatches = async (db) => {
  const query = "SELECT sys.matched.mentorid, sys.matched.menteeid, mentor.firstname as mentorfirstname, mentor.lastname as mentorlastname, mentee.lastname as menteelastname, mentee.firstname as menteefirstname, mentor.email as mentoremail, mentee.email as menteeemail, mentor.message as mentormessage, mentee.message as menteemessage FROM sys.matched JOIN sys.user mentor ON mentor.iduser = sys.matched.mentorid JOIN sys.user mentee ON mentee.iduser = sys.matched.menteeid";
  try {
    const [rows] = await db.execute(query);
    return rows;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}


module.exports = {
  getUserById, postMentor, postMentee, getMentees, getMentors, postMatches, getAllMatches
};
