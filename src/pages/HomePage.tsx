import { IMAGE } from '@/assets'
import ButtonTitan from '@/components/common/ButtonTitan'
import BgGradientAnimation from '@/components/HomePage/BgGradientAnimation'
import OurProductItem from '@/components/HomePage/OurProductItem'
import httpRequest from '@/services/http'
import { Chart, Coin1, Convertshape2, Mobile } from 'iconsax-react'
import QRCode from 'qrcode.react'
import { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
const HomePage = () => {
  const listPartner = [
    { id: 1, img: IMAGE.partnerWarppipe },
    { id: 2, img: IMAGE.partnerBitget },
    { id: 3, img: IMAGE.partnerNavi },
    { id: 4, img: IMAGE.partnerMorphis },
    { id: 5, img: IMAGE.partnerDesig },
    { id: 6, img: IMAGE.partnerMovex },
    { id: 7, img: IMAGE.partnerWisp },
    { id: 8, img: IMAGE.partnerChibikius },
    { id: 9, img: IMAGE.partnerCarbon },
    { id: 10, img: IMAGE.partnerBelaunch },
    { id: 11, img: IMAGE.partnerGiroSwap }
  ]
  const ourProducts = [
    {
      name: 'Trading Bots',
      description: 'Provides a range of automatic high-performance trading bots for Futures trading on CEXs.'
    },
    {
      name: 'Terminal trading',
      description:
        'Terminal trading is an easy-to-use interface for executing trades, managing assets, and accessing performance metrics.'
    },
    {
      name: 'Arbitrages & High-Frequency Trading',
      description: 'Provides advanced algorithms that allow users to trade price differences between CEXs & DEXs.'
    },
    {
      name: 'De-fi',
      description:
        'Introducing $TES, governance token of titantrading.io on Blast. $TES is the main payment and reward method. De-fi offers staking of $TES and other assets to earn yields on crypto assets.'
    },
    {
      name: 'Titan Cover & DAO',
      description:
        "Titan Cover is the first blockchain position insurance model that helps users minimize trading risk by providing a hedging solution to protect trading positions in the crypto currency market.  Development of a DAO to allow users to participate in platform governance using.  Release of Titan's NFT collection, offering benefits to owners."
    },
    {
      name: 'Tiztaz - The one & true AI trading assistant',
      description:
        'Tiztaz is the genuine trading-AI assistant designed exclusively for the Titan Trading Platform. Tiztaz is your go-to companion for seamless and informed trading.'
    },
    {
      name: 'Social-fi',
      description:
        'A marketplace using a contribute-to-earn model where users can contribute as an algorithm maker or trading expert.'
    },
    {
      name: 'TITAN DEX',
      description:
        'Developing leverage and futures trading on DEX via smart contracts, offering enhanced trading options and increasing profit potential for users.'
    }
  ]
  const [countImage, setCountImage] = useState(0)
  const [countImageIphone, setCountImageIphone] = useState(0)
  const imageScroll = [
    { image: IMAGE.titanWallet1, style: '' },
    { image: IMAGE.titanWallet2, style: 'mover-titan-wallet-1' },
    { image: IMAGE.titanWallet2, style: 'hidden' }
  ]
  const imageIphone = [
    { image: IMAGE.backgroundIphone, style: '' },
    { image: IMAGE.iphone1, style: 'position-iphone' },
    { image: IMAGE.iphone2, style: '' }
  ]
  const fromScrollRef = useRef<HTMLParagraphElement>(null)
  const viaScrollRef = useRef<HTMLParagraphElement>(null)
  const toScrollRef = useRef<HTMLParagraphElement>(null)
  const [email, setEmail] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      if (fromScrollRef.current && viaScrollRef.current && toScrollRef.current && window.innerWidth > 1200) {
        const fromPositionTop = fromScrollRef.current.getBoundingClientRect().top
        if (fromPositionTop > 0) {
          setCountImage(0)
        } else {
          setCountImage(1)
          const viaPositionTop = viaScrollRef.current.getBoundingClientRect().top
          const toPositionTop = toScrollRef.current.getBoundingClientRect().top
          if (viaPositionTop < 0) {
            setCountImage(2)
            setCountImageIphone(1)
          } else {
            setCountImageIphone(0)
          }
          if (toPositionTop < 0) {
            setCountImageIphone(2)
          }
        }
      } else {
        setCountImageIphone(2)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async () => {
    const payload = {
      email: email
    }
    const response = await httpRequest.post('/guest/getting-in-touch', payload)
    if (response.data.success) {
      setEmail('')
    }
  }

  return (
    <div className='home-titan'>
      <div className='introduce'>
        <div className='text-introduce'>
          <h1>Building a Better Financial Future Through Technology</h1>
          <div className='description'>
            <p>
              Go beyond the limit and shorten the path to success. Titan Trading supports experiences for power users,
              new consumers, and everyone in between.
            </p>
            <div className='audit'>
              <span>Audit by:</span>
              <span>PeckShield</span>
            </div>
            <div className='audit'>
              <span>Smart Contract:</span>
              <span></span>
            </div>
            <div className='button-action'>
              <ButtonTitan>Explore</ButtonTitan>
              <ButtonTitan variant='outline'>Read Docs</ButtonTitan>
            </div>
          </div>
        </div>
        <div className='image-gif'>
          <img src={IMAGE.homeGift} alt='' className='w-full' />
        </div>
      </div>
      <Marquee className='slider-marquee'>
        {listPartner?.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt='' />
          </div>
        ))}
      </Marquee>
      <div className='overview'>
        <div className='top'>
          <div className='left'>
            <p ref={fromScrollRef} className='title'>
              Overview About Titan
            </p>
            <div className='description'>
              <p ref={viaScrollRef}>
                TITAN is an innovative blockchain-based cryptocurrency investment technology company founded in November
                2020.
              </p>

              <p ref={toScrollRef}>
                It aims to enhance the transparency and accessibility of the financial market, working towards ensuring
                everyone can enjoy the benefits of a fair and connected financial ecosystem.
              </p>
            </div>
          </div>
          <div className='right'>
            <div className={`titan-wallet ${imageScroll[countImage].style}`}>
              <img src={imageScroll[countImage].image} loading='lazy' alt='' />
            </div>
          </div>
        </div>
        <div className='background-gradient-and-qrcode'>
          <div className='background-gradient'>
            <div className={`iphone ${imageIphone[countImageIphone].style}`}>
              <div className={`content `}>
                <img src={imageIphone[countImageIphone].image} alt='' />
              </div>
            </div>
            <div className='gradient-black'>
              <p className='title'>Our Products</p>
              <div className='qr-code'>
                <div className='left'>
                  <p className='label'>Get Titan</p>
                  <p className='desc'>Scan this QR code to download Titan in your phone.</p>
                </div>
                <div className='right'>
                  <QRCode
                    value='https://play.google.com/store/apps/details?id=org.titan.app&hl=en-EN'
                    size={100}
                    level={'H'}
                    includeMargin={true}
                  />
                </div>
              </div>
              <div className='button-action'>
                <ButtonTitan>Explore</ButtonTitan>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='list-out-product'>
        {ourProducts?.map((item, index) => (
          <OurProductItem key={index} item={item} rotate={index % 2 === 0 ? '-rotate-8' : 'rotate-8'} />
        ))}
      </div>
      <div className='business-goal'>
        <p className='title'>Business Goal</p>
        <div className='row'>
          <div className='item'>
            <Convertshape2 size='64' color='#dcf537' variant='Bulk' />
            <div className='right'>
              <p className='title'>User Convenience</p>
              <p className='desc'>Building a system that anyone can trade</p>
            </div>
          </div>
          <div className='item'>
            <Coin1 size='64' color='#dcf537' variant='Bulk' />
            <div className='right'>
              <p className='title'>Token Economy</p>
              <p className='desc'>
                Build a diverse token economy ecosystem including investment, payment, loan, and compensation.
              </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='item'>
            <Mobile size='64' color='#dcf537' variant='Bulk' />
            <div className='right'>
              <p className='title'>One-Stop Service</p>
              <p className='desc'>
                Customers can receive a variety of services in one place. Such as investment, trading, rewards, trading
                bot services and more.
              </p>
            </div>
          </div>
          <div className='item'>
            <Chart size='64' color='#dcf537' variant='Bulk' />
            <div className='right'>
              <p className='title'>Building AI Trading System</p>
              <p className='desc'>Build an AI trading system through continuous trading strategy development</p>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-home'>
        <BgGradientAnimation />
        <div className='form-email'>
          <p className='text-sub'>GET THE DETAIL</p>
          <p className='join-titan'>Join with Titan</p>
          <p className='desc'>Subscribe to our newsletter and get updates from the Titan ecosystem straight to your</p>
          <div className='input-email'>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonTitan size='large' onClick={handleSubmit}>
              Subscribe
            </ButtonTitan>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
