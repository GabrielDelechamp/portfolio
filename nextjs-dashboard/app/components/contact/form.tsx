import React, { ChangeEvent, FormEvent, useRef } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  onFormDataChange: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, onFormDataChange }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onFormDataChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_1cbt7fc',     // Remplace par ton vrai Service ID
      'template_3xx0l3n',    // Remplace par ton vrai Template ID
      formRef.current,
      'yqu-i0rs2nC0LIAhz'       // Remplace par ta clé publique
    ).then(
      (result) => {
        console.log("✅ Email envoyé :", result.text);
        alert(t("message-sent-success"));
        onFormDataChange({ name: "", email: "", message: "" }); // Reset des données
      },
      (error) => {
        console.error("❌ Erreur :", error.text);
        alert(t("message-sent-error"));
      }
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col min-w-[500px] p-6 rounded-md space-y-4"
    >
      <label htmlFor="name" className="text-sm font-medium">
        _{t("name")}:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="p-2 dark:bg-[#011221] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        required
      />

      <label htmlFor="email" className="text-sm font-medium">
        _{t("email")}:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="p-2 dark:bg-[#011221]  border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        required
      />

      <label htmlFor="message" className="text-sm font-medium">
        _{t("message")}:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder={t("Write your message...")}
        className="p-2 dark:bg-[#011221] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        rows={5}
        required
      ></textarea>

      <button
        type="submit"
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-[#1E2D3D] dark:hover:bg-[#1E2D33] dark:text-gray-100 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
      >
        {t("submit-message")}
      </button>
    </form>
  );
};

export default ContactForm;
