<svelte:head>
	<title>Technical Drawings • Services • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  <h1>Technical Drawings</h1>
  <p>Studio product photography is a hightly important aspect to any eCommerce or warehouse driven business.</p>
  <p>Honest and clear photography in high resolution and quality is an important stage in the buying process.</p>
  <hr />
  <h2>Styles</h2>
  <div class="row">
    <div class="col">
      <img src="/images/diagrams/car_chassis.jpg" title="Car Chassis" alt="Car Chassis" />
      <h3 class="mb-0">Redrawing from Original</h3>
      <p>The process of taking original draftsman drawings, typically historic and digitising them into a scalable vector format.</p>
    </div>
    <div class="col">
      <img src="/images/diagrams/technical_drawing_03.jpg" title="Brake Pads" alt="Brake Pads" />
      <h3 class="mb-0">Dimensional Reference</h3>
      <p>Diagrams for use of referencing size, shape, use-case dimensions and all details that are easier to illustrate diagramticaly.</p>
    </div>
    <div class="col">
      <img src="/images/diagrams/studs_into_bell.jpg" title="Wheel Studs into Bell" alt="Wheel Studs into Bell" />
      <h3 class="mb-0">Fitting Guides</h3>
      <p>Typically a series of illustrations to help users understand how to fit an item to a subject.</p>
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
    width:31.3334%;
    flex-basis:31.3334%;
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