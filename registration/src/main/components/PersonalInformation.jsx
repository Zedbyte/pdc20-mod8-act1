import React from "react";

const PersonalInformation = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <h3>Personal Information</h3>
            <div className="mb-3">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name"
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name"
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="form-control"
                />
                {errors.dateOfBirth && <small className="text-danger">{errors.dateOfBirth}</small>}
            </div>
            <div className="mb-3">
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
            </div>
        </div>
    );
};

export default PersonalInformation;
