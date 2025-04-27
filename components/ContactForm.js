import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);
  if (state.succeeded) {
    return (
      <div className="p-4 bg-islamic-green-50 text-islamic-green-700 rounded-md border border-islamic-green-200">
        <p>আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">নাম</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500"
          placeholder="আপনার নাম লিখুন"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">ইমেইল</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500"
          placeholder="আপনার ইমেইল লিখুন"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">মেসেজ</label>
        <textarea
          id="message"
          name="message"
          required
          rows="3"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green-500"
          placeholder="আপনার মেসেজ লিখুন"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="islamic-button w-full flex items-center justify-center"
      >
        {state.submitting ? 'Sending...' : 'মেসেজ পাঠান'}
      </button>
    </form>
  );
} 