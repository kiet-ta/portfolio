import { useState } from 'react';
import { motion } from 'framer-motion';
import { socials } from '../data/content';
import { Mail, UserCheck, Waves, Linkedin, Github, Twitter } from 'lucide-react';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4"
      initial={{ opacity: 0, scale: 0.95, rotate: 2, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-cyan-600 font-mono mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 font-mono text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-slate-200 rounded focus:border-cyan-600 focus:outline-none transition-colors text-slate-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2 font-mono text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-slate-200 rounded focus:border-cyan-600 focus:outline-none transition-colors text-slate-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2 font-mono text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/60 border border-slate-200 rounded focus:border-cyan-600 focus:outline-none transition-colors text-slate-900 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full px-8 py-3 bg-cyan-600 text-white font-mono font-bold rounded hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'success' ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center font-mono text-sm"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-white/60 border border-slate-200 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-600 font-mono mb-4 flex items-center gap-2">
                <EnvelopeIcon className="w-6 h-6 text-cyan-600" />
                Direct Contact
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:trananhkiet21082005@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 text-slate-600 hover:text-cyan-600 transition-colors group focus:ring-2 focus:ring-cyan-600/40 rounded"
                >
                  <Mail className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  trananhkiet21082005@gmail.com
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 border border-slate-200 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-600 font-mono mb-4 flex items-center gap-2">
                <UserCircleIcon className="w-6 h-6 text-cyan-600" />
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socials.map((social) => {
                  let Icon = null;
                  if (social.name.toLowerCase().includes('linkedin')) Icon = Linkedin;
                  if (social.name.toLowerCase().includes('github')) Icon = Github;
                  if (social.name.toLowerCase().includes('twitter')) Icon = Twitter;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-3 text-slate-600 hover:text-cyan-600 transition-colors group focus:ring-2 focus:ring-cyan-600/40 rounded"
                    >
                      {Icon ? <Icon className="w-5 h-5 text-cyan-600" /> : <UserCheck className="w-5 h-5 text-cyan-600" />}
                      {social.name}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/60 border border-slate-200 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-600 font-mono mb-4 flex items-center gap-2">
                <Waves className="w-6 h-6 text-cyan-600" />
                Availability
              </h3>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-slate-600 font-mono text-sm">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;