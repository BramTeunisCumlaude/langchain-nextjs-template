import "./globals.css";
import { Public_Sans } from "next/font/google";
import { ActiveLink } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Interflon Chatbot</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:title" content="LangChain + Next.js Template" />
        <meta
          property="og:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="bg-secondary grid grid-rows-[auto,1fr] h-[100dvh]">
          <div className="grid grid-cols-[1fr,auto] gap-2 p-4">
            <div className="flex gap-4 flex-col md:flex-row md:items-center">
              <a
                href="https://interflon.com"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image width={200} height={75} alt="interflon logo" src={"/images/Interflon_logo_horizontal_RGB.png"}  />
              </a>
              <nav className="flex gap-1 flex-col md:flex-row">
                <ActiveLink href="/">Chat</ActiveLink>
              </nav>
            </div>

          </div>
          <div className="bg-background mx-4 relative grid rounded-t-2xl border border-input border-b-0">
            <div className="absolute inset-0">{children}</div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
