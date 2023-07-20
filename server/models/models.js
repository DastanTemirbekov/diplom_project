const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Test = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    question: {type: DataTypes.TEXT, allowNull: false},
    options: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    correctAnswer: {type: DataTypes.INTEGER, allowNull: false},
})

const UserTest = sequelize.define('user_test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    score: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasMany(UserTest)
UserTest.belongsTo(User)

module.exports = {
    Test, User, UserTest
}





