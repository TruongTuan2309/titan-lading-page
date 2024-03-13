import { ArrowRightVeto } from '@/assets'

interface OurProductItemProps {
  item: {
    name: string
    description: string
  }
  rotate?: '-rotate-8' | 'rotate-8'
}

const OurProductItem = ({ item, rotate = '-rotate-8' }: OurProductItemProps) => {
  return (
    <div className='out-product-item'>
      <div className='item'>
        <p>{item.name}</p>
        <ArrowRightVeto />
      </div>
      <div className={`description ${rotate}`}>
        <div className='description__border-content'>
          <div className='content'>
            <div className='text-content'>
              <p className='label'>{item.name}</p>
              <p className='desc'>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProductItem
