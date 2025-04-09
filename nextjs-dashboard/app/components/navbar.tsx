import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='h-[6vh] border-b-2 border-[#1E2D3D]'>
            <div className="flex justify-between h-full items-center">
                <div className="flex h-full items-center">
                    <span className="h-full border-r-2 border-[#1E2D3D] py-[15px] pl-[40px] pr-[80px]">delechamp-gabriel</span>
                    <Link href="/" className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom">_hello</Link>
                    <Link href="/about-me" className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom">_about-me</Link>
                    <Link href="/projects" className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom">_projects</Link>
                </div>
                <Link href="/contact" className="h-full border-l-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom">_contact-me</Link>
            </div>
        </nav>
    )
}