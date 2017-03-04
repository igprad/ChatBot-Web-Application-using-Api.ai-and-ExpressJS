const express = require('express');
const bodyParser = require('body-parser');

const apiai = require('./apiai');
const task = require('./task');

const app = express();
const PORT = 8080;

//ini harus reset server node.js
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
app.post('/',(req,res)=>{
	// res.send('Halo Dunia');
	const question = 'create new task membeli istri baru';
	const question2 = 'my task';
	const question3 = 'please delete task 2';
	const question4 = "about";

	//question dari json body
	const questionFromJson =  req.body.question;

	const request = apiai.askQuestion(questionFromJson);

	//memparsing string -> json
	request
		.then(res => res.json()) //parsing string -> json
		.then(json=>{ //memberi respon dengan json
			// res.json(json);
			const result = json.result;

			switch (result.metadata.intentName) {
				case 'create.task':
					const taskName = result.parameters.text;
					task.create(taskName);
					res.send(result.speech);
				break;
			
				case 'show.task':
					const taskList = task.get();

					taskList.join(', ');
					console.log(taskList);
					res.send(result.speech+": "+taskList);
				break;
		
				case 'delete.task':
					const number = result.parameters.number;
					task.remove(number);
					res.send(result.speech);
				break;

				default:
					res.send(result.speech);
				break;
			}
		});
});

//setport server
app.listen(PORT,()=>{
	console.log('App run at 127.0.0.1:${PORT}');
});