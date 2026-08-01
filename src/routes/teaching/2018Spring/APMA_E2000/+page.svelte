<script>
  import CourseArchive from '$lib/CourseArchive.svelte';
  const links = Array.from({ length: 13 }, (_, index) => ({
    label: `Homework ${index + 1}`,
    meta: 'Assignment',
    href: `/teaching/2018Spring/APMA_E2000/Homework${index + 1}.html`
  }));
</script>

<CourseArchive term="Spring 2018" description="Assignments, notebooks, and supporting materials from the Spring 2018 course." {links} />
