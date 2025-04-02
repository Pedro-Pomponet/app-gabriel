import { ChatResponse } from '../types';

interface ExpenseCategory {
  name: string;
  emoji: string;
  keywords: string[];
  monthlyLimit?: number;
  limitMessage?: (value: number) => string;
}

const EXPENSE_CATEGORIES: Record<string, ExpenseCategory> = {
  delivery: {
    name: 'Delivery',
    emoji: '🚀',
    keywords: ['ifood', 'delivery', 'rappi', 'uber eats', 'motoboy', '99food'],
    monthlyLimit: 66,
    limitMessage: (value) => `Lembrete: Você está quase chegando no seu limite definido de R$ ${value} por mês com Delivery.`
  },
  food: {
    name: 'Alimentação',
    emoji: '🍽️',
    keywords: ['ifood', 'restaurante', 'lanche', 'mercado', 'supermercado', 'padaria', 'feira'],
    monthlyLimit: 800
  },
  clothing: {
    name: 'Roupas',
    emoji: '👕',
    keywords: ['renner', 'cea', 'marisa', 'zara', 'hering', 'roupa', 'calça', 'camisa', 'vestido'],
    monthlyLimit: 200
  },
  shopping: {
    name: 'Compras',
    emoji: '🛍️',
    keywords: ['renner', 'magazine', 'americanas', 'amazon', 'mercadolivre', 'shopee', 'aliexpress'],
    monthlyLimit: 300
  },
  transport: {
    name: 'Transporte',
    emoji: '🚗',
    keywords: ['uber', '99', 'taxi', 'gasolina', 'combustível', 'ônibus', 'metrô', 'passagem'],
    monthlyLimit: 250
  },
  entertainment: {
    name: 'Lazer',
    emoji: '🎮',
    keywords: ['cinema', 'netflix', 'spotify', 'show', 'teatro', 'jogo', 'game', 'prime', 'disney'],
    monthlyLimit: 150
  },
  health: {
    name: 'Saúde',
    emoji: '⚕️',
    keywords: ['farmácia', 'remédio', 'consulta', 'médico', 'exame', 'academia', 'dentista'],
    monthlyLimit: 300
  },
  utilities: {
    name: 'Contas',
    emoji: '📊',
    keywords: ['luz', 'água', 'energia', 'gás', 'internet', 'telefone', 'celular', 'aluguel'],
    monthlyLimit: 1000
  },
  education: {
    name: 'Educação',
    emoji: '📚',
    keywords: ['curso', 'livro', 'escola', 'faculdade', 'material', 'udemy', 'alura'],
    monthlyLimit: 400
  },
  others: {
    name: 'Outros',
    emoji: '🌐',
    keywords: [],
    monthlyLimit: 0
  }
};

const formatCurrency = (value: number) => `R$ ${value.toFixed(2)}`;

function categorizeExpense(itemName: string): ExpenseCategory[] {
  const lowerItemName = itemName.toLowerCase();
  
  return Object.values(EXPENSE_CATEGORIES).filter(category =>
    category.keywords.some(keyword => lowerItemName.includes(keyword.toLowerCase()))
  );
}

const FINANCIAL_RESPONSES = {
  default: "Como posso ajudar com suas finanças hoje?",
  expenses: "Para controlar melhor seus gastos, sugiro começarmos registrando suas despesas diárias. Quer começar agora?",
  investments: "Investimentos são importantes para seu futuro financeiro. Vamos analisar seu perfil de investidor?",
  debt: "Entendo sua preocupação com dívidas. Vamos criar um plano de pagamento organizado?",
  budget: "Criar um orçamento é o primeiro passo. Vamos começar listando suas receitas e despesas mensais?"
};

// Função para gerar dados mock baseados no gasto inicial
function generateMockWeeklyData(initialExpense: { item: string, value: number }) {
  const today = new Date();
  const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const currentDayIndex = today.getDay();
  
  // Reorganiza os dias para que o dia atual seja o último
  const orderedDays = [
    ...weekDays.slice((currentDayIndex + 1) % 7),
    ...weekDays.slice(0, (currentDayIndex + 1) % 7)
  ];

  // Gera gastos aleatórios mas realistas para os outros dias
  const baseValue = initialExpense.value;
  const dailyExpenses = orderedDays.map((day, index) => {
    if (index === orderedDays.length - 1) {
      // Último dia (hoje) usa o valor real inserido
      return { day, value: baseValue };
    }
    // Outros dias têm valores aleatórios baseados no gasto inicial
    return { 
      day, 
      value: Math.round(baseValue * (0.3 + Math.random() * 1.2))
    };
  });

  const total = dailyExpenses.reduce((sum, day) => sum + day.value, 0);
  
  // Categoriza o gasto inicial
  let category = 'Outros';
  if (initialExpense.item.toLowerCase().includes('ifood')) {
    category = 'Delivery';
  } else if (initialExpense.item.toLowerCase().includes('uber')) {
    category = 'Transporte';
  }
  // ... outras categorizações baseadas no item

  return {
    dates: `${new Date(today.setDate(today.getDate() - 6)).toLocaleDateString()} a ${today.toLocaleDateString()}`,
    total,
    dailyExpenses,
    categories: [
      { name: category, value: baseValue, percentage: Math.round((baseValue/total) * 100), color: '#22C55E' },
      { name: 'Alimentação', value: Math.round(total * 0.3), percentage: 30, color: '#36A2EB' },
      { name: 'Transporte', value: Math.round(total * 0.2), percentage: 20, color: '#4BC0C0' },
      { name: 'Lazer', value: Math.round(total * 0.15), percentage: 15, color: '#9966FF' },
      { name: 'Outros', value: Math.round(total * 0.35), percentage: 35, color: '#FF9F40' }
    ],
    weeklyChange: 20 // Podemos calcular isso mais precisamente se necessário
  };
}

