// Core modules
const path = require('path');

// Express module
const express = require('express');

// Local modules
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const rootDir = require('./utils/pathUtil');

const app = express();
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);

app.use((req, res ,next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});