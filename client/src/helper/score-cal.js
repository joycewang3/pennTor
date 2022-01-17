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
// mentor
// 7: 9, 10
// 8: 10, 9

// mentee
// 9: 7, 8
// 10: 7, 8

// mentorPartnerDict = {7: 9, 8: null};
// menteePartnerDict = {9: 7, 10: null};

// combinedDict = { 
//     mentorDict = {
//         7: [9, 10],
//         8: [10, 9]
//     },
//     menteeDict = {
//         9: [7, 8],
//         10: [7, 8]
//     }
// }
// combinedDict = {mentorDict, menteeDict};
// menteeDict = {1 : [a, b, c, d], 2: [e,l, f, g, h, i]};
// mentorDict = {a: [1, 2, 3, 4], b: [5, 6, 7, 8]}
// combinedDict.menteeDict[mentee] = [a, b, c, d]

// combinedDict.mentorDict[mentor] --> a
// mentees --> [1, 2, 3, 4]
// mentee --> 1

// for.. of (array) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for.. in (object) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf




// function mentorToMentee () {
//     // mentor [     [mentor.id -> mentee.id] [mentor.id-> mentee.id] 
//      //           [ mentor.id->menteeid]
//        //       ]


//        mentorDictionary = {
//             mentor1 = [mentee1, mentee34, mentee2],
//             mentor6 = [mentee49, mentee39, mentee12],
//        }
//        menteeDictionary = {
//             mentee1 = [mentor1, mentor34, mentor2],
//             mentee6 = [mentor49, mentee39, mentee12],
//        }

    //partner field = 0;
    //order index = 0;
    // for (//each mentor) {
        // for (var i=0; i < mentorArray.length; i++){
        //if (mentorArray[i].partner === null) {
            //mentor.partner == mentorArray[i];
            //mentorArray[i].partner == mentor;
            //mentor.index == i;
//         } else if (indexOf(mentorArray[i].partner) < indexOf(partner)) {
            //mentor.partner == mentorArray[i];
            //mentor.index == i;
            //mentorArray[i].partner == 0;
//         } 
//
//     }
//     }
// }



// dic of dics
//{MR1: {ME1: 200, ME2: 300, ME3: 400}, 2:{1: 200, 2: 300, 3: 400}, 3:{1: 200, 2: 300, 3: 400}}
//{ME1: {MR1: 200, MR2: 403, }}

// [ [ME1, 200], [ME2, 300], [ME, 400]]

/*
 "men": {
    <m1>: [ <wx>, <wy>, ... ],
    <m2>: ...,
    ...
  },
  "women": {
    <w1>: [ <mx>, <my>, ... ],
    <w2>: ...,
    ...
  }
}

*/

// https://github.com/mgschoen/stable-marriage

//1. get data from db
//2. store data into mentor object and mentee object

//const mentor = {iduser:1, firstname:"xxxx", lastname:"xxxx", email, position:1, matchingnum, country, language, major, frequency, interest, message, topic}

module.exports = {
    matchMentorsMentees,
}

