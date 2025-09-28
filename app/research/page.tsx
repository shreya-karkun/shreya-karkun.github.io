import Section from '@/components/Section';

export const metadata = { title: 'Research – Shreya Karkun' };

export default function Research() {
  return (
    <div>
      <Section title="Research themes" description="Current topics and questions I explore.">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Co‑articulation', 'How articulators influence each other across phonetic contexts.'],
            ['Articulatory Symmetry', 'Quantifying left–right differences in tongue/velum motion.'],
            ['Velum Dynamics', 'Timing and asymmetry during nasal consonant production.']
          ].map(([t, d], i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm mt-2 opacity-90">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
