const colorList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

$(() => {
  colorList.map((colorValue, index) => {
    $(".container").append(`<div class=c${index}>${colorValue}</div>`);
    $(`.c${index}`).css("background-color", colorValue);
  });

  // $(".container").append("<div class='first'></div>");
  // $(".first").css("background-color", "#1abc9c");
});
