"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Form() {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (params) => {
    return emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
  };

  const onSubmit = async (data) => {
    const templateParams = {
      to_name: "Bihari Kumar Rawat",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    try {
      // 1. Show success toast instantly
      toast.success("Message sent successfully!");

      // 2. Clear the form instantly
      reset();

      // 3. Send the email in background (no error handling toast)
      await sendEmail(templateParams);
    } catch (err) {
      // Error is suppressed, only success toast will appear
      console.error("EmailJS error:", err);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md w-full mx-auto flex flex-col items-center justify-center space-y-4"
      >
        {/* Name */}
        <motion.input
          variants={item}
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
          })}
          className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.name && (
          <span className="text-yellow-400 self-start text-sm">
            {errors.name.message}
          </span>
        )}

        {/* Email */}
        <motion.input
          variants={item}
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.email && (
          <span className="text-yellow-400 self-start text-sm">
            {errors.email.message}
          </span>
        )}

        {/* Message */}
        <motion.textarea
          variants={item}
          placeholder="Your Message"
          rows="5"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 50,
              message: "Minimum 50 characters required",
            },
            maxLength: {
              value: 500,
              message: "Maximum 500 characters allowed",
            },
          })}
          className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.message && (
          <span className="text-yellow-400 self-start text-sm">
            {errors.message.message}
          </span>
        )}

        {/* Submit Button */}
        <motion.button
          variants={item}
          type="submit"
          className="w-full py-3 px-6 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </>
  );
}
