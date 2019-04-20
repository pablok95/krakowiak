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
            <div className="col-10 offset-1 col-md-12 offset-md-0 col-lg-10 offset-lg-1">
                <form id="contact-form" onSubmit={this.handleSumbmit}>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="firstLastName">{content.labelFirstLastNameText}</label>
                            <input className="form-text-input" type="text" id="firstLastName" onChange={this.handleChange} name="firstLastName" value={this.state.name} />
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="phone">{content.labelPhoneText}</label>
                            <input className="form-text-input" type="text" id="phone" onChange={this.handleChange} name="phone" value={this.state.phone} />
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="email">{content.addressEmail}</label>
                            <input className="form-text-input" type="email" id="email" onChange={this.handleChange} name="email" value={this.state.email} />
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12">
                            <label className="form-label" htmlFor="message">{content.labelMessageText}</label>
                            <textarea className="form-textarea" id="message" onChange={this.handleChange} name="message" value={this.state.message} rows="5"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="form-agree-wrapper">
                                <input checked={this.state.agreement} name="agreement" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} type="checkbox" id="agreement" />

                                <div onClick={this.handleCheckboxClick}
                                    className={!this.state.agreement ? 'form-agree-checkbox' : 'form-agree-checkbox active'}>
                                    {this.state.agreement && <i className="fas fa-check"></i>}
                                </div>
                                <label className="form-agree-label" htmlFor="agreement">{content.labelAgreement}</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-1">
                        <div className="btn-text">{content.btnText1}</div>
                        <div className="btn-arrow"><i className="icon-arrow"></i></div>
                    </button>

                    {/* <button className="btn-1">
                        {content.btnText1}
                        <div className="btn-with-arrow"><i className="arrow"></i></div>
                    </button> */}
                </form>
            </div>
        );
    }
}

export default ContactForm;