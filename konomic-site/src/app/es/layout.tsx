import { SiteShell } from '@/components/SiteShell';

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
