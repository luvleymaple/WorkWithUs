const counter = document.querySelectorAll(".counter");

counter.forEach(myCounter);

function myCounter(Cvalue) {
  Cvalue.innerText = "0%";
  incrementCounter();

  function incrementCounter() {
    // remove % before converting to number
    let currentNum = parseInt(Cvalue.innerText);
    let dataCeil = parseInt(Cvalue.getAttribute("data-ceil"));
    let increment = dataCeil / 10;

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      Cvalue.innerText = currentNum + "%";
      setTimeout(incrementCounter, 700);
    } else {
      Cvalue.innerText = dataCeil + "%";
    }
  }
}
