<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="author" content="Moritz Kelle" />
<meta name="description" content="Fluffy Limonadenfabrik website" />
<meta name="theme-color" content="yellow-400 " />
<body class="bg-gray-50 w-full h-auto dark:bg-gray-700  ">
  
  <Navbar />
  <div
    class=" overflow-hidden font-serif w-full grid justify-items-center dark:text-white"
  >
    <main class="w-2/3 prose md:w-11/12">
      <slot />
    </main>
  </div>
  <Footer />
</body>
