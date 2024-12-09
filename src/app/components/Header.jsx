import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-black text-white px-5 py-2 flex justify-between">
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>

    </div>
  )
}
export default Header