import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Printer } from 'lucide-react';

// Tipos TypeScript
interface Option {
  value: number;
  label: string;
}

interface Question {
  id: string;
  category: 'economic' | 'social';
  text: string;
  options: Option[];
}

interface Ideology {
  name: string;
  color: string;
  polygon: number[][];
  description: string;
}

interface Answers {
  [key: string]: number;
}

const questions: Question[] = [
  // Preguntas Económicas (15 preguntas)
  {
    id: 'eco1',
    category: 'economic',
    text: '¿Qué opinas sobre la intervención del Estado en la economía?',
    options: [
      { value: -2, label: 'Debe controlar completamente la economía' },
      { value: -1, label: 'Debe regular fuertemente los mercados' },
      { value: 0, label: 'Debe mantener un equilibrio' },
      { value: 1, label: 'Debe intervenir mínimamente' },
      { value: 2, label: 'No debe intervenir en absoluto' }
    ]
  },
  {
    id: 'eco2',
    category: 'economic',
    text: '¿Cuál es tu posición sobre los impuestos?',
    options: [
      { value: -2, label: 'Deben ser muy altos para redistribuir riqueza' },
      { value: -1, label: 'Deben ser progresivos y considerables' },
      { value: 0, label: 'Deben ser moderados' },
      { value: 1, label: 'Deben ser bajos' },
      { value: 2, label: 'Deben ser mínimos o inexistentes' }
    ]
  },
  {
    id: 'eco3',
    category: 'economic',
    text: '¿Cómo ves la propiedad privada?',
    options: [
      { value: -2, label: 'Debería ser abolida o muy limitada' },
      { value: -1, label: 'Debería estar fuertemente regulada' },
      { value: 0, label: 'Debería tener algunas regulaciones' },
      { value: 1, label: 'Debería ser ampliamente protegida' },
      { value: 2, label: 'Es un derecho fundamental absoluto' }
    ]
  },
  {
    id: 'eco4',
    category: 'economic',
    text: '¿Cuál debería ser el rol del Estado en los servicios públicos?',
    options: [
      { value: -2, label: 'Debe proveer todos los servicios básicos' },
      { value: -1, label: 'Debe proveer la mayoría de servicios' },
      { value: 0, label: 'Debe proveer algunos servicios clave' },
      { value: 1, label: 'Debe proveer solo servicios esenciales' },
      { value: 2, label: 'Debe privatizar todo' }
    ]
  },
  {
    id: 'eco5',
    category: 'economic',
    text: '¿Qué opinas sobre el salario mínimo?',
    options: [
      { value: -2, label: 'Debe ser muy alto y controlado por el Estado' },
      { value: -1, label: 'Debe ser regulado y ajustado regularmente' },
      { value: 0, label: 'Debe existir pero con flexibilidad' },
      { value: 1, label: 'Debe ser mínimo o eliminado gradualmente' },
      { value: 2, label: 'No debe existir, el mercado debe decidir' }
    ]
  },
  {
    id: 'eco6',
    category: 'economic',
    text: '¿Cuál es tu posición sobre la regulación empresarial?',
    options: [
      { value: -2, label: 'Las empresas deben ser controladas por el Estado' },
      { value: -1, label: 'Necesitan fuerte regulación estatal' },
      { value: 0, label: 'Regulación moderada para proteger consumidores' },
      { value: 1, label: 'Regulación mínima, solo para competencia' },
      { value: 2, label: 'Autorregulación del mercado' }
    ]
  },
  {
    id: 'eco7',
    category: 'economic',
    text: '¿Qué opinas sobre el comercio internacional?',
    options: [
      { value: -2, label: 'Debe ser controlado y restringido por el Estado' },
      { value: -1, label: 'Necesita regulaciones para proteger industria local' },
      { value: 0, label: 'Equilibrio entre libre comercio y protección' },
      { value: 1, label: 'Libre comercio con mínimas restricciones' },
      { value: 2, label: 'Libre comercio absoluto sin barreras' }
    ]
  },
  {
    id: 'eco8',
    category: 'economic',
    text: '¿Cuál debería ser el rol del Estado en la banca?',
    options: [
      { value: -2, label: 'Nacionalizar todos los bancos' },
      { value: -1, label: 'Fuerte regulación y control estatal' },
      { value: 0, label: 'Regulación moderada para estabilidad' },
      { value: 1, label: 'Regulación mínima, libertad bancaria' },
      { value: 2, label: 'Banca libre sin regulación estatal' }
    ]
  },
  {
    id: 'eco9',
    category: 'economic',
    text: '¿Qué opinas sobre la planificación económica?',
    options: [
      { value: -2, label: 'Planificación central total' },
      { value: -1, label: 'Planificación estatal en sectores clave' },
      { value: 0, label: 'Planificación mixta público-privada' },
      { value: 1, label: 'Planificación privada principalmente' },
      { value: 2, label: 'Sin planificación, solo mercado libre' }
    ]
  },
  {
    id: 'eco10',
    category: 'economic',
    text: '¿Cuál es tu posición sobre la desigualdad económica?',
    options: [
      { value: -2, label: 'Debe ser eliminada completamente' },
      { value: -1, label: 'Debe ser fuertemente reducida' },
      { value: 0, label: 'Debe ser moderada' },
      { value: 1, label: 'Es aceptable si hay oportunidades' },
      { value: 2, label: 'Es natural y necesaria' }
    ]
  },
  {
    id: 'eco11',
    category: 'economic',
    text: '¿Qué opinas sobre las corporaciones multinacionales?',
    options: [
      { value: -2, label: 'Deben ser prohibidas o nacionalizadas' },
      { value: -1, label: 'Deben ser fuertemente reguladas' },
      { value: 0, label: 'Regulación moderada pero permitidas' },
      { value: 1, label: 'Libertad con regulación mínima' },
      { value: 2, label: 'Libertad total sin restricciones' }
    ]
  },
  {
    id: 'eco12',
    category: 'economic',
    text: '¿Cuál debería ser el rol del Estado en la innovación?',
    options: [
      { value: -2, label: 'Dirigir toda la investigación y desarrollo' },
      { value: -1, label: 'Liderar la innovación en sectores clave' },
      { value: 0, label: 'Colaborar con el sector privado' },
      { value: 1, label: 'Facilitar pero no dirigir' },
      { value: 2, label: 'No intervenir, dejar al mercado' }
    ]
  },
  {
    id: 'eco13',
    category: 'economic',
    text: '¿Qué opinas sobre el sistema monetario?',
    options: [
      { value: -2, label: 'Control total estatal de la moneda' },
      { value: -1, label: 'Banco central con fuerte intervención' },
      { value: 0, label: 'Banco central independiente' },
      { value: 1, label: 'Competencia de monedas privadas' },
      { value: 2, label: 'Patrón oro o monedas descentralizadas' }
    ]
  },
  {
    id: 'eco14',
    category: 'economic',
    text: '¿Cuál es tu posición sobre la seguridad social?',
    options: [
      { value: -2, label: 'Sistema universal y generoso' },
      { value: -1, label: 'Sistema público robusto' },
      { value: 0, label: 'Sistema mixto público-privado' },
      { value: 1, label: 'Sistema principalmente privado' },
      { value: 2, label: 'Sin sistema estatal, solo privado' }
    ]
  },
  {
    id: 'eco15',
    category: 'economic',
    text: '¿Qué opinas sobre la propiedad intelectual?',
    options: [
      { value: -2, label: 'Debe ser propiedad del Estado' },
      { value: -1, label: 'Regulación estricta y limitada' },
      { value: 0, label: 'Sistema actual con mejoras' },
      { value: 1, label: 'Protección fuerte pero tiempo limitado' },
      { value: 2, label: 'Abolir patentes y derechos de autor' }
    ]
  },

  // Preguntas Sociales (15 preguntas)
  {
    id: 'soc1',
    category: 'social',
    text: '¿Qué opinas sobre las libertades individuales?',
    options: [
      { value: 2, label: 'Deben ser absolutas sin restricciones' },
      { value: 1, label: 'Deben ser amplias con mínimas restricciones' },
      { value: 0, label: 'Deben equilibrarse con el orden social' },
      { value: -1, label: 'Deben subordinarse al bien común' },
      { value: -2, label: 'Deben ser limitadas por el Estado' }
    ]
  },
  {
    id: 'soc2',
    category: 'social',
    text: '¿Cuál es tu posición sobre la autoridad del Estado?',
    options: [
      { value: 2, label: 'Debe ser mínima o inexistente' },
      { value: 1, label: 'Debe ser limitada y descentralizada' },
      { value: 0, label: 'Debe ser moderada y democrática' },
      { value: -1, label: 'Debe ser fuerte para mantener orden' },
      { value: -2, label: 'Debe ser total para dirigir la sociedad' }
    ]
  },
  {
    id: 'soc3',
    category: 'social',
    text: '¿Cómo ves la censura y el control de información?',
    options: [
      { value: 2, label: 'Completamente inaceptable' },
      { value: 1, label: 'Solo en casos muy extremos' },
      { value: 0, label: 'Aceptable para contenido dañino' },
      { value: -1, label: 'Necesaria para mantener orden social' },
      { value: -2, label: 'Necesaria para proteger valores comunes' }
    ]
  },
  {
    id: 'soc4',
    category: 'social',
    text: '¿Cuál debería ser el rol del Estado en las decisiones personales?',
    options: [
      { value: 2, label: 'No debe interferir en absoluto' },
      { value: 1, label: 'Debe interferir mínimamente' },
      { value: 0, label: 'Debe guiar pero no imponer' },
      { value: -1, label: 'Debe regular comportamientos dañinos' },
      { value: -2, label: 'Debe dirigir las decisiones importantes' }
    ]
  },
  {
    id: 'soc5',
    category: 'social',
    text: '¿Qué opinas sobre la diversidad cultural?',
    options: [
      { value: 2, label: 'Debe ser completamente libre y celebrada' },
      { value: 1, label: 'Es positiva con respeto mutuo' },
      { value: 0, label: 'Debe equilibrarse con cohesión social' },
      { value: -1, label: 'Debe ser limitada para mantener unidad' },
      { value: -2, label: 'Debe ser controlada por el Estado' }
    ]
  },
  {
    id: 'soc6',
    category: 'social',
    text: '¿Cuál es tu posición sobre la educación?',
    options: [
      { value: 2, label: 'Completamente libre y privada' },
      { value: 1, label: 'Principalmente privada con opciones' },
      { value: 0, label: 'Sistema mixto público-privado' },
      { value: -1, label: 'Principalmente pública con estándares' },
      { value: -2, label: 'Completamente pública y uniforme' }
    ]
  },
  {
    id: 'soc7',
    category: 'social',
    text: '¿Qué opinas sobre el control de armas?',
    options: [
      { value: 2, label: 'Derecho absoluto a portar armas' },
      { value: 1, label: 'Derecho amplio con pocas restricciones' },
      { value: 0, label: 'Regulación moderada' },
      { value: -1, label: 'Fuerte control estatal' },
      { value: -2, label: 'Prohibición total excepto fuerzas del orden' }
    ]
  },
  {
    id: 'soc8',
    category: 'social',
    text: '¿Cuál es tu posición sobre el matrimonio?',
    options: [
      { value: 2, label: 'Cualquier unión consensual es válida' },
      { value: 1, label: 'Matrimonio igualitario amplio' },
      { value: 0, label: 'Definición moderna inclusiva' },
      { value: -1, label: 'Definición tradicional con algunas excepciones' },
      { value: -2, label: 'Solo matrimonio tradicional' }
    ]
  },
  {
    id: 'soc9',
    category: 'social',
    text: '¿Qué opinas sobre el sistema judicial?',
    options: [
      { value: 2, label: 'Justicia privada y arbitraje' },
      { value: 1, label: 'Sistema judicial limitado' },
      { value: 0, label: 'Sistema judicial independiente' },
      { value: -1, label: 'Sistema judicial fuerte' },
      { value: -2, label: 'Justicia dirigida por el Estado' }
    ]
  },
  {
    id: 'soc10',
    category: 'social',
    text: '¿Cuál es tu posición sobre la religión en la sociedad?',
    options: [
      { value: 2, label: 'Separación total Estado-religión' },
      { value: 1, label: 'Libertad religiosa amplia' },
      { value: 0, label: 'Respeto mutuo y convivencia' },
      { value: -1, label: 'Religión debe tener rol social' },
      { value: -2, label: 'Estado debe promover valores religiosos' }
    ]
  },
  {
    id: 'soc11',
    category: 'social',
    text: '¿Qué opinas sobre la inmigración?',
    options: [
      { value: 2, label: 'Fronteras abiertas totalmente' },
      { value: 1, label: 'Inmigración libre con procedimientos simples' },
      { value: 0, label: 'Sistema de inmigración equilibrado' },
      { value: -1, label: 'Control estricto pero permitida' },
      { value: -2, label: 'Fuerte restricción y control estatal' }
    ]
  },
  {
    id: 'soc12',
    category: 'social',
    text: '¿Cuál es tu posición sobre la tecnología y privacidad?',
    options: [
      { value: 2, label: 'Privacidad absoluta, sin vigilancia' },
      { value: 1, label: 'Privacidad fuerte con excepciones mínimas' },
      { value: 0, label: 'Equilibrio privacidad-seguridad' },
      { value: -1, label: 'Vigilancia para seguridad pública' },
      { value: -2, label: 'Vigilancia total del Estado' }
    ]
  },
  {
    id: 'soc13',
    category: 'social',
    text: '¿Qué opinas sobre los derechos de las minorías?',
    options: [
      { value: 2, label: 'Derechos individuales absolutos' },
      { value: 1, label: 'Protección fuerte de minorías' },
      { value: 0, label: 'Protección con cohesión social' },
      { value: -1, label: 'Derechos limitados por mayoría' },
      { value: -2, label: 'Conformidad con valores dominantes' }
    ]
  },
  {
    id: 'soc14',
    category: 'social',
    text: '¿Cuál es tu posición sobre el servicio militar?',
    options: [
      { value: 2, label: 'Ejército completamente voluntario' },
      { value: 1, label: 'Servicio voluntario incentivado' },
      { value: 0, label: 'Servicio mixto según necesidades' },
      { value: -1, label: 'Servicio obligatorio en crisis' },
      { value: -2, label: 'Servicio militar obligatorio' }
    ]
  },
  {
    id: 'soc15',
    category: 'social',
    text: '¿Qué opinas sobre el rol del Estado en la moral?',
    options: [
      { value: 2, label: 'Estado no debe intervenir en moral' },
      { value: 1, label: 'Moral personal, no estatal' },
      { value: 0, label: 'Principios básicos compartidos' },
      { value: -1, label: 'Estado debe promover buenos valores' },
      { value: -2, label: 'Estado debe dirigir la moral social' }
    ]
  }
];

