import React from 'react';
import { getContent } from '../utils/Utils';

const HomePage = () => {
    const whatUs = getContent('en', 'homePage', 'whatUs');
    const hello = getContent('en', 'homePage', 'hello');

    const whatUsItems = whatUs.map((item, index) =>
        <p key={index} dangerouslySetInnerHTML={{
            __html: item }} />
    )

    return (
        <div>
            <h1>{hello.title}</h1>
            <h3>{hello.header}</h3>
            <div dangerouslySetInnerHTML={{
                __html: hello.text
            }} />
            {whatUsItems}
        </div>
    );
}

export default HomePage;