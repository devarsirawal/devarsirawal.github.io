<script>
  import headshot from '$lib/assets/headshot.webp';
  import Experience from '../components/Experience.svelte';
</script>

<div class="flex flex-col items-center flex-grow gap-10 pt-8 pb-16 px-4 md:px-0">
  <img
    src={headshot}
    alt="Headshot of Devarsi Rawal"
    class="border border-slate-500 rounded-full aspect-square object-cover"
    width="128"
  />
  <p class="text-center">
    Hi, I'm Devarsi! I'm a software engineer working on autonomous off-road vehicles at Overland AI in Seattle.
  </p>
  <p class="text-center">Welcome to my little corner of the internet!</p>

  <div class="">
    <!-- <h2 class="font-semibold text-xl pb-4">My Journey So Far</h2> -->
    <div class="ml-4">
      <Experience />
    </div>
  </div>
</div>
