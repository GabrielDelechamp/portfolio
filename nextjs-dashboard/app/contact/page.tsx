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
      <div className="flex flex-row h-[100%] justify-around items-center  w-full">
        {/* Pass the form data and updater function to the form */}
        <Form formData={formData} onFormDataChange={setFormData} />
        <div className='h-[100%] border-l-2 border-[#1E2D3D] flex flex-col items-center justify-center'>
          <FakeCode {...formData} />
        </div>
      </div>
    </main>
  );
}
