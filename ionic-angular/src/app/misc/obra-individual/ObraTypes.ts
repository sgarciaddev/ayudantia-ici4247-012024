export const variants = {
  lime: {
    bg: 'bg-lime-600 dark:bg-lime-300',
    text: 'text-lime-100 bg-lime-900/60',
    imgTone: 'bg-lime-500 dark:bg-lime-700',
  },
  emerald: {
    bg: 'bg-emerald-600 dark:bg-emerald-300',
    text: 'text-emerald-100 bg-emerald-900/60',
    imgTone: 'bg-emerald-500 dark:bg-emerald-700',
  },
  rose: {
    bg: 'bg-rose-600 dark:bg-rose-300',
    text: 'text-rose-100 bg-rose-900/60',
    imgTone: 'bg-rose-500 dark:bg-rose-700',
  },
  amber: {
    bg: 'bg-amber-600 dark:bg-amber-300',
    text: 'text-amber-100 bg-amber-900/60',
    imgTone: 'bg-amber-500 dark:bg-amber-700',
  },
  violet: {
    bg: 'bg-violet-600 dark:bg-violet-300',
    text: 'text-violet-100 bg-violet-900/60',
    imgTone: 'bg-violet-500 dark:bg-violet-700',
  },
  gray: {
    bg: 'bg-gray-600 dark:bg-gray-300',
    text: 'text-gray-100 bg-gray-900/60',
    imgTone: 'bg-gray-500 dark:bg-gray-700',
  },
  zinc: {
    bg: 'bg-zinc-600 dark:bg-zinc-300',
    text: 'text-zinc-100 bg-zinc-900/60',
    imgTone: 'bg-zinc-500 dark:bg-zinc-700',
  },
  orange: {
    bg: 'bg-orange-600 dark:bg-orange-300',
    text: 'text-orange-100 bg-orange-900/60',
    imgTone: 'bg-orange-500 dark:bg-orange-700',
  },
  yellow: {
    bg: 'bg-yellow-600 dark:bg-yellow-300',
    text: 'text-yellow-100 bg-yellow-900/60',
    imgTone: 'bg-yellow-500 dark:bg-yellow-700',
  },
  pink: {
    bg: 'bg-pink-600 dark:bg-pink-300',
    text: 'text-pink-100 bg-pink-900/60',
    imgTone: 'bg-pink-500 dark:bg-pink-700',
  },
  cyan: {
    bg: 'bg-cyan-600 dark:bg-cyan-300',
    text: 'text-cyan-100 bg-cyan-900/60',
    imgTone: 'bg-cyan-500 dark:bg-cyan-700',
  },
};
export type ObraCardVariant = keyof typeof variants;
export type ObraType = 'pelicula' | 'serie' | 'anime';
