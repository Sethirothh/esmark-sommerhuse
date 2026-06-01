import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sommerhuse på Esmark",
  description: "Find og book sommerhuse på Esmarks platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-['Segoe_UI'] bg-slate-300 text-slate-900`}
    >
      <body className="min-h-full flex flex-col bg-slate-300">{children}</body>
    </html>
  );
}
