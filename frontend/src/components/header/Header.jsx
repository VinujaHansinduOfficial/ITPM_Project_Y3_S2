import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import enUS from 'date-fns/locale/en-US';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

// Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const datePickerRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : Math.max(prev[name] - 1, 0),
    }));
  };

  const handleSearch = () => {
    if (!destination.trim()) {
      alert("Please enter a destination.");
      return;
    }
    navigate("/hotels", { 
      state: { 
        destination: destination.trim(), 
        date, 
        options 
      } 
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <h1 className="headerTitle">Explore World With Us</h1>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faSearch} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Destination input"
            />
          </div>

          <div className="headerSearchItem" ref={datePickerRef}>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
              role="button"
              tabIndex={0}
              aria-label="Select dates"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="datePicker"
                locale={enUS}
                minDate={new Date()}
              />
            )}
          </div>

          <div className="headerSearchItem" ref={optionsRef}>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
              role="button"
              tabIndex={0}
              aria-label="Select room options"
            >
              {`${options.adult} adult${options.adult !== 1 ? 's' : ''} · 
                ${options.children} ${options.children === 1 ? 'child' : 'children'} · 
                ${options.room} room${options.room !== 1 ? 's' : ''}`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adults</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 1}
                      aria-label="Decrease adults"
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                      aria-label="Increase adults"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children <= 0}
                      aria-label="Decrease children"
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                      aria-label="Increase children"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                      disabled={options.room <= 1}
                      aria-label="Decrease rooms"
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                      aria-label="Increase rooms"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headerSearchItem">
            <button 
              className="headerBtn" 
              onClick={handleSearch}
              aria-label="Search hotels"
            >
              <FontAwesomeIcon icon={faSearch} className="searchBtnIcon" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string
};

export default Header;