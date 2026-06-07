import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Byte Me | Tech förening i Uppsala",
  description: "Välkommen till vår förening tech förening i Uppsala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
