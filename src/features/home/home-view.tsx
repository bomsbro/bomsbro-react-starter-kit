import { Link } from 'react-router';

import { Badge } from '@/shared/ui/components/atoms/badge';
import { Button } from '@/shared/ui/components/atoms/button';
import { Card, CardContent } from '@/shared/ui/components/atoms/card';

import NewsTicker from './news-ticker';

const homeContents = [
  {
    id: 1,
    category: 'TECHNOLOGY',
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
            <Card key={post.id} className="overflow-hidden py-0 hover:shadow-md transition-shadow">
              <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs font-bold tracking-wider text-blue-600">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-balance">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  By <span className="font-semibold text-foreground">{post.author}</span>. Published on {post.date}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to={`/post/${post.id}`}>
                    CONTINUE READING <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* About Us Card */}
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique.
                Vestibulum ut finibus leo. In hac habitasse platea dictumst.
              </p>
              <Button className="w-full bg-[#2C5AA0] hover:bg-[#234888] text-white">GET TO KNOW US</Button>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
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
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  </>
);

export default HomeView;
