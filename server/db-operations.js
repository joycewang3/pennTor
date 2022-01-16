const getUserByEmail = async (db, email) => {
  const query = "SELECT * FROM sys.user WHERE email=?";
  const params = [email];
  try {
    const [rows] = await db.execute(query, params);
    return rows;
  } catch (err) {
    throw new Error("Query error: get all players failed");
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



module.exports = {
  getUserByEmail, postMentor, postMentee
};
