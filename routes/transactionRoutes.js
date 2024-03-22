const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

//routers
router.post("/add-transaction", addTransaction);
router.post("/delete-transaction", deleteTransaction);
router.post("/edit-transaction", editTransaction);
router.post("/get-transaction", getAllTransaction);

module.exports = router;
