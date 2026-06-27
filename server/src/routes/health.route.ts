import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SmartKhata API Connected",
  });
});

export default router;