import React from 'react'
import { useTranslation } from 'react-i18next'

const Details = () => {
    const { t } = useTranslation();
  return (
    <div className='mt-24'>
        <div className="container">
            <div className='detail-wrapper'>
                <div className='flex flex-col gap-10'>
                    <h3 className='text-[42px] leading-10 font-bold text-[#3A0CA3] mb-9 mt-20'>{t("d1")}</h3>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p1")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <h3 className='text-[36px] leading-10 font-bold text-[#3A0CA3] mb-9 mt-20'>{t("d2")}</h3>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p1")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <h3 className='text-[24px] leading-10 font-bold text-[#3A0CA3] mb-9 mt-20'>{t("d3")}</h3>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p1")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                    <p className='text-[24px] text-[#424242] leading-7 font-medium'>{t("p2")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details