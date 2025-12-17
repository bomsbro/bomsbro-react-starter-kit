import { useNavigate, useParams } from 'react-router';

import type { BlogRequest } from '@core/api';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/shared/ui/components/atoms/button';
import { Spinner } from '@/shared/ui/components/atoms/spinner';

import { useBlogQuery, useUpdateBlogMutation } from '../../hooks/use-blog-queries';
import BlogForm from '../blog-form';

const BlogEditView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blogId = Number(id);

  const { data: blog, isLoading, isError } = useBlogQuery(blogId);
  const updateMutation = useUpdateBlogMutation();

  const handleSubmit = async (data: BlogRequest) => {
    try {
      await updateMutation.mutateAsync({ id: blogId, blog: data });
      void navigate(`/blog/${blogId}`);
    } catch {
      alert('글 수정 중 오류가 발생했습니다.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('수정 중인 내용이 사라집니다. 취소하시겠습니까?')) {
      void navigate(`/blog/${blogId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex justify-center py-12">
          <Spinner className="size-8" />
        </div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">글을 찾을 수 없습니다.</p>
          <Button variant="link" onClick={() => navigate('/blog')}>
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <Button variant="ghost" onClick={() => navigate(`/blog/${blogId}`)} className="mb-6 -ml-4">
        <ArrowLeft className="w-4 h-4" />
        돌아가기
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">글 수정</h1>
        <p className="mt-2 text-gray-600">블로그 글을 수정합니다.</p>
      </div>

      <BlogForm
        initialData={{
          title: blog.title,
          content: blog.content,
          category: blog.category,
          author: blog.author,
          thumbnail: blog.thumbnail,
        }}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isSubmitting={updateMutation.isPending}
        submitLabel="수정"
      />
    </div>
  );
};

export default BlogEditView;
