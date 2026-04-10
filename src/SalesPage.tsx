import React, { useState } from 'react';
import { Check, Lock, ChevronDown, ChevronUp, Gift, ShieldCheck } from 'lucide-react';

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

const PricingBox = () => (
  <div className="w-full border-2 border-amber-500 rounded-2xl overflow-hidden mb-4 shadow-lg">
    <div className="bg-amber-500 text-white text-center py-2 font-bold text-sm tracking-wider">
      OFERTA LIMITADA
    </div>
    <div className="p-6 bg-[#eefcf2] flex justify-between items-center">
      <div>
        <h3 className="text-green-700 font-bold text-lg">Acesso Vitalício</h3>
        <p className="text-red-500 line-through text-sm">R$ 197,00</p>
        <p className="text-green-600 font-bold text-3xl">R$ 37,00</p>
      </div>
      <div className="bg-green-200 text-green-800 px-3 py-2 rounded-lg text-center">
        <span className="block text-[10px] uppercase font-bold">Cupom</span>
        <span className="block font-bold text-2xl leading-none">80%</span>
        <span className="block text-[10px] uppercase font-bold">OFF</span>
      </div>
    </div>
  </div>
);

const BuyButton = ({ text = "ADQUIRIR MEU DEVOCIONAL!" }) => (
  <button className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl shadow-lg mb-4 flex items-center justify-center gap-2 text-lg transition-transform active:scale-95">
    {text}
  </button>
);

