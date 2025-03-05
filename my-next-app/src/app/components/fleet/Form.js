'use client';
import Image from 'next/image';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
    company:'', 
    vehicles:'',
    fleetServices: [],
    recaptchaToken: '', 
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);




  const fleetOptions = ['Auto Sales', 'Vehicle Rental', 'Limousine', 'Funeral', 'Other'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        fleetServices: checked
          ? [...prevData.fleetServices, value]
          : prevData.fleetServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };


  // Handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // Validation function
  const validate = () => {
    const tempErrors = {};

    if (!formData.fname) tempErrors.fname = 'First name is required';
    if (!formData.lname) tempErrors.lname = 'Last name is required';
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      tempErrors.phone = 'Phone number must be valid (e.g., +1234567890)';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is invalid';
    if (!formData.company) tempErrors.company = 'Company name is required';
    if (!formData.vehicles) tempErrors.vehicles = 'vehicles number is required';
    if (!formData.fleetServices.length) tempErrors.fleetServices = 'Select at least one fleet service';
    if (!formData.message) tempErrors.message = 'Message is required';
    if (!formData.recaptchaToken) tempErrors.recaptchaToken = 'Please complete the reCAPTCHA';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormTouched(true);

    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
    //   const response = await fetch('https://creekside-car-wash.onrender.com/send-mail', {
      const response = await fetch('http://localhost:5000/send-mail', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || 'Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          fname: '',
          lname: '',
          phone: '',
          email: '',
          company:'', 
          vehicles:'',
          fleetServices: [],
          message: '',
          recaptchaToken: '', 
        });
        setIsFormTouched(false);
      } else {
        toast.error(data.error || 'Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your message. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="fleetForm" className="mx-4 md:mx-12 xl:mx-60 my-24">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <h3 className="exo mb-4 text-[30px] text-[#1f1e1f] xl:text-[40px] text-center">
      Fleet Program Form
      </h3>
<h5 className='exo mb-10 text-md xl:text-xl text-center text-gray-700'>
Bring sparkle to your branded fleet and to our community, while helping preserve the environment. Call us or fill out the form below to learn more. Our team will contact you soon!
</h5>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label className="exo block lg:text-lg mb-2">FIRST NAME <span className='text-red-600'> *</span></label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="exo block lg:text-lg mb-2">LAST NAME <span className='text-red-600'> *</span></label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="exo block lg:text-lg mb-2">YOUR PHONE <span className='text-red-600'> *</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="exo block lg:text-lg mb-2">YOUR EMAIL <span className='text-red-600'> *</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

  {/* Company Name */}
  <div>
          <label className="exo block lg:text-lg mb-2">Company <span className='text-red-600'> *</span></label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            // placeholder="Enter your Company name"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="exo block lg:text-lg mb-2">Number of Vehicles Managed <span className='text-red-600'> *</span></label>
          <input
            type="number"
            name="vehicles"
            value={formData.vehicles}
            onChange={handleChange}
            // placeholder="+91 2929 29xxx"
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          />
          {isFormTouched && errors.vehicles && <p className="text-red-500 text-sm">{errors.vehicles}</p>}
        </div>

 {/* Fleet Services Checkboxes */}
 <div className="md:col-span-2">
          <label className="exo block lg:text-lg mb-2">Fleet Services Provided <span className='text-red-600'>*</span></label>
          {fleetOptions.map((option) => (
  <label key={option} className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      name="fleetServices"
      value={option}
      checked={formData.fleetServices.includes(option)}
      onChange={handleChange}
      className="w-5 h-5 appearance-none border border-gray-400 rounded-sm checked:bg-white transition-all duration-500 checked:border-black checked:before:content-['✔'] checked:before:text-black checked:before:flex checked:before:justify-center checked:before:items-center"
    />
    <span className="text-xl mt-2">{option}</span>
  </label>
))}

          {isFormTouched && errors.fleetServices && <p className="text-red-500 text-sm">{errors.fleetServices}</p>}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="exo block lg:text-lg mb-2">Your Mission <span className='text-red-600'> *</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here....."
            rows={4}
            className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
          ></textarea>
          {isFormTouched && errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div>
          <ReCAPTCHA
            sitekey='6Lf6NeoqAAAAADQ_kBie3V880kFhHDP5dvsuBDW4'
            theme='dark'
            onChange={(token) => setFormData({ ...formData, recaptchaToken: token })}
          />
          {isFormTouched && errors.recaptchaToken && (
            <p className="text-red-500 text-sm">{errors.recaptchaToken}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mx-auto flex flex-col gap-4 items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="montserrat mx-auto text-xl lg:text-xl hover:bg-white bg-[#1f1e1f]  border-2 border-[#1f1e1f]  text-white hover:text-[#1f1e1f] py-4 px-6 rounded-xl"
          >
            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}






