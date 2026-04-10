import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Lock, Play, Star, ShieldCheck, MessageCircle, BookOpen, Heart } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './Admin';
import SalesPage from './SalesPage';

// --- Components ---

const Logo = () => (
  <div className="flex flex-col items-center justify-center py-6">
    <img 
      src="/logo.jpg" 
      alt="Sagrado 365 Dias com Maria" 
      className="h-24 w-auto object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
    <div className="hidden text-amber-600 font-serif text-3xl font-bold tracking-wider flex items-center gap-2">
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

    <div className="w-full aspect-square bg-amber-50 rounded-xl mb-8 overflow-hidden shadow-inner flex items-center justify-center border border-amber-100 relative">
       <img 
         src="/livro-de-oracoes.png" 
         alt="Livro de Orações" 
         className="w-full h-full object-cover"
         onError={(e) => {
           e.currentTarget.style.display = 'none';
           e.currentTarget.nextElementSibling?.classList.remove('hidden');
         }}
       />
       <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-amber-50">
         <BookOpen className="w-16 h-16 text-amber-700 opacity-50 mb-2" />
         <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem como "livro-de-oracoes.png" na pasta public</p>
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

const Step4Testimonial = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
    <h1 className="text-xl font-bold text-amber-900 mb-6">
      Veja como estão as pessoas que foram abençoadas com nosso devocional:
    </h1>

    <div className="w-full rounded-xl overflow-hidden shadow-md mb-8 border border-gray-200 relative bg-gray-100 min-h-[300px] flex items-center justify-center">
       <img 
         src="/depoimento.png" 
         alt="Depoimento" 
         className="w-full h-auto object-contain"
         onError={(e) => {
           e.currentTarget.style.display = 'none';
           e.currentTarget.nextElementSibling?.classList.remove('hidden');
         }}
       />
       <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
         <MessageCircle className="w-12 h-12 text-gray-400 mb-2" />
         <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem como "depoimento.png" na pasta public</p>
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
  const navigate = useNavigate();

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

      {/* Video */}
      <div className="w-full aspect-video bg-gray-900 rounded-2xl mb-6 relative overflow-hidden shadow-xl flex items-center justify-center">
        <video 
          src="/video.mp4" 
          controls
          className="w-full h-full object-cover"
          poster="https://picsum.photos/seed/priest/600/400"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
          <Play className="w-12 h-12 text-gray-500 mb-2" />
          <p className="text-xs text-red-500 mt-4 px-4">Faça o upload do vídeo como "video.mp4" na pasta public</p>
        </div>
      </div>

      <button 
        onClick={() => navigate('/vendas')}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg mb-12 animate-pulse"
      >
        Confirmar Inscrição
      </button>
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
        <Route path="/vendas" element={<SalesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
