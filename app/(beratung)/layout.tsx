import { SiteHeader } from '@/components/SiteHeader';

export default function BeratungLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
