import React from 'react';
import SectionTitleWrapper from './SectionTitleWrapper';

const HeaderTitle = props => {
    const { title, description, imageSrc } = props;
    return (
        <header id="header-title">
            <div className="img-wrapper">
                <img className="image" src={imageSrc} alt="header_image" />
            </div>
            <div className="header-title-content">
                <SectionTitleWrapper title={title} />
                {description && <p className="text" dangerouslySetInnerHTML={{
                    __html: description
                }} />}
            </div>
        </header>
    );
}

export default HeaderTitle;