# Keystatic CMS Setup Guide

You now have Keystatic CMS integrated into your research website! This is a modern, user-friendly content management system that works directly with GitHub.

## What is Keystatic?

Keystatic is a modern CMS that:
- ✅ Works directly with GitHub (no third-party services)
- ✅ Stores content as files in your repository
- ✅ Provides a beautiful admin interface at `/keystatic`
- ✅ No backend server required
- ✅ Free and open-source

## Quick Start

### Local Development (No Setup Required!)

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Access Keystatic**:
   - Visit: `http://localhost:3000/keystatic`
   - In local mode, you can edit content immediately - no login required!

3. **Edit content**:
   - Click on "Projects", "Team Members", or "Publications"
   - Add, edit, or delete entries
   - Click "Save" - changes are written to your JSON files
   - Refresh your site to see the changes

### Production (GitHub Pages)

For the deployed site, you need to set up GitHub authentication:

#### Option 1: GitHub OAuth App (Recommended)

1. **Create a GitHub OAuth App**:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: `Research Team CMS`
     - Homepage URL: `https://nishanth-6.github.io/research-group-repo/`
     - Authorization callback URL: `https://nishanth-6.github.io/research-group-repo/keystatic/api/github/oauth/callback`
   - Click "Register application"
   - **Save your Client ID**

2. **Update Keystatic config**:

   In `keystatic.config.tsx`, update the storage section:
   ```typescript
   storage: {
     kind: 'github',
     repo: 'Nishanth-6/research-group-repo',
     branchPrefix: 'keystatic/',
   },
   ```

3. **Set up GitHub App** (simpler alternative):
   - Or use Keystatic Cloud (free) which handles auth for you
   - Visit: https://keystatic.cloud
   - Connect your GitHub repo
   - It handles all authentication automatically

#### Option 2: Keystatic Cloud (Easiest - Recommended)

1. **Visit Keystatic Cloud**:
   - Go to: https://keystatic.cloud
   - Sign in with GitHub

2. **Connect your repository**:
   - Click "New Project"
   - Select `Nishanth-6/research-group-repo`
   - Keystatic Cloud handles all authentication

3. **Access CMS**:
   - Visit: `https://nishanth-6.github.io/research-group-repo/keystatic`
   - Click "Sign in with GitHub"
   - You're ready to edit!

## How It Works

### Content Structure

All content is stored as JSON files in `/public/data/`:

```
public/data/
├── projects/               # Research projects
│   ├── smart-grid-optimization.json
│   ├── resilient-infrastructure.json
│   └── ...
├── team/                   # Team members
│   ├── faculty-1.json
│   ├── researcher-1.json
│   └── ...
├── publications/           # Publications
│   ├── 2024-paper-1.json
│   └── ...
└── settings/               # Site settings
    ├── general.json
    └── about.json
```

### Workflow

1. **Edit in Keystatic**: Make changes through the `/keystatic` interface
2. **Save**: Keystatic creates a Git commit
3. **Deploy**: Push changes or Keystatic auto-commits to GitHub
4. **Rebuild**: GitHub Pages automatically rebuilds your site

## Using the CMS

### Projects

Add or edit research projects with:
- Title and description
- Project image URL
- Categories (energy, AI, infrastructure, etc.)
- Team members
- Status (active, completed, upcoming)
- Dates and project URL

### Team Members

Manage faculty, postdocs, and PhD students:
- Name, role, and bio
- Photo URL
- Contact information
- Research interests
- Social media links (LinkedIn, Google Scholar, personal website)

### Publications

Add journal papers, conference papers, and preprints:
- Title, authors, year, venue
- Abstract
- Publication type
- Links to DOI, PDF

### Site Settings

Update global settings:
- **General Settings**: Site title, hero text, contact info
- **About Page**: Mission, vision, content

## Local vs Production

### Local Development
- **URL**: `http://localhost:3000/keystatic`
- **Auth**: None required
- **Changes**: Saved directly to local files
- **Commits**: You control when to commit

### Production (GitHub Pages)
- **URL**: `https://nishanth-6.github.io/research-group-repo/keystatic`
- **Auth**: GitHub login required
- **Changes**: Auto-committed to GitHub
- **Deployment**: Auto-triggers GitHub Pages rebuild

## Advantages Over Decap CMS

- ✅ **No deprecated services** - Keystatic is actively developed
- ✅ **Simpler authentication** - Direct GitHub integration
- ✅ **Better UI** - Modern, intuitive interface
- ✅ **Local development** - Works offline, no auth needed
- ✅ **No third-party dependencies** - Just GitHub
- ✅ **Faster** - No API calls to external services

## Common Tasks

### Add a New Project

1. Go to `/keystatic`
2. Click "Projects" → "Create Entry"
3. Fill in the form
4. Click "Save"
5. Your new project appears on the site!

### Edit Team Members

1. Go to `/keystatic`
2. Click "Team Members"
3. Select a member or click "Create Entry"
4. Update information
5. Click "Save"

### Update Site Settings

1. Go to `/keystatic`
2. Click "Site Settings" or "About Page"
3. Edit the fields
4. Click "Save"

## Deployment

### GitHub Pages (Current Setup)

Already configured! Just:

```bash
npm run build
npm run deploy
```

Or commit and push - GitHub Actions handles the rest.

### Accessing the CMS

- **Local**: `http://localhost:3000/keystatic`
- **Production**: `https://nishanth-6.github.io/research-group-repo/keystatic`

## Troubleshooting

### CMS not loading

**Issue**: Blank page at `/keystatic`

**Fix**:
- Check that you built and deployed the latest code
- Clear browser cache
- Check browser console for errors

### Can't save changes in production

**Issue**: "Authentication failed" or similar

**Fix**:
- Make sure you set up GitHub OAuth or Keystatic Cloud
- Verify you're logged into GitHub
- Check that the callback URL matches exactly

### Changes not appearing on site

**Issue**: Saved in CMS but not visible on main site

**Fix**:
- Wait 1-2 minutes for GitHub Pages rebuild
- Check that the data files were updated in GitHub
- Clear browser cache

### Local mode not working

**Issue**: Can't access `/keystatic` locally

**Fix**:
```bash
# Restart dev server
npm run dev

# Visit exact URL
http://localhost:3000/keystatic
```

## Advanced Configuration

### Custom Fields

Edit `keystatic.config.tsx` to add/modify fields:

```typescript
// Example: Add a "priority" field to projects
priority: fields.integer({
  label: 'Priority',
  defaultValue: 0
}),
```

### Validation

Add validation to fields:

```typescript
email: fields.text({
  label: 'Email',
  validation: { isRequired: true }
}),
```

### Collections

Add new content types by adding to the `collections` object in `keystatic.config.tsx`.

## Migration from Decap CMS

All your existing data from Decap CMS is preserved! The JSON files are the same, so:
- ✅ Projects work as-is
- ✅ Team members work as-is
- ✅ Publications work as-is
- ✅ Settings work as-is

Just access `/keystatic` instead of `/admin`.

## Support

- **Keystatic Docs**: https://keystatic.com/docs
- **GitHub**: https://github.com/Thinkmill/keystatic
- **Discord**: https://keystatic.com/chat

## Next Steps

1. **Test locally**: Access `http://localhost:3000/keystatic` and try editing
2. **Set up auth**: Follow Option 1 or 2 above for production
3. **Customize**: Edit `keystatic.config.tsx` to add custom fields
4. **Deploy**: Build and deploy to GitHub Pages

You're all set! Enjoy your new, modern CMS.
