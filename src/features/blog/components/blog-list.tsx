import { Link } from 'react-router';

import type { Blog } from '@core/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogListProps {
  blogs: Blog[];
  total: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
};

const BlogListItem = ({ blog }: { blog: Blog }) => (
  <Link to={`/blog/${blog.id}`} className="block">
    <article className="flex gap-6 py-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-lg">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-gray-500">{blog.category}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{blog.content}</p>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>{blog.author}</span>
          <span>·</span>
          <span>{formatDate(blog.createdAt)}</span>
        </div>
      </div>

      {blog.thumbnail && (
        <div className="flex-shrink-0">
          <img src={blog.thumbnail} alt={blog.title} className="w-32 h-24 object-cover rounded-lg" />
        </div>
      )}
    </article>
  </Link>
);

const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: { key: string; value: number | string }[] = [];
    const showPages = 5;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    const end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    if (start > 1) {
      pages.push({ key: 'first-1', value: 1 });
      if (start > 2) pages.push({ key: 'ellipsis-start', value: '...' });
    }

    for (let i = start; i <= end; i++) {
      pages.push({ key: `page-${i}`, value: i });
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push({ key: 'ellipsis-end', value: '...' });
      pages.push({ key: `last-${totalPages}`, value: totalPages });
    }

    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-1 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="이전 페이지"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {getPageNumbers().map((page) =>
        typeof page.value === 'number' ? (
          <button
            key={page.key}
            onClick={() => onPageChange(page.value as number)}
            className={`min-w-[40px] h-10 rounded-lg text-sm font-medium transition-colors ${
              currentPage === page.value ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {page.value}
          </button>
        ) : (
          <span key={page.key} className="px-2 text-gray-400">
            {page.value}
          </span>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="다음 페이지"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
};

const BlogList = ({ blogs, total, currentPage, totalPages, onPageChange }: BlogListProps) => (
  <>
    <div className="mb-4 text-sm text-gray-500">총 {total}개의 글</div>

    {blogs.length === 0 ? (
      <div className="text-center py-12 text-gray-500">게시글이 없습니다.</div>
    ) : (
      <div className="divide-y divide-gray-200">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </div>
    )}

    <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
  </>
);

export default BlogList;
