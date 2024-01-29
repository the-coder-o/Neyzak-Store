import React from "react";
import { FooterData } from "@/constant/footer.data";

const FooterItem = () => {
  return (
    <div className={'hidden max-[520px]:block'}>
      <div className={'flex items-center justify-center gap-[16px]'}>
        {FooterData?.map((Icons: any, index) => (
          <div key={index} className={'flex items-center justify-center gap-[16px]'}>
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

export default FooterItem;