const SecurityBadge = () => (
  <div className="flex flex-col items-center justify-center gap-1 text-sm text-blue-800 font-bold mb-12">
    <div className="flex items-center gap-2">
      <Lock className="w-5 h-5 text-amber-500" />
      <span>SITE 100% SEGURO</span>
    </div>
    <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">SSL CERTIFICADO</span>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left font-bold text-amber-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && <p className="mt-4 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center font-sans text-gray-800">
      <div className="w-full max-w-md bg-white shadow-xl min-h-screen flex flex-col relative pb-10">
        
        {/* Header */}
        <div className="border-b-4 border-amber-600">
          <Logo />
        </div>

        <div className="px-6 pt-8 flex flex-col items-center">
          
          {/* Testimonials 1 */}
          <h2 className="text-lg font-bold text-amber-900 text-center mb-6">
            Veja Depoimentos de nossos Fiéis 👇
          </h2>
          
          <div className="w-full bg-gray-100 rounded-xl mb-8 overflow-hidden relative min-h-[300px] flex items-center justify-center border border-gray-200">
             <img 
               src="/depoimentos-fio.png" 
               alt="Depoimentos" 
               className="w-full h-auto object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
               <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem dos depoimentos como "depoimentos-fio.png" na pasta public</p>
             </div>
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-bold text-amber-900 text-center mb-2">
            Seu Devocional Diário está pronto!
          </h1>
          <p className="text-blue-600 font-bold mb-2 uppercase tracking-wide text-sm">TUDO DENTRO DE UM APLICATIVO</p>
          <p className="text-amber-900 font-medium text-sm mb-8">Para acessar aonde você estiver...</p>

          {/* Pricing 1 */}
          <PricingBox />
          <BuyButton />
          <SecurityBadge />

          {/* Features */}
          <h2 className="text-xl font-bold text-amber-900 text-center mb-8">
            ✨ O que você vai receber entrando hoje ?
          </h2>

          <div className="space-y-6 w-full mb-10">
            {[
              { title: "Aplicativo com Devocional personalizado", desc: "Receba orações feitas para o seu momento de vida, com foco em paz, proteção e direcionamento espiritual." },
              { title: "Meditações espirituais com passagens da Bíblia", desc: "Tenha acesso a reflexões, meditações e orações diárias para fortalecer sua fé todos os dias." },
              { title: "Comunidade exclusiva no WhatsApp", desc: "Um grupo de pessoas unidas pela fé para compartilhar orações, testemunhos e fortalecer uns aos outros." },
              { title: "Desafios Práticos e Diários", desc: "Receba pequenas ações diárias para aplicar sua fé na prática e transformar sua rotina." },
              { title: "Progresso Espiritual Diário", desc: "Acompanhe sua evolução espiritual e mantenha constância na sua jornada com Deus atualizados diariamente." },
              { title: "Oração Secreta de Miguel Arcanjo", desc: "Temos orações diárias disponibilizadas por nossa equipe todos os dias, para destravar seus caminhos e suas orações." }
            ].map((feat, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1"><Check className="w-5 h-5 text-blue-800" /></div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{feat.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* App Mockup */}
          <div className="w-full bg-gray-100 rounded-xl mb-4 overflow-hidden relative min-h-[400px] flex items-center justify-center border border-gray-200">
             <img 
               src="/app-mockup.png" 
               alt="App Mockup" 
               className="w-full h-auto object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
               <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem do app como "app-mockup.png" na pasta public</p>
             </div>
          </div>
          <p className="text-blue-600 font-bold text-center mb-12">+ de 1 milhão de usuários ativos</p>

          {/* Trust Section */}
          <h2 className="text-xl font-bold text-amber-900 text-center mb-2">
            Nosso Devocional é confiável?
          </h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            SIM - Faça como a Lícia Cabral que já está colocando em prática
          </p>

          <div className="w-full bg-gray-100 rounded-xl mb-6 overflow-hidden relative min-h-[200px] flex items-center justify-center border border-gray-200">
             <img 
               src="/depoimento-licia.png" 
               alt="Depoimento Lícia" 
               className="w-full h-auto object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
               <p className="text-xs text-red-500 mt-4 px-4">Faça o upload da imagem como "depoimento-licia.png" na pasta public</p>
             </div>
          </div>

          {/* Pricing 2 */}
          <p className="text-green-600 font-bold text-sm text-center mb-2">
            <span className="text-amber-900">CUPOM</span> aplicado (80% OFF)
          </p>
          <PricingBox />
          <SecurityBadge />

          {/* Bonuses */}
          <h2 className="text-lg font-bold text-green-600 text-center mb-6 leading-tight">
            Comprando agora, você leva os bônus abaixo.<br/>
            APROVEITE:
          </h2>

          <div className="w-full space-y-4 mb-12">
            {[
              { title: "Oração especial ao familiares", oldPrice: "59,90", desc: "Destinado àqueles que mais precisam da sua ajuda neste momento." },
              { title: "Adoração", oldPrice: "39,90", desc: "Louvor em músicas ou em silêncio, reconhecendo a grandeza de Deus." },
              { title: "Reflexão Pessoal", oldPrice: "29,90", desc: "perguntas práticas como \"O que isso me ensina?\" e \"Como posso aplicar hoje?\"." }
            ].map((bonus, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <h3 className="text-blue-500 font-medium mb-2">{bonus.title}</h3>
                <div className="flex items-center justify-center gap-2 text-sm mb-3">
                  <Gift className="w-4 h-4 text-amber-500" />
                  <span className="text-gray-400 line-through">de R$ {bonus.oldPrice}</span>
                  <span>por <strong className="text-green-500">R$ 0,00</strong></span>
                </div>
                <p className="text-xs text-gray-500 italic">{bonus.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="w-full flex flex-col items-center mb-12">
            <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 relative overflow-hidden flex items-center justify-center">
               <img 
                 src="/selo-garantia.png" 
                 alt="Selo de Garantia" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <div className="text-center hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
                 <p className="text-[10px] text-red-500 px-2">Upload "selo-garantia.png"</p>
               </div>
            </div>
            
            <h3 className="font-bold text-amber-900 flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              Garantia Incondicional de 7 Dias
            </h3>
            
            <div className="text-sm text-gray-600 text-center space-y-4">
              <p>Você pode adquirir o Sagrado 365 Dias com Maria com total tranquilidade.</p>
              <p>Se dentro de 7 dias você sentir que o devocional não era o que esperava ou simplesmente mudar de ideia, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem burocracia e sem perguntas.</p>
              <p>Nosso objetivo é que você tenha uma experiência espiritual verdadeira e transformadora.</p>
              <p>Por isso, você pode acessar todo o conteúdo, conhecer os módulos e participar da jornada com Maria com risco zero para você.</p>
              <p className="text-amber-600">✨ Se não sentir que esse caminho espiritual é para você, basta pedir o reembolso dentro do prazo de garantia.</p>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-6">
            Perguntas Frequentes
          </h2>
          
          <div className="w-full mb-12">
            <FaqItem 
              question="🙏 O que é o Sagrado 365 Dias com Maria?" 
              answer="É um aplicativo devocional diário com orações, meditações e desafios práticos para fortalecer sua fé durante todo o ano." 
            />
            <FaqItem 
              question="📱 Como vou acessar o conteúdo?" 
              answer="Você receberá o acesso ao aplicativo diretamente no seu e-mail logo após a confirmação do pagamento." 
            />
            <FaqItem 
              question="💬 Como funciona a comunidade no WhatsApp?" 
              answer="Você receberá um link exclusivo para entrar no nosso grupo fechado, onde compartilhamos orações e testemunhos diariamente." 
            />
            <FaqItem 
              question="📖 Preciso ter conhecimento bíblico para participar?" 
              answer="Não! O devocional foi feito para todos, desde iniciantes até aqueles que já têm uma caminhada de fé." 
            />
            <FaqItem 
              question="💻 O acesso é vitalício?" 
              answer="Sim! Aproveitando a oferta de hoje, você terá acesso ao aplicativo e todas as atualizações para sempre." 
            />
          </div>

          {/* Footer */}
          <Logo />
          <BuyButton text="ADQUIRIR MEU SAGRADO!" />
          
          <p className="text-xs text-gray-400 text-center mt-8">
            © 2026 - Criado via inlead.digital | Central de anúncios
          </p>

        </div>
      </div>
    </div>
  );
}
