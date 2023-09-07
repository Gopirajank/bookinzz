import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/231511385.jpg?k=9731160a93392341b726035b2eac6d0c69671e791c993aa9e9c3d9654bfad482&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from ₹9020</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/163329279.jpg?k=0ae2beeb88ea9c5ded4c6bf3509dd784daa92e7f87a53cfce34d5918bb7324be&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Austin</span>
            <span className="fpPrice">Starting from ₹12040</span>
            <div className="fpRating">
              <button>9.3</button>
              <span>Exceptional</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/253749297.jpg?k=5bf104cf45eb535bf0265975783e71366dd1646c20113a57b9221ea7b5afc20d&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Four Seasons Hotel</span>
            <span className="fpCity">Lisbon</span>
            <span className="fpPrice">Starting from ₹8099</span>
            <div className="fpRating">
              <button>8.8</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/204663875.jpg?k=8df0c1a8627a47c3a3951f275516aa10359f3868ea169233ad946662e61c4fe8&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Hilton Garden Inn</span>
            <span className="fpCity">Berlin</span>
            <span className="fpPrice">Starting from ₹10005</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      );
    };

export default FeaturedProperties