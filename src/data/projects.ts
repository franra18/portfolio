import type { Dict } from '../i18n/ui';

export interface Project {
  title: string;
  /** Set when the title itself is translated. */
  titleKey?: keyof Dict;
  tags: string;
  desc: keyof Dict;
  repo: string;
  field: 'dark' | 'white';
  mock: 'clipsync' | 'terminal' | 'phone' | 'reviews';
  id?: string;
}

export const projects: Project[] = [
  {
    title: 'ClipSync',
    tags: 'Python · FastAPI · Redis · OpenCV · Whisper · FFmpeg · React · Docker',
    desc: 'p1.d',
    repo: 'https://github.com/franra18/clipsync',
    field: 'dark',
    mock: 'clipsync',
  },
  {
    title: 'Job Hunt Copilot MCP',
    tags: 'Java 21 · Spring Boot · Spring AI · Gemini · PostgreSQL · Docker',
    desc: 'p2.d',
    repo: 'https://github.com/franra18/job-hunt-copilot-mcp',
    field: 'white',
    mock: 'terminal',
  },
  {
    title: 'Armario Virtual',
    titleKey: 'p3.t',
    tags: 'React Native (Expo) · Redux Toolkit · FastAPI · MySQL · Gemini',
    desc: 'p3.d',
    repo: 'https://github.com/franra18/ArmarioVirtual',
    field: 'dark',
    mock: 'phone',
    id: 'armario',
  },
  {
    title: 'ReViews',
    tags: 'Vue 3 · Leaflet · FastAPI · MongoDB',
    desc: 'p4.d',
    repo: 'https://github.com/franra18/ReViews',
    field: 'white',
    mock: 'reviews',
  },
];
