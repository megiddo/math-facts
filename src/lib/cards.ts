import { writable } from 'svelte/store';
import { CardModes } from '$lib/definitions';
import { Card } from '$lib/classes/Card';
import { CardDb } from '$lib/classes/CardDb';

function cardStore() {
	const cardDb = new CardDb();
	const { subscribe, set, update } = writable(cardDb);

	return {
		subscribe,
		answer(mode: CardModes, question: Card, answer: number) {
			update(() => {
				cardDb.Decks[mode].update(question, answer);
				cardDb.save();
				return cardDb;
			});
		},
		next(mode: any) {
			update(() => {
				cardDb.Decks[mode].next();
				return cardDb;
			});
		},
		current(mode: any) {
			return cardDb.Decks[mode].current();
		}
	};
}

export const cards = cardStore();
