<script>
  import { page } from '$app/state';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/teaching/', label: 'Teaching' },
    { href: '/projects/', label: 'Projects' },
    { href: '/about/', label: 'About' }
  ];

  let menuOpen = false;
</script>

<header class="site-header">
  <a class="wordmark" href="/" aria-label="Drew Youngren, home">
    <span class="mark">DY</span>
    <span>Drew Youngren</span>
  </a>
  <button class="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
    <span></span><span></span>
  </button>
  <nav class:open={menuOpen} aria-label="Main navigation">
    {#each links as link}
      <a href={link.href} class:active={link.href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(link.href)} onclick={() => (menuOpen = false)}>{link.label}</a>
    {/each}
    <a class="nav-cta" href="/assets/docs/cv-us.pdf">CV <span aria-hidden="true">↗</span></a>
  </nav>
</header>
