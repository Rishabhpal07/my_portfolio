import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    
    console.log(serviceId, templateId, publicKey);
    

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Rishabh',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        alert("message sent succesfully")
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error while sending email', error);
      });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto p-5">
      <h2 className="text-center text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-center text-lg mb-8 text-gray-600">
        Let's discuss your next project or just say hello. I'm always excited to connect with fellow creators and potential collaborators.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-5"
      >
        <label className="text-black">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-3 text-black  focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="text-black">Your email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="text-black">Message</label>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Send Email
        </button>
      </form>
    </section>
  );
}

export default Contact;
