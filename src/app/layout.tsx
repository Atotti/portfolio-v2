import { Metadata } from "next";

import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s｜",
  },
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/feed/atom.xml"
          title="Atom1.0"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed/feed.xml"
          title="RSS2.0"
        />
        <link rel="alternate" type="application/json" href="/feed/feed.json" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
