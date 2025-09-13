'use client';

import { useState } from 'react';
import SideBar from '../components/contact/sidebar';
import Form from '../components/contact/form';
import FakeCode from '../components/contact/fakecode';

export default function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <main className="flex h-full w-full">
      {/* --- Desktop layout --- */}
      <div className="hidden md:flex flex-row h-full w-full">
        <SideBar />
        <div className="flex flex-row h-full justify-around items-center w-full">
          <Form formData={formData} onFormDataChange={setFormData} />
          <div className="h-full border-l-2 border-[#1E2D3D] flex flex-col items-center justify-center p-4 overflow-auto">
            <FakeCode {...formData} />
          </div>
        </div>
      </div>

      {/* --- Mobile layout --- */}
      <div className="flex md:hidden flex-col w-full h-full overflow-auto">
        {/* Sidebar en haut */}
        <div className="border-b-2 border-[#1E2D3D]">
          <SideBar />
        </div>

        {/* Formulaire */}
        <div className="flex-1 p-4">
          <Form formData={formData} onFormDataChange={setFormData} />
        </div>

        {/* FakeCode en dessous */}
        <div className="border-t-2 border-[#1E2D3D] p-4">
          <FakeCode {...formData} />
        </div>
      </div>
    </main>
  );
}
