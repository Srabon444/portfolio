import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/data/blogs/blogData';
import Container from '@/components/shared/Container';
import CopyrightFooter from '@/components/shared/CopyrightFooter';
import Pagination from '@/components/blog/Pagination';

export const metadata: Metadata = {
  title: 'Ashraful Islam - Technical Blog',
  description: 'Technical blog posts about web development, programming, and software engineering by Ashraful Islam.',
};

export default function BlogsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Pagination settings
  const blogsPerPage = 5;
  const currentPage = Number(searchParams.page) || 1;
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Container className="max-w-5xl mx-auto pt-28 pb-12 px-4">
          {/* Page header with back button */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary-foreground dark:to-blue-300">
                Technical Blog
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Thoughts, insights, and deep dives into web development and software engineering
              </p>
            </div>
          </div>

          {/* Blog list */}
          <div className="space-y-10">
            {paginatedBlogs.map((blog) => (
              <article key={blog.id} className="group relative">
                <Link 
                  href={`/blogs/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Blog image */}
                    <div className="md:col-span-1">
                      <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Blog content */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <time dateTime={blog.publishedAt}>{blog.publishedAt}</time>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      
                      <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-2">
                        {blog.description}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 inline-flex items-center font-medium text-primary dark:text-primary-foreground">
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            totalItems={blogs.length}
            itemsPerPage={blogsPerPage}
            currentPage={currentPage}
          />
        </Container>
      </div>
      
      {/* Footer always at the bottom */}
      <CopyrightFooter />
    </main>
  );
}