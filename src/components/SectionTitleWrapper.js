import React from 'react';


const SectionTitleWrapper = ({ title, subtitle }) => {
    return (
        <div className="section-title-wrapper">
            <h2 className="section-title hightlighting">{title}</h2>
            {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
        </div>
    );
}

export default SectionTitleWrapper;