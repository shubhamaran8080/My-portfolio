import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Github, Instagram, Linkedin, Send,Briefcase } from "lucide-react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS


interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm = ({
  title = "Do you have a project to discuss?",
  subtitle = "Get in touch",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_08giogb",   // 🔹 Replace with your Service ID (from EmailJS → Email Services)
    "template_lh9krji",  // 🔹 Replace with your Template ID (from EmailJS → Email Templates)
    {
      from_name: formData.name,     // 👤 Sender's name
      from_email: formData.email,   // 📧 Sender's email
      message: formData.message,    // 📝 Message content
    },
    "ZD-9442z2kQHCD7B0"    // 🔹 Replace with your Public Key (from EmailJS → Account → API Keys)
  )
  .then(() => {
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error("❌ EmailJS error:", error);
    alert("⚠️ Failed to send message. Please try again.");
  });
};


  return (
    <div className="w-full bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
            {subtitle} <Send className="h-4 w-4" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl"></div>
            <CardContent className="p-6 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">CONTACT</h3>
              <p className="text-gray-400">shubham8080m@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                SOCIAL MEDIA
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shubham-aran-8b758b2a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </a>
                <a
                  href="https://github.com/shubhamaran8080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github className="h-5 w-5 text-gray-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <Briefcase className="h-5 w-5 text-pink-400" />
                </a>
              </div>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-xl"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let's create something amazing together
                </h3>
                <p className="text-gray-400 mb-6">
                  Whether you need a website, web application, or just want to
                  discuss a project idea, I'm here to help turn your vision into
                  reality.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                  <span>Available for freelance projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
