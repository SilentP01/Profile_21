# Next.js Portfolio Website

This is a React + Next.js portfolio website built with TypeScript, Tailwind CSS, and Framer Motion.

- Hero section
- About section
- Projects section
- Skills section
- Resume callout
- Contact section
- Custom project visuals

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Edit Content

Most personal content is in `data/portfolio.ts`, including name, intro, about copy, projects, skills, and contact links.

## Deploy

Vercel is the recommended free hosting path for this portfolio because it is built with Next.js.

### 1. Push To GitHub

Create a new GitHub repository, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/SilentP01/your-repo-name.git
git push -u origin main
```

Replace `your-repo-name` with your actual GitHub repository name.

### 2. Import On Vercel

1. Go to `https://vercel.com/new`
2. Choose `Import Git Repository`
3. Select your portfolio repository
4. Keep the framework preset as `Next.js`
5. Click `Deploy`

After that, every push to your GitHub `main` branch will redeploy the website automatically.

### Recommended Build Settings

Vercel should detect these automatically:

- Framework: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: Next.js default
