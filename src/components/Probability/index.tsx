import { useState, FormEvent } from "react";
import styles from "./index.module.scss";

interface Prize {
  id: number;
  name: string;
  quantity: number;
  probability: number;
}

const prizes: Prize[] = [
  { id: 1, name: "1 號獎", quantity: 1, probability: 0.001 },
  { id: 2, name: "2 號獎", quantity: 1, probability: 0.03 },
  { id: 3, name: "3 號獎", quantity: 3, probability: 0.13 },
  { id: 4, name: "4 號獎", quantity: 5, probability: 0.18 },
  { id: 5, name: "5 號獎", quantity: 9, probability: 0.25 },
];

const initialAvailablePrizes = prizes.flatMap((prize) =>
  Array(prize.quantity).fill(prize.id)
);

const getRandomIndex = (probabilities: number[]) => {
  const sum = probabilities.reduce((acc, cur) => acc + cur);
  let random = Math.random() * sum;
  let i = 0;
  while (random > 0) {
    random -= probabilities[i];
    i++;
  }
  return i - 1;
};

export default function Probability() {
  const [availablePrizes, setAvailablePrizes] = useState<number[]>(
    initialAvailablePrizes
  );
  const [selectedPrizes, setSelectedPrizes] = useState<
    {
      prize: number;
      index: number;
    }[]
  >([]);

  const handleLottery = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (availablePrizes.length === 0) {
      alert("禮物已經抽完");
      return;
    }

    const probabilities = availablePrizes.map(
      (id) => prizes.find((p) => p.id === id)?.probability || 0
    );
    const randomIndex = getRandomIndex(probabilities);
    const selectedPrize = availablePrizes[randomIndex];
    const selectedIndex = randomIndex;
    const newAvailablePrizes = [
      ...availablePrizes.slice(0, selectedIndex),
      ...availablePrizes.slice(selectedIndex + 1),
    ];
    const newSelectedPrize = { prize: selectedPrize, index: selectedIndex };
    const newSelectedPrizes = [...selectedPrizes, newSelectedPrize];
    setAvailablePrizes(newAvailablePrizes);
    setSelectedPrizes(newSelectedPrizes);
  };

  return (
    <form onSubmit={handleLottery} className={styles.raffle}>
      <button className={styles.raffle__button}>抽獎</button>
      <ul className={styles.raffle__list}>
        {selectedPrizes.map((prize) => (
          <li
            key={prize.index}
            className={styles["raffle__list-item"]}
          >{`抽到 ${prizes.find((p) => p.id === prize.prize)?.name}`}</li>
        ))}
      </ul>
    </form>
  );
}
