# Hold, csillagok, és a horizont

## Setup

- Készíts egy index.html fájlt. A `<body>`-t az alábbi struktúrával kezdheted:

```html
<section class="world">
  <div class="star" style="left:50vw;top:50vh;"></div>
  <div class="moon"></div>
  <div class="horizon">
    <div class="tree one">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="tree two">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</section>
```

- Használd [ezt a CSS-t](../assets/style.css), hogy az appod szépen nézzen ki.
  Linkeld be a HTML fájlodba.
- Készíts egy üres script.js fájlt és a HTML fájlodban a `<body>` tag végére
  linkeld be
  (`<script src='script.js'></script>`)

## Feladatok

1. Kezdésnek jeleníts meg (`append`) 10 csillagot random koordinátákra
JavaScript-tel. Készítened kell egy elemet `'star'` osztállyal és állítsd be
inline stílusra.
A `left` és `top` koordinátákat `%`-ban vagy `vw/vh` egységekben add meg, hogy
az ablak méretének módosításával tudjanak majd mozogni.

1. Bárhol a `section.world`-ön kattintás esetén, jeleníts meg egy új csillagot
  az egér kurzor alatt.

1. Véletlen időközönként egy csillag essen le. Ez azt jelenti, hogy egy random
  csillagnak, random időben adj `fallen` osztályt. Ez addig tartson, amíg
  minden csillag lehullik.

1. A fák klikkelésre növekedjenek!

1. 💪 Hozz létre egy olyan szabályt, hogy egy bármelyik másik csillag 50px-es
  környezetében ne lehessen új csillagot létrehozni.

1. 💪 A holdat lehessen az egérrel mozgatni.
