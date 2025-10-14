'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import RotatingShape from '@/components/RotatingShape';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import 'highlight.js/styles/github-dark.css';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

// This is where you'll add your blog posts
const blogPosts = [
  {
    slug: "hello-quantum-world",
    title: "Hello, Quantum World --- My First Steps with IBM Quantum & Qiskit",
    content: `# Hello, Quantum World --- My First Steps with IBM Quantum & Qiskit

## Introduction

I recently followed IBM Quantum's **"Hello world" tutorial** and got my
hands dirty with qubits, entanglement, and the real challenges of
running circuits on quantum hardware. In this post I'll walk through
what I learned, show code snippets, and reflect on what surprised me
(and what I'm excited to try next).

------------------------------------------------------------------------

## Setting the Stage

To get started, I set up a Python environment (Jupyter) with **Qiskit**,
**qiskit‑ibm-runtime**, and \`matplotlib\`. I also configured my IBM
Quantum credentials so that I could submit jobs to real quantum
processors via IBM Cloud.

This setup might seem boilerplate, but it's crucial: quantum frameworks
depend heavily on proper versions, backend connectivity, and
visualization tools.

------------------------------------------------------------------------

## The Four Phases of a Quantum Program

One of the most useful mental models I picked up from the tutorial is
that any quantum program (in this Qiskit + IBM runtime setting) can be
thought of in four phases:

1.  **Map** --- translate your problem into circuits and operators  
2.  **Optimize** --- adapt circuits to hardware constraints, reduce
    depth, map layouts  
3.  **Execute** --- send the job to a simulator or QPU using primitives
    like \`Estimator\` or \`Sampler\`  
4.  **Analyze** --- interpret results, plot, use error mitigation

This "pipeline" abstraction is helpful: any nontrivial quantum algorithm
you write later will go through these phases.

------------------------------------------------------------------------

## A Toy Example: Bell State + Observables

To test things out, I constructed this simple circuit:

\`\`\` python
from qiskit import QuantumCircuit
qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
qc.draw("mpl")
\`\`\`

This prepares a **Bell entangled state** between qubits 0 and 1.

Next, I defined a few observables (Pauli operators) using
\`SparsePauliOp\`:  
\`IZ, IX, ZI, XI, ZZ, XX\`.

These capture single‑qubit measurements (e.g. Z on second qubit) and
correlations (e.g. Z⊗Z or X⊗X). The expectation values of these
observables will tell me whether the qubits behave independently or are
correlated (entangled).

Before execution, the tutorial walks through the optimization stage:
mapping the circuit and operators into the basis gates, considering the
backend's architecture, and minimizing circuit depth.

For execution, I used:

\`\`\` python
from qiskit_ibm_runtime import EstimatorV2 as Estimator
estimator = Estimator(mode=backend)
estimator.options.resilience_level = 1
estimator.options.default_shots = 5000
job = estimator.run([(isa_circuit, mapped_observables)])
\`\`\`

Once the job completes, I retrieved expectation values and plotted them.
In the Bell state case, the single-qubit expectation values (like ⟨Z⟩ or
⟨X⟩ individually) came out ~0, while the correlation terms (⟨ZZ⟩, ⟨XX⟩)
were ~1 --- a hallmark of entanglement.

------------------------------------------------------------------------

## Scaling Up: GHZ States and the Noise Problem

After verifying things on 2 qubits, the tutorial scales to 100 qubits by
preparing a **GHZ state**: a sort of "all qubits entangled in one large
superposition."

\`\`\` python
def get_qc_for_n_qubit_GHZ_state(n):
    qc = QuantumCircuit(n)
    qc.h(0)
    for i in range(n - 1):
        qc.cx(i, i+1)
    return qc
\`\`\`

Then they define operators like ( Z_0 Z_i ) to probe how correlation
decays over distance in the presence of hardware noise. The normalized
expectation values (⟨Z₀Zᵢ⟩ / ⟨Z₀Z₁⟩) are plotted against qubit
separation distance. As expected, the farther apart two qubits are, the
weaker the measured correlation --- illustrating decoherence and error
accumulation in real devices.

They also turn on error-resilience options (e.g., dynamical decoupling)
in the \`Estimator\` to help mitigate some of that noise, though it
doesn't perfect the results.

------------------------------------------------------------------------

## What Surprised Me & Lessons Learned

-   The sheer difference between *ideal* outcomes (in theory or
    simulation) and real hardware outputs is humbling. Even in a simple
    2-qubit example, noise and errors impact results.  
-   The optimization / mapping stage is not cosmetic --- it's essential.
    You can propose a circuit, but if it doesn't respect the physical
    qubit connectivity or the device's basic gates, it'll be remapped
    (and possibly degraded) behind the scenes.  
-   Scaling is brutal. Even though building a 100-qubit circuit is
    "easy" in code, actually getting reliable results is hard. The decay
    of correlations is a real-world symptom of quantum fragility.

------------------------------------------------------------------------

## What's Next For Me (And You)

-   Dive deeper into **error mitigation** techniques (zero-noise
    extrapolation, readout error correction).  
-   Try other tutorials, e.g. **VQE (Variational Quantum Eigensolver)**,
    **Quantum Phase Estimation**, or **QAOA**.  
-   Experiment with **hybrid quantum-classical workflows**, where part
    of the algorithm runs in Python / classical compute and part runs on
    the QPU.  
-   Explore more complex circuits, custom observables, or even quantum
    algorithms for chemistry, optimization, or simulation.`,
    date: "2025-10-14",
    readTime: "10 min read",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Qiskit", "IBM Quantum", "Programming", "Physics"]
  },
  {
    slug: "quantum-math-synth-knobs",
    title: "From Quantum Math to Synth Knobs: A Strange Journey Through Brains, Qubits, and Sound",
    content: `# From Quantum Math to Synth Knobs: A Strange Journey Through Brains, Qubits, and Sound

It all started with a simple question: *how do you make giant language models faster?*

These models are like overgrown houseplants — sprawling, thirsty, and in constant need of pruning. Engineers have found clever ways to trim them down. **Quantization** shrinks their brains into 8-bit or 4-bit without destroying memory. **Speculative decoding** lets a small "draft model" write ahead while the big one just checks its work. Tricks like **paged attention** and **cache reuse** keep us from redoing math we already solved. It's all about shaving milliseconds off billions of calculations.

---

## The Quantum Detour

Then came the tempting thought: *could quantum computers help with this?*

Qubits don't behave like ordinary bits — they live in superpositions, balancing yes and no at the same time. The **HHL algorithm** teases us with the promise of solving linear systems exponentially faster, which is right at the heart of neural nets. Other quantum tricks could supercharge sampling, compress embeddings into tiny quantum states, or even swap in for transformer attention with quantum overlap tests.

But here's the rub: preparing data for a quantum computer is slow, the hardware is noisy, and pulling the answer back out into classical form isn't cheap either. For now, it's less of a usable tool and more of a glowing lighthouse out on the horizon.

---

## Kernels, Overlaps, and Attention

The journey twisted again into kernels. In classical machine learning, kernels are shortcuts for measuring similarity without explicitly crunching through all the data.

Quantum systems can do something similar. By encoding information as quantum states, you can ask: *how alike are these two states?* The result is just an overlap test, a kind of fingerprint comparison at the quantum scale.

Here's the plain-text version of the quantum kernel idea:

\`\`\`
k(x, y) = | <phi(x) | phi(y)> |²
\`\`\`

What's wild is that this looks a lot like what transformers already do with **attention**. It's just another way of comparing inputs. Which means the gap between transformers and quantum algorithms may be smaller than it seems.

---

## Where Music Sneaks In

And because no conversation stays purely technical for long, this one slid into music.

Every instrument has its own **acoustic fingerprint** — the resonances of a violin, the airy breath of a flute, the shimmer of a cymbal. You can think of timbre as the sonic equivalent of a fingerprint. Could we replace serial numbers on violins with sound tests? Probably not — human variability and messy environments would blur the picture too much. But for delicate jobs like forgery detection or teasing apart nearly identical tones, the idea has appeal.

From there it was just a small hop to **synthesizers**. Serum, for example, is a universe of wavetables, filters, and knobs. Producers twist these controls into unique sonic identities. In theory, you could work backwards from a track, tracing the sound to the preset that made it. Classically, you'd use spectrogram analysis and parameter inference. Quantumly, you might one day use phase-sensitive overlaps and massive database searches to do the same thing at scale.

---

## What Ties It All Together

Stepping back, the theme that kept resurfacing was **fingerprints**.

- Matrices have eigenvalue fingerprints.
- Attention layers compute similarity fingerprints.
- Instruments carry timbral fingerprints.
- Synth patches hide behind parameter fingerprints.

Whether it's language models, qubits, or violins, the puzzle is always about identifying the hidden signature in a sea of noise. Sometimes GPUs and FFTs are enough; sometimes quantum dreams hint at stranger tools.

Maybe, someday, when quantum machines grow up, your DAW will include a plugin that can whisper: *"This track was made with this preset, these knobs, this exact sonic DNA."* Until then, the mix of classical math, a bit of signal analysis, and a lot of curiosity is more than enough to keep exploring.`,
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

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = React.useState<string>('');
  
  React.useEffect(() => {
    params.then(resolvedParams => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);
  const post = blogPosts.find(p => p.slug === slug);

  if (!slug) {
    return <div>Loading...</div>;
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 3D Rotating Shape Hero */}
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <RotatingShape shape={
                  post.slug === "hello-quantum-world" ? 'atom' :
                  post.slug === "quantum-math-synth-knobs" ? 'star' : 
                  'cube'
                } />
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
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                  rehypeHighlight,
                  [rehypeKatex, { throwOnError: false, strict: false }]
                ]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-white mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">
                      {children}
                    </li>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className={className}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto my-4">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-300 my-4">
                      {children}
                    </blockquote>
                  ),
                  hr: () => (
                    <hr className="border-gray-600 my-8" />
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-white">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-300">
                      {children}
                    </em>
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 