import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Lock, Play, Star, ShieldCheck, MessageCircle, BookOpen, Heart } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin';

// --- Components ---

const Logo = () => (
  <div className="flex flex-col items-center justify-center py-6">
    <div className="text-amber-600 font-serif text-3xl font-bold tracking-wider flex items-center gap-2">
      <span className="text-4xl">👑</span>
      <div className="flex flex-col items-center leading-none">
        <span>SAGRADO</span>
        <span className="text-sm font-sans font-semibold tracking-widest text-amber-800">365 DIAS</span>
        <span className="text-xs font-sans text-amber-700 italic">COM MARIA</span>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full px-6 mb-6">
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-amber-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const Layout = ({ children, progress }: { children: React.ReactNode, progress: number }) => (
  <div className="min-h-screen bg-gray-50 flex justify-center font-sans text-gray-800">
    <div className="w-full max-w-md bg-white shadow-xl min-h-screen flex flex-col relative">
      <Logo />
      <ProgressBar progress={progress} />
      <div className="flex-1 flex flex-col px-6 pb-10">
        {children}
      </div>
    </div>
  </div>
);

// --- Screens ---

const Step1Welcome = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h1 className="text-2xl font-bold text-amber-900 mb-6">
      Você não foi escolhido por acaso...
    </h1>
    <p className="text-gray-600 mb-6">
      Maria tem uma oração especial para você agora 🙏
    </p>
    
    <div className="w-full aspect-square rounded-2xl mb-8 overflow-hidden relative shadow-md border border-blue-100 flex items-center justify-center bg-blue-50">
       <img 
         src="/caminhando-com-maria.png" 
         alt="Caminhando com Maria" 
         className="w-full h-full object-cover"
         onError={(e) => {
           // Fallback if image is not found
           e.currentTarget.style.display = 'none';
           e.currentTarget.nextElementSibling?.classList.remove('hidden');
         }}
       />
       {/* Fallback content while image is not uploaded */}
       <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-blue-50">
         <Heart className="w-16 h-16 text-blue-400 mx-auto mb-2" />
         <h2 className="text-xl font-serif text-blue-800">CAMINHANDO</h2>
         <h3 className="text-lg font-serif text-blue-600">COM MARIA</h3>
         <p className="text-sm text-blue-500 mt-4 italic">rogai por nós</p>
         <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem como "caminhando-com-maria.png" na pasta public</p>
       </div>
    </div>

    <p className="text-sm text-gray-600 mb-6 px-4">
      Somente agora, este <strong className="text-amber-800">devocional personalizado</strong> estará disponível para você...
    </p>

    <h2 className="text-xl font-bold text-amber-900 mb-6">
      Você aceita <span className="text-blue-600">MARIA</span> hoje ?
    </h2>

    <button 
      onClick={onNext}
      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
    >
      SIM
    </button>
  </div>
);

const Step2Quiz = ({ onNext }: { onNext: () => void }) => {
  const options = [
    { icon: "🛡️", text: "Estou fraco(a) espiritualmente" },
    { icon: "👨‍👩‍👧‍👦", text: "Paz e união para minha família" },
    { icon: "💰", text: "Meu financeiro e profissional" },
    { icon: "🙏", text: "Minha fé" },
    { icon: "👨‍⚕️", text: "Preocupação com a saúde" }
  ];

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-amber-900 mb-2">
        O que mais está tirando a sua paz hoje?
      </h1>
      <p className="text-sm text-gray-600 mb-8">
        Essa pergunta é fundamental para personalizarmos seu devocional
      </p>

      <div className="w-full space-y-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={onNext}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-amber-400 hover:bg-amber-50 transition-colors group bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{opt.icon}</span>
              <span className="text-gray-700 font-medium text-left">{opt.text}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Step3Prayer = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="w-24 h-32 bg-blue-100 rounded-lg mb-6 overflow-hidden shadow-md flex items-center justify-center">
      <span className="text-4xl">🕊️</span>
    </div>

    <h1 className="text-xl font-bold text-amber-900 mb-4">
      Maria está feliz com sua presença...
    </h1>
    <p className="text-gray-600 mb-8 px-2">
      Seu nome já foi cuidadosamente incluído em nosso Livro de Orações, junto com a nossa comunidade de fé...
    </p>

    <div className="w-full aspect-video bg-amber-50 rounded-xl mb-8 overflow-hidden shadow-inner flex items-center justify-center border border-amber-100">
      <BookOpen className="w-16 h-16 text-amber-700 opacity-50" />
    </div>

    <button 
      onClick={onNext}
      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 mt-auto"
    >
      Continuar
    </button>
  </div>
);

const Step4Testimonial = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
    <h1 className="text-xl font-bold text-amber-900 mb-6">
      Veja como estão as pessoas que foram abençoadas com nosso devocional:
    </h1>

    {/* Fake WhatsApp Chat */}
    <div className="w-full bg-[#efeae2] rounded-xl overflow-hidden shadow-md mb-8 border border-gray-200 flex flex-col">
      <div className="bg-[#075e54] text-white p-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/seed/rosana/100/100" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="text-left flex-1">
          <div className="font-semibold text-sm">Rosana</div>
          <div className="text-xs opacity-80">online</div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-3 text-sm">
        <div className="text-center text-xs text-gray-500 my-2 bg-white/50 rounded-full py-1 px-3 self-center">12/03/2026</div>
        
        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start text-left relative">
          <span className="text-pink-500 font-semibold text-xs block mb-1">Rosana</span>
          oiiii.. passando para agradecer, recebi o devocional e já estou usando faz 1 mês.. 🙏
          <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">12:40</span>
        </div>

        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] self-start text-left relative pb-5">
          Eu me sentia muito vulnerável espiritualmente, como se faltasse proteção e força para enfrentar os meus dias. Depois que adquiri o devocional personalizado, comecei a seguir as orações todos os dias. Em pouco tempo senti mais paz, proteção e uma força espiritual que eu não sentia há muito tempo. OBRIGADAA
          <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">12:40</span>
        </div>
      </div>
    </div>

    <button 
      onClick={onNext}
      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 mt-auto"
    >
      Continuar
    </button>
  </div>
);

