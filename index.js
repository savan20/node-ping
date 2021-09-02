require('express')().all('/', (req, res) => {
  res.send('pong')
}).listen(3005, () => console.log("ping app is running"))