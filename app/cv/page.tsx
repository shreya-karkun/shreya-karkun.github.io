'use client';

import profile from '@/data/profile.json';
import education from '@/data/education.json';
import experience from '@/data/experience.json';

export default function CV() {
  return (
    <div className="card p-8 print:p-0">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
        <button onClick={() => window.print()} className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700">Download PDF</button>
      </div>
      <p className="mt-2">{profile.name} — {profile.role} • {profile.location}</p>
      <h2 className="mt-6 text-xl font-semibold">Experience</h2>
      <ul className="mt-2 space-y-3">
        {(experience as any[]).map((e,i)=>(
          <li key={i}>
            <div className="font-medium">{e.role} — {e.org}</div>
          </li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Education</h2>
      <ul className="mt-2 space-y-2">
        {(education as any[]).map((ed,i)=>(<li key={i}>{ed.degree}, {ed.field} — {ed.school} ({ed.year})</li>))}
      </ul>
    </div>
  );
}
