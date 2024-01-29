import React from 'react'

import Container from '@/components/container/container'
import { ConvenienceData } from '@/constant/convenience.data'

const Convenience = () => {
  return (
    <Container>
      <div className={'mt-[100px]'}>
          {ConvenienceData?.map((Convenience: any, index) => (
            <div key={index} className={'flex items-center justify-between flex-wrap gap-y-2 max-lg:justify-between max-lg:gap-5 max-[320px]:justify-center'}>
              <div>{Convenience?.Convenience1}</div>
              <div>{Convenience?.Convenience2}</div>
              <div>{Convenience?.Convenience3}</div>
              <div>{Convenience?.Convenience4}</div>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Convenience
