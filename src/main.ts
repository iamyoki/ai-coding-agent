#!/usr/bin/env node
import "dotenv/config";
import { render } from "ink";
import { createElement } from "react";
import { App } from "./ui/app.tsx";

render(createElement(App));
