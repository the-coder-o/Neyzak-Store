import React from "react";
import Image from "next/image";

import NeyzakLogo from "@/assets/logo/Logo.svg";
import { FooterData } from "@/constant/footer.data";

const FooterSection1 = () => {
  return (
      <div className={'flex flex-col gap-[24px]'}>
        <div className={'flex flex-col gap-[16px]'}>
          <Image width={155} height={30} src={NeyzakLogo} alt={'NeyzakLogo'} />
          <p className={'text-[16px] text-[#605F5F] w-[310px]'}>Phosf luorescently engage worldwide method process shopping.</p>
        </div>
        <div className={'flex items-center gap-[16px] max-[520px]:hidden'}>
          {FooterData?.map((Icons: any, index) => (
            <div key={index} className={'flex items-center gap-[16px]'}>
              {Icons?.Icon1}
              {Icons?.Icon2}
              {Icons?.Icon3}
              {Icons?.Icon4}
            </div>
          ))}
        </div>
    </div>
  );
};

export default FooterSection1;