const { deleteRecord } = require("@lib/crud.lib");
const {getTableName} = require('drizzle-orm')

const remove = (schema) => async (req, res) => {
  try {
    const { id } = req.params;
    await deleteRecord(req.db, schema, id);
    res.status(200).json({ message: `${getTableName(schema)}  deleted successfully.` });
  } catch (error) {
    res.status(500).json({ error: `Failed to delete ${getTableName(schema)}.` });
  }
};

module.exports = { remove };