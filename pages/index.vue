<template>
  <Wrapper>
    <!-- Section 1: Intro and Image -->
    <section class="grid grid-cols-12 lg:mt-20 md:mt-14 mt-10">
      <div class="col-span-7 lg:mr-20 md:mr-16 mr-6 flex flex-col justify-end">
        <h1 class="md:leading-tight big">
          <span class="font-normal">Hey,</span> I'm Ken. <br />Front End
          Engineer
          <span class="font-normal">and coffee lover.</span>
        </h1>
        <p class="md:leading-8 leading-7 md:mt-4 mt-2">
          TL;DR I love Jesus, my family, coding, coffee, fitness, and all things
          Harry Potter. I’m a self-taught Software Engineer and made the
          transition from my previous career to tech in 2017. I’ve had the
          pleasure of working alongside some incredible engineers, designers,
          business analysts, and product owners. I’m passionate about code
          standards, ECMAScript, and reactive Javascript frameworks (Vue.js is
          my jam).
        </p>
      </div>
      <div class="col-span-5">
        <div
          class="relative cursor-pointer"
          @mouseover="toggleHeroImg"
          @mouseout="toggleHeroImg"
        >
          <img
            class="rounded shadow-2xl transition-opacity duration-200"
            :class="isJumping ? 'opacity-0' : 'opacity-1'"
            src="@/assets/images/hero-1.jpg"
            alt="Man looking down on top of cliff"
          />
          <img
            class="rounded shadow-2xl absolute top-0 transition-opacity duration-200"
            :class="isJumping ? 'opacity-1' : 'opacity-0'"
            src="@/assets/images/hero-2.jpg"
            alt="Man looking down on top of cliff"
          />
        </div>
      </div>
    </section>

    <!-- Section 2: Recent Work -->
    <section class="lg:my-20 md:my-16 my-10">
      <h2>Recent Work</h2>
    </section>

    <!-- Section 3: My Skills -->
    <section class="lg:my-20 md:my-16 my-10">
      <h2>My Skills</h2>
      <div class="grid grid-cols-2 md:mt-10 mt-6 md:gap-x-8 gap-x-4">
        <div class="col-span-1">
          <p class="md:leading-8 leading-7">
            From the beginning days of when I first got into software
            development up until now, I’ve learned and gained a solid
            understanding of web development standards, the importance of
            reusability/scalability in large enterprise applications, and how
            user expereince means everything.
          </p>
        </div>
        <div class="col-span-1">
          <div>
            <TypoLabel> Front End </TypoLabel>
            <div class="md:mt-6 mt-4 flex flex-wrap">
              <PartialsSkillTag class="mr-4 mb-4">Vue.js</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Css</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Scss</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Sass</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Javascript</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Vuex</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Nuxt</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Typescript</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Tailwind</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">UI Design</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Figma</PartialsSkillTag>
            </div>
          </div>
          <div class="md:mt-10 mt-4">
            <TypoLabel>Back End</TypoLabel>
            <div class="md:mt-6 mt-4 flex flex-wrap">
              <PartialsSkillTag class="mr-4 mb-4">PHP</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Laravel</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">MySQL</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Sass</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Javascript</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Vuex</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Nuxt</PartialsSkillTag>
              <PartialsSkillTag class="mr-4 mb-4">Typescript</PartialsSkillTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
</template>
<script>
export default {
  data() {
    return {
      isJumping: false,
    };
  },
  methods: {
    toggleHeroImg() {
      this.isJumping = !this.isJumping;
    },
  },
};
</script>
