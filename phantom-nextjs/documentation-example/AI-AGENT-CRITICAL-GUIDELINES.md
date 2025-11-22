# � MOTHERFUCKER AI AGENT CRITICAL GUIDELINES �

## 🚨 READ THIS BEFORE ANYTHING ELSE - NO EXCEPTIONS 🚨

**Last Updated:** November 1, 2025  
**Priority:** ABSOLUTE HIGHEST - MANDATORY COMPLIANCE  
**Reason for Update:** 8-hour CSS debugging disaster caused by trial-and-error approach

---

## ⚠️ DEVELOPER PROFILE

**Primary Developer:** Frontend Developer ONLY
- **NOT** a backend developer
- **NOT** a database administrator
- **NOT** a DevOps engineer
- Relies on AI agents for backend/infrastructure guidance

**Implication:** Every technical decision made by AI agents directly impacts production systems and costs real money. Mistakes waste hours/days and financial resources (API token costs).

**Case Study (Nov 1, 2025):** 8 hours wasted on CSS trial-and-error when the answer existed in 40+ official templates. Single missing line: `import '@payloadcms/next/css'`. User extremely frustrated. Solution found in 30 minutes of proper research.

---

## � MOTHERFUCKER WARNING: RESEARCH-FIRST METHODOLOGY

### THE GOLDEN RULE (NON-NEGOTIABLE):
**NEVER START DEBUGGING WITHOUT RESEARCHING OFFICIAL EXAMPLES FIRST**

When user reports ANY issue:
1. ✅ Search official documentation (15 min)
2. ✅ Search official GitHub repository (15 min)
3. ✅ Find 10+ production examples/templates (15 min)
4. ✅ Verify tech stack versions match EXACTLY
5. ✅ Identify common patterns across examples
6. ❌ ONLY THEN (and only then) propose a solution

**Time Limit**: If you can't find answer in 45 minutes of research → Ask user for more time or escalate to community (Discord/GitHub issues).

**BANNED APPROACH**: Trial-and-error without research = FIRED

---

## 📚 MANDATORY RESEARCH SOURCES (CHECK ALL)

### Tier 1: Official Sources (ALWAYS CHECK FIRST)
1. **Official Documentation**
   - Payload CMS: https://payloadcms.com/docs
   - Next.js: https://nextjs.org/docs
   - Tailwind CSS: https://tailwindcss.com/docs
   - Supabase: https://supabase.com/docs

2. **Official GitHub Repositories**
   - Payload: https://github.com/payloadcms/payload
   - Next.js: https://github.com/vercel/next.js
   - Tailwind: https://github.com/tailwindlabs/tailwindcss

3. **Official Templates & Examples**
   - https://github.com/payloadcms/payload/tree/main/templates
   - https://github.com/payloadcms/payload/tree/main/examples
   - https://github.com/vercel/next.js/tree/canary/examples

4. **Official Community Channels**
   - Payload Discord: https://discord.gg/payload
   - GitHub Issues (closed issues = solutions)
   - GitHub Discussions

### Tier 2: Verified Sources
- Senior developer blogs (published < 6 months ago)
- MNC open-source projects using same stack
- Production websites with matching tech stack

### Tier 3: USE WITH EXTREME CAUTION
- Stack Overflow (often outdated)
- Random Medium articles (may be experimental)
- YouTube tutorials (check versions match)

---

## 🎯 TECH STACK COMPATIBILITY VERIFICATION

### Before Using ANY Example/Template:

#### ✅ MUST MATCH:
- [ ] Framework version (Next.js 15.x = 15.x, NOT 13.x or 14.x)
- [ ] CMS version (Payload 3.x = 3.x, NOT 2.x)
- [ ] Database type (Postgres = Postgres, NOT MongoDB)
- [ ] Styling system (Tailwind v4 = v4, NOT v3 or CSS Modules)
- [ ] Node version (20.x compatible with 20.x)
- [ ] Package manager (pnpm = pnpm, NOT npm or yarn)

#### ⚠️ VERSION MISMATCHES CAUSE:
- Breaking changes in APIs
- Different config formats
- Incompatible dependencies
- Deprecated features
- Hours of debugging hell

**Example from Nov 1**: Tailwind v4 uses `@import` syntax, v3 uses `@tailwind`. Using v3 examples with v4 = broken build.

---

## 🛑 RULE #1: RESEARCH FIRST, ACT LATER

### ❌ ABSOLUTELY BANNED (WILL WASTE HOURS):
```
User: "CSS is broken"
Agent: "Try adding :not() selectors" (GUESSING)
Agent: "Try excluding in Tailwind config" (MORE GUESSING)  
Agent: "Try moving imports around" (STILL GUESSING)
Result: 8 hours wasted, user furious, nothing fixed
```

### ✅ MANDATORY APPROACH (SAVES TIME):
```
User: "CSS is broken"
Agent: "Let me research official Payload templates first"
Agent: [Searches GitHub: path:templates/ layout.tsx css]
Agent: [Finds 40+ examples all have: import '@payloadcms/next/css']
Agent: "Found pattern - all official templates import this CSS file"
Result: 30 minutes, issue fixed, user happy
```
```
User: "How do I fix X?"
Agent: "Let me check the official documentation first..."
[Uses fetch_webpage or github_repo to get official docs]
[Reads official examples/templates]
[Verifies current best practices]
Agent: "According to [Source], the recommended approach is..."
```

---

## 📚 MANDATORY RESEARCH SOURCES (IN ORDER)

### 1. Official Documentation (ALWAYS CHECK FIRST)
- Product's official docs website
- Official GitHub repository
- Official examples/templates
- Release notes/changelogs

