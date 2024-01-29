'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Container from '@/components/container/container'

import { Eye, EyeOff } from 'lucide-react'

import GoogleIcon from '@/assets/auth/google.png'
import FaceBookIcon from '@/assets/auth/facebook.png'
import NeyzakSecondLogo from '@/assets/general/second-logo.svg'

const SignIn = () => {
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleTogglePassword = (e: any) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <div className={'grid grid-cols-2 max-md:grid-cols-1 relative'}>
      <div>
        <Link href={'/'}>
          <Image width={40} height={40} src={NeyzakSecondLogo} alt={'NeyzakSecondLogo'} className={'absolute top-10 left-10 max-md:top-5 max-md:left-5'} />
        </Link>
        <img src="https://i.ibb.co/6N2GQw7/signin.png" alt="SignInBgImage" className={'w-full h-[100vh] max-md:h-[42vh] object-cover'} />
      </div>
      <div className={'mt-[220px] max-md:mt-5 max-md:mb-5 w-[500px] ml-[100px] max-[1180px]:ml-[10px] max-lg:w-auto'}>
        <Container>
          <div className={'flex flex-col gap-[32px]'}>
            <div className={'flex flex-col gap-[10px]'}>
              <h1 className={'text-style'}>Sign In</h1>
              <p className={'text-[16px] flex items-center gap-1'}>
                Don’t have an account yet?
                <Link href={'/sign-up'} className={'font-[400]'}>
                  Sign up
                </Link>
              </p>
            </div>
            <form autoComplete="off" className={'flex flex-col gap-[32px] max-md:gap-[25px] max-[465px]:gap-[10px]'}>
              <input
                autoComplete="off"
                placeholder={'Your username or email'}
                className={
                  '!outline-none focus:!bg-transparent w-[456px] max-lg:w-full focus:!border-b-[#000] focus:!transition focus:placeholder:!text-[#000] !border-b-2 !border-b-[#CBCBCB] pb-[13px] placeholder:text-[#A7A7A7]'
                }
              />
              <div className={'relative'}>
                <div onClick={handleTogglePassword}>{showPassword ? <Eye className={'absolute right-2 cursor-pointer'} /> : <EyeOff className={'absolute right-2 cursor-pointer'} />}</div>
                <input
                  autoComplete="off"
                  placeholder={'Password'}
                  type={showPassword ? 'password' : 'text'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={
                    '!outline-none w-[456px] max-lg:w-full focus:!border-b-[#000] focus:!transition focus:placeholder:!text-[#000] !border-b-2 !border-b-[#CBCBCB] pb-[13px] placeholder:text-[#A7A7A7]'
                  }
                />
              </div>
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
                  Sign In from google
                </Button>
                <Button size={'lg'} className={'!bg-[#121212] text-[15px] w-full flex items-center gap-1 max-[430px]:text-[14px]'}>
                  <Image width={20} height={20} src={FaceBookIcon} alt={'FaceBookIcon'} />
                  Sign In from facebook
                </Button>
              </div>
              <Button size={'xl'} className={'!bg-[#121212] text-[22px] max-lg:!w-full max-[940px]:text-[18px]'}>
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SignIn
