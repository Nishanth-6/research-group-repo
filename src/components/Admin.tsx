import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    // Get the base URL and redirect to the static admin page
    const base = import.meta.env.BASE_URL || '/';
    const baseUrl = base.endsWith('/') ? base : base + '/';
    window.location.href = `${baseUrl}admin/index.html`;
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <p>Redirecting to CMS...</p>
    </div>
  );
}
