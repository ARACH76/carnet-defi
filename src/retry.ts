async function avecReessais<T>(fn: () => Promise<T>, tentatives = 3): Promise<T> {
  for (let essai = 1; essai <= tentatives; essai++) {
    try {
      return await fn();
    } catch (erreur) {
      console.log(`échec ${essai}/${tentatives}`);
      if (essai === tentatives) throw erreur;
      await new Promise((r) => setTimeout(r, 500 * essai));
    }
  }
  throw new Error("inatteignable");
}

let compteur = 0;

const instable = async () => {
  compteur++;
  if (compteur < 3) throw new Error("panne simulée");
  return "réussi à l'essai " + compteur;
};

const casse = async () => {
  throw new Error("toujours en panne");
};

async function main() {
  console.log(await avecReessais(instable));
  try {
    await avecReessais(casse, 2);
  } catch (e) {
    console.log("abandon :", (e as Error).message);
  }
}

main();