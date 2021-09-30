<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Navbar />
<div class="text-center font-serif items-center w-full prose ">
  <main class="w-screen">
    <slot />
  </main>
</div>
<Footer />
