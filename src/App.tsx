/**
 * GIO FASHION MODAS - LANDING PAGE (VERSÃO FINAL SEM IMAGENS FICTÍCIAS)
 * 
 * CONFIGURAÇÃO RÁPIDA:
 * 1. WHATSAPP: Altere o número em STORE_INFO.whatsapp_number.
 * 2. IMAGENS: Substitua 'image: null' em CATALOG_DATA pelas URLs reais das fotos.
 */

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  Truck, 
  CreditCard, 
  ArrowRight,
  ChevronDown,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const STORE_INFO = {
  name: "Gio Fashion Modas",
  instagram: "https://www.instagram.com/giofashionmodass",
  whatsapp_number: "5519999999999", // [WHATSAPP_AQUI]
  address: "Rua Elias Fausto, 54 — Campinas/SP",
  hours: "Segunda a Sábado: 09h às 18h",
};

const CATALOG_DATA = [
  { id: 1, url: "https://www.instagram.com/p/DUwIBVPEmMS/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DUwIBVPEmMS/media/?size=l" },
  { id: 2, url: "https://www.instagram.com/p/DOeJ-oSDn9C/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DOeJ-oSDn9C/media/?size=l" },
  { id: 3, url: "https://www.instagram.com/p/DNgYumXu9WZ/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DNgYumXu9WZ/media/?size=l" },
  { id: 4, url: "https://www.instagram.com/p/DNYVZ6tO6FR/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DNYVZ6tO6FR/media/?size=l" },
  { id: 5, url: "https://www.instagram.com/p/DNYNPFZOgUW/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DNYNPFZOgUW/media/?size=l" },
  { id: 6, url: "https://www.instagram.com/p/DMX3NKcs6by/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DMX3NKcs6by/media/?size=l" },
  { id: 7, url: "https://www.instagram.com/reel/DKezxD2Oe4G/", name: "Look Gio Fashion", image: "https://www.instagram.com/reel/DKezxD2Oe4G/media/?size=l" },
  { id: 8, url: "https://www.instagram.com/p/DICTjc5SVQP/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DICTjc5SVQP/media/?size=l" },
  { id: 9, url: "https://www.instagram.com/p/DICS-U6SMLQ/", name: "Look Gio Fashion", image: "https://www.instagram.com/p/DICS-U6SMLQ/media/?size=l" },
];

const HIGHLIGHTS = CATALOG_DATA.slice(0, 4);

const FAQS = [
  { 
    question: "Como funciona o atendimento com hora marcada?", 
    answer: "Para sua maior comodidade e um atendimento personalizado, você pode agendar um horário exclusivo conosco via WhatsApp. Assim, preparamos looks selecionados especialmente para o seu estilo." 
  },
  { 
    question: "Quais as formas de pagamento?", 
    answer: "Aceitamos cartões de crédito (parcelamento sob consulta), PIX e dinheiro." 
  },
  { 
    question: "Vocês fazem entregas?", 
    answer: "Sim! Entregamos em toda Campinas via motoboy e enviamos para todo o Brasil via Correios/Transportadora." 
  },
  { 
    question: "Como funciona a política de trocas?", 
    answer: "Realizamos trocas em até 7 dias após o recebimento, desde que a peça esteja com etiqueta e sem sinais de uso. Peças em promoção não possuem troca." 
  },
];

