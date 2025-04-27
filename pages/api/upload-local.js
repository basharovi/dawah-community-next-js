import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure upload directory exists
const uploadDir = path.join(process.cwd(), 'public/uploads/team');
fs.mkdirSync(uploadDir, { recursive: true });

// Configure multer disk storage
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    // sanitize filename
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, `${timestamp}_${safeName}`);
  }
});
const upload = multer({ storage });

// Disable built-in bodyParser so multer can process the multipart form
export const config = {
  api: {
    bodyParser: false
  }
};

const handler = nextConnect()
  .use(upload.single('file'))
  .post((req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    // Build public URL
    const url = `/uploads/team/${req.file.filename}`;
    return res.status(200).json({ url });
  });

export default handler; 