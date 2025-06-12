module.exports = {
  apps: [
    {
      name: "SenDDT MW",
      script: "yarn serve",
      env: {
        PORT: 3008,
        HOST: "127.0.0.1",
      },
    },
  ],
};
