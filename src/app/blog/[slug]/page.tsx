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
    slug: "quantum-math-synth-knobs",
    title: "From Quantum Math to Synth Knobs: A Playful Wander Through LLMs, Qubits, and Sound Fingerprints",
    content: `# From Quantum Math to Synth Knobs: A Playful Wander Through LLMs, Qubits, and Sound Fingerprints

This week I took a wandering road trip across technology: starting with **large language model optimizations**, detouring through **quantum algorithms**, and somehow arriving at **reverse-engineering Serum presets**. Here's the travelogue.

---

## Act I: Taming the Beasts (LLM Optimization)

Large language models (LLMs) are power-hungry beasts. Making them faster and leaner involves tricks at every layer:

- **Quantization**: Shrink weights to 8-bit or even 4-bit without wrecking accuracy.
- **Speculative decoding**: Use a smaller "draft model" to guess ahead, while the big model just rubber-stamps or edits.
- **Paged/flash attention**: More memory-friendly attention for long contexts.
- **KV cache reuse**: Like keeping leftovers, we don't recompute what we already cooked.
- **Batching & compiler magic**: Continuous batching and CUDA graph captures cut overhead.

LLM optimization is basically the art of shaving milliseconds off billions of multiplications.

---

## Act II: Can Quantum Help?

Could qubits speed up LLMs? Maybe someday. Some hopeful overlaps:

- **HHL algorithm**: A quantum method for solving linear systems, theoretically exponentially faster than classical solvers. Tempting for LLM linear algebra, but today's hardware isn't up to it.
- **Sampling & decoding**: Quantum systems are naturally probabilistic, which could map onto token sampling.
- **Attention**: Replace dot-products with **quantum overlaps** (e.g., SWAP tests).
- **Compression**: Quantum autoencoders for embeddings are a hot research idea.

But: **Phase estimation is expensive, data loading is hard, and outputting vectors from qubits is slow.** For now, this is a lighthouse pointing toward the future, not a bridge we can walk across.

---

## Act III: Kernels, Overlaps, and Toy Classifiers

Kernels are ML's secret sauce: instead of computing features explicitly, you just need their **inner products**.

- Classically: SVMs with RBF or polynomial kernels.
- Quantumly: Encode data as quantum states, and compute overlap kernels like
  \\[
  k(x, y) = |\\langle \\phi(x)|\\phi(y)\\rangle|^2
  \\]
- This makes **tiny but tough classification problems** solvable where classical kernels struggle (periodicity, entangled correlations, small sample sizes).

Even attention in transformers is basically a kernel machine. Which means: yes, you can imagine a "quantum attention head."

---

## Act IV: Where Physics Meets Music

Here's where things turned artistic.

- **Timbre = acoustic fingerprint.** Every instrument (even two violins by the same maker) has unique resonances.
- Could quantum fingerprints replace serial numbers on violins? Probably not — environment and player variability swamp the subtle distinctions.
- But: for **ultra-fine discrimination** (say, forgery detection or subtle timbral signatures), quantum overlap tests might someday help.

And then: synthesizers.

- **Serum** and similar synths generate sounds defined by parameters (wavetable, filter cutoff, detune, etc.).
- Could you hear a track and deduce the exact preset Deadmau5 used?
- Classically: yes, with source separation + spectral features + optimization. Quantum: maybe in the far future, if we get fast phase-sensitive matching and QRAM-scale lookups.

---

## Act V: Getting Hands-On

To make it real, I built a **toy inverse synthesizer**.

1. Generate a target sound with hidden parameters.
2. Run a black-box optimizer to match the spectrogram.
3. Compare target vs match.

It worked! The recovered patch wasn't perfect, but spectrogram loss was low and the audio was close. From here, you can:

- Train a CNN on (audio → params) pairs for coarse guesses.
- Use optimizers like CMA-ES for fine-tuning.
- Swap in real Serum renders for the toy synth.

This is the skeleton of a "preset detective."

---

## Curtain Call

The arc of this exploration:
- Start with LLM bottlenecks → discover quantum algorithms like HHL.
- Explore quantum kernels → realize they're cousins to attention.
- Shift into music → timbre as fingerprints, synth patches as parameter spaces.
- End with code → a baby inverse-synth engine that actually runs.

The unifying theme: **fingerprints.** Whether it's eigenvalues, token similarities, instrument timbres, or synth settings, we're always chasing unique signatures in data. Sometimes classical algorithms are enough; sometimes quantum ideas hint at strange new tools.

And if qubits ever grow up, maybe your DAW will have a plugin that tells you exactly which wavetable and filter cutoff your favorite producer just used.

Until then, FFTs and curiosity get you most of the way there.

---`,
    date: "2025-01-20",
    readTime: "12 min read",
    category: "AI",
    tags: ["LLMs", "Quantum Computing", "Music Production", "Machine Learning", "Synthesizers"]
  },
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
                post.slug === "quantum-math-synth-knobs"
                  ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // AI/Quantum computing
                  : post.slug === "revisiting-brothers-karamazov"
                  ? "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" // Books for Dostoevsky
                  : post.slug === "ai-models-pytorch"
                  ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // AI development
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