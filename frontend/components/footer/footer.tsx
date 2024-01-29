'use client'

import { Accordion } from '@/components/ui/accordion'

import Container from '@/components/container/container'

import FooterBottom from '@/components/footer/ui/footer-bottom'

import Accordion1 from '@/components/footer/ui/accordion/accordion-1'
import Accordion2 from '@/components/footer/ui/accordion/accordion-2'
import Accordion3 from '@/components/footer/ui/accordion/accordion-3'

import FooterSection1 from '@/components/footer/ui/section/footer-section-1'
import FooterSection2 from '@/components/footer/ui/section/footer-section-2'
import FooterSection3 from '@/components/footer/ui/section/footer-section-3'
import FooterSection4 from '@/components/footer/ui/section/footer-section-4'

const Footer = () => {
  return (
    <div className={'bg-[#FAFAFB]'}>
      <Container>
        <div className={'mt-[50px] pt-[72px] pb-[72px] max-[520px]:pb-[20px]'}>
          <div className={'flex justify-between max-[850px]:flex-wrap max-[850px]:gap-x-[30px] max-[520px]:flex-col max-[520px]:gap-y-[20px]'}>
            <FooterSection1 />
            <div className={'flex items-center gap-[120px] max-[850px]:mt-[30px]'}>
              <FooterSection2 />
              <FooterSection3 />
              <FooterSection4 />
              <div className={'hidden max-[520px]:block w-full'}>
                <Accordion type="single" collapsible>
                  <Accordion1 />
                  <Accordion2 />
                  <Accordion3 />
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </Container>
    </div>
  )
}

export default Footer
