import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";
import enablePublicAccess from '@cors'

const avoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await enablePublicAccess(request, response)
    const db = new DB();
    const avoId = request.query.id as string
    const entry = await db.getById(avoId);
  
    response.status(200).json(entry)
  } catch (error) {
    console.error(error)
    response.status(404).end()
  }
};

export default avoDetail;
