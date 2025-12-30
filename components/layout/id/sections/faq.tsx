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
    question: "Apakah Anda menyediakan layanan instalasi?",
    answer:
      "Ya. Tim kami menyediakan instalasi di lokasi, konfigurasi, pengujian, dan dokumentasi serah terima untuk sistem AIS dan CCTV.",
    value: "item-1",
  },
  {
    question: "Apakah sistem Anda bisa terintegrasi dengan I-Motion DJPL?",
    answer:
      "Ya. Kami memastikan semua sistem yang terpasang terintegrasi dengan platform I-Motion sesuai regulasi DJPL.",
    value: "item-2",
  },
  {
    question: "Berapa lama proses instalasi biasanya berlangsung?",
    answer:
      "Waktu instalasi tergantung kondisi lokasi dan lingkup pekerjaan, namun biasanya berkisar antara 3 hingga 10 hari untuk pemasangan standar.",
    value: "item-3",
  },
  {
    question: "Apakah Anda menyediakan garansi dan dukungan purna jual?",
    answer:
      "Tentu. Semua peralatan termasuk garansi, dan tim kami menyediakan dukungan jarak jauh maupun di lokasi, termasuk pemeliharaan preventif.",
    value: "item-4",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Ya. Kami menerapkan praktik jaringan yang aman, koneksi terenkripsi, dan kontrol akses sistem untuk melindungi semua data operasional.",
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
          Pertanyaan Umum
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
