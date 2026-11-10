# Putting Campus Compass on GitHub

A step-by-step guide for beginners. No installs, no command line.
Everything here happens in your web browser.

You need: a free GitHub account (github.com/signup).

---

## The one thing that confuses everyone first

GitHub shows a repository as a folder of files. Your website **must** have
`index.html` sitting at the **very top level** of that repository.

That means:

```
CORRECT                     WRONG
repo/                       repo/
├── index.html       <--    └── Campus-Compass/
├── assets/                      ├── index.html
├── data/                        ├── assets/
└── README.md                    └── data/
```

If `index.html` ends up one level down, the site still works when you open it
locally, but GitHub Pages cannot publish it.

**How the mistake happens:** you drag the `Campus-Compass` **folder** into
GitHub from inside `Documents\Default Project`.

**How to avoid it:** open the `Campus-Compass` folder first, select what is
**inside** it, and drag those items in.

---

## Part 1 - Create the repository

1. Go to **https://github.com/new**
2. **Repository name:** `campus-compass`
3. **Description:** (optional) `A student guide to college life`
4. Choose **Public**
5. Do **not** tick "Add a README file" - you already have one
6. Click **Create repository**

You now see an empty page with "uploading an existing file" in the text.

---

## Part 2 - Upload your files

1. Open **File Explorer**.
2. Paste this into the address bar at the top and press Enter:

   ```
   C:\Users\uranz\OneDrive\Documents\Default Project\Campus-Compass
   ```

3. Press **Ctrl + A** to select everything in the folder.
   You should see 5 items selected: `assets`, `data`, `.gitignore`, `index.html`
   and `README.md` (`.gitignore` may be hidden - see the note below).

4. Click the link **"uploading an existing file"** on the GitHub page.

5. **Drag the selected items into the box that says "Drag files here."**
   Drag the items themselves - not the folder that contains them.

6. Wait until GitHub finishes listing all 27 files.

7. In the box near the bottom type: `first upload`

8. Click **Commit changes**.

**Check your work:** the repository home page should now show
`index.html`, `assets`, `data`, `README.md`, and `.gitignore` at the top level.
No `Campus-Compass` folder in between.

> Note: File Explorer hides files that start with a dot. If you cannot see
> `.gitignore`, click **View** in File Explorer and tick **Hidden items**.
> It is optional - the site works without it.

**If it nested inside a `Campus-Compass` folder:** open that folder in the repo,
select all files, use the **...** menu at the top right and choose **Move**, then
change the path to remove `Campus-Compass/` from the front.

---

## Part 3 - Add your groupmates

1. In your repository click **Settings**
2. In the left sidebar click **Collaborators**
3. Click **Add people**
4. Type their GitHub username or email, then **Add**
5. They receive an email / notification and click **Accept invitation**

---

## Part 4 - How each person edits their part

Nobody needs to install anything. Editing happens on the website:

1. Open the repository on github.com
2. Click your file, for example `data/faq-data.js`
3. Click the **pencil** icon (top right of the file view)
4. Make your changes
5. Scroll down, type a short note, click **Commit changes**

Done - the change is saved and everyone sees it.

### Who edits what

| Person | File to edit | What to add |
| --- | --- | --- |
| Member 1 | `data/announcements-data.js` | announcements and events |
| Member 2 | `data/campus-directory-data.js` | facilities |
| Member 3 | `data/faq-data.js` | questions and answers |
| Member 4 | `assets/css/*` or `assets/js/*` | design and features |

**The one rule: one person per file.** Two people editing the same file at the
same time forces GitHub to ask which version to keep. Because the content lives
in three separate data files, three people can add content at the same time
without any conflict.

---

## Part 5 - Publish it as a real website (optional)

1. Click **Settings** -> **Pages** (left sidebar)
2. Under **Build and deployment**, Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes, then reload the page

Your shareable link appears at the top, in the form:

```
https://YOUR-USERNAME.github.io/campus-compass/
```

---

## Quick answers

**Do I need Git installed?**
No. Everything in this guide uses the GitHub website only.

**Do I need to upload the ZIP file?**
No. The `.gitignore` already excludes `*.zip`. The ZIP is only for handing in
or sharing the project as one file.

**Someone's edit is missing - why?**
They probably edited a different file or forgot to click **Commit changes**.

**Can I edit on my phone?**
Yes, the GitHub website works on mobile.

**I uploaded to the wrong repository or made a mess - can I start over?**
Yes. In the repository: **Settings** -> scroll to the bottom -> **Delete this
repository**. Then start again from Part 1. Nothing about your local files is
affected.
