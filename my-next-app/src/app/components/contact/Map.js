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
    <div className="mt-16 text-black   ">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <div className="">
     
        <div className="w-full  h-[100%]  overflow-hidden">
          <div className="   font-semibold w-full">
          

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.725840935759!2d76.4001553109863!3d30.35874060350616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1740954575643!5m2!1sen!2sin"
              width={400}
              height={400}
     
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
