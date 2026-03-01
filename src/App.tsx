/**
 * CONFIGURAÇÃO RÁPIDA - GIO FASHION MODAS
 * 
 * 1. WHATSAPP: Troque o valor de 'WHATSAPP_NUMBER' abaixo (apenas números com DDD).
 * 2. ENDEREÇO: Troque o valor de 'STORE_ADDRESS' abaixo.
 * 3. LOOKS: Para atualizar os looks, substitua os arquivos em 'public/assets/looks/'
 *    mantendo os nomes fixos: look1.jpg, look2.jpg, ..., look12.jpg.
 */

const CONFIG = {
  WHATSAPP_NUMBER: "5519999999999", // [WHATSAPP_AQUI] - Troque pelo número real
  INSTAGRAM_URL: "https://www.instagram.com/giofashionmodass",
  STORE_ADDRESS: "Rua Elias Fausto, 54 — Campinas/SP", // [ENDERECO_AQUI]
  MAPS_EMBED_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2123456789!2d-47.06!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0N8KwMDMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  PAYMENT_INFO: "Dinheiro, Pix e Cartões (consulte taxas)", // [PAGAMENTO_AQUI]
  DELIVERY_INFO: "Retirada no local ou entrega via motoboy em Campinas", // [ENTREGA_AQUI]
};

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  ChevronDown, 
  CheckCircle2, 
  Clock, 
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Looks', href: '#looks' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Local', href: '#local' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-tight text-brand-accent">
          GIO FASHION <span className="text-brand-primary italic">MODAS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-accent/70 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={CONFIG.INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent/90 transition-all flex items-center gap-2"
          >
            <Instagram size={16} />
            Ver Instagram
          </a>
        </nav>

        <button className="md:hidden text-brand-accent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-nude-200 md:hidden overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-brand-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={CONFIG.INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-brand-accent text-white py-4 rounded-full text-center font-bold flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                Ver Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Olá! Gostaria de consultar a disponibilidade de algumas peças.`;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-nude-50">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Boutique Feminina em Campinas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-brand-accent mb-8 leading-[1.1]"
          >
            Moda feminina e <br />
            <span className="title-serif">acessórios exclusivos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-accent/60 mb-10 font-light leading-relaxed max-w-xl"
          >
            Novidades frequentes • Peças limitadas • Atendimento personalizado. <br className="hidden md:block" />
            Consulte disponibilidade e detalhes reais pelo nosso perfil.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Instagram className="mr-2" size={20} />
              Ver Instagram
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle className="mr-2" size={20} />
              Consultar no WhatsApp
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-brand-accent/40 italic"
          >
            Clique e veja os looks reais no perfil.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-nude-100 rounded-l-[100px] -z-0 hidden lg:block"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nude-200/30 rounded-full blur-3xl"></div>
    </section>
  );
};

