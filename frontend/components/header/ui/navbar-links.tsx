import React from 'react'

import Link from 'next/link'

import { Dropdown, Space } from 'antd'

import { items } from '@/constant/pages.data'

import { FaCaretDown } from 'react-icons/fa'

const NavbarLinks = () => {
  return (
    <div className={'max-[820px]:hidden'}>
      <ul className={'flex items-center gap-[60px]'}>
        <li>
          <Link href={'/'} className={'text-[14px] text-black font-[500]'}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/'} className={'text-[14px] text-black font-[500]'}>
            Shop
          </Link>
        </li>
        <li>
          <Link href={'/'} className={'text-[14px] text-black font-[500]'}>
            Product
          </Link>
        </li>
        <li>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()} className={'flex items-center gap-2 cursor-pointer'}>
              <Space className={'text-[14px] text-black font-[500]'}>Pages</Space>
              <FaCaretDown color={'black'} />
            </a>
          </Dropdown>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
