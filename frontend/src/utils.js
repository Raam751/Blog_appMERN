// Update this URL once you get your Render deployment URL
export const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? "https://your-render-service-name.onrender.com"  // Replace with your actual Render URL
  : "http://localhost:4001";

// Alternative: You can use this for now and update later
// export const BACKEND_URL = "https://your-render-service-name.onrender.com";