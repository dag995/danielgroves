<script>
  const posts = [
    {
      url: 'bath-photography-260816',
      title: 'Bath Photography Sunday August 16th 2026',
      img: 'blog-260816/blog_post_260816_03C.jpg',
      desc: 'Photos taken in Bath, Somerset.'
    }, {
      url: 'bristol-photography-260812',
      title: 'Bristol Harbourside Photography Wednesday August 12th 2026',
      img: 'blog-260812/harbourside_120826_01.jpg',
      desc: 'Photos taken in and around the harbourside.'
    }, {
      url: 'bristol-byzantine-260811',
      title: 'Bristol Byzantine Architectural Photography',
      img: 'blog-260811/the_granary_bristol_01.jpg',
      desc: 'Photos taken in and around the harbourside of the Byzantine architecture.'
    }, {
      url: 'bristol-photography-260810',
      title: 'Bristol Architectural Photography Monday August 10th 2026',
      img: 'blog-260810/bristol_10-08-26_06.jpg',
      desc: 'A selection of photos takne in and around Clifton, the harbourside and Bedminster.'
    }, {
      url: 'bristol-photography-260809',
      title: 'Bristol Architectural Photography - Sunday August 9th 2026',
      img: 'blog-260809/building_01.jpg',
      desc: 'A selection of photos taken in the Temple Meads area of Bristol on Sunday morning.'
    }, {
      url: 'bristol-balloon-fiesta-2026',
      title: 'Bristol Balloon Fiesta - Saturday August 8th 2026',
      img: 'blog-260808/balloon_09.jpg',
      desc: 'A selection of photos taken at the Saturday mass assent and night glow of the 2026 Bristol Balloon Fiesta.',
    }
  ]
</script>
<svelte:head>
	<title>Blog • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  <h1>Blog</h1>
  <p>The diary of a developer.</p>

  {#each posts as post} 
    <div class="columns">
      <div>
        <a href={`/blog/${post.url}`} title={post.title}>
          <img src={`/images/${post.img}`} alt={post.title} />
        </a>
      </div>
      <div>
        <h2><a href={`/blog/${post.url}`} title={post.title}>{post.title}</a></h2>
        <p>{post.desc}</p>
        <p><a href={`/blog/${post.url}`} class="button-p" title={post.title}>Read more</a></p>
      </div>
    </div>
  {/each}

</div>
<style>
  .columns {
    display:flex;
    gap:2%;
    flex-wrap: wrap;
    width:100%;
    margin-top:5vh;
    padding-top:5vh;
    border-top:solid 1px #CCC;
  }
  .columns div {
    flex-basis:49%;
    width:49%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:0;
  }
  .columns div h2 {
    margin:0 0 10px;
    line-height: normal;
  }
  .columns div p {
    margin-top:0;
  }
  .columns div p:last-child {
    margin-bottom:0;
  }

  @media (max-width:860px) {
    .columns div {
      flex-basis:100%;
      width: 100%;
    }
  }
</style>