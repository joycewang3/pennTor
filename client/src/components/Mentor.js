import "../style/Mentor.css";
import { useState } from "react";
import { postMenter } from "../helper/fetchData";

const Mentor = ({ mentorForm, setComplete, setMentorForm, firstName, lastName, email }) => {
  const [country, setCountry] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [major, setMajor] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [menteeCount, setMenteeCount] = useState(null);
  const [selfDescriptors, setSelfDescriptors] = useState([]);
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    // call api to backend
    const mentor = { country, languages, major, frequency, subjects, menteeCount, selfDescriptors, message, firstName, lastName, email, };
    postMenter(mentor).then(() => {
      setComplete(true);
      setMentorForm(false);
    });
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleLanguages = (e) => {
    if (languages.indexOf(e.target.value) >= 0) {
      setLanguages(languages.filter((lg) => lg !== e.target.value));
    } else {
      setLanguages((languages) => [...languages, e.target.value]);
    }
    console.log(languages);
  };

  const handleMajor = (e) => {
    setMajor(e.target.value);
    console.log(e.target.value);
  };

  const handleFrequency = (e) => {
    setFrequency(e.target.value);
    console.log(e.target.value);
  };

  const handleSubjects = (e) => {
    if (subjects.indexOf(e.target.value) >= 0) {
      setSubjects(subjects.filter((sj) => sj !== e.target.value));
    } else {
      setSubjects((subjects) => [...subjects, e.target.value]);
    }
    console.log(subjects);
  };

  const handleMenteeCount = (e) => {
    setMenteeCount(e.target.value);
    console.log(menteeCount);
  };

  const handleSelfDescriptors = (e) => {
    if (selfDescriptors.indexOf(e.target.value) >= 0) {
      setSelfDescriptors(selfDescriptors.filter((sd) => sd !== e.target.value));
    } else {
      setSelfDescriptors((selfDescriptors) => [
        ...selfDescriptors,
        e.target.value,
      ]);
    }
    console.log(selfDescriptors);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  return (
    <>
      {mentorForm && (
        <div>
          <div className="findMentee">
            Answer the questions below to help us find your perfect mentee
            match!
          </div>
          <div className="country">
            <label className="question">
              What country do you consider home?
            </label>
            <br></br>
            <br></br>
            <select
              id="dropDownList"
              name="country"
              required
              onChange={handleCountry}
            >
              <option>select country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">
                Congo, Democratic Republic of the Congo
              </option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote D'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and Mcdonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">
                Macedonia, the Former Yugoslav Republic of
              </option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="CS">Serbia and Montenegro</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.s.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>

          <div className="language">
            <label className="question">
              What other languages are you able to provide mentorship in? (Note:
              Please ensure that you are fluent in the language as you will be
              expected to provide mentorship to a (likely) native speaker)
              *optional
            </label>
            <br></br>
            <br></br>
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="Chinese"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="Chinese">
              Chinese
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="Spanish"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="Spanish">
              Spanish
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="French"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="French">
              French
            </label>
            <br></br>
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="German"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="German">
              German
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="Arabic"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="Arabic">
              Arabic
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="checkbox"
              name="language"
              value="Portuguese"
              onChange={handleLanguages}
            />
            <label className="checkbox" for="Portuguese">
              Portuguese
            </label>
            &nbsp;&nbsp;
          </div>

          <div className="study">
            <label className="question">What did you study?</label>
            <br></br>
            <br></br>
            <select
              id="dropDownList"
              name="major"
              required
              onChange={handleMajor}
            >
              <option selected disabled> Select </option>
              <option value="Econ/Finance">Econ/Finance</option>
              <option value="Engineering">Engineering</option>
              <option value="Science">Science</option>
              <option value="Business">Business</option>
              <option value="Fine Art/Design">Fine Art/Design</option>
              <option value="Social Science">Social Science</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="frequency">
            <label className="question">
              How often can you meet with your mentee?
            </label>
            <br></br>
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency1"
              value="weekly"
            />
            <label
              className="checkbox"
              for="frequency1"
              value="weekly"
              onChange={handleFrequency}
            >
              Every week
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency2"
              value="biweekly"
              onChange={handleFrequency}
            />
            <label className="checkbox" for="frequency2">
              Every other week
            </label>
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency3"
              value="monthly"
              onChange={handleFrequency}
            />
            <label className="checkbox" for="frequency3">
              Every month
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency4"
              value="adhoc"
              onChange={handleFrequency}
            />
            <label className="checkbox" for="frequency4">
              Ad hoc
            </label>
            <br></br>
          </div>

          <div className="subjects">
            <label className="question">
              What subjects are you willing to provide mentorship around?
            </label>
            <br></br>
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency1"
              value="classes"
              onChange={handleSubjects}
            />
            <label className="checkbox" for="frequency1">
              Navigating classes
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency2"
              value="interviews"
              onChange={handleSubjects}
            />
            <label className="checkbox" for="frequency2">
              Prepping for interviews
            </label>
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency3"
              value="social"
              onChange={handleSubjects}
            />
            <label className="checkbox" for="frequency3">
              Staying social
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency4"
              value="career"
              onChange={handleSubjects}
            />
            <label className="checkbox" for="frequency4">
              Career options
            </label>
            <br></br>
          </div>

          <div className="numOfMentee">
            <label className="question">
              How many people are you willing to mentor?
            </label>
            <br></br>
            <br></br>
            <input
              type="radio"
              id="frequency"
              name="frequency"
              value="1"
              onChange={handleMenteeCount}
            />
            <label className="checkbox" for="frequency1">
              1
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="radio"
              id="frequency"
              name="frequency"
              value="2"
              onChange={handleMenteeCount}
            />
            <label className="checkbox" for="frequency2">
              2
            </label>
            &nbsp;&nbsp;
            <input
              type="radio"
              id="frequency"
              name="frequency"
              value="3"
              onChange={handleMenteeCount}
            />
            <label className="checkbox" for="frequency3">
              3
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="radio"
              id="frequency"
              name="frequency"
              value="4"
              onChange={handleMenteeCount}
            />
            <label className="checkbox" for="frequency4">
              4
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="radio"
              id="frequency"
              name="frequency"
              value="5"
              onChange={handleMenteeCount}
            />
            <label className="checkbox" for="frequency4">
              5
            </label>{" "}
            &nbsp;&nbsp;
          </div>

          <div className="interests">
            <label className="question">
              Select all the self-descriptors that apply
            </label>
            <br></br>
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency1"
              value="sports"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency1">
              Sports Fan
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency2"
              value="music"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency2">
              Musician
            </label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency3"
              value="social"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency3">
              Social butterfly
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency4"
              value="gardener"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Gardener
            </label>{" "}
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="pet"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Pet Owner
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="athlete"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Athlete
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="foodie"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Foodie
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="artist"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Artist
            </label>{" "}
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="health"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Health-nut
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="travel"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Traveler
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="bookworm"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Bookworm
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="beach"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Beach-lounger
            </label>{" "}
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="clown"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Class clown
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="gamer"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Gamer
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="history"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              History buff
            </label>{" "}
            &nbsp;&nbsp;
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="activist"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Activist
            </label>{" "}
            <br></br>
            <input
              type="checkbox"
              id="frequency"
              name="frequency5"
              value="parent"
              onChange={handleSelfDescriptors}
            />
            <label className="checkbox" for="frequency4">
              Parent
            </label>{" "}
            &nbsp;&nbsp;
          </div>

          <div className="message">
            <label className="question">
              Is there anything you would like to share with your mentees? :)
              (We will send a message to them!)
            </label>
            <br></br>
            <br></br>
            <input
              type="text"
              id="questionText"
              name="language"
              size="90"
              placeholder=":)))"
              required
              onChange={handleMessage}
            />
            {country !== null &&
              menteeCount !== null &&
              frequency !== null &&
              subjects.length !== 0 &&
              selfDescriptors.length !== 0 && (
                <button
                  type="submit"
                  value="submit"
                  className="submit"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              )}
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mentor;