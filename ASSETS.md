# Asset Placement Guide

This guide shows you exactly where to place your images and files in the portfolio.

## Directory Structure

```
public/
└── assets/
    ├── profile.png              # Your profile picture
    ├── resume.pdf               # Your resume
    ├── project-1.png            # devops-folio project image
    ├── project-2.png            # CurrencyRecognizationApp project image
    ├── project-3.png            # dev-tutorials project image
    ├── project-4.png            # js-landscape project image
    ├── cert-kubernetes.png      # Introduction to Kubernetes certificate
    ├── cert-gitops.png          # Introduction to GitOps certificate
    ├── cert-opentofu.png        # Introduction to OpenTofu certificate
    ├── cert-devops.png          # Introduction to DevOps and SRE certificate
    ├── cert-jenkins.png         # Introduction to Jenkins certificate
    ├── cert-itsec.png           # IT Security certificate
    ├── cert-linuxfun.png        # Linux Fundamentals certificate
    └── cert-os.png              # Operating Systems certificate
```

## File Requirements

### Profile Picture (`profile.png`)
- Recommended size: 512x512px or larger
- Format: PNG, JPG, or WEBP
- Should be a professional headshot

### Resume (`resume.pdf`)
- Format: PDF
- Keep file size under 5MB for faster loading

### Project Images (`project-1.png` to `project-4.png`)
- Recommended size: 1200x630px (16:9 aspect ratio)
- Format: PNG, JPG, or WEBP
- Should be screenshots or mockups of your projects

### Certificate Images (`cert-*.png`)
- Format: PNG, JPG, or WEBP
- Original certificate images work best
- The app will automatically resize them to fit

## Migration from profile.js

If you have images in `/images/` or `/images/certificates/` from your old setup:

1. Copy `profile2.png` → `public/assets/profile.png`
2. Copy certificate images:
   - `kubernetes.webp` → `cert-kubernetes.png`
   - `gitops.webp` → `cert-gitops.png`
   - `opentofu.webp` → `cert-opentofu.png`
   - `devops.webp` → `cert-devops.png`
   - `jenkins.jpg` → `cert-jenkins.png`
   - `itsec.webp` → `cert-itsec.png`
   - `linuxfun.webp` → `cert-linuxfun.png`
   - `os.webp` → `cert-os.png`

## Notes

- All paths in `profile.ts` are already configured to point to `/assets/`
- The `/assets/` folder maps to `public/assets/` in your project
- You can use PNG, JPG, or WEBP formats for all images
- The app will handle image optimization automatically
