import PropTypes from "prop-types";
import { useState } from "react";
import { CopySvg } from "./icons/icons";


const ClipboardButton = ({ copy }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(copy)
            .then(() => {
                setTooltipVisible(true);
                setTimeout(() => setTooltipVisible(false), 2000)
            })
    };

    return <div className="relative inline-block">
        <button onClick={handleCopyToClipboard}
            title="Copy email address to clipboard"
            className="text-[1.1em] inline-flex items-center justify-center"
        >
            <CopySvg />
        </button>
        {tooltipVisible && (
            <div className="absolute -top-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-700 text-white text-sm rounded shadow-lg">
                Copied!
            </div>

        )}
    </div>
}

ClipboardButton.propTypes = {
    copy: PropTypes.string.isRequired,
}

export default ClipboardButton;