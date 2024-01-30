'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import Container from '@/components/container/container'

import NotFoundImage from '@/assets/404/404.svg'

export default function NotFound() {
  const router = useRouter()

  return (
    <Container>
      <div className={'flex items-center flex-col gap-[32px] justify-center mt-[228px]'}>
        <div>
          <Image width={93} height={80} src={NotFoundImage} alt={'NotFoundImage'} />
        </div>
        <div className={'flex flex-col gap-[16px] items-center justify-center'}>
          <h3 className={'text-[#121212] text-[54px] font-bold'}>404 – Page not found</h3>
          <p className={'text-[18px] text-[#3E3E59] leading-[30px] w-[540px] text-center'}>The page you're looking for isn't available.Try to search again or use the go back button below.</p>
        </div>
        <div>
          <Button onClick={() => router.push('/')} className={'!bg-[#121212] !px-[20px] !py-[10px]'}>
            Go back home
          </Button>
        </div>
      </div>
    </Container>
  )
}
