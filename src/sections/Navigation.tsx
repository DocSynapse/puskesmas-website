import { FloatingHeader } from '@/components/ui/floating-header';

const Navigation = () => {
  const crewPortalUrl = import.meta.env.VITE_CREW_PORTAL_URL ?? 'http://localhost:3000';
  return <FloatingHeader crewPortalUrl={crewPortalUrl} />;
};

export default Navigation;
