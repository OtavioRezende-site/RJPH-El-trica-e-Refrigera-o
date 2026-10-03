import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = '' }) => {
  // Apenas uma pergunta aberta por vez (inicia com a primeira aberta)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    // Se clicar na que já está aberta, fecha. Se clicar em outra, abre apenas a nova e fecha a anterior.
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="py-4">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left font-semibold text-base sm:text-lg text-slate-900 hover:text-[#004B87] transition-colors gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6] rounded-lg py-1 cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#0077B6]' : ''
                  }`}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed pr-6 animate-in fade-in duration-150"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
