import projects from '@/data/projects.json';
import Section from '@/components/Section';

export const metadata = { title: 'Projects – Shreya Karkun' };

export default function Projects() {
  return (
    <Section title="Projects" description="Selected tools and experiments.">
      <div className="grid md:grid-cols-2 gap-4">
        {(projects as any[]).map((p, i) => (
          <article key={i} className="card p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-2 opacity-90">{p.summary}</p>
            <div className="mt-2 text-xs">{p.tags.join(' • ')} • {p.year}</div>
            {p.link && <a className="underline text-sm mt-2 inline-block" href={p.link}>Learn more</a>}
          </article>
        ))}
      </div>
    </Section>
  );
}
