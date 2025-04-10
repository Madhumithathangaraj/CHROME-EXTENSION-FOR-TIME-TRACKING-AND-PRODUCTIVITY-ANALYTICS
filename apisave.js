app.post("/api/save", async (req, res) => {
  const { site, duration, timestamp } = req.body;
  await TimeEntry.create({ site, duration, timestamp });
  res.sendStatus(200);
});
