import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext"; // Corrected to UserProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playure",
  description: "A new way to connect and play.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <UserProvider> {/* Correct Provider */}
            {children}
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}