import './globals.css'
import { Nunito } from 'next/font/google'

// 修改顶部名称
export const metadata = {
  title: 'AirApp',
  description: 'AirApp',
}
// 修改字体
const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
