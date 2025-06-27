const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tracker');

const TimeLog = mongoose.model('TimeLog', {
  domain: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now }
});

app.post('/api/track', async (req, res) => {
  const { domain, timeSpent } = req.body;
  await TimeLog.create({ domain, timeSpent });
  res.sendStatus(200);
});

app.get('/api/summary', async (req, res) => {
  const logs = await TimeLog.aggregate([
    {
      $group: {
        _id: "$domain",
        totalTime: { $sum: "$timeSpent" }
      }
    }
  ]);
  res.json(logs);
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
