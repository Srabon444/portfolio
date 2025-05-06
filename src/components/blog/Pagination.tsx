'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

// Define a type for the pagination range items
type PaginationItem = number | string;

const Pagination: React.FC<PaginationProps> = ({ 
  totalItems, 
  itemsPerPage, 
  currentPage 
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Generate pagination range with ellipsis
  const paginationRange = useMemo((): PaginationItem[] => {
    // Initialize with explicit type
    const pageNumbers: PaginationItem[] = [];
    const totalPageNumbers = 7; // Maximum number of page buttons to show
    
    if (totalPages <= totalPageNumbers) {
      // If we have less pages than the maximum, show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Calculate how many neighbors to show on each side of current page
    const leftNeighborCount = 2;
    const rightNeighborCount = 2;
    
    // Always show first and last page
    const shouldShowLeftDots = currentPage > leftNeighborCount + 1;
    const shouldShowRightDots = currentPage < totalPages - rightNeighborCount;
    
    // Handle case when we show dots on the left
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 5;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, '...', ...rightRange];
    }
    
    // Handle case when we show dots on the right
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 5;
      const leftRange = Array.from(
        { length: leftItemCount },
        (_, i) => i + 1
      );
      return [...leftRange, '...', totalPages];
    }
    
    // Handle case when we show dots on both sides
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightNeighborCount + leftNeighborCount + 1 },
        (_, i) => currentPage - leftNeighborCount + i
      );
      return [1, '...', ...middleRange, '...', totalPages];
    }
    
    return pageNumbers;
  }, [totalPages, currentPage]);
  
  // Create a URL for a specific page
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center my-8 gap-1">
      {/* Previous button */}
      <Link 
        href={createPageURL(Math.max(1, currentPage - 1))}
        className={`px-3 py-2 rounded-md flex items-center justify-center text-sm font-medium 
          ${currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span className="sr-only">Previous</span>
      </Link>
      
      {/* Page numbers */}
      {paginationRange.map((page, index) => {
        if (page === '...') {
          return (
            <span 
              key={`ellipsis-${index}`} 
              className="px-3 py-2 text-gray-500 dark:text-gray-400"
            >
              ...
            </span>
          );
        }
        
        return (
          <Link 
            key={`page-${page}`}
            href={createPageURL(page as number)}
            className={`px-3 py-2 rounded-md text-sm font-medium 
              ${currentPage === page 
                ? 'bg-primary text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </Link>
        );
      })}
      
      {/* Next button */}
      <Link 
        href={createPageURL(Math.min(totalPages, currentPage + 1))}
        className={`px-3 py-2 rounded-md flex items-center justify-center text-sm font-medium 
          ${currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <span className="sr-only">Next</span>
      </Link>
    </div>
  );
};

export default Pagination;