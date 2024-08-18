import FooterLogo from '../../assets/svg/footerLogo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container'>
      <NavLink className='flex justify-center items-center py-24' to='/'>
        <img src={FooterLogo} alt="" />
      </NavLink>
    </div>
  )
}

export default Footer