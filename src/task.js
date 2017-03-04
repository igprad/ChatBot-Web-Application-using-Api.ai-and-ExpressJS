const lowdb = require('lowdb');

const db = lowdb();

const initialData = {
	tasks:[],
};

//set ini 
//write untuk nulis ke database
db.defaults(initialData).write();

//create
function create(newTask){
	db.get('tasks')
		.push(newTask)
		.write();
};

//get
function get(){
	return db.get('tasks').value();
};

//remove
function remove(numberOfTask){
	db.get('tasks')
	//functional , memfilter data sesuai urutan, n = indeks, task = data.
		.remove((task,n) => n === numberOfTask-1) 
		.write();
};

// //tes show get saja
// console.log('\nInitial Data');
// console.log('Task list');
// console.log(get());

// //tes create tasks
// console.log('\nTest Add : added makan indomie and makan sarimie')
// create('Makan indomie')
// create('Makan sarimie')
// console.log('Task list');
// console.log(get());

// //tes remove tasks
// console.log('\nTest remove : remove makan sarimie')
// remove(2);
// console.log('Task list');
// console.log(get());

module.exports = {
	create,
	get,
	remove,
};
