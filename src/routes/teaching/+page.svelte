<script>
  const courses = [
    { term: 'Spring 2020', code: 'APMA E2000', title: 'Multivariable Calculus for Engineers and Applied Scientists', href: '/teaching/2020Spring/APMA_E2000/' },
    { term: 'Fall 2019', code: 'APMA E2000', title: 'Multivariable Calculus for Engineers and Applied Scientists', href: '/teaching/2019Fall/' },
    { term: 'Spring 2018', code: 'APMA E2000', title: 'Multivariable Calculus for Engineers and Applied Scientists', href: '/teaching/2018Spring/APMA_E2000/' }
  ];
</script>

<svelte:head><title>Teaching — Drew Youngren</title><meta name="description" content="Courses, resources, and teaching materials by Drew Youngren." /></svelte:head>

<section class="page-intro teaching-intro">
  <p class="eyebrow"><span></span> Teaching</p>
  <h1>Courses and teaching <em>materials.</em></h1>
  <p class="lede">Course pages, assignments, computational examples, and other resources for applied mathematics.</p>
</section>

<section class="teaching-current">
  <div class="section-label">Materials</div>
  <div class="approach-copy"><h2>Applied mathematics resources.</h2><p>The archive includes course notes, assignments, worked examples, graphs, and computational demonstrations.</p></div>
  <div class="principles">
    <div><span>01</span><p>Course notes and assignments</p></div>
    <div><span>02</span><p>Computational examples</p></div>
    <div><span>03</span><p>Graphs and visualizations</p></div>
  </div>
</section>

<section class="archive-section">
  <div class="section-heading row">
    <div><p class="eyebrow">Selected archive</p><h2>Past courses & materials</h2></div>
    <p class="archive-note">Older materials remain available at their original addresses.</p>
  </div>
  <div class="course-list">
    {#each courses as course}
      <a class="course-row" href={course.href}>
        <span class="course-term">{course.term}</span>
        <span class="course-main"><strong>{course.title}</strong><small>{course.code}</small></span>
        <span class="course-arrow" aria-hidden="true">↗</span>
      </a>
    {/each}
  </div>
</section>