const ideologies: Ideology[] = [
  // Anarquías: pequeños polígonos circulares encima del rombo (fuera del rango 0-1)
  {
    name: 'Anarquismo',
    color: '#fa0000ff',
    polygon: [[1, 1], [0.9, 1], [0.9, 0.9]],
    description: 'Abolición total del Estado, máxima libertad individual'
  },
  {
    name: 'Anarcocapitalismo',
    color: '#eeff00ff',
    polygon: [[1, 1], [1, 0.9], [0.9, 0.9]],
    description: 'Mercado libre absoluto sin Estado'
  },

  {
    name: 'Socialismo Libertario',
    color: '#e3a666ff',
    polygon: [[0.5, 1], [0.5, 0.9], [0.7, 0.7], [0.9, 0.9],[0.9, 1]],
    description: 'Cooperativas y autogestión'
  },
  {
    name: 'Progresismo Social',
    color: '#92e985ff',
    polygon: [[0, 1], [0.5, 1], [0.5, 0.9], [0.3, 0.7]],
    description: 'Intervención social con libertad individual'
  },
  {
    name: 'Social Democracia',
    color: '#dc6ca8ff',
    polygon: [[0.5, 0.9], [0.1, 0.5], [0.5, 0.5]],
    description: 'Economía de mercado con Estado de bienestar'
  },
  {
    name: 'Capitalismo Libertario',
    color: '#d6dcacff',
    polygon: [[1, 0.5], [0.9, 0.5], [0.7, 0.7], [0.9, 0.9],[1, 0.9]],
    description: 'Mínimo Estado, máxima libertad económica'
  },

  // Fila 1 (y de 0.3333 a 0.6667) – centro
  {
    name: 'Socialismo Democrático',
    color: '#d45050ff',
    polygon: [[0, 1], [0, 0.5], [0.1, 0.5], [0.3, 0.7]],
    description: 'Control económico en democracia'
  },
  {
    name: 'Liberalismo Clásico',
    color: '#ffff00ff',
    polygon: [[0.5, 0.9], [0.9, 0.5], [0.5, 0.5]],
    description: 'Libertades individuales con Estado limitado'
  },
  {
    name: 'Conservadurismo Democrático',
    color: '#128ef3ff',
    polygon: [[0.9, 0.5], [0.5, 0.1], [0.5, 0.5]],
    description: 'Valores tradicionales con democracia'
  },
  {
    name: 'Conservadurismo Libertario',
    color: '#a0aa19ff',
    polygon: [[0.7, 0.3], [1, 0], [1, 0.5], [0.9, 0.5]],
    description: 'Estado mínimo con valores conservadores'
  },

  {
    name: 'Nacional Desenvolvimentismo',
    color: '#000000ff',
    polygon: [[0.1, 0.5], [0.5, 0.1], [0.5, 0.5]],
    description: 'Intervención estatal para desarrollo nacional'
  },
  {
    name: 'Conservadurismo Social',
    color: '#D35400',
    polygon: [[0.5, 0], [0.5, 0.1], [0.7, 0.3], [1, 0]],
    description: 'Tradición y moral social'
  },
  {
    name: 'Socialismo Totalitario',
    color: '#830d00ff',
    polygon: [[0, 0], [0.3, 0.3], [0.1, 0.5], [0, 0.5]],
    description: 'Control estatal absoluto'
  },
  {
    name: 'Fascismo',
    color: '#393939ff',
    polygon: [[0, 0], [0.3, 0.3], [0.5, 0.1], [0.5, 0]],
    description: 'Totalitarismo nacionalista'
  }
];


