<script context="module">
  export function Karte1() {
    false;
  }
</script>

<p class="text-center text-black dark:text-white text-2xl ">Produkte:</p>
<p class="text-center text-black dark:text-white">
  Fluffylimonade kann zur Zeit nur Online bestellt werden. Wir sind aber
  bestrebt, Fluffy in Zukunft in ihrem Supermarkt "um die Ecke" anbieten zu
  können. <a href="/partner" class="text-gray-500 dark:text-gray-100"
    >(Wir werden euch auf unserer Partner Seite darüber informieren)</a
  >Ansonsten rufen Sie uns an und bestellen entsprechende Produkte. Wir werden
  diese Ihnen dann umgehend zukommen lassen.
</p>

<h3 class="text-center">Zur Zeit gibt es Folgende Produkte:</h3>
<br />
<br />
<div class="grid grid-cols-1 gap-x-5 md:grid-cols-2">
  <div class="w-80 flex justify-center items-center">
    <div class="w-full p-2">
      <div
        class="card flex flex-col justify-center p-2 bg-white rounded-lg shadow-1xl"
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            Fluffy Getränkedosen
          </p>
          <p class="uppercase text-sm text-gray-400">
            Beliebt vor allem bei der Jugend enthält jede Dose 100%
            Fluffy-Flavoury. Garantiert! Erhältlich in den Geschmacksrichtungen
            "Zitrone" und "Orange"
          </p>
        </div>
        <div class="prod-img">
          <img
            src="/pictures/limo1.webp"
            class="w-full object-cover object-center"
            alt="Fluffy Getränkedose"
          />
        </div>

        <div class="prod-info grid gap-10">
          <div>
            <ul class="flex flex-row justify-center items-center" />
          </div>
          <div
            class="flex flex-col md:flex-row justify-between items-center text-gray-900"
          >
            <p class="font-bold text-xl">0,69&euro</p>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              on:click={() => {
                Karte1 = true;
              }}
            >
              Hinzufügen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-80 flex justify-center items-center">
    <div class="w-full p-4">
      <div
        class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            Fluffy Bitter Lemon
          </p>
          <p class="uppercase text-sm text-gray-400">
            Die Königin unserer Produktpalette. Ungemein lecker und erfrischend!
          </p>
        </div>

        <img
          src="/pictures/bitter_lemon.webp"
          class="w-full object-cover object-center scale-50 "
          alt="Fluffy Bitter Lemon"
        />

        <div class="prod-info grid gap-10">
          <div>
            <ul class="flex flex-row justify-center items-center" />
          </div>
          <div
            class="flex flex-col md:flex-row justify-between items-center text-gray-900"
          >
            <p class="font-bold text-xl">0,69&euro</p>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Hinzufügen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-80 flex justify-center items-center">
    <div class="w-full p-4">
      <div
        class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            Fluffy Familienglück
          </p>
          <p class="uppercase text-sm text-gray-400">
            Die leckere Limonade für die ganze Familie. Erhältlich in den
            Geschmacksrichtungen "Orange" und "Himbeer".
          </p>
        </div>
        <div class="prod-img">
          <img
            src="/pictures/limo_familienpack.webp"
            class="w-full object-cover object-center"
            alt="Fluffy Familienglück"
          />
        </div>
        <div class="prod-info grid gap-10">
          <div>
            <ul class="flex flex-row justify-center items-center" />
          </div>
          <div
            class="flex flex-col md:flex-row justify-between items-center text-gray-900"
          >
            <p class="font-bold text-xl">0,69&euro</p>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Hinzufügen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-80 flex justify-center items-center">
    <div class="w-full p-4">
      <div
        class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            Merwehg Kiste
          </p>
          <p class="uppercase text-sm text-gray-400">
            Fluffy gibt es natürlich auch in der kostengünstigen Mehrwegkiste.
            Diese schont die Umwelt und den Geldbeutel.
          </p>
        </div>
        <div class="prod-img">
          <img
            src="/pictures/limo_kiste.webp"
            class="w-full object-cover object-center"
            alt=" Fluffy Mehrwegkiste"
          />
        </div>
        <div class="prod-info grid gap-10">
          <div>
            <ul class="flex flex-row justify-center items-center" />
          </div>
          <div
            class="flex flex-col md:flex-row justify-between items-center text-gray-900"
          >
            <p class="font-bold text-xl">0,69&euro</p>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Hinzufügen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
