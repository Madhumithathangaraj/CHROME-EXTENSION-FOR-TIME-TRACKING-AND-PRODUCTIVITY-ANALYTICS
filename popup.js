chrome.storage.local.get(["timeData"], data => {
  const report = document.getElementById("report");
  const timeData = data.timeData || {};

  const sorted = Object.entries(timeData).sort((a, b) => b[1] - a[1]);

  sorted.forEach(([site, seconds]) => {
    const minutes = (seconds / 60).toFixed(1);
    report.innerHTML += `<p><strong>${site}</strong>: ${minutes} min</p>`;
  });
});
