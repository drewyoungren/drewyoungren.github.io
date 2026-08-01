<script>
  let { term, title = 'Multivariable Calculus for Engineers and Applied Scientists', description, links = [] } = $props();
</script>

<svelte:head><title>{title} — {term}</title></svelte:head>

<section class="course-archive-page">
  <a class="back-link" href="/teaching/">← Teaching</a>
  <p class="eyebrow"><span></span> {term} · APMA E2000</p>
  <h1>{title}</h1>
  <p class="lede">{description}</p>
  {#if links.length}
    <div class="resource-list">
      {#each links as link}
        <a href={link.href}><span>{link.label}</span><small>{link.meta}</small><b>↗</b></a>
      {/each}
    </div>
  {:else}
    <div class="archive-message"><strong>Course archive</strong><p>This page preserves the original course address. Selected materials from this term will be reorganized here over time.</p></div>
  {/if}
</section>
