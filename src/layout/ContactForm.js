import React, { Component } from 'react';
import {getContent} from '../utils/Utils';
import {contactUsContent} from '../content/contactUsContent';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLastName: '',
            phone: '',
            email: '',
            message: '',
            agreement: false,
        }
    }

    handleCheckboxClick = (e) => {
        this.setState({agreement: !this.state.agreement});
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if (name === 'agreement') {
            this.setState({
                agreement: !this.state.agreement,
            });
            return;
        }

        this.setState({
            [name]: value,
        });
    }

    handleFocus = (e) => {
        e.currentTarget.nextElementSibling.classList.add('focus');
    }

    handleBlur = (e) => {
        e.currentTarget.nextElementSibling.classList.remove('focus');
    }

    handleSumbmit = (e) => {
        e.preventDefault();
    }

    render() {
        const content = getContent(contactUsContent, this.props.lang);

        return (
            <div className="contact-form col-10 offset-1 col-md-12 offset-md-0 col-lg-10 offset-lg-1">
                <form onSubmit={this.handleSumbmit}>
                    <div className="row form-row">
                        <div className="col-12 col-md-4 form-items-group">
                            <label className="form-label" htmlFor="firstLastName">{content.labelFirstLastNameText}</label>
                            <input className="form-item" type="text" id="firstLastName" onChange={this.handleChange} name="firstLastName" value={this.state.name} />
                        </div>
                        <div className="col-12 col-md-4 form-items-group">
                            <label className="form-label" htmlFor="phone">{content.labelPhoneText}</label>
                            <input className="form-item" type="text" id="phone" onChange={this.handleChange} name="phone" value={this.state.phone} />
                        </div>
                        <div className="col-12 col-md-4 form-items-group">
                            <label className="form-label" htmlFor="email">{content.addressEmail}</label>
                            <input className="form-item" type="text" id="email" onChange={this.handleChange} name="email" value={this.state.email} />
                        </div>
                    </div>

                    <div className="row form-row">
                        <div className="col-12 form-items-group">
                            <label className="form-label" htmlFor="message">{content.labelMessageText}</label>
                            <textarea className="form-item" id="message" onChange={this.handleChange} name="message" value={this.state.message} rows="5"></textarea>
                        </div>
                    </div>

                    <div className="row form-row">
                        <div className="col-12 form-items-group form-agreement-group">
                            <input checked={this.state.agreement} name="agreement" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} type="checkbox" id="agreement" />

                            <div onClick={this.handleCheckboxClick}
                                className={!this.state.agreement ? 'agreement-checkbox' : 'agreement-checkbox active'}>
                                {this.state.agreement && <i className="fas fa-check"></i>}
                            </div>
                            <label className="form-label" htmlFor="agreement">{content.labelAgreement}</label>
                        </div>
                    </div>

                    <button className="btn-1">
                        {content.btnText1}
                        <div className="btn-with-arrow"><i className="arrow"></i></div>
                    </button>
                </form>
            </div>
        );
    }
}

export default ContactForm;