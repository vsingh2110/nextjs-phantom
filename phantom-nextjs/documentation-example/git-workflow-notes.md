# Git Workflow - Important Notes

**Last Updated**: October 30, 2025

---

## Git Command Policy

### ❌ DO NOT Run Git Commands via Terminal Tool

**Reason**: The terminal tool is slow for Git operations. User prefers VS Code Source Control UI.

### ✅ Correct Workflow

1. **Agent completes work**
2. **Agent says**: "Ready to commit. Please use VS Code Source Control to add, commit, and push."
3. **User commits via VS Code UI** (takes seconds)

### Exception: Only Run Git Commands For

- Troubleshooting Git issues (merge conflicts, branch problems, etc.)
- Checking git status when debugging
- Advanced Git operations that can't be done via UI

---

## Standard Workflow

```
[Agent completes implementation]
  ↓
[Agent verifies no errors]
  ↓
[Agent tells user: "Ready to commit"]
  ↓
[User uses VS Code Source Control UI]
  ↓
[Changes pushed to GitHub]
  ↓
[Vercel auto-deploys]
```

---

**Note for AI**: Just finish the work, verify it's error-free, and tell the user it's ready to commit. Let them handle Git via the UI.
