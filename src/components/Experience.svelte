<script>
    import data from "../data/experience.json";
    let experience = data.experience;
    let education = data.education;
</script>

<h3 class="font-semibold text-lg">Experience</h3>
<ol class="relative border-l border-stone-800 dark:border-stone-800 border-opacity-40 my-2 mx-4">
{#each experience as item}
    <li class="mb-5 ml-4">
    <div class="absolute w-2 h-2 bg-stone-800 rounded-full border border-stone-800 dark:border-stone-800 mt-1.5" style="left:-4.5px"></div>
    <div class="my-0.5 text-xs">{item.dateStart} - {item.dateEnd}</div>
    <h3 class="font-semibold">{item.title}</h3>
    <div class="mb-4 font-normal">{item.company}</div>
    </li>
{/each}
</ol>

<h3 class="font-semibold text-lg">Education</h3>
<ol class="relative border-l border-stone-800 dark:border-stone-800 border-opacity-40 my-2 mx-4">
{#each education as item}
    <li class="mb-5 ml-4">
    <div class="absolute w-2 h-2 bg-stone-800 rounded-full border border-stone-800 dark:border-stone-800 mt-1.5" style="left:-4.5px"></div>
    <div class="my-0.5 text-xs">{item.dateStart} - {item.dateEnd}</div>
    <h3 class="font-semibold">{item.degree}</h3>
    <div class="mb-4 font-normal">{item.institution}</div>
    </li>
{/each}
</ol>