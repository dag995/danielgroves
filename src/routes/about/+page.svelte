<svelte:head>
	<title>About • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  
  <div class="row">
    <div class="col">
      <h1>Daniel Groves • Bristol</h1>
      <p>Known to some as Dan Dan the Website Man I work with businesses on everything digital.</p>
      <p>Having supported all types of SME businesses internationally for over 20 years I have a fair grasp of the mechanics of a SME business.</p>
      <p>Focusing on what was emerging internet based businesses. Those who work from business estates and non-descript warehouse units fufilling orders.</p>
    </div>
    <div class="col">
      <img src="/images/photography/lhd_floor_pedal_set_01.jpg" alt="Floor Pedal Set" title="Floor Pedal Set" />
    </div>
  </div>
</div>

<div class="container mx-auto">
  
  <div class="row">
    <div class="col">
      <h1>Engineering Precission</h1>
    </div>
    <div class="col">
      <img src="/images/photography/lumley_01.jpg" alt="Details fo Cat Electric Motor Cover" title="Details fo Cat Electric Motor Cover" />
      <p>
        <small>
          CAT Electric Motor cover housing. A prototype piece in an effort to move towards a more sustainable worksite.
          <br />
          The detailed fins shown are designed to reduce heat produced by the electric motor.
        </small>
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <img src="/images/photography/lumley_part_01.jpg" alt="Details fo Cat Electric Motor Cover" title="Details fo Cat Electric Motor Cover" />
    </div>
    <div class="col-6">
      <img src="/images/photography/lumley_part_02.jpg" alt="Details fo Cat Electric Motor Cover" title="Details fo Cat Electric Motor Cover" />
    </div>
  </div>

  <div class="row">
    <div class="col-4">
      <img src="/images/photography/lumley_part_03.jpg" alt="Front of an Oil Cooler Plate" title="Front of an Oil Cooler Plate" />
      <p><small>Front of an Oil Cooler Plate</small></p>
    </div>
    <div class="col-4">
      <img src="/images/photography/lumley_part_04.jpg" alt="Rear of an Oil Cooler Plate" title="Rear of an Oil Cooler Plate" />
      <p><small>Rear of an Oil Cooler Plate</small></p>
    </div>
    <div class="col-4">
      <img src="/images/photography/lumley_part_05.jpg" alt="Details fo Cat Electric Motor Cover" title="Details fo Cat Electric Motor Cover" />
      <p><small>Suspension Damper top hat</small></p>
    </div>
  </div>
</div>


<div class="side-scroll">
  <div class="item">
    <div>
      <h2>01</h2>
    </div>
  </div>
</div>


<style>
  .container {
    min-height:auto;
  }
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
    width:48%;
    flex-basis:48%;
    flex-grow:0;
    margin:10px 0;
    padding:0;
  }
  .side-scroll {
    width:100%;
    /* max-width:1240px; */
    margin:0;
    padding:0;
    display:flex;
    flex-wrap:nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;
  }
  .side-scroll .item {
    padding:0 5px;
    min-width:300px;
    width:100%;
    display: flex;
    transform: translateX(calc(max(1240px, 100vw)/2 - 600px));
  }
  .side-scroll .item div {
    background-color:var(--theme-color);
    border-radius:10px;
    padding:30px 20px;
    width:100%;
    color:#FFF;
    min-height:300px;
  }
  .side-scroll .item div h2 {
    color:#FFF;
    font-size:6.4em;
    margin:30px 0 0;
    padding: 0;
  }
  .side-scroll .item div h2:after {
    content: " ";
    display:block;
    width:80px;
    height:1px;
    background:#FFF;
    margin:40px 0;
  }
  .row .col-6 {
    flex-grow:0;
    margin:10px 0;
    padding:0;
    width:48%;
    flex-basis:48%;
  }
  .row .col-4 {
    flex-grow:0;
    margin:10px 0;
    padding:0;
    width:31.3334%;
    flex-basis:31.3334%;
  }

  @media (max-width: 781px) {
    .row .col-4 {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col-4 {
      flex-basis: 100%;
      gap:0;
    }
  }
  @media (max-width: 781px) {
    .row .col-4,
    .row .col-6,
    .row .col {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col-4,
    .row .col-6,
    .row .col {
      flex-basis: 100%;
      gap:0;
    }
  }
</style>