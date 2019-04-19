import React from 'react';


const SectionTitleWrapper = ({ title, subtitle }) => {
    return (
        <div className="section-title-wrapper">
            <h2 className="section__title">{title}</h2>
            {subtitle && <h3 className="section__subtitle">{subtitle}</h3>}
        </div>
    );
}

export default SectionTitleWrapper;