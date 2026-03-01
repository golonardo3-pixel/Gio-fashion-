/**
 * GIO FASHION MODAS - LANDING PAGE (VERSÃO ATUALIZADA)
 */

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const STORE_INFO = {
  name: "Gio Fashion Modas",
  instagram: "https://www.instagram.com/giofashionmodass",
  whatsapp_number: "5599999999999",
  whatsapp_link: "https://wa.me/5599999999999",
};

// Dados dos produtos baseados nas imagens reais da pasta /public/assets/produtos
const CATALOG_DATA = [
  { 
    id: 1, 
    name: "Conjunto Elegance Nude", 
    desc: "Sofisticação e conforto para o seu dia a dia.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
  { 
    id: 2, 
    name: "Vestido Floral Soft", 
    desc: "Leveza e feminilidade em cada detalhe.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
  { 
    id: 3, 
    name: "Blusa Silk Touch", 
    desc: "O toque de seda que valoriza seu visual.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
  { 
    id: 4, 
    name: "Calça Tailoring Premium", 
    desc: "Corte impecável para um look moderno.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
  { 
    id: 5, 
    name: "Acessório Golden Glow", 
    desc: "O brilho que faltava na sua composição.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
  { 
    id: 6, 
    name: "Look Casual Chic", 
    desc: "Versatilidade para todas as ocasiões.",
    image: "/assets/produtos/Screenshot_2026-02-28-19-08-00-451_com.instagram.android.jpg",
    instagram_url: "https://www.instagram.com/giofashionmodass"
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-tight text-[#d4a373]">
          GIO FASHION
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#colecao" className="text-sm font-medium hover:text-[#d4a373] transition-colors">Coleção</a>
          <a href="#instagram" className="text-sm font-medium hover:text-[#d4a373] transition-colors">Instagram</a>
          <a 
            href={STORE_INFO.whatsapp_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#d4a373] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#bc8a5f] transition-all"
          >
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-[#d4a373]" onClick={() => setIsOpen(!isOpen)}>
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
            <a href="#colecao" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Coleção</a>
            <a href="#instagram" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Instagram</a>
            <a 
              href={STORE_INFO.whatsapp_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-[#d4a373] text-white py-4 rounded-full text-center font-bold"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-6xl md:text-8xl text-[#4a4a4a] mb-6 leading-tight">
            Gio Fashion Modas
          </h1>
          <p className="text-xl md:text-2xl text-[#6b6b6b] mb-12 font-light max-w-2xl mx-auto">
            Moda feminina e acessórios que valorizam sua beleza ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#colecao" className="bg-[#d4a373] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#bc8a5f] transition-all shadow-lg shadow-[#d4a373]/20">
              Ver Coleção
            </a>
            <a 
              href={STORE_INFO.whatsapp_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-[#d4a373] border-2 border-[#d4a373] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#fdf2f2] transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#fdf2f2] rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#fdf2f2] rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

const ProductCard: React.FC<{ item: any }> = ({ item }) => {
  const waLink = `https://wa.me/${STORE_INFO.whatsapp_number}?text=Olá! Gostaria de saber mais sobre o produto: ${item.name}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white group"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative bg-[#fdf2f2]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Se a imagem real não existir, mostra um placeholder elegante
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
            const icon = document.createElement('div');
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a373" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
            (e.target as HTMLImageElement).parentElement!.appendChild(icon);
          }}
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-center px-2">
        <h3 className="text-xl font-serif font-bold text-[#4a4a4a] mb-1">{item.name}</h3>
        <p className="text-[#8b8b8b] text-sm mb-6 font-light">{item.desc}</p>
        <div className="flex flex-col gap-3">
          <a 
            href={waLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#d4a373] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#bc8a5f] transition-colors"
          >
            <MessageCircle size={18} />
            Comprar no WhatsApp
          </a>
          <a 
            href={item.instagram_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#d4a373] text-[#d4a373] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#fdf2f2] transition-colors"
          >
            <Instagram size={18} />
            Ver no Instagram
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="colecao" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-[#d4a373] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nossa Curadoria</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4a4a4a] mb-6">Coleção Exclusiva</h2>
          <div className="w-12 h-0.5 bg-[#d4a373] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-x-12 md:gap-y-24">
          {CATALOG_DATA.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-24 bg-[#fdf2f2]">
      <div className="container mx-auto px-4 text-center">
        <Instagram className="mx-auto mb-8 text-[#d4a373]" size={48} strokeWidth={1.5} />
        <h2 className="font-serif text-4xl text-[#4a4a4a] mb-6">Siga nossa jornada</h2>
        <p className="text-[#6b6b6b] mb-12 max-w-xl mx-auto font-light text-lg">
          Acompanhe nossos provadores diários e novidades em tempo real no nosso perfil oficial.
        </p>
        <a 
          href={STORE_INFO.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-[#d4a373] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#bc8a5f] transition-all shadow-lg shadow-[#d4a373]/20"
        >
          <Instagram size={24} />
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-[#fdf2f2]">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-3xl font-bold text-[#d4a373] mb-6 tracking-tighter">GIO FASHION</h3>
        <p className="text-[#8b8b8b] text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Moda feminina e acessórios selecionados com amor para valorizar a sua essência.
        </p>
        <div className="flex justify-center gap-8 mb-12">
          <a href={STORE_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:scale-110 transition-transform">
            <Instagram size={24} />
          </a>
          <a href={STORE_INFO.whatsapp_link} target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </a>
        </div>
        <div className="pt-8 border-t border-[#fdf2f2] text-[#8b8b8b] text-xs uppercase tracking-widest">
          © 2024 Gio Fashion Modas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={STORE_INFO.whatsapp_link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#4a4a4a] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#fdf2f2]">
        Fale conosco!
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#fdf2f2] selection:text-[#d4a373] font-sans">
      <Navbar />
      <Hero />
      <Products />
      <InstagramSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
