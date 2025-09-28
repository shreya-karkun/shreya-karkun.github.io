export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(d: string | number | Date) {
  return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
}
