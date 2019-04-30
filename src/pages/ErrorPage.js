import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <section id="error-page" className="main-padding page-margin">
            <div className="container">
                <div className="content">
                    <h3 className="section-title">404</h3>
                    <p className="text">Nie znaleziono strony. Strona o podanym adresie nie istnieje.</p>
                    <Link to="/" className="link" title="Strona główna">Wróć do strony głównej</Link>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;