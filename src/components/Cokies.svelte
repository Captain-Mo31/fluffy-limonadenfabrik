<script>
  let cokies = true;
</script>

<div class:hidden={!cokies}>
  <div
    class="w-72 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 fixed bottom-5 right-5"
  >
    <div class="w-16 mx-auto relative -mt-10 mb-3">
      <img
        class="-mt-1"
        src="https://www.tailwind-kit.com/icons/cookie.svg"
        alt="cookie"
      />
    </div>
    <span
      class="w-full sm:w-48  block leading-normal text-gray-800 dark:text-white text-md mb-3"
    >
      Wir verwenden ausschließlich Technisch Notwendige Cookies
    </span>
    <div class="flex items-center justify-between">
      <a
        class="text-xs text-gray-400 dark:text-white mr-1 hover:text-gray-800 dark:hover:text-gray-100"
        href="/datenschutz"
      >
        Dateschutzerklärung
      </a>
      <div class="w-1/2">
        <button
          type="button"
          class="py-2 px-4  bg-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600 hover:bg-yellow-300 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          on:click={() => {
            cokies = false;
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  </div>
</div>
