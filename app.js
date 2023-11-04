const express = require('express');
const app = express();
const path = require('path');

// Serve static files from a 'public' directory
app.use(express.static('public'));

// Define a route to handle URLs without the '.html' extension
app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, `public/${page}.html`));
});



const port = 3000; // Change this to your desired port number
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

