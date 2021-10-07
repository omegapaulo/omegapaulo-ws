import express from 'express';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'frontend/static')));

console.log(__dirname);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/static', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
