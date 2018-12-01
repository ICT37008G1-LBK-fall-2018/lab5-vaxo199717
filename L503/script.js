let tableRows = document.querySelectorAll("table > tbody > tr");

tableRows.forEach((tr, idx) => {
  tr.children[idx].style.backgroundColor = "red";
});