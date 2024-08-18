import React from 'react'
import Hero from '../../assets/img/banner.png'
import Twitter from '../../assets/svg/twitter.svg'
import linkedIn from '../../assets/svg/linkedIn.svg'
import Medium from '../../assets/svg/medium.svg'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center gap-3 py-16 banner-wrapper">
          <div className='w-[635px] flex flex-col gap-6'>
            <h2 className='text-[52px] leading-10 font-bold text-[#D05270]'>{t("h2")}</h2>
            <span className='text-[52px] leading-10 font-medium text-[#424242]'>{t("bSpan")}</span>
            <p className='text-[18px] leading-5 font-normal text-[#424242]'>{t("bp")}</p>
            <div className='flex gap-4'>
              <NavLink className='flex items-center gap-6 px-12 py-3 bg-[#47ACDF]' to='/'>
                <img src={Twitter} alt="" />
                <p className='text-[12px] text-[white] leading-3'>TWITTER</p>
              </NavLink>
              <NavLink className='flex items-center gap-6 px-12 py-3 bg-[#1275B1]' to='/'>
                <img src={linkedIn} alt="" />
                <p className='text-[12px] text-[white] leading-3'>LINKEDIN</p>
              </NavLink>
              <NavLink className='flex items-center gap-6 px-12 py-3 bg-[#000000]' to='/'>
                <img src={Medium} alt="" />
                <p className='text-[12px] text-[white] leading-3'>MEDIUM</p>
              </NavLink>
            </div>
          </div>
          <img style={{width: '400px'}} src={Hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner