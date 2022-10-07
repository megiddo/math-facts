import { shuffleArray } from '$lib/util';

export abstract class Card {
	term1: number;
	term2: number;
	answer: number;
	score: number;
	highlight: boolean;
	answerList: number[];

	constructor(term1: number, term2: number, answer: number, score: number) {
		this.term1 = term1;
		this.term2 = term2;
		this.answer = answer;
		this.score = score;
		this.highlight = false;
		this.answerList = this.buildAnswers();
	}

	buildAnswers(): number[] {
		return [-4, -3, -2, -1];
	}

	compare(card: Card): boolean {
		return true;
	}

	update(score: number) {
		this.score = score;
	}

	terms(): number[] {
		return shuffleArray([this.term1, this.term2]);
	}

	answers(): number[] {
		return this.answerList;
	}

	isHighlighted(): boolean {
		return this.highlight;
	}

	static buildCard(term1: number, term2: number, score: number): Card {
		return {};
	}
}
