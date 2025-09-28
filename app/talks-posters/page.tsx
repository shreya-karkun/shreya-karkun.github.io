'use client';

import talks from '@/data/talks.json';
import Section from '@/components/Section';
import ConferenceGallery from '@/components/ConferenceGallery';

export default function Talks() {
  return (
    <div className="space-y-10">
      <ConferenceGallery />
      
      <Section title="Talks & Posters" description="Conferences and invited presentations.">
        <div className="grid md:grid-cols-2 gap-4">
          {(talks as any[]).map((t, i) => (
            <article key={i} className="card overflow-hidden">
              <div className="p-4">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm mt-1">{t.event} • {new Date(t.date).toLocaleDateString()}</p>
                {t.link && <a className="underline text-sm mt-2 inline-block" href={t.link}>Link</a>}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