const Step5Sales = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => Math.min(p + 1, 100));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500 pb-20">
      <div className="w-full flex items-center justify-between text-sm font-bold text-amber-900 mb-2">
        <span>Gerando seu devocional abençoado...</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-amber-400 transition-all duration-75" style={{ width: `${progress}%` }} />
      </div>

      <h1 className="text-2xl font-bold text-amber-900 text-center mb-6 leading-tight">
        Padre <span className="text-amber-600">Frei Gilson</span> tem um recado para você... 🙏
      </h1>

      {/* Video Placeholder */}
      <div className="w-full aspect-video bg-gray-900 rounded-2xl mb-6 relative overflow-hidden shadow-xl flex items-center justify-center group cursor-pointer">
        <img src="https://picsum.photos/seed/priest/600/400" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity" />
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
           <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">se você chegou até aqui é porque Deus tem uma...</span>
        </div>
      </div>

      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg mb-12 animate-pulse">
        Confirmar Inscrição
      </button>

      {/* Sales Page Content */}
      <div className="w-full border-t border-gray-200 pt-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-amber-900 text-center mb-6">
          Seu Devocional Diário está pronto!
        </h2>
        <p className="text-amber-600 font-bold mb-2">TUDO DENTRO DE UM APLICATIVO</p>
        <p className="text-gray-600 text-sm mb-8">Para acessar aonde você estiver...</p>

        {/* Pricing Box */}
        <div className="w-full border-2 border-amber-500 rounded-2xl overflow-hidden mb-8 shadow-lg">
          <div className="bg-amber-500 text-white text-center py-2 font-bold text-sm tracking-wider">
            OFERTA LIMITADA
          </div>
          <div className="p-6 bg-white flex justify-between items-center">
            <div>
              <h3 className="text-green-600 font-bold text-lg">Acesso Vitalício</h3>
              <p className="text-gray-400 line-through text-sm">R$ 197,00</p>
              <p className="text-green-600 font-bold text-2xl">R$ 37,00</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center">
              <span className="block text-xs">Cupom</span>
              <span className="block font-bold text-xl">80%</span>
              <span className="block text-xs">OFF</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg mb-4 flex items-center justify-center gap-2">
          ADQUIRIR MEU DEVOCIONAL!
        </button>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Lock className="w-4 h-4 text-amber-500" />
          <span>SITE 100% SEGURO</span>
        </div>

        {/* Features */}
        <h3 className="text-xl font-bold text-amber-900 text-center mb-8">
          ✨ O que você vai receber entrando hoje ?
        </h3>

        <div className="space-y-6 w-full">
          {[
            { title: "Aplicativo com Devocional personalizado", desc: "Receba orações feitas para o seu momento de vida, com foco em paz, proteção e direcionamento espiritual." },
            { title: "Meditações espirituais com passagens da Bíblia", desc: "Tenha acesso a reflexões, meditações e orações diárias para fortalecer sua fé todos os dias." },
            { title: "Comunidade exclusiva no WhatsApp", desc: "Um grupo de pessoas unidas pela fé para compartilhar orações, testemunhos e fortalecer uns aos outros." }
          ].map((feat, i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-1"><Check className="w-5 h-5 text-blue-600" /></div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">{feat.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const QuizFunnel = () => {
  const [step, setStep] = useState(1);
  const [leadId, setLeadId] = useState<string>('');

  useEffect(() => {
    // Initialize a lead when they open the page
    const newLeadId = Math.random().toString(36).substring(2, 15);
    setLeadId(newLeadId);
    
    const leads = JSON.parse(localStorage.getItem('quiz_leads') || '[]');
    leads.push({ id: newLeadId, step: 1, timestamp: new Date().toISOString() });
    localStorage.setItem('quiz_leads', JSON.stringify(leads));
  }, []);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const next = Math.min(step + 1, 5);
    setStep(next);

    // Update lead progress
    if (leadId) {
      const leads = JSON.parse(localStorage.getItem('quiz_leads') || '[]');
      const updatedLeads = leads.map((l: any) => 
        l.id === leadId ? { ...l, step: next } : l
      );
      localStorage.setItem('quiz_leads', JSON.stringify(updatedLeads));
    }
  };

  // Calculate progress based on step
  const progressMap: Record<number, number> = {
    1: 10,
    2: 30,
    3: 60,
    4: 80,
    5: 100
  };

  return (
    <Layout progress={progressMap[step]}>
      {step === 1 && <Step1Welcome onNext={nextStep} />}
      {step === 2 && <Step2Quiz onNext={nextStep} />}
      {step === 3 && <Step3Prayer onNext={nextStep} />}
      {step === 4 && <Step4Testimonial onNext={nextStep} />}
      {step === 5 && <Step5Sales />}
    </Layout>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizFunnel />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
