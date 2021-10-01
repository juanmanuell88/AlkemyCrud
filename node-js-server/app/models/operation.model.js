module.exports = (sequelize, Sequelize) => {
  const Operation = sequelize.define("operation", {
    concept: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Operation;
};
