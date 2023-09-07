import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className="SearchItem" > 
    <img 
     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/433778736.jpg?k=7a8242660fddc85cbc6c98410b867e3ae9cf0a4967943ef14830bfe8dd21015f&o=&hp=1"
     alt=""
     className="siImg"
    />
    <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹1512</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};


export default SearchItem