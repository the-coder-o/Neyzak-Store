import React, { useEffect, useState } from 'react'

import { Languages } from 'lucide-react'

import FooterItem from '@/components/footer/ui/footer-item'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

const FooterBottom = () => {
  const [currentYear, setCurrentYear] = useState<string>('')

  useEffect(() => {
    const getCurrentYear = () => {
      const year = new Date().getFullYear()
      setCurrentYear(year.toString())
    }

    getCurrentYear()
  }, [])

  return (
    <div className={'flex items-center max-[520px]:flex-col-reverse max-[520px]:gap-[16px] justify-between border-t-[#CBCBCB] border-t-[2px] pt-[24px] pb-[29px] max-[520px]:border-none'}>
      <p className={'max-[520px]:text-center'}>© {currentYear} Nayzak Design</p>
      <FooterItem />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={'flex items-center gap-1'}>
              <Languages className={'w-4 !text-[14px] !text-[#121212]'} /> English
            </NavigationMenuTrigger>
            <NavigationMenuContent className={'flex flex-col items-center justify-center'}>
              <NavigationMenuLink className={'!w-[100px] cursor-pointer text-center'}>Russian</NavigationMenuLink>
              <NavigationMenuLink className={'!w-[100px] cursor-pointer text-center'}>Uzbek</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default FooterBottom
