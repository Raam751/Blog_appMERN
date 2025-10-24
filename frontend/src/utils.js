// Update this URL to your actual Render backend URL
export const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? "https://blog-appmern-1.onrender.com"  // Your actual Render URL
  : "http://localhost:4001";

// Alternative: You can use this for now and update later
// export const BACKEND_URL = "https://blog-appmern-1.onrender.com";