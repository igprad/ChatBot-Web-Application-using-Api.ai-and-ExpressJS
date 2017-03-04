const fetch = require('node-fetch');
const uuid = require('uuid');

//ambil config.js
const config = require('./config');

//semacam intent
function askQuestion(question){
	const accessToken = config.apiai.accessToken;
	const endpoint= config.apiai.endpoint;
	const lang = config.apiai.lang;
	const sessionId = uuid.v4();
	//kirim akses token lewat headers HTTP dulu
	//header
	//body
	const fetchOptions={
		headers:{
			//template string 
			//di api ai membutuhkan Bearer #keyApiAiToken
			'Authorization': `Bearer ${accessToken}`,
		},
	};

	//param yaitu lang, sessionID, query

	// const url = 'https://api.api.ai/v1/query?lang='`${lang}`'&sessionID=1293&query=halo';
	const queryString = `lang=${lang}&sessionId=${sessionId}&query=${question}`;
	const url = `${endpoint}/query?${queryString}`;

	return fetch(url,fetchOptions);
};

//UNIT TEST

// const testRequest = askQuestion('create new task membeli istri baru');

//then itu fungsi ...
// testRequest
// 	.then(res => res.json())
// 	.then(json=> {
// 	console.log(json);
// 	});

module.exports={
	askQuestion,
};