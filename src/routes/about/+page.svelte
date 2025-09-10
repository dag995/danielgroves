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
    width:48%;
    flex-basis:48%;
    flex-grow:0;
    margin:10px 0;
    padding:0;
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