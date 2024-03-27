import Footer from "@/components/shared/footer/Footer"
import Navbar from "@/components/shared/navbar/Navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <section className="flex-1 max-xl:p-4">{children}</section>
      <Footer />
    </main>
  )
}

export default RootLayout
