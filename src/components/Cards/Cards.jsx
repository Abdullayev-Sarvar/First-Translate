import React from 'react'
import CardFirst from '../../assets/img/Card1.png'
import CardSecond from '../../assets/img/Card2.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cards = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardFirst,
      link: '/design'
    },
    {
      id: 2,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardSecond,
      link: '/design'
    },
    {
      id: 3,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardFirst,
      link: '/design'
    },
    {
      id: 4,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardSecond,
      link: '/design'
    },
    {
      id: 5,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardFirst,
      link: '/design'

    },
    {
      id: 6,
      date: 'NOV 23 2022',
      title: t('card1.title'),
      description: t('card1.description'),
      image: CardSecond,
      link: '/design'
    }
  ]
  
  return (
    <div>
      <div className="container">
        <div className="flex flex-col py-36 Cards-wrapper">
          <div className='btns py-24'>
            <ul className='flex items-center gap-12 Cards-list'>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b1")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b2")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b3")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b4")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b5")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b6")}</button>
              <button className='text-[18px] text-[#424242] font-bold'>{t("b7")}</button>
            </ul>
          </div>
          <div className='flex flex-wrap justify-center gap-5 Cards'>
          {cardData.map((card) => (
            <div key={card.id} className="flex flex-col Card">
              <img style={{ width: '560px' }} src={card.image} alt={card.title} />
              <div className="w-[560px] flex flex-col gap-3">
                <span className="text-[14px] text-[#424242] font-semibold pt-4">{card.date}</span>
                <strong className="text-[24px] text-[#D05270] font-semibold leading-7">{card.title}</strong>
                <p className="text-[16px] leading-5 font-normal text-[#424242]">
                  {card.description}
                </p>
                <NavLink className="w-[120px] text-[18px] text-[#D05270] font-medium pt-7 navLink" to={card.link}>
                  {t('READ MORE')}
                </NavLink>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards