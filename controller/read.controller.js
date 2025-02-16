const { readAll, readOneRecord } = require("@lib/crud.lib");
const {getTableName} = require('drizzle-orm')



const read = (schema) => async (req, res) => {
  try {
    const data = await readAll(req.db, schema);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to fetch ${getTableName(schema)}.`, error });
  }
};

const readOne= (schema) => async (req, res) => {
  try {
    const { id } = req.params;
    const result = await readOneRecord(req.db, schema, id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to fetch ${getTableName(schema)}.`, error });
  }
};

module.exports = { read, readOne };