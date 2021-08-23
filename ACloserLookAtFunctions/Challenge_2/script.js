(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

/* After the function is popped from the call stack, the variables are placed in the closure, 
  so they can be later accessed in the event listener function
  
  So the IIFE was executed and basically everything was "removed"(the environment was removed).
  But the inner function still had access to the variables contained in the IIFE due to the closure, 
  allowing us to alter their initial values. */
