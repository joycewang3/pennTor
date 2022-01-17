// assume we will have two object passed in, and we want to calculate the score between them:
//const mentor = {firstname, lastname, email, 1, matchingnum, country, language, major, frequency, interest, message, topic}
//const mentee = {firstname, lastname, email, 0, 1, country, language, major, frequency, interest, message, topic} 
function calculateCountry (mentor, mentee){
    return mentor.country===mentee.country?1:0;
}

function calculateLanguages (mentor, mentee){
    let score = 0;
    mentor.language.forEach(lang=>{
            if(mentee.language.includes(lang)){
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
            if(mentee.interest.includes(lang)){
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

function matchMentorsMentees(mentorArray, menteeArray){
    for(var i = 0; i<mentorArray.length; i++){
        mentorArray[i].interest = JSON.parse(mentorArray[i].interest);
        mentorArray[i].language = JSON.parse(mentorArray[i].language);
        mentorArray[i].topic = JSON.parse(mentorArray[i].topic);
    }
    for(var j = 0; j<menteeArray.length; j++){
        menteeArray[j].interest = JSON.parse(menteeArray[j].interest);
        menteeArray[j].language = JSON.parse(menteeArray[j].language);
        menteeArray[j].topic = JSON.parse(menteeArray[j].topic);
    }

    let mentorDict = {};
    let menteeDict = {};

    mentorArray.forEach((mentor)=>{
        mentorDict[mentor.iduser] = oneToMany(mentor, menteeArray);
    });
    menteeArray.forEach((mentee)=>{
        menteeDict[mentee.iduser] = oneToMany(mentee, mentorArray);
    });

    let combinedDict = {mentorDict, menteeDict};
    
    // call matching here
    let mentorPartnerDict = initPartnerDict(mentorArray);
    let menteePartnerDict = initPartnerDict(menteeArray);
    mentorMatch(mentorPartnerDict, menteePartnerDict, combinedDict);
    
    //calling api finalmatch
    const matchArray = [];
    mentorArray.forEach((mentor)=>{
        matchArray.push({mentorid: mentor.iduser, menteeid: mentorPartnerDict[mentor.iduser]});
    })
    console.log(matchArray);
    return matchArray;
   
}

function oneToMany (person, arr) {
    let map = {};
    let ans = arr.map((m)=>m.iduser);
    
    for (var i = 0; i < arr.length; i++) {
        const score = calculateTotalScore(person, arr[i]);
        map[arr[i].iduser] = score;
    }
    
    ans.sort((a, b) => map[b]-map[a]);

    return ans;
}

// helper function: initialize dictionary for mentorPartnerDict or menteePartnerDict (dictionary mapping person to partner)
// will either pass in mentorArr or menteeArr
function initPartnerDict (arr) {
    let partnerDict = {}
  
    for (var i = 0; i < arr.length; i++) {
      partnerDict[arr[i].iduser] = null;
    }
  
    return partnerDict;
  }
  
  // helper function: check if each mentor in mentorPartnerDict has a partner
  // pass in mentorPartnerDict or menteePartnerDict
function partnerStatus (partnerDict) {
    for (let key in partnerDict) {
      if (partnerDict[key] === null) {
        return false;
      }
    }
    return true;
}
  
  // helper function check if person is partnered
function isPartnered (person, partnerDict) {
    return partnerDict[person];
}
  
function mentorMatch (mentorPartnerDict, menteePartnerDict, combinedDict) {
    while (!partnerStatus(mentorPartnerDict)) { // while there is a mentor with no mentee
        for (let mentor in combinedDict.mentorDict) { // for each mentor
          for (let mentee of combinedDict.mentorDict[mentor]) {   // for each mentee
            const prtnr = isPartnered(mentee, menteePartnerDict); // check if mentee has partner
            if (prtnr !== null) { // if mentee has a partner
                if (combinedDict.menteeDict[mentee].indexOf(mentor) < combinedDict.menteeDict[mentee].indexOf(prtnr)) { // check if mentee prefers this mentor
                  mentorPartnerDict[prtnr] = null;
                  mentorPartnerDict[mentor] = mentee;
                  menteePartnerDict[mentee] = mentor;
                  break; 
                }
            } else { // mentee is not partnered, then pair them up
                mentorPartnerDict[mentor] = mentee;
                menteePartnerDict[mentee] = mentor;
                break; 
            }
          }
        }
    }
}

export {
    matchMentorsMentees,
}

