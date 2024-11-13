import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AcademicInformation from "./components/AcademicInformation";
import PersonalInformation from "./components/PersonalInformation";
import AdditionalDetails from "./components/AdditionalDetails";
import ContactInformation from "./components/ContactInformation";
import "./Registration.css";

const NavLink = ({ to, label, isActive }) => (
    <li className="nav-item">
        <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
            {label}
        </Link>
    </li>
);

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        studentID: "",
        program: "",
        yearLevel: "",
        gpa: "",
        hobbies: "",
        skills: "",
        otherNotes: ""
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const [step, setStep] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validation functions specific to each step
    const validatePersonalInformation = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateContactInformation = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone Number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateAcademicInformation = () => {
        const newErrors = {};
        if (!formData.studentID) newErrors.studentID = "Student ID is required";
        if (!formData.program) newErrors.program = "Program is required";
        if (!formData.yearLevel) newErrors.yearLevel = "Year Level is required";
        if (!formData.gpa) newErrors.gpa = "GPA is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const steps = [
        { path: "personal-information", label: "Personal Information", component: PersonalInformation, validate: validatePersonalInformation },
        { path: "contact-information", label: "Contact Information", component: ContactInformation, validate: validateContactInformation },
        { path: "academic-information", label: "Academic Information", component: AcademicInformation, validate: validateAcademicInformation },
        { path: "additional-details", label: "Additional Details", component: AdditionalDetails }
    ];

    const handleNext = () => {
        const currentStep = steps[step];
        if (currentStep.validate && currentStep.validate()) {
            const nextStep = step + 1;
            if (nextStep < steps.length) {
                setStep(nextStep);
                navigate(steps[nextStep].path);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAcademicInformation()) { // Only need to validate AdditionalDetails at final submission
            setSubmittedData(formData);
            alert(`Form submitted successfully!\n\nSubmitted Data:\n${JSON.stringify(formData, null, 2)}`);

        }
    };

    return (
        <div className="container mt-5 h-100">
            <div className="row">
                <div className="col-3">
                    <ul className="nav flex-column">
                        {steps.map((stepItem, index) => (
                            <NavLink 
                                key={index} 
                                to={stepItem.path} 
                                label={stepItem.label} 
                                isActive={step === index} 
                                className={`nav-link ${step === index ? "active" : ""}`}
                            />
                        ))}
                    </ul>
                </div>

                <div className="col-9">
                    <div className="tab-content border p-4 bg-light">
                        <Routes>
                            {steps.map((stepItem, index) => (
                                <Route 
                                    key={index} 
                                    path={stepItem.path} 
                                    element={<stepItem.component formData={formData} handleChange={handleChange} errors={errors} />} 
                                />
                            ))}
                        </Routes>
                    </div>

                    <div className="mt-3">
                        {step < steps.length - 1 ? (
                            <button type="button" onClick={handleNext} className="btn btn-primary">
                                Next
                            </button>
                        ) : (
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">
                                Submit
                            </button>
                        )}
                    </div>
                </div>

                {/* {submittedData && (
                    <div className="mt-4">
                        <h5>Submitted Data:</h5>
                        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default RegistrationForm;
