import { render } from "preact";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/google.css";
import { App } from "./app.tsx";

render(<App />, document.getElementById("app")!);
