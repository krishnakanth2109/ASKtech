import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@asksoftware.com',
      gradient: 'from-[#6C63FF] to-[#00D4FF]',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      gradient: 'from-[#00D4FF] to-[#00FFA3]',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Silicon Valley, CA',
      gradient: 'from-[#00FFA3] to-[#6C63FF]',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 163, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Get in
              </span>
              {' '}
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Have a project in mind? Let's discuss how we can help transform your business.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-white">
                  {info.title}
                </h3>

                <p className="text-gray-400">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00D4FF]/10" />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Message Sent Successfully!
                </h3>

                <p className="text-gray-400 text-lg">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: isFocused === 'name' || formData.name ? -24 : 0,
                        scale: isFocused === 'name' || formData.name ? 0.85 : 1,
                        color: isFocused === 'name' ? '#6C63FF' : '#9CA3AF',
                      }}
                      className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                    >
                      Name
                    </motion.label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <motion.label
                      animate={{
                        y: isFocused === 'email' || formData.email ? -24 : 0,
                        scale: isFocused === 'email' || formData.email ? 0.85 : 1,
                        color: isFocused === 'email' ? '#6C63FF' : '#9CA3AF',
                      }}
                      className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                    >
                      Email
                    </motion.label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <motion.label
                      animate={{
                        y: isFocused === 'phone' || formData.phone ? -24 : 0,
                        scale: isFocused === 'phone' || formData.phone ? 0.85 : 1,
                        color: isFocused === 'phone' ? '#6C63FF' : '#9CA3AF',
                      }}
                      className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                    >
                      Phone
                    </motion.label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('phone')}
                      onBlur={() => setIsFocused(null)}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <motion.label
                      animate={{
                        y: isFocused === 'company' || formData.company ? -24 : 0,
                        scale: isFocused === 'company' || formData.company ? 0.85 : 1,
                        color: isFocused === 'company' ? '#6C63FF' : '#9CA3AF',
                      }}
                      className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                    >
                      Company
                    </motion.label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('company')}
                      onBlur={() => setIsFocused(null)}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <motion.label
                    animate={{
                      y: isFocused === 'subject' || formData.subject ? -24 : 0,
                      scale: isFocused === 'subject' || formData.subject ? 0.85 : 1,
                      color: isFocused === 'subject' ? '#6C63FF' : '#9CA3AF',
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                  >
                    Subject
                  </motion.label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('subject')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <motion.label
                    animate={{
                      y: isFocused === 'message' || formData.message ? -24 : 0,
                      scale: isFocused === 'message' || formData.message ? 0.85 : 1,
                      color: isFocused === 'message' ? '#6C63FF' : '#9CA3AF',
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-all"
                  >
                    Message
                  </motion.label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('message')}
                    onBlur={() => setIsFocused(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#6C63FF] text-white outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(108, 99, 255, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
