import React from 'react';


const SectionTitle = ({ title }) => {
    return (
        <h2
            className="section-title"
            style={{
                after: {
                    maxWidth: '100px'
                }
            }}>
            {title}
        </h2>
    );
}

export default SectionTitle;