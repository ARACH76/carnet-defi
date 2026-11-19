type Position = {
  id: string;
  facteurSante: number;
};

const positions: Position[] = [
  { id: "p1", facteurSante: 1.42 },
  { id: "p2", facteurSante: 0.87 },
  { id: "p3", facteurSante: 1.03 },
  { id: "p4", facteurSante: 0.61 },
  { id: "p5", facteurSante: 0.95 },
];

function positionsRisque(liste: Position[]): Position[] {
  return liste
    .filter((p) => p.facteurSante < 1)
    .sort((a, b) => a.facteurSante - b.facteurSante);
}

console.log(positionsRisque(positions));