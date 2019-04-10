import React from 'react';
import { getContent } from '../utils/Utils';
import {homePageContent} from '../content/HomePage';

const HomePage = props => {
    
    const content = getContent(homePageContent, props.lang);
    const {welcome} = content;

    return (
        <div>
            {welcome.text1}
            <b>{welcome.text2}</b>
        </div>
    );
}

export default HomePage;