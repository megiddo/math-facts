# Math Facts

See it in action here:

https://math-facts.ninja

## A Spaced Repetition System for Arithmetic Math Facts

This app is intended for daily use.

## Use

Learner can choose Addition, Subtraction, Multiplication, or Division.

They are expected to choose an answer quickly (within 5 seconds). Incorrect cards are marked in red and the learner may continue selecting cards until they get the right answer.

The correctness and speed of answering for each card is stored in the browser and re-instated when visited again.

## Scoring

Three scores are presented:

- Left (in green): total number correct answers for this session
- Right (in red): total number of incorrect answers for this session
- Middle (in black): a score representing both how many correct cards were answered and how quickly. The maximum score is 312 but requires that all the cards are answered in the minimum allowable time.

## Methodology

The app presents a math fact and gives the user 5 seconds to answer.
The answer is then scored based on correctness and response time, as:

Incorrect Answer: 0
Correct Answer Score: 5 - seconds

Cards are then shuffled in the following way:

Two decks of cards are built, where:

- Unseen cards are repeated 5 times in an unseen deck
- Seen cards are repeated Max(0, 5 - seconds to answer correctly) or 5 cards for each incorrect answer in a seen deck
- The unseen deck is duplicated until it's size is greater than the seen deck. For instance, if there are 3 unseen answers (15 cards) and 75 seen cards, then the unseen deck is duplicated 6 times (for a total of 90 cards)
- The unseen and seen decks are shuffled together

The top card is repeated. Based on the new information (answer), the deck is rebuilt and shuffled.

## Build

### Android

In dev container

```
npm run build
npx cap sync
```

Assets (icons)

In dev container

```
npx capacitor-assets generate --iconBackgroundColor '#ffffff' --splashBackgroundColor '#ffffff'
```

### iOS

In host (if no iOS target exists)

```
npx cap add ios
```

Build in dev container

```
npm install
npm run build
```

In host

```
npx cap sync
npx cap open ios
```
