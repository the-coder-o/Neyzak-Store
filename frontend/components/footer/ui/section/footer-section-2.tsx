import React from 'react'
import Link from 'next/link'

const FooterSection2 = () => {
  return (
    <ul className={'flex flex-col gap-y-[16px] max-[520px]:hidden'}>
      <li className={'text-[14px] text-[#121212] font-[500]'}>Shop</li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          My account
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Login
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Wishlist
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Cart
        </Link>
      </li>
    </ul>
  )
}

export default FooterSection2
