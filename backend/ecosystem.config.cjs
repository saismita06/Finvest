// PM2 Ecosystem Config — FinVest Backend
// Used to run the Node.js backend on Hostinger VPS with auto-restart.
//
// Usage:
//   pm2 start ecosystem.config.cjs
//   pm2 save
//   pm2 startup   (run the printed command to auto-start on reboot)

module.exports = {
  apps: [
    {
      name: "finvest-backend",
      script: "index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,

        // ── MongoDB ────────────────────────────────────────────────────────
        MONGO_URL: "mongodb+srv://<user>:<password>@<cluster>.mongodb.net/finvest?retryWrites=true&w=majority",

        // ── JWT ────────────────────────────────────────────────────────────
        JWT_SECRET: "REPLACE_WITH_A_STRONG_RANDOM_SECRET",

        // ── Supabase ───────────────────────────────────────────────────────
        SUPABASE_URL: "https://faiteubuyqibeurumisy.supabase.co",
        SUPABASE_ANON_KEY: "sb_publishable_qblplla_FJ8FfuIvUsy2qA_hXPTFLnV",

        // ── CORS Origins ───────────────────────────────────────────────────
        FRONTEND_URL: "https://yourdomain.com",
        DASHBOARD_URL: "https://app.yourdomain.com",
      },
    },
  ],
};
