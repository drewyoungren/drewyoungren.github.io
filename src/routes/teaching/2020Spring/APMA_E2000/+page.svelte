<script>
  import CourseArchive from '$lib/CourseArchive.svelte';
  const links = [
    { label: 'Function visualizer', meta: 'Interactive example', href: '/teaching/2020Spring/APMA_E2000/fxy.html' },
    { label: 'Homework 3 figure', meta: 'Interactive example', href: '/teaching/2020Spring/APMA_E2000/hw03-1img.html' }
  ];
</script>

<CourseArchive term="Spring 2020" description="Selected interactive examples and materials from the Spring 2020 course." {links} />
