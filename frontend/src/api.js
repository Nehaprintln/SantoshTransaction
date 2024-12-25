// const API_BASE_URL = "https://transaction-dash.vercel.app/api";
const API_BASE_URL = "http://localhost:5000/api";

// api/transactions


export const getTransactions = async (month, search, page, perPage) => {
  try {
    const url = new URL(`${API_BASE_URL}/getTransactions`);
    const params = { month, search, page, perPage };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return {}; // return empty {} if no data
  }
};


export const getStatistics = async (month) => {
  try {
    const url = new URL(`${API_BASE_URL}/getStatistics`);
    const params = { month };

    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return {};
  }
};


export const getBarChartData = (month) => {
  const url = new URL(`${API_BASE_URL}/getBar-chart`);
  const params = { month };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return {};
    });
};
