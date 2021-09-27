module.exports = (sequelize, Sequelize) => {
  const Operation = sequelize.define("operation", {
    concept: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Operation;
};
