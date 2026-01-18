import React from "react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import ContactForm from "@/components/reusable/ContactForm";
import NavigationBar from "@/components/reusable/NavigationBar";
import Footer from "@/components/reusable/Footer";
import RecallSection from "@/components/layout/LandingPage/RecallSection";
import { MessageCircle, Send, Phone } from "lucide-react";
import { FaLink, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Contact } from "lucide-react";
import { RequestDemo, ScheduleDemoButton } from "@/components/reusable/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/components/reusable/FAQs";

export default function ContactUs() {
  // Setting Up Whatsapp
  const phone = "17207246828";
  const message = encodeURIComponent(
    "Hello! I am interested in your services. Please let me know the details. "
  );
  const whatsappURL = `https://wa.me/${phone}?text=${message}`;
  return (
    <div className="min-h-screen">
      <NavigationBar />

      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 pointer-events-none z-0">
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
              " inset-y-[-70%] h-[200%] opacity-15"
            )}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10, filter: ["blur(10px)"] }}
          animate={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
          transition={{ duration: 0.6, ease: "anticipate" }}
        >
          <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 justify-center items-center">
            <h1 className="font-heading text-h1 text-heading font-bold">
              Contact our team
            </h1>
            <p className="font-body text-paragraph text-muted max-w-3xl leading-relaxed px-4 text-center mt-8">
              Got any questions about the produt or scaling on our platform?
              We're here to help. Chat to our friendly team 24/7 and get onboard
              in less than 5 minutes.
            </p>
          </div>

          <div className="pt-20 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto items-center bg-card">
            {/* <ContactForm /> */}
            
            <div className={`hs-form-frame`} data-region="na2" data-form-id="84b62d3b-b4ed-4ce1-94e6-0169b86a335e" data-portal-id="244306063"/> 
            
            <div className="w-full h-full py-10 overflow-hidden bg-white px-4 mt-8">
              <div className="flex flex-col items-start ">
                <h1 className="font-body text-h3 text-heading font-bold ">
                  Chat with us
                </h1>
                <span className="font-body text-muted text-paragraph ">
                  {" "}
                  Speak to our friendly team via live chat.
                </span>

                <div className="flex flex-col items-start gap-4 mt-4 pointer-events-auto">
                  {/* WhatsApp */}
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1 font-body text-heading text-small underline font-bold"
                  >
                    <FaWhatsapp color="black" size={16} />
                    Connect on WhatsApp
                  </a>

                  {/* Email */}
                  <button
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&to=info@skypondtech.com&su=Inquiry&body=Greetings, ",
                        "_blank"
                      )
                    }
                    className="flex flex-row items-center gap-1 font-body text-heading text-small underline font-bold"
                  >
                    <Send size={16} />
                    Shoot us an email
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/skypond-tech-llc/posts/?feedView=all",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="flex flex-row items-center gap-1 font-body text-heading text-small underline font-bold"
                  >
                    <FaLinkedin color="black" size={16} />
                    Message us on LinkedIn
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start mt-10">
                <h1 className="font-body text-h3 text-heading font-bold">
                  Call us
                </h1>
                <span className="font-body text-muted text-paragraph ">
                  Call our team Mon-Fri from 8am to 5pm.
                </span>

                <div className="flex flex-col items-start gap-4 mt-4 pointer-events-auto">
                  <a
                    href="tel:+17207246828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1 font-body text-heading text-small underline font-bold"
                  >
                    <Phone size={16} />
                    +1 7207246828
                  </a>
                </div>
              </div>
            
              <div className="flex flex-col h-[20rem] md:h-[35rem] items-start mt-10 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92777.22424202548!2d-92.07753024098855!3d30.212707809019214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249c4364c5d89b%3A0xc94a752492f7ff13!2sLafayette%2C%20LA%2C%20USA!5e0!3m2!1sen!2snp!4v1768741748056!5m2!1sen!2snp"
                  className="w-full h-full border-0 "
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              
            </div>
          </div>

          <motion.div
               initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
              className="relative overflow-hidden bg-background "
          >
            <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 justify-center items-center gap-12 ">
              <h1 className="font-heading text-h2 text-heading font-bold px-4 md:px-0">
                Frequently Asked Questions
              </h1>

              <Accordion type="single" className="w-[800px] h-full md:h-[800px]" collapsible>
                {faqs.map((item, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      value={item.question}
                      className="px-10 py-2"
                    >
                      <AccordionTrigger className="font-body text-[16px] text-heading font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-[16px] font-medium text-muted">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </motion.div>
        </div>
        </motion.div>


        
      </div>

      <RecallSection />
      <Footer />
    </div>
  );
}
