import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { CTX } from "./context/main";
import { appRouter } from "./router";

export function honoApp() {
	const app = new Hono();
	app.get("/.well-known/*", (c) => c.text("Not found", 404));
	app.use(
		"/trpc/*",
		trpcServer({
			router: appRouter,
			createContext: CTX,
		}),
	);
	return app;
}
