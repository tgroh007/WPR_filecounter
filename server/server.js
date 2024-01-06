const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/countItems', (req, res) => {
  const folderPath = 'C:\Users\Lambo\Documents\express_webs\file counter\server'; // Replace with the actual path to your folder

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading folder');
    }

    const itemCount = files.length;
    res.json({ count: itemCount });
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});