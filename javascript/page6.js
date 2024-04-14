let myChart = new Chart("myChart", {
  type: "line",
  data: {},
  options: {},
});

const xValues = [2, 4, 6, 8];
const yValues = [2, 4, 5, 7];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 2, max: 10 } }],
    },
  },
});

const nextPageButton = document.querySelector("#btn");

nextPageButton.addEventListener("click", () => {
  window.location.href = "page7.html";
});
