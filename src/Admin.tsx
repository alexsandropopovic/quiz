import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Admin() {
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    // Load stats from localStorage
    const leads = JSON.parse(localStorage.getItem('quiz_leads') || '[]');
    
    const stepCounts = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0
    };

    leads.forEach((lead: any) => {
      if (lead.step && stepCounts[lead.step as keyof typeof stepCounts] !== undefined) {
        stepCounts[lead.step as keyof typeof stepCounts]++;
      }
    });

    const data = [
      { name: '1: Boas-vindas', leads: stepCounts[1] },
      { name: '2: Quiz', leads: stepCounts[2] },
      { name: '3: Oração', leads: stepCounts[3] },
      { name: '4: Depoimento', leads: stepCounts[4] },
      { name: '5: Vendas', leads: stepCounts[5] },
    ];

    setStats(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Painel Administrativo - Funil do Quiz</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Evolução dos Leads por Fase</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#f59e0b" name="Quantidade de Leads" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
