<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>Madison Turf Farms</h1>
        <p>SOD Calulcator Web Application</p>
      </div>
      <!-- Section 1: Description and roles -->
      <div class="grid grid-cols-12 md:pt-6 pt-4 md:gap-x-4">
        <div
          class="md:col-span-4 md:order-first order-last col-span-12 grid grid-cols-9 md:space-y-6 md:mt-0 mt-4 md:space-x-0 space-x-4"
        >
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>My Role</TypoLabel>
            <div class="md:mt-3">
              <p>Front End Developer</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Tech I Used</TypoLabel>
            <div class="md:mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>Vue 3</p>
              <p>Tailwind CSS</p>
              <p>Google Maps API</p>
              <p>Vuex</p>
              <p>Axios</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Timeline</TypoLabel>
            <div class="md:mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>March 2022</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div>
            <TypoLabel>Description</TypoLabel>
            <div class="md:mt-3">
              <p>
                An embeddable SOD calculator used to calculate the square
                footage of a piece of land to determine how much SOD customers
                needed to purchase.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-3">
            <TypoLabel>Context</TypoLabel>
            <div class="md:mt-3">
              <p>
                This project was built using Vue 3 and was intended to be an
                embedded calculator on https://www.madisonturffarms.com/. It
                allows the user to select multiple areas on a selected location
                and calculate the total area of the selected areas sum up to.
              </p>
            </div>
          </div>
          <!-- <div class="md:mt-6 mt-3 grid grid-cols-2 text-right space-x-4">
            <a
              target="_blank"
              href="https://sod-calculator.liquidfish.com/"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div> -->
        </div>
      </div>
    </Wrapper>
    <Wrapper class="md:mt-12 mt-6">
      <!-- Section 2: Images -->
      <div class="grid grid-cols-12 md:gap-4 gap-1.5">
        <div class="col-span-12 bg-ken-light-gray md:p-4 p-1 rounded">
          <img src="@/assets/images/turf/ss-1.jpg" class="rounded" alt="" />
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<script setup>
useHead({
  title: "Ken Kozma | Madison Turf Website",
})
</script>
