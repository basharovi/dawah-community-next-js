# Admin Dashboard Setup Guide

This guide will help you set up the admin dashboard and Firebase database for your Dawah Community website.

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Enable Authentication, Firestore Database, and Storage services
3. In Authentication, enable Email/Password sign-in method
4. Create an admin user (this will be your login for the admin dashboard)
5. In Firestore Database, create the following collections:
   - `team`
   - `about`
   - `mission`
   - `projects`
   - `gallery`
   - `contact`
6. Go to Project Settings and get your Firebase configuration

## Environment Configuration

1. Create a `.env.local` file in the root directory with the following variables:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Install Dependencies

Install the new dependencies:

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

## Access the Admin Dashboard

1. Go to `/admin/login` to access the login page
2. Sign in with the admin email and password you created in Firebase Authentication
3. You'll be redirected to the admin dashboard at `/admin/dashboard`

## Managing Content

From the admin dashboard, you can:

1. Add, edit, and delete team members
2. Manage mission statements
3. Update about us information
4. Add and manage projects
5. Upload and organize gallery images
6. Update contact information

All changes made in the admin dashboard will be immediately reflected on the public website.

## Firebase Security Rules

For production, configure Firebase security rules to protect your data:

### Firestore Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

### Storage Rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

## Deployment

When deploying to production, make sure to:

1. Add the Firebase environment variables to your hosting provider
2. Build the production version: `npm run build`
3. Deploy the built version: `npm run start` 