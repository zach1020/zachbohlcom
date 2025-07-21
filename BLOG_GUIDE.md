# How to Add New Blog Posts

## 🚀 Quick Guide

Adding new blog posts is super easy! Here's how to do it:

### 1. Add to Blog Listing Page

First, add your new post to the `blogPosts` array in `src/app/blog/page.tsx`:

```typescript
const blogPosts = [
  // ... existing posts ...
  {
    title: "Your New Blog Post Title",
    excerpt: "A brief description of your post that will appear in the blog listing.",
    slug: "your-new-post-slug",
    date: "2024-01-20",
    readTime: "5 min read",
    category: "Programming", // or "Music", "Career", "Technology"
    tags: ["React", "JavaScript", "Web Development"]
  }
];
```

### 2. Add Full Post Content

Then add the full post content to the `blogPosts` array in `src/app/blog/[slug]/page.tsx`:

```typescript
const blogPosts = [
  // ... existing posts ...
  {
    slug: "your-new-post-slug",
    title: "Your New Blog Post Title",
    content: `# Your New Blog Post Title

Your blog post content goes here. You can use Markdown formatting:

## Section Heading

Regular paragraph text.

### Subsection

- Bullet points
- More bullet points

\`\`\`javascript
// Code blocks
const example = "This is code";
console.log(example);
\`\`\`

**Bold text** and *italic text* work too!`,
    date: "2024-01-20",
    readTime: "5 min read",
    category: "Programming",
    tags: ["React", "JavaScript", "Web Development"]
  }
];
```

## 📝 Content Formatting

Your blog posts support Markdown formatting:

### Headers
```markdown
# Main Title
## Section Heading
### Subsection
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
```

### Code Blocks
```markdown
\`\`\`javascript
const example = "Your code here";
console.log(example);
\`\`\`
```

### Lists
```markdown
- Bullet points
- More items

1. Numbered lists
2. Second item
```

### Links
```markdown
[Link text](https://example.com)
```

## 🎯 Best Practices

1. **Slug**: Use lowercase, hyphens, no spaces (e.g., "my-awesome-post")
2. **Title**: Make it descriptive and engaging
3. **Excerpt**: Keep it under 200 characters for the listing page
4. **Category**: Choose from "Programming", "Music", "Career", "Technology"
5. **Tags**: Add relevant tags to help with search and organization
6. **Date**: Use YYYY-MM-DD format
7. **Read Time**: Estimate reading time (e.g., "5 min read")

## 🔄 Example: Adding a New Post

Here's a complete example of adding a new post about React hooks:

### Step 1: Add to blog listing (`src/app/blog/page.tsx`)
```typescript
{
  title: "Mastering React Hooks: A Deep Dive",
  excerpt: "Exploring the power of React hooks and how they've revolutionized functional components.",
  slug: "mastering-react-hooks",
  date: "2024-01-20",
  readTime: "10 min read",
  category: "Programming",
  tags: ["React", "JavaScript", "Hooks", "Frontend"]
}
```

### Step 2: Add full content (`src/app/blog/[slug]/page.tsx`)
```typescript
{
  slug: "mastering-react-hooks",
  title: "Mastering React Hooks: A Deep Dive",
  content: `# Mastering React Hooks: A Deep Dive

React hooks have revolutionized how we write functional components. In this post, I'll explore the most powerful hooks and how to use them effectively.

## Understanding Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

\`\`\`javascript
import { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

One of the most powerful features is creating custom hooks:

\`\`\`javascript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

## Best Practices

1. **Always call hooks at the top level**
2. **Only call hooks from React functions**
3. **Use the dependency array correctly**
4. **Create custom hooks for reusable logic**

## Conclusion

Hooks have made React development more intuitive and powerful. By understanding these concepts, you can write cleaner, more maintainable code.`,
  date: "2024-01-20",
  readTime: "10 min read",
  category: "Programming",
  tags: ["React", "JavaScript", "Hooks", "Frontend"]
}
```

## 🎉 That's It!

After adding your post to both files, it will automatically appear on your blog listing page and be accessible at `/blog/your-post-slug`.

The website will automatically:
- ✅ Display your post in the blog listing
- ✅ Create a dedicated page for your post
- ✅ Apply proper styling and formatting
- ✅ Include tags and categories
- ✅ Show read time and date

Happy blogging! 🚀 