import { useNavigate } from 'react-router';

import type { BlogRequest } from '@core/api';
import { ArrowLeft } from 'lucide-react';

import { useCreateBlogMutation } from '../../hooks/use-blog-queries';
import BlogForm from '../blog-form';

const BlogCreateView = () => {
  const navigate = useNavigate();
  const createMutation = useCreateBlogMutation();

  const handleSubmit = async (data: BlogRequest) => {
    try {
      await createMutation.mutateAsync(data);
      void navigate('/blog');
    } catch {
      alert('글 작성 중 오류가 발생했습니다.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('작성 중인 내용이 사라집니다. 취소하시겠습니까?')) {
      void navigate('/blog');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        목록으로
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">새 글 작성</h1>
        <p className="mt-2 text-gray-600">블로그에 새 글을 작성합니다.</p>
      </div>

      <BlogForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isSubmitting={createMutation.isPending}
        submitLabel="작성"
      />
    </div>
  );
};

export default BlogCreateView;
