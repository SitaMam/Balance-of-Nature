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
<url>
   <loc>https://perfect-lyrics.vercel.app/achyutam-keshavam-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/lag-ja-gale-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/lingashtakam-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/sare-jahan-se-acha-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/tera-mujhse-hai-pehle-ka-naata-koi-hindi-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/brown-munde-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/e-mere-watan-ke-logo-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/deewane-hum-nahi-hote-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/let-me-down-slowly-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/tum-hi-ho-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
   <loc>https://perfect-lyrics.vercel.app/manike-mage-hithe-lyrics/</loc>
   <lastmod>2023-04-29</lastmod>
   <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/ghar-more-pardesiya-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/hum-honge-kamyab-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/teri-mitti-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/aigiri-nandini-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/tu-kitni-achhi-hai-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/pal-pal-dil-ke-paas-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/ya-devi-sarva-bhuteshu-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/bar-bar-din-ye-aaye-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://perfect-lyrics.vercel.app/main-phir-bhi-tumko-chahunga-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url><url>
  <loc>https://perfect-lyrics.vercel.app/dulhe-ka-sehra-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url><url>
  <loc>https://perfect-lyrics.vercel.app/agar-tum-saath-ho-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url><url>
  <loc>https://perfect-lyrics.vercel.app/o-mere-dil-ke-chain-lyrics/</loc>
  <lastmod>2023-04-29</lastmod>
  <priority>0.5</priority>
</url>
</urlset>`

  res.end(xml)
}
