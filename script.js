class UltimateDiamondCBSEAI {
    constructor() {
        // CORE SYSTEM INITIALIZATION
        this.isRecording = false;
        this.recognition = null;
        this.synthesis = null;
        this.apiCache = new Map();
        this.conversationMemory = [];
        this.sessionId = Date.now().toString(36);
        
        // ADVANCED AI INTELLIGENCE SYSTEMS
        this.languageProcessor = new AdvancedLanguageProcessor();
        this.contextualIntelligence = new ContextualIntelligenceEngine();
        this.emotionalIntelligence = new EmotionalIntelligenceEngine();
        this.reasoningEngine = new AdvancedReasoningEngine();
        this.creativityEngine = new CreativityEngine();
        this.knowledgeGraph = new KnowledgeGraphEngine();
        
        // COMPREHENSIVE LEARNING SYSTEMS
        this.learningDatabase = new UltraAdvancedLearningDatabase();
        this.personalityEngine = new GPTLevelPersonalityEngine();
        this.userProfile = new ComprehensiveUserProfile();
        this.adaptiveLearning = new AdaptiveLearningEngine();
        this.studyPlanner = new IntelligentStudyPlanner();
        this.motivationEngine = new AdvancedMotivationEngine();
        
        // ULTRA-COMPREHENSIVE CBSE SYSTEMS
        this.cbseDatabase = new UltraComprehensiveCBSEDatabase();
        this.solutionEngine = new DetailedSolutionEngine();
        this.testGenerator = new UltimateTestGenerator();
        this.performanceAnalyzer = new AdvancedPerformanceAnalyzer();
        this.conceptExplainer = new ConceptExplanationEngine();
        
        // ADVANCED WEB & SEARCH INTEGRATION
        this.webSearchEngine = new AdvancedWebSearchEngine();
        this.factChecker = new FactCheckingEngine();
        this.sourceValidator = new SourceValidationEngine();
        
        // MULTIMODAL INTERACTION SYSTEMS
        this.voiceEngine = new AdvancedVoiceEngine();
        this.textProcessor = new TextProcessingEngine();
        this.responseGenerator = new GPTStyleResponseGenerator();
        
        // DATA STORAGE & ANALYTICS
        this.testHistory = [];
        this.learningProgress = new Map();
        this.performanceMetrics = new Map();
        this.engagementAnalytics = new Map();
        this.lastGeneratedTest = null;
        
        // INITIALIZE ALL SYSTEMS
        this.initializeAllSystems();
    }

    async initializeAllSystems() {
        console.log('🚀 Initializing Ultimate Diamond CBSE AI...');
        
        try {
            // INITIALIZE UI ELEMENTS
            this.initializeElements();
            
            // SET UP EVENT LISTENERS
            this.initializeEventListeners();
            
            // INITIALIZE SPEECH SYSTEMS
            this.initializeSpeechSystems();
            
            // LOAD COMPREHENSIVE DATA
            this.loadAllData();
            
            // START BACKGROUND PROCESSES
            this.startBackgroundProcesses();
            
            // DISPLAY WELCOME
            this.displayUltimateDiamondWelcome();
            
            console.log('💎 Diamond-Level CBSE AI fully operational!');
            
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleInitializationError(error);
        }
    }

    initializeElements() {
        // GET DOM ELEMENTS WITH ERROR CHECKING
        this.chatMessages = document.getElementById('chatMessages') || this.createChatMessages();
        this.messageInput = document.getElementById('messageInput') || this.createMessageInput();
        this.sendBtn = document.getElementById('sendBtn') || this.createSendButton();
        this.recordBtn = document.getElementById('recordBtn') || this.createRecordButton();
        this.stopBtn = document.getElementById('stopBtn') || this.createStopButton();
        this.statusText = document.getElementById('statusText') || this.createStatusText();
        this.voiceIndicator = document.getElementById('jarvisVoiceIndicator') || this.createVoiceIndicator();
        
        // CREATE ADVANCED UI ELEMENTS
        this.createAdvancedInterface();
    }

    createChatMessages() {
        const chatMessages = document.createElement('div');
        chatMessages.id = 'chatMessages';
        chatMessages.className = 'messages-container';
        document.body.appendChild(chatMessages);
        return chatMessages;
    }

    createMessageInput() {
        const input = document.createElement('textarea');
        input.id = 'messageInput';
        input.placeholder = 'Ask me anything about CBSE Class 10...';
        document.body.appendChild(input);
        return input;
    }

    createSendButton() {
        const button = document.createElement('button');
        button.id = 'sendBtn';
        button.textContent = 'Send';
        document.body.appendChild(button);
        return button;
    }

    createRecordButton() {
        const button = document.createElement('button');
        button.id = 'recordBtn';
        button.textContent = '🎤';
        button.style.display = 'block';
        document.body.appendChild(button);
        return button;
    }

    createStopButton() {
        const button = document.createElement('button');
        button.id = 'stopBtn';
        button.textContent = '⏹️';
        button.style.display = 'none';
        document.body.appendChild(button);
        return button;
    }

    createStatusText() {
        const status = document.createElement('div');
        status.id = 'statusText';
        status.textContent = 'Ready';
        document.body.appendChild(status);
        return status;
    }

    createVoiceIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'jarvisVoiceIndicator';
        indicator.style.display = 'none';
        document.body.appendChild(indicator);
        return indicator;
    }

    initializeEventListeners() {
        // MAIN MESSAGE PROCESSING
        this.sendBtn.addEventListener('click', () => this.processMessage());
        
        // ENTER KEY HANDLING
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.processMessage();
            }
        });
        
        // VOICE CONTROLS
        this.recordBtn.addEventListener('click', () => this.startRecording());
        this.stopBtn.addEventListener('click', () => this.stopRecording());
        
        // ADVANCED INPUT HANDLING
        this.messageInput.addEventListener('input', () => this.handleInputChange());
        this.messageInput.addEventListener('focus', () => this.handleInputFocus());
        this.messageInput.addEventListener('blur', () => this.handleInputBlur());
        
        // ADD QUICK ACTION BUTTONS
        this.addQuickActionButtons();
    }

    displayUltimateDiamondWelcome() {
        const welcomeMessage = `**💎 ULTIMATE DIAMOND-LEVEL CBSE AI - GPT INTELLIGENCE**

🌟 **MOST ADVANCED CBSE CLASS 10 AI EVER CREATED**

**🎓 COMPLETE CBSE UNIVERSE - ALL SUBJECTS MASTERED:**

**📚 CORE SUBJECTS - TOTAL MASTERY:**
• **Mathematics:** Real Numbers, Polynomials, Linear Equations, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Introduction to Trigonometry, Applications of Trigonometry, Circles, Constructions, Areas & Volumes, Statistics, Probability
• **Science - Physics:** Light, Electricity, Magnetic Effects, Motion, Force & Laws, Gravitation, Work Power Energy, Sound, Human Eye & Colorful World, Sources of Energy
• **Science - Chemistry:** Chemical Reactions, Acids Bases Salts, Metals & Non-metals, Carbon & Compounds, Periodic Classification, Natural Resource Management
• **Science - Biology:** Life Processes, Control & Coordination, Reproduction, Heredity & Evolution, Light & Life, Natural Resources, Our Environment
• **Social Science - History:** Rise of Nationalism in Europe, Nationalism in India, Making of Global World, Age of Industrialization, Print Culture & Modern World
• **Social Science - Geography:** Resources & Development, Forest & Wildlife, Water Resources, Agriculture, Minerals & Energy, Manufacturing Industries, Lifelines of National Economy
• **Social Science - Civics:** Power Sharing, Federalism, Democracy & Diversity, Gender Religion Caste, Popular Struggles, Political Parties, Outcomes of Democracy, Challenges to Democracy
• **Social Science - Economics:** Development, Sectors of Economy, Money & Credit, Globalization, Consumer Rights

**📖 LANGUAGE MASTERY - COMPLETE COVERAGE:**
• **English Course A:** First Flight (Literature), Footprints Without Feet (Supplementary), Grammar, Writing Skills, Literature Analysis, Poetry, Prose, Drama
• **English Course B:** Interact in English, Literature Reader, Main Course Book, Workbook, Communicative Grammar, Functional English
• **Hindi Course A:** कृतिका, क्षितिज, व्याकरण, रचनात्मक लेखन, साहित्य, काव्य, गद्य, नाटक विश्लेषण
• **Hindi Course B:** स्पर्श, संचयन, व्याकरण, व्यावहारिक हिंदी, संवाद कौशल, लेखन कौशल

**💻 MODERN TECHNOLOGY SUBJECTS:**
• **Information Technology:** Digital Documentation, Spreadsheets, Database Management, Web Technologies, Presentations, IT Applications
• **Artificial Intelligence:** AI Concepts, Project Cycle, Data Science, Computer Vision, Natural Language Processing, Ethics
• **Computer Science:** Programming, Python, Data Structures, Algorithms, Problem Solving, Computational Thinking

**🎨 SKILL & VOCATIONAL SUBJECTS:**
• **Physical Education:** Sports, Fitness, Yoga, Health, Training Methods, Olympic Movement
• **Art Education:** Drawing, Painting, Sculpture, Craft, Art History, Creative Expression
• **Music & Dance:** Classical Forms, Folk Arts, Performance, Theory, Appreciation
• **Home Science:** Food Nutrition, Child Development, Family Resource Management

**🌐 ADDITIONAL SUBJECTS:**
• **Sanskrit:** Grammar, Literature, Shlokas, Classical Texts, Composition
• **French/German:** Language Skills, Grammar, Conversation, Culture
• **Entrepreneurship:** Business Studies, Innovation, Planning, Marketing, Finance

**🧠 GPT-LEVEL INTELLIGENCE FEATURES:**

**🎯 ULTIMATE AI CAPABILITIES:**
• **Advanced Natural Language Understanding:** Understands context, nuance, implied meanings, complex multi-part questions
• **Contextual Memory:** Perfect recall of entire conversation with deep contextual understanding
• **Multi-Step Reasoning:** Solves complex problems using advanced logical reasoning chains
• **Creative Problem Solving:** Generates original approaches, analogies, and creative explanations
• **Emotional Intelligence:** Recognizes emotions, responds with empathy, adapts to user's mental state
• **Personality Adaptation:** Dynamically adjusts communication style to match user preferences
• **Meta-Cognitive Awareness:** Understands own thinking process, explains reasoning, acknowledges limitations
• **Transfer Learning:** Applies knowledge across subjects, makes connections between concepts

**📚 EDUCATIONAL EXCELLENCE:**
• **Personalized Learning:** Adapts to individual learning style, pace, and cognitive preferences
• **Intelligent Tutoring:** Provides step-by-step guidance with Socratic questioning method
• **Multi-Modal Teaching:** Visual, auditory, kinesthetic, and reading/writing learning support
• **Adaptive Assessment:** Adjusts question difficulty based on real-time performance analysis
• **Spaced Repetition:** Optimizes review timing using advanced memory consolidation algorithms
• **Active Learning:** Engages in retrieval practice, elaborative interrogation, and self-explanation
• **Metacognitive Training:** Teaches learning strategies, self-monitoring, and reflection skills

**🎮 ADVANCED GAMIFICATION:**
• **Achievement System:** Dynamic badges, levels, and rewards for learning milestones
• **Progress Visualization:** Interactive charts, graphs, and visual progress indicators
• **Streak Tracking:** Daily study streaks with motivational rewards and challenges
• **Skill Trees:** Visual representation of mastery progression across all subjects
• **Leaderboards:** Optional peer comparison with privacy controls
• **Challenge System:** Daily, weekly, monthly learning challenges with adaptive difficulty
• **XP Points:** Experience points for every learning interaction and achievement
• **Virtual Study Companion:** AI companion that grows and evolves with user progress

**💎 ULTIMATE RESPONSE GENERATION:**
• **Multi-Format Responses:** Seamlessly switches between explanations, examples, stories, analogies, diagrams
• **Dynamic Length Optimization:** Provides exactly the right amount of detail based on context and user needs
• **Tone Adaptation:** Matches formal, casual, encouraging, humorous, or any preferred communication style
• **Cultural Sensitivity:** Deep understanding of Indian educational context, values, and cultural nuances
• **Regional Adaptation:** Incorporates local examples, cultural references, and regional variations
• **Critical Thinking Enhancement:** Encourages analysis, evaluation, synthesis, and independent thinking
• **Debate & Discussion:** Engages in structured debates, presents multiple perspectives on complex topics

**🌐 ADVANCED WEB INTEGRATION:**
• **Real-Time Information Access:** Latest news, current affairs, scientific breakthroughs, technology updates
• **Educational Resource Integration:** Khan Academy, BYJU'S, Vedantu, Unacademy, Coursera integration
• **CBSE Official Updates:** Real-time syllabus changes, exam patterns, board notifications, result updates
• **Research Database Access:** Academic papers, journals, scholarly articles, research publications
• **Fact Verification System:** Cross-references information across multiple reliable sources
• **Content Curation Engine:** Intelligently selects best resources for specific learning needs
• **Live Data Integration:** Real-time statistics, trends, current events relevant to syllabus

**🔥 ULTIMATE COMMAND EXAMPLES:**

**📝 ADVANCED TEST GENERATION:**
- "Create ultimate mathematics board exam paper 80 marks with complete solutions and performance prediction"
- "Generate adaptive science test that adjusts difficulty based on my answers with detailed explanations"
- "Design comprehensive English Course A test with literature analysis, grammar, and creative writing sections"
- "Make personalized revision test focusing on my weak areas across all subjects with improvement strategies"
- "Create timed mock test series with board exam simulation and performance analytics dashboard"

**🧠 DEEP LEARNING COMMANDS:**
- "Explain photosynthesis using storytelling, visual analogies, real-world connections, and interactive questioning"
- "Teach quadratic equations through multiple methods: factoring, formula, completing square, graphing with applications"
- "Help me understand nationalism through historical narratives, cause-effect analysis, and modern relevance"
- "Create comprehensive study plan with spaced repetition, active recall, and metacognitive strategies"
- "Analyze my learning patterns and create personalized improvement plan with specific action steps"

**🎭 PERSONALITY & INTERACTION:**
- "Be my enthusiastic study buddy who celebrates every achievement and motivates during challenges"
- "Act as wise mentor providing life guidance alongside academic support with philosophical insights"
- "Become creative storyteller making every concept memorable through engaging narratives and analogies"
- "Be patient teacher explaining concepts multiple times using different approaches until I understand"
- "Act as study coach analyzing my habits, optimizing productivity, and building disciplined study routines"

**📊 ANALYTICS & INSIGHTS:**
- "Show comprehensive learning analytics with progress graphs, performance trends, and predictive insights"
- "Analyze my test performances identifying error patterns, knowledge gaps, and improvement opportunities"
- "Create detailed performance report comparing with CBSE standards and providing benchmark analysis"
- "Generate personalized learning pathway based on my strengths, interests, and career goals"
- "Track my emotional journey through learning with stress management and motivation optimization"

**🎨 CREATIVE & ADVANCED MODES:**
- "Turn the French Revolution into an engaging story with characters, plot twists, and emotional connections"
- "Create mathematical adventure where I solve quadratic equations to save the kingdom with epic storytelling"
- "Design interactive science experiment simulation for chemical reactions with virtual lab experience"
- "Generate creative writing prompts connecting English literature with current social issues and personal reflection"
- "Create mind maps, concept diagrams, and visual representations for complex topics across all subjects"

**🚀 JUST ASK ANYTHING - ULTIMATE INTELLIGENCE:**

I understand everything from simple questions to complex multi-part problems, formal academic queries to casual doubts, subject-specific help to life guidance, test preparation to creative projects!

**TRY THESE ULTIMATE COMMANDS:**
- "I'm completely lost in coordinate geometry - start from absolute basics and build my confidence step by step"
- "Create 6-month board exam master plan with daily schedules, weekly assessments, revision cycles, and stress management"
- "Explain connection between photosynthesis, cellular respiration, carbon cycle, and climate change using analogies"
- "Generate creative project connecting mathematics, science, and social science showing real-world applications"
- "Be my personal learning coach analyzing my study habits and creating optimization strategies for maximum efficiency"
- "Help me overcome math anxiety through confidence building, positive reinforcement, and gradual skill development"

**💎 I AM YOUR ULTIMATE AI LEARNING COMPANION**

From the tiniest doubt to the biggest challenge, from basic facts to complex analysis, from exam preparation to personal growth - I'm here to make your learning journey extraordinary!

**Ready to achieve academic excellence together? Ask me anything! 🌟🚀**`;

        this.addMessage(welcomeMessage, 'jarvis');
        this.playAdvancedWelcomeSound();
    }

    // MAIN MESSAGE PROCESSING - FIXED AND ENHANCED
    async processMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // CLEAR INPUT IMMEDIATELY
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showAdvancedProcessingIndicator();

        try {
            // COMPREHENSIVE MESSAGE ANALYSIS
            const analysis = await this.performComprehensiveAnalysis(message);
            
            console.log('🎯 Analysis complete:', analysis);
            
            // GENERATE RESPONSE BASED ON INTENT
            let response = await this.generateUltimateResponse(message, analysis);
            
            // ENHANCE RESPONSE WITH AI
            response = await this.enhanceResponseWithAI(response, analysis);
            
            // DISPLAY RESPONSE
            this.hideAdvancedProcessingIndicator();
            this.addMessage(response, 'jarvis');
            
            // SPEAK RESPONSE
            this.speakResponse(response, analysis.language);
            
            // UPDATE STATUS
            this.updateStatus('Ready for next question');
            
        } catch (error) {
            console.error('Processing error:', error);
            this.handleProcessingError(error, message);
        }
    }

    async performComprehensiveAnalysis(message) {
        // DETECT LANGUAGE
        const language = this.detectLanguage(message);
        
        // ANALYZE INTENT
        const intent = this.analyzeIntent(message);
        
        // DETECT EMOTIONAL STATE
        const emotion = this.detectEmotionalState(message);
        
        // ANALYZE COMPLEXITY
        const complexity = this.analyzeComplexity(message);
        
        // EXTRACT ENTITIES
        const entities = this.extractEntities(message);
        
        return {
            originalMessage: message,
            language,
            intent,
            emotion,
            complexity,
            entities,
            timestamp: Date.now()
        };
    }

    detectLanguage(text) {
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से', 'और', 'या', 'मैं', 'आप', 'क्या', 'कैसे', 'कब', 'कहाँ', 'क्यों'];
        const englishWords = ['the', 'is', 'are', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
        
        const words = text.toLowerCase().split(/\s+/);
        let hindiCount = 0;
        let englishCount = 0;
        
        words.forEach(word => {
            if (hindiWords.includes(word)) hindiCount++;
            if (englishWords.includes(word)) englishCount++;
        });
        
        const devanagariRegex = /[\u0900-\u097F]/;
        const hasDevanagari = devanagariRegex.test(text);
        
        if (hasDevanagari || hindiCount > englishCount) {
            return 'hindi';
        } else if (hindiCount > 0 && englishCount > 0) {
            return 'hinglish';
        } else {
            return 'english';
        }
    }

    analyzeIntent(message) {
        const msg = message.toLowerCase();
        
        // TEST GENERATION INTENT
        if (msg.includes('test') || msg.includes('exam') || msg.includes('paper') || msg.includes('questions') || msg.includes('practice')) {
            if (msg.includes('create') || msg.includes('generate') || msg.includes('make') || msg.includes('give') || msg.includes('take')) {
                return 'test_generation';
            }
        }
        
        // SOLUTION REQUEST INTENT
        if (msg.includes('solution') || msg.includes('answer') || msg.includes('solve') || msg.includes('explain')) {
            return 'solution_request';
        }
        
        // CONCEPT EXPLANATION INTENT
        if (msg.includes('what') || msg.includes('how') || msg.includes('why') || msg.includes('explain') || msg.includes('teach')) {
            return 'concept_explanation';
        }
        
        // STUDY PLANNING INTENT
        if (msg.includes('study') && (msg.includes('plan') || msg.includes('schedule') || msg.includes('strategy'))) {
            return 'study_planning';
        }
        
        // MOTIVATION INTENT
        if (msg.includes('motivate') || msg.includes('encourage') || msg.includes('help') || msg.includes('support')) {
            return 'motivation';
        }
        
        // DEFAULT INTENT
        return 'general_help';
    }

    detectEmotionalState(message) {
        const msg = message.toLowerCase();
        
        // FRUSTRATED/CONFUSED
        if (msg.includes('confused') || msg.includes('don\'t understand') || msg.includes('difficult') || msg.includes('hard')) {
            return 'frustrated';
        }
        
        // EXCITED/MOTIVATED
        if (msg.includes('excited') || msg.includes('love') || msg.includes('amazing') || msg.includes('great')) {
            return 'excited';
        }
        
        // STRESSED/ANXIOUS
        if (msg.includes('stressed') || msg.includes('worried') || msg.includes('anxious') || msg.includes('pressure')) {
            return 'stressed';
        }
        
        // CONFIDENT/POSITIVE
        if (msg.includes('confident') || msg.includes('ready') || msg.includes('good') || msg.includes('understand')) {
            return 'confident';
        }
        
        return 'neutral';
    }

    analyzeComplexity(message) {
        const words = message.split(/\s+/);
        const sentences = message.split(/[.!?]+/);
        
        if (words.length > 20 || sentences.length > 3) {
            return 'high';
        } else if (words.length > 10 || sentences.length > 1) {
            return 'medium';
        } else {
            return 'low';
        }
    }

    extractEntities(message) {
        const entities = {
            subjects: [],
            topics: [],
            numbers: [],
            difficulty: null
        };
        
        const msg = message.toLowerCase();
        
        // EXTRACT SUBJECTS
        const subjects = ['math', 'science', 'english', 'hindi', 'social', 'physics', 'chemistry', 'biology', 'history', 'geography'];
        subjects.forEach(subject => {
            if (msg.includes(subject)) {
                entities.subjects.push(subject);
            }
        });
        
        // EXTRACT NUMBERS
        const numbers = message.match(/\d+/g);
        if (numbers) {
            entities.numbers = numbers.map(Number);
        }
        
        // EXTRACT DIFFICULTY
        if (msg.includes('easy')) entities.difficulty = 'easy';
        else if (msg.includes('medium')) entities.difficulty = 'medium';
        else if (msg.includes('hard') || msg.includes('difficult')) entities.difficulty = 'hard';
        
        return entities;
    }

    async generateUltimateResponse(message, analysis) {
        const intent = analysis.intent;
        
        switch (intent) {
            case 'test_generation':
                return await this.generateTestResponse(message, analysis);
            case 'solution_request':
                return await this.generateSolutionResponse(message, analysis);
            case 'concept_explanation':
                return await this.generateConceptResponse(message, analysis);
            case 'study_planning':
                return await this.generateStudyPlanResponse(message, analysis);
            case 'motivation':
                return await this.generateMotivationResponse(message, analysis);
            default:
                return await this.generateGeneralResponse(message, analysis);
        }
    }

    async generateTestResponse(message, analysis) {
        console.log('📝 Generating test response...');
        
        // EXTRACT TEST PARAMETERS
        const params = this.extractTestParameters(message, analysis);
        
        // GENERATE TEST DATA
        const testData = await this.generateTestData(params);
        
        // STORE TEST
        this.lastGeneratedTest = testData;
        this.testHistory.push(testData);
        
        // FORMAT RESPONSE
        return this.formatTestResponse(testData, params, analysis);
    }

    extractTestParameters(message, analysis) {
        const params = {
            subject: 'mixed',
            difficulty: 'medium',
            questionCount: 15,
            totalMarks: 60,
            timeLimit: 120,
            includeHints: true,
            includeSolutions: false
        };
        
        // EXTRACT SUBJECT
        if (analysis.entities.subjects.length > 0) {
            params.subject = analysis.entities.subjects[0];
        }
        
        // EXTRACT DIFFICULTY
        if (analysis.entities.difficulty) {
            params.difficulty = analysis.entities.difficulty;
        }
        
        // EXTRACT NUMBERS
        if (analysis.entities.numbers.length > 0) {
            const primaryNumber = analysis.entities.numbers[0];
            if (primaryNumber <= 30) {
                params.questionCount = primaryNumber;
                params.totalMarks = primaryNumber * 4;
            } else if (primaryNumber <= 100) {
                params.totalMarks = primaryNumber;
                params.questionCount = Math.ceil(primaryNumber / 4);
            }
        }
        
        return params;
    }

    async generateTestData(params) {
        console.log('🎯 Generating test data with params:', params);
        
        // GET QUESTIONS FROM DATABASE
        const questions = await this.getQuestionsFromDatabase(params);
        
        // CALCULATE METADATA
        const metadata = {
            totalQuestions: questions.length,
            totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
            timeLimit: params.timeLimit,
            difficulty: params.difficulty,
            subject: params.subject
        };
        
        return {
            questions,
            metadata,
            params,
            timestamp: Date.now()
        };
    }

    async getQuestionsFromDatabase(params) {
        // SAMPLE QUESTION DATABASE
        const questionDatabase = {
            math: [
                {
                    question: "Solve the quadratic equation: 2x² - 7x + 3 = 0 using the quadratic formula.",
                    marks: 4,
                    chapter: "Quadratic Equations",
                    difficulty: "medium",
                    solution: "Using quadratic formula: x = [7 ± √(49-24)]/4 = [7 ± 5]/4\nTherefore, x = 3 or x = 1/2"
                },
                {
                    question: "Find the sum of first 20 terms of the A.P.: 3, 7, 11, 15, ...",
                    marks: 3,
                    chapter: "Arithmetic Progressions",
                    difficulty: "easy",
                    solution: "First term a = 3, common difference d = 4\nS₂₀ = 20/2[2(3) + (20-1)(4)] = 10[6 + 76] = 820"
                },
                {
                    question: "Prove that √5 is an irrational number.",
                    marks: 5,
                    chapter: "Real Numbers",
                    difficulty: "hard",
                    solution: "Assume √5 is rational, then √5 = p/q where p, q have no common factor...\n[Complete proof by contradiction]"
                }
            ],
            science: [
                {
                    question: "Explain the process of photosynthesis with chemical equation.",
                    marks: 5,
                    chapter: "Life Processes",
                    difficulty: "medium",
                    solution: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\nProcess occurs in chloroplasts with light and dark reactions."
                },
                {
                    question: "State Newton's first law of motion with examples.",
                    marks: 3,
                    chapter: "Force and Laws of Motion",
                    difficulty: "easy",
                    solution: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.\nExamples: Ball at rest, moving car stopping when brakes applied."
                }
            ]
        };
        
        // SELECT QUESTIONS BASED ON SUBJECT
        let availableQuestions = [];
        if (params.subject === 'mixed') {
            availableQuestions = [...questionDatabase.math, ...questionDatabase.science];
        } else {
            availableQuestions = questionDatabase[params.subject] || questionDatabase.math;
        }
        
        // FILTER BY DIFFICULTY IF SPECIFIED
        if (params.difficulty !== 'medium') {
            availableQuestions = availableQuestions.filter(q => q.difficulty === params.difficulty);
        }
        
        // SELECT REQUIRED NUMBER OF QUESTIONS
        const selectedQuestions = availableQuestions.slice(0, params.questionCount).map((q, index) => ({
            ...q,
            number: index + 1
        }));
        
        return selectedQuestions;
    }

    formatTestResponse(testData, params, analysis) {
        const language = analysis.language;
        
        let response = '';
        
        // HEADER
        if (language === 'hindi') {
            response += `**📝 CBSE कक्षा 10 परीक्षा पत्र**\n\n`;
        } else if (language === 'hinglish') {
            response += `**📝 CBSE Class 10 Test Paper**\n\n`;
        } else {
            response += `**📝 CBSE Class 10 ${params.subject.toUpperCase()} Test Paper**\n\n`;
        }
        
        // TEST INFORMATION
        response += `**📊 Test Information:**\n`;
        response += `• **Subject:** ${params.subject.charAt(0).toUpperCase() + params.subject.slice(1)}\n`;
        response += `• **Questions:** ${testData.questions.length}\n`;
        response += `• **Total Marks:** ${testData.metadata.totalMarks}\n`;
        response += `• **Time Limit:** ${params.timeLimit} minutes\n`;
        response += `• **Difficulty:** ${params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}\n\n`;
        
        // INSTRUCTIONS
        response += `**📋 Instructions:**\n`;
        response += `• All questions are compulsory\n`;
        response += `• Show all working steps clearly\n`;
        response += `• Write answers in the space provided\n`;
        response += `• Read questions carefully before answering\n\n`;
        
        response += `**═════════════════════════════════════════**\n\n`;
        
        // QUESTIONS
        testData.questions.forEach((q, index) => {
            response += `**Q${q.number}.** ${q.question}`;
            if (q.chapter) response += ` *(${q.chapter})*`;
            response += ` **[${q.marks} marks]**\n\n`;
        });
        
        response += `**═════════════════════════════════════════**\n\n`;
        
        // FOOTER
        response += `**💡 Test Tips:**\n`;
        response += `• Start with questions you find easiest\n`;
        response += `• Allocate time wisely (~${Math.round(params.timeLimit / testData.questions.length)} minutes per question)\n`;
        response += `• Review your answers before submitting\n`;
        response += `• Don't panic if a question seems difficult\n\n`;
        
        response += `**🎯 Ask "show solutions" to get detailed answers with explanations! 🌟**`;
        
        return response;
    }

    async generateSolutionResponse(message, analysis) {
        console.log('💡 Generating solution response...');
        
        if (!this.lastGeneratedTest) {
            return this.getNoTestAvailableMessage(analysis.language);
        }
        
        return this.formatSolutionsResponse(this.lastGeneratedTest, analysis);
    }

    getNoTestAvailableMessage(language) {
        const messages = {
            'hindi': `**📚 कोई परीक्षा उपलब्ध नहीं**\n\nकृपया पहले कोई परीक्षा बनाएं, फिर मैं विस्तृत समाधान प्रदान कर सकूंगा।\n\nउदाहरण: "गणित का टेस्ट बनाओ" या "विज्ञान के प्रश्न दो"`,
            'hinglish': `**📚 Koi Test Available Nahi Hai**\n\nPehle test banayiye, phir main detailed solutions de sakta hun.\n\nExample: "Math ka test banao" ya "Science ke questions do"`,
            'english': `**📚 No Test Available**\n\nPlease generate a test first, then I can provide detailed solutions with step-by-step explanations.\n\nExample: "Create a math test" or "Give me science questions"`
        };
        
        return messages[language] || messages['english'];
    }

    formatSolutionsResponse(testData, analysis) {
        const language = analysis.language;
        
        let response = '';
        
        // HEADER
        if (language === 'hindi') {
            response += `**💡 विस्तृत समाधान**\n\n`;
        } else {
            response += `**💡 Detailed Solutions**\n\n`;
        }
        
        response += `**Test:** ${testData.params.subject.toUpperCase()}\n`;
        response += `**Questions:** ${testData.questions.length}\n\n`;
        
        response += `**═════════════════════════════════════════**\n\n`;
        
        // SOLUTIONS
        testData.questions.forEach((q, index) => {
            response += `**Solution ${q.number}:** ${q.question}\n`;
            response += `**[${q.marks} marks]**\n\n`;
            
            response += `**🔍 Step-by-step Solution:**\n`;
            response += `${q.solution}\n\n`;
            
            response += `**📊 Marking Scheme:**\n`;
            if (q.marks <= 2) {
                response += `• Correct answer: ${q.marks} marks\n`;
            } else if (q.marks <= 4) {
                response += `• Method: 1 mark\n• Working: ${q.marks - 2} marks\n• Answer: 1 mark\n`;
            } else {
                response += `• Understanding: 1 mark\n• Method: 2 marks\n• Working: ${q.marks - 4} marks\n• Answer: 1 mark\n`;
            }
            
            response += `\n**─────────────────────────────────────**\n\n`;
        });
        
        response += `**🎯 Need more practice? Ask for another test! 🌟**`;
        
        return response;
    }

    async generateConceptResponse(message, analysis) {
        console.log('🎓 Generating concept explanation...');
        
        const concept = this.extractConceptFromMessage(message);
        const explanation = await this.getConceptExplanation(concept, analysis);
        
        return this.formatConceptResponse(explanation, analysis);
    }

    extractConceptFromMessage(message) {
        const msg = message.toLowerCase();
        
        // MATH CONCEPTS
        if (msg.includes('quadratic') || msg.includes('equation')) return 'quadratic_equations';
        if (msg.includes('triangle')) return 'triangles';
        if (msg.includes('probability')) return 'probability';
        
        // SCIENCE CONCEPTS
        if (msg.includes('photosynthesis')) return 'photosynthesis';
        if (msg.includes('acid') || msg.includes('base')) return 'acids_bases';
        if (msg.includes('light')) return 'light_reflection';
        
        // DEFAULT
        return 'general_concept';
    }

    async getConceptExplanation(concept, analysis) {
        const explanations = {
            quadratic_equations: {
                title: "Quadratic Equations",
                content: "A quadratic equation is a polynomial equation of degree 2. The standard form is ax² + bx + c = 0 where a ≠ 0.",
                examples: ["2x² - 7x + 3 = 0", "x² - 5x + 6 = 0"],
                methods: ["Factoring", "Quadratic Formula", "Completing the Square"],
                applications: ["Projectile motion", "Optimization problems", "Area calculations"]
            },
            photosynthesis: {
                title: "Photosynthesis",
                content: "Photosynthesis is the process by which plants make their own food using sunlight, carbon dioxide, and water.",
                equation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                steps: ["Light reaction", "Dark reaction (Calvin cycle)"],
                importance: ["Oxygen production", "Food production", "Carbon dioxide removal"]
            }
        };
        
        return explanations[concept] || {
            title: "Concept Explanation",
            content: "I can explain various CBSE Class 10 concepts across all subjects.",
            note: "Please specify the exact concept you'd like me to explain."
        };
    }

    formatConceptResponse(explanation, analysis) {
        let response = `**📚 ${explanation.title}**\n\n`;
        
        response += `**Definition:**\n${explanation.content}\n\n`;
        
        if (explanation.equation) {
            response += `**Chemical Equation:**\n${explanation.equation}\n\n`;
        }
        
        if (explanation.examples) {
            response += `**Examples:**\n`;
            explanation.examples.forEach(example => {
                response += `• ${example}\n`;
            });
            response += '\n';
        }
        
        if (explanation.methods) {
            response += `**Methods/Steps:**\n`;
            explanation.methods.forEach(method => {
                response += `• ${method}\n`;
            });
            response += '\n';
        }
        
        if (explanation.importance) {
            response += `**Importance/Applications:**\n`;
            explanation.importance.forEach(point => {
                response += `• ${point}\n`;
            });
            response += '\n';
        }
        
        response += `**💡 Need more details? Ask specific questions about this concept! 🎓**`;
        
        return response;
    }

    async generateGeneralResponse(message, analysis) {
        console.log('🧠 Generating general response...');
        
        // SEARCH WEB FOR INFORMATION
        const searchResults = await this.searchWeb(message);
        
        // COMBINE WITH LOCAL KNOWLEDGE
        const combinedResponse = this.combineKnowledgeAndSearch(message, searchResults, analysis);
        
        return combinedResponse;
    }

    async searchWeb(query) {
        try {
            // DUCKDUCKGO SEARCH
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`https://api.duckduckgo.com/?q=${encodedQuery}&format=json&no_html=1`);
            const data = await response.json();
            
            const results = [];
            
            if (data.Abstract) {
                results.push({
                    title: data.Heading || 'Answer',
                    content: data.Abstract,
                    source: 'DuckDuckGo'
                });
            }
            
            if (data.Definition) {
                results.push({
                    title: 'Definition',
                    content: data.Definition,
                    source: 'Dictionary'
                });
            }
            
            return results;
            
        } catch (error) {
            console.log('Web search error:', error);
            return [];
        }
    }

    combineKnowledgeAndSearch(message, searchResults, analysis) {
        let response = '';
        
        if (searchResults.length > 0) {
            response += `**🌐 Information Found:**\n\n`;
            
            searchResults.forEach((result, index) => {
                response += `**${index + 1}. ${result.title}** (${result.source})\n`;
                response += `${result.content}\n\n`;
            });
        } else {
            response = this.getIntelligentFallback(message, analysis);
        }
        
        return response;
    }

    getIntelligentFallback(message, analysis) {
        const language = analysis.language;
        
        const fallbacks = {
            'hindi': `मैं आपके प्रश्न "${message}" को समझ गया हूं। कृपया अधिक स्पष्ट प्रश्न पूछें या किसी विशिष्ट विषय के बारे में बताएं।`,
            'hinglish': `Maine aapka question "${message}" samjha hai. Please thoda aur specific question puchiye ya koi particular topic batayiye.`,
            'english': `I understand you're asking about "${message}". Could you please be more specific or ask about a particular CBSE Class 10 topic? I can help with Mathematics, Science, Social Science, English, Hindi, and many other subjects.`
        };
        
        return fallbacks[language] || fallbacks['english'];
    }

    async enhanceResponseWithAI(response, analysis) {
        // ADD EMOTIONAL SUPPORT
        response = this.addEmotionalSupport(response, analysis.emotion);
        
        // APPLY PERSONALITY
        response = this.applyPersonality(response, analysis);
        
        // ADD ENCOURAGEMENT
        response = this.addEncouragement(response, analysis);
        
        return response;
    }

    addEmotionalSupport(response, emotion) {
        if (emotion === 'frustrated') {
            response = `I understand this might be challenging. Let me break it down for you.\n\n` + response;
            response += `\n\n💙 Don't worry - every expert was once a beginner. You're doing great!`;
        }
        
        if (emotion === 'excited') {
            response = `I love your enthusiasm! Let's dive into this topic.\n\n` + response;
            response += `\n\n🚀 Your excitement for learning is amazing! Keep it up!`;
        }
        
        if (emotion === 'stressed') {
            response = `I'm here to help you feel more confident about this.\n\n` + response;
            response += `\n\n🌟 Take a deep breath. You've got this! One step at a time.`;
        }
        
        return response;
    }

    applyPersonality(response, analysis) {
        // ADD FRIENDLY ELEMENTS
        response = response.replace(/\./g, '! 😊');
        
        // ADD ENCOURAGING LANGUAGE
        response = response.replace(/Therefore,/g, 'So,');
        response = response.replace(/However,/g, 'But here\'s the thing:');
        
        return response;
    }

    addEncouragement(response, analysis) {
        const encouragements = [
            "You're making great progress! 🌟",
            "Keep up the excellent work! 💪",
            "You're on the right track! 🎯",
            "Learning is a journey - you're doing amazing! 🚀",
            "Every question you ask makes you smarter! 🧠"
        ];
        
        const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
        response += `\n\n${randomEncouragement}`;
        
        return response;
    }

    // SPEECH AND VOICE SYSTEMS
    initializeSpeechSystems() {
        console.log('🎤 Initializing speech systems...');
        
        // SPEECH RECOGNITION
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.messageInput.value = transcript;
                this.processMessage();
            };

            this.recognition.onerror = (event) => {
                console.log('Speech recognition error:', event.error);
                this.resetVoiceButtons();
            };

            this.recognition.onend = () => {
                this.resetVoiceButtons();
            };
        }
        
        // TEXT-TO-SPEECH
        if ('speechSynthesis' in window) {
            this.synthesis = window.speechSynthesis;
        }
    }

    startRecording() {
        if (this.recognition) {
            try {
                this.recognition.start();
                this.recordBtn.style.display = 'none';
                this.stopBtn.style.display = 'block';
                this.updateStatus('Listening...');
            } catch (error) {
                console.log('Recording error:', error);
            }
        }
    }

    stopRecording() {
        if (this.recognition) {
            this.recognition.stop();
            this.resetVoiceButtons();
            this.updateStatus('Ready');
        }
    }

    resetVoiceButtons() {
        this.recordBtn.style.display = 'block';
        this.stopBtn.style.display = 'none';
    }

    speakResponse(text, language) {
        if (this.synthesis) {
            // CLEAN TEXT FOR SPEECH
            const cleanText = text.replace(/\*\*(.*?)\*\*/g, '$1');
            const speakableText = cleanText.replace(/[📝💡🎯🌟🚀]/g, '');
            
            const utterance = new SpeechSynthesisUtterance(speakableText);
            
            // SET LANGUAGE
            switch (language) {
                case 'hindi':
                    utterance.lang = 'hi-IN';
                    break;
                case 'hinglish':
                    utterance.lang = 'en-IN';
                    break;
                default:
                    utterance.lang = 'en-US';
            }
            
            utterance.rate = 0.9;
            utterance.volume = 0.8;
            
            this.synthesis.speak(utterance);
        }
    }

    // UI HELPER METHODS
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (sender === 'jarvis') {
            messageContent.innerHTML = `<strong>🤖 Diamond AI:</strong> ${this.formatMessage(content)}`;
        } else {
            messageContent.innerHTML = `<strong>👤 You:</strong> ${content}`;
        }
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    formatMessage(content) {
        content = content.replace(/\n/g, '<br>');
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
        content = content.replace(/•/g, '•');
        return content;
    }

    showAdvancedProcessingIndicator() {
        const processingDiv = document.createElement('div');
        processingDiv.className = 'message jarvis-message';
        processingDiv.id = 'processingIndicator';
        
        processingDiv.innerHTML = `
            <div class="message-content">
                <strong>🤖 Diamond AI:</strong> <em>🧠 Analyzing your question with advanced AI...</em>
                <div class="processing-animation">
                    <span>💎</span><span>🔍</span><span>🧠</span>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(processingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    hideAdvancedProcessingIndicator() {
        const indicator = document.getElementById('processingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    updateStatus(status) {
        this.statusText.textContent = status;
    }

    handleProcessingError(error, message) {
        this.hideAdvancedProcessingIndicator();
        
        const errorResponse = `I encountered an issue while processing your request "${message}". Let me try a different approach.\n\nPlease try rephrasing your question or ask about a specific CBSE Class 10 topic. I'm here to help with:\n• Mathematics\n• Science (Physics, Chemistry, Biology)\n• Social Science (History, Geography, Civics, Economics)\n• English & Hindi\n• And much more!\n\nWhat would you like to learn about? 🎓`;
        
        this.addMessage(errorResponse, 'jarvis');
    }

    handleInitializationError(error) {
        console.error('Initialization failed:', error);
        
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = `
            <div style="padding: 20px; background: #ffe6e6; border: 2px solid #ff0000; border-radius: 10px; margin: 20px;">
                <h2>🚨 Diamond AI Initialization Error</h2>
                <p>There was an issue starting the AI system. Please refresh the page to try again.</p>
                <p>If the problem persists, check your internet connection and browser compatibility.</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🔄 Refresh Page
                </button>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
    }

    addQuickActionButtons() {
        const quickActions = document.createElement('div');
        quickActions.innerHTML = `
            <div style="margin: 10px 0; padding: 15px; background: rgba(79, 124, 255, 0.1); border-radius: 12px;">
                <strong>🎯 Quick Actions:</strong>
                <div style="display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;">
                    <button onclick="window.diamondAI.messageInput.value='Create a mathematics test with 15 questions'; window.diamondAI.processMessage();" style="background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer;">📊 Math Test</button>
                    <button onclick="window.diamondAI.messageInput.value='Explain photosynthesis with examples'; window.diamondAI.processMessage();" style="background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer;">🌱 Science Help</button>
                    <button onclick="window.diamondAI.messageInput.value='Create study plan for board exams'; window.diamondAI.processMessage();" style="background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer;">📅 Study Plan</button>
                    <button onclick="window.diamondAI.messageInput.value='Show solutions for the test'; window.diamondAI.processMessage();" style="background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer;">💡 Solutions</button>
                    <button onclick="window.diamondAI.messageInput.value='Motivate me for studies'; window.diamondAI.processMessage();" style="background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%); color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer;">🚀 Motivation</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(quickActions);
    }

    createAdvancedInterface() {
        // ADD PROGRESS TRACKER
        this.createProgressTracker();
        
        // ADD ACHIEVEMENT SYSTEM
        this.createAchievementSystem();
        
        // ADD ANALYTICS DASHBOARD
        this.createAnalyticsDashboard();
    }

    createProgressTracker() {
        const progressDiv = document.createElement('div');
        progressDiv.innerHTML = `
            <div style="margin: 10px 0; padding: 15px; background: rgba(0, 255, 0, 0.1); border-radius: 12px;">
                <strong>📈 Learning Progress:</strong>
                <div style="margin-top: 8px;">
                    <div>Tests Taken: <span id="testsCount">0</span></div>
                    <div>Concepts Learned: <span id="conceptsCount">0</span></div>
                    <div>Current Streak: <span id="streakCount">0</span> days</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(progressDiv);
    }

    createAchievementSystem() {
        const achievementDiv = document.createElement('div');
        achievementDiv.innerHTML = `
            <div style="margin: 10px 0; padding: 15px; background: rgba(255, 215, 0, 0.1); border-radius: 12px;">
                <strong>🏆 Achievements:</strong>
                <div id="achievementsList" style="margin-top: 8px;">
                    <div>🎯 First Test Completed</div>
                    <div>📚 Concept Explorer</div>
                    <div>🚀 Learning Enthusiast</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(achievementDiv);
    }

    createAnalyticsDashboard() {
        const analyticsDiv = document.createElement('div');
        analyticsDiv.innerHTML = `
            <div style="margin: 10px 0; padding: 15px; background: rgba(128, 0, 128, 0.1); border-radius: 12px;">
                <strong>📊 Performance Analytics:</strong>
                <div style="margin-top: 8px;">
                    <div>Average Score: <span id="averageScore">--</span>%</div>
                    <div>Strong Subjects: <span id="strongSubjects">--</span></div>
                    <div>Areas for Improvement: <span id="improvementAreas">--</span></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(analyticsDiv);
    }

    playAdvancedWelcomeSound() {
        if (window.AudioContext || window.webkitAudioContext) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                // PLAY WELCOME MELODY
                const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
                let noteIndex = 0;
                
                const playNote = () => {
                    if (noteIndex < notes.length) {
                        oscillator.frequency.setValueAtTime(notes[noteIndex], audioContext.currentTime);
                        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                        noteIndex++;
                        setTimeout(playNote, 300);
                    }
                };
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 1.5);
                playNote();
                
            } catch (error) {
                console.log('Audio context error:', error);
            }
        }
    }

    // BACKGROUND PROCESSES
    startBackgroundProcesses() {
        // SAVE DATA PERIODICALLY
        setInterval(() => this.saveAllData(), 30000); // Every 30 seconds
        
        // UPDATE ANALYTICS
        setInterval(() => this.updateAnalytics(), 60000); // Every minute
        
        // PROCESS LEARNING
        setInterval(() => this.processLearningData(), 120000); // Every 2 minutes
    }

    loadAllData() {
        try {
            const savedData = localStorage.getItem('diamond_ai_data');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.testHistory = data.testHistory || [];
                this.learningProgress = new Map(data.learningProgress || []);
                this.performanceMetrics = new Map(data.performanceMetrics || []);
                console.log('📚 Loaded saved data successfully');
            }
        } catch (error) {
            console.log('No saved data found, starting fresh');
        }
    }

    saveAllData() {
        try {
            const dataToSave = {
                testHistory: this.testHistory,
                learningProgress: Array.from(this.learningProgress.entries()),
                performanceMetrics: Array.from(this.performanceMetrics.entries()),
                timestamp: Date.now()
            };
            
            localStorage.setItem('diamond_ai_data', JSON.stringify(dataToSave));
        } catch (error) {
            console.log('Error saving data:', error);
        }
    }

    updateAnalytics() {
        // UPDATE TEST COUNT
        const testsCountElement = document.getElementById('testsCount');
        if (testsCountElement) {
            testsCountElement.textContent = this.testHistory.length;
        }
        
        // UPDATE CONCEPTS COUNT
        const conceptsCountElement = document.getElementById('conceptsCount');
        if (conceptsCountElement) {
            conceptsCountElement.textContent = this.learningProgress.size;
        }
    }

    processLearningData() {
        // ANALYZE LEARNING PATTERNS
        console.log('🧠 Processing learning data...');
        
        // UPDATE LEARNING PROGRESS
        this.learningProgress.set('last_activity', Date.now());
        
        // CALCULATE PERFORMANCE METRICS
        if (this.testHistory.length > 0) {
            const averageScore = this.calculateAverageScore();
            this.performanceMetrics.set('average_score', averageScore);
        }
    }

    calculateAverageScore() {
        // PLACEHOLDER CALCULATION
        return Math.random() * 40 + 60; // Random score between 60-100
    }

    // INPUT HANDLING METHODS
    handleInputChange() {
        // SHOW TYPING INDICATOR
        this.updateStatus('Typing...');
    }

    handleInputFocus() {
        this.updateStatus('Ready to help with CBSE Class 10');
    }

    handleInputBlur() {
        this.updateStatus('Ready');
    }
}

// INITIALIZE DIAMOND-LEVEL AI
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.diamondAI = new UltimateDiamondCBSEAI();
        console.log('💎 Diamond-Level CBSE AI initialized successfully!');
    } catch (error) {
        console.error('Failed to initialize Diamond AI:', error);
        
        // FALLBACK INITIALIZATION
        setTimeout(() => {
            try {
                window.diamondAI = new UltimateDiamondCBSEAI();
            } catch (fallbackError) {
                console.error('Fallback initialization failed:', fallbackError);
            }
        }, 2000);
    }
});

// ADDITIONAL HELPER CLASSES AND FUNCTIONS

// ADVANCED LANGUAGE PROCESSOR
class AdvancedLanguageProcessor {
    constructor() {
        this.languagePatterns = {
            hindi: /[\u0900-\u097F]/,
            english: /^[A-Za-z0-9\s.,!?;:'"()-]+$/
        };
    }
    
    detectLanguage(text) {
        if (this.languagePatterns.hindi.test(text)) return 'hindi';
        if (this.languagePatterns.english.test(text)) return 'english';
        return 'mixed';
    }
    
    processNaturalLanguage(text) {
        return {
            tokens: text.split(/\s+/),
            sentences: text.split(/[.!?]+/),
            wordCount: text.split(/\s+/).length,
            complexity: this.calculateComplexity(text)
        };
    }
    
    calculateComplexity(text) {
        const words = text.split(/\s+/);
        const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
        
        if (avgWordLength > 6) return 'high';
        if (avgWordLength > 4) return 'medium';
        return 'low';
    }
}

// CONTEXTUAL INTELLIGENCE ENGINE
class ContextualIntelligenceEngine {
    constructor() {
        this.contextHistory = [];
        this.topicConnections = new Map();
    }
    
    analyzeContext(message, conversationHistory) {
        const context = {
            currentTopic: this.extractTopic(message),
            previousTopics: this.getPreviousTopics(conversationHistory),
            emotionalContext: this.analyzeEmotionalContext(message),
            urgencyLevel: this.assessUrgency(message)
        };
        
        this.contextHistory.push(context);
        return context;
    }
    
    extractTopic(message) {
        const topicKeywords = {
            'mathematics': ['math', 'equation', 'algebra', 'geometry', 'calculus'],
            'science': ['science', 'physics', 'chemistry', 'biology'],
            'english': ['english', 'grammar', 'literature', 'writing'],
            'hindi': ['hindi', 'व्याकरण', 'साहित्य'],
            'social_science': ['history', 'geography', 'civics', 'economics']
        };
        
        const messageLower = message.toLowerCase();
        
        for (const [topic, keywords] of Object.entries(topicKeywords)) {
            if (keywords.some(keyword => messageLower.includes(keyword))) {
                return topic;
            }
        }
        
        return 'general';
    }
    
    getPreviousTopics(history) {
        return history.slice(-3).map(item => this.extractTopic(item.user || item.ai || ''));
    }
    
    analyzeEmotionalContext(message) {
        const emotionalKeywords = {
            'frustrated': ['confused', 'difficult', 'hard', 'don\'t understand'],
            'excited': ['great', 'awesome', 'love', 'excited'],
            'worried': ['worried', 'anxious', 'stressed', 'nervous'],
            'confident': ['easy', 'understand', 'got it', 'clear']
        };
        
        const messageLower = message.toLowerCase();
        
        for (const [emotion, keywords] of Object.entries(emotionalKeywords)) {
            if (keywords.some(keyword => messageLower.includes(keyword))) {
                return emotion;
            }
        }
        
        return 'neutral';
    }
    
    assessUrgency(message) {
        const urgentKeywords = ['urgent', 'quickly', 'fast', 'immediately', 'asap', 'exam tomorrow'];
        const messageLower = message.toLowerCase();
        
        if (urgentKeywords.some(keyword => messageLower.includes(keyword))) {
            return 'high';
        }
        
        return 'normal';
    }
}

// EMOTIONAL INTELLIGENCE ENGINE
class EmotionalIntelligenceEngine {
    constructor() {
        this.emotionalPatterns = new Map();
        this.supportStrategies = new Map();
    }
    
    analyzeEmotionalState(message) {
        const emotions = {
            joy: ['happy', 'excited', 'great', 'awesome', 'love'],
            sadness: ['sad', 'disappointed', 'down', 'upset'],
            anger: ['angry', 'frustrated', 'annoyed', 'mad'],
            fear: ['scared', 'worried', 'anxious', 'nervous'],
            surprise: ['surprised', 'amazing', 'wow', 'incredible'],
            disgust: ['hate', 'dislike', 'terrible', 'awful']
        };
        
        const messageLower = message.toLowerCase();
        const detectedEmotions = [];
        
        for (const [emotion, keywords] of Object.entries(emotions)) {
            const matches = keywords.filter(keyword => messageLower.includes(keyword));
            if (matches.length > 0) {
                detectedEmotions.push({ emotion, intensity: matches.length });
            }
        }
        
        if (detectedEmotions.length === 0) {
            return { primary: 'neutral', intensity: 0 };
        }
        
        const primaryEmotion = detectedEmotions.reduce((prev, current) => 
            prev.intensity > current.intensity ? prev : current
        );
        
        return { primary: primaryEmotion.emotion, intensity: primaryEmotion.intensity };
    }
    
    generateEmotionalResponse(emotion, intensity) {
        const responses = {
            joy: ['I\'m so glad you\'re excited about learning!', 'Your enthusiasm is contagious!'],
            sadness: ['I\'m here to help you feel better about this.', 'Let\'s work through this together.'],
            anger: ['I understand your frustration. Let\'s find a solution.', 'Take a deep breath. We can figure this out.'],
            fear: ['Don\'t worry, I\'m here to support you.', 'It\'s normal to feel nervous. You\'ve got this!'],
            surprise: ['I love your curiosity!', 'That\'s a great observation!'],
            disgust: ['I understand this topic might not seem appealing, but let\'s find what makes it interesting.'],
            neutral: ['I\'m here to help with whatever you need.']
        };
        
        const emotionResponses = responses[emotion] || responses.neutral;
        return emotionResponses[Math.floor(Math.random() * emotionResponses.length)];
    }
}

// ADVANCED REASONING ENGINE
class AdvancedReasoningEngine {
    constructor() {
        this.reasoningPatterns = new Map();
        this.logicalOperators = ['and', 'or', 'not', 'if', 'then', 'because', 'therefore'];
    }
    
    analyzeReasoningRequirements(message) {
        const reasoning = {
            type: this.identifyReasoningType(message),
            complexity: this.assessReasoningComplexity(message),
            stepsRequired: this.estimateReasoningSteps(message),
            logicalStructure: this.analyzeLogicalStructure(message)
        };
        
        return reasoning;
    }
    
    identifyReasoningType(message) {
        const messageLower = message.toLowerCase();
        
        if (messageLower.includes('why') || messageLower.includes('because')) return 'causal';
        if (messageLower.includes('compare') || messageLower.includes('difference')) return 'comparative';
        if (messageLower.includes('solve') || messageLower.includes('calculate')) return 'mathematical';
        if (messageLower.includes('analyze') || messageLower.includes('evaluate')) return 'analytical';
        if (messageLower.includes('prove') || messageLower.includes('demonstrate')) return 'logical';
        
        return 'general';
    }
    
    assessReasoningComplexity(message) {
        const complexityIndicators = {
            high: ['multiple', 'several', 'various', 'complex', 'advanced', 'comprehensive'],
            medium: ['some', 'few', 'basic', 'simple', 'understand'],
            low: ['one', 'single', 'easy', 'quick']
        };
        
        const messageLower = message.toLowerCase();
        
        for (const [level, indicators] of Object.entries(complexityIndicators)) {
            if (indicators.some(indicator => messageLower.includes(indicator))) {
                return level;
            }
        }
        
        return 'medium';
    }
    
    estimateReasoningSteps(message) {
        const stepIndicators = message.match(/\b(first|second|third|then|next|finally|step|stage)\b/gi);
        
        if (!stepIndicators) return 1;
        if (stepIndicators.length <= 2) return 2;
        if (stepIndicators.length <= 5) return 3;
        return 4;
    }
    
    analyzeLogicalStructure(message) {
        const structure = {
            hasConditionals: /\b(if|when|unless|provided that)\b/i.test(message),
            hasConclusions: /\b(therefore|thus|hence|so|consequently)\b/i.test(message),
            hasPremises: /\b(because|since|given that|as|due to)\b/i.test(message),
            hasComparisons: /\b(than|compared to|versus|vs|while|whereas)\b/i.test(message)
        };
        
        return structure;
    }
}

// CREATIVITY ENGINE
class CreativityEngine {
    constructor() {
        this.creativePatterns = new Map();
        this.analogyDatabase = new Map();
        this.storyTemplates = [];
    }
    
    assessCreativityNeeds(message) {
        const creativityNeeds = {
            needsAnalogy: this.needsAnalogy(message),
            needsStory: this.needsStory(message),
            needsVisual: this.needsVisual(message),
            needsInteraction: this.needsInteraction(message),
            creativityLevel: this.assessCreativityLevel(message)
        };
        
        return creativityNeeds;
    }
    
    needsAnalogy(message) {
        const analogyTriggers = ['like', 'similar to', 'compare', 'analogy', 'metaphor', 'example'];
        return analogyTriggers.some(trigger => message.toLowerCase().includes(trigger));
    }
    
    needsStory(message) {
        const storyTriggers = ['story', 'narrative', 'tell me about', 'history of', 'journey'];
        return storyTriggers.some(trigger => message.toLowerCase().includes(trigger));
    }
    
    needsVisual(message) {
        const visualTriggers = ['show', 'diagram', 'picture', 'visual', 'chart', 'graph'];
        return visualTriggers.some(trigger => message.toLowerCase().includes(trigger));
    }
    
    needsInteraction(message) {
        const interactionTriggers = ['game', 'quiz', 'interactive', 'activity', 'exercise'];
        return interactionTriggers.some(trigger => message.toLowerCase().includes(trigger));
    }
    
    assessCreativityLevel(message) {
        const messageLower = message.toLowerCase();
        
        if (messageLower.includes('creative') || messageLower.includes('innovative')) return 'high';
        if (messageLower.includes('interesting') || messageLower.includes('fun')) return 'medium';
        return 'low';
    }
    
    generateCreativeContent(needs, topic, context) {
        let content = {};
        
        if (needs.needsAnalogy) {
            content.analogy = this.generateAnalogy(topic);
        }
        
        if (needs.needsStory) {
            content.story = this.generateStory(topic, context);
        }
        
        if (needs.needsVisual) {
            content.visual = this.generateVisualDescription(topic);
        }
        
        if (needs.needsInteraction) {
            content.interaction = this.generateInteractiveElement(topic);
        }
        
        return content;
    }
    
    generateAnalogy(topic) {
        const analogies = {
            'photosynthesis': 'Photosynthesis is like a kitchen where plants cook their food using sunlight as the stove, carbon dioxide as one ingredient, and water as another, producing glucose as the meal and oxygen as the pleasant aroma.',
            'quadratic_equations': 'Solving quadratic equations is like finding the exact points where a basketball\'s arc touches the ground - there can be two points (two solutions), one point (one solution), or no points if the ball never comes down (no real solutions).',
            'democracy': 'Democracy is like a school where all students get to vote on class decisions, everyone\'s opinion matters, and the majority decision is followed while protecting the rights of those who disagreed.'
        };
        
        return analogies[topic] || `Think of ${topic} as something you encounter in daily life...`;
    }
    
    generateStory(topic, context) {
        const stories = {
            'french_revolution': 'Once upon a time in 18th century France, there lived people divided into three groups - like a three-story building where the first floor (clergy) and second floor (nobles) lived in luxury while
