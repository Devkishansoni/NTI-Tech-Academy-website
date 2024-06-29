import React from 'react';

const testimonials = [
  {
    text: "I am highly content with NTI Tech Academy's Digital Marketing course. Their impressive 100% placement rate truly reflects the program's excellence and commitment to students' success. It's been a rewarding and fulfilling learning journey.",
    name: "Siddharth Dubey",
    role: "Digital marketing analyst",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFCgre42u1zSqWrEZWBGwX0TgHn7XnGxEa1C6jnZDwm2z61kaQvhuToU9MNTMMBw5wzw&usqp=CAU",
  },
  {
    text: "I am thrilled with my experience at NTI Tech Academy's Digital Marketing course. Their 100% placement rate is a testament to their excellence in education and industry connections. I feel fully prepared for a successful career in digital marketing.",
    name: "Om Pathak",
    role: "Digital Marketing Executive",
    imgSrc: "https://st3.depositphotos.com/5653638/16088/i/1600/depositphotos_160881898-stock-photo-handsome-and-young-indian-male.jpg",
  },
  {
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations! Their 100% placement record truly reflects the top-notch education and support they provide. I'm thrilled with the opportunities this course has opened up for me in the field.",
    name: "Ayushi Singh",
    role: "Digital Marketing Executive",
    imgSrc: "https://www.shutterstock.com/image-photo/back-school-cute-indian-student-260nw-123173629.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-12 pt-10  h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-yellow-500 font-bold text-lg mb-2">Happy Student</h2>
        <h1 className="text-4xl font-bold mb-8">What People Say About Us</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md h-[300px]">
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img className="w-16 h-16 rounded-full border-4 border-[blue]" src={testimonial.imgSrc} alt={testimonial.name} />
                <div className="ml-4 text-left">
                  <h3 className="text-gray-900 font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
