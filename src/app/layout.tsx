import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Admin dashboard for booking management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <aside className="w-64 bg-white shadow-md hidden md:block">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">Admin</h2>
            </div>
            <nav className="mt-4">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Dashboard
              </a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Bookings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Analytics
              </a>
            </nav>
          </aside>
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
