async function fetchJson(json) {
  const response = await fetch(json);
  if (response.status !== 200 && !response.ok) {
    // eslint-disable-next-line
    return console.error('Failed loading data');
  }

  return response.json();
}

export default fetchJson;
