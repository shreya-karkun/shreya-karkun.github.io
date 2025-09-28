import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Section from '@/components/Section';

export const metadata = { title: 'Blog – Shreya Karkun' };

export default function Blog() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const posts = fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(fn => {
    const raw = fs.readFileSync(path.join(dir, fn), 'utf8');
    const { data } = matter(raw);
    return { slug: fn.replace(/\.md$/, ''), ...data };
  }).sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Section title="Blog">
      <ul className="grid gap-3">
        {posts.map((p:any)=>(
          <li key={p.slug} className="card p-5">
            <a className="block" href={`/blog/${p.slug}`}>
              <div className="text-sm opacity-60">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="font-semibold">{p.title}</h3>
              {p.tags && <div className="mt-2 text-xs">{(p.tags as string[]).join(' • ')}</div>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
