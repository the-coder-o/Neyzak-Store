'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import Container from '@/components/container/container'
import NavbarMessages from '@/components/navbar-messages'
import NavbarLogo from '@/components/header/ui/navbar-logo'
import NavbarLinks from '@/components/header/ui/navbar-links'
import NavbarButtons from '@/components/header/ui/navbar-buttons'

import { IoIosMenu } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'

const Header = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleActive = () => {
    setActive(true)
  }

  return (
    <>
      <NavbarMessages />
      <Container>
        <header className={'mt-[16px] flex items-center justify-between relative'}>
          <NavbarLogo />
          <NavbarLinks />
          <div>
            <NavbarButtons />
            <div className={'flex items-center gap-2'}>
              <div className={'hidden max-[820px]:block'}>
                <Link href={'/'} className={'flex items-center gap-1'}>
                  <MdOutlineShoppingBag color={'black'} size={22} />
                  <span className={'bg-black rounded-full text-white w-5 h-5 flex items-center justify-center font-bold text-xs'}>2</span>
                </Link>
              </div>
              <div onClick={handleActive} className={'hidden max-[820px]:block'}>
                <IoIosMenu size={30} color={'black'} />
              </div>
            </div>
          </div>
        </header>
      </Container>
    </>
  )
}

export default Header
