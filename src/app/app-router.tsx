import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router';

import AboutView from '@/features/about/about-view';
import BlogCreateView from '@/features/blog/components/views/blog-create-view';
import BlogDetailView from '@/features/blog/components/views/blog-detail-view';
import BlogEditView from '@/features/blog/components/views/blog-edit-view';
import BlogView from '@/features/blog/components/views/blog-view';
import HomeView from '@/features/home/home-view';
import { Button } from '@/shared/ui/components/atoms/button';
import Layout from '@/shared/ui/components/layout/layout';

const NotFoundPage = () => (
  <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground">Page Not Found</p>
      <Button variant="link" asChild>
        <a href="/">Go Home</a>
      </Button>
    </div>
  </div>
);

const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: '/blog',
        element: <BlogView />,
      },
      {
        path: '/blog/new',
        element: <BlogCreateView />,
      },
      {
        path: '/blog/:id',
        element: <BlogDetailView />,
      },
      {
        path: '/blog/:id/edit',
        element: <BlogEditView />,
      },
      {
        path: '/about',
        element: <AboutView />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
