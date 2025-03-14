import React from 'react';
import '../../../assets/css/components/colorPicker/colorPicker.scss';

const colors = [
  { id: 'baby-blue', name: 'Baby Blue', value: '#89CFF0' },
  { id: 'pastel-pink', name: 'Pastel Pink', value: '#FFB6C1' },
  { id: 'purple', name: 'Purple', value: '#DDA0DD' },
  { id: 'mint-green', name: 'Mint Green', value: '#98FF98' },
  { id: 'yellow', name: 'Yellow', value: '#FFE4B5' },
  { id: 'lavender', name: 'Lavender', value: '#E6E6FA' },
  { id: 'soft-yellow', name: 'Soft Yellow', value: '#FFFACD' },
  { id: 'peach', name: 'Peach', value: '#FFE5B4' },
  { id: 'lilac', name: 'Lilac', value: '#D8B4E2' }
];

const ColorPicker = ({ value, onChange, error }) => {
  return (
    <div className="color-picker">
      <div className="colors-list">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`color-option ${value === color.name ? 'selected' : ''}`}
            onClick={() => onChange(color.name)}
          >
            <div
              className="color-circle"
              style={{ backgroundColor: color.value }}
            >
              {value === color.name && <i className="fas fa-check"></i>}
            </div>
            <span className="color-name">{color.name}</span>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ColorPicker; 