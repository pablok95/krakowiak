import React from 'react';


const SectionWithBackground = ({content}) => {
    return (
        <section className="section-with-background">
            <div className="container">
                {content}
            </div>
        </section>
    );
}

export default SectionWithBackground;