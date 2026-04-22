# Deployment Guide 🚀
### Get your site live on the internet in 30–45 minutes

Written for someone who has pushed to GitHub before and deployed something via Vercel — but isn't a full-time developer.

---

## What you'll end up with

- Your site live at `https://chutki-ki-duniya.vercel.app` (or similar)
- Mumbai-based server (fast for Indian users)
- Automatic rebuilds: every time you `git push`, Vercel redeploys in ~60 seconds
- Ready to add `chutkikiduniya.com` as a custom domain later

**What will NOT work yet:**
- Real user signups (login is fake, uses localStorage)
- Real payments (buttons don't do anything real)
- Real PDF downloads (you get a demo placeholder PDF)

That's fine — we're shipping the shell first, then wiring services one by one.

---

## Part 1 — Get the project running on your laptop (15 min)

### Step 1: Install Node.js (skip if you already have it)

Node.js is the software that runs Next.js projects.

Check if you have it already — open your terminal and type:

```bash
node --version
```

- If you see something like `v20.x.x` or `v22.x.x` → you're good, skip to Step 2
- If you see "command not found" → install it:
  - Go to [nodejs.org](https://nodejs.org/)
  - Download the **LTS version** (big green button)
  - Run the installer
  - Close and reopen your terminal
  - Type `node --version` again to confirm

### Step 2: Unzip the project

1. Unzip `chutki-ki-duniya-v3.zip`
2. You'll get a folder called `ckd-source`
3. **Rename it** to `chutki-ki-duniya` (or whatever you like)
4. Move it to wherever you keep your projects

### Step 3: Open the project in your terminal

Open your terminal and navigate to the folder:

```bash
cd ~/path/to/chutki-ki-duniya
```

On Mac, if the folder is on your Desktop, it would be:
```bash
cd ~/Desktop/chutki-ki-duniya
```

On Windows, similar but use `C:\Users\YourName\Desktop\chutki-ki-duniya`.

### Step 4: Install the project's dependencies

```bash
npm install
```

This downloads Next.js, React, and everything else the project needs. Takes 2–3 minutes. You'll see a progress bar and at the end something like `added 312 packages`.

### Step 5: Run the site locally

```bash
npm run dev
```

You should see:

```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
✓ Ready in 1.8s
```

Open `http://localhost:3000` in your browser. **You should see the Chutki Ki Duniya homepage.** 🎉

Click around:
- Try `/activity-sheets` → see Free Forever section
- Click "Login / Sign up" → type any email → see the dashboard
- Try downloading a free PDF → a demo PDF should actually download

**If anything is broken here, stop and tell me — easier to fix locally than on Vercel.**

To stop the local server, press `Ctrl+C` in the terminal.

---

## Part 2 — Push to GitHub (10 min)

### Step 6: Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click the green **"New"** button (or go to github.com/new)
3. Fill in:
   - **Repository name:** `chutki-ki-duniya`
   - **Description:** (optional) "Website for Chutki Ki Duniya"
   - **Private** (pick this — keep the code private for now)
   - **Leave everything else unchecked** — don't add a README, .gitignore, or license (we already have them)
4. Click **"Create repository"**

GitHub now shows you a page with setup commands. **Keep that page open.**

### Step 7: Connect your local folder to GitHub

Back in your terminal, in the project folder, run these one at a time:

```bash
git init
```

This initializes Git tracking for the folder.

```bash
git add .
```

This stages every file to be committed.

```bash
git commit -m "Initial commit"
```

This creates your first snapshot.

```bash
git branch -M main
```

This names the default branch "main" (GitHub expects this).

Now grab the URL from your GitHub repo page — it looks like `https://github.com/YOUR-USERNAME/chutki-ki-duniya.git`. Then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/chutki-ki-duniya.git
```

(Replace `YOUR-USERNAME` with your actual GitHub username.)

```bash
git push -u origin main
```

This uploads everything to GitHub. You may be asked for your GitHub username and a password/token.

**On the password prompt:** GitHub doesn't accept your actual password anymore. You need a "Personal Access Token":
1. Go to github.com → click your avatar (top right) → **Settings**
2. Scroll way down → **Developer settings** (left sidebar)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token (classic)**
5. Name: "chutki-ki-duniya"
6. Expiration: 90 days (or whatever you prefer)
7. Check the box for **repo** (top of permissions list)
8. Scroll down → **Generate token**
9. **Copy the token immediately** (you'll never see it again)
10. Paste it into the terminal where it asks for your password

Once the push succeeds, refresh your GitHub repo page. **You should see all your files there.** ✅

---

## Part 3 — Deploy to Vercel (10 min)

### Step 8: Create a Vercel account

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Click **"Continue with GitHub"** (this is the easiest — Vercel and GitHub talk to each other)
3. Approve the permissions

### Step 9: Import your repo

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Vercel lists your GitHub repos → find **`chutki-ki-duniya`** → click **"Import"**
3. On the configuration screen:
   - **Framework Preset:** should auto-detect as "Next.js" ✓
   - **Root Directory:** leave as `./`
   - **Build Command:** leave default
   - **Environment Variables:** leave empty for now (we'll add later)
4. Click **"Deploy"**

Vercel now:
1. Clones your repo (~5 seconds)
2. Runs `npm install` (~30 seconds)
3. Runs `npm run build` (~30 seconds)
4. Publishes the result (~5 seconds)

Total: ~1–2 minutes.

When done, you'll see confetti 🎉 and a preview of your site.

Click the URL. **Your site is live on the internet.** Something like `chutki-ki-duniya-abc123.vercel.app`.

---

## Part 4 — Making it yours

### Step 10: Get the clean Vercel URL

By default, Vercel gives you something ugly like `chutki-ki-duniya-abc123.vercel.app`. You can change it:

1. Go to your project → **Settings** → **Domains**
2. The top domain is your URL. Click **Edit** to rename it
3. Try `chutki-ki-duniya.vercel.app` (or `chutkikiduniya.vercel.app`)
4. If taken, try variations

This is free and lets you share the URL with Chutki, friends, etc.

### Step 11: Add your custom domain (when ready)

**Only do this when you're ready for real traffic.** For now, the `.vercel.app` URL is fine.

When you're ready:

1. Make sure you own `chutkikiduniya.com` (buy from GoDaddy, Namecheap, etc., if you haven't)
2. In Vercel: **Settings** → **Domains** → type `chutkikiduniya.com` → click **Add**
3. Vercel shows you DNS records you need to add
4. Go to wherever you bought the domain (GoDaddy/Namecheap/etc.)
5. Find **DNS Settings** for your domain
6. Add the records Vercel told you to add (usually an `A` record and a `CNAME`)
7. Wait 10 minutes to a few hours for DNS to propagate
8. Your site now serves at `chutkikiduniya.com` with free automatic SSL (the little padlock)

---

## How future updates work

Once set up, pushing new changes is easy:

1. Make any change to the code on your laptop (edit text, add a sheet, change colors)
2. Save the file
3. In terminal:
   ```bash
   git add .
   git commit -m "What you changed"
   git push
   ```
4. Vercel notices the push, rebuilds, redeploys — live in ~60 seconds

That's it. No FTP, no uploading files, no server configuration.

---

## Things that might go wrong (and how to fix them)

### "npm install" fails with permission errors

On Mac/Linux, try:
```bash
sudo npm install
```

If that still fails, your Node.js install is probably weird. Reinstall Node from nodejs.org.

### Vercel deploy fails with "build error"

1. In Vercel, click on the failed deployment to see the error logs
2. Common cause: you changed a file, it has a typo, the build fails
3. Fix it locally, run `npm run build` on your laptop first to confirm it works, then push again
4. Vercel auto-rebuilds on the next push

### Site is live but looks wrong on mobile

Open it on your phone. If something looks bad, tell me the specific page and I'll fix it.

### "I committed a secret key to GitHub!"

Stop. Don't panic. Tell me which service/key, and we'll rotate it (replace with a new one) immediately. This happens to everyone.

---

## What to do once you're live

1. **Share the Vercel URL with Chutki** — get her reaction to the design
2. **Take screenshots for Instagram/WhatsApp** — build hype before launch
3. **Show me the live URL** — I can check it looks right on all screen sizes
4. **Come back for Part 2: Clerk (real login)** — so users aren't fake anymore

---

## Glossary (as you encounter new terms)

- **`npm`** — The tool that downloads JavaScript packages. Comes with Node.js.
- **`git`** — Version control. Tracks changes to your code.
- **GitHub** — A website that stores your git repositories.
- **repository (repo)** — A project folder on GitHub.
- **commit** — A saved snapshot of your code at a point in time.
- **push** — Uploading your commits from your laptop to GitHub.
- **branch** — A separate line of work. `main` is the default/production one.
- **Vercel** — A hosting service for Next.js sites.
- **deploy** — Publishing your latest code to the live website.
- **environment variable (env var)** — A secret value (API key, password) stored outside your code.
- **DNS** — The internet phonebook that maps `chutkikiduniya.com` → a server IP address.
- **SSL / HTTPS** — Encryption that gives you the padlock icon. Vercel adds this automatically, for free.

---

Good luck! If you hit any error you don't understand, just paste it in the chat. I'll translate and tell you what to do.
