import { Card } from '$lib/classes/Card';
import { shuffleArray, onlyUnique } from '$lib/util';

export class MultiplicationCard extends Card {
	buildAnswers(): number[] {
		return shuffleArray(
			shuffleArray([
				Math.max(1, this.term1 - 1) * this.term2,
				(this.term1 + 1) * this.term2,
				this.term1 * (this.term2 + 1),
				this.term1 * Math.max(this.term2 - 1, 1),
				Math.round(this.term1 * this.term2 + this.term2 / 2),
				Math.round(this.term1 * this.term2 + this.term1 / 2),
				this.term1 * this.term2 + 2,
				this.term1 * this.term2 + 1
			])
				.filter(onlyUnique)
				.filter((n) => n !== this.answer)
				.slice(0, 3)
				.concat([this.term1 * this.term2])
		);
	}

	static buildCard(term1: number, term2: number, score: number): Card {
		return new MultiplicationCard(term1, term2, term1 * term2, score);
	}
}

export class AdditionCard extends Card {
	buildAnswers(): number[] {
		return shuffleArray(
			shuffleArray([
				this.term1 * 2 + this.term2,
				this.term1 + this.term2 * 2,
				this.term1 + this.term2 - 1,
				this.term1 + this.term2 + 1,
				this.term1 + this.term2 + 2
			])
				.filter(onlyUnique)
				.filter((n) => n !== this.answer)
				.slice(0, 3)
				.concat([this.term1 + this.term2])
		);
	}

	static buildCard(term1: number, term2: number, score: number): Card {
		return new AdditionCard(term1, term2, term1 + term2, score);
	}
}

export class SubtractionCard extends Card {
	buildAnswers(): number[] {
		return shuffleArray(
			shuffleArray([
				this.term1 * 2 - this.term2,
				Math.round(this.term1 - this.term2 / 2),
				this.term1 - this.term2 - 1,
				this.term1 - this.term2 + 1,
				this.term1 - this.term2 + 2
			])
				.filter(onlyUnique)
				.filter((n) => n !== this.answer)
				.slice(0, 3)
				.concat([this.term1 - this.term2])
		);
	}

	terms() {
		return [this.term1, this.term2];
	}

	static buildCard(term1: number, term2: number, score: number): Card {
		return new SubtractionCard(term1 + term2, term2, term1, score);
	}
}

export class FractionsCard extends Card {
	buildAnswers(): number[] {
		return shuffleArray(
			shuffleArray([
				FractionsCard.buildAnswer(Math.min(this.term2, this.term1 + 1), this.term2),
				FractionsCard.buildAnswer(Math.max(1, this.term1 - 1), this.term2),
				FractionsCard.buildAnswer(this.term1 + 1, this.term2 + 1),
				FractionsCard.buildAnswer(Math.max(1, this.term1 - 1), this.term2 + 1),
				FractionsCard.buildAnswer(
					Math.min(this.term1 + 1, Math.max(0, this.term2 - 1)),
					Math.max(0, this.term2 - 1)
				),
				FractionsCard.buildAnswer(
					Math.min(Math.max(1, this.term1 - 1), Math.max(0, this.term2 - 1)),
					Math.max(0, this.term2 - 1)
				)
			])
				.filter(onlyUnique)
				.filter((n) => n !== this.answer)
				.slice(0, 3)
				.concat([FractionsCard.buildAnswer(this.term1, this.term2)])
		);
	}

	terms() {
		return [this.term1, this.term2];
	}

	static buildAnswer(term1: number, term2: number): number {
		return Math.round((term1 / term2) * 1000) / 1000;
	}

	static buildCard(term1: number, term2: number, score: number): Card | undefined {
		if ([1, 2, 3, 4, 5, 6, 8, 9, 10].includes(term2))
			return new FractionsCard(term1, term2, FractionsCard.buildAnswer(term1, term2), score);
		return undefined;
	}
}

export class DivisionCard extends Card {
	buildAnswers(): number[] {
		return shuffleArray(
			shuffleArray([
				(this.term1 * 2) / this.term1,
				this.term1 / this.term2 - 1,
				this.term1 / this.term2 + 1,
				this.term1 - this.term2 + 1,
				this.term1 + this.term2 - 1
			])
				.filter(onlyUnique)
				.filter((n) => n !== this.answer)
				.slice(0, 3)
				.concat([this.term1 / this.term2])
		);
	}

	terms() {
		return [this.term1, this.term2];
	}

	static buildCard(term1: number, term2: number, score: number): Card {
		return new DivisionCard(term1 * term2, term2, term1, score);
	}
}
