'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

// This is where you'll add your blog posts
const blogPosts = [
  {
    slug: "revisiting-brothers-karamazov",
    title: "Revisiting The Brothers Karamazov at 30",
    content: `# Revisiting The Brothers Karamazov at 30

Ten years ago, at the age of 20, during a college gap year, I cracked open one of the finest works of literature humanity has ever produced. Did I understand it? Will I understand it now?

The Brothers Karamazov by Fyodor Dostoevsky is a beast. Tipping the scales at around 900 pages, it's a seminal work of Russian literature—and it belongs on every bookshelf. Dostoevsky doesn't pull punches. He dives headfirst into some of the darkest corners of the human spirit. He paints a gloomy portrait of a fallen people, divorced from their maker (whoever that may be), and spins a tangled thread of story, polemic, philosophy, and like… a bajillion different Russian names. He wrestles with faith, evil, Orthodoxy, God, family, murder, guilt—you know, light stuff.

I remember one special night clearly: Ivan's final conversation with the devil. I was sitting in a diner, sipping coffee around 1 AM. (Need I say more?) The electricity in that passage was palpable. I don't remember all the details—just the tone, the dread, the brilliance. I sat there, probably on my third refill, that sticky Texas summer, following Dostoevsky to some Orthodox purgatory, thinking about the decent man who had to walk a quadrillion miles to heaven.

Did I get it? What did it mean to me at the time?

I'm not sure. I don't consider myself religious. I have a spiritual side, sure, but I've never really believed in anything beyond what we can touch, see, or measure.

It's not that I'm some Reddit atheist man-baby—far from it—but if we're using Christian terms, I suppose you could say I've always "struggled with faith."

I've dabbled in other traditions too—Hinduism among them. There's a lot I admire in it: the architecture, the mythos, the devotion. But it never quite clicked. Not in the way I hoped.

This blog post isn't me fishing for faith—or even intending to find it. It's a retrospective. A breadcrumb in the forest. A mental note to self:

Ten years ago, I read The Brothers Karamazov. So what?

So what, indeed.

I don't remember much of it, to be honest. But I do remember the feeling. And that matters. It wasn't a book I "got" the first time around—but it did something to me. And now, at 30, I'm wondering what else it might have to say.

Back in my late teens and early twenties, I considered myself a Dostoevsky fan (as many young men do). I'd love to say I was on the bandwagon before Jordan Peterson was a thing—but that's not important. Whatever gets people to pick up great art—even if it's cliché—has value.

But this isn't about Jordan Peterson. Or Carl Jung. Or the chimps.

This is about me, revisiting a book that loomed large in my intellectual and spiritual development. A book I read when I thought I had questions. And now, ten years later, I know I do.

It's been a bumpy ride—these past ten years. (I'm even thinking of writing a memoir.) Life threw some wild stuff at me. Some of it heartbreaking. Some of it hilarious. All of it, I think, worth writing down.

A retrospective at the ripe old age of 30 might seem gauche, but here I am. And if something I write resonates with someone else out there, then great. I've never made music or written to get rich and famous. I just want to make cool shit for my bros.

So, yeah. What are you reading?

Me? I'm reading Dostoevsky.

Again.

I'll let you know how it goes.`,
    date: "2025-07-23",
    readTime: "8 min read",
    category: "Literature",
    tags: ["Dostoevsky", "Literature", "Philosophy", "Personal Growth"]
  },
  {
    slug: "music-visualizer-web-audio-api",
    title: "Building a Music Visualizer with Web Audio API",
    content: `# Building a Music Visualizer with Web Audio API

Exploring the Web Audio API to create real-time audio visualizations that respond to frequency and amplitude data. This post covers the fundamentals of audio processing in the browser and how to create stunning visual effects.

## Introduction

The Web Audio API is a powerful tool for creating interactive audio experiences in the browser. In this post, I'll walk through how I built a music visualizer that responds to real-time audio input.

## Getting Started

First, we need to set up the audio context and analyzer node:

\`\`\`javascript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
\`\`\`

## Processing Audio Data

The key to creating responsive visualizations is processing the frequency data:

\`\`\`javascript
function draw() {
  requestAnimationFrame(draw);
  
  analyser.getByteFrequencyData(dataArray);
  
  // Create visualization based on frequency data
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] / 255) * canvas.height;
    // Draw bars, circles, or other shapes
  }
}
\`\`\`

## Advanced Features

Some advanced features I implemented:

- **Frequency Analysis**: Breaking down audio into frequency bands
- **Waveform Display**: Real-time waveform visualization
- **Customizable Effects**: Different visual styles and animations
- **Performance Optimization**: Efficient rendering for smooth animations

## Challenges and Solutions

One of the biggest challenges was maintaining smooth performance while processing real-time audio data. I solved this by:

1. Using \`requestAnimationFrame\` for smooth animations
2. Optimizing the canvas rendering pipeline
3. Implementing efficient data structures for frequency analysis

## Conclusion

The Web Audio API opens up incredible possibilities for creating interactive audio experiences. Whether you're building a music player, game, or creative application, the combination of audio processing and visual feedback creates engaging user experiences.

The full source code is available on my GitHub repository, and I'm planning to add more advanced features like 3D visualizations and custom audio effects.`,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Programming",
    tags: ["Web Audio API", "JavaScript", "Canvas", "Music"]
  },
  {
    slug: "journey-fullstack-development",
    title: "My Journey into Full-Stack Development",
    content: `# My Journey into Full-Stack Development

How I transitioned from frontend to full-stack development, the challenges I faced, and the lessons learned along the way. From React to Node.js, databases to deployment.

## The Beginning

My journey into full-stack development started with a simple curiosity about how the entire web application stack works. I was comfortable with frontend technologies like React, but I wanted to understand the complete picture.

## Learning Backend Technologies

The transition wasn't easy, but it was incredibly rewarding. Here's what I focused on:

### Node.js and Express
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/projects', (req, res) => {
  // Handle API requests
  res.json({ projects: [] });
});
\`\`\`

### Database Design
Understanding how to design efficient database schemas and write optimized queries was crucial.

### Authentication and Security
Implementing proper authentication systems and understanding security best practices.

## Key Lessons Learned

1. **Start Small**: Don't try to build everything at once
2. **Focus on Fundamentals**: Understanding HTTP, REST APIs, and databases
3. **Practice Regularly**: Build projects that combine frontend and backend
4. **Learn from Mistakes**: Every bug is a learning opportunity

## Current Stack

My current full-stack stack includes:
- **Frontend**: React, Next.js, TypeScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, MongoDB
- **Deployment**: Vercel, Railway

## Future Goals

I'm excited to continue learning and exploring new technologies. Some areas I want to dive deeper into:
- Microservices architecture
- Cloud deployment strategies
- Performance optimization
- Advanced database design

The journey never ends, and that's what makes development so exciting!`,
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Career",
    tags: ["Full-Stack", "React", "Node.js", "Career"]
  },
  {
    slug: "creating-music-with-code",
    title: "Creating Music with Code",
    content: `# Creating Music with Code

Using programming to generate and manipulate music. Exploring algorithmic composition, MIDI programming, and how code can be a creative tool for music production.

## The Intersection of Code and Music

Music and programming have more in common than you might think. Both involve patterns, structures, and creative problem-solving. In this post, I'll explore how I use code to create music.

## Algorithmic Composition

One of my favorite approaches is algorithmic composition - using algorithms to generate musical patterns:

\`\`\`python
import random

def generate_melody(length=16):
    notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    melody = []
    
    for i in range(length):
        note = random.choice(notes)
        duration = random.choice([0.25, 0.5, 1.0])
        melody.append((note, duration))
    
    return melody
\`\`\`

## MIDI Programming

Working with MIDI allows for precise control over musical elements:

\`\`\`javascript
// Using Web MIDI API
navigator.requestMIDIAccess().then((midiAccess) => {
  const outputs = midiAccess.outputs.values();
  
  for (let output of outputs) {
    // Send MIDI messages
    output.send([0x90, 60, 100]); // Note on
  }
});
\`\`\`

## Creative Applications

Some projects I've worked on:

### 1. Generative Music
Creating systems that generate endless variations of musical patterns.

### 2. Audio Processing
Building tools to manipulate and transform audio in real-time.

### 3. Interactive Installations
Combining sensors, code, and audio for immersive experiences.

## Tools and Libraries

My go-to tools for music programming:
- **Python**: For algorithmic composition
- **JavaScript**: For web-based audio applications
- **Max/MSP**: For visual programming
- **Pure Data**: For audio processing

## The Creative Process

The most exciting part is the creative process:
1. **Conceptualization**: What do I want to express?
2. **Algorithm Design**: How can code help achieve this?
3. **Implementation**: Writing the actual code
4. **Iteration**: Refining and improving the result

## Future Explorations

I'm currently exploring:
- Machine learning for music generation
- Real-time audio analysis
- Collaborative music-making tools
- Integration with traditional DAWs

## Conclusion

Programming has opened up entirely new creative possibilities in my music production. The combination of logical thinking and artistic expression creates unique opportunities for innovation.

The code becomes the instrument, and the algorithm becomes the composer.`,
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Music",
    tags: ["Algorithmic Music", "MIDI", "Python", "Creative Coding"]
  }
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post Hero Image */}
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
            <Image
              src={
                post.slug === "revisiting-brothers-karamazov"
                  ? "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" // Books for Dostoevsky
                  : post.slug === "quantum-computing-qiskit"
                  ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // Quantum computing
                  : "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // Default tech image
              }
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-600/20 text-gray-300 text-sm rounded-full flex items-center gap-1"
                >
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-purple max-w-none"
            >
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-white mb-6">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-white mb-4 mt-8">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold text-white mb-3 mt-6">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith('```')) {
                        return `<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-green-400">`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="ml-4">${line.slice(2)}</li>`;
                      }
                      if (line.trim() === '') {
                        return '<br>';
                      }
                      if (line.startsWith('1. ')) {
                        return `<li class="ml-4">${line.slice(3)}</li>`;
                      }
                      return `<p class="mb-4">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 