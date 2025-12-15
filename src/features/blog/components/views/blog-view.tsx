import { useState } from 'react';
import { Link } from 'react-router';

import { Plus } from 'lucide-react';

import { useBlogsQuery } from '../../hooks/use-blog-queries';
import BlogList from '../blog-list';

const CATEGORIES = ['ALL', 'TECHNOLOGY', 'AUTOMOTIVE', 'FINANCE', 'POLITICS', 'CULTURE', 'SPORTS'];
const ITEMS_PER_PAGE = 10;

const BlogView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const { data, isLoading, isError } = useBlogsQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    category: selectedCategory === 'ALL' ? undefined : selectedCategory,
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <nav className="bg-[#E9ECEF] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-4 flex-wrap">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    selectedCategory === category ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-end mb-4">
          <Link
            to="/blog/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />새 글 작성
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        )}

        {isError && <div className="text-center py-12 text-red-500">데이터를 불러오는 중 오류가 발생했습니다.</div>}

        {data && (
          <BlogList
            blogs={data.data}
            total={data.total}
            currentPage={currentPage}
            totalPages={data.totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default BlogView;
