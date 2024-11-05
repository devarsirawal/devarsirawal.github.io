<script lang="ts">
  import { formatDate } from '$lib/utils';
  export let data;
</script>

<p>Posts:</p>
<p>Under construction</p>
<section>
  <ul>
    {#each data.posts as post}
      <li class="post">
        <a href="posts/{post.slug}">{post.title}</a>
        <p>{formatDate(post.date)}</p>
        <p>{post.description}</p>
      </li>
    {/each}
  </ul>
</section>
