<script>
  let showsolve = true;
  let showdanke = false;
</script>

<div class:hidden={!showsolve}>
  <p class="text-center text-4xl dark:text-white text-black  mb-10 font-apfel">
    Schick uns deine Lösung:
  </p>

  <div class="grid justify-items-center ">
    <input
      type="number"
      min="0"
      id="solve"
      class=" w-full md:w-1/2 m-2 rounded-lg border-transparent flex-1 appearance-none border border-yellow-400  dark:border-yellow-700 py-4 px-4 bg-white text-black dark:bg-gray-800 placeholder-gray-400 hover:placeholder-yellow-400 shadow-sm text-base focus:outline-none focus:ring-2   focus:border-transparent"
      placeholder="Deine Lösung"
    />
    <input
      type="name"
      id="rounded-email"
      class="w-full md:w-1/2 m-2 rounded-lg border-transparent flex-1 appearance-none border border-yellow-400  dark:border-yellow-700 py-4 px-4 bg-white text-black dark:bg-gray-800 placeholder-gray-400 hover:placeholder-yellow-400 shadow-sm text-base focus:outline-none focus:ring-2   focus:border-transparent"
      placeholder="Dein Name"
    />
    <input
      type="email"
      id="rounded-email"
      class="mb-5 w-full md:w-1/2 m-2 rounded-lg border-transparent flex-1 appearance-none border border-yellow-400  dark:border-yellow-700 py-4 px-4 bg-white text-black  dark:bg-gray-800 placeholder-gray-400 hover:placeholder-yellow-400 shadow-sm text-base focus:outline-none focus:ring-2   focus:border-transparent"
      placeholder="Deine Email Adresse"
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

<div class:hidden={!showdanke} class="grid justify-items-center mb-10">
  <p class="text-center text-4xl dark:text-white text-black mb-20">
    Danke für deine Antwort
  </p>
  <div style="width:50%">
    <div style="height:0;padding-bottom:100%;position:relative;width:100%">
      <iframe
        allowfullscreen=""
        frameBorder="0"
        height="100%"
        src="https://giphy.com/embed/b8w2UKtIFcADoCmSJC/video"
        style="left:0;position:absolute;top:0"
        width="100%"
        class="rounded-lg"
      />
    </div>
  </div>
</div>
