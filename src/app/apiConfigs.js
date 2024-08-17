export const baseUrl = `https://api.themoviedb.org/3`;
export const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc0ODQ0ZGNkNDcwNmNjMmYyOWQ0N2U2MjU0N2Y0YyIsIm5iZiI6MTcyMjY5NDIyMC4zMzkyLCJzdWIiOiI2NmE3ZDljYjAyYzk3MjI0NTI5ZmQ5MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5MPoBPTw_g0SMrsAssifGIgowkuiLsuGF-0CtJ4M1GU';

export const options = { 
  method: 'GET', 
  headers: { 
    accept: 'application/json', 
    Authorization: `Bearer ${apiKey}`
  } 
};
