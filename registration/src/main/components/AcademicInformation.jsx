import React from "react";

const AcademicInformation = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <h3>Academic Information</h3>
            <div className="mb-3">
                <input
                    type="text"
                    name="studentID"
                    value={formData.studentID}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Student ID"
                />
                {errors.studentID && <small className="text-danger">{errors.studentID}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Program"
                />
                {errors.program && <small className="text-danger">{errors.program}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="yearLevel"
                    value={formData.yearLevel}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Year Level"
                />
                {errors.yearLevel && <small className="text-danger">{errors.yearLevel}</small>}
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    step="0.01"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="GPA"
                />
                {errors.gpa && <small className="text-danger">{errors.gpa}</small>}
            </div>
        </div>
    );
};

export default AcademicInformation;
