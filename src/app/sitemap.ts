import { MetadataRoute } from 'next'
import { galleryCategories } from './community/gallery-data'
import { noticePosts } from './community/notices-data'
import { newsPosts } from './community/news-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cedarhgp.org'
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/vision-values`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/greeting`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/location`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co-curricular-activities`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // 갤러리 페이지 추가
  const galleryPages = galleryCategories.map((category) => ({
    url: `${baseUrl}/community/gallery/${category.id}`,
    lastModified: new Date(category.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 공지사항 페이지 추가
  const noticePages = noticePosts.map((post) => ({
    url: `${baseUrl}/community/notices/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 뉴스 페이지 추가
  const newsPages = newsPosts.map((post) => ({
    url: `${baseUrl}/community/news/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...galleryPages, ...noticePages, ...newsPages]
}

