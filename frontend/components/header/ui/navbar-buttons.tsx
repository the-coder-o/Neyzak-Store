import React from 'react'

import Link from 'next/link'

import { Search } from 'lucide-react'
import { IoMdLogIn } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'

const NavbarButtons = () => {
  return (
    <div className={'flex items-center gap-5 max-[820px]:hidden'}>
      <Link href={'/'}>
        <Search size={20} />
      </Link>
      <Link href={'/sign-in'}>
        <IoMdLogIn color={'black'} size={22} />
      </Link>
      <Link href={'/'} className={'flex items-center gap-1'}>
        <MdOutlineShoppingBag color={'black'} size={22} />
        <span className={'bg-black rounded-full text-white w-5 h-5 flex items-center justify-center font-bold text-xs'}>2</span>
      </Link>
    </div>
  )
}

export default NavbarButtons
