# Azure Static Web Apps Deployment Guide

## Overview
This guide will help you deploy your Chấm Exhibition website to Azure Static Web Apps. Since this is a static HTML/CSS/JS website with no build process, the deployment is straightforward.

## Prerequisites
- An Azure account (create a free account at https://azure.microsoft.com/free/)
- This repository pushed to GitHub
- GitHub account with access to this repository

## Deployment Steps

### Step 1: Push Your Code to GitHub
If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Add Azure Static Web Apps deployment workflow"
git push origin main
```

### Step 2: Create Azure Static Web App

1. **Sign in to Azure Portal**
   - Go to https://portal.azure.com
   - Sign in with your Azure account

2. **Create a Static Web App**
   - Click "Create a resource" or search for "Static Web Apps"
   - Click "Static Web Apps"
   - Click "Create"

3. **Configure Basic Settings**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing (e.g., "cham-exhibition-rg")
   - **Name**: Choose a unique name (e.g., "cham-exhibition")
   - **Plan type**: Select "Free" for personal projects or "Standard" for production
   - **Region**: Choose a region closest to your users (e.g., "East Asia", "Southeast Asia")

4. **Configure Deployment**
   - **Source**: Select "GitHub"
   - Click "Sign in with GitHub" and authorize Azure
   - **Organization**: Select your GitHub username
   - **Repository**: Select "Cham-Exhibition" (or your repository name)
   - **Branch**: Select "main"

5. **Build Details**
   - **Build Presets**: Select "Custom"
   - **App location**: `/` (root of repository)
   - **Api location**: Leave empty
   - **Output location**: Leave empty
   
   > Note: The workflow file we created (`.github/workflows/azure-static-web-apps.yml`) handles the configuration with `skip_app_build: true` since there's no build process.

6. **Review and Create**
   - Click "Review + create"
   - Review your settings
   - Click "Create"

### Step 3: Automatic Deployment

After creation:
1. Azure will automatically add a secret called `AZURE_STATIC_WEB_APPS_API_TOKEN` to your GitHub repository
2. The GitHub Actions workflow will automatically trigger
3. Your site will be deployed within a few minutes

### Step 4: Monitor Deployment

1. **Check GitHub Actions**
   - Go to your GitHub repository
   - Click on "Actions" tab
   - You should see a workflow run in progress
   - Click on it to see deployment logs

2. **Check Azure Portal**
   - In Azure Portal, go to your Static Web App resource
   - Click on "Overview" to see your site URL
   - The URL will be something like: `https://[your-app-name].azurestaticapps.net`

### Step 5: Access Your Website

Once deployment completes:
- Your website will be live at the Azure-provided URL
- You can also configure a custom domain in the Azure Portal under "Custom domains"

## Configuration Details

The workflow file (`.github/workflows/azure-static-web-apps.yml`) is configured with:
- **app_location**: `/` - Root directory where index.html is located
- **skip_app_build**: `true` - No build process needed
- **output_location**: `""` - Empty since files are served directly

## Automatic Updates

Every time you push to the `main` branch:
1. GitHub Actions will automatically trigger
2. Your site will be redeployed with the latest changes
3. Takes about 2-5 minutes to complete

## Custom Domain (Optional)

To add a custom domain:
1. Go to your Static Web App in Azure Portal
2. Click "Custom domains" in the left menu
3. Click "+ Add"
4. Follow the instructions to add your domain
5. Add the required DNS records to your domain provider

## Troubleshooting

### Workflow Not Running?
- Check that the workflow file is in `.github/workflows/` directory
- Ensure the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret exists in GitHub repository settings

### 404 Errors?
- Ensure all file paths in your HTML are correct
- Azure Static Web Apps serves files from the root directory

### Images Not Loading?
- Check that image paths start with `/` or are relative paths
- Example: `/images/main/favicon.png` (correct) vs `images/main/favicon.png`

## Cost

- **Free Tier**: Includes 100 GB bandwidth/month, SSL certificate, custom domains
- **Standard Tier**: Additional features and higher limits

For a small exhibition site like this, the Free tier should be sufficient.

## Support

- Azure Static Web Apps Documentation: https://docs.microsoft.com/en-us/azure/static-web-apps/
- GitHub Actions Documentation: https://docs.github.com/en/actions

## Next Steps

After deployment:
1. ✅ Test your website at the Azure URL
2. ✅ Configure custom domain (if desired)
3. ✅ Set up monitoring in Azure Portal
4. ✅ Share your live site!

---

**Your site will be deployed automatically once you push this to GitHub and create the Azure Static Web App resource.**
