import express from "express";
import { createContact, deleteContact, getContact } from "../services/contact";

const dataSource = "./data/list.txt";
const router = express.Router();

router.get("/contato", async (req, res) => {
  let list = await getContact();

  res.json({ contato: list });
});

router.post("/contato", async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res.json({ error: "Nome precisa ter pelo menos 2 caracteres." });
  }
  await createContact(name);
  res.status(201).json({ contato: name });
});

router.delete("/contato", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json({ error: "Para excluir precisa enviar um nome" });
  }

  await deleteContact(name as string);

  res.json({ contato: name });
});

export default router;
