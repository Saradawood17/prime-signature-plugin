import React, { useState } from 'react';
import Swal from 'sweetalert2';
 
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
 
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const { name, email, phone, message } = formData;
 
    if (!name || !email || !message) {
      return Swal.fire('Missing Fields', 'Please fill in name, email, and message.', 'warning');
    }
 
    const emailContent = `
    <div style="font-family: Arial, sans-serif; color: #333; border: 1px solid #e0e0e0; padding: 20px; max-width: 600px; margin: auto;">
      <h2 style="color: #1034A6; border-bottom: 1px solid #1034A6; padding-bottom: 10px;">📩 New Contact Form Submission</h2>
      <p><strong style="color: #1034A6;">Name:</strong> ${name}</p>
      <p><strong style="color: #1034A6;">Email:</strong> ${email}</p>
      <p><strong style="color: #1034A6;">Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong style="color: #1034A6;">Message:</strong></p>
      <p style="black-space: pre-line;">${message}</p>
      <hr style="margin-top: 20px;" />
      <footer style="text-align: center; font-size: 12px; color: #999;">
        Sent from your website contact form
      </footer>
    </div>
  `;
  
 
    try {
      const response = await fetch('https://email-server.s8r.me/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: 'New Contact Form Submission',
          body: emailContent
        })
      });
 
      if (response.ok) {
        Swal.fire('Success', 'Your message has been sent!', 'success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
    }
  };
 
  return (
    <section className="w-full py-12 sm:py-[104px]">
      <div className="text-center mb-8">
        <h3 className="font-bold text-[40px] leading-[100%] text-center  text-black mb-2">
          تواصل معنا
        </h3>
        <p className="font-normal text-[16px] leading-[100%] text-center  text-black">
          Send us a message or call us. See our contact details below.
        </p>
      </div>
 
      <div className="flex flex-col lg:flex-row min-h-[50vh] text-right">
        {/* Contact Details */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8">
          <div className="bg-[#DCCDA5] w-full h-[441px] rounded-[8px] p-10 space-y-4">
            <div className='mt-8'>
              <h5 className="text-[24px] font-semibold leading-[100%] text-right  text-black font-[Inter] mb-1">
                العنوان
              </h5>
 
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">Mazaya Business Avenue BB2</p>
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">Jumeirah Lake Towers</p>
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">Dubai, UAE</p>
            </div>
 
            <div className='mt-8'>
              <h5 className="text-[24px] font-semibold leading-[100%] text-right  text-black font-[Inter] mb-1">الهاتف</h5>
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">+971-123-456-789</p>
            </div>
 
            <div className='mt-8'>
              <h5 className="text-[24px] font-semibold leading-[100%] text-right  text-black font-[Inter] mb-1">البريد الالكتروني</h5>
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">
                <a href="mailto:info@sign8r.com" className="font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">info@sign8r.com</a>
              </p>
              <p className="mt-2 font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">
                <a href="mailto:wecare@storeus.com" className="font-[Inter] font-normal text-[16px] leading-[100%] text-right  text-black">wecare@storeus.com</a>
              </p>
            </div>
          </div>
        </div>
 
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center px-4 sm:px-8">
          <div className="w-full max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-[Inter] font-normal text-[16px] leading-[100%] text-right  mb-1">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ادخل الاسم"
                  className="w-full h-[35px] p-2 bg-white border border-[#0000001A] rounded-[4px] font-[Inter] font-normal text-[16px] leading-[100%] text-right  placeholder:text-[#999999] outline-none"
                />
              </div>
 
              <div>
                <label htmlFor="email" className="block font-[Inter] font-normal text-[16px] leading-[100%] text-right  mb-1">البريد الالكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ادخل البريد الالكتروني"
                  className="w-full h-[35px] p-2 bg-white border border-[#0000001A] rounded-[4px] font-[Inter] font-normal text-[16px] leading-[100%] text-right  placeholder:text-[#999999] outline-none"
                />
              </div>
 
              <div>
                <label htmlFor="phone" className="block font-[Inter] font-normal text-[16px] leading-[100%] text-right  mb-1">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="ادخل رقم الهاتف"
                  className="w-full h-[35px] p-2 bg-white border border-[#0000001A] rounded-[4px] font-[Inter] font-normal text-[16px] leading-[100%] text-right  placeholder:text-[#999999] outline-none"
                />
 
              </div>
 
              <div>
                <label htmlFor="message" className="block font-[Inter] font-normal text-[16px] leading-[100%] text-right  mb-1">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ادخل الرسالة"
                  rows="4"
                  className="w-full h-[35px] p-2 bg-white border border-[#0000001A] rounded-[4px] font-[Inter] font-normal text-[16px] leading-[100%] text-right  placeholder:text-[#999999] outline-none"
                ></textarea>
              </div>
 
              <button
                type="submit"
                className="w-[135px] h-[48px] px-[48px] rounded-[25px] bg-[#DCCDA5] text-black hover:bg-[#DCCDA5] transition"
              >
                ارسال
              </button>
 
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;