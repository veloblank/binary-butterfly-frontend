function fetchSportsProps() {
  return fetch('http://localhost:3000/api/v1/contest_weeks/2/contest_props')
    .then(response => response.json());
}

export default fetchSportsProps;




