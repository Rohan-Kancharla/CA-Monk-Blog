# CA Monk Blog 📝

A modern, full-featured blog application built with React, TypeScript, and TanStack Query. This application provides a clean and intuitive interface for reading, creating, and managing blog posts focused on finance, accounting, and career growth topics.

![CA Monk Blog](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **📖 Blog Listing**: Browse through all blog posts with an elegant card-based layout
- **🔍 Blog Details**: View full blog posts with rich formatting and metadata
- **✍️ Create Blogs**: Add new blog posts with form validation using Zod
- **🗑️ Delete Blogs**: Remove unwanted blog posts
- **📱 Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS and shadcn/ui components
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **🔄 State Management**: Efficient data fetching and caching with TanStack Query
- **🎯 Type Safety**: Full TypeScript support for robust code

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.12.0** - Client-side routing

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful icon set

### State Management & API
- **TanStack Query 5.90.18** - Data fetching and caching
- **Axios 1.13.2** - HTTP client
- **JSON Server 1.0.0-beta.3** - Mock REST API

### Form Handling
- **React Hook Form 7.71.1** - Form state management
- **Zod 4.3.5** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Developer Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Rohan-Kancharla/CA-Monk-Blog.git
cd CA-Monk-Blog
```

2. **Install dependencies:**
```bash
npm install
```

## 🚀 Running the Application

The application requires two servers to run:

### Start the Mock Backend (JSON Server)
```bash
npm run server
```
This starts the JSON Server on `http://localhost:3001`

### Start the Development Server
```bash
npm run dev
```
This starts the Vite dev server on `http://localhost:5173`

**Note:** Both servers need to be running simultaneously. Open two terminal windows or use a terminal multiplexer.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run server` | Start JSON Server (mock API) |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
ca-monk-blog/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── api/               # API calls
│   │   └── blogs.ts       # Blog-related API functions
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── textarea.tsx
│   │   ├── BlogCard.tsx   # Blog card component
│   │   ├── BlogDetail.tsx # Blog detail view
│   │   ├── BlogList.tsx   # Blog list component
│   │   ├── CreateBlogForm.tsx # Form to create blogs
│   │   └── Layout.tsx     # Main layout wrapper
│   ├── hooks/             # Custom React hooks
│   │   └── useBlogs.ts    # Blog-related hooks
│   ├── lib/               # Utility libraries
│   │   ├── axios.ts       # Axios configuration
│   │   └── utils.ts       # Utility functions
│   ├── pages/             # Page components
│   │   └── Home.tsx       # Home page
│   ├── types/             # TypeScript type definitions
│   │   └── blog.ts        # Blog-related types
│   ├── App.tsx            # Main App component
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── db.json                # Mock database for JSON Server
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎨 Design Features

### Navigation
- Modern header with CA Monk branding
- Menu items: HOME, PORTFOLIO, EVENTS, JOB BOARD, POSTS
- Quick access to CREATE POST and LOGIN buttons

### Hero Section
- Eye-catching title: "CA Monk Blog"
- Tagline: "Stay updated with the latest trends in finance, accounting, and career growth"

### Blog List
- Card-based layout with category icons
- Time-ago display (e.g., "2 days ago")
- "Read Tips" call-to-action
- Smooth hover effects

### Blog Detail View
- Large cover image
- Category badges
- Share functionality
- Metadata grid (Category, Read Time, Date)
- Clean, readable content layout
- Delete functionality for blog management

### Footer
- Multi-column layout with sections:
  - Resources (Blog, Webinars, Case Studies)
  - Platform (Job Board, Pricing Plans, Referrals)
  - Connect (Social media links)
- Copyright and legal links

## 🔧 Configuration

### API Base URL
The API base URL is configured in `src/lib/axios.ts`:
```typescript
baseURL: 'http://localhost:3001'
```

### Mock Data
Blog data is stored in `db.json` and served by JSON Server. You can modify this file to add/edit initial blog posts.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Blog Management
- **BlogList**: Displays all blogs with loading states and empty states
- **BlogCard**: Individual blog card with category icons and metadata
- **BlogDetail**: Full blog post view with share and delete options
- **CreateBlogForm**: Form with validation for creating new posts

### State Management
- **useBlogs**: Fetch all blogs
- **useBlog**: Fetch single blog by ID
- **useCreateBlog**: Create new blog with optimistic updates
- **useDeleteBlog**: Delete blog with cache invalidation

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

**Note:** For production, replace JSON Server with a real backend API.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rohan Kancharla**
- GitHub: [@Rohan-Kancharla](https://github.com/Rohan-Kancharla)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [TanStack Query](https://tanstack.com/query) for excellent state management
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ using React and TypeScript**
