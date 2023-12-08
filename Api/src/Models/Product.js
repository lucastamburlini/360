const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("Product",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			enabled: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	);
};