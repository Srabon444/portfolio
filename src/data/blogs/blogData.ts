export interface CodeBlock {
  language: string;
  code: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'code' | 'list';
  content: string | CodeBlock | string[];
  level?: 1 | 2 | 3; // For headings
  ordered?: boolean; // For lists
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  sections: BlogSection[];
}

// Sample blog about SSR, CSR, and ISR
const renderingBlog: Blog = {
  id: '1',
  slug: 'understanding-ssr-csr-and-isr',
  title: 'Understanding SSR, CSR, and ISR in Next.js',
  description: 'A deep dive into Server-Side Rendering, Client-Side Rendering, and Incremental Static Regeneration with code examples and performance comparisons.',
  image: '/blogs/rendering-patterns.jpg',
  publishedAt: 'May 6, 2025',
  readTime: '8 min read',
  tags: ['Next.js', 'React', 'SSR', 'CSR', 'ISR', 'Web Performance'],
  sections: [
    {
      type: 'heading',
      content: 'Understanding SSR, CSR, and ISR in Next.js',
      level: 1
    },
    {
      type: 'paragraph',
      content: 'In modern web development, choosing the right rendering strategy is crucial for building performant and SEO-friendly applications. Next.js offers multiple rendering strategies, each with its own advantages and trade-offs. In this blog post, we\'ll explore Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Incremental Static Regeneration (ISR).'
    },
    {
      type: 'heading',
      content: 'Server-Side Rendering (SSR)',
      level: 2
    },
    {
      type: 'paragraph',
      content: 'Server-Side Rendering (SSR) generates the full HTML for a page on the server for each request. When a user navigates to a page, the server computes the HTML and sends it to the client fully rendered.'
    },
    {
      type: 'heading',
      content: 'How SSR Works in Next.js',
      level: 3
    },
    {
      type: 'paragraph',
      content: 'In Next.js, you can implement SSR using a special async function called getServerSideProps:'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// pages/ssr-example.tsx
import type { GetServerSideProps } from 'next';

// This function runs on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from an API or database
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  // Pass data to the page via props
  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default function SSRPage({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>This page was rendered on the server with the following data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'paragraph',
      content: 'With Next.js 13+ and the App Router, you can use Server Components instead:'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// app/ssr-example/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function SSRPage() {
  const data = await getData();
  
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>This page was rendered on the server with the following data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'heading',
      content: 'Pros of SSR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'SEO-friendly: Search engines can easily index the content since the full HTML is sent to the client.',
        'Faster First Contentful Paint (FCP): Users see the content faster as the page is pre-rendered.',
        'Better performance for low-end devices: Less JavaScript needs to be processed on the client.',
        'Data security: Sensitive operations can be performed on the server.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Cons of SSR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'Higher server load: Each request requires server resources to generate HTML.',
        "Slower Time to Interactive (TTI): The page might appear quickly but isn't interactive until JavaScript loads.",
        'Slower page transitions: Each page navigation requires a full server render.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Client-Side Rendering (CSR)',
      level: 2
    },
    {
      type: 'paragraph',
      content: 'With Client-Side Rendering, the initial HTML from the server is minimal, and JavaScript takes over in the browser to render the page.'
    },
    {
      type: 'heading',
      content: 'How CSR Works in Next.js',
      level: 3
    },
    {
      type: 'paragraph',
      content: 'In Next.js, you can implement CSR using React hooks or libraries like SWR or TanStack Query:'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// pages/csr-example.tsx
import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Client-Side Rendered Page</h1>
      <p>This page was rendered on the client with the following data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'paragraph',
      content: 'Using TanStack Query (formerly React Query):'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// pages/react-query-example.tsx
import { useQuery } from '@tanstack/react-query';

async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default function ReactQueryPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exampleData'],
    queryFn: fetchData
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Client-Side Rendered with React Query</h1>
      <p>This page fetches data on the client:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'heading',
      content: 'Pros of CSR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'Rich interactions: Great for highly interactive applications.',
        'Faster subsequent page loads: Once the JS is loaded, page transitions are quick.',
        'Reduced server load: The server only sends the initial HTML shell and assets.',
        'Good for private, authenticated pages: No need for SEO on pages that require login.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Cons of CSR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'Poor SEO: Search engines might not execute JavaScript or wait for data to load.',
        'Slower initial load: Users have to wait for JavaScript to download, parse, execute, and fetch data.',
        'Performance issues on low-end devices: Heavy JavaScript execution can be slow on less powerful devices.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Incremental Static Regeneration (ISR)',
      level: 2
    },
    {
      type: 'paragraph',
      content: "ISR combines the benefits of static generation and server rendering by generating static pages that can be updated after you've deployed your site."
    },
    {
      type: 'heading',
      content: 'How ISR Works in Next.js',
      level: 3
    },
    {
      type: 'paragraph',
      content: 'In Next.js, you can implement ISR using getStaticProps with a revalidate property:'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// pages/isr-example.tsx
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from an API
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
};

export default function ISRPage({ data }) {
  return (
    <div>
      <h1>Incremental Static Regeneration Page</h1>
      <p>This page was statically generated with the following data:</p>
      <p>It will be regenerated after 60 seconds if there are new requests.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'paragraph',
      content: 'With Next.js 13+ and the App Router, you can use:'
    },
    {
      type: 'code',
      content: {
        language: 'tsx',
        code: `// app/isr-example/page.tsx
export const revalidate = 60; // revalidate this page every 60 seconds

async function getData() {
  const res = await fetch('https://api.example.com/data', { next: { revalidate: 60 } });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function ISRPage() {
  const data = await getData();
  
  return (
    <div>
      <h1>Incremental Static Regeneration Page</h1>
      <p>This page was statically generated with the following data:</p>
      <p>It will be regenerated after 60 seconds if there are new requests.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`
      }
    },
    {
      type: 'heading',
      content: 'Pros of ISR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'Fast page loads: Pages are pre-rendered and cached, resulting in rapid load times.',
        'SEO-friendly: Search engines see the complete HTML content.',
        'Reduced database/API load: Data is not fetched for every request.',
        'Always fresh content: Pages can be regenerated periodically without rebuilding the entire site.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Cons of ISR',
      level: 3
    },
    {
      type: 'list',
      content: [
        'Stale data: Users might see outdated information until the page is regenerated.',
        'Complexity: Understanding when and how pages are regenerated requires more effort.',
        'Cold starts: The first request after expiration might be slower if the page needs regeneration.'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Which Rendering Strategy Should You Choose?',
      level: 2
    },
    {
      type: 'paragraph',
      content: 'The best rendering strategy depends on your specific use case:'
    },
    {
      type: 'paragraph',
      content: 'Use SSR when:'
    },
    {
      type: 'list',
      content: [
        'SEO is critical',
        'Page content changes with each request',
        'You need user-specific content on first load',
        'You need access to request information (cookies, headers)'
      ],
      ordered: false
    },
    {
      type: 'paragraph',
      content: 'Use CSR when:'
    },
    {
      type: 'list',
      content: [
        'The page is highly interactive',
        'SEO is not important (e.g., dashboards, admin panels)',
        'You want faster subsequent navigation',
        "You're building a private application"
      ],
      ordered: false
    },
    {
      type: 'paragraph',
      content: 'Use ISR when:'
    },
    {
      type: 'list',
      content: [
        'You want the SEO benefits of SSR',
        'Content updates are not needed immediately',
        'You want to minimize server load',
        'You have high-traffic pages with infrequently changing data'
      ],
      ordered: false
    },
    {
      type: 'heading',
      content: 'Conclusion',
      level: 2
    },
    {
      type: 'paragraph',
      content: 'Next.js provides flexible rendering options that let you choose the right approach for each page in your application. You can even mix and match these strategies within a single application – using SSR for dynamic content, ISR for semi-dynamic pages, and CSR for highly interactive components.'
    },
    {
      type: 'paragraph',
      content: 'Modern web development is about making intelligent trade-offs. By understanding the strengths and weaknesses of each rendering method, you can build applications that provide excellent user experience, good SEO, and optimal performance.'
    }
  ]
};

// Generate more sample blogs
const generateSampleBlogs = (): Blog[] => {
  const blogs: Blog[] = [renderingBlog];
  
  // Generate 15 more sample blogs
  for (let i = 2; i <= 16; i++) {
    blogs.push({
      id: i.toString(),
      slug: `sample-blog-${i}`,
      title: `Sample Blog Post ${i}`,
      description: `This is a sample blog post ${i} description that provides a brief overview of the content.`,
      image: `/blogs/sample-${i % 5 + 1}.jpg`,
      publishedAt: `May ${i}, 2025`,
      readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
      tags: ['Sample', 'Web Development', i % 2 === 0 ? 'React' : 'JavaScript'],
      sections: [
        {
          type: 'heading',
          content: `Sample Blog Post ${i}`,
          level: 1
        },
        {
          type: 'paragraph',
          content: `This is the content for sample blog post ${i}. In a real-world scenario, this would contain meaningful content related to web development, programming, or other technical topics.`
        }
      ]
    });
  }
  
  return blogs;
};

// Export the blog data
export const blogs = generateSampleBlogs();