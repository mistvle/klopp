const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const db = new Database(path.join(dataDir, "database.sqlite"));

db.prepare(`
CREATE TABLE IF NOT EXISTS giveaways (
    id TEXT PRIMARY KEY,
    message_id TEXT,
    channel_id TEXT,
    guild_id TEXT,
    prize TEXT NOT NULL,
    duration TEXT NOT NULL,
    winner_count INTEGER NOT NULL,
    end_time INTEGER NOT NULL,
    server_link TEXT,
    entries TEXT DEFAULT '[]',
    ended INTEGER DEFAULT 0,
    winners TEXT DEFAULT '[]'
)
`).run();

const columns = db.prepare("PRAGMA table_info(giveaways)").all();
const hasServerLink = columns.some(column => column.name === "server_link");

if (!hasServerLink) {
    db.prepare("ALTER TABLE giveaways ADD COLUMN server_link TEXT").run();
}

module.exports = db;