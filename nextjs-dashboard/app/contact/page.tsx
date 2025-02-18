'use client';
import { useState } from 'react';
import SideBar from '../components/contact/sidebar';
import Form from '../components/contact/form';
import FakeCode from '../components/contact/fakecode';

export default function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <main className="flex h-[100%]">
      <SideBar />
      <div className="flex flex-row h-[100%] justify-around items-center p-6 w-full">
        {/* Pass the form data and updater function to the form */}
        <Form formData={formData} onFormDataChange={setFormData} />
        <div className='h-[106.5%] border-r-2 border-[#1E2D3D]'></div>
        {/* Pass the form data to FakeCode */}
        <FakeCode {...formData} />
      </div>
    </main>
  );
}
