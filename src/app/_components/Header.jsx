import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-black text-white px-5 py-2 flex gap-5 ">
      <Link href={'/'}>Home</Link>
      <Link href={'/movies'}>MovieList</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/create-movie'}>Add-Movie</Link>

    </div>
  )
}
export default Header