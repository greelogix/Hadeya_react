import React from 'react';
import '../../../assets/css/components/fontSelector/fontSelector.scss';

const fonts = [
  { id: 'montserrat', name: 'Montserrat', value: "'Montserrat', sans-serif" },
  { id: 'poppins', name: 'Poppins', value: "'Poppins', sans-serif" },
  { id: 'raleway', name: 'Raleway', value: "'Raleway', sans-serif" },
  { id: 'lato', name: 'Lato', value: "'Lato', sans-serif" },
  { id: 'nunito', name: 'Nunito', value: "'Nunito', sans-serif" },
  { id: 'open-sans', name: 'Open Sans', value: "'Open Sans', sans-serif" },
];

const FontSelector = ({ value, onChange, error }) => {
  return (
    <div className="font-selector">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`form-select ${error ? 'error' : ''}`}
      >
        <option value="" disabled>Select a font</option>
        {fonts.map((font) => (
          <option
            key={font.id}
            value={font.value}
            style={{ fontFamily: font.value }}
          >
            {font.name}
          </option>
        ))}
      </select>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FontSelector; 