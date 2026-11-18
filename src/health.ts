function calculerFacteurSante(
  collateraleUsd: number,
  detteUsd: number,
  seuil: number
): number {
  return (collateraleUsd * seuil) / detteUsd;
}

console.log(calculerFacteurSante(1000, 500, 0.8));
console.log(calculerFacteurSante(1000, 850, 0.8));
console.log(calculerFacteurSante(500, 100, 0.5));