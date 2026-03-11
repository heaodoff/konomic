import { SiteShell } from '@/components/SiteShell';

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="ru">{children}</SiteShell>;
}
