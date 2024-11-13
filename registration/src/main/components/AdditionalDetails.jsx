import React from "react";

const AdditionalDetails = ({ formData, handleChange }) => {
    return (
        <div>
            <h3>Additional Details</h3>
            <div className="mb-3">
                <input
                    type="text"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Hobbies"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Skills"
                />
            </div>
            <div className="mb-3">
                <textarea
                    name="otherNotes"
                    value={formData.otherNotes}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Other Notes"
                />
            </div>
        </div>
    );
};

export default AdditionalDetails;
