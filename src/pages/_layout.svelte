<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Cokies from "../components/Cokies.svelte";
</script>

<body class="bg-gray-50 w-full h-auto dark:bg-gray-900   ">
  <Navbar />
  <div
    class=" overflow-hidden w-screen grid justify-items-center dark:text-white font-montserat"
  >
    <main class="w-11/12  md:w-6/12 ">
      <slot />
    </main>
  </div>
  <Cokies />
  <Footer />
</body>
