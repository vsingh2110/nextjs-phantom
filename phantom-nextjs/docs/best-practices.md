# Best Practices & Coding Standards

**Project:** Phantom Medical Imaging - Next.js Migration  
**Last Updated:** November 22, 2025  
**Purpose:** Coding standards, conventions, and best practices for consistent development

---

## 🎨 UI/UX BEST PRACTICES

### **Design Principles**

#### **1. Brand Identity**
- **Primary Color:** `#59913d` (Medical green - trust, health, growth)
- **Secondary Color:** `#255a0a` (Darker green for hover states)
- **Typography:** Professional, clean, readable
- **Tone:** Professional, trustworthy, healthcare-focused
- **Imagery:** High-quality medical equipment photos

#### **2. Responsive Design Philosophy**
```
Mobile First → Tablet → Desktop → Ultra-wide
320px      →  768px  →  1024px  →  1920px+
```

**Breakpoints (Tailwind):**
```js
sm: '640px'   // Small tablets
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large desktops
```

#### **3. Spacing System**
Use Tailwind's spacing scale consistently:
```
p-2  = 0.5rem = 8px    // Tight
p-4  = 1rem = 16px     // Default
p-6  = 1.5rem = 24px   // Comfortable
p-8  = 2rem = 32px     // Spacious
p-12 = 3rem = 48px     // Section padding
```

---

### **Color Usage Guidelines**

#### **Primary Actions:**
```tsx
<button className="bg-[#59913d] hover:bg-[#255a0a] text-white">
  Contact Us
</button>
```

#### **Text Hierarchy:**
```tsx
<h1 className="text-gray-900">     // Headings
<h2 className="text-gray-800">     // Subheadings
<p className="text-gray-700">      // Body text
<span className="text-gray-600">   // Secondary text
<small className="text-gray-500">  // Muted text
```

#### **Backgrounds:**
```tsx
<section className="bg-white">       // Content sections
<section className="bg-gray-50">    // Alternate sections
<section className="bg-gray-100">   // Subtle backgrounds
```

---

### **Typography Best Practices**

#### **Font Smoothing (ALWAYS):**
```css
body {
  @apply antialiased subpixel-antialiased;
}
```

#### **Font Size Scale:**
```tsx
<h1 className="text-4xl lg:text-6xl">        // Hero headings
<h2 className="text-3xl lg:text-5xl">        // Section headings
<h3 className="text-2xl lg:text-4xl">        // Subsection headings
<h4 className="text-xl lg:text-2xl">         // Card headings
<p className="text-base lg:text-lg">         // Body text
<small className="text-sm">                  // Fine print
```

#### **Responsive Typography:**
```tsx
// Use clamp() for fluid typography
className="text-[clamp(1rem,2vw,1.5rem)]"

// Or Tailwind responsive classes
className="text-base md:text-lg lg:text-xl"
```

---

## 💻 CODE STYLE & CONVENTIONS

### **TypeScript Standards**

#### **1. Interface Definitions:**
```tsx
// ✅ GOOD - Clear, descriptive
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  onContactClick: () => void;
}

// ❌ BAD - Vague, incomplete
interface Props {
  data: any;
  onClick: Function;
}
```

#### **2. Type vs Interface:**
```tsx
// ✅ Use interface for objects/components
interface User {
  id: string;
  name: string;
}

// ✅ Use type for unions/primitives
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;
```

#### **3. Avoid 'any':**
```tsx
// ❌ BAD
const processData = (data: any) => { ... }

// ✅ GOOD
const processData = (data: FormData) => { ... }

// ✅ Or use unknown if truly unknown
const processData = (data: unknown) => {
  if (typeof data === 'object' && data !== null) {
    // Type guard
  }
}
```

---

### **Component Structure**

#### **Standard Component Template:**
```tsx
// 1. Imports
import { useState, useEffect } from 'react';
import type { ComponentProps } from './types';

// 2. Interface/Types
interface ProductCardProps {
  title: string;
  description: string;
}

// 3. Component
export default function ProductCard({ title, description }: ProductCardProps) {
  // 4. Hooks
  const [isHovered, setIsHovered] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    // Handle click
  };
  
  // 6. Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // 7. Render
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

#### **Component Organization:**
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
└── features/
    ├── HeroSlider.tsx
    ├── TestimonialsCarousel.tsx
    └── ContactForm.tsx
```

