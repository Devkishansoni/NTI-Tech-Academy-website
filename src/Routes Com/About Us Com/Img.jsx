import React from "react";

export default function Img() {
  return (
    <>
      <div className=" flex flex-col w-3/4 pt-14 scroll-m-4">
        <img
          src="https://st2.depositphotos.com/4431055/11856/i/450/depositphotos_118561376-stock-photo-group-of-students-with-books.jpg"
          alt="Students"
          className="w-full"
        />
        <div className="flex flex-col space-y-4 text-zinc-500 ">
          <h1 className="text-gray-700 font-semibold text-2xl">About Us</h1>
          <div className="w-16 bg-black h-1"></div>
          <p>
            Welcome to NTI Tech Academy – your gateway to excellence in
            Information Technology! At NTI, we are not just a training
            institution; we are a solution provider in Information Technology,
            offering a holistic approach to learning, staffing, and product
            services. With a dedicated focus on niche technologies and a team of
            seasoned trainers, we empower our students to stand out in the
            competitive market.
          </p>
          <p>
            At NTI Tech Academy, we understand that the IT landscape is
            constantly evolving, and to thrive in this dynamic industry, one
            must stay ahead of the curve. That’s why we are committed to
            providing our students with the knowledge, skills, and practical
            experience they need to excel.
          </p>
          <p>
            One of our unique strengths is our emphasis on real-world exposure.
            We believe that the best way to learn is by doing, and so we provide
            our students with the opportunity to work on real projects. This
            hands-on experience not only enhances their technical proficiency
            but also instills confidence to tackle real-world challenges.
          </p>
          <p>
            However, at NTI Tech Academy, we don’t just stop at technical
            training. We understand that success in the IT field requires a
            combination of technical expertise and personal development. That’s
            why we place a significant emphasis on overall growth and
            development. We nurture our students’ soft skills, communication
            abilities, and problem-solving acumen, ensuring they are
            well-rounded professionals ready to thrive in any work environment.
          </p>
          <p>
            In a rapidly changing industry, it’s imperative to have an edge, and
            that’s precisely what NTI Tech Academy provides. Our students are
            equipped with the knowledge, skills, and confidence to be at the
            forefront of the IT market.
          </p>
          <p>
            Join us at NTI Tech Academy, where we are dedicated to not just
            shaping careers but transforming lives. Explore our programs, meet
            our experienced trainers, and embark on a journey of learning and
            growth that will set you on the path to success in the ever-evolving
            world of Information Technology. Your future in IT begins here!
          </p>
        </div>
      </div>
    </>
  );
}
