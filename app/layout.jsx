import NavBar from "../components/Navbar";
import {
  Roboto
} from 'next/font/google'

export const metadata = {
  title: "Next.js Zero",
  description: "A simple starter project for Next.js",
  keywords: "nextjs, react, starter, template",
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "regular", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
