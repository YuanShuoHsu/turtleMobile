import React from 'react';

interface Candidate {
  name: string;
  city: string;
  probability: number;
  population: number;
}

interface Result {
  city: string;
  totalProbability: number;
  candidates: Candidate[];
}

const groupCandidatesByCity = (candidates: Candidate[]): Result[][] => {
  // Step 1: Group candidates by city
  const groupedCandidates: { [city: string]: Candidate[] } = {};
  candidates.forEach((candidate) => {
    const { city } = candidate;
    if (!groupedCandidates[city]) {
      groupedCandidates[city] = [];
    }
    groupedCandidates[city].push(candidate);
  });

  // Step 2: Calculate total probability and sort candidates by probability
  const results: Result[][] = [];
  Object.entries(groupedCandidates).forEach(([city, candidates]) => {
    const totalPopulation = candidates.reduce(
      (acc, candidate) => acc + candidate.population,
      0
    );
    const totalProbability = candidates.reduce(
      (acc, candidate) => acc + candidate.probability,
      0
    );
    const sortedCandidates = candidates.sort(
      (a, b) => b.probability - a.probability
    );
    results.push([
      {
        city,
        totalProbability,
        candidates: sortedCandidates,
      },
    ]);
  });

  // Step 3: Sort results by total probability
  return results.sort(
    (a, b) => b[0].totalProbability - a[0].totalProbability
  );
};

const ExampleComponent: React.FC = () => {
  const candidates: Candidate[] = [
    { name: 'A', city: 'Taipei', probability: 0.1, population: 3000000 },
    { name: 'B', city: 'New Taipei', probability: 0.2, population: 4000000 },
    { name: 'C', city: 'Taoyuan', probability: 0.3, population: 2000000 },
    { name: 'D', city: 'Hsinchu', probability: 0.15, population: 1000000 },
    { name: 'E', city: 'Miaoli', probability: 0.25, population: 500000 },
    { name: 'F', city: 'Taipei', probability: 0.05, population: 2000000 },
    { name: 'G', city: 'Taoyuan', probability: 0.1, population: 1500000 },
  ];

  const results = groupCandidatesByCity(candidates);

  return (
    <div>
      {results.map((cityResults) => (
        <div key={cityResults[0].city}>
          <h2>{cityResults[0].city}</h2>
          <p>Total probability: {cityResults[0].totalProbability}</p>
          <ul>
            {cityResults[0].candidates.map((candidate) => (
              <li key={candidate.name}>
                {candidate.name} ({candidate.probability})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;