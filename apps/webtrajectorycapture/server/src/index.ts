import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { startRecording } from './recorder';

const app = express();
app.use(express.json());

app.post('/api/session', async (req, res) => {
  const { url } = req.body;
  const id = uuidv4();
  await startRecording(id, url); // stubbed
  res.json({ id });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
