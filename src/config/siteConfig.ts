export interface SiteConfig {
  name: string;
  shortName: string;
  contactPerson: string;
  tagline: string;
  phoneDisplay: string;
  phoneInternational: string;
  phoneTel: string;
  whatsappUrl: string;
  instagram: {
    handle: string;
    url: string;
  };
  googleBusinessProfile: string;
  language: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    summary: string;
  };
  formId: string;
  formUrl: string;
  chatWidgetId: string;
}

export const SITE: SiteConfig = {
  name: "RJPH Elétrica e Refrigeração",
  shortName: "RJPH",
  contactPerson: "Rafael Santos",
  tagline: "Instalação de ar-condicionado, refrigeração e serviços elétricos com atendimento direto.",

  phoneDisplay: "(21) 99393-8068",
  phoneInternational: "+55 21 99393-8068",
  phoneTel: "tel:+5521993938068",

  whatsappUrl: "https://wa.me/5521993938068?text=Ol%C3%A1%2C%20encontrei%20a%20RJPH%20pelo%20site%20e%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20um%20servi%C3%A7o.",

  instagram: {
    handle: "@rafaelsantos_347",
    url: "https://www.instagram.com/rafaelsantos_347"
  },

  googleBusinessProfile: "https://share.google/V2TRUD82nXoVRUBgm",

  language: "pt-BR",

  hours: {
    monday: "09:00–18:00",
    tuesday: "09:00–18:00",
    wednesday: "09:00–18:00",
    thursday: "09:00–18:00",
    friday: "09:00–18:00",
    saturday: "09:00–18:00",
    sunday: "09:00–18:00",
    summary: "Segunda a Domingo, das 09:00 às 18:00"
  },

  formId: "V2getowmokHr4p59Ke9V",
  formUrl: "https://api.leadconnectorhq.com/widget/form/V2getowmokHr4p59Ke9V",
  chatWidgetId: "6abe750893bdc8881e8ca6ba"
};
