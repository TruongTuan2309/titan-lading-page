import { useCheckDevice } from '@/hooks/useCheckDevice'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const BgGradientAnimation = () => {
  const controls = useAnimation()
  const sequence = async () => {
    await controls.start('initial')
    await controls.start('drop')
    await controls.start('bounce')
    await controls.start('rollLeft')
    await controls.start('rollRight')
  }
  const { isMobile } = useCheckDevice()
  const widthCircle = isMobile ? 150 : 300
  const heightBg = isMobile ? -600 : -900
  const variantTwitter = {
    initial: {
      y: heightBg,
      opacity: 0,
      x: window.innerWidth / 2 - widthCircle,
      rotate: -16
    },
    drop: {
      y: 0,
      opacity: 1,
      x: window.innerWidth / 2 - widthCircle,
      rotate: -16,
      transition: {
        duration: 3
      }
    },
    bounce: {
      y: [0, -50, 0],
      opacity: 1,
      rotate: -32,
      transition: {
        duration: 1
      }
    },
    rollLeft: {
      y: 0,
      x: 0,
      rotate: -180,
      transition: {
        duration: 2
      }
    },
    rollRight: {
      x: window.innerWidth - 17 - widthCircle - widthCircle,
      rotate: 32,
      transition: {
        duration: 2
      }
    }
  }
  const variantTelegram = {
    initial: {
      y: -900,
      opacity: 0,
      x: window.innerWidth / 2,
      rotate: -12
    },
    drop: {
      y: 0,
      opacity: 1,
      x: window.innerWidth / 2,
      rotate: 30,
      transition: {
        duration: 2.5
      }
    },
    bounce: {
      y: [0, -50, 0],
      opacity: 1,
      rotate: -32,
      transition: {
        duration: 1
      }
    },
    rollLeft: {
      y: 0,
      x: widthCircle,
      rotate: -180,
      transition: {
        duration: 2
      }
    },
    rollRight: {
      x: window.innerWidth - 17 - widthCircle,
      rotate: 45,
      transition: {
        duration: 2
      }
    }
  }
  useEffect(() => {
    sequence()
  }, [controls])
  return (
    <div className='bg-gradient-animation'>
      <motion.a
        href='https://twitter.com/TitanSmartTrade'
        target='_blank'
        initial='initial'
        animate={controls}
        variants={variantTwitter}
        className='circle twitter'
        style={{ width: widthCircle, height: widthCircle }}
      >
        Twitter
      </motion.a>
      <motion.a
        href='https://t.me/titanglobaleng'
        target='_blank'
        initial='initial'
        animate={controls}
        variants={variantTelegram}
        className='circle telegram'
        style={{ width: widthCircle, height: widthCircle }}
      >
        Telegram
      </motion.a>
    </div>
  )
}

export default BgGradientAnimation
