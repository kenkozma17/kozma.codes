<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>Madison Turf Farms</h1>
        <p>SOD Calulcator Web Application</p>
      </div>
      <!-- Section 1: Description and roles -->
      <div class="grid grid-cols-12 md:pt-6 pt-4">
        <div class="col-span-4 flex flex-col md:space-y-6 space-y-4">
          <div>
            <TypoLabel>My Role</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p>Front End Developer</p>
            </div>
          </div>
          <div>
            <TypoLabel>Tech I Used</TypoLabel>
            <div class="md:mt-3 mt-2 flex flex-col md:space-y-1.5 space-y-1">
              <p>Vue.js</p>
              <p>Vuex</p>
              <p>Lodash</p>
              <p>Laravel</p>
              <p>Medium Editor</p>
              <p>Scss</p>
            </div>
          </div>
          <div>
            <TypoLabel>Timeline</TypoLabel>
            <div class="md:mt-3 mt-2 flex flex-col md:space-y-1.5 space-y-1">
              <p>June - August 2020</p>
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <TypoLabel>Description</TypoLabel>
          <div class="md:mt-3 mt-2">
            <p>
              This was my full-time gig since Fall of 2018 and man was it an
              exciting journey. When I first started, the e-commerce application
              was a ~15 year old frankenstein legacy system that desparately
              needed some updating. After I started, we built a new web
              application using modern technologies in a rather unqiue way.
              CPAP.com has been in business for close to 20 years. When I first
              came on, the e-commerce-application we worked on was a monolithic
              application that housed both the frontend and the backend.
            </p>
          </div>
          <div class="md:mt-6 mt-3 grid grid-cols-2 text-right space-x-4">
            <a
              href="#"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Read Case Study</a
            >
            <a
              href="#"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
</template>
