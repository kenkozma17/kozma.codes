<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>Oklahoma Contemporary</h1>
        <p>Museum Reservation Web Application</p>
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
              <p>Lodash</p>
              <p>Laravel</p>
              <p>Medium Editor</p>
              <p>Scss</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Timeline</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>June - August 2020</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div>
            <TypoLabel>Description</TypoLabel>
            <div class="mt-3">
              <p>
                A reservation web application for booking tickets online to the
                Oklahoma Contemporary Museum.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-4">
            <TypoLabel>Context</TypoLabel>
            <div class="mt-3">
              <p>
                I was working full-time at liquidfish during the timeline of
                this project. This project was brought to me and expected to be
                built and launched on my own using Larafish, a custom in-house
                CMS used at liquidfish. The client wanted a way for their
                customers to be able to reserve tickets to their musuem exhibits
                and be able to manage things like recurring shows and slot
                availablity.
              </p>
            </div>
          </div>
          <div
            class="md:mt-6 mt-4 md:grid hidden grid-cols-2 text-right space-x-4"
          >
            <!-- <a
              href="#"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Read Case Study</a
            > -->
            <a
              target="_blank"
              href="https://reservations.okcontemp.org/events"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://reservations.okcontemp.org/events"
        class="mt-4 w-full md:text-base text-sm block md:hidden border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
        >Website</a
      >
    </Wrapper>
    <Wrapper class="md:mt-12 mt-6">
      <!-- Section 2: Images -->
      <div class="grid grid-cols-12 md:gap-4 gap-1.5">
        <div class="col-span-12 bg-ken-light-gray md:p-4 p-1 rounded">
          <img
            src="@/assets/images/ok-contemp/ss-1.jpg"
            class="rounded-xl"
            alt=""
          />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img
            src="@/assets/images/ok-contemp/ss-3.jpg"
            class="rounded"
            alt=""
          />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img
            src="@/assets/images/ok-contemp/ss-2.jpg"
            class="rounded"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
    <!-- <Wrapper
      size="large"
      class="flex flex-col md:space-y-12 space-y-6 md:mt-12 mt-6"
    >
      <div>
        <h3 class="md:mb-6 mb-3">Challenge</h3>
        <p>
          This was my full-time gig since Fall of 2018 and man was it an
          exciting journey. When I first started, the e-commerce application was
          a ~15 year old frankenstein legacy system that desparately needed some
          updating. After I started, we built a new web application using modern
          technologies in a rather unqiue way. CPAP.com has been in business for
          close to 20 years. When I first came on, the e-commerce-application we
          worked on was a monolithic application that housed both the frontend
          and and the backend.
        </p>
      </div>
      <div>
        <h3 class="md:mb-6 mb-3">Research</h3>
        <p>
          This was my full-time gig since Fall of 2018 and man was it an
          exciting journey. When I first started, the e-commerce application was
          a ~15 year old frankenstein legacy system that desparately needed some
          updating. After I started, we built a new web application using modern
          technologies in a rather unqiue way. CPAP.com has been in business for
          close to 20 years. When I first came on, the e-commerce-application we
          worked on was a monolithic application that housed both the frontend
          and and the backend.
        </p>
      </div>
      <div>
        <h3 class="md:mb-6 mb-3">Final Deliverable</h3>
        <p>
          This was my full-time gig since Fall of 2018 and man was it an
          exciting journey. When I first started, the e-commerce application was
          a ~15 year old frankenstein legacy system that desparately needed some
          updating. After I started, we built a new web application using modern
          technologies in a rather unqiue way. CPAP.com has been in business for
          close to 20 years. When I first came on, the e-commerce-application we
          worked on was a monolithic application that housed both the frontend
          and and the backend.
        </p>
      </div>
      <div>
        <h3 class="md:mb-6 mb-3">Takeaway and Reflection</h3>
        <p>
          This was my full-time gig since Fall of 2018 and man was it an
          exciting journey. When I first started, the e-commerce application was
          a ~15 year old frankenstein legacy system that desparately needed some
          updating. After I started, we built a new web application using modern
          technologies in a rather unqiue way. CPAP.com has been in business for
          close to 20 years. When I first came on, the e-commerce-application we
          worked on was a monolithic application that housed both the frontend
          and and the backend.
        </p>
      </div>
    </Wrapper> -->
  </section>
</template>
<script setup>
useHead({
  title: "Ken Kozma | Oklahoma Contemporary Website",
})
</script>
