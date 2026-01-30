import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/provider";
import StoreProvider from "@/redux/StoreProvider";
import InitUser from "@/InitUser";



export const metadata: Metadata = {
  title: "FreshDrop | 10 minutes Grocery Delivery App",
  description: "10 minutes Grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-green-200 to-white">
        <Provider>
        <StoreProvider>
          <InitUser/>
          {children}
        </StoreProvider>
        
        </Provider>
      </body>
    </html>
  );
}
