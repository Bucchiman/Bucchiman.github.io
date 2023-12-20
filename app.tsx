import { React } from "https://dev.jspm.io/react@17.0.2";
import { render } from "https://dev.jspm.io/react-dom@17.0.2";

const App = () => {
    return <h1>Hello, Deno + React!</h1>;
};


render(<App />, document, getElementById("root"));
