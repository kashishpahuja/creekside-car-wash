"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationPinLock, FaTimeline } from "react-icons/fa6";
import { MdOutlineWifiCalling3, MdMailOutline } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import styles for toasts

function Form({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location_form: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be 10 digits";
    if (!formData.location_form)
      tempErrors.location_form = "Location From is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://creekside-car-wash.onrender.com/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location_form: "",
          message: "",
        });
        if (onClose) onClose();
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("There was an error submitting the form. Please try again.", {
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

  return (
    <div className="my-16 mx-8 lg:mx-16 xl:mx-40 text-black   ">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-12 lg:gap-8  w-full h-auto">
        <div className="w-full lg:w-1/2 text-black ">
          {/* <img
            src="/Images/contact1.webp"
            alt=""
            className="w-full h-[100%] object-cover"
          /> */}
          <div>
            <h3 className=" text-3xl font-semibold mb-6">Feel Free to Write</h3>
            <h3 className="text-lg font-semibold ">
              Working Hours
            </h3>
            <div className="flex items-start space-x-5 md:items-center justify-between my-2  flex-col md:flex-row">
              <div className="flex items-center gap-1">
                <div>
                  <SlCalender className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-md  text-gray-600">Monday - Friday</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <MdAccessTime className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-md  text-gray-600">08:00am - 05:30pm</div>
              </div>
            </div>
            <div className="flex items-start space-x-5 md:items-center justify-between my-2 flex-col md:flex-row">
              <div className="flex items-center gap-1">
                <div>
                  <SlCalender className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-md  text-gray-600">Saturday</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <MdAccessTime className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-md  text-gray-600">08:00am - 05:00pm</div>
              </div>
            </div>
          </div>

          <div className=" pt-6 border-t border-gray-400 flex flex-col items-start justify-center gap-6 ">
            <div className="flex items-center gap-4">
              <div>
                <MdOutlineWifiCalling3 className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl lg:text-xl font-semibold">Call Us</h3>
                <p className="mt-2">
                  <Link
                    href="tel:7786367271"
                    className="hover:underline text-md lg:text-lg"
                  >
                    778-636-7271
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <MdMailOutline className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl lg:text-xl font-semibold">Mail Us</h3>
                <p className="mt-2">
                  <Link
                    href="mailto:creeksideetailz@gmail.com"
                    className="hover:underline text-md lg:text-lg"
                  >
                    creeksideetailz@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <ImLocation2 className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl lg:text-xl font-semibold">Visit Us</h3>
                <p className="mt-2 text-md lg:text-lg">
                  32721 Logan Ave, Mission BC V2V6K7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2  shadow-lg h-[100%] text-black  overflow-hidden">
          <div className=" p-6 lg:p-12  font-semibold w-full">
            {/* <h3 className="text-3xl font-semibold mb-3">
              Feel Free to Write
            </h3>
            <p className="text-white mb-4 text-sm">
              Your email address will not be published. Required fields are
              marked *
            </p> */}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-600  p-4 focus:outline-none"
                  />
                  {errors.name && <p className="text-black">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-600  p-4 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-black">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-600  p-4 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-black">{errors.email}</p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Location From*"
                    name="location_form"
                    value={formData.location_form}
                    onChange={handleChange}
                    className="w-full border-b border-gray-600  p-4 focus:outline-none"
                  />
                  {errors.location_form && (
                    <p className="text-black">{errors.location_form}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Write Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-600  p-4 h-32 text-black focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-black">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-black text-white py-3 px-4 rounded-lg  ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black hover:font-bold "
                  } transition duration-300`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.725840935759!2d76.4001553109863!3d30.35874060350616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1740954575643!5m2!1sen!2sin"
              width={400}
              height={400}
     
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] object-cover"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