---

### **React Best Practices**

#### **1. Use Hooks Correctly:**
```tsx
// ✅ GOOD - Memoized callback
const handleSubmit = useCallback(() => {
  // Heavy operation
}, [dependencies]);

// ✅ GOOD - Memoized value
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);

// ❌ BAD - Creating function on every render
const handleClick = () => { ... };
```

#### **2. Conditional Rendering:**
```tsx
// ✅ GOOD - Early return
if (!data) return <Loading />;
if (error) return <Error message={error} />;

// ✅ GOOD - Ternary for simple cases
{isLoading ? <Spinner /> : <Content />}

// ✅ GOOD - && for single condition
{showAlert && <Alert />}

// ❌ BAD - Nested ternaries
{loading ? <Loading /> : error ? <Error /> : data ? <Content /> : null}
```

#### **3. Props Handling:**
```tsx
// ✅ GOOD - Destructure in parameter
function Card({ title, description, image }: CardProps) {
  return <div>...</div>;
}

// ✅ GOOD - Rest props for flexibility
function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}

// ❌ BAD - Using props object directly
function Card(props) {
  return <div>{props.title}</div>;
}
```

---

## 🎯 TAILWIND CSS BEST PRACTICES

### **Class Organization**

#### **Order of Classes:**
```tsx
// Layout → Box Model → Visual → Typography → Interactions
className="
  flex items-center justify-between   // Layout
  w-full h-20 px-6 py-4              // Box Model
  bg-white border-b shadow-sm        // Visual
  text-lg font-semibold              // Typography
  hover:bg-gray-50 transition-colors // Interactions
"
```

#### **Responsive Classes:**
```tsx
// Mobile first, then breakpoints
className="
  text-base         // Mobile (default)
  md:text-lg        // Tablet
  lg:text-xl        // Desktop
  2xl:text-2xl      // Large desktop
"
```

### **Custom Tailwind Configuration**

#### **Extend, Don't Replace:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-green': '#59913d',
        'brand-green-dark': '#255a0a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### **Common Patterns**

#### **Container:**
```tsx
<div className="container mx-auto px-4 max-w-7xl">
  {/* Content */}
</div>
```

#### **Card:**
```tsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  {/* Card content */}
</div>
```

#### **Button:**
```tsx
<button className="
  bg-[#59913d] hover:bg-[#255a0a]
  text-white font-semibold
  px-6 py-3 rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#59913d]
">
  Click Me
</button>
```

#### **Responsive Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## ⚡ PERFORMANCE BEST PRACTICES

### **Image Optimization**

#### **Use Next.js Image:**
```tsx
import Image from 'next/image';

// ✅ GOOD
<Image
  src="/images/product.jpg"
  alt="CT Scanner Machine"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:..."
/>

// ❌ BAD
<img src="/images/product.jpg" alt="CT Scanner" />
```

#### **Responsive Images:**
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // For above-the-fold images
/>
```

### **Code Splitting**

#### **Dynamic Imports:**
```tsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false, // Client-side only if needed
});
```

#### **Route-Based Splitting:**
Next.js automatically code-splits by route. No extra work needed! ✅

### **Bundle Size Management**

#### **Import Only What You Need:**
```tsx
// ✅ GOOD - Import specific functions
import { useState, useEffect } from 'react';

// ❌ BAD - Import entire library for one function
import _ from 'lodash';
```

#### **Tree Shaking:**
```tsx
// ✅ GOOD - Allows tree shaking
import { format } from 'date-fns';

// ❌ BAD - Imports entire library
import moment from 'moment';
```

---

## 🔥 FIREBASE BEST PRACTICES

### **Initialization**

```tsx
// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ...
};

