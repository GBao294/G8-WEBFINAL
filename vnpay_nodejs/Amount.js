const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Enable JSON body parsing

let currentValue = readValueFromFile() || 0;

app.get('/get-value', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json({ value: currentValue });
});

app.post('/increase-value', (req, res) => {
  const increment = req.body.increment;
  console.log(req.body.increment); // Corrected the logging statement
  currentValue += parseInt(increment); // Ensure the increment is treated as a number
  saveValueToFile(currentValue);
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json({ message: `Giá trị đã được tăng lên ${increment}.` });
});

app.post('/decrease-value', (req, res) => {
  const decrement = req.body.decrement || 10; // Default decrement value is 10
  console.log(req.body.decrement);
  currentValue -= parseInt(decrement);
  saveValueToFile(currentValue);
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json({ message: `Giá trị đã được giảm đi ${decrement}.` });
});



const port = 5555;
app.listen(port, () => {
  console.log(`Server đang lắng nghe trên cổng ${port}`);
});

function readValueFromFile() {
  try {
    const data = fs.readFileSync('value.json', 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.value;
  } catch (error) {
    return null;
  }
}

function saveValueToFile(value) {
  const data = JSON.stringify({ value });
  fs.writeFileSync('value.json', data, 'utf8');
}
