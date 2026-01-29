# 🎨 PasteBin - Modern Text Sharing Platform

A beautiful, modern pastebin application built with Next.js 14, featuring a stunning dark theme with vibrant gradients, glassmorphism effects, and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)

## ✨ Features

### 🎨 Design & UI/UX

#### Visual Excellence
- **Modern Dark Theme** - Sleek dark mode with rich, vibrant color palette
- **Multi-Color Gradient System** - Dynamic gradients using Violet (#7C3AED), Pink (#EC4899), and Cyan (#06B6D4)
- **Glassmorphism Effects** - Premium glass-effect cards with backdrop blur and transparency
- **Animated Gradient Borders** - Glowing, animated gradient borders on hover
- **Mesh Gradient Background** - Beautiful radial gradient mesh creating depth and atmosphere
- **Custom Scrollbar** - Styled scrollbar matching the dark theme aesthetic

#### Typography & Icons
- **Google Fonts Integration** - Premium Inter font for UI and JetBrains Mono for code
- **Lucide Icons** - Beautiful, consistent icon system throughout the app
- **Gradient Text** - Multi-color gradient applied to headlines and key elements
- **Optimized Readability** - Carefully chosen font weights and sizes for perfect legibility

#### Animations & Interactions
- **Framer Motion Integration** - Smooth, performant animations on all interactive elements
- **Micro-interactions** - Delightful button hover effects, scale animations, and transitions
- **Page Transitions** - Smooth fade-in animations when content loads
- **Loading States** - Animated loading indicators with custom styling
- **Success Animations** - Celebratory animations when paste is created successfully

### 🚀 Core Functionality

#### Paste Management
- **Quick Paste Creation** - Create pastes in seconds with minimal clicks
- **Anonymous Usage** - No login, registration, or authentication required
- **Unique Paste URLs** - Auto-generated short, random IDs for each paste
- **Direct Sharing** - Get shareable link instantly after creation

#### Expiration Options
- **Time-Based Expiry** 
  - 5 minutes
  - 30 minutes
  - 1 hour
  - 1 day
  - 1 week
  - Never expire
- **View-Based Expiry** - Set maximum view count (1, 5, 10, 25, 50, or unlimited)
- **Automatic Cleanup** - Expired pastes are automatically handled
- **Smart Expiration** - Pastes expire on either condition (time OR views), whichever comes first

#### Content Handling
- **Large Text Support** - Handle substantial amounts of text efficiently
- **Monospace Display** - Code-friendly monospace font for paste viewing
- **Text Preservation** - Maintains formatting, line breaks, and spacing
- **UTF-8 Support** - Full Unicode character support

### 📋 User Experience

#### Clipboard Integration
- **One-Click Copy** - Copy paste URL to clipboard with single click
- **Visual Feedback** - Checkmark animation confirms successful copy
- **Auto-Reset** - Copy button resets after 2 seconds
- **Browser Compatibility** - Works across all modern browsers

#### Responsive Design
- **Mobile-First** - Optimized for mobile devices
- **Tablet Optimized** - Perfect layout for iPads and tablets
- **Desktop Experience** - Takes advantage of larger screens
- **Breakpoint System** - Smooth transitions between screen sizes
- **Touch-Friendly** - Large touch targets for mobile users

#### Error Handling
- **Graceful Errors** - User-friendly error messages
- **Validation** - Client-side form validation
- **Not Found Pages** - Custom 404 page for expired/missing pastes
- **Network Error Handling** - Handles connection issues gracefully

### ⚡ Performance & Technical

#### Optimization
- **Next.js 14 App Router** - Latest Next.js features for optimal performance
- **Server Components** - Fast server-side rendering where appropriate
- **Client Components** - Interactive components with 'use client' directive
- **Code Splitting** - Automatic code splitting for faster page loads
- **Image Optimization** - Next.js automatic image optimization

#### Database & Backend
- **PostgreSQL Database** - Robust, reliable relational database
- **Connection Pooling** - Efficient database connection management
- **Indexed Queries** - Optimized database queries with proper indexing
- **Serverless API** - Next.js API routes for scalable backend
- **Error Recovery** - Database error handling and recovery

#### SEO & Accessibility
- **Meta Tags** - Proper meta tags for each page
- **Semantic HTML** - Accessibility-friendly HTML structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Indicators** - Clear focus states for all interactive elements

### 🔒 Security & Privacy

- **No User Data Collection** - Completely anonymous, no tracking
- **SQL Injection Prevention** - Parameterized queries prevent SQL injection
- **Input Sanitization** - Safe handling of user input
- **HTTPS Ready** - SSL/TLS support for production
- **Environment Variables** - Secure credential management

### 🎯 Developer Experience

#### Code Quality
- **Clean Architecture** - Well-organized, modular codebase
- **Component-Based** - Reusable React components
- **TypeScript Ready** - Easy migration path to TypeScript
- **ESLint Configuration** - Code linting for consistency
- **Git-Friendly** - Proper .gitignore and version control setup

#### Development Tools
- **Hot Reload** - Instant updates during development
- **Error Overlay** - Detailed error messages in development
- **Fast Refresh** - Preserves component state during edits
- **Custom Utilities** - Helper functions for common tasks
- **Path Aliases** - `@/` alias for clean imports

### 📦 Components Library

#### Reusable Components
- **Button Component** - Multiple variants (primary, secondary, ghost, outline)
- **Card Component** - Glassmorphic card with header and title
- **Input Components** - Styled text inputs, textareas, and selects
- **Navbar Component** - Fixed navigation with glassmorphism
- **Loading States** - Spinner and loading indicators

#### Design System
- **CSS Variables** - Centralized theme management
- **Tailwind Integration** - Custom Tailwind configuration
- **Utility Classes** - Custom utility classes for common patterns
- **Color System** - Semantic color naming and usage
- **Spacing System** - Consistent spacing throughout the app

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL** - Robust relational database
- **pg** - PostgreSQL client for Node.js

### Design System
- **Custom CSS Variables** - Centralized theming
- **Glassmorphism** - Modern glass-effect styling
- **Gradient Utilities** - Multi-color gradient system
- **Inter & JetBrains Mono** - Premium Google Fonts

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database running
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/pastebin.git
cd pastebin
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database Configuration
PGHOST=localhost
PGPORT=5432
PGDATABASE=pastebin_db
PGUSER=your_username
PGPASSWORD=your_password

# Application Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Step 4: Set Up the Database
Create the database and required table:

```sql
-- Create database
CREATE DATABASE pastebin_db;

-- Connect to the database
\c pastebin_db

-- Create pastes table
CREATE TABLE pastes (
    id VARCHAR(10) PRIMARY KEY,
    content TEXT NOT NULL,
    max_views INTEGER,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_expires_at ON pastes(expires_at);
CREATE INDEX idx_created_at ON pastes(created_at);
```

### Step 5: Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Creating a Paste
1. Navigate to the homepage
2. Enter your text content in the textarea
3. (Optional) Set an expiration time from the dropdown
4. (Optional) Set a maximum view count
5. Click "Create Paste"
6. Copy the generated URL and share it!

### Viewing a Paste
1. Visit the paste URL (e.g., `http://localhost:3000/p/abc123`)
2. The content will be displayed
3. View count increments automatically
4. Paste expires based on time or view limit

## 📁 Project Structure

```
pastebin/
├── app/
│   ├── api/
│   │   └── pastes/
│   │       └── route.js          # Paste creation API
│   ├── p/
│   │   └── [id]/
│   │       └── page.js            # View paste page
│   ├── globals.css                # Global styles & theme
│   ├── layout.js                  # Root layout with Navbar
│   └── page.js                    # Homepage
├── components/
│   ├── Button.js                  # Reusable button component
│   ├── Card.js                    # Glass card component
│   ├── Input.js                   # Form input components
│   └── Navbar.js                  # Navigation bar
├── lib/
│   ├── db.js                      # Database connection
│   └── utils.js                   # Utility functions
├── .env.local                     # Environment variables
├── .env.example                   # Example env file
├── jsconfig.json                  # Path aliases config
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies
├── postcss.config.js              # PostCSS config
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # This file
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: 124 58 237;      /* Violet 600 */
--secondary: 236 72 153;    /* Pink 500 */
--tertiary: 6 182 212;       /* Cyan 500 */

/* Background Colors */
--background: 10 10 12;     /* Dark base */
--card: 23 23 23;           /* Card background */
```

### Typography
- **Headings**: Inter (300-700 weight)
- **Body**: Inter (400-600 weight)
- **Code**: JetBrains Mono (400-500 weight)

### Effects
- **Glassmorphism**: `backdrop-filter: blur(12px)`
- **Gradients**: Multi-color radial gradients
- **Shadows**: Colored shadows matching theme
- **Animations**: Framer Motion with custom spring configs

## 🔌 API Routes

### POST `/api/pastes`
Create a new paste

**Request Body:**
```json
{
  "content": "Your text content here",
  "ttl_seconds": 3600,        // Optional: Time to live in seconds
  "max_views": 10              // Optional: Maximum view count
}
```

**Response:**
```json
{
  "id": "abc123",
  "url": "http://localhost:3000/p/abc123",
  "expires_at": "2024-01-29T12:00:00.000Z",
  "max_views": 10
}
```

### GET `/p/[id]`
View a paste by ID

**Parameters:**
- `id` (string): The paste identifier

**Returns:**
- Paste content page or 404 if expired/not found

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Adding New Features

1. **New Components**: Add to `components/` directory
2. **New Pages**: Add to `app/` directory (App Router)
3. **New API Routes**: Add to `app/api/` directory
4. **Styling**: Use Tailwind classes and custom CSS variables

## 🎭 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PGHOST` | PostgreSQL host | `localhost` |
| `PGPORT` | PostgreSQL port | `5432` |
| `PGDATABASE` | Database name | Required |
| `PGUSER` | Database user | Required |
| `PGPASSWORD` | Database password | Required |
| `NEXT_PUBLIC_BASE_URL` | Application URL | `http://localhost:3000` |

## 🚧 Roadmap

- [ ] Syntax highlighting for code pastes
- [ ] Dark/Light theme toggle
- [ ] Paste editing (with authentication)
- [ ] Paste categories/tags
- [ ] Password-protected pastes
- [ ] Custom expiry date picker
- [ ] Paste analytics dashboard
- [ ] API key authentication
- [ ] Rate limiting
- [ ] Export as PDF/Markdown

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern web design trends
- Icons by [Lucide Icons](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
- Built with [Next.js](https://nextjs.org)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ using Next.js, React, and TailwindCSS
