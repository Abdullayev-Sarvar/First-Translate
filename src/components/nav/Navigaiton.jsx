import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import In from '../../assets/svg/in.svg'
import { useTranslation } from 'react-i18next'

const Navigaiton = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center py-5 nav-wrapper">
          <div className='flex items-center gap-3 logos'>
            <NavLink to='/'>
              <img src={Logo} alt="" />
            </NavLink>
            <NavLink to='/'>
              <img src={In} alt="" />
            </NavLink>
          </div>
          <ul className='flex items-center gap-7'>
            <select defaultValue={i18n.language} onChange={handleChangeLanguage}>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <li>{t("li1")}</li>
            <li>{t("li2")}</li>
            <li>{t("li3")}</li>
            <li>{t("li4")}</li>
            <li>{t("li5")}</li>
            <li>{t("li6")}</li>
            <li>{t("li7")}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigaiton