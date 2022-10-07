import { shuffleArray } from '$lib/util';
import { Card } from '$lib/classes/Card';

export class Deck {
	scores: Card[];
	scored: Card[];
	unscored: Card[];
	cards: Card[];
	startTime: number;
	operator: string;
	correct: number;
	missed: number;

	constructor(operator: string) {
		this.scores = [];
		this.cards = [];
		this.startTime = new Date().getTime();
		this.operator = operator;
		this.correct = 0;
		this.missed = 0;
		this.scored = [];
		this.unscored = [];
	}

	encode() {
		const scorelist: number[] = [];
		for (let i = 0; i < this.scores.length; i++) {
			scorelist.push(this.scores[i].score);
		}
		return scorelist;
	}

	buildDeck() {
		this.cards = [];
		this.scored = [];
		this.unscored = [];
		this.scores.forEach((c) => {
			for (let i = 0; i < 5 - c.score; i++) {
				if (c.score == 0) this.unscored.push(c);
				else this.scored.push(c);
			}
		});
		this.next();
	}

	next(): boolean {
		let expandedUnscored = this.unscored;
		if (expandedUnscored.length > 0)
			while (expandedUnscored.length < this.scored.length) {
				expandedUnscored = expandedUnscored.concat(this.unscored);
			}
		this.cards = shuffleArray(expandedUnscored.concat(this.scored));
		return true;
	}

	insert(card: Card) {
		this.scores.push(card);
		this.cards.push(card);
	}

	update(question: Card, answer: number) {
		const elapsed = new Date().getTime() - this.startTime;
		this.startTime = new Date().getTime();
		const score = this.scores.find((f) => f.term1 == question.term1 && f.term2 == question.term2);
		if (score && question.answer == answer) {
			this.correct++;
			score.score = Math.max(Math.min(4, Math.ceil(5 - Math.min(elapsed / 1000, 5))), 1);
		} else if (score) {
			this.missed++;
			score.score = 0;
		}
		this.buildDeck();
		console.log('Elapsed time: ' + elapsed, question.answer, answer, this.cards.length);
		return true;
	}

	current(): Card {
		return this.cards.length > 0 ? this.cards[0] : this.scores[0];
	}
}
