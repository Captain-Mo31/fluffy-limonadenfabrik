<script>
  import Logo from "./Logo.svelte";

  const items = [
    { url: "/", name: "Home" },
    { url: "/about", name: "Über uns" },
    { url: "/shop", name: "Shop" },
    { url: "/rezepte", name: "Rezepte" },
    { url: "/partner", name: "Partner" },
  ];
  let showMenu = false;
</script>

<nav
  class=" bg-yellow-400 dark:bg-yellow-700 shadow mb-10 font-serif text-white"
>
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex items-center justify-between h-24">
      <div class="w-full justify-between flex items-center">
        <a href="/" class="h-16 w-16 items-start m-2" alt="Icon Lemonade">
          <Logo />
        </a>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              class="text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              href="/"
            >
              Home
            </a>
            <a
              class=" dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              href="/about"
            >
              Über uns
            </a>
            <a
              class="text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              href="/shop"
            >
              Shop
            </a>
            <a
              class="text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              href="/rezepte"
            >
              Rezepte
            </a>
            <a
              class="text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              href="/partner"
            >
              Partner
            </a>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="ml-4 flex items-center md:ml-6" />
      </div>
      <div class="-mr-2 flex md:hidden">
        <button
          class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          aria-label="show menu"
          on:click={() => {
            showMenu = true;
          }}
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="h-8 w-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!--Mobile nav-->

  <div class:hidden={!showMenu}>
    <div
      class="absolute inset-x-0 top-0 z-40 p-2 transition origin-top-right transform lg:hidden"
    >
      <div
        class="overflow-hidden rounded-lg shadow-md bg-yellow-400dark:bg-bluegray-800"
      >
        <div class="px-3 pt-4">
          <div class="-mr-2  ">
            <button
              type="button"
              on:click={() => (showMenu = false)}
              aria-label="Toggle mobile menu"
              class="inline-flex items-center justify-center p-2 text-red-500 rounded-md dark:hover:bg-bluegray-700 hover:text-red-600 hover:bg-blue-100 focus:outline-none"
            >
              <span class="sr-only">Close main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 md:w-7 md:h-7"
                width="24"
                height="24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                ><path d="M0 0h24v24H0z" stroke="none" /><path
                  d="M18 6 6 18M6 6l12 12"
                /></svg
              >
            </button>
          </div>
        </div>
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div
            class="px-4 pt-2 pb-3 space-y-2 md:px-8 bg-yellow-400"
            role="none"
          >
            {#each items as item}
              <a
                rel="prefetch"
                href={item.url}
                on:click={() => (showMenu = false)}
                class="block px-3 py-2 text-base font-medium leading-relaxed rounded-md font-kyivsans text-bluegray-700 dark:text-bluegray-300 md:text-lg hover:text-bluegray-900 hover:bg-blue-300"
                role="menuitem">{item.name}</a
              >
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
