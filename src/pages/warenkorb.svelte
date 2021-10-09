<script>
  import Button, { Karte1 } from "./shop.svelte";
</script>

<p class="dark:text-white text-center text-2xl ">Warenkorb:</p>

<div class:hidden={!Karte1}>
  <div
    class="shadow-lg rounded-2xl w-full p-4 bg-white relative overflow-hidden m-5"
  >
    <img
      alt="moto"
      src="/pictures/limo1.webp"
      class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"
    />
    <div class="w-4/6">
      <p class="text-gray-800 text-lg font-medium mb-2">Fluffy Getränke Dose</p>
      <p class="text-gray-400 text-xs">
        Beliebt vor allem bei der Jugend enthält jede Dose 100% Fluffy-Flavoury.
        Garantiert! Erhältlich in den Geschmacksrichtungen "Zitrone" und
        "Orange"
      </p>
      <p class="text-indigo-500 text-xl font-medium">$0,69</p>
    </div>
  </div>
</div>
