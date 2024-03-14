import { IconClose, LogoTitan } from '@/assets'
import ButtonTitan from '@/components/common/ButtonTitan'
import Popover from '@/components/common/Popover'
import SelectHeaderMobile from '@/layouts/SelectHeaderMobile'
import { ArrowDown2, HambergerMenu } from 'iconsax-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const menuSolutions = [
    { name: 'Bots Trading', url: '' },
    { name: 'Smart Trade', url: '' },
    { name: 'Titan Cover', url: '' },
    { name: 'TizTaz', url: '' }
  ]
  const menuBuilds = [
    { name: 'DeFi', url: '' },
    { name: 'DAOs', url: '' },
    { name: 'NFTs', url: '' }
  ]
  const menuCommunity = [
    { name: 'Titan Blog', url: '' },
    { name: 'Events', url: '' },
    { name: 'Community Hub', url: '' }
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='header-titan '>
      <div className='header-titan__content'>
        <Link to=''>
          <LogoTitan />
        </Link>
        <div className='menu-header'>
          <Link to='' className='text-link'>
            Home
          </Link>
          <Link to='' className='text-link'>
            About Titan
          </Link>
          <Popover title='Solutions' menuItem={menuSolutions} />
          <Popover title='Build' menuItem={menuBuilds} />
          <Popover title='Community' menuItem={menuCommunity} />
        </div>
        <ButtonTitan className='text-sm'>Explore</ButtonTitan>
        <div className='icon-mobile' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconClose className='icon-close' /> : <HambergerMenu color='#FFFFFF' size='40' />}
        </div>
      </div>
      <div className={`menu-mobile ${isOpen ? 'active' : ''}`}>
        <Link to='' className='text-link'>
          Home
        </Link>
        <Link to='' className='text-link'>
          About Titan
        </Link>
        <SelectHeaderMobile menu={menuSolutions} title='Solutions' />
        <SelectHeaderMobile menu={menuBuilds} title='Build' />
        <SelectHeaderMobile menu={menuCommunity} title='Community' />
        <div className='footer-menu'>
          <ButtonTitan>Explore</ButtonTitan>
        </div>
      </div>
    </header>
  )
}

export default Header
