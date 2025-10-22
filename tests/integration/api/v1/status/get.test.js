test("GET to /api/v1/status returns status ok", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);
  const data = await res.json();
  expect(data).toEqual({ status: "ok" });
});
