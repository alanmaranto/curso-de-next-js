import { IncomingMessage, ServerResponse } from "node:http";
import DB from "@database";
import enablePublicAccess from '@cors'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  try {
    await enablePublicAccess(request, response);
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ data: allEntries, length }));
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end(
      JSON.stringify({ length: 0, data: [], error: "Something went wrong" })
    );
  }
};

export default allAvos;
