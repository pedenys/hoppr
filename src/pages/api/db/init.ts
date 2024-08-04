import Database from "better-sqlite3";

function createPopulateDatabase() {
  const db = new Database("artists_data.db", {
    fileMustExist: false,
  });
  // Create a table and insert data
  db.exec(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)",
  );
  const insertStmt = db.prepare("INSERT INTO users (name, age) VALUES (?, ?)");
  insertStmt.run("Alice", 30);
  insertStmt.run("Bob", 25);

  // Query the database
  const rows = db.prepare("SELECT * FROM users").all();

  // Print the results
  rows.forEach((row) => {
    console.log(row);
  });

  db.pragma("journal_mode = WAL");
  // Close the database connection
  db.close();
}

// Call the function to create, populate, and query the database
createPopulateDatabase();
