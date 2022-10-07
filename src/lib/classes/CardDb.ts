import { CardModeOps, CardModes } from '$lib/definitions';
import {
	MultiplicationCard,
	DivisionCard,
	SubtractionCard,
	AdditionCard
} from '$lib/classes/Cards';
import { Deck } from '$lib/classes/Deck';

export class CardDb {
	Decks: object;
	/*
	multiplication: Deck;
	addition: Deck;

	division: Deck;
	subtraction: Deck;
	*/
	constructor() {
		this.Decks = {};
		const lscores: object = {};

		Object.keys(CardModeOps).forEach((key, value) => {
			lscores[key] = Array(78).fill(0);
			if (typeof localStorage != 'undefined') {
				lscores[key] = localStorage.getItem(key)
					? JSON.parse(localStorage.getItem(key))
					: Array(78).fill(0);
			}
			this.Decks[key] = new Deck(CardModeOps[key]);
		});

		let s = 0;
		for (let i = 1; i <= 12; i++) {
			for (let j = i; j <= 12; j++) {
				this.Decks[CardModes.Multiplication].insert(
					MultiplicationCard.buildCard(i, j, lscores[CardModes.Multiplication][s])
				);
				this.Decks[CardModes.Addition].insert(
					AdditionCard.buildCard(i, j, lscores[CardModes.Addition][s])
				);
				this.Decks[CardModes.Division].insert(
					DivisionCard.buildCard(i, j, lscores[CardModes.Division][s])
				);
				this.Decks[CardModes.Subtraction].insert(
					SubtractionCard.buildCard(i, j, lscores[CardModes.Subtraction][s])
				);
				s++;
			}
		}

		console.log('Building decks ...');
		Object.keys(CardModeOps).forEach((key, value) => {
			this.Decks[key].buildDeck();
		});
	}

	save() {
		Object.keys(CardModeOps).forEach((key, value) => {
			localStorage.setItem(key, JSON.stringify(this.Decks[key].encode()));
		});
	}
}
