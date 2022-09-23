# Moon, stars, and the horizon

## Setup

- Create an index.html. In the `<body>`, you can start with this structure:

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

- Grab [this CSS](../assets/style.css) so that your app will look nice.
  Link it to the HTML file.
- Create an empty script.js and link it to the HTML file at the end of the body
  (`<script src='script.js'></script>`)

## Tasks

1. At the beginning, add (`append`) ten stars to random coordinates via
JavaScript. You'll have to create an element with class `'star'` and set it an
inline style.
The `left` and `top` coordinates should be in `%` or `vw/vh` units so that
the stars move if the window size changes.

1. On click anywhere on `section.world`, add a star beneath the cursor.

1. On random interval, a star should fall. That means you should pick a random
star on random interval and give it `fallen` class, until all stars are fallen.

1. Make trees grow on click!

1. 💪 Add a rule that a new star cannot be added within 50px radius of any
other.

1. 💪 Move moon around by dragging it with mouse.
