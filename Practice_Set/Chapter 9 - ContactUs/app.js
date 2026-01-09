// Express module
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third middleware", req.url, req.method);
//   res.send("<h1>Welcome to contatc us page</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Home Page </h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text"
       name="name"
        placeholder="Enter your name"/>
      <input type="text"
       name="email"
        placeholder="Enter your email"/>
        <input type="Submit"></input>
        </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling / contact-us for POST", req.url, req.method);
  res.send("<h1>We will contact you shortly</h1>");
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});