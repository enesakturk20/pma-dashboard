import "./globals.css";
import Sidebar from "./components/layout/sidebar/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>
        <Sidebar />
        <div style={{ marginLeft: "240px", padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
