import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Paths from "./Paths";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
	dsn: "https://cada35584f3bd70bfcccb42383e24cec@o4507097440845824.ingest.us.sentry.io/4507097526108160",
	integrations: [new BrowserTracing()],

	
	tracesSampleRate: 1.0,
});

ReactDOM.render(<Paths />, document.getElementById("root"));
