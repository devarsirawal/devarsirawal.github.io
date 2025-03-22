<script lang="ts">
  import '../app.css';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import * as config from '$lib/config';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<Header />
<main class="flex flex-col flex-grow w-full mx-auto max-w-3xl px-2">
  <slot />
</main>
<Footer />
