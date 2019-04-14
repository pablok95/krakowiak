import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Rooms from '../pages/Rooms';
import Room from '../pages/Room';
import ErrorPage from '../pages/ErrorPage';
import OfferPage from '../pages/OfferPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';


const Page = props => {
    const { lang } = props;

    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <HomePage lang={lang} />} />
                <Route path="/hotel" component={() => <AboutPage lang={lang} />} />
                <Route path="/oferta" component={() => <OfferPage lang={lang} />} />
                <Route path="/kontakt" component={() => <ContactPage lang={lang} />} />
                <Route path="/pokoje" component={() => <Rooms lang={lang} />} />
                <Route path="/pokoje/:pokoj" component={Room} />
                <Route path="/polityka-prywatnosci" component={PrivacyPolicy} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;