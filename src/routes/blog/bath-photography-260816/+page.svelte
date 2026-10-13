<script>
  import { page } from '$app/stores'
  
  const base_url = 'https://danielgroves.co.uk/'
  const seo = {
    title: 'Bath Photography Sunday August 16th 2026',
    url: base_url,
    fullURL: `${base_url}${page.url.pathname.toString()}`,
    description: 'A selection of photos taken in Bath, Somerset.',
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
  <h1>Bath Photography Sunday August 16th 2026</h1>
  <p>A selection of photos taken in Bath, Somerset.</p>
  <p>All the photographs are taken on a Sony A7III with a FE 2.8 / 50 Macro Sony lens.</p>
  
  <img src="/images/blog-260816/blog_post_260816_01C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_02C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_03C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_04C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_05C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_06C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_07C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_08C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_09C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_10C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_11C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_12C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_13C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
  <img src="/images/blog-260816/blog_post_260816_14C.jpg" alt="Bath Photography Sunday August 16th 2026" title="Bath Photography Sunday August 16th 2026" />
</div>