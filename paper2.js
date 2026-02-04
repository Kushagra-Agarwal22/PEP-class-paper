const limiter = function () {
    const wordsArea = document.getElementById("text");
    const charCount = document.getElementById("char-count");
    const maxLimit = 100;
  
    wordsArea.addEventListener("input", () => {
      const count = wordsArea.value.length;
      charCount.textContent = `${count} / ${maxLimit}`;
  
      if (count > maxLimit) {
        charCount.style.color = "red";
      } else {
        charCount.style.color = "black";
      }
    });
  };
  
  limiter();
  