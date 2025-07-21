# Zach's Blog & Portfolio

A modern, responsive blog and portfolio website built with Next.js, showcasing both programming projects and music production work.

## 🚀 Features

- **Modern Design**: Beautiful dark theme with purple accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Portfolio Showcase**: Display your GitHub projects with detailed information
- **Blog System**: Share your thoughts on programming, music, and technology
- **Music Production**: Showcase your music tracks with play/pause functionality
- **Contact Form**: Get in touch with potential clients and collaborators
- **Smooth Animations**: Powered by Framer Motion for engaging user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Markdown**: React Markdown (for blog posts)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── portfolio/page.tsx     # Portfolio page
│   ├── blog/page.tsx         # Blog listing page
│   ├── music/page.tsx        # Music showcase page
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── Navigation.tsx        # Navigation component
```

## 🎨 Customization Guide

### 1. Personal Information

Update your personal information in the following files:

- **Homepage** (`src/app/page.tsx`): Update featured projects and recent blog posts
- **Portfolio** (`src/app/portfolio/page.tsx`): Add your actual GitHub projects
- **Music** (`src/app/music/page.tsx`): Add your music tracks and audio files
- **About** (`src/app/about/page.tsx`): Update your story, skills, experience, and education
- **Contact** (`src/app/contact/page.tsx`): Update contact information and social links

### 2. Social Links

Update the social links in the homepage and contact page:

```typescript
// Replace these with your actual URLs
"https://github.com/yourusername"
"https://www.linkedin.com/in/zachary-bohl-2092581ab/"
"https://twitter.com/Elroy_Muscato"
"mailto:your.email@example.com"
```

### 3. Projects

Add your actual projects to the portfolio page:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Description of your project",
    tech: ["React", "Node.js", "TypeScript"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project.vercel.app",
    featured: true,
    date: "2024-01",
    category: "Full-Stack"
  }
];
```

### 4. Blog Posts

Add your blog posts to the blog page:

```typescript
const blogPosts = [
  {
    title: "Your Blog Post Title",
    excerpt: "Brief description of your post",
    slug: "your-blog-post-slug",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Programming",
    tags: ["React", "JavaScript", "Web Development"]
  }
];
```

### 5. Music Tracks

Add your music tracks to the music page:

```typescript
const musicProjects = [
  {
    title: "Your Track Name",
    description: "Description of your track",
    genre: "Electronic",
    duration: "4:32",
    date: "2024-01",
    tags: ["Ambient", "Electronic", "Synthwave"],
    audioUrl: "path/to/your/audio/file.mp3",
    featured: true
  }
];
```

### 6. Styling

The website uses a dark theme with purple accents. You can customize the colors by updating the Tailwind classes:

- Primary color: `purple-400`, `purple-600`
- Background: `slate-900`, `black/20`
- Text: `white`, `gray-300`

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Adding Blog Posts

To add new blog posts, you can:

1. Create individual blog post pages in `src/app/blog/[slug]/page.tsx`
2. Add the post data to the blog listing page
3. Optionally implement a markdown-based blog system

## 🎵 Adding Music

To add your music:

1. Upload your audio files to the `public/audio/` directory
2. Update the `audioUrl` in the music projects array
3. Consider implementing a proper audio player component

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### SEO Optimization

Update the metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio & Blog",
  description: "Your custom description",
  keywords: ["your", "keywords"],
  authors: [{ name: "Your Name" }],
};
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices. All components use responsive design patterns with Tailwind CSS.

## 🎨 Animation Customization

Animations are powered by Framer Motion. You can customize them by modifying the animation properties in each component:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  // Your content
</motion.div>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Happy coding and music making! 🎵💻**
