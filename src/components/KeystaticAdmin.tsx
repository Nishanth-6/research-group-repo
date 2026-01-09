export default function KeystaticAdmin() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>CMS Admin Panel</h1>
      <p>Keystatic integration is being configured.</p>
      <p>For now, you can edit content by:</p>
      <ol>
        <li>Editing JSON files in <code>/public/data/</code></li>
        <li>Projects: <code>/public/data/projects/</code></li>
        <li>Team: <code>/public/data/team/</code></li>
        <li>Publications: <code>/public/data/publications/</code></li>
      </ol>
      <p>Changes will appear immediately when you refresh the site.</p>
    </div>
  );
}
