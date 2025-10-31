import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AppLayout from "@/components/AppLayout";

export const metadata: Metadata = {
  title: "Davor Ivo Stier | Zastupnik u Europskom parlamentu",
  description: "Hrvatske vrijednosti, europska snaga. Davor Ivo Stier - zastupnik u Europskom parlamentu, HDZ, EPP.",
  keywords: "Davor Ivo Stier, Europski parlament, HDZ, EPP, Hrvatska, zastupnik, EU politika",
  authors: [{ name: "Davor Ivo Stier" }],
  openGraph: {
    title: "Davor Ivo Stier | Zastupnik u Europskom parlamentu",
    description: "Hrvatske vrijednosti, europska snaga",
    url: "https://www.stier.hr",
    siteName: "Davor Ivo Stier",
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davor Ivo Stier",
    description: "Hrvatske vrijednosti, europska snaga",
    creator: "@DavorIvoStier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className="antialiased transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
