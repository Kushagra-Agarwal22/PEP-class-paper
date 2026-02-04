function counter () {
    const btn = document.getElementById("btn");
    const countEl= document.getElementById("count");
  
    const Counter = (function () {
      let count = 0;
      let increase = false;
  
      return function () {
        if (increase) return;
  
        increase = true;
        count++;
        countEl.textContent = count;
  
        setTimeout(() => {
          increase = false;
        }, 1000);
      };
    })();
  
    btn.addEventListener("click", Counter);
  }
  
counter();


  























  function once(fn) {
    let called = false;
  
    return function (...args) {
      if (called) return;
      called = true;
      return fn.apply(this, args);
    };
  }
  