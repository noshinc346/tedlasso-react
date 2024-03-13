import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='landingPage'>
      <div className='leftLanding'>
        <div className='landingLogo' >
        <h1 className='serviceName'>&Chill</h1>
        </div>
        <p className='serviceLine'>Stream your favorite content online.</p>
        <Link to="/home">
          <button className='watchButton'>WATCH</button>
        </Link>
        <p className='serviceCancelLine'>Watch anywhere. Cancel anytime.</p>
      </div>
      <div className='rightLanding'>
        <div className="marquee-container">
          
          <div className="marquee1">
            <div className="image-container">
              <img className="landingImg" src="https://www.movieposters.com/cdn/shop/products/c907d641f525f91a4587653ddec04eec_0d89ae3f-2bbd-4fe1-afce-0b43a7c71d5a_500x.jpg?v=1573595112" alt="Image 1" />
              <img className="landingImg" src="https://m.media-amazon.com/images/I/91WlTjCgu4L._AC_UF894,1000_QL80_.jpg" alt="Image 1" />
              <img className="landingImg" src="https://m.media-amazon.com/images/I/71x1RHSaEhL._AC_UF894,1000_QL80_.jpg" alt="Image 2" />
              <img className="landingImg" src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f676b5811234c887ca62_top%20gun%20maverick-min.png" alt="Image 3" />
              <img className="landingImg" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-grinch-2018-b-movie-poster-prints.jpg" alt="Image 3" />
              <img className="landingImg" src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" alt="Image 3" />
              <img className="landingImg" src="https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_fullxfull.2904647259_ilg7.jpg" alt="Image 3" />
            </div>
          </div>
          <div className="marquee2">
            <div className="image-container">
              <img className="landingImg" src="https://cdn10.bigcommerce.com/s-o6vy9cv/products/185204/images/180637/95e2c494-04a5-5f6d-b572-24d012c811fe__82923.1692401769.1280.1280.jpg?c=2" alt="Image 3" />
              <img className="landingImg" src="https://m.media-amazon.com/images/I/91Xmg5sQQZL.jpg" alt="Image 3" />
              <img className="landingImg" src="https://bestsimilar.com/img/movie/thumb/e8/26443.jpg" alt="Image 3" />
              <img className="landingImg" src="https://i.ebayimg.com/images/g/2IMAAOSw1XZjGbD1/s-l1600.jpg" alt="Image 1" />
              <img className="landingImg" src="https://ae01.alicdn.com/kf/S0bc4a6be4e414fac9baf6d4799f11a32n/The-Conjuring-Horror-Movie-Print-Art-Canvas-Poster-For-Living-Room-Decor-Home-Wall-Picture.jpg" alt="Image 2" />
              <img className="landingImg" src="https://i.ebayimg.com/images/g/b1oAAOSw0dpiAGqk/s-l1600.jpg" alt="Image 3" />
              <img className="landingImg" src="https://m.media-amazon.com/images/I/71QROsENugL.jpg" alt="Image 3" />

            </div>
          </div>
          <div className="marquee3">
            <div className="image-container">
              <img className="landingImg" src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2919271/5944675/MOVEB46211__19379.1679590452.jpg?c=2" alt="Image 1" />
              <img className="landingImg" src="https://images.hola.com/us/images/0276-154ed3dbb861-879c3314f647-1000/vertical-800/bullet-train-poster.jpg" alt="Image 2" />
              <img className="landingImg" src="https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Crazy-Rich-Asians-New-Poster-from-Australia.jpg?ssl=1" alt="Image 3" />
              <img className="landingImg" src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg" alt="Image 1" />
              <img className="landingImg" src="https://m.media-amazon.com/images/I/71EzfKHZu-L._AC_UF894,1000_QL80_.jpg" alt="Image 2" />
              <img className="landingImg" src="https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg" alt="Image 3" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing