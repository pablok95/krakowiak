import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Rooms from '../pages/Rooms';
import Room from '../pages/Room';
import ErrorPage from '../pages/ErrorPage';
import OfferPage from '../pages/OfferPage';


const Page = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/hotel" component={AboutPage} />
                <Route path="/oferta" component={OfferPage} />
                <Route path="/kontakt" component={ContactPage} />
                <Route path="/pokoje" component={Rooms} />
                <Route path="/pokoje/:pokoj" component={Room} />
                <Route component={ErrorPage} />
            </Switch>
        </main>
    );
}

export default Page;