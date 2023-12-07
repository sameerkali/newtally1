import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

const OwlCarousel = () => {
  return (
    <CCarousel>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="\images\banner\1.png"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="\images\banner\2.png"
          alt="slide 2"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="\images\banner\3.png"
          alt="slide 3"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="\images\banner\4.png"
          alt="slide 4"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="\images\banner\5.png"
          alt="slide 5"
        />
      </CCarouselItem>
    </CCarousel>
  )
}

export default OwlCarousel
