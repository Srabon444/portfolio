"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { z } from "zod";

// Define the contact form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Using environment variables for EmailJS configuration
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",  
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAIL_JS || "YOUR_USER_ID"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setSubmitStatus({
            type: "success",
            message: "Your message was sent successfully! I'll get back to you soon.",
          });
          
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus({
            type: "error",
            message: "There was an error sending your message. Please try again later.",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                <svg className="h-6 w-6 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            {/* Phone number section */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                <svg className="h-6 w-6 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                <svg className="h-6 w-6 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                <svg className="h-6 w-6 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.availability}</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="h-5 w-5 text-gray-700 dark:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="h-5 w-5 text-gray-700 dark:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary/20 dark:focus:ring-primary-foreground/20"
                  } bg-white dark:bg-gray-800`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary/20 dark:focus:ring-primary-foreground/20"
                  } bg-white dark:bg-gray-800`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                    errors.subject
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary/20 dark:focus:ring-primary-foreground/20"
                  } bg-white dark:bg-gray-800`}
                  placeholder="Message subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                    errors.message
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary/20 dark:focus:ring-primary-foreground/20"
                  } bg-white dark:bg-gray-800`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary text-white dark:bg-primary-foreground dark:text-primary rounded-lg hover:opacity-90 transition-opacity font-medium flex justify-center items-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              
              {submitStatus.type && (
                <div
                  className={`p-3 rounded ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              * I'll get back to you as soon as possible. Your information is never shared with third parties.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}