// Prevent multiple initializations
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
```

### **Firestore Operations**

```tsx
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// ✅ GOOD - Error handling, timestamps
async function submitForm(data: FormData) {
  try {
    await addDoc(collection(db, 'contact_forms'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'pending',
    });
    return { success: true };
  } catch (error) {
    console.error('Firebase error:', error);
    return { success: false, error };
  }
}
```

---

## 📧 EMAILJS BEST PRACTICES

### **Configuration**

```tsx
// lib/emailjs.ts
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export async function sendEmail(templateParams: Record<string, unknown>) {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
}
```

### **Form Integration**

```tsx
// ✅ GOOD - Loading states, validation, error handling
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  // Validate
  if (!formData.email || !formData.message) {
    setError('Please fill all required fields');
    return;
  }
  
  setIsLoading(true);
  setError('');
  
  try {
    // Save to Firebase
    await submitToFirebase(formData);
    
    // Send email
    await sendEmail(formData);
    
    setSuccess('Form submitted successfully!');
    resetForm();
  } catch (error) {
    setError('Failed to submit form. Please try again.');
  } finally {
    setIsLoading(false);
  }
}
```

---

## ♿ ACCESSIBILITY BEST PRACTICES

### **Semantic HTML**

```tsx
// ✅ GOOD - Semantic
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>© 2025 Phantom Medical</p>
</footer>

// ❌ BAD - Div soup
<div className="header">
  <div className="nav">
    <div className="link">Home</div>
  </div>
</div>
```

### **ARIA Labels**

```tsx
// Buttons with icons only
<button aria-label="Close modal" onClick={onClose}>
  <XIcon />
</button>

// Search input
<input
  type="search"
  aria-label="Search products"
  placeholder="Search..."
/>

// Loading states
<div role="status" aria-live="polite">
  {isLoading ? 'Loading...' : 'Content loaded'}
</div>
```

### **Keyboard Navigation**

```tsx
// Focusable elements
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click Me
</button>

// Focus indicators (never remove outline without replacement)
className="focus:outline-none focus:ring-2 focus:ring-[#59913d]"
```

---

## 🧪 TESTING BEST PRACTICES

### **Manual Testing Checklist**

#### **Functionality:**
- [ ] All forms submit correctly
- [ ] All links navigate properly
- [ ] All buttons trigger intended actions
- [ ] Error states display correctly
- [ ] Loading states show appropriately

#### **Responsiveness:**
- [ ] Test at 320px (small mobile)
- [ ] Test at 375px (iPhone)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (laptop)
- [ ] Test at 1920px+ (desktop)

#### **Browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### **Devices:**
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (multiple browsers)

### **Performance Testing**

```bash
# Run Lighthouse audit
npm run build
npm run start
# Open DevTools → Lighthouse → Run audit

# Analyze bundle size
npm run analyze
```

---

## 📝 GIT & VERSION CONTROL

### **Commit Message Format**

```bash
# ✅ GOOD - Descriptive, actionable
git commit -m "Fix mobile overflow issue in hero slider"
git commit -m "Add testimonials carousel component"
git commit -m "Update Firebase configuration for production"

# ❌ BAD - Vague, unhelpful
git commit -m "Fix bug"
git commit -m "Update files"
git commit -m "Changes"
```

### **Commit Frequency**

- Commit after each logical change
- Commit working code (tests pass)
- Commit before switching tasks
- Don't wait until end of day

### **Branch Strategy**

```bash
# Main branch (protected)
master

# Feature branches
feature/hero-slider
feature/contact-form
feature/product-pages

# Bug fix branches
fix/mobile-overflow
fix/footer-map

# Documentation branches
docs/update-guidelines
```

---

## 🎯 QUICK REFERENCE CHECKLIST

### **Before Starting Work:**
- [ ] Read current documentation
- [ ] Understand the requirement
- [ ] Research best practices
- [ ] Plan implementation approach

### **During Development:**
- [ ] Use TypeScript types
- [ ] Follow Tailwind conventions
- [ ] Keep mobile/desktop separate
- [ ] Document as you code
- [ ] Test incrementally

### **Before Committing:**
- [ ] Remove console.logs
- [ ] Check for errors
- [ ] Test on mobile
- [ ] Update documentation
- [ ] Write clear commit message

---

**For project guidelines, see:** `AI-AGENT-CRITICAL-GUIDELINES.md`  
**For restrictions, see:** `precautions-and-guardrails.md`  
**For tech details, see:** `tech-stack-reference.md`
