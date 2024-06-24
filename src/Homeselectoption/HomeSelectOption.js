import React, { useState } from 'react';
import { FaTv, FaNewspaper, FaPodcast, FaYoutube } from 'react-icons/fa';
import { FaRadio } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";



const HomeSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('tv-news');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderIcon = (option) => {
    switch (option) {
      case 'tv-news':
        return <FaTv size={20} className="select-icon" />;
      case 'radio':
        return <FaRadio size={20} className="select-icon" />;
      case 'publications':
        return <FaNewspaper size={20} className="select-icon" />;
      case 'podcasts':
        return <FaPodcast size={20} className="select-icon" />;
      case 'youtube':
        return <FaYoutube size={20} className="select-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="select-station-drop">
      <div className="select-container">
        {renderIcon(selectedOption)}
        <select value={selectedOption} onChange={handleChange} className="select-box">
          <option value="tv-news">TV News</option>
          <option value="radio">Radio</option>
          <option value="publications">Publications</option>
          <option value="podcasts">Podcasts</option>
          <option value="youtube">YouTube</option>
        </select>
        <div className="select-tv-icon">
          <IoIosArrowDown  size={20} />
        </div>
      </div>
    </div>
  );
};

export default HomeSelectOption;
