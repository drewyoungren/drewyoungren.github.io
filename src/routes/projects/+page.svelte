<script>
  const projects = [
    { type: 'Interactive resource', title: 'Multivariable calculus slides', description: 'A visual collection of course slides and examples for exploring calculus in several variables.', href: '/mvc-slides/', status: 'Teaching tool' },
    { type: 'Teaching experiment', title: 'Projection visualizer', description: 'A small geometric demonstration from the teaching archive, preserved as a standalone resource.', href: '/teaching/misc/proj.html', status: 'Interactive' }
  ];
</script>

<svelte:head><title>Projects — Drew Youngren</title><meta name="description" content="Mathematical tools, visualizations, and teaching experiments by Drew Youngren." /></svelte:head>

<section class="page-intro projects-intro">
  <p class="eyebrow"><span></span> Projects & resources</p>
  <h1>Projects and <em>resources.</em></h1>
  <p class="lede">Mathematical visualizations, interactive demonstrations, course materials, and other small projects.</p>
</section>

<section class="project-grid">
  {#each projects as project, i}
    <a class="project-card" href={project.href}>
      <div class="project-visual visual-{i + 1}" aria-hidden="true">
        {#if i === 0}<div class="surface-lines"></div>{:else}<div class="projection-shape"><span></span></div>{/if}
      </div>
      <div class="project-copy">
        <div class="project-meta"><span>{project.type}</span><small>{project.status}</small></div>
        <h2>{project.title}</h2><p>{project.description}</p><span class="project-link">Open project ↗</span>
      </div>
    </a>
  {/each}
  <article class="project-card coming-soon">
    <div><p class="eyebrow">Additional materials</p><h2>More projects will be added here.</h2><p>This section will include new classroom tools, notes, and mathematical visualizations.</p></div>
    <span class="plus">+</span>
  </article>
</section>
