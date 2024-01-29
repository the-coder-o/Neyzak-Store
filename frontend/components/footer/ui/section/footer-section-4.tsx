import React from 'react'
import Link from 'next/link'

const FooterSection4 = () => {
  return (
    <ul className={'flex flex-col gap-y-[16px] max-[520px]:hidden'}>
      <li className={'text-[14px] text-[#121212] font-[500]'}>Company</li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] transition hover:text-black'}>
          About us
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] transition hover:text-black'}>
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] transition hover:text-black'}>
          Terms & Conditions
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400] transition hover:text-black'}>
          Contact Us
        </Link>
      </li>
    </ul>
  )
}

export default FooterSection4
