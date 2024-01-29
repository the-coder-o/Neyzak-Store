import React from 'react'
import Link from 'next/link'

const FooterSection3 = () => {
  return (
    <ul className={'flex flex-col gap-y-[16px] max-[520px]:hidden'}>
      <li className={'text-[14px] text-[#121212] font-[500]'}>Information</li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Shipping Policy
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Returns & Refunds
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Cookies Policy
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] hover:text-black'}>
          Frequently asked
        </Link>
      </li>
    </ul>
  )
}

export default FooterSection3
