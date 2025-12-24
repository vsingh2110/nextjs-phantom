import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// Blog post type
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  category: string
  author: string
  tags?: string[]
}

// Blog post metadata (without content)
export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  author: string
  tags?: string[]
}

// Content directory path
const contentDirectory = path.join(process.cwd(), 'content', 'blogs')

/**
 * Get all blog posts
 * @returns Array of blog post metadata sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMetadata[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readTimeResult = readingTime(content)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        date: data.date,
        readTime: readTimeResult.text,
        category: data.category,
        author: data.author || 'Phantom Healthcare Team',
        tags: data.tags || [],
      }
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return posts
}

/**
 * Get a single blog post by slug
 * @param slug - The blog post slug
 * @returns BlogPost object or null if not found
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTimeResult = readingTime(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      image: data.image,
      date: data.date,
      readTime: readTimeResult.text,
      category: data.category,
      author: data.author || 'Phantom Healthcare Team',
      tags: data.tags || [],
    }
  } catch (error) {
    return null
  }
}

/**
 * Get all blog post slugs for static generation
 * @returns Array of slug objects
 */
export function getAllSlugs(): { slug: string }[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }))
}