// 3. AÑADE después del array de ideologies:

interface HistoricalFigure {
  name: string;
  x: number;
  y: number;
  color: string;
  description: string;
}

const historicalFigures: HistoricalFigure[] = [
  // Libertarios/Anarquistas (Anarquismo)
  { name: 'Milton Friedman', x: 0.75, y: 0.6, color: '#FF6B6B', description: 'Liberalismo clásico - Monetarismo' },
  { name: 'Murray Rothbard', x: 0.97, y: 0.93, color: '#FF8E53', description: 'Anarco-capitalismo' },

  // Liberales/Centro (Liberalismo Clásico)
  { name: 'Friedrich Hayek', x: 0.87, y: 0.67, color: '#85C1E9', description: 'Liberalismo clásico, Escuela Austriaca' },
  { name: 'Adam Smith', x: 0.58, y: 0.60, color: '#45B7D1', description: 'Economía de mercado, mano invisible' },

  // Socialdemócratas/Izquierda democrática (Social Democracia)
  { name: 'John Maynard Keynes', x: 0.37, y: 0.63, color: '#96CEB4', description: 'Keynesianismo, estado de bienestar' },
  { name: 'Bernie Sanders', x: 0.30, y: 0.70, color: '#A9DFBF', description: 'Socialismo americano' },

  // Socialistas/Comunistas (Socialismo Totalitario - moderado)
  { name: 'Karl Marx', x: 0.05, y: 0.33, color: '#F1C40F', description: 'Comunismo, materialismo histórico' },
  { name: 'Mohandas Gandhi', x: 0.1, y: 0.7, color: '#EC7063', description: 'Socialismo democrático revolucionario' },

  // Autoritarios de izquierdas (Socialismo Totalitario - extremo)
  { name: 'Vladimir Lenin', x: 0.08, y: 0.20, color: '#E74C3C', description: 'Bolchevismo, revolución proletaria' },
  { name: 'Joseph Stalin', x: 0.0, y: 0.00, color: '#922B21', description: 'Totalitarismo comunista' },

  // Conservadores/Cristianodemócratas (Conservadurismo Social)
  { name: 'Edmund Burke', x: 0.68, y: 0.10, color: '#F39C12', description: 'Conservadurismo tradicional' },
  { name: 'Pierre-Joseph Proudhon', x: 0.6, y: 0.9, color: '#D35400', description: 'Mutualismo' },

  // Neoconservadores/Autoritarios de derechas (Fascismo en social)
  { name: 'Benito Mussolini', x: 0.33, y: 0.05, color: '#6C3483', description: 'Fascismo italiano' },
  { name: 'Adolf Hitler', x: 0.2, y: 0.05, color: '#4A148C', description: 'Nazismo, totalitarismo racial' },

  // Centristas/Pragmáticos (Tercera Vía)
  { name: 'Tony Blair', x: 0.50, y: 0.50, color: '#DDA0DD', description: 'Tercera vía, New Labour' },
  { name: 'Bill Clinton', x: 0.52, y: 0.48, color: '#D2B4DE', description: 'Neoliberalismo progresista' },

  // Nacionalistas/Populistas (Conservadurismo Libertario)
  { name: 'Donald Trump', x: 0.65, y: 0.33, color: '#FF7043', description: 'Populismo conservador' },
  { name: 'Marine Le Pen', x: 0.45, y: 0.30, color: '#E65100', description: 'Nacionalismo populista' }
];