interface ChatState {
  lastMessage?: string;
  lastExpense?: {
    item: string;
    value: number;
    timestamp: string;
  };
}

let chatState: ChatState = {};

// Dados mock para categorias
const MOCK_CATEGORIES = [
  { name: 'Alimentação', value: 300, percentage: 30, color: '#36A2EB' },
  { name: 'Transporte', value: 200, percentage: 20, color: '#4BC0C0' },
  { name: 'Lazer', value: 150, percentage: 15, color: '#9966FF' },
  { name: 'Outros', value: 350, percentage: 35, color: '#FF9F40' }
];

function getWeekRange() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 6);
  
  // Usar o formatador nativo
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit'
  });
  
  return {
    start,
    end: today,
    formatted: `${formatter.format(start)} a ${formatter.format(today)}`
  };
}

function generateWeeklyData() {
  const weekRange = getWeekRange();
  
  // Valores baseados no último gasto do usuário (se existir)
  const baseValue = chatState.lastExpense?.value || 100;
  
  // Gera valores realistas baseados no último gasto
  const dailyValues = [
    Math.round(baseValue * 1.55), // qui
    Math.round(baseValue * 1.05), // sex
    Math.round(baseValue * 0.53), // sáb
    Math.round(baseValue * 0.64), // dom
    Math.round(baseValue * 1.31), // seg
    Math.round(baseValue * 0.52), // ter
    baseValue // qua (valor atual)
  ];

  const days = ['qui', 'sex', 'sáb', 'dom', 'seg', 'ter', 'qua'];
  const total = dailyValues.reduce((sum, val) => sum + val, 0);

  // Calcula percentuais baseados no gasto atual
  const lastCategory = chatState.lastExpense ? 
    (categorizeExpense(chatState.lastExpense.item)[0] || EXPENSE_CATEGORIES.others) : 
    EXPENSE_CATEGORIES.others;

  return {
    dates: weekRange.formatted,
    total,
    dailyData: days.map((day, i) => ({
      day,
      value: dailyValues[i]
    })),
    categoryData: [
      { 
        name: lastCategory.name, 
        value: baseValue, 
        percentage: Math.round((baseValue/total) * 100), 
        color: '#4BC0C0' 
      },
      { 
        name: 'Transporte', 
        value: Math.round(total * 0.16), 
        percentage: 16, 
        color: '#36A2EB' 
      },
      { 
        name: 'Lazer', 
        value: Math.round(total * 0.11), 
        percentage: 11, 
        color: '#9966FF' 
      },
      { 
        name: 'Contas Fixas', 
        value: Math.round(total * 0.36), 
        percentage: 36, 
        color: '#FF9F40' 
      },
      { 
        name: 'Jantar fora', 
        value: Math.round(total * 0.23), 
        percentage: 23, 
        color: '#FFCD56' 
      }
    ]
  };
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowerMessage = message.toLowerCase();
  
  // Evita resposta duplicada se for a mesma mensagem
  if (chatState.lastMessage === message) {
    return {
      message: "Aguarde um momento...",
      suggestions: []
    };
  }

  // Tenta identificar um padrão de gasto (item + valor)
  const expenseMatch = lowerMessage.match(/([a-zA-Z\s]+)\s*(\d+)/);
  
  if (expenseMatch) {
    const [_, item, value] = expenseMatch;
    const expense = { 
      item: item.trim(), 
      value: Number(value),
      timestamp: new Date().toLocaleTimeString()
    };
    
    const categories = categorizeExpense(expense.item);
    const category = categories[0] || EXPENSE_CATEGORIES.others;

    // Atualiza o estado
    chatState = {
      lastMessage: message,
      lastExpense: expense
    };

    return {
      message: `Gasto adicionado\n\n<div class="expense-card">
        <div class="expense-header">
          <div class="flex items-center gap-2">
            <span class="text-lg">${category.emoji}</span>
            <span class="text-lg">${expense.item.toUpperCase()}</span>
          </div>
        </div>
        <div class="expense-amount">R$ ${expense.value.toFixed(2)}</div>
        <div class="expense-date">${new Date().toLocaleDateString()}</div>
        ${category.monthlyLimit ? 
          `<div class="expense-limit">
            <div class="flex items-center gap-2 mb-1">
              <span>⚠️</span>
              <span>Lembrete</span>
            </div>
            <div>Você está quase chegando no seu limite definido de <span class="text-green-400 font-semibold">R$ ${category.monthlyLimit}</span> por mês com ${category.name}.</div>
           </div>` 
          : ''
        }
      </div>`,
      suggestions: [
        "quanto eu gastei nos últimos dias?",
        "ver gastos por categoria",
        "como economizar?"
      ]
    };
  }

  // Resposta para pergunta sobre gastos recentes
  if (lowerMessage.includes('gastei') && lowerMessage.includes('dias')) {
    const data = generateWeeklyData();
    
    return {
      message: `<div class="chart-container">
        <div class="chart-title">Últimos 7 dias</div>
        <div class="chart-total">R$ ${data.total.toFixed(2)} - ${data.dates}</div>
        
        <div class="bar-chart">
          ${data.dailyData.map(day => `
            <div class="bar-group">
              <div class="bar-label">${day.day}</div>
              <div class="bar" style="height: ${(day.value / 160) * 100}%">
                <span class="bar-value">${day.value}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="chart-footer">
          <span class="trend-icon">📈</span>
          Seus gastos aumentaram em 20% essa semana
        </div>
      </div>

      <div class="chart-container mt-4">
        <div class="chart-title">Divisão de gastos</div>
        <div class="chart-subtitle">${data.dates}</div>
        
        <div class="pie-chart">
          ${data.categoryData.map(cat => `
            <div class="pie-item">
              <div class="pie-color" style="background-color: ${cat.color}"></div>
              <div class="pie-label">${cat.name}</div>
              <div class="pie-value">R$ ${cat.value} (${cat.percentage}%)</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="suggestion-container">
        <button 
          class="suggestion-button" 
          data-suggestion="O que eu gastei a mais essa semana?"
        >
          O que eu gastei a mais essa semana?
        </button>
      </div>`,
      suggestions: []
    };
  }

  // Respostas para outros tipos de mensagens
  if (lowerMessage.includes('limit')) {
    return {
      message: "Você pode definir limites mensais para diferentes categorias de gastos. Qual categoria você quer configurar?",
      suggestions: [
        "Limite para Delivery",
        "Limite para Lazer",
        "Limite para Compras"
      ]
    };
  }

  // Resposta para pergunta sobre categorias
  if (lowerMessage.includes('categoria')) {
    return {
      message: "Aqui está a divisão dos seus gastos por categoria:\n" +
        "Alimentação: 30%\n" +
        "Transporte: 20%\n" +
        "Lazer: 15%\n" +
        "Outros: 35%"
    };
  }

  // Resposta para "o que eu gastei a mais"
  if (lowerMessage.includes('gastei') && lowerMessage.includes('mais')) {
    return {
      message: `<div class="expense-insight">
        <div class="expense-insight-card">
          Os gastos aumentaram nesta semana em comparação com a semana passada, totalizando <span class="highlight">R$100 a mais</span>.
          <br><br>
          O principal motivo foi a compra de gás de cozinha, realizada na segunda-feira (20/01), no valor de R$100, o que não ocorreu na semana anterior.
        </div>

        <div class="insight-message">
          Você <span class="text-orange-400">nunca mais</span> vai se fazer a pergunta 
          <span class="text-green-600">"onde que eu gastei tanto esse mês"</span>, 
          sem ter a resposta.
        </div>

        <button onclick="handleContinue()" class="continue-button">
          Continuar
        </button>
      </div>`,
      suggestions: [],
      showContinueButton: true
    };
  }

  // Atualiza a última mensagem antes de retornar
  chatState.lastMessage = message;
  
  return {
    message: "Como posso ajudar com suas finanças hoje?",
    suggestions: [
      "Registrar gasto",
      "Ver categorias",
      "Ver limites"
    ]
  };
}

// Função auxiliar para criar representação visual em ASCII dos gastos
function generateBarChartAscii(data: { day: string, value: number }[]): string {
  const maxValue = Math.max(...data.map(d => d.value));
  const scale = 20 / maxValue;
  
  return data.map(d => {
    const bars = Math.round(d.value * scale);
    return `${d.day}: ${'█'.repeat(bars)} ${d.value}`;
  }).join('\n');
} 