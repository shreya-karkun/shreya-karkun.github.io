export const metadata = { title: 'Contact – Shreya Karkun' };

export default function Contact() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
  return (
    <div className="card p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="mt-6 space-y-4">
        <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent p-3" />
        <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent p-3" />
        <textarea required name="message" placeholder="Message" rows={6} className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent p-3" />
        <button className="px-4 py-2 rounded-xl bg-brand-600 text-white">Send</button>
      </form>
      {!formspreeId && <p className="mt-3 text-sm opacity-70">Set <code>NEXT_PUBLIC_FORMSPREE_ID</code> to enable form submission.</p>}
    </div>
  );
}
