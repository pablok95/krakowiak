import React from 'react';

const HeaderTitle = props => {
    const {title, description, imageSrc} = props;
    return (
        <header>
            <img src={imageSrc} alt="header_image" />
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}

export default HeaderTitle;