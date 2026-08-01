<script>
  import '../styles.css';
  import SiteHeader from '$lib/SiteHeader.svelte';
  import SiteFooter from '$lib/SiteFooter.svelte';
  let { children } = $props();
</script>

<svelte:head>
  <title>Drew Youngren — Mathematics & Teaching</title>
  <meta name="description" content="Drew Youngren is a Senior Lecturer in the Discipline of Applied Mathematics at Columbia University." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Drew Youngren" />
  <meta property="og:title" content="Drew Youngren — Mathematics & Teaching" />
  <meta property="og:description" content="Senior Lecturer in the Discipline of Applied Mathematics at Columbia University." />
  <meta property="og:image" content="https://drew.youngren.nyc/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Drew Youngren — Mathematics & Teaching" />
  <meta name="twitter:description" content="Senior Lecturer in the Discipline of Applied Mathematics at Columbia University." />
  <meta name="twitter:image" content="https://drew.youngren.nyc/og.png" />
</svelte:head>

<div class="site-shell">
  <SiteHeader />
  <main>{@render children()}</main>
  <SiteFooter />
</div>
