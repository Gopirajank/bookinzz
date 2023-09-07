import { useState } from "react";
import "./header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const  Header = ({ type }) => {
  const [opendate, setOpenDate] = useState(false)
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openoptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  })

  const handleOption =(name, operation) =>{
    setOptions(prev => {return {
      ...prev,[name]:operation === "i"? options[name] + 1 : options[name] -1,
    }})
  }
  const navigate = useNavigate();

  const handleSearch  = ()=>{
    navigate("/hotels",{ state:{destination,date,options}})
  }
  return (
    <div className="header">
       <div
        className={type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <i className="fa-solid fa-bed"></i>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <i class="fa-solid fa-plane-circle-check"></i>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <i class ="fa-solid fa-car"></i>
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <i class="fa-solid fa-mountain"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <i class="fa-solid fa-car"></i>
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (

         <>
         <h1 className="headerTitle">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or
          more with a free Lamabooking account
        </p>
        <button className="headerBtn"> Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <i className="headerIcon fa-solid fa-bed"  ></i>
            <input type="text" placeholder="where are you going" 
            className="headerSearchInput"
            onChange={e=> setDestination(e.target.value)}
            />
          </div> 
          <div className="headerSearchItem">
            <i className="headerIcon fa-solid fa-calendar-days" ></i>
            <span onClick={()=>setOpenDate(! opendate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].startDate,"MM/dd/yyyy")}`}</span> 
            {opendate &&  <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            /> }
          </div>
          <div className="headerSearchItem">
            <i className="headerIcon fa-solid fa-person" ></i>
            <span  onClick={()=>setOpenOptions(!openoptions)} className="headerSearchText">{`${options.adult} adult .
            ${options.children} children .  ${options.room} room`} </span>
             { openoptions && <div className="options">
            <div className="optionItem">
              <span  className="optionText">Adult</span>
              <div className="optionCounter">
              <button className="optionCounterButton" 
              onClick={()=>handleOption("adult","i")}>+</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
              </div>
            </div>
            <div className="optionItem">
              <span  className="optionText">children</span>
              <div className="optionCounter">
              <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
              </div>
            </div>
            <div className="optionItem">
              <span  className="optionText">Room</span>
              <div className="optionCounter">
              <button className="optionCounterButton"  onClick={()=>handleOption("room","i")}>+</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
              </div>
            </div>
            </div>
            }
          </div>
          <div className="headerSearchItem">
           <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Header;
