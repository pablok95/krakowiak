import React from 'react';


const SectionWithBackground = ({ content, imageSrc}) => {
    return (
        <section id="section-with-background" className="main-padding" style={{ backgroundImage: `url("${imageSrc}")`}}>
            <div className="container">
                {content}
            </div>
        </section>
    );
}

export default SectionWithBackground;