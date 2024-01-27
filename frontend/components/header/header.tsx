'use client'

import React, { useState } from 'react'

import Container from '@/components/container/container'
import NavbarMessages from '@/components/navbar-messages'
import NavbarLogo from '@/components/header/ui/navbar-logo'
import NavbarLinks from '@/components/header/ui/navbar-links'

import { IoIosMenu } from 'react-icons/io'
import NavbarButtons from '@/components/header/ui/navbar-buttons'

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
          <div>
            <NavbarLogo />
          </div>
          <div>
            <NavbarLinks />
          </div>
          <div>
            <NavbarButtons />
          </div>
          <div onClick={handleActive} className={'hidden max-[820px]:block'}>
            <IoIosMenu size={30} color={'black'} />
          </div>
        </header>
      </Container>
    </>
  )
}

export default Header
