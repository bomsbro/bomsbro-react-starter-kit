const homeCategories = ['TECHNOLOGY', 'AUTOMOTIVE', 'FINANCE', 'POLITICS', 'CULTURE', 'SPORTS'];

const BlogView: React.FC = () => (
  <>
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-muted-foreground">블로그 콘텐츠가 여기에 표시됩니다.</p>
    </div>

    <nav className="bg-[#E9ECEF] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-8 py-4 flex-wrap">
          {homeCategories.map((category) => (
            <li key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="text-sm font-semibold tracking-wide hover:text-blue-600 transition-colors"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </>
);

export default BlogView;
