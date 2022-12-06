<template>
  <Layout>
    <Logo :color="bgColor" />
    <div class="links">
      <a class="link" target="_blank" v-for="link in links" :href="link.url">{{
        link.title
      }}</a>
    </div>
  </Layout>
</template>

<script>
import Logo from "../components/Logo.vue";

const bgColor = "#fbfaf5"; // https://www.colordic.org/colorsample/2283

const links = [
  { title: "YouTube", url: "https://www.youtube.com/@_n0ph" },
  { title: "ニコニコ動画", url: "https://www.nicovideo.jp/user/32806540" },
  { title: "Twitter", url: "https://www.twitter.com/_n0ph" },
];

export default {
  components: { Logo },
  data: () => ({
    bgColor,
    links,
  }),
  metaInfo: {
    titleTemplate: "n0ph.com",
    bodyAttrs: {
      style: `background-color: ${bgColor};`,
    },
  },
};
</script>

<style>
.links {
  margin: 100px auto;
}
.link {
  display: block;
  margin: 40px auto;
  text-align: center;
}
</style>
