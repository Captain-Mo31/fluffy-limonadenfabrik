<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Navbar />
<div
  class=" overflow-hidden object-center  font-serif w-full grid justify-items-center"
>
  <main class=" object-center w-2/3 prose">
    <slot />
  </main>
</div>
<Footer />
