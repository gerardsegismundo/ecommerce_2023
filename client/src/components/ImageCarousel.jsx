import { useSpringCarousel } from 'react-spring-carousel'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'
import CarouselItem from './CarouselItem'
import useResponsiveSlideAmount from '../utils/hooks/useResponsiveSlideAmount'

import products from '../assets/data/products'

const ImageCarousel = () => {
  const slideAmount = useResponsiveSlideAmount()

  const trendingProducts = products.filter(product => product.isTrending)

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    initialActiveItem: 1,
    slideType: 'fluid',
    slideAmount,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 35,
    withLoop: true,
    items: trendingProducts.map(data => ({
      id: data._id,
      renderItem: <CarouselItem props={data} />
    }))
  })

  return (
    <div className='image-carousel'>
      <div className='container'>
        <h3 className='trending'>Trending</h3>
      </div>
      <div className='container'>{carouselFragment}</div>
      <button className='prev-btn' onClick={slideToPrevItem}>
        <ChevLeft />
      </button>
      <button className='next-btn' onClick={slideToNextItem}>
        <ChevRight />
      </button>
    </div>
  )
}

export default ImageCarousel
