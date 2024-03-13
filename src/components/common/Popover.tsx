import useOutsideClick from '@/hooks/useOutsideClick'
import { ArrowDown, ArrowDown2 } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface PopoverProps {
  title: string
  placement?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft'
  menuItem: { name: string; url: string }[]
}

const Popover = ({ title, placement = 'bottomRight', menuItem }: PopoverProps) => {
  const { isPopupOpen, ref, togglePopup } = useOutsideClick()
  return (
    <div className='popover-titan' ref={ref}>
      <div className='popover-header__title' onClick={togglePopup}>
        {title && (
          <div className='title-popover'>
            <p>{title}</p>
            <ArrowDown2 size='20' />
          </div>
        )}
      </div>
      {isPopupOpen && (
        <div className={`popover ${placement}`}>
          {menuItem.map((item: { name: string; url: string }, index: number) => (
            <Link to={item.url} key={index} className='popover-item'>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Popover
