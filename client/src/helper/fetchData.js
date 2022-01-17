import axios from "axios";

async function postMenter(mentor){
    const result = await axios.post("/api/mentor", mentor);
    return result.data;
}

async function postMentee(mentee){
    const result = await axios.post("/api/mentee", mentee);
    return result.data;
}

async function getMentors(){
    const result = await axios.get("/api/mentors");
    return result.data;
}

async function getMentees(){
    const result = await axios.get("/api/mentees");
    return result.data;
}


async function postFinalMatch(matchDict) {
    try {
    //   const arr = [];
    //   await Promise.all(matchDict.map(async (match) => {
    //     const response = await axios.post("http://localhost:5000/api/matches", match);
    //     if (response.status !== 200) {
    //       throw new Error(response.statusText);
    //     }
    //     // const { data } = await response;
    //     arr.push(match);
    //   }));
    //   return arr;
    for(var i = 0;i<matchDict.length;i++){
        await axios.post("/api/matches", matchDict[i]);
    }

    } catch (error) {
      throw new Error(error.message);
    }
}


async function getFinalMatch(){
    const result = await axios.get("/api/matches");
    return result.data;
}

export {postMentee, postMenter, getMentees, getMentors, postFinalMatch, getFinalMatch};
