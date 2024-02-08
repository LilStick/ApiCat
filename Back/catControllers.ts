import {NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";

/**
 * @swagger
 * tags:
 *  name: Facts
 *  description: Des facts sur les chat (et parfois les chevaux)
 */

export class CatController{
  /**
   * @swagger
   * /catfact:
   *   get:
   *     summary: Obtient un fact sur les chats.
   *     description: Obtient un(1) fact sur les chats aléatoirement.
   *     tags: [Facts]
   *     
   *     responses:
   *       200:
   *         description: Succès. Obtient un fact sur les chats.
   *       400:
   *         description: Requête incorrecte.
   */
    public async getCatFact(req : Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(
                `https://cat-fact.herokuapp.com/facts/random?animal_type=cat`
              );
            const data = response.data;
            res.json(data);
        } catch(error) {
            res
                .status(500)
                .json({ error : "Erreur lors de la recuperation d'un cat fact"})
        }
    }
/**
   * @swagger
   * /horsefact:
   *   get:
   *     summary: Obtient un fact sur les chevaux.
   *     description: Obtient un(1) fact sur les chevaux aléatoirement.
   *     tags: [Facts]
   *     
   *     responses:
   *       200:
   *         description: Succès. Obtient un fact sur les chevaux.
   *       400:
   *         description: Requête incorrecte.
   */
    public async getHorseFact(req : Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(
                `https://cat-fact.herokuapp.com/facts/random?animal_type=horse`
              );
            const data = response.data;
            res.json(data);
        } catch(error) {
            res
                .status(500)
                .json({ error : "Erreur lors de la recuperation d'un horse fact"})
        }
    }
/**
   * @swagger
   * /tenfact:
   *   get:
   *     summary: Obtient dix fact sur les chats.
   *     description: Obtient dix(10) fact sur les chats aléatoirement.
   *     tags: [Facts]
   *     
   *     responses:
   *       200:
   *         description: Succès. Obtient dix fact sur les chats.
   *       400:
   *         description: Requête incorrecte.
   */
    public async getTenFacts(req : Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(
                `https://cat-fact.herokuapp.com/facts/random?amount=10`
              );
            const data = response.data;
            res.json(data);
        } catch(error) {
            res
                .status(500)
                .json({ error : "Erreur lors de la recuperation de dix fact"})
        }
    }

}

   