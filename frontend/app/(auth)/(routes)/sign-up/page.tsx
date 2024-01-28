import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Container from '@/components/container/container'

import GoogleIcon from '@/assets/auth/google.png'
import FaceBookIcon from '@/assets/auth/facebook.png'
import NeyzakSecondLogo from '@/assets/general/second-logo.svg'

const SignUp = () => {
  return (
    <div className={'grid grid-cols-2 max-md:grid-cols-1 relative'}>
      <div>
        <Link href={'/'}>
          <Image width={40} height={40} src={NeyzakSecondLogo} alt={'NeyzakSecondLogo'} className={'absolute top-10 left-10 max-md:top-5 max-md:left-5'} />
        </Link>
        <img src="https://i.ibb.co/yyzPZn4/signup.png" alt="SignInBgImage" className={'w-full h-[100vh] max-md:h-[42vh] object-cover'} />
      </div>
      <div className={'mt-[220px] max-md:mt-5 max-md:mb-5 w-[500px] ml-[100px] max-[1180px]:ml-[10px] max-lg:w-auto'}>
        <Container>
          <div className={'flex flex-col gap-[32px]'}>
            <div className={'flex flex-col gap-[10px]'}>
              <h1 className={'text-style'}>Sign Up</h1>
              <p className={'text-[16px] flex items-center gap-1'}>
                Do you have an account ?
                <Link href={'/sign-in'} className={'font-[400]'}>
                  Sign in
                </Link>
              </p>
            </div>
            <form className={'flex flex-col gap-[32px] max-md:gap-[25px] max-[465px]:gap-[10px]'}>
              <input placeholder={'Your username or email'} className={'!outline-none w-[456px] max-lg:w-full !border-b-2 !border-b-[#CBCBCB] pb-[13px] placeholder:text-[#A7A7A7]'} />
              <input placeholder={'Password'} className={'!outline-none w-[456px] max-lg:w-full !border-b-2 !border-b-[#CBCBCB] pb-[13px] placeholder:text-[#A7A7A7]'} />
              <div className={'flex items-center justify-between'}>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Remember me</Label>
                </div>
                <Link href={'/'} className={'text-[#121212] text-[16px] font-bold max-[430px]:text-[14px]'}>
                  Forgot password?
                </Link>
              </div>
              <div className={'flex items-center justify-between gap-2 max-[940px]:flex-col max-md:flex-row max-[465px]:flex-col'}>
                <Button size={'lg'} className={'!bg-[#121212] text-[15px] w-full flex items-center gap-1 max-[430px]:text-[14px]'}>
                  <Image width={20} height={20} src={GoogleIcon} alt={'GoogleIcon'} />
                  Sign Up from google
                </Button>
                <Button size={'lg'} className={'!bg-[#121212] text-[15px] w-full flex items-center gap-1 max-[430px]:text-[14px]'}>
                  <Image width={20} height={20} src={FaceBookIcon} alt={'FaceBookIcon'} />
                  Sign Up from facebook
                </Button>
              </div>
              <Button size={'xl'} className={'!bg-[#121212] text-[22px] max-lg:!w-full max-[940px]:text-[18px]'}>
                Sign Up
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SignUp
