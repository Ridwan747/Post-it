
const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Video upload route
router.post('/upload', upload.single('video'), async (req, res) => {
  const { title } = req.body;
  try {
    const video = new Video({ title, filepath: req.file.path });
    await video.save();
    res.send({ message: 'Video uploaded successfully!' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
