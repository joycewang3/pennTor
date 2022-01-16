import axios from "axios";

export async function postMenter(mentor){
    const result = await axios.post("/api/mentor", mentor);
    return result.data;
}

export async function postMentee(mentee){
    const result = await axios.post("/api/mentee", mentee);
    return result.data;
}