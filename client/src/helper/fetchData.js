import axios from "axios";

async function postMenter(mentor){
    const result = await axios.post("http://localhost:5000/api/mentor", mentor);
    return result.data;
}

async function postMentee(mentee){
    const result = await axios.post("http://localhost:5000/api/mentee", mentee);
    return result.data;
}

async function getMentors(){
    const result = await axios.get("http://localhost:5000/api/mentors");
    return result.data;
}

async function getMentees(){
    const result = await axios.get("http://localhost:5000/api/mentees");
    return result.data;
}

export {postMentee, postMenter, getMentees, getMentors};
