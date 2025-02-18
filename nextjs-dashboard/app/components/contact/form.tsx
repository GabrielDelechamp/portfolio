import React, { ChangeEvent, FormEvent } from "react";

// Définir le type pour les données du formulaire
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update the parent component's state
    onFormDataChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-w-[500px] p-6 rounded-md shadow-md space-y-4"
    >
      <label htmlFor="name" className="text-sm font-medium">
        _name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="p-2 bg-[#011221] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        required
      />

      <label htmlFor="email" className="text-sm font-medium">
        _email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="p-2 bg-[#011221]  border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        required
      />

      <label htmlFor="message" className="text-sm font-medium">
        _message:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Write your message..."
        className="p-2 bg-[#011221]  border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
        rows={5} // rows attend un nombre
        required
      ></textarea>

      <button
        type="submit"
        className="px-4 py-2 bg-[#1E2D3D] hover:bg-[#1E2D33] text-gray-100 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2D3D]"
      >
        submit-message
      </button>
    </form>
  );
};

export default ContactForm;
