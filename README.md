# varlikip.xyz

This is the official source code for the client side of my portofolio site

# Deploying the app for production

- Pull the latest version of the repo on the production server:
```bash
git pull origin main
```

- Build the app
```bash
npm run build
```

- Serve the app for production
```bash
pm2 serve build/ {PORT} --name "varlikip.xyz" --spa
```
