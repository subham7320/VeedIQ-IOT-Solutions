import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CountryCode from "../../Data/CountryCode.json";
import { useEffect } from 'react';

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    useEffect(() => {
        // Initialize EmailJS with the public key
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
    }, []);

    const submitContactForm = async (data) => {
        setLoading(true);
        try {
            // Verify environment variables are loaded
            if (!process.env.REACT_APP_SERVICE_ID || 
                !process.env.REACT_APP_TEMPLATE_ID || 
                !process.env.REACT_APP_PUBLIC_KEY) {
                throw new Error('Missing environment variables');
            }

            const templateParams = {
                from_name: `${data.firstname} ${data.lastname}`,
                from_email: data.email,
                phone: `${data.countrycode} ${data.phoneNo}`,
                interest: data.interestedIn,
                message: data.message,
                to_email: 'care.veediq@gmail.com'  
            };

            const response = await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams
            );

            console.log('Success:', response);
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for reaching out! We\'ll get back to you shortly.'
            });
            reset();
        } catch (error) {
            console.error('Error details:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        }
        setLoading(false);
    };


    const inputClass = `w-full px-4 py-3 rounded-lg bg-slate-800/50 
        border border-slate-700/50 
        focus:border-blue-500 focus:ring-1 focus:ring-blue-400 
        text-gray-200 outline-none
        transition-all duration-300 hover:border-blue-400/50`;
    
    const labelClass = "text-sm font-medium text-gray-300 block mb-1.5";
    const errorClass = "text-red-400 text-sm mt-1";

    return (
        <form className='space-y-6' onSubmit={handleSubmit(submitContactForm)}>
            <div className='grid md:grid-cols-2 gap-6'>
                <div>
                    <label className={labelClass} htmlFor='firstname'>First Name</label>
                    <input  
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='Enter first name'
                        className={inputClass}
                        {...register("firstname", {required: true})}
                    />
                    {errors.firstname && (
                        <p className={errorClass}>Please enter your name</p>
                    )}
                </div>

                <div>
                    <label className={labelClass} htmlFor='lastname'>Last Name</label>
                    <input  
                        type='text'
                        name='lastname'
                        id='lastname'
                        className={inputClass}
                        placeholder='Enter Last name'
                        {...register("lastname")}
                    />
                </div>
            </div>

            <div>
                <label className={labelClass} htmlFor='email'>Email Address</label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    className={inputClass}
                    placeholder='Enter email address'
                    {...register("email", {required: true})}
                />
                {errors.email && (
                    <p className={errorClass}>Please enter your email address</p>
                )}
            </div>

            <div>
                <label className={labelClass} htmlFor='phonenumber'>Phone Number</label>
                <div className='grid grid-cols-[140px_1fr] gap-4'>
                    <select
                        name='dropdown'
                        id="dropdown"
                        className={`${inputClass} cursor-pointer`}
                        {...register("countrycode", {required: true})}
                    >
                        {CountryCode.map((element, index) => (
                            <option key={index} value={element.code}>
                                {element.code} - {element.country}
                            </option>
                        ))}
                    </select>
                    
                    <input
                        type='number'
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='12345 67890'
                        className={inputClass}
                        {...register("phoneNo", {
                            required: {value: true, message: "Please enter Phone Number"},
                            maxLength: {value: 10, message: "Invalid Phone Number"},
                            minLength: {value: 8, message: "Invalid Phone Number"}
                        })}
                    />
                </div>
                {errors.phoneNo && (
                    <p className={errorClass}>{errors.phoneNo.message}</p>
                )}
            </div>

            <div>
                <label className={labelClass} htmlFor='interestedIn'>I'm Interested In</label>
                <select
                    name='interestedIn'
                    id="interestedIn"
                    className={`${inputClass} cursor-pointer`}
                    {...register("interestedIn", {required: true})}
                >
                    <option value="">Select an option</option>
                    <option value="full-home">Smart Home Solutions</option>
                    <option value="security">Smart Security Systems</option>
                    <option value="lighting">Industrial IOT</option>
                    <option value="climate">Vehicle Intelligence</option>
                    <option value="entertainment">Cloud Integration</option>
                    <option value="consultation">General Consultation</option>
                </select>
                {errors.interestedIn && (
                    <p className={errorClass}>Please select your area of interest</p>
                )}
            </div>

            <div>
                <label className={labelClass} htmlFor='message'>Tell us about your automation needs</label>
                <textarea 
                    name='message'
                    id='message'
                    rows="5"
                    className={`${inputClass} resize-none`}
                    placeholder='Describe your ideal smart automation setup or specific requirements...'
                    {...register("message", {required: true})}
                />
                {errors.message && (
                    <p className={errorClass}>Please describe your requirements</p>
                )}
            </div>

            {submitStatus.message && (
                <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                }`}>
                    {submitStatus.message}
                </div>
            )}
                
            <button
                type='submit'
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white 
                    bg-gradient-to-r from-blue-600 to-purple-600 
                    hover:from-blue-500 hover:to-purple-500
                    focus:ring-2 focus:ring-blue-400
                    transform hover:scale-105 transition-all duration-300
                    flex items-center justify-center gap-2
                    ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/20'}`}
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Get VeedIQ Consultation
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactUsForm;