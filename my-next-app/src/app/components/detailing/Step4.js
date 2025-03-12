"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css"; // import styles for toasts
import { FaCar } from "react-icons/fa";


export default function ContactForm({selectedAddedServicePrice, selectedAddedService, selectedCarType, selectedPlanPrice, selectedPlan, selectedBookingDate, selectedBookingTime}) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    recaptchaToken: "",

  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
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

    if (!formData.fname) tempErrors.fname = "First name is required";
    if (!formData.lname) tempErrors.lname = "Last name is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be valid (e.g., +1234567890)";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.address) tempErrors.address = "address is required";
    if (!formData.recaptchaToken)
      tempErrors.recaptchaToken = "Please complete the reCAPTCHA";
    if (!selectedBookingDate) tempErrors.selectedBookingDate = "Booking Date is required";
    if (!selectedBookingTime) tempErrors.selectedBookingTime = "Booking Time is required";
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
    const totalPrice = (
      Number(selectedPlanPrice) + 
      selectedAddedService.reduce((total, service) => total + Number(service.price), 0)
    ).toFixed(2);
    try {

      const payload = {
        ...formData,
        carType:selectedCarType,
        washingPlan: selectedPlan,
        washingPrice: selectedPlanPrice,
        bookingDate:selectedBookingDate,
        bookingTime:selectedBookingTime,
        addedServices:selectedAddedService.map(service=>service.name),
        totalPrice: totalPrice, 
      };


      //   const response = await fetch('https://creekside-car-wash.onrender.com/send-mail', {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(
          data.message || "Your message has been sent successfully!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        setFormData({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          address: "",
          recaptchaToken: "",
        });
        setIsFormTouched(false);
      } else {
        toast.error(data.error || "Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send your message. Please try again.", {
        position: "top-right",
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
  useEffect(() => {
    console.log("Selected Car Type in Step4:", selectedCarType);
  }, [selectedCarType]);

  return (
    <div id="fleetForm" className="mx-4 md:mx-12 xl:mx-24 my-24">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <h2 className="montserrat text-xl xl:text-2xl text-[#d63c3c] text-center px-4 lg:px-24">
        STEP 5
      </h2>
      <h2 className="montserrat text-2xl md:text-3xl lg:text-5xl text-[#1f1e1f] text-center my-6 px-4 lg:px-24">
        Select Your Plan
      </h2>
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-12 lg:gap-8 mt-16 w-full h-auto">

      <div className="relative w-full lg:w-1/2    h-[100%] text-black  overflow-hidden p-6"

        >
    
        <h3 className="font-bold mb-4  text-[#1f1e1f] text-xl lg:text-2xl text-center">
        Please input your contact details
      </h3>
      <h5 className=" mb-10 text-md xl:text-lg text-center text-gray-800">
        In order to make booking you need to choose a plan, time and fill all
        required form fields.
      </h5>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <div>
              <label className="exo block lg:text-lg mb-2">
                FIRST NAME <span className="text-[#d63c3c]"> *</span>
              </label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
              />
              {isFormTouched && errors.fname && (
                <p className="text-red-500 text-sm">{errors.fname}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="exo block lg:text-lg mb-2">
                LAST NAME <span className="text-[#d63c3c]"> *</span>
              </label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
              />
              {isFormTouched && errors.lname && (
                <p className="text-red-500 text-sm">{errors.lname}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="exo block lg:text-lg mb-2">
                YOUR PHONE <span className="text-[#d63c3c]"> *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 2929 29xxx"
                className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
              />
              {isFormTouched && errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="exo block lg:text-lg mb-2">
                YOUR EMAIL <span className="text-[#d63c3c]"> *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@domain.com"
                className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
              />
              {isFormTouched && errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="exo block lg:text-lg mb-2">
                Address <span className="text-[#d63c3c]"> *</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Type here....."
                rows={4}
                className="bg-[#1f1e1f] text-white w-full border px-4 py-4 focus:outline-none border-black rounded-xl"
              ></textarea>
              {isFormTouched && errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div>
              <ReCAPTCHA
                sitekey="6Lf6NeoqAAAAADQ_kBie3V880kFhHDP5dvsuBDW4"
                theme="dark"
                onChange={(token) =>
                  setFormData({ ...formData, recaptchaToken: token })
                }
              />
              {isFormTouched && errors.recaptchaToken && (
                <p className="text-red-500 text-sm">{errors.recaptchaToken}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2  mx-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="montserrat text-xl lg:text-xl hover:bg-white bg-[#1f1e1f]  border-2 border-[#1f1e1f]  text-white hover:text-[#1f1e1f] py-4 px-6 rounded-xl"
              >
                <span>{isSubmitting ? "Sending..." : "Submit"}</span>
              </button>

              <div className="md:col-span-2 text-center mt-4">
  {isFormTouched && errors.selectedBookingDate && (
    <p className="text-red-500 text-sm">{errors.selectedBookingDate}</p>
  )}
  {isFormTouched && errors.selectedBookingTime && (
    <p className="text-red-500 text-sm">{errors.selectedBookingTime}</p>
  )}
</div>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 h-[100%] text-black grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Car Type</h2>
            <h2 className="text-md xl:text-xl exo text-[#d63c3c] ">
              {selectedCarType}
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Washing Plan</h2>
            <h2 className="text-md xl:text-xl exo text-[#d63c3c] text-center">
              {selectedPlan}
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Plan Price</h2>
            <h2 className="text-md xl:text-xl exo text-[#d63c3c]">
            ${(
    Number(selectedPlanPrice) + 
    selectedAddedService.reduce((total, service) => total + Number(service.price), 0)
  ).toFixed(2)}
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Booking Date</h2>
            <h2 className="text-md xl:text-xl exo text-[#d63c3c]">
              {selectedBookingDate}
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Booking Time</h2>
            <h2 className="text-md xl:text-xl exo text-[#d63c3c]">
              {selectedBookingTime}
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 px-6 py-12 rounded-xl">
            <FaCar className="w-12 h-12 text-black" />
            <h2 className="text-xl xl:text-2xl font-bold text-black ">Added Services</h2>
           
           {selectedAddedService.map((item) => (
            <h2 key={item.name} className="exo text-md font-semibold text-gray-700">
            {item.name}
            </h2>
            ))}
          </div>
        </div>

   
      </div>
    </div>
  );
}
