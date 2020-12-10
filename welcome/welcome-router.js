const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: `Welcome ${process.env.COHORT} \n`,
		fact: process.env.FUN_FACT || "I Have no fun facts",
	})
})

module.exports = router
