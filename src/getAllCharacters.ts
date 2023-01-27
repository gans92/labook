import { Request, Response } from "express";
import connection from "./connection";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, orderBy, orderType, page } = req.query;

    const offset = 5 * (Number(page) - 1);

    debugger;

    const characters = await connection("character")
      .where("name", "LIKE", `%${name}%`)
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);

    res.send(characters);
  } catch (error) {
    res.status(500).end();
  }
}
