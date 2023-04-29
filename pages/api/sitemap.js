export default function handler(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
    
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
  <loc>https://perfect-lyrics.vercel.app/zaroori-tha-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/ek-pyar-ka-nagma-hai-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/khamoshiyan-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/soch-na-sake-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/mile-ho-tum-humko-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/tere-sang-yaara-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/mera-mulk-mera-desh-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/kina-chir-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url> 
<url>
  <loc>https://perfect-lyrics.vercel.app/meri-bheegi-bheegi-si-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url> 
<url>
  <loc>https://perfect-lyrics.vercel.app/kali-kali-zulfon-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url> 
<url>
  <loc>https://perfect-lyrics.vercel.app/teri-aashiqui-ne-mara-2-0-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url> 
<url>
  <loc>https://perfect-lyrics.vercel.app/kaise-hua-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>  
<url>
  <loc>https://perfect-lyrics.vercel.app/pasoori-lyrics-in-hindi/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
</urlset>`

  res.end(xml)
}
