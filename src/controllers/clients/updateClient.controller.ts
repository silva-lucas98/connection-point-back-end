import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IClientUpdate } from "../../interfaces/clients.interface";
import updateClientService from "../../services/clients/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  const clientId: string = req.params.id;
  const client: IClientUpdate = req.body;

  const updatedClient = await updateClientService(clientId, client);

  return res.status(200).json(instanceToPlain(updatedClient));
};

export default updateClientController;
