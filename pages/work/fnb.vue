<template>
  <section class="md:mb-20 mb-10 md:mt-14 mt-10">
    <Wrapper size="large">
      <div class="border-b border-ken-dark-gray md:pb-2">
        <h1>First National Bank</h1>
        <p>USDA Loan Mapping Web Application</p>
      </div>
      <!-- Section 1: Description and roles -->
      <div class="grid grid-cols-12 md:pt-6 pt-4 md:gap-x-4">
        <div
          class="md:col-span-4 md:order-first order-last col-span-12 grid grid-cols-9 md:space-y-6 md:mt-0 mt-4 md:space-x-0 space-x-4"
        >
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>My Role</TypoLabel>
            <div class="mt-3">
              <p>Front End Developer</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Tech I Used</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>Vue 3</p>
              <p>Tailwind CSS</p>
              <p>Axios</p>
              <p>Google Maps API</p>
              <p>ArcGIS Maps</p>
              <p>ESRI Loader</p>
            </div>
          </div>
          <div class="md:col-span-9 col-span-3">
            <TypoLabel>Timeline</TypoLabel>
            <div class="mt-3 flex flex-col md:space-y-1.5 space-y-1">
              <p>July 2022</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div class="md:mt-6 mt-3">
            <TypoLabel>Description</TypoLabel>
            <div class="mt-3">
              <p>
                An income and property eligibility map tool used to evaluate the
                likelihood that a potential applicant would be eligible for
                program assistance from the USDA.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-3">
            <TypoLabel>Context</TypoLabel>
            <div class="mt-3">
              <p>
                I built an embeddable map tool that helps potential applicants
                determine USDA loan eligibility on an interactive map of the
                United States. It uses the ArcGIS mapping library and a USDA API
                to display ineligible areas by default on the map and determine
                if an address is eligible for assistance.
              </p>
            </div>
          </div>
          <div
            class="md:mt-6 mt-3 md:grid hidden grid-cols-2 text-right space-x-4"
          >
            <a
              target="_blank"
              href="https://fnb-usda-map.liquidfish.com/"
              class="border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
              >Website</a
            >
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://fnb-usda-map.liquidfish.com/"
        class="mt-4 w-full md:text-base text-sm block md:hidden border-2 border-ken-dark-gray font-medium md:px-10 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-black text-center"
        >Website</a
      >
    </Wrapper>
    <Wrapper class="md:mt-12 mt-6">
      <!-- Section 2: Images -->
      <div class="grid grid-cols-12 md:gap-4 gap-1.5">
        <div class="col-span-12 bg-ken-light-gray md:p-4 p-1 rounded">
          <img src="@/assets/images/fnb/ss-2.jpg" class="rounded-xl" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/fnb/ss-3.jpg" class="rounded" alt="" />
        </div>
        <div
          class="md:col-span-6 col-span-12 bg-ken-light-gray md:p-4 p-1 rounded"
        >
          <img src="@/assets/images/fnb/ss-1.jpg" class="rounded" alt="" />
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<script setup>
useHead({
  title: "Ken Kozma | First National Bank Website",
})
</script>
