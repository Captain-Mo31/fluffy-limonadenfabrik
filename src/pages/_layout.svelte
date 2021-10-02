<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<body class="bg-gray-100 w-full h-full dark:bg-gray-700">
  <Navbar />
  <div class=" overflow-hidden font-serif w-full grid justify-items-center">
    <main class="w-2/3 prose">
      <slot />
    </main>
  </div>
  <Footer />
</body>
