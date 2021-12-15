<script>
  import { content } from "../data/stores";
</script>

<!--Shop Elemente -->
<div class="grid justify-items-center">
  <!--Desktop Ansicht-->
  <!--Getränkedose-->
  <div class="hidden md:block">
    <div class="flex bg-white dark:bg-gray-800 rounded-lg shadow my-5">
      <div class="flex-none w-24 md:w-48  relative">
        <img
          src="/pictures/limo1.webp"
          alt="shopping image"
          class="absolute rounded-lg inset-0 w-full h-full object-cover scale-90"
        />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <p class="flex-auto text-xl font-semibold dark:text-white">
            Fluffy Getränkedose
          </p>
          <br />
          <div class="text-xl font-semibold text-gray-500 dark:text-white ">
            &euro 0,69
          </div>
          <div
            class="w-full flex-none text-sm font-medium text-gray-500 dark:text-white mt-2"
          >
            Verfügbar
          </div>
        </div>
        <div
          class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-white"
        >
          <div class="space-x-2 flex">
            <select
              class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 dark:text-white  bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              name="Anzahl"
            >
              <option value="Anzahl auswählen">Anzahl auswählen </option>
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
            <select
              class="block w-52 text-gray-700 py-2 px-3 border dark:text-white  border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              name="Sorte"
            >
              <option value="Anzahl auswählen">Sorte auswählen </option>
              <option value="Zitrone">Zitrone</option>
              <option value="Orange">Orange</option>
            </select>
          </div>
        </div>
        <div class="flex mb-4 text-sm font-medium">
          <button
            type="button"
            class="add-cart py-2 px-4 bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            In den Einkaufswagen
          </button>
        </div>
        <p class="text-sm text-gray-500 dark:text-white">
          Kostenfreier Versand nach Deutschland
        </p>
      </form>
    </div>
  </div>
  <!--Bitterlemon-->
  <div class="hidden md:block">
    <div class="flex bg-white dark:bg-gray-800  rounded-lg shadow my-5">
      <div class="flex-none w-24 md:w-48  relative">
        <img
          src="/pictures/bitter_lemon.webp"
          alt="shopping image"
          class="absolute rounded-lg inset-0 w-full h-full object-cover scale-90"
        />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
            Fluffy Bitterlemon
          </h1>
          <div class="text-xl font-semibold text-gray-500 dark:text-white ">
            &euro 2,00
          </div>
          <div
            class="w-full flex-none text-sm font-medium text-gray-500 dark:text-white mt-2"
          >
            Verfügbar
          </div>
        </div>
        <div
          class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-white"
        >
          <div class="space-x-2 flex">
            <select
              class="block w-52 text-gray-700 py-2 px-3 border dark:text-white border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              name="Anzahl"
            >
              <option value="Anzahl auswählen">Anzahl auswählen </option>
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
            class="py-2 px-4 bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            In den Einkaufswagen
          </button>
        </div>
        <p class="text-sm text-gray-500 dark:text-white">
          Kostenfreier Versand nach Deutschland
        </p>
      </form>
    </div>
    <!--Familienglück-->
    <div class="hidden md:block">
      <div class="flex bg-white dark:bg-gray-800  rounded-lg shadow my-5">
        <div class="flex-none w-24 md:w-48  relative">
          <img
            src="/pictures/limo_familienpack.webp"
            alt="shopping image"
            class="absolute rounded-lg inset-0 w-full h-full object-cover"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
              Fluffy Familienglück
            </h1>
            <div class="text-xl font-semibold text-gray-500 dark:text-white">
              &euro 1,10
            </div>
            <div
              class="w-full flex-none text-sm font-medium text-gray-500 dark:text-white mt-2"
            >
              Verfügbar
            </div>
          </div>
          <div
            class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-white"
          >
            <div class="space-x-2 flex">
              <select
                class="block w-52 text-gray-700 py-2 px-3 border dark:text-white border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Anzahl"
              >
                <option value="Anzahl auswählen">Anzahl auswählen </option>
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
              <select
                class="block w-52 text-gray-700 py-2 px-3 border dark:text-white border-gray-300  bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Sorte"
              >
                <option value="Anzahl auswählen">Sorte auswählen </option>
                <option value="Zitrone">Himber</option>
                <option value="Orange">Orange</option>
              </select>
            </div>
          </div>
          <div class="flex mb-4 text-sm font-medium">
            <button
              type="button"
              class="py-2 px-4 bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              In den Einkaufswagen
            </button>
          </div>
          <p class="text-sm text-gray-500 dark:text-white">
            Kostenfreier Versand nach Deutschland
          </p>
        </form>
      </div>
    </div>
    <!--Mehrwegkiste-->
    <div class="hidden md:block">
      <div class="flex bg-white dark:bg-gray-800  rounded-lg shadow my-5">
        <div class="flex-none w-24 md:w-48  relative">
          <img
            src="/pictures/limo_kiste.webp"
            alt="shopping image"
            class="absolute rounded-lg inset-0 w-full h-full object-cover scale-90"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
              Fluffy Mehrwegkiste
            </h1>
            <div class="text-xl font-semibold text-gray-500 dark:text-white">
              &euro 12,50
            </div>
            <div
              class="w-full flex-none text-sm font-medium text-gray-500 dark:text-white mt-2"
            >
              Verfügbar
            </div>
          </div>
          <div
            class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-white"
          >
            <div class="space-x-2 flex">
              <select
                class="block w-52 text-gray-700 py-2 px-3 border dark:text-white border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Anzahl"
              >
                <option value="Anzahl auswählen">Anzahl auswählen </option>
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
              <select
                class="block w-52 text-gray-700 py-2 px-3 border dark:text-white border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Sorte"
              >
                <option value="Anzahl auswählen">Sorte auswählen </option>
                <option value="Zitrone">Zitrone</option>
                <option value="Orange">Orange</option>
                <option value="Orange">Himber</option>
              </select>
            </div>
          </div>
          <div class="flex mb-4 text-sm font-medium">
            <button
              type="button"
              class="py-2 px-4 bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              In den Einkaufswagen
            </button>
          </div>
          <p class="text-sm text-gray-500 dark:text-white">
            Kostenfreier Versand nach Deutschland
          </p>
        </form>
      </div>
    </div>
  </div>

  <!--Mobile Ansicht-->

  <div class=" block md:hidden">
    <div class="w-80 flex justify-center items-center">
      <div class="w-full p-4">
        <div
          class="card flex flex-col justify-center p-10 bg-white  dark:bg-gray-800 dark: rounded-lg shadow-2xl"
        >
          <div class="prod-title">
            <p
              class="text-2xl uppercase text-gray-900 font-bold dark:text-white"
            >
              Fluffy Getränkedose
            </p>
            <p class="uppercase text-sm text-gray-400" />
          </div>
          <div class="prod-img scale-150">
            <img
              src="/pictures/limo1.webp"
              class="w-full object-cover object-center scale-100"
            />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <select
                class="block w-52 text-gray-700 mb-2 py-2 px-3 border dark:text-white   border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="test"
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
              <select
                class="block w-52 text-gray-700 py-2 px-3 pt-2 border dark:text-white border-gray-300  bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Sorte"
              >
                <option value="Anzahl auswählen">Sorte auswählen </option>
                <option value="Zitrone">Zitrone</option>
                <option value="Orange">Orange</option>
              </select>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-center text-gray-900"
            >
              <p class="font-bold text-xl dark:text-white">&euro 0,69</p>
              <button
                class="px-2 py-2 transition ease-in duration-200 uppercase rounded-full bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400"
              >
                In den Einkaufswagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Bitterlemon-->
    <div class="w-80 flex justify-center items-center ">
      <div class="w-full p-4">
        <div
          class="card flex flex-col justify-center p-10  bg-white dark:bg-gray-800 rounded-lg shadow-2xl"
        >
          <div class="prod-title">
            <p
              class="text-2xl uppercase text-gray-900 font-bold dark:text-white"
            >
              Fluffy Bitterlemon
            </p>
            <p class="uppercase text-sm text-gray-400" />
          </div>
          <div class="prod-img">
            <img
              src="/pictures/bitter_lemon.webp"
              class="w-full object-cover object-center scale-100"
            />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <select
                class="block w-52 text-gray-700 mb-2 py-2 px-3 border dark:text-white border-gray-300 dark:bg-gray-800 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
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
              <p class="font-bold text-xl dark:text-white">&euro 2,00</p>
              <button
                class="px-2 py-2 transition ease-in duration-200 uppercase rounded-full bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400"
              >
                In den Einkaufswagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Familienglück-->
    <div class="w-80 flex justify-center items-center ">
      <div class="w-full p-4">
        <div
          class="card flex flex-col justify-center p-10  bg-white dark:bg-gray-800 rounded-lg shadow-2xl"
        >
          <div class="prod-title">
            <p
              class="text-2xl uppercase text-gray-900 font-bold dark:text-white"
            >
              Fluffy Familienglück
            </p>
            <p class="uppercase text-sm text-gray-400" />
          </div>
          <div class="prod-img scale-150">
            <img
              src="/pictures/limo_familienpack.webp"
              class="w-full object-cover object-center scale-100"
            />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <select
                class="block w-52 text-gray-700 mb-2 dark:text-white py-2 px-3 border  border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
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
              <select
                class="block w-52 text-gray-700 dark:text-white py-2 px-3 pt-2 border  border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Sorte"
              >
                <option value="Anzahl auswählen">Sorte auswählen </option>
                <option value="Zitrone">Himbeere</option>
                <option value="Orange">Orange</option>
              </select>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-center text-gray-900"
            >
              <p class="font-bold text-xl dark:text-white">&euro 1,10</p>
              <button
                class="px-2 py-2 transition ease-in duration-200 uppercase rounded-full bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400"
              >
                In den Einkaufswagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Mehrweg-->
    <div class="w-80 flex justify-center items-center ">
      <div class="w-full p-4">
        <div
          class="card flex flex-col justify-center p-10  bg-white dark:bg-gray-800 rounded-lg shadow-2xl"
        >
          <div class="prod-title">
            <p
              class="text-2xl uppercase text-gray-900 font-bold dark:text-white"
            >
              Fluffy Mehrwegkiste
            </p>
            <p class="uppercase text-sm text-gray-400" />
          </div>
          <div class="prod-img scale-150">
            <img
              src="/pictures/limo_kiste.webp"
              class="w-full object-cover object-center scale-90"
            />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <select
                class="block w-52 text-gray-700 dark:text-white mb-2 py-2 px-3 border  border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="0">Anzahl auswählen </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <select
                class="block w-52 text-gray-700 dark:text-white py-2 px-3 pt-2 border  border-gray-300 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                name="Sorte"
              >
                <option value="Anzahl auswählen">Sorte auswählen </option>
                <option value="Zitrone">Zitrone</option>
                <option value="Orange">Orange</option>
                <option value="Orange">Himbeere</option>
              </select>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-center text-gray-900"
            >
              <p class="font-bold text-xl dark:text-white">&euro 12,50</p>
              <button
                class="px-2 py-2 transition ease-in duration-200 uppercase rounded-full bg-yellow-400 dark:bg-yellow-700 hover:bg-yellow-500 bg:hover:bg-yellow-800 focus:ring-yellow-500 bg:focus:ring-yellow-800 focus:ring-offset-yellow-400"
              >
                In den Einkaufswagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
