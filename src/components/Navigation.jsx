import Link from "next/link"

const Navigation = () => {
  return (
    <div className="bg-black text-white">

      <Link href={'/about'}>About</Link>
    </div>
  )
}
export default Navigation