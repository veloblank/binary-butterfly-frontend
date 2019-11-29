function fetchSportsProps() {
  return fetch('http://localhost:3050/api/v1/current')
    .then(response => response.json());
}

export default fetchSportsProps;




