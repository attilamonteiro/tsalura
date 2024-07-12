// src/controller/PetController.ts
import { Request, Response } from "express";
import TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../tipos/enum/EnumEspecie";

let listaDePets: Array<TipoPet> = [];
let idCounter = 1;

const geraId = () => idCounter++;

export default class PetController {
  criaPet(req: Request, res: Response) {
    const { adotado, especie, nome } = <TipoPet>req.body;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ erro: "Espécie inválida." });
    }

    const novoPet: TipoPet = new TipoPet(
      geraId(),
      nome,
      especie,
      adotado,
    );
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }

  listaPets(req: Request, res: Response) {
    return res.status(200).json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { adotado, especie, nome } = req.body as TipoPet;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }

    pet.nome = nome;
    pet.especie = especie;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }
    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  }
}
