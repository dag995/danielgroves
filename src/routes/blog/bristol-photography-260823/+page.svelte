<script>
  import { page } from '$app/stores'
  
  const base_url = 'https://danielgroves.co.uk/'
  const seo = {
    title: 'Bristol Photography Sunday August 23rd 2026',
    url: base_url,
    fullURL: `${base_url}${page.url.pathname.toString()}`,
    description: 'A selection of photos taken in Bristol',
    image: `${base_url}images/blog-260816/blog_post_260816_03C.jpg`
  }
</script>

<svelte:head>
  <title>{seo.title} • Blog • Daniel Groves</title>
  <meta name="description" content={seo.description} />
  <meta property="og_site_name" content={seo.url} />
  <meta property="og:url" content={seo.fullURL} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{seo.title}" />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={seo.url} />
  <meta property="twitter:url" content={seo.fullURL} />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.image}>
  {@html `<script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${seo.title} • ${seo.url}",
   "url": "${seo.fullURL}",
   "logo": ${seo.image}  
   }</script>`}
</svelte:head>

<div class="container mx-auto">
  <h1>Bristol Photography Sunday August 23rd 2026</h1>
  <p>A selection of photos taken in Bristol.</p>
  <p>All the photographs are taken on a Sony A7III with a FE 2.8 / 50 Macro Sony lens.</p>
  
  <img src="/images/blog-260823/blog_post_260823_01.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_02.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_03.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_04.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_05.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_06.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260823/blog_post_260823_07.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
  <img src="/images/blog-260816/blog_post_260823_08.jpg" alt="Bristol Photography Sunday August 23rd 2026" title="Bristol Photography Sunday August 23rd 2026" />
</div>