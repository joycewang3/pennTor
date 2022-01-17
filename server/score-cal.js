// assume we will have two object passed in, and we want to calculate the score between them:
const mentor = {firstname, lastname, email, 1, matchingnum, country, language, major, frequency, interest, message, topic}
const mentee = {firstname, lastname, email, 0, 1, country, language, major, frequency, interest, message, topic} 


function calculateCountry (mentor, mentee){
    return mentor.country===mentee.country?1:0;
}

function calculateLanguages (mentor, mentee){
    let score = 0;
    mentor.languages.forEach(lang=>{
            if(mentee.languages.includes(lang)){
                score+=1;
            }
    })
    return score;
}

function calculateFrequency( mentor,mentee){
    return mentor.ffrequency===mentee.frequency?1:0;
}

function calculateMajor (mentor, mentee) {
    return mentor.major===mentee.major?1:0;
}

function calculateInterests (mentor, mentee){
    let score = 0;
    mentor.interest.forEach(lang=>{
            if(mentee.interest.includes(interest)){
                score+=1;
            }
    })
    return score;
}

function calculateTopic (mentor, mentee){
    let score = 0;
    mentor.topic.forEach(topic=>{
            if(mentee.topic.includes(topic)){
                score+=1;
            }
    })
    return score;
}

function calculateTotalScore (mentor, mentee) {
    return calculateCountry(mentor, mentee) + calculateLanguages(mentor, mentee) + calculateFrequency(mentor, mentee) + calculateMajor(mentor, mentee) + calculateInterests(mentor,mentee) + calculateTopic(mentor,mentee);
}

module.exports = {
    
}
