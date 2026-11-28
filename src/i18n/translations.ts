export type Language = "pt" | "en" | "de";

export const translations = {
  // Navbar
  "nav.home": { pt: "Início", en: "Home", de: "Startseite" },
  "nav.portfolio": { pt: "Portfólio", en: "Portfolio", de: "Portfolio" },
  "nav.calculator": { pt: "Orçamento", en: "Quote", de: "Angebot" },
  "nav.services": { pt: "Serviços", en: "Services", de: "Dienstleistungen" },
  "nav.meeting": { pt: "Reunião", en: "Meeting", de: "Besprechung" },
  "nav.contact": { pt: "Contato", en: "Contact", de: "Kontakt" },
  "nav.blog": { pt: "Blog", en: "Blog", de: "Blog" },

  // Blog (os posts em si são só em pt-BR)
  "blog.title": { pt: "Blog", en: "Blog", de: "Blog" },
  "blog.subtitle": { pt: "Textos da equipe HurryApp", en: "Writing from the HurryApp team", de: "Beiträge des HurryApp-Teams" },
  "blog.publishedOn": { pt: "Publicado em", en: "Published on", de: "Veröffentlicht am" },
  "blog.by": { pt: "por", en: "by", de: "von" },
  "blog.back": { pt: "Voltar ao blog", en: "Back to blog", de: "Zurück zum Blog" },
  "blog.draft": { pt: "Rascunho", en: "Draft", de: "Entwurf" },


  // Hero
  "hero.tag": { pt: "Soluções Tecnológicas", en: "Technology Solutions", de: "Technologische Lösungen" },
  "hero.title1": { pt: "Tecnologia que trabalha por você! ", en: "Technology that works for you! ", de: "Technologie, die für Sie arbeitet! " },
  "hero.title2": { pt: "Mais tempo para o seu negócio", en: "More time for your business", de: "Mehr Zeit für Ihr Unternehmen" },
  "hero.description": {
    pt: "Automatizamos as rotinas da sua empresa e criamos soluções sob medida. Relatórios no seu WhatsApp, atendimento com IA, integração entre as ferramentas que você já usa: tudo funcionando sozinho, e entregue bem mais rápido que na programação tradicional.",
    en: "We automate your company's routines and build tailor-made solutions. Reports on your WhatsApp, AI-powered customer service, integration between the tools you already use: everything running on its own, and delivered much faster than with traditional programming.",
    de: "Wir automatisieren die Routinen Ihres Unternehmens und entwickeln maßgeschneiderte Lösungen. Berichte per WhatsApp, KI-gestützter Kundenservice, Integration der Tools, die Sie bereits nutzen: alles läuft von selbst und wird deutlich schneller geliefert als mit herkömmlicher Programmierung.",
  },
  "hero.cta": { pt: "Fale com a gente", en: "Talk to us", de: "Sprechen Sie mit uns" },
  "hero.secondaryCta": { pt: "Ver portfólio", en: "See portfolio", de: "Portfolio ansehen" },
  "hero.rating": { pt: "Nota 5/5 nas avaliações dos nossos clientes", en: "Rated 5/5 by our clients", de: "Von unseren Kunden mit 5/5 bewertet" },
  "hero.devicesAlt": { pt: "Telas de apps em vários dispositivos", en: "App screens on multiple devices", de: "App-Bildschirme auf mehreren Geräten" },

  // Rótulos de seção (Design System v2)
  "eyebrow.services": { pt: "O que fazemos", en: "What we do", de: "Was wir tun" },
  "eyebrow.portfolio": { pt: "Cases", en: "Cases", de: "Projekte" },
  "eyebrow.testimonials": { pt: "Depoimentos", en: "Testimonials", de: "Kundenstimmen" },
  "eyebrow.how": { pt: "Processo", en: "Process", de: "Ablauf" },

  // Bloco final de chamada (home)
  "cta.title1": { pt: "Sua próxima rotina pode", en: "Your next routine can", de: "Ihre nächste Routine kann" },
  "cta.title2": { pt: "rodar sozinha", en: "run on its own", de: "von selbst laufen" },
  "cta.desc": {
    pt: "Conte o que toma tempo na sua empresa e a gente mostra o que dá para automatizar primeiro.",
    en: "Tell us what takes up your company's time and we'll show you what can be automated first.",
    de: "Erzählen Sie uns, was in Ihrem Unternehmen Zeit kostet, und wir zeigen Ihnen, was sich zuerst automatisieren lässt.",
  },

  // Menu
  "menu.language": { pt: "Idioma", en: "Language", de: "Sprache" },
  "menu.open": { pt: "Abrir menu", en: "Open menu", de: "Menü öffnen" },
  "menu.close": { pt: "Fechar menu", en: "Close menu", de: "Menü schließen" },

  // Calculator
  "calc.title": { pt: "Calculadora", en: "Calculator", de: "Rechner" },
  "calc.subtitle": { pt: "Estime quanto seu projeto vai custar", en: "Estimate how much your project will cost", de: "Schätzen Sie, wie viel Ihr Projekt kosten wird" },
  "calc.description": { pt: "Entre em contato para um orçamento personalizado.", en: "Contact us for a personalized quote for your project.", de: "Kontaktieren Sie uns für ein individuelles Angebot." },
  "calc.cta": { pt: "Solicitar Orçamento", en: "Get a Quote", de: "Angebot anfordern" },
  "calc.popup.title": { pt: "Solicitar Orçamento", en: "Request a Quote", de: "Angebot anfordern" },
  "calc.popup.subtitle": { pt: "Responda às perguntas abaixo para que possamos elaborar um orçamento mais acertivo.", en: "Answer the questions below so we can prepare a more accurate quote.", de: "Beantworten Sie die folgenden Fragen, damit wir ein genaueres Angebot erstellen können." },
  "calc.popup.guide.intro": { pt: "Por favor, aborde os seguintes pontos:", en: "Please address the following points:", de: "Bitte gehen Sie auf folgende Punkte ein:" },
  "calc.popup.guide.q1": { pt: "É um app criado do zero ou serão modificações em um app já existente?", en: "Is it a new app from scratch or modifications to an existing one?", de: "Ist es eine neue App von Grund auf oder Änderungen an einer bestehenden?" },
  "calc.popup.guide.q2": { pt: "Utilizará banco de dados do Bubble ou integração com algum outro?", en: "Will it use Bubble's database or integrate with another one?", de: "Wird die Bubble-Datenbank verwendet oder eine Integration mit einer anderen?" },
  "calc.popup.guide.q3": { pt: "Será para uso interno ou necessita de publicação em App Store?", en: "Is it for internal use or does it need App Store publishing?", de: "Ist es für den internen Gebrauch oder muss es im App Store veröffentlicht werden?" },
  "calc.popup.guide.q4": { pt: "Terá integração com pagamentos ou qualquer outro serviço?", en: "Will it have payment integration or any other service?", de: "Wird es eine Zahlungsintegration oder einen anderen Dienst geben?" },
  "calc.popup.guide.q5": { pt: "Tem prazo pré-estabelecido ou orçamento limite?", en: "Do you have a set deadline or budget limit?", de: "Gibt es eine feste Frist oder ein Budgetlimit?" },
  "calc.popup.guide.extra": { pt: "Nos forneça o máximo de informação possível para que nossa resposta seja mais acertiva.", en: "Provide as much information as possible so our response can be more accurate.", de: "Geben Sie so viele Informationen wie möglich an, damit unsere Antwort genauer sein kann." },
  "calc.popup.message": { pt: "Descreva seu projeto", en: "Describe your project", de: "Beschreiben Sie Ihr Projekt" },
  "calc.popup.placeholder": { pt: "Responda às perguntas acima e adicione qualquer detalhe extra sobre seu projeto...", en: "Answer the questions above and add any extra details about your project...", de: "Beantworten Sie die obigen Fragen und fügen Sie weitere Details zu Ihrem Projekt hinzu..." },
  "calc.popup.send": { pt: "Enviar Solicitação", en: "Send Request", de: "Anfrage senden" },
  "calc.popup.cancel": { pt: "Cancelar", en: "Cancel", de: "Abbrechen" },

  // Features / Services
  "features.title": { pt: "Nossos Serviços", en: "Our Services", de: "Unsere Dienstleistungen" },
  "features.subtitle": {
    pt: "Desenvolvemos aplicativos completos e responsivos utilizando IA generativa de alta performance. Entregamos projetos com layouts totalmente personalizáveis, integrações de API com serviços de pagamento, automações inteligentes com N8N e WhatsApp, banco de dados externo com Supabase quando necessário, e muito mais — tudo com agilidade e qualidade profissional.",
    en: "We build complete, responsive applications using high-performance generative AI. We deliver projects with fully customizable layouts, API integrations with payment services, smart automations with N8N and WhatsApp, external databases with Supabase when needed, and much more — all with speed and professional quality.",
    de: "Wir entwickeln vollständige, responsive Anwendungen mit leistungsstarker generativer KI. Wir liefern Projekte mit vollständig anpassbaren Layouts, API-Integrationen mit Zahlungsdiensten, intelligenten Automatisierungen mit N8N und WhatsApp, externen Datenbanken mit Supabase bei Bedarf und vielem mehr — alles mit Geschwindigkeit und professioneller Qualität.",
  },
  "features.responsive.title": { pt: "Incluímos IA", en: "We include AI", de: "Wir integrieren KI" },
  "features.responsive.desc": { pt: "Seu projeto precisa que uma IA seja inclusa e responda dentro da sua aplicação ou por mensagem.", en: "Your project needs an AI to be included and respond within your application or by message.", de: "Ihr Projekt benötigt eine integrierte KI, die in Ihrer Anwendung oder per Nachricht antwortet." },
  "features.custom.title": { pt: "Alto grau de personalização", en: "High degree of customization", de: "Hoher Anpassungsgrad" },
  "features.custom.desc": { pt: "Construído com a cara da sua empresa. Qualquer layout prioriza as cores, fontes e logomarca, mantendo sua identidade visual.", en: "Built to look like your company. Any layout prioritizes colors, fonts and logo, maintaining your visual identity.", de: "Gebaut mit dem Gesicht Ihres Unternehmens. Jedes Layout priorisiert Farben, Schriftarten und Logo und wahrt Ihre visuelle Identität." },
  "features.integration.title": { pt: "Integração com outras plataformas", en: "Integration with other platforms", de: "Integration mit anderen Plattformen" },
  "features.integration.desc": { pt: "Integrações de API levarão seu app a um nível tecnológico extremamente avançado, de métodos de pagamento a IA", en: "API integrations will take your app to an extremely advanced technological level, from payment methods to AI", de: "API-Integrationen bringen Ihre App auf ein extrem fortschrittliches technologisches Niveau" },
  "features.design.title": { pt: "Testamos Aplicativos Prontos", en: "We Test Ready Apps", de: "Wir testen fertige Apps" },
  "features.design.desc": { pt: "Traga seu aplicativo e testamos os botões e integrações, verificamos falhas de segurança e enviamos um relatório para melhorar a UI e a UX.", en: "Bring your app and we test the buttons and integrations, check for security flaws and send a report to improve UI and UX.", de: "Bringen Sie Ihre App mit: Wir testen Schaltflächen und Integrationen, prüfen auf Sicherheitslücken und senden einen Bericht zur Verbesserung von UI und UX." },
  "features.faster.title": { pt: "Automações", en: "Automations", de: "Automatisierungen" },
  "features.faster.desc": { pt: "Precisa que cheguem relatórios ou pesquisas programadas no seu e-mail ou WhatsApp? Criamos automações em N8N, e essas rotinas serão automáticas, reduzindo seu tempo de trabalho.", en: "Need reports or scheduled searches to arrive in your email or WhatsApp? We create automations in N8N, and these routines will run automatically, reducing your working time.", de: "Benötigen Sie Berichte oder geplante Suchen in Ihrer E-Mail oder Ihrem WhatsApp? Wir erstellen Automatisierungen in N8N, und diese Routinen laufen automatisch und verkürzen Ihren Arbeitsaufwand." },
  "features.platforms.title": { pt: "WEB/Android/iOS", en: "WEB/Android/iOS", de: "WEB/Android/iOS" },
  "features.platforms.desc": { pt: "Os usuários podem acessar seu app pelo desktop, notebook, tablet ou celular via link, pelo navegador, ou baixando da Play Store ou Apple Store", en: "Users can access your app on desktop, laptop, tablet or mobile via link, through the browser, or by downloading it from Play Store or Apple Store", de: "Benutzer können über Desktop, Notebook, Tablet oder Handy per Link, Browser oder Download aus dem Play Store oder Apple Store zugreifen" },

  // Development
  "dev.tag": { pt: "Desenvolvimento", en: "Development", de: "Entwicklung" },
  "dev.title1": { pt: "Você conta o desafio. ", en: "You tell us the challenge. ", de: "Sie nennen die Herausforderung. " },
  "dev.title2": { pt: "A gente entrega a solução.", en: "We deliver the solution.", de: "Wir liefern die Lösung." },
  "dev.desc": {
    pt: "Escutamos a dificuldade da sua empresa, apresentamos soluções novas e desenvolvemos tudo sob medida. No fim, você sai ganhando em tempo e em qualidade.",
    en: "We listen to your company's challenges, present new solutions and build everything to fit. In the end, you come out ahead in both time and quality.",
    de: "Wir hören auf die Herausforderungen Ihres Unternehmens, präsentieren neue Lösungen und entwickeln alles maßgeschneidert. Am Ende gewinnen Sie an Zeit und Qualität.",
  },
  "dev.step1.title": { pt: "Escutamos", en: "We listen", de: "Wir hören zu" },
  "dev.step1.desc": { pt: "Entendemos a dificuldade real do seu dia a dia, com atenção em cada detalhe.", en: "We understand the real difficulty of your day-to-day, with attention to every detail.", de: "Wir verstehen die tatsächlichen Schwierigkeiten Ihres Alltags, mit Aufmerksamkeit für jedes Detail." },
  "dev.step2.title": { pt: "Propomos", en: "We propose", de: "Wir schlagen vor" },
  "dev.step2.desc": { pt: "Apresentamos soluções novas, pensadas para o seu caso.", en: "We present new solutions, designed for your case.", de: "Wir präsentieren neue Lösungen, zugeschnitten auf Ihren Fall." },
  "dev.step3.title": { pt: "Desenvolvemos", en: "We build", de: "Wir entwickeln" },
  "dev.step3.desc": { pt: "Construímos, integramos suas ferramentas e entregamos com sua aprovação por etapas.", en: "We build, integrate your tools and deliver with your approval at each stage.", de: "Wir entwickeln, integrieren Ihre Tools und liefern mit Ihrer Freigabe in jeder Etappe." },
  "dev.step4.title": { pt: "Você ganha", en: "You win", de: "Sie gewinnen" },
  "dev.step4.desc": { pt: "Mais tempo, mais qualidade e rotinas que funcionam sozinhas.", en: "More time, higher quality and routines that run on their own.", de: "Mehr Zeit, mehr Qualität und Abläufe, die von selbst laufen." },

  // Portfolio
  "portfolio.title": { pt: "Portfólio", en: "Portfolio", de: "Portfolio" },
  "portfolio.viewProject": { pt: "Visualizar Projeto", en: "View Project", de: "Projekt ansehen" },

  // Depoimentos (o texto em pt é o original do cliente; en/de são traduções)
  "testimonials.title1": { pt: "Quem trabalhou com a gente", en: "Those who worked with us", de: "Wer mit uns gearbeitet hat," },
  "testimonials.title2": { pt: "recomenda", en: "recommend us", de: "empfiehlt uns" },
  "testimonials.subtitle": {
    pt: "Avaliações reais de clientes que tiraram projetos do papel com o Samuel, sócio da HurryApp. Todas com nota máxima.",
    en: "Real reviews from clients who brought their projects to life with Samuel, co-founder of HurryApp. All with top marks.",
    de: "Echte Bewertungen von Kunden, die ihre Projekte mit Samuel, Mitgründer von HurryApp, verwirklicht haben. Alle mit Höchstnote.",
  },
  "testimonials.criteria.quality": { pt: "Qualidade", en: "Quality", de: "Qualität" },
  "testimonials.criteria.deadline": { pt: "Prazo", en: "Deadline", de: "Termintreue" },
  "testimonials.criteria.communication": { pt: "Comunicação", en: "Communication", de: "Kommunikation" },
  "testimonials.criteria.again": { pt: "Trabalharia novamente", en: "Would work again", de: "Würde wieder zusammenarbeiten" },
  "testimonials.note": {
    pt: "Notas dadas pelos próprios clientes ao final de cada projeto.",
    en: "Ratings given by the clients themselves at the end of each project. Reviews translated from Portuguese.",
    de: "Bewertungen der Kunden selbst am Ende jedes Projekts. Aus dem Portugiesischen übersetzt.",
  },
  "testimonials.1.headline": {
    pt: "“Quero levar para todos os projetos que eu tiver.”",
    en: "“I want to bring him to every project I have.”",
    de: "„Ich möchte ihn bei jedem meiner Projekte dabeihaben.“",
  },
  "testimonials.1.text": {
    pt: "O Samuel foi um cara que conheci em 2024 e que quero levar para todos os projetos que eu tiver. Dificilmente hoje em dia tem devs como ele, que além de ser um ótimo profissional, cheio de experiências, ainda é comunicativo, sempre atualizando sobre o projeto, tirando dúvidas e tem o compromisso de sempre entregar no prazo. Além de tudo isso é um ser humano incrível, certamente vou estar sempre trabalhando com ele!",
    en: "I met Samuel in 2024 and I want to bring him to every project I have. It's rare these days to find devs like him: besides being a great professional with lots of experience, he communicates well, always keeps you updated on the project, answers questions and is committed to always delivering on time. On top of all that, he's an incredible human being. I'll certainly keep working with him!",
    de: "Ich habe Samuel 2024 kennengelernt und möchte ihn bei jedem meiner Projekte dabeihaben. Entwickler wie ihn findet man heute selten: Er ist nicht nur ein hervorragender, sehr erfahrener Profi, sondern auch kommunikativ, hält einen stets über das Projekt auf dem Laufenden, beantwortet Fragen und liefert verlässlich pünktlich. Und vor allem ist er ein großartiger Mensch. Ich werde ganz sicher weiter mit ihm arbeiten!",
  },
  "testimonials.1.who": { pt: "Cliente desde 2024", en: "Client since 2024", de: "Kunde seit 2024" },
  "testimonials.1.date": { pt: "mai. 2025", en: "May 2025", de: "Mai 2025" },
  "testimonials.2.headline": {
    pt: "“Transforma ideias soltas em algo real, funcional e bem estruturado.”",
    en: "“He turns loose ideas into something real, functional and well structured.”",
    de: "„Er macht aus losen Ideen etwas Echtes, Funktionierendes und gut Strukturiertes.“",
  },
  "testimonials.2.text": {
    pt: "A minha experiência com o Samuel foi simplesmente extraordinária. Desde o primeiro contato, ficou claro o quanto ele é competente, dedicado e profundo no que faz. Ele não só entendeu exatamente tudo o que eu precisava, como foi muito além: organizou, corrigiu, criou soluções novas e entregou tudo com um profissionalismo raro de se encontrar.\n\nTrabalhar com o Samuel foi leve, rápido e produtivo. Ele domina Bubble, n8n, integrações com IA, lógica de processos e principalmente sabe transformar ideias soltas em algo real, funcional e bem estruturado.\n\nSinceramente, foi uma das melhores experiências profissionais que já tive. O Samuel entrega excelência — e entrega com paixão. Recomendo de olhos fechados.",
    en: "My experience with Samuel was simply extraordinary. From the very first contact it was clear how competent, dedicated and thorough he is. He not only understood exactly everything I needed, he went far beyond: he organized, fixed, created new solutions and delivered everything with a professionalism that is rare to find.\n\nWorking with Samuel was easy, fast and productive. He masters Bubble, n8n, AI integrations and process logic, and above all he knows how to turn loose ideas into something real, functional and well structured.\n\nHonestly, it was one of the best professional experiences I've ever had. Samuel delivers excellence — and delivers it with passion. I recommend him without hesitation.",
    de: "Meine Erfahrung mit Samuel war einfach außergewöhnlich. Vom ersten Kontakt an war klar, wie kompetent, engagiert und gründlich er arbeitet. Er hat nicht nur genau verstanden, was ich brauchte, sondern ist weit darüber hinausgegangen: Er hat organisiert, korrigiert, neue Lösungen entwickelt und alles mit einer selten anzutreffenden Professionalität geliefert.\n\nDie Zusammenarbeit mit Samuel war unkompliziert, schnell und produktiv. Er beherrscht Bubble, n8n, KI-Integrationen und Prozesslogik, und vor allem versteht er es, aus losen Ideen etwas Echtes, Funktionierendes und gut Strukturiertes zu machen.\n\nEhrlich gesagt war es eine der besten beruflichen Erfahrungen, die ich je hatte. Samuel liefert Exzellenz — und das mit Leidenschaft. Ich empfehle ihn ohne Vorbehalt.",
  },
  "testimonials.2.who": { pt: "Projeto com Bubble, n8n e IA", en: "Bubble, n8n and AI project", de: "Projekt mit Bubble, n8n und KI" },
  "testimonials.2.date": { pt: "nov. 2025", en: "Nov 2025", de: "Nov. 2025" },
  "testimonials.3.headline": {
    pt: "“Esperava 14 meses de desenvolvimento. Foi concluído em 8.”",
    en: "“I expected 14 months of development. It was done in 8.”",
    de: "„Ich hatte mit 14 Monaten Entwicklung gerechnet. Fertig war es nach 8.“",
  },
  "testimonials.3.text": {
    pt: "Eu sou Gerente de Projetos de uma empresa de moda, principalmente automação industrial. Temos o faturamento anual estimado em 55 milhões de reais.\nEstávamos com muito problema em controlar a nossa cadeia de produção, por ser algo muito diferente e as soluções prontas serem \"travadas\", eu confesso que fiquei muito surpreso com o resultado prestado e com o tempo entregue.\nComo gerente de projetos, eu estava esperando que o desenvolvimento fosse demorar cerca de 14 meses, mas foi concluído em 8 meses.",
    en: "I'm a Project Manager at a fashion company, mainly in industrial automation. Our estimated annual revenue is 55 million reais.\nWe had a lot of trouble controlling our production chain, since it's very different and off-the-shelf solutions are too rigid. I confess I was very surprised by the result and by the delivery time.\nAs a project manager, I expected development to take about 14 months, but it was finished in 8.",
    de: "Ich bin Projektmanager in einem Modeunternehmen, vor allem im Bereich Industrieautomatisierung. Unser geschätzter Jahresumsatz liegt bei 55 Millionen Reais.\nWir hatten große Probleme, unsere Produktionskette zu steuern, weil sie sehr speziell ist und Standardlösungen zu starr sind. Ich gebe zu, ich war vom Ergebnis und von der Lieferzeit sehr überrascht.\nAls Projektmanager hatte ich mit etwa 14 Monaten Entwicklung gerechnet, fertig war es nach 8 Monaten.",
  },
  "testimonials.3.who": { pt: "Gerente de Projetos, indústria de moda", en: "Project Manager, fashion industry", de: "Projektmanager, Modeindustrie" },
  "testimonials.3.date": { pt: "nov. 2025", en: "Nov 2025", de: "Nov. 2025" },

  // How we work
  "how.title": { pt: "Como trabalhamos?", en: "How do we work?", de: "Wie arbeiten wir?" },
  "how.understand.title": { pt: "Entender", en: "Understand", de: "Verstehen" },
  "how.understand.desc": { pt: "Reunimos suas ideias e necessidades em um escopo de solução inicial. Definimos metas e focamos nas funções essenciais.", en: "We bring together your ideas and needs into an initial solution scope. We define goals and focus on the functions essential to your success.", de: "Wir bringen Ihre Ideen und Bedürfnisse in einen ersten Lösungsumfang zusammen." },
  "how.plan.title": { pt: "Planejar", en: "Plan", de: "Planen" },
  "how.plan.desc": { pt: "Você concorda com o escopo do trabalho, e preparamos modelos e protótipos para garantir que todos entendam os caminhos possíveis.", en: "You agree to the work scope, and we prepare models and prototypes to ensure that everyone understands the possible client paths.", de: "Sie stimmen dem Arbeitsumfang zu, und wir bereiten Modelle und Prototypen vor." },
  "how.build.title": { pt: "Construir", en: "Build", de: "Bauen" },
  "how.build.desc": { pt: "Construímos sua solução em sprints semanais, usando plataformas No-code. Mantemos você informado em cada etapa.", en: "We build your solution in weekly sprints, using No-code platforms that we consider the best option. We keep you informed every step of the way.", de: "Wir bauen Ihre Lösung in wöchentlichen Sprints mit No-Code-Plattformen." },
  "how.improve.title": { pt: "Melhorar", en: "Improve", de: "Verbessern" },
  "how.improve.desc": { pt: "Após a entrega, focamos em melhoria contínua. Coletamos feedback, analisamos dados e implementamos ajustes.", en: "After delivery, we focus on continuous improvement. We collect feedback, analyze data and implement adjustments in regular cycles.", de: "Nach der Lieferung konzentrieren wir uns auf kontinuierliche Verbesserung." },

  // Meeting
  "meeting.title": { pt: "Tire suas dúvidas conosco!", en: "Clear your doubts with us!", de: "Klären Sie Ihre Zweifel mit uns!" },
  "meeting.subtitle": { pt: "Nossos profissionais estão prontos para ajudá-lo!", en: "Our professionals are ready to assist you!", de: "Unsere Fachleute stehen Ihnen zur Verfügung!" },
  "meeting.name": { pt: "Seu Nome", en: "Your Name", de: "Ihr Name" },
  "meeting.email": { pt: "Seu Email", en: "Your Email", de: "Ihre E-Mail" },
  "meeting.whatsapp": { pt: "Whatsapp", en: "Whatsapp", de: "Whatsapp" },
  "meeting.message": { pt: "Sua Mensagem", en: "Your Message", de: "Ihre Nachricht" },
  "meeting.cta": { pt: "Enviar", en: "Send", de: "Senden" },
  "meeting.success": { pt: "Email enviado com sucesso!", en: "Email sent successfully!", de: "E-Mail erfolgreich gesendet!" },
  "meeting.error": { pt: "Erro ao enviar email. Tente novamente.", en: "Error sending email. Please try again.", de: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut." },
  "meeting.whatsapp_cta": { pt: "Falar no WhatsApp", en: "Chat on WhatsApp", de: "Auf WhatsApp chatten" },

  // Portfolio details
  "portfolio.atendeai.description": {
    pt: "Atendente de inteligência artificial no WhatsApp para pequenos negócios: responde os clientes a qualquer hora com o que a empresa ensinou (perguntas e respostas, informações e arquivos) e marca horários direto na agenda. Feito em Next.js com Supabase, automações em N8N e integração com Asaas para pagamento. Em fase final, antes do lançamento.",
    en: "An artificial intelligence attendant on WhatsApp for small businesses: it answers customers at any hour with what the company has taught it (questions and answers, information and files) and books appointments straight into the calendar. Built with Next.js and Supabase, N8N automations and Asaas payment integration. In its final phase, before launch.",
    de: "Ein KI-Assistent auf WhatsApp für kleine Unternehmen: Er beantwortet Kundenanfragen zu jeder Uhrzeit mit dem, was das Unternehmen ihm beigebracht hat (Fragen und Antworten, Informationen und Dateien) und trägt Termine direkt in den Kalender ein. Entwickelt mit Next.js und Supabase, N8N-Automatisierungen und Asaas-Zahlungsintegration. In der Endphase, vor dem Launch.",
  },
  "portfolio.adega.description": {
    pt: "Aplicativo completo para gestão de adegas, com catálogo de vinhos, controle de estoque e experiência de compra personalizada. Feita em Bubble com integração com Mercado Pago e Google Rota. Produto disponível para compra.",
    en: "Complete wine cellar management app with wine catalog, stock control, and personalized shopping experience. Made in Bubble with integration with Mercado Pago and Google Route. Product available for purchase.",
    de: "Komplette Weinkeller-Management-App mit Weinkatalog, Bestandskontrolle und personalisiertem Einkaufserlebnis. Erstellt in Bubble mit Integration von Mercado Pago und Google Route. Produkt zum Kauf verfügbar.",
  },
  "portfolio.client.description": {
    pt: "Projeto de estudo desenvolvido em FlutterFlow. Um app multiempresas personalizável, permitindo que diferentes negócios configurem suas lojas com identidade visual própria, catálogo de produtos e gestão de pedidos.",
    en: "A study project built with FlutterFlow. A customizable multi-business app that allows different companies to set up their stores with their own branding, product catalog, and order management.",
    de: "Ein Studienprojekt, entwickelt mit FlutterFlow. Eine anpassbare Multi-Unternehmens-App, die verschiedenen Unternehmen ermöglicht, ihre Geschäfte mit eigenem Branding, Produktkatalog und Bestellverwaltung einzurichten.",
  },
  "portfolio.coordenacao.description": {
    pt: "App responsivo para coordenação de equipes em eventos. Permite cadastrar membros, montar grupos de trabalho por dia, organizar calendários de eventos e controlar dias de pagamento.",
    en: "Responsive app for team coordination at events. Allows registering members, assembling work groups by day, organizing event calendars, and managing payment schedules.",
    de: "Responsive App zur Teamkoordination bei Veranstaltungen. Ermöglicht die Registrierung von Mitgliedern, die Zusammenstellung von Arbeitsgruppen nach Tag, die Organisation von Eventkalendern und die Verwaltung von Zahlungsterminen.",
  },
  "portfolio.automacao.description": {
    pt: "Automação comercial para distribuidoras que usam o ERP WinThor (Oracle). Inclui três automações: Relatórios de vendas e positivação, Cobrança automatizada e Análise de crédito automatizada. Roda todo dia, entrega as cobranças via WhatsApp, pesquisa crédito de novos clientes e envia acesso ao relatório por e-mail com filtros. Produto disponível para compra.",
    en: "Commercial automation for distributors using the WinThor ERP (Oracle). It includes three automations: sales and coverage reports, automated collections, and automated credit analysis. It runs every day, delivers collections via WhatsApp, checks credit for new customers, and emails access to the report with filters. Product available for purchase.",
    de: "Vertriebsautomatisierung für Distributoren mit dem WinThor ERP (Oracle). Sie umfasst drei Automatisierungen: Verkaufs- und Abdeckungsberichte, automatisiertes Mahnwesen und automatisierte Kreditanalyse. Läuft täglich, versendet Forderungen über WhatsApp, prüft die Kreditwürdigkeit neuer Kunden und sendet den Berichtszugang mit Filtern per E-Mail. Produkt zum Kauf verfügbar.",
  },
  "portfolio.useplus.description": {
    pt: "App com espaço dedicado para doação, troca e venda de itens infantis. Uma plataforma colaborativa que conecta famílias para reaproveitar produtos de forma prática e sustentável. Aplicação web responsiva feita em Bubble em menos de 1 mês.",
    en: "App with a dedicated space for donating, exchanging, and selling children's items. A collaborative platform that connects families to reuse products in a practical and sustainable way. Responsive web app built in Bubble in under 1 month.",
    de: "App mit einem eigenen Bereich zum Spenden, Tauschen und Verkaufen von Kinderartikeln. Eine kollaborative Plattform, die Familien verbindet, um Produkte praktisch und nachhaltig wiederzuverwenden. Responsive Web-App in Bubble in weniger als 1 Monat erstellt.",
  },
  "portfolio.rapidonobairro.description": {
    pt: "App de bairro onde os comércios locais podem divulgar seus negócios, produtos e serviços para a comunidade ao redor de forma prática e acessível. Possui pagamento do produto, gera cupom de desconto, preços promocionais, vitrine de campanha, doações e página de SOS do bairro. Aplicativo web responsivo feito em Bubble com integração de pagamento no Asaas.",
    en: "A neighborhood app where local businesses can promote their shops, products, and services to the surrounding community in a practical and accessible way. It supports product payments, discount coupon generation, promotional prices, campaign showcase, donations, and a neighborhood SOS page. Responsive web app built in Bubble with Asaas payment integration.",
    de: "Eine Nachbarschafts-App, in der lokale Geschäfte ihre Produkte und Dienstleistungen praktisch und zugänglich für die umliegende Gemeinschaft bewerben können. Sie bietet Produktzahlungen, Rabattcoupons, Aktionspreise, Kampagnen-Schaufenster, Spenden und eine Nachbarschafts-SOS-Seite. Responsive Web-App in Bubble mit Asaas-Zahlungsintegration.",
  },
  "portfolio.ynos.description": {
    pt: "Sistema completo de gestão para corretora de seguros. Inclui controle de contratos, gestão de projetos e tarefas com acompanhamento, avaliação de colaboradores, banco de horas com registro de entrada e saída, e organização de férias. Chat de IA que adiciona os dados de seguro no banco de dados sozinho, lê informações sobre o cliente e responde tudo sobre ele sem abrir planilhas. App feito em Bubble com IA no N8N interagindo no backend.",
    en: "Complete management system for an insurance brokerage. Includes contract management, project and task tracking, employee evaluation, time tracking with clock-in/out, and vacation scheduling. An AI chat that adds insurance data to the database on its own, reads client information, and answers anything about them without opening spreadsheets. App built in Bubble with AI on N8N interacting in the backend.",
    de: "Komplettes Verwaltungssystem für eine Versicherungsmaklergesellschaft. Umfasst Vertragsverwaltung, Projekt- und Aufgabenverfolgung, Mitarbeiterbewertung, Zeiterfassung mit Ein-/Ausstempeln und Urlaubsplanung. Ein KI-Chat, der Versicherungsdaten selbstständig in die Datenbank einträgt, Kundeninformationen liest und alles darüber beantwortet, ohne Tabellen zu öffnen. App in Bubble entwickelt, mit KI in N8N, die im Backend interagiert.",
  },
  "portfolio.esteira.description": {
    pt: "Uma plataforma multiempresas com cadastro interno para imobiliária, um completo banco de dados para imóveis. Painel da imobiliária com configurações personalizadas, com link de formulário para possíveis compradores ou locatários, painel exclusivo para estes incluírem seus documentos e acompanhar o andamento até aprovação. Feito em Bubble.",
    en: "A multi-company platform with internal registration for real estate agencies, featuring a complete property database. Real estate panel with custom settings, form links for potential buyers or tenants, and an exclusive panel for them to submit documents and track progress until approval. Built in Bubble.",
    de: "Eine Multi-Unternehmensplattform mit interner Registrierung für Immobilienagenturen und einer vollständigen Immobiliendatenbank. Immobilienpanel mit individuellen Einstellungen, Formularlinks für potenzielle Käufer oder Mieter sowie ein exklusives Panel zur Dokumenteneinreichung und Fortschrittsverfolgung bis zur Genehmigung. Erstellt in Bubble.",
  },

  // Footer
  "footer.tagline": { pt: "Desenvolvimento de software com expertise No-code, Automação e IA", en: "Software development with No-code, Automation and AI expertise", de: "Softwareentwicklung mit No-Code-, Automatisierungs- und KI-Expertise" },
  "footer.solutions": { pt: "Soluções", en: "Solutions", de: "Lösungen" },
  "footer.navigation": { pt: "Navegação", en: "Navigation", de: "Navigation" },
  "footer.dev": { pt: "Desenvolvimento", en: "Development", de: "Entwicklung" },
  "footer.api": { pt: "Integrações API", en: "API Integrations", de: "API-Integrationen" },
  "footer.design": { pt: "Design", en: "Design", de: "Design" },
  "footer.support": { pt: "Suporte", en: "Support", de: "Support" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
} as const;

export type TranslationKey = keyof typeof translations;
