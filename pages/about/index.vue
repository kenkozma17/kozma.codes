<template>
  <Wrapper size="large-extended">
    <!-- Section 1: About and Images -->
    <section
      class="grid grid-cols-12 md:gap-x-4 gap-x-2 md:mb-20 mb-10 md:mt-14 mt-10 lg:w-about md:gap-y-4 gap-y-2"
    >
      <div class="lg:col-span-6 col-span-12">
        <div class="bg-ken-about-gray rounded-lg md:px-8 md:py-8 px-4 py-6">
          <h3 class="font-normal border-b border-ken-dark-gray md:pb-4 pb-2">
            A little bit about me.
          </h3>
          <div class="md:mt-6 mt-4">
            <TypoLabel>WHERE I'M FROM</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p class="text-ken-mid-gray">
                I was born in Jeddah, Saudi Arabia and moved to The Philippines
                when I was 5 years old in 2001. I grew up mostly surrounded by
                beaches, powerful typhoons and small motorcycles with sidecars
                called “Tricycles”. My Family embraced traveling a lot so it
                would be fair to say by 7 years old I knew how the airport
                check-in to boarding process worked and the airport essentially
                became my 2nd home.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-4">
            <TypoLabel>WHAT I USED TO DO</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p class="text-ken-mid-gray">
                I got my first job as a cashier at a hardware store when I was
                17 years old. In between ringing up items for customers, I’d be
                reading about and writing code on the same computer that was
                telling me how much change I owed each customer. After
                graduating college, I spent 1 year as kick-ass developer at the
                Provincial Capitol of Catanduanes but then had bigger fish to
                fry at liquidfish in Oklahoma City, OK.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-4">
            <TypoLabel>WHERE I'M AT NOW</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p class="text-ken-mid-gray">
                Today, I live in the Philippines but spend parts of each year in
                the United States mostly in Oklahoma City if you want to buy me
                a slice of pizza.
              </p>
            </div>
          </div>
          <div class="md:mt-6 mt-4">
            <TypoLabel>WHAT I DO NOW</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p class="text-ken-mid-gray">
                I write code as a Freelance Front End Developer most of the time
                but am up for the challenge if my Full Stack Developer skills
                are required. I am open to any type of work whether it be full
                time or contract work.
              </p>
            </div>
          </div>
          <!-- <div class="md:mt-6 mt-4">
            <TypoLabel>WHAT IS IMPORTANT TO ME</TypoLabel>
            <div class="md:mt-3 mt-2">
              <p class="text-ken-mid-gray">
                Building efficient and scalable code that translates into
                beautiful and accessible web applications.
              </p>
            </div>
          </div> -->
          <!-- <PartialsSocials class="md:mt-6 mt-4" /> -->
        </div>
      </div>
      <div class="lg:col-span-6 col-span-12 grid grid-cols-6 md:gap-4 gap-2">
        <div class="col-span-3">
          <img src="@/assets/images/love-1.jpg" class="rounded-lg" alt="" />
        </div>
        <div class="col-span-3">
          <img src="@/assets/images/random-1.jpg" class="rounded-lg" alt="" />
        </div>
        <div class="col-span-3">
          <img
            src="@/assets/images/photography-1.jpg"
            class="rounded-lg"
            alt=""
          />
        </div>
        <div class="col-span-3">
          <img src="@/assets/images/hobby-1.jpg" class="rounded-lg" alt="" />
        </div>
        <div class="col-span-6">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3Rg5r1w6B7ZXEhd5elZ7Np?utm_source=generator"
            width="100%"
            height="320"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </Wrapper>
</template>
<script setup>
useHead({
  title: "Ken Kozma | About",
})
</script>
