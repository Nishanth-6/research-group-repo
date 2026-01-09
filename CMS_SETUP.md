# CMS Setup Guide

This project uses **Decap CMS** (formerly Netlify CMS) for content management. The CMS is accessible at `/admin` and allows you to manage projects, team members, publications, and site settings through a user-friendly interface.

## Setup Options

You have two options for authentication:

### Option 1: Netlify (Recommended for GitHub Pages)

This is the easiest option if you're hosting on GitHub Pages.

1. **Create a Netlify account** (free): https://www.netlify.com

2. **Link your GitHub repository**:
   - Go to Netlify Dashboard → "Add new site" → "Import an existing project"
   - Connect to GitHub and select your `research-group-repo` repository
   - For build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

3. **Enable Netlify Identity**:
   - In your Netlify site dashboard, go to "Identity"
   - Click "Enable Identity"
   - Under "Settings and usage" → "Registration preferences", select "Invite only"
   - Scroll down to "Services" → "Git Gateway" and click "Enable Git Gateway"

4. **Invite yourself**:
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email address
   - Check your email and accept the invitation
   - Set your password

5. **Update the CMS config** (already done):
   - The `/public/admin/config.yml` is configured to use `git-gateway`

6. **Access the CMS**:
   - After deploying, visit: `https://your-site.netlify.app/admin/`
   - Log in with your Netlify Identity credentials
   - You can now manage content!

### Option 2: GitHub OAuth (More Setup Required)

If you prefer to authenticate directly with GitHub:

1. **Create a GitHub OAuth App**:
   - Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
   - Application name: `Research Team CMS`
   - Homepage URL: `https://Nishanth-6.github.io/research-group-repo/`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Click "Register application"
   - Note down your Client ID and Client Secret

2. **Set up a backend server** for OAuth:
   - You'll need a server to handle OAuth tokens
   - Options: Netlify (Option 1), or use https://github.com/vencax/netlify-cms-github-oauth-provider

3. **Update `/public/admin/config.yml`**:
   ```yaml
   backend:
     name: github
     repo: Nishanth-6/research-group-repo
     branch: main
     base_url: YOUR_OAUTH_SERVER_URL
   ```

## Local Development

To test the CMS locally:

1. **Install Decap CMS proxy server**:
   ```bash
   npx decap-server
   ```

2. **Update `/public/admin/config.yml`** - uncomment this line:
   ```yaml
   local_backend: true
   ```

3. **Run your dev server**:
   ```bash
   npm run dev
   ```

4. **Access the CMS**:
   - Visit: http://localhost:3000/admin/
   - No authentication needed in local mode

## How the CMS Works

### Content Structure

Content is stored as JSON files in the `/public/data/` directory:

- `/public/data/projects/` - Research project files
- `/public/data/team/` - Team member profiles
- `/public/data/publications/` - Publication entries
- `/public/data/settings/` - Site-wide settings

### Workflow

1. **Log into CMS** at `/admin/`
2. **Edit content** using the visual editor
3. **Save changes** - this creates a commit in your GitHub repository
4. **GitHub Pages automatically rebuilds** your site with the new content

### Collections

- **Projects**: Add/edit research projects with images, categories, team members
- **Team Members**: Manage faculty, researchers, and students
- **Publications**: Add papers, conferences, and working papers
- **Site Settings**: Update hero text, contact info, and about page

## Styling the CMS

The CMS interface can be customized by editing:
- `/public/admin/preview.css` - Preview pane styles
- `/public/admin/index.html` - Custom widgets and configurations

## Troubleshooting

### "Failed to load config.yml"
- Make sure `/public/admin/config.yml` exists
- Check that your build process copies the `public` folder

### Authentication errors
- Verify Netlify Identity is enabled
- Check that Git Gateway is enabled in Netlify
- Make sure you've accepted the email invitation

### Changes not appearing
- Check that the commit was made to your GitHub repository
- Wait for GitHub Pages to rebuild (can take 1-2 minutes)
- Clear your browser cache

### CMS not loading
- Check browser console for errors
- Verify all URLs in `config.yml` are correct
- Ensure `base` path in `vite.config.ts` matches your repo name

## Going to Production

Before deploying:

1. **Review config.yml** - ensure all URLs are correct
2. **Test locally** using `local_backend: true`
3. **Set up authentication** (Netlify Identity or GitHub OAuth)
4. **Invite team members** who need CMS access
5. **Set registration to "Invite only"** to prevent unauthorized access

## Benefits of This Setup

- **No backend server needed** - works with static GitHub Pages
- **Version controlled** - all changes are Git commits
- **User-friendly** - non-technical users can edit content
- **Free** - no hosting costs for the CMS
- **Secure** - authentication via Netlify or GitHub
- **Collaborative** - multiple team members can manage content

## Next Steps

1. Follow Option 1 (Netlify) to set up authentication
2. Test the CMS by adding a new project
3. Invite team members who need access
4. Customize the CMS fields in `config.yml` if needed

For more information, visit: https://decapcms.org/docs/
