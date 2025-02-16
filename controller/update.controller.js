const { updateRecord } = require("@lib/crud.lib");
const {getTableName} = require('drizzle-orm')


const update = (schema) => async (req, res) => {
  try {
    const { id } = req.params;
    await updateRecord(req.db, schema, id, req.body);
    res.status(200).json({ message: `${getTableName(schema)} updated successfully.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to update ${getTableName(schema)}.` });
  }
};

module.exports = { update };