import { render } from "preact";
import "./reset.css";
import "./index.css";
import { App } from "./app.tsx";

render(<App />, document.getElementById("app")!);
