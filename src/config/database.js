module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker123',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    undersocoredAll: true,
  },
};
