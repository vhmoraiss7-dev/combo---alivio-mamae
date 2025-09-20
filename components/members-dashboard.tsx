"use client"

import type React from "react"
import { useState } from "react"
import {
  HeartIcon,
  BookOpenIcon,
  SparklesIcon,
  MoonIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid"

const modules = [
  {
    id: "massagens",
    title: "Massagens na Gestação",
    icon: HeartIcon,
    description: "Técnicas seguras por trimestre para alívio e bem-estar",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "pega",
    title: "Método P.E.G.A. Amamentação",
    icon: BookOpenIcon,
    description: "Passo a passo para amamentação sem dor e pega correta",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "pos-parto",
    title: "Recuperação Pós-Parto",
    icon: SparklesIcon,
    description: "Autoestima, bem-estar físico e mental completo",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "sono",
    title: "Sono Tranquilo do Bebê",
    icon: MoonIcon,
    description: "Rotinas e técnicas para noites tranquilas",
    color: "from-blue-500 to-indigo-600",
  },
]

function getModuleContent(moduleId: string): string {
  const content: Record<string, string> = {
    massagens: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🤱 Massagens na Gestação</h2>
          <p class="text-gray-700 leading-relaxed">
            Descubra técnicas seguras e eficazes de massagem para cada trimestre da gestação, 
            promovendo relaxamento, alívio de dores e fortalecimento do vínculo com seu bebê.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">✨ Benefícios Comprovados</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Redução de 70% nos níveis de cortisol (hormônio do estresse)</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Alívio significativo de dores lombares e ciática</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Melhora da qualidade do sono em até 80% dos casos</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Redução do inchaço nas pernas e pés</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Diminuição da ansiedade e fortalecimento do vínculo mãe-bebê</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🛍️ Materiais Necessários</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Óleo de amêndoas doces ou coco (morno)</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Toalhas limpas e macias</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Almofadas para apoio e conforto</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Ambiente aquecido e música relaxante</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">📋 Passo a Passo - Massagem Completa (15-20 minutos)</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">1. Preparação do Ambiente (2 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Aqueça o ambiente para 22-24°C</li>
                <li>Coloque música relaxante em volume baixo</li>
                <li>Aqueça as mãos esfregando-as</li>
                <li>Aplique óleo nas palmas (nunca direto na pele)</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">2. Massagem nos Pés (5 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante sentada, pés no colo do parceiro</li>
                <li>Movimentos circulares na sola, pressão leve a moderada</li>
                <li>Deslize o polegar do calcanhar aos dedos (5-8 vezes cada pé)</li>
                <li>Massageie cada dedo individualmente com movimento de pinça</li>
                <li>Tornozelos: círculos lentos, 10 vezes cada direção</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">3. Panturrilhas e Pernas (5 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante deitada de lado ou sentada</li>
                <li>Movimentos ascendentes do tornozelo ao joelho</li>
                <li>Use as duas mãos com pressão firme mas confortável</li>
                <li>Movimentos de "ordenha" na panturrilha</li>
                <li>Termine com drenagem suave em direção ao coração</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">4. Região Lombar (8 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante sentada de costas para o parceiro</li>
                <li>Palmas na lombar, movimentos circulares amplos</li>
                <li>Pressão com polegares <strong>ao lado da coluna</strong> (nunca sobre ela)</li>
                <li>Movimentos de vai-e-vem da cintura às costelas</li>
                <li>Finalize com círculos suaves no sacro</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <h3 class="text-xl font-semibold text-amber-800 mb-4">⚠️ Contraindicações e Cuidados</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-amber-800 mb-2">NÃO fazer massagem em caso de:</h4>
              <ul class="space-y-1 text-amber-700">
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Gravidez de alto risco ou placenta prévia</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Sangramento vaginal ativo</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Febre ou pré-eclâmpsia severa</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Histórico de trabalho de parto prematuro</li>
              </ul>
            </div>
            <div class="bg-amber-100 p-4 rounded-lg">
              <p class="text-amber-800 font-medium">
                <strong>PARE IMEDIATAMENTE</strong> se houver contrações, sangramento ou qualquer desconforto. 
                Sempre consulte seu obstetra antes de iniciar qualquer técnica de massagem.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas para Sucesso</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Frequência ideal:</strong> 2-3 vezes por semana, 15-20 minutos</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Melhor horário:</strong> Final da tarde ou antes de dormir</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Temperatura do óleo:</strong> Morno, nunca quente</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Pressão:</strong> Sempre confortável, nunca dolorosa</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Comunicação:</strong> Pergunte sempre sobre o conforto</li>
          </ul>
        </div>
      </div>
    `,
    pega: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🤱 Método P.E.G.A. de Amamentação</h2>
          <p class="text-gray-700 leading-relaxed">
            O método revolucionário P.E.G.A. (Posição, Encaixe, Garra, Acompanhamento) 
            para uma amamentação sem dor, com pega correta e vínculo fortalecido.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🎯 O que é o Método P.E.G.A.</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-semibold text-emerald-800 mb-2">P - Posição</h4>
                <p class="text-emerald-700 text-sm">Posicionamento correto da mãe e bebê para conforto máximo</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-semibold text-emerald-800 mb-2">E - Encaixe</h4>
                <p class="text-emerald-700 text-sm">Técnica precisa para encaixar o bebê ao seio</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-semibold text-emerald-800 mb-2">G - Garra</h4>
                <p class="text-emerald-700 text-sm">Como o bebê deve "agarrar" o seio corretamente</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-semibold text-emerald-800 mb-2">A - Acompanhamento</h4>
                <p class="text-emerald-700 text-sm">Monitoramento contínuo para ajustes necessários</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">📋 Passo a Passo Detalhado</h3>
          
          <div class="space-y-6">
            <div class="border-l-4 border-emerald-500 pl-6">
              <h4 class="font-semibold text-gray-800 mb-3">ETAPA 1: Posição (P)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Sente-se confortavelmente</strong> com as costas bem apoiadas</li>
                <li><strong>Use almofadas</strong> para apoiar braços e elevar o bebê ao nível do seio</li>
                <li><strong>Posicione o bebê</strong> barriga com barriga, nariz na altura do mamilo</li>
                <li><strong>Apoie a cabeça</strong> do bebê na dobra do seu cotovelo</li>
                <li><strong>Mantenha o corpo</strong> do bebê alinhado (orelha, ombro e quadril)</li>
              </ol>
            </div>

            <div class="border-l-4 border-teal-500 pl-6">
              <h4 class="font-semibold text-gray-800 mb-3">ETAPA 2: Encaixe (E)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Toque o lábio inferior</strong> do bebê com o mamilo</li>
                <li><strong>Espere a boca abrir bem</strong> (como um bocejo)</li>
                <li><strong>Aproxime rapidamente</strong> o bebê ao seio (não leve o seio ao bebê)</li>
                <li><strong>O queixo</strong> deve tocar o seio primeiro</li>
                <li><strong>O nariz</strong> deve ficar livre para respiração</li>
              </ol>
            </div>

            <div class="border-l-4 border-emerald-600 pl-6">
              <h4 class="font-semibold text-gray-800 mb-3">ETAPA 3: Garra (G)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Verifique se o lábio inferior</strong> está virado para fora</li>
                <li><strong>A boca deve cobrir</strong> grande parte da aréola, não só o mamilo</li>
                <li><strong>As bochechas</strong> devem estar arredondadas, não encovadas</li>
                <li><strong>Você deve ouvir</strong> a deglutição, não estalos</li>
                <li><strong>Não deve haver dor</strong> - apenas uma sensação de puxão</li>
              </ol>
            </div>

            <div class="border-l-4 border-teal-600 pl-6">
              <h4 class="font-semibold text-gray-800 mb-3">ETAPA 4: Acompanhamento (A)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Observe os sinais</strong> de que o bebê está mamando bem</li>
                <li><strong>Monitore o ganho de peso</strong> nas consultas pediátricas</li>
                <li><strong>Conte as fraldas molhadas</strong> (6-8 por dia é ideal)</li>
                <li><strong>Ajuste a posição</strong> sempre que necessário</li>
                <li><strong>Procure ajuda</strong> se houver dor ou dificuldades</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 class="text-xl font-semibold text-red-800 mb-4">🚨 Sinais de Alerta</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-red-800 mb-2">Procure ajuda se houver:</h4>
              <ul class="space-y-1 text-red-700">
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Dor intensa durante a mamada</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Fissuras ou sangramento no mamilo</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Bebê não ganha peso adequadamente</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Menos de 6 fraldas molhadas por dia</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-red-800 mb-2">Sinais de pega incorreta:</h4>
              <ul class="space-y-1 text-red-700">
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Ruídos de estalo durante a mamada</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Bochechas encovadas do bebê</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Mamilo com formato achatado após mamada</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Bebê inquieto e insatisfeito</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas de Ouro para o Sucesso</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Paciência é fundamental:</strong> Pode levar algumas semanas para aperfeiçoar</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Pratique quando calma:</strong> Estresse dificulta o aprendizado</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Hidrate-se bem:</strong> Tenha sempre água por perto</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Confie no seu instinto:</strong> Você conhece seu bebê melhor que ninguém</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Busque apoio:</strong> Consultoras em amamentação podem ajudar muito</li>
          </ul>
        </div>
      </div>
    `,
    "pos-parto": `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">✨ Recuperação Pós-Parto</h2>
          <p class="text-gray-700 leading-relaxed">
            Um guia completo para sua recuperação física e emocional, resgate da autoestima 
            e adaptação à nova vida como mãe, com carinho e sem pressa.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🌸 Fases da Recuperação</h3>
          <div class="space-y-4">
            <div class="bg-violet-50 p-4 rounded-lg border border-violet-200">
              <h4 class="font-semibold text-violet-800 mb-2">Primeiras 6 Semanas (Puerpério)</h4>
              <p class="text-violet-700 text-sm">
                Período de maior adaptação física e emocional. Foco no descanso, 
                cicatrização e estabelecimento da amamentação.
              </p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-semibold text-purple-800 mb-2">2-6 Meses</h4>
              <p class="text-purple-700 text-sm">
                Início gradual de atividades físicas leves e foco no bem-estar emocional. 
                Estabelecimento de rotinas.
              </p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 class="font-semibold text-indigo-800 mb-2">6+ Meses</h4>
              <p class="text-indigo-700 text-sm">
                Retomada gradual das atividades normais, fortalecimento da autoestima 
                e redescoberta da intimidade.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💪 Recuperação Física</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Primeiras Semanas (0-6 semanas)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Respiração profunda:</strong> 5-10 respirações profundas, 3x ao dia</li>
                <li><strong>Exercícios de Kegel:</strong> Contraia o assoalho pélvico por 5 segundos, 10 repetições</li>
                <li><strong>Caminhadas leves:</strong> Comece com 5-10 minutos, aumente gradualmente</li>
                <li><strong>Alongamentos suaves:</strong> Pescoço, ombros e costas</li>
                <li><strong>Cuidados com a cicatriz:</strong> Mantenha limpa e seca (cesárea/episiotomia)</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Após Liberação Médica (6+ semanas)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Fortalecimento do core:</strong> Prancha modificada, 15-30 segundos</li>
                <li><strong>Exercícios funcionais:</strong> Agachamentos, lunges adaptados</li>
                <li><strong>Cardio leve:</strong> Caminhada rápida, natação, bicicleta</li>
                <li><strong>Yoga pós-parto:</strong> Posturas restaurativas e fortalecimento</li>
                <li><strong>Pilates:</strong> Foco no assoalho pélvico e postura</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🧠 Bem-Estar Emocional</h3>
          
          <div class="space-y-4">
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-semibold text-pink-800 mb-2">Técnicas de Autocuidado Diário</h4>
              <ul class="space-y-1 text-pink-700">
                <li class="flex items-start"><span class="text-pink-500 mr-2">•</span> <strong>Meditação:</strong> 5-10 minutos pela manhã</li>
                <li class="flex items-start"><span class="text-pink-500 mr-2">•</span> <strong>Journaling:</strong> Escreva 3 gratidões por dia</li>
                <li class="flex items-start"><span class="text-pink-500 mr-2">•</span> <strong>Banho relaxante:</strong> Com sais ou óleos essenciais</li>
                <li class="flex items-start"><span class="text-pink-500 mr-2">•</span> <strong>Tempo sozinha:</strong> Mesmo que 15 minutos</li>
              </ul>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">Construindo Sua Rede de Apoio</h4>
              <ul class="space-y-1 text-blue-700">
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Aceite ajuda:</strong> Não tente fazer tudo sozinha</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Conecte-se:</strong> Grupos de mães, online ou presencial</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Comunique-se:</strong> Expresse suas necessidades claramente</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Profissional:</strong> Considere terapia se necessário</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💄 Resgatando a Autoestima</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Cuidados com a Aparência</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Rotina de skincare simples:</strong> Limpeza, hidratação e protetor solar</li>
                <li><strong>Hidratação corporal:</strong> Óleos para prevenir estrias e ressecamento</li>
                <li><strong>Corte de cabelo prático:</strong> Que te faça sentir bonita e seja fácil de cuidar</li>
                <li><strong>Roupas confortáveis:</strong> Que valorizem seu corpo atual</li>
                <li><strong>Maquiagem leve:</strong> Se te faz sentir bem, use sem culpa</li>
              </ol>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 class="font-semibold text-yellow-800 mb-2">💭 Mindset Positivo</h4>
              <ul class="space-y-1 text-yellow-700">
                <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Celebre pequenas conquistas:</strong> Cada dia é uma vitória</li>
                <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Seja gentil consigo:</strong> Seu corpo fez algo incrível</li>
                <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Foque no que funciona:</strong> Não no que "perdeu"</li>
                <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Defina metas realistas:</strong> Progresso, não perfeição</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-rose-50 p-6 rounded-xl border border-rose-200">
          <h3 class="text-xl font-semibold text-rose-800 mb-4">💕 Intimidade e Relacionamento</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-rose-800 mb-2">Reconectando com o Parceiro</h4>
              <ul class="space-y-2 text-rose-700">
                <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Comunicação aberta:</strong> Compartilhe sentimentos e necessidades</li>
                <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Momentos a dois:</strong> Mesmo que breves, são importantes</li>
                <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Intimidade gradual:</strong> Comece com carinho e proximidade</li>
                <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Paciência mútua:</strong> A libido volta no seu tempo</li>
              </ul>
            </div>

            <div class="bg-rose-100 p-4 rounded-lg">
              <p class="text-rose-800 text-sm">
                <strong>Lembre-se:</strong> É normal que a libido demore para voltar. 
                Hormônios, cansaço e adaptação são fatores naturais. Seja paciente consigo mesma.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Práticas para o Dia a Dia</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Durma quando o bebê dorme:</strong> Descanso é prioridade</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Prepare refeições simples:</strong> Nutrição sem complicação</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Aceite imperfeições:</strong> Casa bagunçada não é o fim do mundo</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Celebre progressos:</strong> Cada pequeno passo conta</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Mantenha expectativas realistas:</strong> Recuperação leva tempo</li>
          </ul>
        </div>
      </div>
    `,
    sono: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🌙 Sono Tranquilo do Bebê</h2>
          <p class="text-gray-700 leading-relaxed">
            Técnicas comprovadas para estabelecer rotinas saudáveis de sono, 
            criar o ambiente ideal e garantir noites mais tranquilas para toda a família.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">😴 Entendendo o Sono do Bebê</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">0-3 Meses</h4>
              <ul class="text-blue-700 text-sm space-y-1">
                <li>• 14-17h por dia</li>
                <li>• Ciclos de 2-4h</li>
                <li>• Sono mais leve</li>
                <li>• Muitos despertares</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-semibold text-indigo-800 mb-2">3-6 Meses</h4>
              <ul class="text-indigo-700 text-sm space-y-1">
                <li>• 12-15h por dia</li>
                <li>• Períodos mais longos</li>
                <li>• Início dos padrões</li>
                <li>• Menos despertares</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-semibold text-purple-800 mb-2">6+ Meses</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• 11-14h por dia</li>
                <li>• Sono mais consolidado</li>
                <li>• Rotinas estabelecidas</li>
                <li>• Noites mais longas</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🏠 Criando o Ambiente Ideal</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Configuração do Quarto</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Temperatura:</strong> Entre 18-22°C, use termômetro para monitorar</li>
                <li><strong>Iluminação:</strong> Escuro para dormir, luz suave para mamadas noturnas</li>
                <li><strong>Ruído:</strong> Ambiente silencioso ou ruído branco constante</li>
                <li><strong>Berço seguro:</strong> Colchão firme, sem objetos soltos</li>
                <li><strong>Ventilação:</strong> Ar circulando sem correntes diretas</li>
              </ol>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 class="font-semibold text-green-800 mb-2">✅ Checklist do Ambiente Seguro</h4>
              <ul class="space-y-1 text-green-700">
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span> Berço com certificação de segurança</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span> Colchão firme e bem ajustado</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span> Lençol bem esticado</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span> Sem travesseiros, cobertores ou brinquedos</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span> Bebê sempre de barriga para cima</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">⏰ Estabelecendo Rotinas</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Rotina Noturna (30-45 minutos antes de dormir)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Banho morno:</strong> Relaxante, com água na temperatura ideal</li>
                <li><strong>Massagem suave:</strong> Com óleo morno, movimentos lentos</li>
                <li><strong>Roupa confortável:</strong> Pijama adequado para a temperatura</li>
                <li><strong>Alimentação:</strong> Mamada ou mamadeira em ambiente calmo</li>
                <li><strong>Atividade tranquila:</strong> Música suave, leitura ou conversa baixa</li>
                <li><strong>Colocar no berço:</strong> Ainda acordado, mas sonolento</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Rotina Diurna</h4>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <ul class="space-y-2 text-yellow-700">
                  <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Manhã:</strong> Luz natural, atividades estimulantes</li>
                  <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Tarde:</strong> Sonecas em ambiente mais claro</li>
                  <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Final da tarde:</strong> Atividades mais calmas</li>
                  <li class="flex items-start"><span class="text-yellow-500 mr-2">•</span> <strong>Noite:</strong> Diminuir estímulos gradualmente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🛠️ Técnicas para Acalmar</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Método dos 5 S's</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Swaddle (Embrulhar):</strong> Enrole firmemente em manta</li>
                <li><strong>Side (Lado):</strong> Segure de lado ou de bruços no colo</li>
                <li><strong>Shush (Shh):</strong> Som "shh" próximo ao ouvido</li>
                <li><strong>Swing (Balançar):</strong> Movimento suave e rítmico</li>
                <li><strong>Suck (Sugar):</strong> Dedo limpo ou chupeta</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Outras Técnicas</h4>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Ruído branco:</strong> Som constante e suave</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Música clássica:</strong> Mozart, Bach em volume baixo</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Colo vertical:</strong> Posição que acalma cólicas</li>
                <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Caminhada:</strong> Movimento rítmico relaxa</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <h3 class="text-xl font-semibold text-orange-800 mb-4">⚠️ Quando Buscar Ajuda</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-orange-800 mb-2">Sinais de Alerta:</h4>
              <ul class="space-y-1 text-orange-700">
                <li class="flex items-start"><span class="text-orange-500 mr-2">•</span> Choro inconsolável por mais de 3 horas</li>
                <li class="flex items-start"><span class="text-orange-500 mr-2">•</span> Dificuldade extrema para adormecer</li>
                <li class="flex items-start"><span class="text-orange-500 mr-2">•</span> Despertares muito frequentes após 6 meses</li>
                <li class="flex items-start"><span class="text-orange-500 mr-2">•</span> Mudanças súbitas no padrão de sono</li>
              </ul>
            </div>
            <div class="bg-orange-100 p-4 rounded-lg">
              <p class="text-orange-800 font-medium">
                <strong>Lembre-se:</strong> Cada bebê é único. Se algo não parece normal 
                ou você está muito cansada, procure orientação pediátrica.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas para Noites Tranquilas</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Consistência é chave:</strong> Mantenha a mesma rotina todos os dias</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Paciência com mudanças:</strong> Leva 2-3 semanas para estabelecer hábitos</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Observe os sinais:</strong> Aprenda quando seu bebê está com sono</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Cuide de você também:</strong> Descanse quando possível</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Seja flexível:</strong> Ajuste conforme o crescimento do bebê</li>
          </ul>
        </div>
      </div>
    `,
  }

  return content[moduleId] || "<p>Conteúdo não encontrado.</p>"
}

const MembersDashboard: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"welcome" | "modules" | "extras" | "support">("welcome")

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alívio Mamãe</h1>
                <p className="text-xs text-gray-500">Área de Membros</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "welcome" && (
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 text-balance">
                Bem-vinda ao{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Alívio Mamãe
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Você está prestes a embarcar em uma jornada transformadora. Aqui você encontrará tudo o que precisa para
                viver uma maternidade mais leve, consciente e cheia de amor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Sua Jornada Começa Agora</h2>
                <p className="text-gray-600">
                  Cada módulo foi cuidadosamente desenvolvido para apoiar você em cada fase desta experiência única.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveModule(module.id)
                      setActiveTab("modules")
                    }}
                  >
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{module.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab("modules")}
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Começar Jornada
                </button>
                <button
                  onClick={() => setActiveTab("extras")}
                  className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  Ver Extras Premium
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">💝 Uma Mensagem Especial para Você</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Lembre-se: você não está sozinha nesta jornada. Cada dúvida, cada desafio, cada pequena vitória -
                    tudo faz parte do processo de se tornar a mãe incrível que você já é. Confie em si mesma, seja
                    gentil consigo e celebre cada passo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
          <button
            onClick={() => setActiveTab("welcome")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "welcome"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab("modules")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "modules"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Módulos
          </button>
          <button
            onClick={() => setActiveTab("extras")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "extras"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Extras Premium
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "support"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Suporte
          </button>
        </div>

        {activeTab === "modules" && (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Module Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos</h2>
                <nav className="space-y-2">
                  {modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeModule === module.id
                          ? `bg-gradient-to-r ${module.color} text-white shadow-md`
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <module.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{module.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Module Content */}
            <div className="lg:col-span-3">
              {activeModule ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: getModuleContent(activeModule) }}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                  <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecione um Módulo</h3>
                  <p className="text-gray-600">
                    Escolha um dos módulos ao lado para começar sua jornada de aprendizado.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "extras" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🎁 Extras Premium</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conteúdos exclusivos para potencializar sua jornada materna
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <MusicalNoteIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Playlist Relaxante</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Músicas cuidadosamente selecionadas para momentos de relaxamento, massagem e conexão com seu bebê.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🎵 Acessar Playlist
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Grupo VIP Telegram</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comunidade exclusiva para trocar experiências, tirar dúvidas e receber apoio de outras mamães.
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  💬 Entrar no Grupo
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🍃 Receitas de Chás Seguros</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Chá de Camomila</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Benefícios:</strong> Relaxamento e melhora do sono
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Preparo:</strong> 1 colher de chá em 200ml de água quente. Deixe em infusão por 5 minutos.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Chá de Gengibre</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Benefícios:</strong> Alívio de náuseas matinais
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Preparo:</strong> 1 fatia fina de gengibre fresco em 200ml de água quente por 3-5 minutos.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Chá de Folha de Framboesa</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Benefícios:</strong> Fortalecimento uterino (após 32 semanas)
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Preparo:</strong> 1 colher de chá em 200ml de água quente. Infusão por 10 minutos.
                  </p>
                </div>
              </div>

              <div className="bg-red-100 rounded-lg p-4 mt-6 border border-red-200">
                <p className="text-red-800 text-center font-medium">
                  ⚠️ <strong>Importante:</strong> Sempre consulte seu obstetra antes de consumir qualquer chá durante a
                  gestação.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Suporte</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Estamos aqui para apoiar você em cada passo da sua jornada materna
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Chat Direto</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tire suas dúvidas diretamente conosco através do nosso chat de suporte.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  💬 Iniciar Chat
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Envie suas dúvidas por email e receba uma resposta detalhada em até 24h.
                </p>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  ✉️ Enviar Email
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Perguntas Frequentes</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Posso fazer as massagens em qualquer trimestre?</h4>
                  <p className="text-gray-700">
                    Sim! Nosso guia inclui técnicas específicas e seguras para cada trimestre da gestação, sempre com as
                    devidas precauções.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">O método P.E.G.A. funciona para todos os bebês?</h4>
                  <p className="text-gray-700">
                    O método é adaptável e funciona para a maioria dos bebês. Cada criança é única, por isso oferecemos
                    variações e alternativas.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Por quanto tempo tenho acesso ao conteúdo?</h4>
                  <p className="text-gray-700">
                    Seu acesso é vitalício! Você pode consultar o material sempre que precisar, mesmo após o nascimento
                    do seu bebê.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200 text-center">
              <HeartIcon className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Estamos com você nesta jornada! 💕</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Lembre-se: cada gestação é única e especial. Confie no seu instinto e não hesite em buscar ajuda quando
                precisar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { MembersDashboard }
export default MembersDashboard
