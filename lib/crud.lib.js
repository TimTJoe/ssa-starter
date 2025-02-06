const fs = require("fs");
const { eq } = require("drizzle-orm");

const readAll = async (db, schema) => {
  return await db.select().from(schema);
};

const readOneRecord = async (db, schema, id) => {
  return await db.select().from(schema).where(eq(schema.id, id));
};


const createRecord = async (db, schema, data, file = null, fileFieldName = "photo") => {
  // Spread the data and add file data if present
  const record = { ...data };

  if (file) {
    record[fileFieldName] = file.filename; // Include file name if a file is uploaded
  }

  try {
    // Insert the record into the database
    const result = await db.insert(schema).values(record);
    return result;
  } catch (error) {
    console.error(error)
    // If an error occurs and a file was uploaded, clean up the file
    if (file && file.path && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
    throw error; // Re-throw the error for further handling
  }
};

const updateRecord = async (db, schema, id, data) => {
  return await db.update(schema).set({ ...data }).where(eq(schema.id, id));
};

const deleteRecord = async (db, schema, id) => {
  return await db.delete(schema).where(eq(schema.id, id));
};


module.exports = { readAll, createRecord, updateRecord, deleteRecord, readOneRecord };
