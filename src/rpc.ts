const RPC = "https://mainnet.base.org";

async function lireBloc(): Promise<number> {
  const reponse = await fetch(RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_blockNumber",
      params: [],
    }),
  });

  const json = await reponse.json();
  return parseInt(json.result, 16);
}

lireBloc().then(console.log);