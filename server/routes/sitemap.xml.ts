import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  const { public: { siteUrl } } = useRuntimeConfig(event)
  const pages = await queryCollection(event, 'docs').where('extension', '=', 'md').select('path').all()
  const paths = [...new Set(['/', ...pages.map(page => page.path)])]
  const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;',
  })[character]!)

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `<url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`).join('\n')}
</urlset>`
})
