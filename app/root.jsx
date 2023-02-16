import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from '~/styles/reset.css'
import header from '~/styles/header.css'
import Header from "./components/Header";

export const meta = () => ({
  charset: "utf-8",
  title: "UpperSoft",
  viewport: "width=device-width,initial-scale=1",
});


export function links() {
  return [{rel: "stylesheet", href: styles}, {rel: "stylesheet", href: header}]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
