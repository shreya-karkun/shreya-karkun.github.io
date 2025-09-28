'use client';

import papers from '@/data/publications.json';
import PaperCard from '@/components/PaperCard';
import Section from '@/components/Section';
import ResearchVisualization from '@/components/ResearchVisualization';

export default function Publications() {
  return (
    <div className="space-y-10">
      <ResearchVisualization />
      
      <Section title="Publications & Posters" description="Download PDFs, posters or view external links.">
        <div className="grid gap-4">
          {(papers as any[]).sort((a,b)=>b.year-a.year).map((p, i) => <PaperCard key={i} p={p} />)}
        </div>
      </Section>
    </div>
  );
}
