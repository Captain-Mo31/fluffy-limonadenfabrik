<div
  class="flex bg-white dark:bg-gray-800 rounded-lg shadow my-5 md:visible invisible"
>
  <div class="flex-none w-24 md:w-48  relative">
    <img
      src="/pictures/limo1.webp"
      alt="shopping image"
      class="absolute rounded-lg inset-0 w-full h-full object-cover scale-90"
    />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
        Fluffy Getränkedose Zitrone
      </h1>
      <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
        $0,69
      </div>
      <div
        class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2"
      >
        Verfügbar
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
      <div class="space-x-2 flex">
        <select
          class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
        >
          <option value="">Anzahl auswählen </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7">7</option>
          <option value="8"> 8 </option>
          <option value="9"> 9</option>
          <option value="10"> 10</option>
        </select>
      </div>
    </div>
    <div class="flex mb-4 text-sm font-medium">
      <button
        type="button"
        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        In den Einkaufswagen
      </button>
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-300">
      Kostenfreier Versand nach Deutschland
    </p>
  </form>
</div>

<!--Mobile Ansicht-->

<div class="w-80 flex justify-center items-center md:hidden">
  <div class="w-full p-4">
    <div
      class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
    >
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold">
          Fluffy Getränkedose Zitrone
        </p>
        <p class="uppercase text-sm text-gray-400" />
      </div>
      <div class="prod-img">
        <img
          src="/pictures/limo1.webp"
          class="w-full object-cover object-center"
        />
      </div>
      <div class="prod-info grid gap-10">
        <div>
          <select
            class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
          >
            <option value="">Anzahl auswählen </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7">7</option>
            <option value="8"> 8 </option>
            <option value="9"> 9</option>
            <option value="10"> 10</option>
          </select>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-center text-gray-900"
        >
          <p class="font-bold text-xl">$0,69</p>
          <button
            class="px-2 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            In den Einkaufswagen
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
