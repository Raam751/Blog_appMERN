# 📝 CilliBlog - Full Stack MERN Blog Application

A modern, responsive blog platform built with the MERN stack featuring user authentication, admin dashboard, and dynamic content management.

## 🌟 Live Demo
- **Frontend**: [https://blog-app-mern-1mt5.vercel.app/](https://blog-app-yt.vercel.app)
- **Backend API**: Hosted on Render

## 📸 Features

### 🔐 Authentication & Authorization
- User registration and login system
- JWT-based authentication
- Role-based access control (User/Admin)
- Secure password hashing with bcrypt
- Protected routes and middleware

### 👨‍💼 Admin Panel
- Create, update, and delete blog posts
- Upload and manage blog images
- View personal blog statistics
- Admin dashboard with intuitive UI

### 📱 Blog Management
- Browse all published blogs
- Category-based blog filtering (Devotion, Sports, Coding, Entertainment, Business)
- Individual blog detail pages
- Responsive blog cards with image previews

### 🎨 User Experience
- Modern, responsive design with Tailwind CSS
- Mobile-first approach
- Loading states and error handling
- Toast notifications for user feedback
- Image carousel for trending posts

### 📞 Additional Features
- Contact form with Web3Forms integration
- About page with developer information
- Creators showcase page
- 404 error handling
- Image upload with Cloudinary integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form state management
- **React Hot Toast** - Toast notifications
- **React Multi Carousel** - Image carousels
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Cloudinary** - Image upload and storage
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account for image storage

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blog-app/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=4001
   MONOG_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret_key
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_SECRET_KEY=your_cloudinary_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update API endpoints**
   Update the API base URL in the components to match your backend URL (currently set to `http://localhost:4001`)

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
blog-app/
├── backend/
│   ├── controller/
│   │   ├── blog.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   └── authUser.js
│   ├── models/
│   │   ├── blog.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── blog.route.js
│   │   └── user.route.js
│   ├── jwt/
│   │   └── AuthToken.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── dashboard/
│   │   │   ├── CreateBlog.jsx
│   │   │   ├── MyBlogs.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   └── UpdateBlog.jsx
│   │   ├── context/
│   │   │   └── AuthProvider.jsx
│   │   └── Home/
│   │       ├── Creator.jsx
│   │       ├── Devotional.jsx
│   │       ├── Hero.jsx
│   │       └── Trending.jsx
│   └── package.json
└── README.md
```

## 🔑 API Endpoints

### Authentication Routes
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/logout` - User logout
- `GET /api/users/my-profile` - Get user profile
- `GET /api/users/admins` - Get all admin users

### Blog Routes
- `GET /api/blogs/all-blogs` - Get all blogs
- `GET /api/blogs/single-blog/:id` - Get single blog
- `GET /api/blogs/my-blog` - Get user's blogs (Admin only)
- `POST /api/blogs/create` - Create new blog (Admin only)
- `PUT /api/blogs/update/:id` - Update blog (Admin only)
- `DELETE /api/blogs/delete/:id` - Delete blog (Admin only)

## 🎯 Key Features Breakdown

### User Roles
- **User**: Can browse blogs, view creators, and access public pages
- **Admin**: Full access including blog management, dashboard, and content creation

### Blog Categories
- Devotion (Religious/Spiritual content)
- Sports (Football, Hockey, Cricket, etc.)
- Coding (Programming and technology)
- Entertainment (Movies, Music)
- Business (Business and entrepreneurship)

### Security Features
- JWT token authentication with 30-day expiration
- Password encryption using bcrypt
- Protected API routes with middleware
- Role-based access control
- Secure cookie handling

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Backend (Render/Railway/Heroku)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is correct
3. Set build command: `npm install`
4. Set start command: `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ram Tichkule** - Full Stack Developer

- Portfolio: [port5olio.netlify.app]
- LinkedIn: [Raam Tichkule]
- GitHub: [https://github.com/Raam751]

## 🙏 Acknowledgments

- Thanks to all the open-source contributors
- Special mention to the MERN stack community
- Inspiration from modern blogging platforms

## 📞 Support

If you have any questions or need support, please feel free to reach out:
- Email: help2@gmail.com

---

⭐ Don't forget to star this repository if you found it helpful!
