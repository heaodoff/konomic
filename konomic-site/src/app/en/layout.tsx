import { SiteShell } from '@/components/SiteShell';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
