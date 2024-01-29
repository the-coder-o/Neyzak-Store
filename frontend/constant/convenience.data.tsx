import React from 'react'

import Image from 'next/image'

import LockIcon from '@/assets/general/lock-icon.svg'
import TruckIcon from '@/assets/general/truck-icon.svg'
import MoneyIcon from '@/assets/general/money-icon.svg'
import PhoneIcon from '@/assets/general/phone-icon.svg'

export const ConvenienceData = [
  {
    Convenience1: (
      <div className={'flex h-[130px] items-center gap-[12px] border-r-[2px] border-r-[#EAEAEA] pr-[120px] max-lg:border-none max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:pr-0'}>
        <div>
          <Image width={32} height={32} src={TruckIcon} alt={'TruckIcon'} />
        </div>
        <div className={'flex flex-col gap-[2px] max-lg:items-center max-lg:justify-center'}>
          <h3 className={'text-[18px] font-[500] text-[#121212]'}>Free Shipping</h3>
          <p className={'text-[14px] font-[400] text-[#807E7E]'}>Orders above $200</p>
        </div>
      </div>
    ),
    Convenience2: (
      <div className={'flex h-[130px] items-center gap-[12px] border-r-[2px] border-r-[#EAEAEA] pr-[120px] max-lg:border-none max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:pr-0'}>
        <div>
          <Image width={32} height={32} src={MoneyIcon} alt={'MoneyIcon'} />
        </div>
        <div className={'flex flex-col gap-[2px] max-lg:items-center max-lg:justify-center'}>
          <h3 className={'text-[18px] font-[500] text-[#121212]'}>Money-back</h3>
          <p className={'text-[14px] font-[400] text-[#807E7E]'}>30 day Guarantee </p>
        </div>
      </div>
    ),
    Convenience3: (
      <div className={'flex h-[130px] items-center gap-[12px] border-r-[2px] border-r-[#EAEAEA] pr-[120px] max-lg:border-none max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:pr-0'}>
        <div>
          <Image width={32} height={32} src={PhoneIcon} alt={'PhoneIcon'} />
        </div>
        <div className={'flex flex-col gap-[2px] max-lg:items-center max-lg:justify-center'}>
          <h3 className={'text-[18px] font-[500] text-[#121212]'}>Premium Support</h3>
          <p className={'text-[14px] font-[400] text-[#807E7E]'}>Phone and email support</p>
        </div>
      </div>
    ),
    Convenience4: (
      <div className={'flex h-[130px] items-center gap-[12px] max-lg:border-none max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:pr-0'}>
        <div>
          <Image width={32} height={32} src={LockIcon} alt={'LockIcon'} />
        </div>
        <div className={'flex flex-col gap-[2px] max-lg:items-center max-lg:justify-center'}>
          <h3 className={'text-[18px] font-[500] text-[#121212]'}>Secure Payments</h3>
          <p className={'text-[14px] font-[400] text-[#807E7E]'}>Secured by Stripe</p>
        </div>
      </div>
    ),
  },
]
