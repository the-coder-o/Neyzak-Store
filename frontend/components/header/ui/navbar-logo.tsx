import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import NeyzakLogo from '@/assets/logo/Logo.svg'

const NavbarLogo = () => {
  return (
    <>
      <div>
        <Link href={'/'}>
          <Image width={0} height={0} src={NeyzakLogo} alt={NeyzakLogo} className={'!w-[155px] max-[820px]:!w-[140px]'} />
        </Link>
      </div>
    </>
  )
}

export default NavbarLogo
