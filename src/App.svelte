<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<Router {routes} />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer base {
    @font-face {
      font-family: "apfel";
      src: url("/fonts/apple/ApfelGrotezk-Fett.woff2") format("woff2"),
        url("/fonts/apple/ApfelGrotezk-Fett.woff") format("woff");
      font-display: swap;
    }
    @font-face {
      font-family: "apfel";
      src: url("/fonts/apple/ApfelGrotezk-Regular.woff2") format("woff2"),
        url("/fonts/apple/ApfelGrotezk-Regular.woff") format("woff");
      font-display: swap;
    }
    @font-face {
      font-family: "montserat";
      src: url("/fonts/montserrat/Montserrat-Regular.ttf") format("ttf");
      font-display: swap;
    }
    @font-face {
      font-family: "montserat";
      src: url("/fonts/montserrat/Montserrat-Bold.ttf") format("ttf");
      font-display: swap;
    }
  }
</style>
