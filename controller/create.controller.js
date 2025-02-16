const { createRecord } = require("@lib/crud.lib");
const {getTableName} = require('drizzle-orm')



const create = (schema) => async (req, res) => {
  try {
    const newRecord = await createRecord(req.db, schema, req.body);
    res.status(201).json({ message: `${getTableName(schema)}  created successfully.`, data: newRecord });
  } catch (error) {
    res.status(500).json({ message: `Failed to create ${getTableName(schema)}.`, error });
  }
};

module.exports = { create };