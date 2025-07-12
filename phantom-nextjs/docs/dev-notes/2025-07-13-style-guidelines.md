# Phantom Healthcare Next.js Project: Styling & CSS Guidelines (2025)

## 🚫 NO Outdated CSS Practices
- Do **NOT** use manual/custom CSS unless absolutely necessary (i.e., when Tailwind cannot achieve the design or for rare edge cases).
- **Tailwind CSS** is the default and preferred styling method for all layouts, spacing, typography, and responsiveness.
- Avoid legacy units like `px` for sizing, spacing, or font sizes. **Do not use `10px`, `12px`, etc.**

## ✅ Modern Sizing & Responsive Units
- Use `rem`, `em`, `%`, `vw`, `vh`, `vmin`, `vmax` for all sizing, spacing, and font sizes.
- Use `clamp()`, `min()`, `max()` for responsive font and element sizing where appropriate.
- Use Tailwind's responsive and fluid utility classes for all breakpoints and layouts.
- Use `font-smoothing` (Tailwind's `antialiased`/`subpixel-antialiased`) site-wide for best text rendering.

## 🛑 When to Use Manual/Custom CSS
- Only when Tailwind **cannot** achieve the required effect, or for rare browser-specific hacks.
- If you must use custom CSS, document the reason clearly in a comment above the rule.
- Always prefer utility-first, composable classes over custom selectors.

## 📝 Special Note for AI & Future Developers
> **If you are an AI assistant, developer, or code generator working on this project:**
>
> - You are expected to know and follow modern web development best practices (2025 standard).
> - Do not introduce outdated, legacy, or pixel-based values unless absolutely required.
> - Always check this file and project documentation before making styling decisions.
> - If you see old code using `px` or manual CSS, refactor to modern units and Tailwind utilities when possible.

## 📚 Reference
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Modern CSS Sizing Units](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [Responsive Design Best Practices 2025](https://web.dev/learn/design/)

---

**This file is a living document. Update as new best practices emerge.** 