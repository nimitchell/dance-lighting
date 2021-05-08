# dance-lighting

Sticky notes and sketch:
https://miro.com/app/board/o9J_lSG2LwQ=/



<!-- use tab to indent always -->

 <!-- JavaScript  ----------------------------------------------------->
 <!-- use let if declaring variable or if you plan on changing that variable data. otherwise use const -->
let a, b;

<!-- have some description of what each function does. for comments in the methods comment when something may not be obvious and needs some explanation -->
function foo(a, b) {
  <!-- use three equal signs for the most part if not all the time -->
  <!-- always leave space after if -->
  if (a === b) { 
    <!-- always leave spaces before and after operation sign(s)-->
    a += 1;
  }
  <!-- keep else if on new line -->
  else if (a > b) {
    b += 1;
  }
  <!-- keep else on new line -->
  else {
    a += 1;
    b += 1;
  }
}

const items = ["car", "boat", "plane"];

<!-- maybe use forEach instead of regular for loops? -->
items.forEach(function(item) {
  items.push(item);
})

<!-- HTML ------------------------------------------------------------->

<!-- only use an id for unique things, but use classes otherwise -->






<!-- CSS -------------------------------------------------------------->

<!-- keep the general html types at the top of the css file -->
h2 {
  font-size: 1.6em;
}

<!-- for classes and id's, keep more general things at top of page but more unique things at bottom? -->

.navbar {
  width: 20px;
  border: 10px;
}

#loginButton {
  width: 10px;
  background-color: #000000;
}
