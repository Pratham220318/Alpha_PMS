import "./globals.css";

export const metadata = {
  title: "Portfolio Management System",
  description: "Portfolio Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}