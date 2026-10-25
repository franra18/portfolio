import type { Dict } from '../i18n/ui';

type Key = keyof Dict;

export interface Job {
  logo: 'ntt' | 'uma';
  logoWidth: string;
  title: Key;
  /** Translated pieces of the line under the title, joined with " · ". */
  meta: Key[];
  items: { text: Key; chip: string | { key: Key } | { key: Key; href: string } }[];
}

export const jobs: Job[] = [
  {
    logo: 'ntt',
    logoWidth: 'min(300px, 80%)',
    title: 'exp.ntt',
    meta: ['exp.ntt.0', 'exp.ntt.d'],
    items: [
      { text: 'exp.ntt.1', chip: 'Python · GenAI' },
      { text: 'exp.ntt.2', chip: 'Java · Spring AI' },
      { text: 'exp.ntt.3', chip: 'SDD' },
      { text: 'exp.ntt.4', chip: { key: 'exp.ntt.4v' } },
    ],
  },
  {
    logo: 'uma',
    logoWidth: 'min(220px, 60%)',
    title: 'exp.uma',
    meta: ['exp.uma.0'],
    items: [
      { text: 'exp.uma.1', chip: { key: 'exp.uma.1v' } },
      { text: 'exp.uma.2', chip: { key: 'exp.uma.2v' } },
      { text: 'exp.uma.3', chip: { key: 'exp.uma.3v', href: '#armario' } },
    ],
  },
];
