const cors = require('cors'); 
const express = require("express");
const sequelize = require('./database'); // import your db connection
const app = express();
const port = 4000;
const Document = require('./models/Document');



app.use(cors());
app.use(express.json());
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database connected successfully!'))
  .catch(err => console.error('❌ Connection failed:', err));

app.get('/doc', async (req, res) => {
const docs = await Document.findAll();
  res.json({
    message: "get success",
    date: docs,
  });

});
// app.get("/doc", (req, res) => {
//   res.json();
// });

app.post('/doc', async (req, res) => {
  const doc = await Document.create(req.body);
  res.json({ message: '✅ Document created', doc });
});


app.delete("/doc/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Document.destroy({
      where: { id: id },
    });

    if (deleted) {
      res.json({ message: "✅ Document deleted successfully" });
    } else {
      res.status(404).json({ message: "❌ Document not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "❌ Failed to delete document" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 🧩 Update document
app.put("/doc/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Document.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      res.json({ message: "✅ Document updated successfully" });
    } else {
      res.status(404).json({ message: "❌ Document not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "❌ Failed to update document" });
  }
});