async function fetchJson(json) {
  const response = await fetch(json);
  if (response.status !== 200 && !response.ok)
    return console.error("Failed loading data");
  return await response.json();
}

export { fetchJson };
