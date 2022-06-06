const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    return res.status(200).render("../views/pagina.ejs");
  } 
  catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
    
  }
});

module.exports = router;
