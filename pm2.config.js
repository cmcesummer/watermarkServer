const NAME = 'watermarkserver'

const apps = [
    {
        name: NAME,
        script: "./index.js",
        instances: 1,
        max_memory_restart: "1G",
        ignore_watch: ["node_modules", "log/**", "static/**"],
        exec_mode: "fork",
        out_file: `./log/pm2/${NAME}.log`,
        error_file: `./log/pm2/${NAME}.log`,
        log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
        merge_logs: false,
        env: {
            NODE_ENV: "production"
        },
        env_deve: {
            NODE_ENV: "devee"
        }
    }
];

module.exports = { apps };