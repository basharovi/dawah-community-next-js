import nextConnect from 'next-connect';
import multer from 'multer';
import admin from 'firebase-admin';

// Initialize Firebase Admin if not already
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  });
}

const bucket = admin.storage().bucket();

// Disable Next.js body parsing for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

const handler = nextConnect()
  .use(upload.single('file'))
  .post(async (req, res) => {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ error: 'No file uploaded' });

      const timestamp = Date.now();
      const fileName = `team/${timestamp}_${file.originalname}`;
      const fileRef = bucket.file(fileName);

      // Save buffer to Storage
      await fileRef.save(file.buffer, { metadata: { contentType: file.mimetype } });
      // Make file public (optional)
      await fileRef.makePublic();
      
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;
      return res.status(200).json({ url: publicUrl });
    } catch (error) {
      console.error('Upload API error:', error);
      return res.status(500).json({ error: 'Upload failed' });
    }
  });

export default handler; 