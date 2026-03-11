import { SiteShell } from '@/components/SiteShell';

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="de">{children}</SiteShell>;
}
