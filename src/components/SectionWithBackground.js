import React from 'react';


const SectionWithBackground = ({content, image}) => {
    return (
        <section className="section-with-background section-padding" style={{backgroundImage: `url("${image}")`}}>
            <div className="container">
                {content}
            </div>
        </section>
    );
}

export default SectionWithBackground;