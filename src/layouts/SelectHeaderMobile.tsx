import { ArrowDown2 } from 'iconsax-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface SelectHeaderMobileProps {
  menu: { name: string; url: string }[]
  title: string
}

const SelectHeaderMobile = ({ menu, title }: SelectHeaderMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`select-mobile-header ${isOpen ? 'active' : ''}`}>
      <div className='title-and-icon' onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <ArrowDown2 size='24' color='#FCFCFD' />
      </div>
      <div className={`content`}>
        {menu.map((item, index) => (
          <Link to={item.url} key={index} className='text-link'>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SelectHeaderMobile
