<template>
  <Wrapper>
    <!-- Section 1: Intro and Image -->
    <section
      class="grid grid-cols-12 lg:space-y-0 space-y-4 lg:mt-20 md:mt-14 mt-10"
    >
      <div
        class="lg:col-span-8 col-span-12 lg:mr-32 md:mr-12 mr-6 flex flex-col justify-end"
      >
        <h1 class="large-version md:mb-4 mb-2">
          <span class="font-normal">Hey, </span>
          <span>I'm Ken. </span>
        </h1>
        <p class="md:mb-3 mb-1 lg:text-6xl md:text-5xl text-3xl font-bold">
          A Front End Engineer.
        </p>
        <p class="md:mt-4 mt-2">
          I am a {{ myAge }} year old front end engineer who wants to help make
          the internet a more creative, accessible and better place.
        </p>
        <p class="md:mt-4 mt-2">
          I began my professional software development career in 2017 as a full
          stack PHP developer with a focus on Laravel and Vue.js. As my
          experience grew with more and more web projects, I took a more
          concentrated leap into front end development since this is where I
          gained the most joy out of my work.
        </p>
        <p class="md:mt-4 mt-2">
          I've had the opportunity to work alongside incredible software
          engineers, project managers, designers, business analysts and product
          owners. I've built, tested and launched web applications from the
          ground up with the help and collaboration of desginers and fellow
          developers. I can also get my hands dirty with Dev Ops and UI Design
          if the need arises.
        </p>
      </div>
      <div class="lg:col-span-4 col-span-12">
        <div
          class="relative cursor-pointer"
          @mouseover="toggleHeroImg"
          @mouseout="toggleHeroImg"
        >
          <img
            class="rounded shadow-2xl w-full transition-opacity duration-200"
            :class="isJumping ? 'opacity-0' : 'opacity-1'"
            src="@/assets/images/hero-1.jpg"
            alt="Man looking down on top of cliff"
          />
          <img
            class="rounded shadow-2xl w-full absolute top-0 transition-opacity duration-200"
            :class="isJumping ? 'opacity-1' : 'opacity-0'"
            src="@/assets/images/hero-2.jpg"
            alt="Man looking down on top of cliff"
          />
        </div>
      </div>
    </section>

    <!-- Section 2: Recent Work -->
    <section class="lg:my-20 md:my-16 my-10 viewport">
      <h2>Recent Work</h2>
      <div class="flex gap-x-8 md:mt-10 mt-6 work w-full cursor-pointer">
        <a href="/work/oklahoma-contemporary">
          <div class="w-80">
            <img
              src="@/assets/images/ok-contemp-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
        <a href="/work/fnb">
          <div class="w-80">
            <img
              src="@/assets/images/fnb-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
        <a href="/work/bank-of-bennington">
          <div class="w-80">
            <img
              src="@/assets/images/bob-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
        <a href="/work/madison-turf">
          <div class="w-80">
            <img
              src="@/assets/images/sod-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
        <a href="/work/moody-bank">
          <div class="w-80">
            <img
              src="@/assets/images/moody-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
        <a href="/work/virac-special">
          <div class="w-80">
            <img
              src="@/assets/images/vs-work.jpg"
              class="w-80 drop-shadow-2xl rounded transition-transform duration-500 hover:-translate-y-6 transform"
              alt=""
            />
          </div>
        </a>
      </div>
    </section>

    <!-- Section 3: My Skills -->
    <section class="lg:my-20 md:my-16 my-10">
      <h2>My Skills</h2>
      <div
        class="grid grid-cols-2 md:space-y-0 space-y-4 md:mt-10 mt-6 md:gap-x-8 gap-x-4"
      >
        <div class="md:col-span-1 col-span-2">
          <p>
            From the beginning days of when I first got into software
            development up until now, I’ve learned and gained a solid
            understanding of web development standards, the importance of
            reusability/scalability in large enterprise applications, and how
            user expereince means everything.
          </p>
          <p class="md:mt-4 mt-2">
            I believe learning and being solution-oriented should be my North
            Star when it comes to web development and troubleshooting problems.
          </p>
        </div>
        <div class="md:col-span-1 col-span-2">
          <div class="flex flex-wrap justify-center">
            <PartialsSkillTag class="mr-2 mb-4">Vue.js</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">HTML/Css</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Scss</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Sass</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Javascript</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Vuex</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Nuxt</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Typescript</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Markup</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4"
              >Javascript ES6+</PartialsSkillTag
            >
            <PartialsSkillTag class="mr-2 mb-4"
              >Agile Methodology</PartialsSkillTag
            >
            <PartialsSkillTag class="mr-2 mb-4">Tailwind CSS</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4"
              >Web Accessibility</PartialsSkillTag
            >
            <PartialsSkillTag class="mr-2 mb-4">CI/CD</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">UI Design</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Google SEO</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4"
              >Google Analytics</PartialsSkillTag
            >
            <PartialsSkillTag class="mr-2 mb-4">Figma</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Laravel</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Laravel Forge</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">jQuery</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">mySQL</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Sqlite</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Docker</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Git</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Sketch</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Trello</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">SPA</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Monday.com</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Nginx</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Webflow</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Webpack</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Jira</PartialsSkillTag>
            <PartialsSkillTag class="mr-2 mb-4">Digital Ocean</PartialsSkillTag>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
</template>
<script>
import ScrollBooster from "scrollbooster"
export default {
  data() {
    return {
      isJumping: false,
    }
  },
  computed: {
    myAge() {
      return new Date().getFullYear() - 1996;
    },
  },
  mounted() {
    new ScrollBooster({
      viewport: document.querySelector(".viewport"),
      content: document.querySelector(".work"),
      scrollMode: "transform",
      direction: "horizontal",
      emulateScroll: false,
      friction: 0.07,
    })
  },
  methods: {
    toggleHeroImg() {
      this.isJumping = !this.isJumping
    },
  },
}
</script>
