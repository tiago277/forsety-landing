# Forsety Landing Page — Brainstorm de Design

## Contexto
Landing page para a Forsety Fitness, fabricante de equipamentos fitness (CrossFit, academias, estúdios funcionais). Cores: #252A48 (navy escuro) e #5865F2 (azul vibrante). Estética desejada: Apple-like — minimalista, espaçamento generoso, acabamentos suaves.

---

<response>
<idea>

## Ideia 1: "Nordic Industrial Precision"

**Design Movement:** Inspirado no design escandinavo industrial — linhas limpas, funcionalidade extrema, materiais nobres.

**Core Principles:**
1. Precisão geométrica — cada elemento alinhado com grid rigoroso
2. Materialidade digital — texturas sutis que remetem ao aço e borracha dos equipamentos
3. Respiração visual — espaço negativo como elemento de luxo
4. Hierarquia implacável — o olho sabe exatamente para onde ir

**Color Philosophy:** O #252A48 como cor dominante de fundo, transmitindo solidez e confiança (como o aço dos equipamentos). O #5865F2 usado cirurgicamente apenas nos CTAs e acentos, criando pontos de atração magnética. Branco puro para tipografia principal, criando contraste máximo.

**Layout Paradigm:** Layout vertical com seções full-width que alternam entre fundo escuro e claro. Hero section ocupa 100vh com a logo centralizada e os dois CTAs empilhados verticalmente. Scroll suave revela seções com parallax sutil.

**Signature Elements:**
1. Linhas finas horizontais como separadores (remetendo às barras de musculação)
2. Cantos com radius de 16px nos botões (estilo Apple)
3. Micro-gradiente sutil no fundo navy (#252A48 → #1a1f38)

**Interaction Philosophy:** Hover states com transições de 300ms ease-out. Botões que "respiram" com scale sutil (1.02) no hover. Feedback tátil e preciso.

**Animation:** Fade-in com translate-y de 20px nas seções ao entrar no viewport. Transições suaves de opacidade. Nada exagerado — cada animação tem propósito funcional.

**Typography System:** SF Pro Display (ou equivalente: Inter para body, mas com peso 300 para elegância) para corpo. Títulos em peso 600-700 com tracking apertado (-0.02em). Hierarquia: 64px hero → 40px seção → 18px corpo.

</idea>
<probability>0.07</probability>
<text>Abordagem industrial escandinava com foco em precisão e materialidade</text>
</response>

<response>
<idea>

## Ideia 2: "Athletic Minimalism — Apple Fitness+"

**Design Movement:** Diretamente inspirado na estética Apple Fitness+ e nas páginas de produto da Apple — minimalismo atlético com drama visual controlado.

**Core Principles:**
1. Fundo escuro como palco — o conteúdo é o protagonista
2. Tipografia como arquitetura — letras grandes e impactantes definem o espaço
3. CTAs como objetos de desejo — botões que parecem premium e clicáveis
4. Menos é absoluto — cada pixel justifica sua existência

**Color Philosophy:** Fundo predominante em #252A48 (navy profundo) que cria uma atmosfera premium e noturna, como os ambientes de treino mais sérios. O #5865F2 é a "energia" — usado nos botões e elementos interativos, como um flash de energia no meio da escuridão. Texto em branco (#FFFFFF) e cinza claro (#A0A8C0) para hierarquia.

**Layout Paradigm:** Seção hero full-screen com tipografia oversized e dois botões lado a lado (WhatsApp + Catálogo) no estilo Apple. Abaixo, seções com cards de produtos em grid assimétrico. Footer minimalista. Tudo respira — padding vertical de 120px+ entre seções.

**Signature Elements:**
1. Botões com backdrop-blur e fundo semi-transparente (glass morphism sutil)
2. Gradiente radial sutil no hero (como um spotlight no centro)
3. Ícones de produto com fundo circular translúcido

**Interaction Philosophy:** Botões com hover que ilumina (brightness increase). Scroll-triggered animations com stagger nos cards de produto. Cursor personalizado não necessário — a simplicidade é a sofisticação.

**Animation:** IntersectionObserver para reveal animations. Hero text com animação de entrada sequencial (palavra por palavra). Cards com stagger de 100ms. Tudo com cubic-bezier(0.16, 1, 0.3, 1) para aquela sensação Apple.

**Typography System:** Fonte display bold para títulos (SF Pro Display weight 700 ou equivalente como "Plus Jakarta Sans" 700). Body em peso 400-500. Hero title em 72-96px. Tracking tight (-0.03em) nos títulos. Line-height generoso (1.6) no body text.

</idea>
<probability>0.08</probability>
<text>Minimalismo atlético inspirado diretamente na Apple Fitness+ com drama visual controlado</text>
</response>

<response>
<idea>

## Ideia 3: "Brutalist Elegance"

**Design Movement:** Neo-brutalismo refinado — formas geométricas fortes com acabamento premium. Contraste entre a força bruta dos equipamentos e a elegância do design.

**Core Principles:**
1. Contraste extremo — preto/branco com acentos de cor vibrante
2. Tipografia como statement — letras enormes que dominam o espaço
3. Assimetria controlada — layouts que quebram a expectativa mas mantêm harmonia
4. Bordas vivas misturadas com curves — dualidade força/suavidade

**Color Philosophy:** Fundo split entre #252A48 e branco puro, criando tensão visual. #5865F2 aparece como "marca d'água" gigante ou em elementos de destaque. A dualidade reflete a marca: força (navy) + energia (azul vibrante).

**Layout Paradigm:** Layout assimétrico com hero dividido — texto de um lado, imagem do outro. Seções com overlap proposital. Grid quebrado onde cards de produto saem do alinhamento convencional.

**Signature Elements:**
1. Tipografia oversized (200px+) como elemento decorativo de fundo
2. Formas geométricas cortadas (clip-path) nas transições de seção
3. Bordas de 2px sólidas nos cards (não sombras)

**Interaction Philosophy:** Hover com deslocamento (translate) em vez de scale. Elementos que "reagem" ao mouse com parallax sutil. Transições rápidas (200ms) e decisivas.

**Animation:** Entradas com clip-path reveal (wipe effects). Texto que "digita" no hero. Parallax em camadas para profundidade.

**Typography System:** Fonte condensada bold para títulos (como "Oswald" ou "Barlow Condensed" 800). Body em sans-serif clean. Tamanhos extremos: 120px+ hero, 14px body. Contraste de escala como ferramenta de design.

</idea>
<probability>0.05</probability>
<text>Neo-brutalismo refinado com tipografia statement e assimetria controlada</text>
</response>

---

## Decisão: Ideia 2 — "Athletic Minimalism — Apple Fitness+"

A Ideia 2 é a mais alinhada com o pedido do cliente (estética Apple) e com a identidade da Forsety. O minimalismo atlético com fundo escuro cria uma atmosfera premium que valoriza os equipamentos, enquanto os CTAs em azul vibrante garantem conversão.
