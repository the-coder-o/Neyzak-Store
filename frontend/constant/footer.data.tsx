import React from 'react'

import Image from 'next/image'

import EmailIcon from '@/assets/footer/email.svg'
import TwitterIcon from '@/assets/footer/twitter.svg'
import FaceBookIcon from '@/assets/footer/facebook.svg'
import InstagramIcon from '@/assets/footer/instagram.svg'

export const FooterData = [
  {
    Icon1: (
      <span className={'!bg-[#fff] !shadow-sm rounded-full p-[9px] cursor-pointer'}>
        <Image width={18} height={18} src={FaceBookIcon} alt={'FaceBookIcon'} />
      </span>
    ),
  },
  {
    Icon2: (
      <span className={'!bg-[#fff] !shadow-sm rounded-full p-[9px] cursor-pointer'}>
        <Image width={18} height={18} src={InstagramIcon} alt={'InstagramIcon'} />
      </span>
    ),
  },
  {
    Icon3: (
      <span className={'!bg-[#fff] !shadow-sm rounded-full p-[9px] cursor-pointer'}>
        <Image width={18} height={18} src={TwitterIcon} alt={'TwitterIcon'} />
      </span>
    ),
  },
  {
    Icon4: (
      <span className={'!bg-[#fff] !shadow-sm rounded-full p-[9px] cursor-pointer'}>
        <Image width={18} height={18} src={EmailIcon} alt={'EmailIcon'} />
      </span>
    ),
  },
]
