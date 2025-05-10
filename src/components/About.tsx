
import React from "react";
import { CheckCircle2, GraduationCap } from "lucide-react";

const About = () => {
  // Skills data
  const skills = [
    "Web & Plugin Development: PHP, JavaScript, React, WordPress hooks & ACF",
    "Android Apps: Java, Firebase, Tesseract OCR",
    "Agile workflows, 7–14 day delivery cycles",
    "50+ websites launched",
    "30+ plugins deployed",
    "Android app with 10K+ downloads",
  ];

  // Education data
  const education = [
    {
      year: "2000",
      institution: "Aptech Learning",
      degree: "Advanced Diploma in Android App Development",
    },
    {
      year: "2015",
      institution: "IIDE",
      degree: "Professional Certificate in WordPress Development",
    },
    {
      year: "2019",
      institution: "Saurashtra University",
      degree: "M.Sc. in Physics",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">About Me</h2>
          <div className="w-24 h-1 bg-orange mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan rounded-3xl blur-3xl opacity-10 -z-10"></div>
            <div className="bg-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full -mt-10 -mr-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan/10 rounded-full -mb-10 -ml-10"></div>
              
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Rox - Full Profile"
                className="rounded-2xl w-full h-auto object-cover mb-6"
              />
              
              <h3 className="text-2xl font-bold text-navy mb-2">Rox</h3>
              <p className="text-orange font-medium mb-4">
                Website & Android App Developer | WordPress Plugin Expert
              </p>
              <p className="text-gray-600">
                With 9+ years of professional coding experience, I help startups, agencies, and educators turn ideas into polished digital products.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">My Skills & Experience</h3>
            
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy mb-6 mt-12">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-orange/10 flex items-center justify-center text-orange">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                    <h4 className="text-navy font-bold">{edu.institution}</h4>
                    <p className="text-gray-700">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
