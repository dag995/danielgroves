<svelte:head>
	<title>About • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  
  <h1>Services</h1>
  <p>Bristol based WordPress and Javascript (JS) developer.</p>
  <hr />
  <h2>Developer Services</h2>
  <div class="row">
    <div class="col">
      <img src="/images/logos/wordpress_logo.svg" title="WordPress" alt="WordPress" />
      <h3 class="mb-0">WordPress</h3>
      <p>With over ten years of WordPress experience. Building sites to spec in as close to WordPress core as possible to keep third-party reliance to a minimum.</p>
    </div>
    <div class="col">
      <img src="/images/logos/sveltekit_logo.svg" title="SvelteKit" alt="SvelteKit" />
      <h3 class="mb-0">SvelteKit JS</h3>
      <p>Since SvelteKit launched version 1 I have used it to develop middleware and full standalone, custom systems. For small businesses with specific custom needs SvelteKit is a fast and robust platform to build on.</p>
    </div>
    <div class="col">
      <img src="/images/logos/wordpress_blocks_logo.svg" title="WordPress Blocks" alt="WordPress Blocks" />
      <h3 class="mb-0">WordPress Blocks</h3>
      <p>WordPress Gutenberg now WordPress Blocks launched in 2018. One of the biggest changes WordPress has ever made.</p>
      <p>Blocks allows for perfect block editor integration for both user and outputted function.</p>
    </div>
    <div class="col">
      <img src="/images/logos/javascript_logo.svg" title="Javascript" alt="Javascript" />
      <h3 class="mb-0">PHP & Javscript</h3>
      <p>Regardless of framework I can create and develop for any PHP or Javsacript requirements.</p>
    </div>
  </div>

  <hr />

  <h2>Design Services</h2>
  <div class="row">
    <div class="col">
      <img src="/images/photography/website_design.jpg" title="Yew Therapies" alt="Yew Therapies" />
      <h3>Web Design</h3>
      <p>Simple brouchure websites to full eCommerce system, custom interactive functions, bespoke and unique functions.</p>
    </div>
    <div class="col">
      <img src="/images/photography/print_design.jpg" title="Print Design" alt="Print Design" />
      <h3>Print Design</h3>
      <p>Guides, brouchures, signage, specialist print items, one-offs, corporate literature.</p>
    </div>
    <div class="col">
      <img src="/images/photography/ultraleggera_front_01.jpg" title="Suspension Kit" alt="Suspenion Kit" />
      <h3>Photography</h3>
      <p>Studio product photography focused on details and technical details.</p>
      <p>From micro, pack-shot, exploded packages, full in-focus and lifestyle photography.</p>
    </div>
    <div class="col">
      <img src="/images/photography/branding_logo.svg" title="Infuse Recruitment" alt="Infuse Recruitment" />
      <h3>Branding</h3>
      <p>Logos, identity and branding for all types of businesses and industies. This can include redrawing existing branding or refining current branding for purpose.</p>
    </div>
  </div>
  
  <div class="row">
  
    <div class="col">
      <img src="/images/diagrams/footrest.jpg" title="Car Chassis" alt="Car Chassis" />
      <h3>Technical Drawings</h3>
      <p>Taking old technical drawings and making them vector or creating new from reference photography to illustrate details for fitting guides or reference.</p>
    </div>
  
    <div class="col">
      <img src="/images/photography/illustration.jpg" title="Car" alt="Car" />
      <h3>Illustration</h3>
      <p>General illustration from a suite of icon development, graphics for presentation or demonstration.</p>
    </div>
  
  </div>

</div><!-- CONTAINER -->

<style>
  .row {
    max-width:1240px;
    margin:0 auto;
    padding:0;
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap:2%;
  }
  .row .col {
    width:23%;
    flex-basis:23%;
    flex-grow:0;
    margin:10px 0;
    padding:0;
  }
  .mb-0 {
    margin-bottom:0;
  }
  @media (max-width: 781px) {
    .row .col {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col {
      flex-basis: 100%;
      gap:0;
    }
  }
</style>