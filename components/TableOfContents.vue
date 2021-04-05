<template>
  <ul>
    <li
      v-for="link of article.toc"
      :key="link.id"
      :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return {
      article,
    };
  },
};
</script>