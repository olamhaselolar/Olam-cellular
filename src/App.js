import React from 'react';
import { Phone, MapPin, Clock, Smartphone, Wrench, Cpu, HardDrive, Facebook, Instagram, Navigation, MessageCircle } from 'lucide-react';

const SocialButton = ({ icon: Icon, label, link, primary = true }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-white transition-transform hover:scale-105 ${
      primary ? 'bg-lime-500 hover:bg-lime-600' : 'bg-lime-600 hover:bg-lime-700'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <header className="bg-white text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center w-full mb-4">
              <h1 className="text-4xl font-bold">עולם הסלולר</h1>
            </div>
            <h2 className="text-xl text-center">פתרונות תקשורת ומחשוב ברמה אחרת</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <SocialButton
              icon={MessageCircle}
              label="ווטסאפ"
              link={`https://wa.me/972508555523`}
            />
            <SocialButton
              icon={Navigation}
              label="נווט אלינו"
              link="https://waze.com/ul?q=יוסף סמילו 3 נתיבות"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">צור קשר</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6 text-lg">
              <div className="flex items-center">
                <Phone className="ml-3 text-lime-500" size={24} />
                <span>טלפון: 0508555523</span>
              </div>
              <div className="flex items-center">
                <MapPin className="ml-3 text-lime-500" size={24} />
                <span>כתובת: יוסף סמילו 3 נתיבות, רחבת השוק הישן</span>
              </div>
              <div className="flex items-center">
                <Clock className="ml-3 text-lime-500" size={24} />
                <div className="flex flex-col">
                  <span>שעות פעילות:</span>
                  <span>ימי ראשון ושני: 10:00-17:00</span>
                  <span>יום שלישי: 10:00-14:00</span>
                  <span>ימי רביעי וחמישי: 10:00-17:00</span>
                  <span>יום שישי: 10:00-14:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
