import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { mdToHtml } from '@/lib/markdown';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  return fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(fn => ({ slug: fn.replace(/\.md$/, '') }));
}

export default async function Post({ params }: { params: { slug: string }}) {
  const file = path.join(process.cwd(), 'content', 'blog', `${params.slug}.md`);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const html = await mdToHtml(content);
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none card p-6">
      <div className="text-sm opacity-60">{new Date(data.date).toLocaleDateString()}</div>
      <h1 className="!mb-2">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
