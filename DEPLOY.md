# GitHub Pages Deployment Instructions

Follow these steps to deploy your portfolio to GitHub Pages:

## 1. Push your code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/alexandruarmas/port.git

# Push to GitHub
git push -u origin main
```

## 2. Configure GitHub Pages

1. Go to your repository: https://github.com/alexandruarmas/port
2. Navigate to "Settings" > "Pages"
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Your site will be automatically deployed when you push to the main branch

## 3. View your site

After the GitHub Actions workflow completes, your site will be available at:
https://alexandruarmas.github.io/port/

## Troubleshooting

If your images or links aren't working correctly:

1. Check that all asset paths use the correct base path (`/port/`)
2. Verify that the GitHub Actions workflow completed successfully
3. Make sure your repository settings have GitHub Pages enabled
