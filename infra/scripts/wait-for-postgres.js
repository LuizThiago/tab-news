const { exec } = require("node:child_process");

function checkPostgresReady() {
  exec("docker exec postgres-dev pg_isready --host localhost", hangleReturn);

  function hangleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write("⏳");
      checkPostgresReady();
      return;
    }

    console.log("\n✅ Postgres is ready!");
  }
}

console.log("🛑 Waiting for Postgres to be ready...");
checkPostgresReady();
