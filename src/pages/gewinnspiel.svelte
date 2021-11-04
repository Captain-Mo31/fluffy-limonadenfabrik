<script>
  let showsolve = true;
  let showdanke = false;
</script>

<div class:hidden={!showsolve}>
  <p class="text-center text-4xl dark:text-white text-black">
    Schick uns deine Lösung:
  </p>

  <div class="grid justify-items-center ">
    <input
      type="number"
      min="0"
      id="rounded-email"
      class="w-full md:w-1/2 m-10 rounded-lg border-transparent flex-1 appearance-none border border-yellow-400  dark:border-yellow-700 py-4 px-4 bg-white text-yellow-400 dark:bg-gray-800 placeholder-gray-400 hover:placeholder-yellow-400 shadow-sm text-base focus:outline-none focus:ring-2   focus:border-transparent"
      placeholder="Deine Lösung"
    />

    <button
      class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-yellow-500 hover:text-white border-2 border-yellow-400 dark:border-yellow-700 focus:outline-none"
      on:click={() => {
        showsolve = false;
      }}
      on:click={() => {
        showdanke = true;
      }}
    >
      Abschicken
    </button>
  </div>
</div>

<div class:hidden={!showdanke}>
  <p class="text-center text-4xl dark:text-white text-black mb-20">
    Danke für deine Antwort
  </p>
</div>
