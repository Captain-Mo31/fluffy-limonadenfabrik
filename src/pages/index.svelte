<script>
  import { metatags } from "@roxi/routify";

  metatags.title = "Fluffy-Limonadenfabrik";
  metatags.description = "Description coming soon...";
</script>

<div class="w-full grid justify-items-center ">
  <img
    alt="Dartspiel Foto"
    src="public/pictures/welcome.jpg"
    class="rounded-lg"
    aria-label="Dartspiel Foto"
    width="500"
    height="281"
  />
</div>
<h1 class="text-center">Wilkommen bei Fluffy</h1>

<div>
  <h2 class="text-center">Aktuelles:</h2>
</div>
<div
  class="overflow-hidden shadow-lg rounded-lg h-90 w-2/4 cursor-pointer m-auto"
>
  <img
    alt="Dartspiel Foto"
    src="public/pictures/gewinnspiel.jpg"
    class="max-h-40 w-full object-cover "
    aria-label="Dartspiel Foto"
    width="500"
    height="281"
  />
  <div class="bg-white dark:bg-gray-800 w-full p-4">
    <p class="text-black dark:text-white text-xl mb-2">Gewinnspiel</p>
    <p class="text-black dark:text-white font-light text-md">
      Machen Sie mit und Sie erhalten die Chance auf wertvolle Preise:
    </p>
    <ol>
      <li>Eine Reise in den Harz</li>
      <li>Ein Jahr ein Monatsabo an Limonade</li>
      <li>Ein Warengutschein über 50 Euro für alle Produkte der Fluffy-GmbH</li>
    </ol>

    Teilnehmen kann jeder der mindestens 18 Jahre alt ist. Mitmachen kann man
    noch bis zum 31.10.2021.
    <br /> <br />
    <strong>Die Preisfrage lautet:</strong> <br />
    Wieviele Mitarbeiter hat die Fluffy GmbH zur Zeit?
    <br />
    <br />
    <a
      class=" px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-yellow-400 hover:text-white border-2 border-gray-900 focus:outline-none"
      href="/gewinnspiel"
    >
      Schick uns deine Lösung!
    </a>
    <br />
    <p class="text-center"><strong>Viel Erfolg!</strong></p>
  </div>
</div>
