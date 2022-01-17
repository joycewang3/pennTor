const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail{
	constructor({subject, mentoremail, menteeemail}, content){
		super();
		
		this.sgApi = sendgrid(process.env.SENDGRID_API);
		this.from_email = new helper.Email('noreply.penntor@gmail.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses([mentoremail, menteeemail]);
		
		this.addContent(this.body);
		
		this.addRecipients();
		
	}	
	
	formatAddresses(recipients){
		return recipients.map((email) => {
			return new helper.Email(email);
		});
	}

	
	addRecipients(){
		const personalize = new helper.Personalization();
		this.recipients.forEach(recipients =>{
			personalize.addTo(recipients);
		});
		this.addPersonalization(personalize);
	}
	
	async send(){
		const request =  this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});
		
		const response = await this.sgApi.API(request);
		return response;
	}
}
	
module.exports = Mailer;

		// const mailer = new Mailer(survey, surveyTemplate(survey));
		// try{
		// 	await mailer.send();
		// 	await survey.save();
		// 	req.user.credits -= 1;
		// 	const user = await req.user.save();
		// 	res.send(user);
		// }catch(err){
		// 	res.status(422).send(err);
		// }