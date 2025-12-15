import { Link } from 'react-router';

import { Button } from '@/shared/ui/components/atoms/button';

import NewsTicker from './NewsTicker';

const homeContents = [
  {
    id: 1,
    category: 'TECHNOLOGY',
    categoryColor: 'text-blue-600',
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
    author: 'David Grzyb',
    date: 'April 25th, 2020',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
    image: '/interconnected-technology.png',
  },
  {
    id: 2,
    category: 'AUTOMOTIVE, FINANCE',
    categoryColor: 'text-blue-600',
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
    author: 'David Grzyb',
    date: 'January 12th, 2020',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
    image: '/classic-car-restoration.png',
  },
  {
    id: 3,
    category: 'SPORTS',
    categoryColor: 'text-blue-600',
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
    author: 'David Grzyb',
    date: 'March 8th, 2020',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
    image: '/diverse-group-playing-various-sports.png',
  },
];

const HomeView: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="bg-[#F8F9FA] py-16 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-balance">MINIMAL BLOG</h1>
        <p className="text-lg text-muted-foreground">Lorem Ipsum Dolor Sit Amet</p>
      </div>
    </section>

    {/* Latest News Ticker */}
    <NewsTicker />

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-8">
          {homeContents.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="mb-4">
                  <span className={`text-xs font-bold tracking-wider ${post.categoryColor}`}>{post.category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-balance">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  By <span className="font-semibold text-foreground">{post.author}</span>. Published on {post.date}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                <Link
                  to={`/post/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                >
                  CONTINUE READING
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* About Us Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique.
              Vestibulum ut finibus leo. In hac habitasse platea dictumst.
            </p>
            <Button className="w-full bg-[#2C5AA0] hover:bg-[#234888] text-white">GET TO KNOW US</Button>
          </div>

          {/* Instagram Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={`instagram-${i + 1}`} className="aspect-square bg-gray-200 rounded overflow-hidden">
                  <img
                    src={`/instagram-${i + 1}.jpg`}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </>
);

export default HomeView;
