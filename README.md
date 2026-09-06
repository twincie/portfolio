# Johnson Oyebode — Portfolio

A portable, fully static portfolio built with Next.js. The production build is
written to `out/` as plain HTML, CSS, JavaScript, and assets, so no Node.js
server is required after the build completes.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Create the production files with:

```bash
npm run build
```

## Universal deployment settings

These settings work on platforms that support builds from Git repositories:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Publish/output directory | `out` |
| Node.js version | `22` |
| Environment variables | None |

## Platform notes

- **Vercel:** Import the repository with the Next.js preset. Leave Output Directory blank so Vercel's Next.js adapter can read `.next`; `vercel.json` supplies the build command.
- **Netlify:** Import the repository. `netlify.toml` supplies the build and publish settings.
- **Cloudflare Pages:** Use `npm run build` and `out` as the build output directory.
- **Render / Railway / DigitalOcean:** Choose a static-site deployment and publish `out`.
- **AWS S3, Firebase Hosting, shared hosting, or Nginx:** Run `npm run build`, then upload the contents of `out/` to the web root.
- **GitHub Pages:** Deploy the `out/` directory. A custom domain or root-level Pages site is recommended; project sites hosted below `/repository-name/` need a matching Next.js `basePath`.

Every push to `main` can trigger an automatic deployment after a platform is
connected to this GitHub repository.
