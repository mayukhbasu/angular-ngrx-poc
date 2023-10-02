const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Iced fruit",
  "Jackfruit"
];

function filterOptions() {
  const search = document.getElementById("search");
  const dropdown = document.getElementById("dropdown");
  let filteredData = data.filter(item => item.toLowerCase().startsWith(search.value.toLowerCase()));

  dropdown.innerHTML = "";
  if (search.value === "") {
      dropdown.style.display = "none";
      return;
  }

  for (let item of filteredData) {
      let div = document.createElement("div");
      div.innerText = item;
      div.addEventListener("click", function() {
          search.value = item;
          dropdown.style.display = "none";
      });
      dropdown.appendChild(div);
  }
  dropdown.style.display = filteredData.length > 0 ? "block" : "none";
}

document.addEventListener("click", function(event) {
  if (event.target.id !== "search") {
      document.getElementById("dropdown").style.display = "none";
  }
});
