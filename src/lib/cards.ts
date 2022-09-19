import { writable } from 'svelte/store';

/*
    Card format
        {
            augend: <val>,
            addend: <val>,
            score: 0 - 4 (higher is better)
        }
        {
            multiplicand: <val>,
            multiplier: <val>,
            score: 0 - 4 (higher is better)
        }
*/

class Card {
	e1: number;
	e2: number;
	answer: number;
	score: number;

	constructor(e1: number, e2: number, answer: number, score: number) {
		this.e1 = e1;
		this.e2 = e2;
		this.answer = answer;
		this.score = score;
	}

	compare(card: Card): boolean {
		return true;
	}

	update(score: number) {
		this.score = score;
	}
}

class Deck {
	cards: Card[];

	constructor() {
		this.cards = [];
	}

	insert(card: Card) {
		this.cards.push(card);
	}

	update(card: Card, answer: number, score: number) {
		return false;
	}

	findIndex(card: Card) {
		return 0;
	}

	next(): Card {
		return new Card(1, 1, 1, 4);
	}
}

class CardDb {
	multiplication: Deck;
	addition: Deck;

	constructor() {
		this.multiplication = new Deck();
		this.addition = new Deck();
	}
}

const cardDb = new CardDb();

const cards = writable(cardDb);

const cardStore = {
	subscribe: cards.subscribe,
	answer(mode: any, question: Card, answer: number, after: number) {
		cards.update((cards) => {
			cards.multiplication.update(question, answer, after);
			return cards;
		});
	}
};
