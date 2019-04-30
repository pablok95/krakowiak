import React, { Component } from 'react';
import { getContent } from '../utils/Utils';
import { contactUsContent } from '../content/contactUsContent';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLastName: '',
            phone: '',
            email: '',
            message: '',
            agreement: false,
            sending: false,
            statement: '',

            errors: {
                firstLastName: false,
                phone: false,
                email: false,
                message: false,
                agreement: false,
            }
        }
    }

    patterns = {
        email: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        text: '[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+',
        phone: '^\\d+$',
        textarea: '.+',
    }

    handleCheckboxClick = (e) => {
        this.setState({ agreement: !this.state.agreement });
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

    formValidation = () => {
        let firstLastName = false, phone = false, email = false, message = false, agreement = this.state.agreement;
        let correct = false;

        const firstLastNameReg = new RegExp(this.patterns.text, "gi");
        const phoneReg = new RegExp(this.patterns.phone, "gi");
        const messageReg = new RegExp(this.patterns.textarea, "gi");
        const emailReg = new RegExp(this.patterns.email, "gi");

        if (this.state.firstLastName.length > 4 && firstLastNameReg.test(this.state.firstLastName))
            firstLastName = true;

        if (this.state.phone.length > 8 && phoneReg.test(this.state.phone))
            phone = true;

        if (this.state.email.length > 0 && emailReg.test(this.state.email))
            email = true;

        if (this.state.message.length >= 10 && messageReg.test(this.state.message))
            message = true;

        if (firstLastName && phone && email && message && agreement)
            correct = true;

        return ({
            correct,
            firstLastName,
            phone,
            email,
            message,
            agreement
        });
    }

    resetStatement = () => {
        this.setState({
            statement: '',
        });
    };

    handleSumbmit = (e) => {
        e.preventDefault();
        // alert('wysyłanie formularza nie jest w tej chwili możliwe. Prosimy spróbować ponownie');

        const { firstLastName, email, phone, message, agreement } = this.state;
        const validation = this.formValidation();

        if (validation.correct) {
            // const url = "";

            // const data = {
            //     "person": firstLastName,
            //     "phone": phone,
            //     "email": email,
            //     "content": message,
            //     "agreement": Number(agreement)
            // };

            // fetch(url, {
            //     method: 'POST',
            //     body: JSON.stringify(data)
            // }).then(res => res.json())
            //     .then(response => {
            //         this.setState({
            //             sending: false,
            //             statement: response.message,
            //         });

            //         setTimeout(this.resetStatement, 10000);
            //     })
            //     .catch(error => {
            //         this.setState({
            //             statement: error.message,
            //         })
            //     });

            // Później usunąć
            setTimeout(this.resetStatement, 8000);
            // KONIEC - Później usunąć

            this.setState({
                firstLastName: '',
                email: '',
                phone: '',
                message: '',
                agreement: false,
                sending: true,
                statement: 'Wysyłanie wiadomości',

                errors: {
                    firstLastName: false,
                    email: false,
                    phone: false,
                    message: false,
                    agreement: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    firstLastName: !validation.firstLastName,
                    phone: !validation.phone,
                    email: !validation.email,
                    message: !validation.message,
                    agreement: !validation.agreement,
                }
            })
        }
    }

    handleFocus = (e) => {
        e.currentTarget.nextElementSibling.classList.add('focus');
    }

    handleBlur = (e) => {
        e.currentTarget.nextElementSibling.classList.remove('focus');
    }

    render() {
        const content = getContent(contactUsContent, this.props.lang);
        const errors = content.errors;
        const { firstLastName, email, phone, message, agreement } = this.state.errors;

        return (
            <div className="col-10 offset-1 col-md-12 offset-md-0 col-lg-10 offset-lg-1">
                <form id="contact-form" onSubmit={this.handleSumbmit}>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="firstLastName">{content.labelFirstLastNameText}</label>
                            <input className="form-text-input" type="text" id="firstLastName" onChange={this.handleChange} name="firstLastName" value={this.state.name} />
                            {firstLastName && <div className="error-text-content">{errors.firstLastNameIncorrect}</div>}
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="phone">{content.labelPhoneText}</label>
                            <input className="form-text-input" type="text" id="phone" onChange={this.handleChange} name="phone" value={this.state.phone} />
                            {phone && <div className="error-text-content">{errors.phoneIncorrect}</div>}
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="form-label" htmlFor="email">{content.addressEmail}</label>
                            <input className="form-text-input" type="email" id="email" onChange={this.handleChange} name="email" value={this.state.email} />
                            {email && <div className="error-text-content">{errors.emailIncorrect}</div>}
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12">
                            <label className="form-label" htmlFor="message">{content.labelMessageText}</label>
                            <textarea className="form-textarea" id="message" onChange={this.handleChange} name="message" value={this.state.message} rows="5"></textarea>
                            {message && <div className="error-text-content">{errors.messageIncorrect}</div>}
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
                                {agreement && <div className="error-text-content">{errors.agreementIncorrect}</div>}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-1">
                        <div className="btn-text">{content.btnText1}</div>
                        <div className="btn-arrow"><i className="icon-arrow"></i></div>
                    </button>
                </form>

                {this.state.sending && this.state.statement && <div className="statment-wrapper">Wysyłanie</div>}
            </div>
        );
    }
}

export default ContactForm;