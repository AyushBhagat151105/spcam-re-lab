"use client";

import { Tabs } from "./ui/tabs";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TabsDemo() {
  const testimonials = [
    {
      quote:
        "As a Product Manager, I deeply value how this solution enhances our team's collaboration and streamlines complex workflows.",
      name: "Ayush Bhagat",
      designation: "Product(Project) Manager at Research Lab",
      src: "/ayush.jpg",
    },
    {
      quote:
        "This system's user-centric design aligns perfectly with my work as a UI/UX Engineer, ensuring every interaction is seamless.",
      name: "Brijal Dave",
      designation: "UI/UX Engineer at Research Lab",
      src: "/brijal.jpg",
    },
    {
      quote:
        "Its robust backend architecture truly stands out, simplifying my tasks and making development more efficient.",
      name: "Monik Patel",
      designation: "Backend Engineer at Research Lab",
      src: "/monik.jpg",
    },
    {
      quote:
        "The attention to detail in design provides a solid foundation for creating visually stunning and intuitive user interfaces.",
      name: "Ankit Dabhi",
      designation: "UI Designer at Research Lab",
      src: "/ankit.jpg",
    },
    {
      quote:
        "As a UI/UX Manager, I appreciate how this tool enhances our design process and empowers my team to achieve more.",
      name: "Darshan Prajapati",
      designation: "UI/UX Manager at Research Lab",
      src: "/darshan.jpg",
    },
    {
      quote:
        "The backend features are well-thought-out and optimized for scalability, making it a dream for backend development.",
      name: "Mayur",
      designation: "Backend Developer at Research Lab",
      src: "/mayur.jpg",
    },
    {
      quote:
        "The frontend framework is intuitive and flexible, making development faster and smoother for us.",
      name: "Niraj Patel",
      designation: "Frontend Developer at Research Lab",
      src: "/niraj.jpg",
    },
    {
      quote:
        "This solution is a game-changer for frontend developers, allowing us to deliver polished products efficiently.",
      name: "Prince",
      designation: "Frontend Developer at Research Lab",
      src: "/prince.jpg",
    },
    {
      quote:
        "From a UI/UX perspective, this system ensures users enjoy a seamless and delightful experience at every touchpoint.",
      name: "Ilma Vahora",
      designation: "UI/UX at Research Lab",
      src: "/ilma.jpeg",
    },
  ];

  const testimonials2 = [
    {
      quote:
        "As the HOD of the BCA Department (SPCAM), I am impressed with how this solution fosters academic excellence and simplifies department management.",
      name: "Mrs. Jyoti Amitkumar Dhamecha",
      designation: "HOD of BCA Department(SPCAM)",
      src: "/jd.jpg",
    },
    {
      quote:
        "As the Vice HOD of the BCA Department (SPCAM), this solution has proven invaluable in supporting our academic and administrative processes.",
      name: "Mrs. Bhavisha Parvadiya",
      designation: "Vice HOD of BCA Department(SPCAM)",
      src: "/b.jpg",
    },
  ];

  const testimonials3 = [
    {
      quote: "Frontend Developer",
      name: "Dalbanjan Krishna",
      designation: "Frontend Developer",
      src: "/79.png",
    },
    {
      quote: "Frontend Developer",
      name: "Pathan Tahir Khan",
      designation: "Frontend Developer",
      src: "/69.jpg",
    },
    {
      quote: "Backend Developer",
      name: "Maji Sima",
      designation: "Backend Developer",
      src: "/59.jpg",
    },
    {
      quote: "Backend Developer",
      name: "Pathan Tanvir Khan",
      designation: "Backend Developer",
      src: "/49.jpg",
    },
  ];

  const testimonials4 = [
    {
      quote: "IOT Developer",
      name: "Harsh Gondaliya",
      designation: "IOT Developer",
      src: "/46.jpg",
    },
    {
      quote: "IOT Developer",
      name: "Aniket Parmar",
      designation: "IOT Developer",
      src: "/47.jpg",
    },
    {
      quote: "IOT Developer",
      name: "Darshil ",
      designation: "IOT Developer",
      src: "/48.png",
    },
    {
      quote: "IOT Developer",
      name: "Jeet Shah",
      designation: "IOT Developer",
      src: "/45.jpg",
    },
  ];

  const tabs = [
    {
      title: "Research Lab Lead",
      value: "Research Lab Lead",
      content: (
        <div className="w-full p-4 sm:p-6 md:p-10 text-base sm:text-lg md:text-2xl font-bold text-white bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <p className="text-sm sm:text-base md:text-xl">Research Lab Lead</p>
          <AnimatedTestimonials testimonials={testimonials2} autoplay={true} />
        </div>
      ),
    },
    {
      title: "Chakra Innovators",
      value: "Chakra Innovators",
      content: (
        <div className="w-full p-4 sm:p-6 md:p-10 text-base sm:text-lg md:text-2xl font-bold text-white bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <p className="text-sm sm:text-base md:text-xl">
            Chakra Innovators tab
          </p>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      ),
    },

    {
      title: "Code Wavers",
      value: "Code Wavers",
      content: (
        <div className="w-full p-4 sm:p-6 md:p-10 text-base sm:text-lg md:text-2xl font-bold text-white bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <p className="text-sm sm:text-base md:text-xl">Code Wavers tab</p>
          <AnimatedTestimonials testimonials={testimonials3} autoplay={true} />
        </div>
      ),
    },

    {
      title: "IOT Lagends",
      value: "IOT Lagends",
      content: (
        <div className="w-full p-4 sm:p-6 md:p-10 text-base sm:text-lg md:text-2xl font-bold text-white bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <p className="text-sm sm:text-base md:text-xl">IOT Lagends tab</p>
          <AnimatedTestimonials testimonials={testimonials4} autoplay={true} />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full my-16 sm:my-20 md:my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
