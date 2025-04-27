// CORS proxy for Firebase Storage
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }

  try {
    // Decode the URL
    const decodedUrl = decodeURIComponent(url);
    
    // Fetch the resource
    const response = await fetch(decodedUrl);
    
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch resource' });
      return;
    }
    
    // Get content type
    const contentType = response.headers.get('content-type');
    
    // Set appropriate headers
    res.setHeader('Content-Type', contentType || 'application/octet-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Stream the response
    const data = await response.arrayBuffer();
    res.status(200).send(Buffer.from(data));
  } catch (error) {
    console.error('Error in CORS proxy:', error);
    res.status(500).json({ error: 'Failed to proxy request' });
  }
} 