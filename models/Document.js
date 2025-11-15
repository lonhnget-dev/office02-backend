const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Document = sequelize.define('Document', {
  no: DataTypes.STRING, // 1. លេខចូល
  ir: DataTypes.STRING, // 2. លេខលិខិត(IR)
  outNo: DataTypes.STRING, // 3. លេខចេញ
  submitDate: DataTypes.STRING, // 4. ថ្ងៃខែលិខិតចូល/ចេញ
  source: DataTypes.STRING, // 5. អង្គភាព/ប្រភពលិខិត
  doc: DataTypes.STRING, // 6. ប្រភេទឯកសារ
  officeDate2: DataTypes.STRING, // 7. ថ្ងៃខែមុខការិ.២
  officer: DataTypes.STRING, // 8. មន្រ្តីទទួលមុខការ
  receiveDate: DataTypes.STRING, // 9. ថ្ងៃខែឆ្នាំទទួល
  progress: DataTypes.STRING, // 10. មិនទាន់ធ្វើចេញ/បានធ្វើចេញរួចរាល់
  duration: DataTypes.STRING, // 11. ចំនួនថ្ងៃទាន់បានធ្វើចេញ
  toChiefOffice: DataTypes.STRING, // 12. ចូលប្រធានការិ.
  toDeputy: DataTypes.STRING, // 13. ចូលអនុ.នាយកដ្ឋាន
  toHeadDept: DataTypes.STRING, // 14. ចូលប្រធាននាយកដ្ឋាន
  outDate: DataTypes.STRING, // 15. ថ្ងៃខែឆ្នាំចេញលិខិត
  registryStatus: DataTypes.STRING, // 16. ចេញបញ្ជិកា/មិនទាន់ចេញបញ្ជិកា
  reason: DataTypes.STRING, // 17. មូលហេតុ/ផ្សេងៗ
});

module.exports = Document;
