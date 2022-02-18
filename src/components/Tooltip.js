// Importing styles
import "../styles/tooltip.css";

// Importing the Prop-types module
import PropTypes from 'prop-types'


/**
 * Tooltip Component which is accepting position, text, and children in props. And displaying the Tooltip on hovering the children element
 * 
 * If no position or text is provided to tooltip, then we use the bottom as the default position, and "this is bottom tooltip" as the default tooltip text.
 * 
 * Tooltip Valid Positions : "bottom" | "top" | "left" | "right"
 */
const Tooltip = ({ position = "bottom", text = "this is bottom tooltip", children }) => {
    return (
        // We are assigning tooltip as the main class, and tooltip with position as the variable class to handle different position of tooltips
        <div className={`tooltip tooltip-${position}`}>

            {/* Rendering the children of Tooltip Components here */}
            {children}

            {/* Loading the Tooltip Text over here */}
            <span className="tooltip-text">{text}</span>
        </div>
    );
}

// Here we are defining the propTypes to ensure that props passed to Tooltip are valid types.
Tooltip.propTypes = {
    position: PropTypes.string, //position should be of type string
    text: PropTypes.string //text should be of type string
}

// Exporting the Tooltip Component
export default Tooltip;