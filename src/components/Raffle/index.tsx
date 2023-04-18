import { useState, FormEvent } from "react";
import styles from "./index.module.scss";

interface Prize {
  id: number;
  name: string;
  quantity: number;
}

const prizes: Prize[] = [
  { id: 1, name: "1 號獎", quantity: 1 },
  { id: 2, name: "2 號獎", quantity: 1 },
  { id: 3, name: "3 號獎", quantity: 3 },
  { id: 4, name: "4 號獎", quantity: 5 },
  { id: 5, name: "5 號獎", quantity: 9 },
];

const initialAvailablePrizes = prizes.flatMap((prize) =>
  Array(prize.quantity).fill(prize.id)
);

export default function Raffle() {
  const [availablePrizes, setAvailablePrizes] = useState<number[]>(
    initialAvailablePrizes
  );
  const [selectedPrizes, setSelectedPrizes] = useState<
    { prize: number; avail: string }[]
  >([]);

  const handleLottery = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (availablePrizes.length === 0) {
      alert("禮物已經抽完");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availablePrizes.length);
    const selectedPrize = availablePrizes[randomIndex];
    const newAvailablePrizes = [
      ...availablePrizes.slice(0, randomIndex),
      ...availablePrizes.slice(randomIndex + 1),
    ];
    const newSelectedPrize = {
      prize: selectedPrize,
      avail: newAvailablePrizes.join(" , "),
    };
    const newSelectedPrizes = [...selectedPrizes, newSelectedPrize];
    setAvailablePrizes(newAvailablePrizes);
    setSelectedPrizes(newSelectedPrizes);
  };

  return (
    <form onSubmit={handleLottery} className={styles.raffle}>
      <button className={styles.raffle__button}>抽獎</button>
      <ul className={styles.raffle__list}>
        {selectedPrizes.map((element) => (
          <li
            key={element.avail}
            className={styles["raffle__list-item"]}
          >{`抽到 ${
            prizes.find((p) => p.id === element.prize)?.name
          } 目前尚未抽取的獎勵為 [ ${element.avail} ]`}</li>
        ))}
      </ul>
    </form>
  );
}
