<svelte:head>
	<title>About • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  
  <div class="row">
    <div class="col-6 d-middle">
      <h1>Daniel Groves • Bristol</h1>
      <p>Known to some as Dan Dan the Website Man I work with businesses on everything digital.</p>
      <p>Having supported all types of SME businesses internationally for over 20 years I have a fair grasp of the mechanics of a SME business.</p>
      <p>Focusing on what was emerging internet based businesses. Those who work from business estates and non-descript warehouse units fufilling orders.</p>
    </div>
    <div class="col-6">
      <img src="/images/photography/lhd_floor_pedal_set_01.jpg" alt="Floor Pedal Set" title="Floor Pedal Set" />
    </div>
  </div>
  
  <div class="row">
    <div class="col-4">
      <h2>Experience</h2>
      <p>Having built commercial website professional since 2004, Daniel has build thousands of websites for businesses across a wide range of sections in all different industries.</p>
      <p>With different objectives understanding the best digital solution for a business can be one of the most intricate aspects.</p>
    </div>
    <div class="col-4">
      <h2>Range</h2>
      <p>As an unregulated industry it can sometimes seem like the wild-west deciding on the most practical solution.</p>
      <p>Beyond delivering the objectives and outcome, weather that be, a brouchure website, eCommerce, custom function, bespoke development a few key fundimentals need to be retained.</p>
    </div>
    <div class="col-4">
      <h2>Key Principals</h2>
      <p>Making sure the client can have involvement and understand to whatever level of expertise they want to have involved in the end product.</p>
      <p>If at any stage either party wants to move on, that another provider can pick up where it has been left.</p>
      <p>Simplifying down the problem to its core to avoid bloat, fatigue and mis-direction.</p>
    </div>
  </div>
</div>


<div class="side-scroll">
  <div class="item">
    <div>
      <h2>01</h2>
      <p></p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>02</h2>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>03</h2>
    </div>
  </div>
</div>

<p>&nbsp;</p>

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
  .d-middle {
    justify-content: center;
    display: flex;
    flex-direction: column;
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
    .row .col-6 {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col-4,
    .row .col-6 {
      flex-basis: 100%;
      gap:0;
    }
  }
</style>