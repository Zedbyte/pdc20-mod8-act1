import React from "react";

const ContactInformation = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <h3>Contact Information</h3>
            <div className="mb-3">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone Number"
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Address"
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="City"
                />
                {errors.city && <small className="text-danger">{errors.city}</small>}
            </div>
        </div>
    );
};

export default ContactInformation;
