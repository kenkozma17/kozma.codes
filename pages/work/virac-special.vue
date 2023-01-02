<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>Virac Special</h1>
      </div>
      <!-- Section 1: Description and roles -->
      <div class="grid grid-cols-12 md:pt-6 pt-4 md:gap-x-4">
        <div
          class="md:col-span-4 md:order-first order-last col-span-12 grid grid-cols-9 md:space-y-6 md:mt-0 mt-4 md:space-x-0 space-x-4"
        >
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>My Role</TypoLabel>
            <div class="mt-3">
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Tech I Used</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>Vue.js</p>
              <p>Laravel</p>
              <p>Scss</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Timeline</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>April 2020</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div>
            <TypoLabel>Description</TypoLabel>
            <div class="mt-3">
              <p>
                A website built to market my Mother’s quarterly publication
                called Virac Special which aims to promote local businesses
                around the small town of Virac, Catanduanes in The Philippines.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-3">
            <TypoLabel>Context</TypoLabel>
            <div class="mt-3">
              <p>
                I spent part of my evenings after my full-time work at
                liquidfish to spearhead the development of the website for the
                Virac Special publication. This one page website includes a list
                of links to the series of publications, an array of beautiful
                photos and a blog about Virac.
              </p>
            </div>
          </div>
          <div
            class="md:mt-6 mt-3 md:grid hidden grid-cols-2 text-right space-x-4"
          >
            <!-- <a
              href="#"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Read Case Study</a
            > -->
            <a
              href="https://viracspecial.com"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://viracspecial.com"
        class="mt-4 w-full md:text-base text-sm block md:hidden border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
        >Website</a
      >
    </Wrapper>
    <Wrapper class="md:mt-12 mt-6">
      <!-- Section 2: Images -->
      <div class="grid grid-cols-12 md:gap-4 gap-1.5">
        <div class="col-span-12 bg-ken-light-gray md:p-4 p-1 rounded">
          <img src="@/assets/images/vs/ss-2.jpg" class="rounded" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/vs/ss-1.jpg" class="rounded" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/vs/ss-3.jpg" class="rounded" alt="" />
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<script setup>
useHead({
  title: "Ken Kozma | Virac Special Website",
})
</script>
