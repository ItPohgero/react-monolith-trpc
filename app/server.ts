import { createHonoServer } from "react-router-hono-server/bun";
import { honoApp } from "./server/hono";

export default await createHonoServer({
  app: honoApp(),
});