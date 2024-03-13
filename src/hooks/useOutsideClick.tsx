import { useEffect, useRef, useState } from 'react'

const useOutsideClick = () => {
  const ref = useRef<any>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleClickOutside = () => {
    setIsPopupOpen(false)
  }

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev)
  }
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return {
    ref,
    isPopupOpen,
    togglePopup
  }
}

export default useOutsideClick
