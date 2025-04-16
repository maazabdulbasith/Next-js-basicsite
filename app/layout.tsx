// app/layout.tsx
import "@/styles/globals.css";
export const metadata = { title: "Without Simbian vs With Simbian" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-cover bg-center">
        {children}
      </body>
    </html>
  );
}
