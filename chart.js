const weeklyData = await fetch("/api/weekly-report").then(res => res.json());

const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: weeklyData.days,
    datasets: [{
      label: "Minutes per day",
      data: weeklyData.minutes,
      backgroundColor: "#4CAF50"
    }]
  }
});
