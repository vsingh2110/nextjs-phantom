# Quick Git Workflow Guide for VS Code

## How to Commit & Push Changes

### Step 1: Stage Changes
1. Click **Source Control** icon in left sidebar (or `Ctrl+Shift+G`)
2. You'll see list of changed files under "Changes"
3. Click **+** next to each file to stage (or click **+** next to "Changes" to stage all)

### Step 2: Commit
1. Type your commit message in the text box at top
2. Click **✓ Commit** button (or `Ctrl+Enter`)

### Step 3: Push to GitHub
1. Click **...** (More Actions) menu at top
2. Select **Push** 
   - OR just click the **↑** sync/push icon in status bar

## When There Are Remote Changes (PR from CMS)

If you see "Can't push refs" or "Updates were rejected":

### Option A: Pull First, Then Push
1. Click **...** menu → **Pull**
2. If there are conflicts, VS Code will show them
3. Resolve conflicts in editor
4. Stage resolved files
5. Commit the merge
6. Push

### Option B: Pull with Rebase (Cleaner History)
1. Click **...** menu → **Pull (Rebase)**
2. Resolve any conflicts
3. Push

### Quick Keyboard Shortcuts
- Open Source Control: `Ctrl+Shift+G`
- Stage all: `Ctrl+K Ctrl+A` 
- Commit: `Ctrl+Enter` (when in commit message box)
- Sync/Push: Click sync icon in status bar

## Understanding the Flow

```
Your Local Changes
    ↓
  Stage (click +)
    ↓
  Commit (✓ button)
    ↓
  Push (↑ icon)
    ↓
GitHub Repository
    ↓
Vercel Auto-Deploy
```

## When CMS Creates a PR

When you publish content in Decap CMS, it creates a Pull Request on GitHub:

```
CMS Publish
    ↓
Creates PR on GitHub
    ↓
Your local is now "behind"
    ↓
Pull first to get changes
    ↓
Then push your new changes
```

### To Handle This:
1. **Pull** first (gets the PR changes)
2. **Resolve conflicts** if any (rare)
3. **Push** your changes

---

**Pro Tip**: Always pull before starting work if others are using the CMS!
