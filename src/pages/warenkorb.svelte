<script>
  import { anzahldose } from "../data/stores";
  $: displayedanzahl = $anzahldose;
</script>

<p class="text-center dark:text-white text-4xl">
  Zur Zeit sind keine Artikel im Warenkorb
</p>

<p>{displayedanzahl}</p>