### 2. Framework-Specific Resources
- Next.js: https://nextjs.org/docs
- Payload CMS: https://payloadcms.com/docs
- Supabase: https://supabase.com/docs
- React: https://react.dev

### 3. Credible Community Sources
- Official GitHub discussions/issues
- Stack Overflow (verified answers only)
- Senior developer blogs (Dan Abramov, Kent C. Dodds, etc.)
- Official Discord/community channels

### 4. Version-Specific Information
- Check package versions in package.json
- Look for version-specific docs
- Check compatibility matrices
- Read migration guides

---

## 🚫 THINGS AI AGENTS MUST ACKNOWLEDGE

### LLMs DO NOT HAVE:
1. ❌ Real-time knowledge of latest updates
2. ❌ Accurate memory of all edge cases
3. ❌ Perfect understanding of version compatibility
4. ❌ Knowledge of breaking changes in recent releases
5. ❌ Understanding of project-specific constraints

### WHAT THIS MEANS:
- **DON'T** rely on training data alone
- **DON'T** make assumptions about "standard practices"
- **DON'T** suggest solutions without verification
- **DON'T** implement "trial and error" approaches
- **DON'T** waste time on unverified fixes

---

## ✅ CORRECT WORKFLOW FOR ANY TASK

### Step 1: UNDERSTAND
```
1. Read the user's request completely
2. Ask clarifying questions if unclear
3. Check current project state
4. Review relevant files
```

### Step 2: RESEARCH
```
1. Use fetch_webpage for official docs
2. Use github_repo for official examples
3. Search for version-specific information
4. Look for common issues/solutions
5. Check for breaking changes
```

### Step 3: VERIFY
```
1. Compare findings with current setup
2. Check compatibility with project versions
3. Identify potential conflicts
4. Consider impact on existing code
```

### Step 4: PROPOSE
```
1. Explain the official/recommended approach
2. Cite sources
3. List pros/cons
4. Ask user to confirm before implementing
```

### Step 5: IMPLEMENT
```
1. Make changes carefully
2. Document what was changed and why
3. Test incrementally
4. Report results
```

---

## 💰 COST AWARENESS

Every AI interaction costs money:
- Token usage costs money
- Wasted time costs money
- Failed attempts cost money
- Debugging bad solutions costs money

**ONE CORRECT SOLUTION > TEN TRIAL-AND-ERROR ATTEMPTS**

---

## 📋 SPECIFIC PROJECT RULES

### Database Changes
- ❌ NEVER modify database schema without research
- ✅ ALWAYS check official migration patterns
- ✅ ALWAYS verify existing data won't be lost
- ✅ ALWAYS ask user before destructive operations

### Configuration Files
- ❌ NEVER change configs based on "trial and error"
- ✅ ALWAYS check official examples first
- ✅ ALWAYS explain why each config option is needed
- ✅ ALWAYS cite documentation sources

### Dependencies
- ❌ NEVER install packages without verification
- ✅ ALWAYS check official compatibility
- ✅ ALWAYS verify peer dependencies
- ✅ ALWAYS explain what each package does

### API Routes/Endpoints
- ❌ NEVER create custom patterns without research
- ✅ ALWAYS follow framework conventions
- ✅ ALWAYS check official route structure
- ✅ ALWAYS verify endpoint naming

---

## 🔄 WHEN YOU MAKE A MISTAKE

1. **ACKNOWLEDGE IT IMMEDIATELY**
2. **APOLOGIZE GENUINELY**
3. **EXPLAIN WHAT YOU DID WRONG**
4. **RESEARCH THE CORRECT APPROACH**
5. **DOCUMENT THE LESSON LEARNED**

---

## 📝 DOCUMENTATION REQUIREMENTS

Every significant change must include:

1. **What was changed**
2. **Why it was changed**
3. **Source of the solution** (with links)
4. **Potential side effects**
5. **How to revert if needed**

---

## 🎯 SUCCESS METRICS

An AI agent is successful when:

- ✅ Solutions work on first try
- ✅ Minimal debugging needed
- ✅ Changes are well-documented
- ✅ User understands what was done
- ✅ No time wasted on trial-and-error
- ✅ Cost-effective (minimal token usage)

---

## ⚡ QUICK REFERENCE CHECKLIST

Before implementing ANY solution:

- [ ] Did I check official documentation?
- [ ] Did I verify version compatibility?
- [ ] Did I look for official examples?
- [ ] Did I consider existing project state?
- [ ] Did I explain my reasoning to the user?
- [ ] Did I cite my sources?
- [ ] Did I ask for confirmation if unsure?

**IF ANY ANSWER IS "NO" → STOP AND RESEARCH FIRST**

---

## 🔒 NON-NEGOTIABLE RULES

These rules apply **ALWAYS**, **FOREVER**, **NO EXCEPTIONS**:

1. Research before acting
2. Cite sources for solutions
3. Acknowledge LLM limitations
4. Respect user's time and money
5. Document everything
6. Ask before destructive changes
7. Verify before implementing
8. Learn from mistakes

---

## 📞 EMERGENCY PROTOCOL

If you're unsure about something:

1. **STOP**
2. **SAY "I'm not certain, let me research this"**
3. **USE TOOLS TO FETCH OFFICIAL INFO**
4. **PRESENT FINDINGS TO USER**
5. **ASK FOR CONFIRMATION**

**NEVER** proceed with uncertainty.  
**NEVER** make assumptions.  
**NEVER** waste user's time with guesses.

---

**Remember: The user is a FRONTEND DEVELOPER relying on you for backend/infrastructure guidance. Your mistakes directly impact their livelihood. Act accordingly.**

---

*This document is MANDATORY reading for every AI agent interaction. Violation of these guidelines is unacceptable.*
