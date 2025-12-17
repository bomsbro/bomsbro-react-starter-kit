import { useState } from 'react';

import type { BlogRequest } from '@core/api';

import { Button } from '@/shared/ui/components/atoms/button';
import { Input } from '@/shared/ui/components/atoms/input';
import { Label } from '@/shared/ui/components/atoms/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/components/atoms/select';
import { TiptapEditor } from '@/shared/ui/components/editor';

const CATEGORIES = ['TECHNOLOGY', 'AUTOMOTIVE', 'FINANCE', 'POLITICS', 'CULTURE', 'SPORTS'];

interface BlogFormProps {
  initialData?: Partial<BlogRequest>;
  onSubmit: (data: BlogRequest) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
  submitLabel?: string;
}

const BlogForm = ({ initialData, onSubmit, onCancel, isSubmitting = false, submitLabel = '저장' }: BlogFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [content, setContent] = useState(initialData?.content ?? '');
  const [category, setCategory] = useState(initialData?.category ?? CATEGORIES[0]);
  const [author, setAuthor] = useState(initialData?.author ?? '');
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !author.trim()) {
      alert('제목, 내용, 작성자를 모두 입력해주세요.');
      return;
    }

    onSubmit({
      title: title.trim(),
      content,
      category,
      author: author.trim(),
      thumbnail: thumbnail.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">
          제목 <span className="text-destructive">*</span>
        </Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">카테고리</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">
          작성자 <span className="text-destructive">*</span>
        </Label>
        <Input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="작성자 이름"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="thumbnail">썸네일 URL</Label>
        <Input
          type="url"
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label>
          내용 <span className="text-destructive">*</span>
        </Label>
        <TiptapEditor content={content} onChange={setContent} placeholder="블로그 내용을 작성하세요..." />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          취소
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '저장 중...' : submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