const POLICIES = {
  troca: "Trocas podem ser realizadas em até 7 dias corridos após o recebimento do produto. A peça deve estar com a etiqueta original, sem sinais de uso ou lavagem.",
  entrega: "Entregas em Campinas via motoboy em até 24h. Para demais regiões, via Correios ou transportadora.",
  pagamento: "PIX, Cartão de Crédito em até 6x e boleto bancário.",
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Destaques", href: "#destaques" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-brand-accent">
          GIO FASHION
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${STORE_INFO.whatsapp_number}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-brand-accent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-8 px-4 flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp_number}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full max-w-xs"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-brand-secondary text-brand-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Moda Feminina & Acessórios
          </span>
          <h1 className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Estilo que <span className="italic">inspira</span>, <br />
            beleza que <span className="italic">conecta</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Curadoria exclusiva em Campinas/SP. Atendimento personalizado com hora marcada para você encontrar o seu melhor look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#catalogo" className="btn-primary">
              <ShoppingBag size={20} />
              Ver Catálogo
            </a>
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp_number}?text=Olá! Gostaria de agendar um atendimento com hora marcada.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <Calendar size={20} />
              Agendar Horário
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Calendar className="text-brand-primary" />, title: "Hora Marcada", desc: "Atendimento exclusivo e personalizado para você." },
    { icon: <Truck className="text-brand-primary" />, title: "Envio Nacional", desc: "Entregamos em todo o Brasil com rapidez e segurança." },
    { icon: <Star className="text-brand-primary" />, title: "Curadoria Premium", desc: "Peças selecionadas a dedo com foco em qualidade." },
    { icon: <CreditCard className="text-brand-primary" />, title: "Pagamento Facilitado", desc: "PIX, Cartão e parcelamento para suas compras." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-secondary/30 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ item: any }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const waLink = `https://wa.me/${STORE_INFO.whatsapp_number}?text=Olá! Vim pelo site da Gio Fashion e quero esse item do Instagram: ${item.url}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative bg-slate-100 flex flex-col items-center justify-center text-center p-6 border border-slate-200">
        {item.image && !imgError ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Instagram size={40} className="text-slate-300" />
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Ver foto no Instagram</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 px-4">
          <a 
            href={waLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-white text-brand-accent py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors"
          >
            <MessageCircle size={18} />
            Comprar no WhatsApp
          </a>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full border border-white text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Instagram size={18} />
            Ver no Instagram
          </a>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-brand-accent">{item.name}</h3>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Gio Fashion Modas</p>
      </div>
    </motion.div>
  );
};

const Highlights = () => {
  return (
    <section id="destaques" className="py-24 bg-brand-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Destaques da Semana</h2>
          <p className="text-slate-500">Nossas peças favoritas selecionadas para você</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Catalog = () => {
  return (
    <section id="catalogo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="section-title">Catálogo Completo</h2>
            <p className="text-slate-500">Explore todas as nossas peças disponíveis</p>
          </div>
          <a 
            href={STORE_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Ver perfil no Instagram <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {CATALOG_DATA.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
          <h2 className="section-title mb-8">Gio Fashion Modas</h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Nascida da paixão pela moda e pelo desejo de elevar a autoestima feminina, a Gio Fashion Modas é um espaço de curadoria e estilo em Campinas/SP.
            </p>
            <p>
              Acreditamos que cada mulher possui uma beleza única, e nossa missão é oferecer peças que traduzam essa essência com elegância, conforto e modernidade.
            </p>
            <p>
              Nosso diferencial está no atendimento próximo. Com a opção de atendimento com hora marcada, garantimos que você tenha toda a atenção necessária para montar looks que realmente façam sentido para o seu estilo.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <p className="text-4xl font-serif font-bold text-brand-accent mb-2">500+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Clientes Felizes</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <p className="text-4xl font-serif font-bold text-brand-accent mb-2">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Curadoria Própria</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm col-span-2 md:col-span-1">
              <p className="text-4xl font-serif font-bold text-brand-accent mb-2">Campinas</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Localização Local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramCTA = () => {
  return (
    <section className="py-24 bg-brand-accent text-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Instagram className="mx-auto mb-8 opacity-20" size={80} />
        <h2 className="section-title text-white mb-6">Veja mais no Instagram</h2>
        <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
          Acompanhe nossos provadores diários, novidades em tempo real e dicas de estilo exclusivas.
        </p>
        <a 
          href={STORE_INFO.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-white text-brand-accent px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          <Instagram size={24} />
          Seguir @giofashionmodass
        </a>
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
    </section>
  );
};

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown className={`transition-transform ${active === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                      {faq.answer}
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

const Policies = () => {
  return (
    <section id="politicas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Políticas da Loja</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-brand-secondary/30 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trocas</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{POLICIES.troca}</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-brand-secondary/30 rounded-xl flex items-center justify-center mb-6">
              <Truck className="text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Entrega</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{POLICIES.entrega}</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-brand-secondary/30 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Pagamento</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{POLICIES.pagamento}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-brand-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">Fale Conosco</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p className="text-white/70">{STORE_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <p className="text-white/70">{STORE_INFO.whatsapp_number}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Horário</h4>
                  <p className="text-white/70">{STORE_INFO.hours}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
              <a href={STORE_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram />
              </a>
              <a href={`https://wa.me/${STORE_INFO.whatsapp_number}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4567!2d-47.1234!3d-23.0123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ0LjMiUyA0N8KwMDcnMjQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Mapa Gio Fashion Modas"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2 uppercase tracking-tighter">GIO FASHION</h3>
            <p className="text-slate-500 text-xs">© 2024 Gio Fashion Modas. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-brand-primary transition-colors">Início</a>
            <a href="#catalogo" className="hover:text-brand-primary transition-colors">Catálogo</a>
            <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Campinas / SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={`https://wa.me/${STORE_INFO.whatsapp_number}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-accent px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Highlights />
      <Catalog />
      <About />
      <InstagramCTA />
      <FAQ />
      <Policies />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
