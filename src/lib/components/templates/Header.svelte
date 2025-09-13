<script>
  import { base } from '$app/paths'
  import { onMount, onDestroy } from 'svelte'

  const scrollNavBar = 110
	let lastScroll = 0
	let show = $state(false)
	let hoverMenu = $state('')
	let headerBg = $state(false)
	let mobile = $state(false)

	onMount(() => {
		window.onscroll = () => {
			const current = window.scrollY
			show = current < scrollNavBar || current < lastScroll ? false : true			
			if( ( current + 10 ) < lastScroll ) {
				headerBg = false
				hoverMenu = ''
			}
			if( (current + 10) > lastScroll ) hoverMenu = ''
			lastScroll = current
		}
	})
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<header 
  onmouseenter={() => { headerBg = true }}
  onmouseleave={() => { }}
  class={`main-header ${headerBg || hoverMenu ? 'bgFFF' : ''}`}
  class:scrolled={show}
>
  <div class="wrapper">
    <div class="inner-wrapper">
      
      <a href="/" class="logo" aria-label="home">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 560 470" style="enable-background:new 0 0 560 470;" xml:space="preserve">
          <ellipse cx="243" cy="118.2" rx="26.5" ry="26.6"/>
          <path d="M495.1,62.9C448.9,19.5,381.1,0,288.8,0H67.3c0,0,0,2.8,0,9.8c12.1,3.4,42.5,4.1,33.6,18.8h0.2L13.2,192.2c-17.3,48.9-19.4,48.2,4.1,89.6s80.3,52.7,118.2,22.3l2.1-1.7c40.4-32.4,47.1-90.7,16.3-132.4c-33-44.7-33.5-141,11.5-141c0.1-0.1,0.1-0.3,0.2-0.4h50.5c40.7,0,77,25.5,91,63.8l14.1,38.7h134.9c25.1,0,41.3,26.7,29.7,49.1l-68.5,131.9c-9.6,18.4-27.7,30.7-48.3,32.7c-60,6-166,24.9-247.5,81.9c-0.9,0.6-1.8,1.1-2.7,1.7c-6.5,7.7-17.2,11.1-34.5,13.2c-2.3,0.4-4.6,0.6-6.9,0.8c-3.2,0.3-6.6,0.6-10.1,0.9V470h198.4c82.2,0,150.8-20.2,204.1-60.7c55.5-41.9,90.2-105.6,90.2-188.7C560,147.5,531.9,96.9,495.1,62.9z"/>
        </svg>
      </a>

      <nav class={mobile ? 'active' : ''}>
        <ul class="nav">
          <li><a href="/about" title="About" target="_self">About</a></li>
          <li><a href="/who" title="Who" target="_self">Who</a></li>
          <li><a href="/services" title="Services" target="_self">Services</a></li>
          <li><a href="/work" title="Work" target="_self">Work</a></li>
          <li><a href="/contact" title="Contact" target="_self">Contact</a></li>
        </ul>
      </nav>
      <a
        href="/" 
        title="Mobile Menu Open" 
        class={`mobile_menu${mobile ? ' active' : ''}`}
        aria-label="mobile menu open"
        onclick={e => {
          e.preventDefault()
          mobile = !mobile
        }}
      ></a>

    </div>
  </div>
</header>

<style type="text/css">
  header {
    width: 100%;
    z-index: 500;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out, top 0.6s ease-in-out;
    background: rgba(255, 255, 255, 0.86);
    border-bottom:solid 1px var(--theme-color);
  }
  header.scrolled {
    transition:background-color 0.3s ease-in-out, top 0.6s ease-in-out;
    top:-150px;
  }
  header .wrapper {
    padding:10px 15px;
  }
  header .inner-wrapper {
    max-width:1240px;
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  header .logo {
    display: block;
    width:60px;
  }
  header svg {
    width: 60px;
    height: auto;
    fill: #122E49;
  }
  header ul {
    list-style: none;
    padding: 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:3rem;
    margin:0;
  }
  header ul li {
    position:relative;
    align-items:center;
    display:flex;
    color:#122E49;
    margin:0 8px;
  }
  header ul li {
    color:#122E49;
    font-size:1.1em;
  }
  header ul li a {
    color:#122E49;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  header ul li a:before {
    content: attr(title) / "";
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: bold;
}
  header ul li a:before {
    content: attr(title) / "";
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: bold;
  }
  header ul li a:hover {
    font-weight:bold;
  }
  header .mobile_menu { 
    display:none; 
    z-index:10000;
  }
  @media ( max-width: 1000px ) {
    header ul {
      flex-wrap: nowrap;
      gap: 2rem;
    }
  }
  @media ( max-width: 720px ) {
    header ul {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
  @media ( max-width: 600px ) {
    header .mobile_menu {
      display:block;
      width:30px;
      height:10px;
      position: relative;
    }
    header .mobile_menu:before,
    header .mobile_menu:after {
      display:block;
      content: ' ';
      position: relative;
      position: absolute;
      height:2px;
      width:100%;
      background-color:var(--theme-color);
      left:0;
    }
    header .mobile_menu:before { top:0; }
    header .mobile_menu:after { bottom:0; }

    header .mobile_menu.active:before {
      top:calc(50% - 1px);
      transform:rotate(45deg);
    }
    header .mobile_menu.active:after {
      bottom:calc(50% - 1px);
      transform:rotate(-45deg);
    }

    header nav {
      display:none;
    }
    header ul { 
      flex-wrap: nowrap;
    }
    header nav.active {
      display:block;
      position: relative;
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:100vh;
      background:#FFF;
    }
    header nav.active ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height:100vh;
      gap:10%;
    }
    header nav.active ul li {
      font-size:2em;
      font-weight:bold;
    }
  }
</style>