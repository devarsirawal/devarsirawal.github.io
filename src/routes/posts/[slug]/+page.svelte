<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<!-- SEO -->
<!-- <svelte:head> -->
<!--   <title>{data.meta.title}</title> -->
<!--   <meta property="og:type" content="article" /> -->
<!--   <meta property="og:title" content={data.meta.title} /> -->
<!-- </svelte:head> -->

<article>
  <!-- Title -->
  <!-- <hgroup> -->
  <!--   <h1>{data.meta.title}</h1> -->
  <!--   <p>Published at {formatDate(data.meta.date)}</p> -->
  <!-- </hgroup> -->

  <!-- Tags -->
  <!-- <div> -->
  <!--   {#each data.meta.categories as category} -->
  <!--     <span>&num;{category}</span> -->
  <!--   {/each} -->
  <!-- </div> -->

  <!-- Post -->
  <div>
    <svelte:component this={data.content} />
  </div>
</article>
