const logUpdate = require('log-update');
const { prompt } = require('enquirer');

const colours = require('./colours.json');
const incorrectThreshold = 3;

function gameRenderer(state) {
	logUpdate(state.render.join(' '));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

const schema = {
	type: 'input',
	name: 'letter',
	message: 'Enter Letter',

	validate: (input) =>  {
		if(input.length != 1) return 'Invalid input Length';
		if(/[^A-Za-z]/.test(input)) return 'Non-letter characters found'
		return true;
	},
  }

async function gameLoop(state) {
	gameRenderer(state);
	if(state.question.length == state.correct) return victory();
	if(incorrectThreshold == state.incorrect) return loss(state);
	const answer = (await prompt(schema)).letter;
	if(state.question.includes(answer)) {
		const indexes = allIndexes(state.question, answer);
		state.correct += indexes.length;
		for(const i of indexes) {
			state.render[i] = answer.toUpperCase();
		}
	} else {
		state.incorrect++;
		logUpdate();
	}
	gameLoop(state);
	
}

function victory() {
	logUpdate.done();
	console.log('You won!');
}

function loss(state) {
	let out = '';
	for(const i of state.question) {
		out += i.toUpperCase() + ' ';
	}
	out = out.slice(0, -1);
	logUpdate(out);
	logUpdate.done();
	console.log('Haha nob u lost!')
}

function allIndexes(string, char) {
	const arr = [];
	let last = 0, i = 0;
	while(last != -1) {
		last = string.indexOf(char, last + i);
		if(last != -1) arr.push(last);
		if(i == 0) i++;
	}
	return arr;
}

function main() {
	const choice = colours[getRandomInt(0, colours.length - 1)];
	console.log("Welcome, your question has", choice.length, "characters, you have 3 lifes to guess the full word. Goodluck!");
	gameLoop({ question: choice, render: Array(choice.length).fill('_'), correct: 0, incorrect: 0 });
}

main();
