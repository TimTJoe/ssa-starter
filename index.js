 const express = require("express");
 require("dotenv").config()
 require("module-alias/register")
 const { drizzle } = require('drizzle-orm/libsql') ;
 const db = drizzle(process.env.DB_FILE || "file:./db/business.db")
 
 const app = express();
 
// Middleware
app.use(express.json());
app.use((req,res, next)=>{
  req.db = db
  next()
})

// Routes

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
