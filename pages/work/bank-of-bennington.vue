<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>The Bank of Bennington</h1>
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
              <p>Vuex</p>
              <p>Laravel</p>
              <p>Larafish</p>
              <p>Medium Editor</p>
              <p>Tailwind CSS</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Timeline</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>July 2021</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div>
            <TypoLabel>Description</TypoLabel>
            <div class="mt-3">
              <p>
                A CMS-driven bank website built using Larafish 3 on top of
                Laravel and Vue.js.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-3">
            <TypoLabel>Context</TypoLabel>
            <div class="mt-3">
              <p>
                The client had an existing bank website built with Wordpress and
                was looking to migrate off the platform. This was another solo
                web project I worked on using Laravel, Vue and Tailwind CSS and
                BankOnIt for secure server deployments. This website was built
                to be ADA Compliant, SEO-friendly and almost every component
                editable by the web admin.
              </p>
            </div>
          </div>
          <div
            class="md:mt-6 mt-3 md:grid hidden grid-cols-2 text-right space-x-4"
          >
            <a
              target="_blank"
              href="https://thebankofbenngington.com"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://thebankofbenngington.com"
        class="mt-4 w-full md:text-base text-sm block md:hidden border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
        >Website</a
      >
    </Wrapper>
    <Wrapper class="md:mt-12 mt-6">
      <!-- Section 2: Images -->
      <div class="grid grid-cols-12 md:gap-4 gap-1.5">
        <div class="col-span-12 bg-ken-light-gray md:p-4 p-1 rounded">
          <img src="@/assets/images/bob/ss-1.jpg" class="rounded-xl" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/bob/ss-3.jpg" class="rounded" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/bob/ss-2.jpg" class="rounded" alt="" />
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<script setup>
useHead({
  title: "Ken Kozma | Bank of Bennington Website",
})
</script>
