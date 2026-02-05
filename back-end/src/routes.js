import { Router } from "express";
import produtosController from "./controller/produtosController.js";

const router = Router()

router.post("/produtos", produtosController.store);
router.get("/produtos", produtosController.index);
router.get("/produtos/:id", produtosController.show);
router.put("/produtos/:id", produtosController.update);
router.delete("/produtos/:id", produtosController.delete);

export default  router;