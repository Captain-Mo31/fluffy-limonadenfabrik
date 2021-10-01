<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Navbar />
<div class="text-center font-serif items-center w-full prose overflow-hidden w-2/3">
  <main class="items-center">
    <slot />
  </main>
</div>
<Footer />
