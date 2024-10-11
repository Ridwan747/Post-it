
const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.static('public'));

// Video upload endpoint
app.post('/upload', upload.single('video'), (req, res) => {
  res.send({ message: 'Video uploaded successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
