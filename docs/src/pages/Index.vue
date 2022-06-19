<template>
  <Layout>
    <div class="pt-8 md:pt-15">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="160" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            SmartHub
          </h2>
        </div>
        <h1 class="text-3xl text-center lg:text-3xl">
          📄 This is the official SmartHub documentation. 
        </h1>

        <div class="py-8">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo">Here will be an awesome starter code 🔥</code>
        </div>

        <div class="flex justify-center mt-7 mb-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-150 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>
<!-- 
        <p class="mt-8 text-center">
          Open Source. MIT License. <span class="border-b border-dashed border-ui-primary text-ui-primary">Make it your own</span>.
        </p> -->

      </div>

      <div class="pt-4 mx-auto mt-4 mb-4 border-t md:mt-4 md:mb-4 md:pt-4 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Incredibly Fast
          </h3>
          <p class="text-lg text-left">
            Powered by Gridsome. Built on Vue. Outputs static files. It wont't get any faster than this. <span class="border-b border-dashed border-ui-primary text-ui-primary">No seriously</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Instant Search
          </h3>
          <p class="text-lg text-left">
            All headlines are indexed. Instant search powered by Fuse.js. Find what you are looking for in the <span class="border-b border-dashed border-ui-primary text-ui-primary">blink of an eye</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Lights out
          </h3>
          <p class="text-lg text-left">
            Working late at night again? Enable dark mode with the click of a button.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'SmartHub ';
    const description = 'SmartHub is a small fast and reliable home server to manage your devices';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        }
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
