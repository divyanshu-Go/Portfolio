// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Divyanshu Sharma | Portfolio",
  description: "Personal portfolio showcasing projects, skills, and experience.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-[Poppins] relative min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
