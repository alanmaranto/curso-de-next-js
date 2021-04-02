import { IncomingMessage, ServerResponse } from "node:http";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  response.end(JSON.stringify({ hello: "world" }));
};

export default allAvos;
