<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Cokies from "../components/Cokies.svelte";
</script>

<body class="bg-gray-50 w-full h-auto dark:bg-gray-900  ">
  <Navbar />
  <div
    class=" overflow-hidden font-serif w-full grid justify-items-center dark:text-white"
  >
    <main class="w-11/12 prose md:w-3/4">
      <slot />
    </main>
  </div>
  <!--<Cokies />-->
  <Footer />
</body>
