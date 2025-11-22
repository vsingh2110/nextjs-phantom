# Dark/Light Mode Implementation Plan

**Created**: October 31, 2025  
**Priority**: 🔴 URGENT - Critical forgotten requirement  
**Status**: Not Started  
**Target**: November 1, 2025 (office session)

---

## Current State
- **Theme**: Light mode only
- **No toggle**: Theme switcher component doesn't exist
- **No persistence**: No localStorage or cookie implementation
- **CSS Variables**: Not set up for theming

---

## Requirements

### User Experience
1. **Toggle Button**:
   - Icon-based switch (🌙 moon for dark, ☀️ sun for light)
   - Visible in header/navigation on all pages
   - Smooth transition animation between themes
   - Visual feedback on click/hover

2. **Theme Persistence**:
   - Save preference to localStorage
   - Restore theme on page load
   - Persist across browser sessions
   - Sync across tabs (optional enhancement)

3. **Accessibility**:
   - WCAG AA contrast ratios in both modes
   - Keyboard accessible (Tab + Enter to toggle)
   - Screen reader friendly (aria-label)
   - Prefers-color-scheme media query support

### Visual Design

#### Light Mode (Current)
- Background: White/light grays (#ffffff, #f5f5f5)
- Text: Dark grays/black (#212121, #757575)
- Accent: Blues/oranges (brand colors)
- Cards: White with subtle shadows

#### Dark Mode (To Implement)
- Background: Dark grays/near black (#1a1a1a, #2d2d2d)
- Text: Light grays/white (#e0e0e0, #ffffff)
- Accent: Adjusted brand colors (slightly muted for dark bg)
- Cards: Dark gray (#2d2d2d) with subtle borders

---

## Implementation Strategy

### 1. CSS Variables Approach ⭐ (Recommended)

**Advantages**:
- Clean, maintainable code
- Easy to update theme values
- Works with Tailwind CSS
- No JavaScript for styling logic

**Structure**:
```css
/* globals.css */
:root {
  /* Light mode (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #212121;
  --text-secondary: #757575;
  --accent-primary: #2196f3;
  --accent-secondary: #ff5722;
  --border-color: #e0e0e0;
  --shadow: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  /* Dark mode */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #e0e0e0;
  --text-secondary: #b0b0b0;
  --accent-primary: #64b5f6; /* Lighter blue for dark bg */
  --accent-secondary: #ff7043; /* Lighter orange */
  --border-color: #424242;
  --shadow: rgba(0, 0, 0, 0.3);
}

/* System preference detection */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* Apply dark theme if user prefers dark and hasn't chosen */
    --bg-primary: #1a1a1a;
    /* ... other dark variables */
  }
}
```

### 2. ThemeSwitcher Component

**File**: `src/components/ThemeSwitcher.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Avoid rendering until mounted (SSR compatibility)
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="theme-toggle"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

**Styling**:
```css
.theme-toggle {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: var(--accent-primary);
  transform: scale(1.1);
}

.theme-toggle:focus-visible {
  outline: 3px solid var(--accent-primary);
  outline-offset: 3px;
}
```

### 3. Layout Integration

**File**: `src/app/layout.tsx`

```typescript
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            {/* Existing navigation */}
            <ThemeSwitcher />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### 4. Tailwind CSS Integration

**File**: `tailwind.config.ts`

```typescript
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
      },
    },
  },
};
```

---

## Files to Create/Modify

### New Files
1. ✅ `src/components/ThemeSwitcher.tsx` - Toggle component
2. ✅ `documentation/DARK-MODE-IMPLEMENTATION.md` - This file

### Files to Modify
1. ⏳ `src/app/globals.css` - Add CSS variables
2. ⏳ `src/app/layout.tsx` - Include ThemeSwitcher
3. ⏳ `tailwind.config.ts` - Configure darkMode
4. ⏳ `src/app/page.tsx` - Update homepage styles
5. ⏳ `src/app/blog/page.tsx` - Update blog listing
6. ⏳ `src/app/blog/[slug]/page.tsx` - Update blog posts
7. ⏳ `src/app/research/page.tsx` - Update research listing
8. ⏳ `src/app/research/[slug]/page.tsx` - Update research pages
9. ⏳ `src/app/newsletter/page.tsx` - Update newsletter page
10. ⏳ Any other page components

---

## Testing Checklist

### Functionality
- [ ] Toggle button visible on all pages
- [ ] Click toggles between light/dark
- [ ] Theme persists on page reload
- [ ] Theme persists across browser sessions
- [ ] localStorage correctly stores preference
- [ ] Initial load respects saved theme
- [ ] Smooth transition animation (no flash)

### Visual Verification
- [ ] Light mode: All text readable, proper contrast
- [ ] Dark mode: All text readable, proper contrast
- [ ] Light mode: Images/icons look good
- [ ] Dark mode: Images/icons look good
- [ ] Light mode: Forms/inputs styled correctly
- [ ] Dark mode: Forms/inputs styled correctly
- [ ] Light mode: Buttons/links clear
- [ ] Dark mode: Buttons/links clear

### Accessibility
- [ ] Keyboard navigation works (Tab to focus, Enter to toggle)
- [ ] Focus indicator visible in both themes
- [ ] Screen reader announces theme change
- [ ] WCAG AA contrast ratios met (4.5:1 for text)
- [ ] No color-only information (use icons + text)

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Edge Cases
- [ ] First visit (no localStorage) - defaults to light
- [ ] System preference dark + no saved theme
- [ ] System preference light + saved dark theme
- [ ] localStorage cleared - reverts to default
- [ ] JavaScript disabled - defaults to light (graceful degradation)

---

## Color Palette Reference

### Light Mode
```css
--bg-primary: #ffffff;
--bg-secondary: #f5f5f5;
--bg-tertiary: #e0e0e0;

--text-primary: #212121;
--text-secondary: #757575;
--text-tertiary: #9e9e9e;

--accent-primary: #2196f3; /* Blue */
--accent-secondary: #ff5722; /* Orange */
--accent-success: #4caf50; /* Green */
--accent-warning: #ffc107; /* Yellow */
--accent-error: #f44336; /* Red */

--border-color: #e0e0e0;
--shadow-sm: rgba(0, 0, 0, 0.1);
--shadow-md: rgba(0, 0, 0, 0.15);
--shadow-lg: rgba(0, 0, 0, 0.2);
```

### Dark Mode
```css
--bg-primary: #1a1a1a;
--bg-secondary: #2d2d2d;
--bg-tertiary: #424242;

--text-primary: #e0e0e0;
--text-secondary: #b0b0b0;
--text-tertiary: #757575;

--accent-primary: #64b5f6; /* Lighter blue */
--accent-secondary: #ff7043; /* Lighter orange */
--accent-success: #66bb6a; /* Lighter green */
--accent-warning: #ffca28; /* Lighter yellow */
--accent-error: #ef5350; /* Lighter red */

--border-color: #424242;
--shadow-sm: rgba(0, 0, 0, 0.3);
--shadow-md: rgba(0, 0, 0, 0.4);
--shadow-lg: rgba(0, 0, 0, 0.5);
```

---

## Implementation Timeline

### Session 1 (Nov 1, 2025 - Morning)
1. Create CSS variables in `globals.css`
2. Create `ThemeSwitcher.tsx` component
3. Integrate into `layout.tsx`
4. Test basic toggle functionality

### Session 2 (Nov 1, 2025 - Afternoon)
1. Update homepage for dark mode
2. Update blog pages for dark mode
3. Update research pages for dark mode
4. Test all pages in both themes

### Session 3 (Nov 1, 2025 - Evening)
1. Accessibility audit
2. Browser compatibility testing
3. Edge case testing
4. Documentation updates

---

## Alternatives Considered

### ❌ Tailwind Dark Mode Classes Only
**Why Not**:
- Requires `dark:` prefix on every element
- More verbose, harder to maintain
- CSS variables approach cleaner

### ❌ Separate CSS Files
**Why Not**:
- Duplicate code
- Harder to keep in sync
- Slower switching (load new stylesheet)

### ❌ Third-party Theme Library
**Why Not**:
- Unnecessary dependency
- Custom implementation more flexible
- Small enough to build ourselves

---

## Success Criteria

✅ **Theme toggle works on all pages**  
✅ **Preferences persist across sessions**  
✅ **Both themes meet WCAG AA standards**  
✅ **Smooth user experience (no flash)**  
✅ **Keyboard accessible**  
✅ **Works across all major browsers**

---

## References

- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Next.js Dark Mode Guide](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

**Status**: Ready for implementation  
**Next Action**: Create CSS variables in `globals.css`