const LookCard: React.FC<{ index: number }> = ({ index }) => {
  const lookId = index + 1;
  const lookName = `Look ${lookId.toString().padStart(2, '0')}`;
  const imageSrc = `/assets/looks/look${lookId}.jpg`;
  const waMessage = encodeURIComponent(`Olá! Vim pelo site da Gio Fashion Modas e quero informações do ${lookName} 😊`);
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card group"
    >
      <div className="aspect-[3/4] relative bg-nude-100 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={lookName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('flex', 'items-center', 'justify-center', 'flex-col', 'p-8', 'text-center');
              const placeholder = document.createElement('div');
              placeholder.className = 'text-brand-accent/20 flex flex-col items-center gap-4';
              placeholder.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span class="text-sm font-medium uppercase tracking-widest">Novo look em breve</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-accent shadow-sm">
          {lookName}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-accent/60 mb-6 leading-relaxed">
          Veja detalhes, tamanhos e disponibilidade no Instagram.
        </p>
        <div className="flex flex-col gap-2">
          <a 
            href={CONFIG.INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-nude-100 text-brand-accent text-sm font-bold flex items-center justify-center gap-2 hover:bg-nude-200 transition-colors"
          >
            <Instagram size={16} />
            Ver no Instagram
          </a>
          <a 
            href={waLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl border border-brand-primary text-brand-primary text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all"
          >
            <MessageCircle size={16} />
            Quero esse look
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const LooksSection = () => {
  return (
    <section id="looks" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Vitrine da Semana</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-accent mb-6">Nossos Looks</h2>
          <p className="text-brand-accent/60 max-w-xl mx-auto font-light">
            Peças selecionadas para compor seu estilo com elegância e modernidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(12)].map((_, i) => (
            <LookCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Instagram size={32} />,
      title: "Escolha seu Look",
      desc: "Acompanhe nossos provadores e fotos reais no Instagram."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Consulte no Direct",
      desc: "Chame a gente no Direct ou WhatsApp para tirar dúvidas."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Confirme Detalhes",
      desc: "Verificamos tamanhos, cores e disponibilidade para você."
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Combine a Entrega",
      desc: "Combinamos a melhor forma de você receber seu look."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-nude-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-accent mb-4">Como funciona</h2>
          <p className="text-brand-accent/60 font-light">Simples, rápido e personalizado.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-primary shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-accent mb-3">{step.title}</h3>
              <p className="text-sm text-brand-accent/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    "Vitrine atualizada no Instagram",
    "Atendimento rápido pelo direct",
    "Peças selecionadas com curadoria",
    "Looks completos e combinações reais",
    "Novidades frequentes toda semana"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-brand-accent rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 italic">Por que escolher a Gio Fashion?</h2>
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-lg font-light text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 -skew-x-12 translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="local" className="section-padding bg-nude-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Onde estamos</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-accent mb-8">Visite nossa boutique</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-brand-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-brand-accent mb-1">Endereço</h3>
                  <p className="text-brand-accent/60 font-light">{CONFIG.STORE_ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brand-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-brand-accent mb-1">Atendimento</h3>
                  <p className="text-brand-accent/60 font-light">Consulte horários e agendamentos pelo WhatsApp.</p>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.STORE_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Como chegar
                <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
          <div className="h-[400px] rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
            <iframe 
              src={CONFIG.MAPS_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como consulto tamanho e medidas?",
      a: "Você pode nos chamar no Direct do Instagram ou WhatsApp. Enviamos as medidas reais de cada peça e ajudamos você a escolher o tamanho ideal."
    },
    {
      q: "Tem provador ou atendimento com hora marcada?",
      a: "Consulte a disponibilidade de atendimento presencial e provador através do nosso WhatsApp. Adoramos receber nossas clientes!"
    },
    {
      q: "Como saber se o look ainda está disponível?",
      a: "Como nossas peças são limitadas, a melhor forma é nos enviar um print do look desejado pelo Direct ou WhatsApp. Respondemos rapidinho!"
    },
    {
      q: "Quais as formas de pagamento?",
      a: `${CONFIG.PAYMENT_INFO}.`
    },
    {
      q: "Vocês fazem entregas ou retiradas?",
      a: `${CONFIG.DELIVERY_INFO}.`
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-accent mb-4">Dúvidas Frequentes</h2>
          <p className="text-brand-accent/60 font-light">Tudo o que você precisa saber.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-nude-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-nude-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-brand-accent">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-accent/60 font-light leading-relaxed border-t border-nude-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Olá! Gostaria de falar com uma consultora.`;

  return (
    <section className="section-padding bg-nude-100">
      <div className="container-custom text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-brand-accent mb-8">Quer ver as <span className="title-serif">novidades reais?</span></h2>
          <p className="text-xl text-brand-accent/60 mb-12 font-light">
            Nosso Instagram é atualizado diariamente com novos looks, provadores e dicas de estilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-lg">
              <Instagram className="mr-3" size={24} />
              Abrir Instagram agora
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-12 py-5 text-lg">
              <MessageCircle className="mr-3" size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-nude-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-accent mb-6">GIO FASHION</h3>
            <p className="text-brand-accent/60 font-light leading-relaxed mb-6">
              Vitrine exclusiva de moda feminina em Campinas. Peças selecionadas para valorizar a sua essência.
            </p>
            <div className="flex gap-4">
              <a href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-brand-accent hover:bg-brand-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-brand-accent hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-brand-accent mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#looks" className="text-brand-accent/60 hover:text-brand-primary transition-colors">Nossos Looks</a></li>
              <li><a href="#como-funciona" className="text-brand-accent/60 hover:text-brand-primary transition-colors">Como Funciona</a></li>
              <li><a href="#local" className="text-brand-accent/60 hover:text-brand-primary transition-colors">Localização</a></li>
              <li><a href="#faq" className="text-brand-accent/60 hover:text-brand-primary transition-colors">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-accent mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-brand-accent/60 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary flex-shrink-0 mt-1" />
                <span>{CONFIG.STORE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-brand-primary flex-shrink-0" />
                <span>Consulte disponibilidade via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-nude-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-accent/40">
            © {new Date().getFullYear()} Gio Fashion Modas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-accent/30 italic max-w-md text-center md:text-right">
            Este site é uma vitrine. Confira disponibilidade e detalhes no Instagram.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* SEO JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gio Fashion Modas",
          "image": "https://ais-dev-d22p3blcazb4wcwiuflubw-108228766231.us-west2.run.app/assets/looks/look1.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Elias Fausto, 54",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "postalCode": "13000-000",
            "addressCountry": "BR"
          },
          "url": "https://ais-dev-d22p3blcazb4wcwiuflubw-108228766231.us-west2.run.app",
          "telephone": CONFIG.WHATSAPP_NUMBER,
          "priceRange": "$$",
          "sameAs": [
            CONFIG.INSTAGRAM_URL
          ]
        })}
      </script>

      <Header />
      <main>
        <Hero />
        <LooksSection />
        <HowItWorks />
        <Differentials />
        <LocationSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
