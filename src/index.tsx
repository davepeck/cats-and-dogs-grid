import { createRoot } from "react-dom/client";
import { App } from "./app";

// use the modern react 18 api
const app = document.getElementById("app");
const root = createRoot(app!);
root.render(<App />);
