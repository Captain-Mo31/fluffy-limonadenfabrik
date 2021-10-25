<script>
  let adresse = false;
</script>

<div class="grid justify-items-center">
  <div
    class="my-5 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"
  >
    <div
      class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white"
    >
      Kasse:
    </div>

    <div class="p-3 mt-3">
      <form action="#">
        <div class="flex flex-col mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="email"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="pseudo"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="flex gap-4 mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="create-account-first-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="First name"
              placeholder="Vorname"
            />
          </div>
          <div class=" relative ">
            <input
              type="text"
              id="create-account-last-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="Last name"
              placeholder="Nachname"
            />
          </div>
        </div>
        <div class="flex gap-4 mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="create-account-first-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="First name"
              placeholder="Straße"
            />
          </div>
          <div class=" relative ">
            <input
              type="text"
              id="create-account-last-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="Last name"
              placeholder="Hausnummer"
            />
          </div>
        </div>
        <div class="flex gap-4 mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="create-account-first-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="First name"
              placeholder="Postleitzahl"
            />
          </div>
          <div class=" relative ">
            <input
              type="text"
              id="create-account-last-name"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="Last name"
              placeholder="Ort"
            />
          </div>
        </div>
        <div class="flex w-full my-4">
          <button
            on:click={() => (adresse = true)}
            class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Abweichende Versandadresse
          </button>
        </div>

        <div class:hidden={!adresse}>
          <div class="flex flex-col mb-2" />
          <div class="flex gap-4 mb-2">
            <div class=" relative ">
              <input
                type="text"
                id="create-account-first-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="First name"
                placeholder="Vorname"
              />
            </div>
            <div class=" relative ">
              <input
                type="text"
                id="create-account-last-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="Last name"
                placeholder="Nachname"
              />
            </div>
          </div>
          <div class="flex gap-4 mb-2">
            <div class=" relative ">
              <input
                type="text"
                id="create-account-first-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="First name"
                placeholder="Straße"
              />
            </div>
            <div class=" relative ">
              <input
                type="text"
                id="create-account-last-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="Last name"
                placeholder="Hausnummer"
              />
            </div>
          </div>
          <div class="flex gap-4 mb-2">
            <div class=" relative ">
              <input
                type="text"
                id="create-account-first-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="First name"
                placeholder="Postleitzahl"
              />
            </div>
            <div class=" relative ">
              <input
                type="text"
                id="create-account-last-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="Last name"
                placeholder="Ort"
              />
            </div>
          </div>
        </div>
        <div class="flex w-full my-4">
          <button
            type="submit"
            class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Übersicht
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
