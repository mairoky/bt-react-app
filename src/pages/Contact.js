import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <div className="text-center mt-3 p-4">
                <h2 className="fw-bold text-uppercase">Contact</h2>
            </div>
            <div className='form-container'>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profession" className="form-label">Profession</label>
                        <input type="text" className="form-control" id="profession" placeholder="Enter Your Profession" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="question" className="form-label">Write Your Question</label>
                        <textarea className="form-control" id="question" rows={3} defaultValue={""} />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;