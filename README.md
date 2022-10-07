# Math Facts

## A Spaced Repetition System for Arithmetic Math Factss

This app is intended for daily use.

## Methodology

The app presents a math fact and gives the user 5 seconds to answer.
The answer is then scored based on correctness and response time, as:

Incorrect Answer: 0
Correct Answer Score: 5 - seconds

The app sorts math facts into 4 buckets, as follows:

Min(Round(Score on Last 4 presentations / 4), 4)

The algorithm presents math facts from each bucket, randomly, with the following distribution:

Bucket 0: 55%
Bucket 1: 25%
Bucket 2: 15%
Bucket 3: 5%

## Seeding

Initial seeding is by first operand value / 4, such that

1 op N is in bucket 0
7 op N is bucket 2

And so on

## Selection & Ordering

Use is broken up into sequences of 20 questions (11-5-3-1).

A global sequence counter is stored and incremented for each sequence.

Each time a card is presented, the current sequence counter is stored with the card.

At the beginning of each sequence, the contents of each bucket are sorted by:

```
Sequence, ascending
  Within in each sequence, shuffled randomly
```

For each Bucket N:

```
Take M values -> V
  If Length(V) < M
    Consider each Bucket N-1 ... N-n, requesting the balance of the cards to fill V
  If Length(V) < M
    Consider each Bucket N+1 ... N+n, requesting the balance of the cards to fill V
```
