import React from 'react';

const HeaderTitle = props => {
    const { title, description, imageSrc } = props;
    return (
        <header className="header-title">
            <img className="image" src={imageSrc} alt="header_image" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="content">
                            <h1 className="title section-title">{title}</h1>
                            {description && <p className="description" dangerouslySetInnerHTML={{
                                __html: description
                            }} />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderTitle;