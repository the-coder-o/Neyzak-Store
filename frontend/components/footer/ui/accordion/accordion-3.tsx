import React from 'react'
import Link from 'next/link'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Accordion3 = () => {
  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>Company</AccordionTrigger>
      <AccordionContent>
        <ul className={'flex flex-col gap-y-[16px]'}>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              About us
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Contact Us
            </Link>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}

export default Accordion3
