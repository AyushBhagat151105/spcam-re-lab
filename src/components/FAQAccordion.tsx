import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqData = [
    {
      question: "What is the purpose of this research lab?",
      answer:
        "Our research lab is dedicated to innovation, technology, and problem-solving in various fields. We focus on developing new ideas, conducting experiments, and creating practical solutions that contribute to society.",
    },
    {
      question: "What areas of research does the lab focus on?",
      answer:
        "We explore multiple disciplines, including artificial intelligence, software development, automation, and emerging technologies. Our goal is to push the boundaries of what’s possible through research and experimentation.",
    },
    {
      question: "Who can be a part of the research lab?",
      answer:
        "We welcome passionate individuals, students, and professionals who are eager to contribute to innovation. Whether you have expertise in coding, engineering, design, or research, you can be part of our journey.",
    },
    {
      question: "How can I collaborate with the lab?",
      answer:
        "If you’re interested in working with us, you can reach out via our website’s contact page. We are open to collaborations with individuals, institutions, and businesses that share our vision.",
    },
    {
      question: "Does the lab work on commercial projects?",
      answer:
        "Yes, we take on projects that align with our research goals. We work with startups, businesses, and organizations to develop innovative solutions that meet real-world challenges.",
    },
    {
      question: "Is there a way to support the lab’s research?",
      answer:
        "Yes! You can support our research through funding, sponsorships, or by contributing your skills. If you’re interested in supporting us, feel free to get in touch.",
    },
    {
      question: "Where is the lab located?",
      answer:
        "Our research lab is based in Gujarat, but we collaborate with researchers and professionals globally through online platforms.",
    },
    {
      question: "How can I stay updated with the lab’s progress?",
      answer:
        "You can follow our website or social media pages for updates on our latest research, projects, and innovations.",
    },
    {
      question: "Can students or interns join the lab?",
      answer:
        "Yes, we offer opportunities for students and interns to gain hands-on experience in research and development. If you're interested, check our website for openings.",
    },
    {
      question: "What makes this research lab unique?",
      answer:
        "Our lab thrives on creativity, problem-solving, and real-world impact. We are driven by a vision to innovate without boundaries and create technology that makes a difference.",
    },
  ]
  
  export function FAQAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  