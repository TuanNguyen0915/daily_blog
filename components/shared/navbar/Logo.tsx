import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="group">
      <h1 className="text-4xl font-bold transition-all duration-500 group-hover:text-primary">
        Daily
        <span className="text-primary transition-all duration-500 group-hover:text-foreground">
          Blog
        </span>
      </h1>
    </Link>
  )
}

export default Logo
