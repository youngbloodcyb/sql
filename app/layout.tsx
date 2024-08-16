import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "./globals.css";
import { Main } from "@/components/craft";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "SQL Demo",
  description: "Learning how to use SQL",
  metadataBase: new URL("https://cameron.so"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Main className="flex flex-col">{children}</Main>
          <p className="hidden md:block fixed bottom-4 right-4 text-xs">
            Demo by Skill Issue Studio
          </p>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
