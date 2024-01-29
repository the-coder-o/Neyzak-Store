import React from "react";
import Link from "next/link";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Accordion1 = () => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Shop</AccordionTrigger>
      <AccordionContent>
        <ul className={'flex flex-col gap-y-[16px]'}>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              My account
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Login
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link href={'/'} className={'text-[#3E3E59] text-[14px] font-[400]'}>
              Cart
            </Link>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Accordion1;