const Survey: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [hoveredIdeology, setHoveredIdeology] = useState<Ideology | null>(null);

  React.useEffect(() => {
      const style = document.createElement('style');
      style.textContent = `
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area, .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      // La función de limpieza no debe retornar nada
      return () => {
          document.head.removeChild(style);
      };
  }, []);

  const handleAnswer = (questionId: string, value: number): void => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = (): void => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetSurvey = (): void => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setHoveredIdeology(null);
  };

  const mapEconScore = (responses: Answers): number => {
    const econQuestions = questions.filter(q => q.category === 'economic');
    const econAnswers = econQuestions.map(q => responses[q.id] || 0);
    const sum = econAnswers.reduce((acc, val) => acc + val, 0);
    return (sum / (econQuestions.length * 2)) * 0.5 + 0.5; // Normalizar a 0-1
  };

  const mapSocScore = (responses: Answers): number => {
    const socQuestions = questions.filter(q => q.category === 'social');
    const socAnswers = socQuestions.map(q => responses[q.id] || 0);
    const sum = socAnswers.reduce((acc, val) => acc + val, 0);
    return (sum / (socQuestions.length * 2)) * 0.5 + 0.5; // Normalizar a 0-1
  };

  const determineIdeology = (x: number, y: number): Ideology => {
    for (const ideology of ideologies) {
      if (isPointInPolygon(x, y, ideology.polygon)) {
        return ideology;
      }
    }
    return { name: 'Indefinido', color: '#95A5A6', description: 'Posición no clasificada', polygon: [] };
  };

  const isPointInPolygon = (x: number, y: number, polygon: number[][]): boolean => {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      if (((polygon[i][1] > y) !== (polygon[j][1] > y)) &&
        (x < (polygon[j][0] - polygon[i][0]) * (y - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
        inside = !inside;
      }
    }
    return inside;
  };

  const econScore = mapEconScore(answers);
  const socScore = mapSocScore(answers);
  const userIdeology = determineIdeology(econScore, socScore);
  const [hoveredFigure, setHoveredFigure] = useState<HistoricalFigure | null>(null);
  const transformToRhombus = (x: number, y: number) => {
    // invierto el eje Y lógico
    const centeredX = 0.5 - y;
    const centeredY = 0.5 - x;

    // rotación de 45°
    const rotatedX = centeredX * Math.cos(Math.PI/4) - centeredY * Math.sin(Math.PI/4);
    const rotatedY = centeredX * Math.sin(Math.PI/4) + centeredY * Math.cos(Math.PI/4);

    // escalo al SVG (200 = half-width, 200 = half-height)
    const scaledX = rotatedX * 200 + 200;
    const scaledY = rotatedY * 200 + 200;

    return { x: scaledX, y: scaledY };
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-6xl mx-auto  print-area">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-2">
                <h1 className="text-4xl font-bold text-gray-800">
                  Resultados del Posicionamiento Político
                </h1>
              </div>
              <p className="text-gray-600">Tu ubicación en el Diagrama de Nolan</p>
            </div>
            <div className="flex justify-center opacity-20 pointer-events-none opacity-20 mb-8">
                  <img 
                    src="https://i.imgur.com/apoE4Dp.png" 
                    alt="Watermark" 
                    className="w-16 h-16 object-contain"
                  />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Diagrama de Nolan
                </h2>
                <div className="relative bg-gray-50 rounded-lg p-4">
                  <svg
                    width="100%"
                    height="400"
                    viewBox="0 0 400 400"
                    className="border rounded-lg bg-white"
                  >
                    {/* Renderizar sectores ideológicos transformados */}
                    {ideologies.map((ideology, idx) => {
                      const transformedPoints = ideology.polygon.map(([x, y]) => {
                        const transformed = transformToRhombus(x, y);
                        return `${transformed.x},${transformed.y}`;
                      }).join(' ');
                      
                      return (
                        <polygon
                          key={idx}
                          points={transformedPoints}
                          fill={ideology.color}
                          fillOpacity="0.3"
                          stroke={ideology.color}
                          strokeWidth="1"
                          className="cursor-pointer transition-all duration-300 hover:fill-opacity-60"
                          onMouseEnter={() => setHoveredIdeology(ideology)}
                          onMouseLeave={() => setHoveredIdeology(null)}
                        />
                      );
                    })}
                    
                    {/* Ejes del rombo */}
                    <line x1="200" y1="60" x2="200" y2="340" stroke="#374151" strokeWidth="2" />
                    <line x1="60" y1="200" x2="340" y2="200" stroke="#374151" strokeWidth="2" />
                    
                    {/* Contorno del rombo */}
                    <polygon
                      points="200,60 340,200 200,340 60,200"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="3"
                    />
                    
                    {/* Etiquetas de ejes */}
                    <text x="200" y="50" textAnchor="middle" className="fill-gray-600 text-xs font-medium">
                      Libertad Social
                    </text>
                    <text x="200" y="360" textAnchor="middle" className="fill-gray-600 text-xs font-medium">
                      Autoritarismo
                    </text>
                    <text x="30" y="205" textAnchor="middle" className="fill-gray-600 text-xs font-medium">
                      Izquierda
                    </text>
                    <text x="370" y="205" textAnchor="middle" className="fill-gray-600 text-xs font-medium">
                      Derecha
                    </text>

                    {/* Figuras históricas */}
                    {historicalFigures.map((figure, idx) => {
                      const transformed = transformToRhombus(figure.x, figure.y);
                      return (
                        <g key={idx}>
                          <circle
                            cx={transformed.x}
                            cy={transformed.y}
                            r="4"
                            fill={figure.color}
                            stroke="white"
                            strokeWidth="1"
                            className="cursor-pointer hover:r-6 transition-all duration-200"
                            onMouseEnter={() => setHoveredFigure(figure)}
                            onMouseLeave={() => setHoveredFigure(null)}
                          />
                        </g>
                      );
                    })}
                    
                    {/* Posición del usuario */}
                    {(() => {
                      const userTransformed = transformToRhombus(econScore, socScore);
                      return (
                        <>
                          <circle
                            cx={userTransformed.x}
                            cy={userTransformed.y}
                            r="8"
                            fill="#EF4444"
                            stroke="#DC2626"
                            strokeWidth="3"
                            className="animate-pulse"
                          />
                          <circle
                            cx={userTransformed.x}
                            cy={userTransformed.y}
                            r="15"
                            fill="none"
                            stroke="#EF4444"
                            strokeWidth="2"
                            opacity="0.5"
                          />
                          <text
                            x={userTransformed.x}
                            y={userTransformed.y - 20}
                            textAnchor="middle"
                            className="fill-red-600 text-sm font-bold"
                          >
                            TÚ
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                  
                  {(hoveredIdeology || hoveredFigure) && (
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border transition-all duration-200 max-w-xs">
                      {hoveredIdeology && (
                        <>
                          <h3 className="font-semibold text-gray-800">{hoveredIdeology.name}</h3>
                          <p className="text-sm text-gray-600">{hoveredIdeology.description}</p>
                        </>
                      )}
                      {hoveredFigure && (
                        <>
                          <h3 className="font-semibold text-gray-800">{hoveredFigure.name}</h3>
                          <p className="text-sm text-gray-600">{hoveredFigure.description}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Tu Posicionamiento
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-xl mb-2" style={{ color: userIdeology.color }}>
                      {userIdeology.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{userIdeology.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Libertad Económica</span>
                          <span className="text-sm font-bold text-blue-600">{(econScore * 100).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${econScore * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Libertad Social</span>
                          <span className="text-sm font-bold text-green-600">{(socScore * 100).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${socScore * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Coordenadas Exactas</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><span className="font-medium">X (Económico):</span> {econScore.toFixed(3)}</p>
                      <p><span className="font-medium">Y (Social):</span> {socScore.toFixed(3)}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 no-print"
                >
                  <Printer size={20} />
                  Imprimir Resultados
                </button>
                
                <button
                  onClick={resetSurvey}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 no-print"
                >
                  <RotateCcw size={20} />
                  Reiniciar Encuesta
                </button>
              </div>
            </div>
          </div>
            <footer className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>
                © 2024 - Todos los derechos reservados | 
                <span className="font-medium text-gray-800"> Daniel Hurtado</span> & 
                <span className="font-medium text-gray-800"> EA Tech Company S.A.S.</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Encuesta de Posicionamiento Político - Diagrama de Nolan
              </p>
            </footer>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[question.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Encuesta de Posicionamiento Político
            </h1>
            <p className="text-gray-600 text-lg">
              Descubre tu ubicación en el Diagrama de Nolan
            </p>
          </div>

          {/* Barra de progreso */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {progress.toFixed(0)}% completado
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Pregunta actual */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-102 ${
                    answers[question.id] === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-base">{option.label}</span>
                    {answers[question.id] === option.value && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextQuestion}
            disabled={!isAnswered}
            className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 transform ${
              isAnswered
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;