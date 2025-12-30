import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. Our team provides full on-site installation, configuration, testing, and handover documentation for AIS and CCTV systems.",
    value: "item-1",
  },
  {
    question: "Can your system integrate with I-Motion DJPL?",
    answer:
      "Yes. We ensure that all installed systems are properly integrated with the I-Motion platform as required by DJPL regulations.",
    value: "item-2",
  },
  {
    question: "How long does the installation process usually take?",
    answer:
      "Installation time depends on site conditions and scope, but typically ranges from 3 to 10 days for standard deployments.",
    value: "item-3",
  },
  {
    question: "Do you offer warranty and after-sales support?",
    answer:
      "Absolutely. All equipment includes warranty, and our team provides remote and on-site support, including preventive maintenance.",
    value: "item-4",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We implement secure network practices, encrypted connections, and controlled system access to protect all operational data.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-14 sm:py-22">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
