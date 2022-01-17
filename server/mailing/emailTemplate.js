module.exports = match => {
	return `
		<html>
			<body>
				<div style="text-align:center;">
					<h3>We found your mentor/mentee match !</h3>
					<p>Below are the details of your match</p>
                    <p>
                        <div>Mentor</div>
                        <div>${match.mentorfirstname} ${match.mentorlastname}</div>
                        <div>contact: ${match.mentoremail}</div>
                        <div>Message to my mentee: ${match.mentormessage}</div>
                    </p>
                    <p>
                        <div>Mentee</div>
                        <div>${match.menteefirstname} ${match.menteelastname}</div>
                        <div>contact: ${match.menteeemail}</div>
                        <div>Message to my mentor: ${match.menteemessage}</div>
                    </p>
				</div>
			</body>
		</html>
	`;
};