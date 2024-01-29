import React from 'react'
import Link from 'next/link'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Accordion2 = () => {
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Information</AccordionTrigger>
      <AccordionContent>
        <ul className={'flex flex-col gap-y-[16px]'}>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Shipping Policy
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Returns & Refunds
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Cookies Policy
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Frequently asked
            </Link>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}

export default Accordion2
