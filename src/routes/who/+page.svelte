<svelte:head>
	<title>Who We Help • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  
  <h1>Who We Help</h1>
  <div class="row">
    <div class="col">
      <p>Working with a range of Small and Medium-sized Enterprises (SMEs) to help better their digital presence and business processes.</p>
      <p>With a background in helping small service focused businesses and warehouse eCommerce businesses who fulfill B2B and B2C orders directly.</p>
      <p>Supporting a wide varierty of industries who typically have the same structure and goals.</p>
    </div>
    
    <div class="col">
      <p>Understanding how the business operates and what a business has to do day-to-day is key to being able to analyse how best to help.</p>
      <p>An outsiders perspective can provide key insight into what is and isn't working and how a business can better use digital technology to operation seamlessly.</p>
    </div>
    
    <div class="col">
      <img src="/images/photography/carbon_fibre_bonnet_gt_late_02.jpg" alt="Carbon Fibre Bonnet" title="Carbon Fibre Bonnet" />
    </div>
  </div>
  
  <h2 class="mb-0">Process</h2>
</div>

<div class="side-scroll">
  <div class="item">
    <div>
      <h2>01</h2>
      <p>Review and correct any base line problems within the digital setup.</p>
      <p>Looking at all your current digital assets and accessing if anything needs addressing.</p>
      <p>From making sure you have all your branding in the right formats to the security on your website actually keeping you and your customers safe.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>02</h2>
      <p>Moving emails to a SLA backed platform if neccessery, understanding if your website code is up-to-date.</p>
      <p>Moving your domains and DNS to Cloudflare for speed and security.</p>
      <p>Mapping out your process and analysising where manual processes could be automated.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>03</h2>
      <p>Plan and begin automating processes that are manually performed releasing time and resource.</p>
      <p>Internally intergrating systems to one another. Supporting in tasks to help avoid mistakes due to uncertainty.</p>
      <p>Externally for example, automating a payment processes to improve customer expeirence and friction in aquisition.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>04</h2>
      <p>Review the current product and service to better present both visually and technically.</p>
      <p>Photography of all product, how key details are presented, reviewing the quality and resolution, upgrading where required.</p>
      <p>Descriptions, key technical details and specifics reviewed and improved, filling gaps where they exist.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>05</h2>
      <p>Optimisation and strategies to outreach to new markets and customers.</p>
      <p>Looking to capitalise on existing customers and how new customers can be found.</p>
      <p>Via search engine, social media, email marketing, existing customer information and product innovation.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>06</h2>
      <p>On-going support to improve the current internal processes and better support current personnel.</p>
      <p>Arranging meetings and reviews to develop new features for the customers to optimise sales.</p>
      <p>Recruit and market for new personnel where and when neccessery.</p>
    </div>
  </div>
  <div class="item">
    <div>
      <h2>07</h2>
      <p>Digital asset creation for both on-screen and print media for both product, service and other.</p>
      <p>Analyse and review statistics and generate reports to give an insight into performance.</p>
      <p>Support in business growth as challenges arise and buisness needs change.</p>
    </div>
  </div>
</div>

<div class="container mx-auto">

</div>

<style>
  .container {
    min-height:auto;
  }
  .mb-0 {
    margin-bottom:0;
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
    width:31.3334%;
    flex-basis:31.3334%;
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