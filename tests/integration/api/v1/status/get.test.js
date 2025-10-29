test("GET to /api/v1/status returns status ok", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.update_at);

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(responseBody.dependencies.database.max_connections).toBe(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
