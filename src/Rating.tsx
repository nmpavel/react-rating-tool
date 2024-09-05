import React, { useState, FC, CSSProperties, MouseEvent } from 'react';

interface RatingProps {
  count?: number;                // Number of rating stars
  defaultValue?: number;         // Default rating value
  onChange?: (value: number) => void; // Callback function on rating change
  style?: CSSProperties;         // Custom styles
  className?: string;            // Custom CSS class
  inactiveColor?: string;        // Color for inactive stars
  activeColor?: string;          // Color for active stars
  hoverColor?: string;           // Color for hovered stars
  size?: string;                 // Size of the stars
}

const Rating: FC<RatingProps> = ({
  count = 5,
  defaultValue = 0,
  onChange,
  style,
  className,
  inactiveColor = '#dcdcdc',
  activeColor = '#ffd700',
  hoverColor = '#ffd700',
  size = '24px',
}) => {
  const [rating, setRating] = useState<number>(defaultValue);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (event: MouseEvent<SVGSVGElement>, index: number) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - left;
    const newRating = index + clickX / width;

    setRating(newRating);
    onChange && onChange(newRating);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ display: 'flex', ...style }} className={className}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          onClick={(event) => handleClick(event, index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: 'pointer',
            width: size,
            height: size,
            fill: index < hoverRating ? hoverColor : (index < rating ? activeColor : inactiveColor),
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .288l2.833 8.718H24l-7.416 5.289 2.834 8.72L12 17.271l-7.417 5.744 2.833-8.72L0 9.006h9.167z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
