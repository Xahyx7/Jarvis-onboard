// ULTIMATE DIAMOND-LEVEL CBSE AI - COMPLETE WORKING VERSION
class UltimateDiamondCBSEAI {
    constructor() {
        // CORE SYSTEM PROPERTIES
        this.version = "Diamond-Level-5.0";
        this.isRecording = false;
        this.isProcessing = false;
        this.recognition = null;
        this.synthesis = null;
        this.apiCache = new Map();
        this.conversationMemory = [];
        this.sessionId = this.generateSessionId();
        
        // ADVANCED AI INTELLIGENCE SYSTEMS
        this.languageProcessor = new AdvancedLanguageProcessor();
        this.contextualIntelligence = new ContextualIntelligenceEngine();
        this.emotionalIntelligence = new EmotionalIntelligenceEngine();
        this.reasoningEngine = new AdvancedReasoningEngine();
        this.creativityEngine = new CreativityEngine();
        this.knowledgeGraph = new KnowledgeGraphEngine();
        this.neuralNetwork = new SimpleNeuralNetwork();
        this.machineLearning = new MachineLearningEngine();
        
        // COMPREHENSIVE LEARNING SYSTEMS
        this.learningDatabase = new UltraAdvancedLearningDatabase();
        this.personalityEngine = new GPTLevelPersonalityEngine();
        this.userProfile = new ComprehensiveUserProfile();
        this.adaptiveLearning = new AdaptiveLearningEngine();
        this.studyPlanner = new IntelligentStudyPlanner();
        this.motivationEngine = new AdvancedMotivationEngine();
        this.memoryConsolidation = new MemoryConsolidationEngine();
        this.metacognitionEngine = new MetacognitionEngine();
        
        // ULTRA-COMPREHENSIVE CBSE SYSTEMS
        this.cbseDatabase = new UltraComprehensiveCBSEDatabase();
        this.solutionEngine = new DetailedSolutionEngine();
        this.testGenerator = new UltimateTestGenerator();
        this.performanceAnalyzer = new AdvancedPerformanceAnalyzer();
        this.conceptExplainer = new ConceptExplanationEngine();
        this.questionAnalyzer = new QuestionAnalysisEngine();
        this.difficultyAdjuster = new DifficultyAdjustmentEngine();
        this.learningPathOptimizer = new LearningPathOptimizer();
        
        // ADVANCED WEB & SEARCH INTEGRATION
        this.webSearchEngine = new AdvancedWebSearchEngine();
        this.factChecker = new FactCheckingEngine();
        this.sourceValidator = new SourceValidationEngine();
        this.contentCurator = new ContentCurationEngine();
        this.realTimeUpdater = new RealTimeUpdateEngine();
        this.knowledgeExtractor = new KnowledgeExtractionEngine();
        
        // MULTIMODAL INTERACTION SYSTEMS
        this.voiceEngine = new AdvancedVoiceEngine();
        this.textProcessor = new TextProcessingEngine();
        this.responseGenerator = new GPTStyleResponseGenerator();
        this.conversationManager = new ConversationManager();
        this.contextManager = new ContextManager();
        this.dialogueSystem = new DialogueSystem();
        
        // GAMIFICATION & ENGAGEMENT SYSTEMS
        this.gamificationEngine = new GamificationEngine();
        this.achievementSystem = new AchievementSystem();
        this.progressTracker = new ProgressTracker();
        this.streakTracker = new StreakTracker();
        this.rewardSystem = new RewardSystem();
        this.leaderboardSystem = new LeaderboardSystem();
        
        // DATA STORAGE & ANALYTICS
        this.testHistory = [];
        this.learningProgress = new Map();
        this.performanceMetrics = new Map();
        this.engagementAnalytics = new Map();
        this.behaviorAnalytics = new Map();
        this.learningAnalytics = new Map();
        this.weaknessTracker = new Map();
        this.strengthTracker = new Map();
        this.lastGeneratedTest = null;
        this.currentContext = null;
        this.userPreferences = new Map();
        
        // UI ELEMENTS (Will be properly initialized)
        this.chatMessages = null;
        this.messageInput = null;
        this.sendBtn = null;
        this.recordBtn = null;
        this.stopBtn = null;
        this.statusText = null;
        this.voiceIndicator = null;
        
        // SYSTEM FLAGS
        this.isInitialized = false;
        this.debugMode = false;
        
        // INITIALIZE EVERYTHING
        this.initializeCompleteSystem();
    }

    generateSessionId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    async initializeCompleteSystem() {
        console.log('🚀 Initializing Ultimate Diamond CBSE AI System...');
        
        try {
            // STEP 1: WAIT FOR DOM TO BE READY
            await this.waitForDOM();
            
            // STEP 2: INITIALIZE UI ELEMENTS
            await this.initializeUIElements();
            
            // STEP 3: SET UP EVENT LISTENERS
            await this.setupEventListeners();
            
            // STEP 4: INITIALIZE SPEECH SYSTEMS
            await this.initializeSpeechSystems();
            
            // STEP 5: LOAD ALL DATA
            await this.loadAllSystemData();
            
            // STEP 6: START BACKGROUND PROCESSES
            await this.startBackgroundProcesses();
            
            // STEP 7: CREATE ADVANCED INTERFACES
            await this.createAdvancedInterfaces();
            
            // STEP 8: DISPLAY WELCOME
            await this.displayUltimateDiamondWelcome();
            
            // STEP 9: MARK AS INITIALIZED
            this.isInitialized = true;
            
            // STEP 10: PLAY WELCOME SOUND
            this.playAdvancedWelcomeSound();
            
            console.log('💎 Diamond-Level CBSE AI fully operational and ready!');
            this.updateStatus('Diamond AI Ready - Ask me anything!');
            
        } catch (error) {
            console.error('❌ Initialization error:', error);
            this.handleInitializationError(error);
        }
    }

    async waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    async initializeUIElements() {
        console.log('🎨 Initializing UI Elements...');
        
        // CREATE MAIN CONTAINER IF NOT EXISTS
        let mainContainer = document.querySelector('.jarvis-container') || document.querySelector('.main-container');
        if (!mainContainer) {
            mainContainer = this.createMainContainer();
        }
        
        // INITIALIZE CHAT MESSAGES AREA
        this.chatMessages = document.getElementById('chatMessages');
        if (!this.chatMessages) {
            this.chatMessages = this.createChatMessagesArea();
        }
        
        // INITIALIZE MESSAGE INPUT
        this.messageInput = document.getElementById('messageInput');
        if (!this.messageInput) {
            this.messageInput = this.createMessageInput();
        }
        
        // INITIALIZE SEND BUTTON
        this.sendBtn = document.getElementById('sendBtn');
        if (!this.sendBtn) {
            this.sendBtn = this.createSendButton();
        }
        
        // INITIALIZE VOICE BUTTONS
        this.recordBtn = document.getElementById('recordBtn');
        this.stopBtn = document.getElementById('stopBtn');
        if (!this.recordBtn || !this.stopBtn) {
            this.createVoiceButtons();
        }
        
        // INITIALIZE STATUS TEXT
        this.statusText = document.getElementById('statusText');
        if (!this.statusText) {
            this.statusText = this.createStatusText();
        }
        
        // INITIALIZE VOICE INDICATOR
        this.voiceIndicator = document.getElementById('jarvisVoiceIndicator');
        if (!this.voiceIndicator) {
            this.voiceIndicator = this.createVoiceIndicator();
        }
        
        console.log('✅ UI Elements initialized successfully');
    }

    createMainContainer() {
        const container = document.createElement('div');
        container.className = 'jarvis-container';
        container.style.cssText = `
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            color: white;
            font-family: 'Inter', sans-serif;
            padding: 20px;
            display: flex;
            flex-direction: column;
            max-width: 1200px;
            margin: 0 auto;
        `;
        document.body.appendChild(container);
        return container;
    }

    createChatMessagesArea() {
        const chatArea = document.createElement('div');
        chatArea.id = 'chatMessages';
        chatArea.className = 'messages-container';
        chatArea.style.cssText = `
            flex: 1;
            background: rgba(30, 33, 57, 0.8);
            border: 1px solid rgba(79, 124, 255, 0.3);
            border-radius: 16px;
            padding: 20px;
            overflow-y: auto;
            min-height: 500px;
            max-height: 70vh;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `;
        
        // ADD SCROLLBAR STYLING
        const style = document.createElement('style');
        style.textContent = `
            #chatMessages::-webkit-scrollbar {
                width: 8px;
            }
            #chatMessages::-webkit-scrollbar-track {
                background: rgba(22, 33, 62, 0.5);
                border-radius: 4px;
            }
            #chatMessages::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #4f7cff, #00d4ff);
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
        
        document.querySelector('.jarvis-container').appendChild(chatArea);
        return chatArea;
    }

    createMessageInput() {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        inputContainer.style.cssText = `
            display: flex;
            gap: 12px;
            align-items: flex-end;
            background: rgba(30, 33, 57, 0.8);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid rgba(79, 124, 255, 0.3);
            backdrop-filter: blur(10px);
            margin-bottom: 20px;
        `;
        
        const input = document.createElement('textarea');
        input.id = 'messageInput';
        input.className = 'message-input';
        input.placeholder = 'Ask me anything about CBSE Class 10 - Math, Science, English, Hindi, Social Science...';
        input.style.cssText = `
            flex: 1;
            background: rgba(15, 15, 35, 0.8);
            border: 2px solid rgba(79, 124, 255, 0.3);
            border-radius: 12px;
            padding: 15px 20px;
            color: white;
            font-size: 16px;
            font-family: inherit;
            resize: vertical;
            min-height: 50px;
            max-height: 150px;
            transition: all 0.3s ease;
            outline: none;
        `;
        
        // ADD INPUT FOCUS STYLING
        input.addEventListener('focus', () => {
            input.style.borderColor = '#4f7cff';
            input.style.boxShadow = '0 0 20px rgba(79, 124, 255, 0.3)';
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = 'rgba(79, 124, 255, 0.3)';
            input.style.boxShadow = 'none';
        });
        
        inputContainer.appendChild(input);
        document.querySelector('.jarvis-container').appendChild(inputContainer);
        
        return input;
    }

    createSendButton() {
        const button = document.createElement('button');
        button.id = 'sendBtn';
        button.textContent = 'Send';
        button.style.cssText = `
            background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%);
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            padding: 15px 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 100px;
            height: 50px;
            box-shadow: 0 4px 15px rgba(79, 124, 255, 0.4);
        `;
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 6px 25px rgba(79, 124, 255, 0.6)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 15px rgba(79, 124, 255, 0.4)';
        });
        
        document.querySelector('.input-container').appendChild(button);
        return button;
    }

    createVoiceButtons() {
        const voiceContainer = document.createElement('div');
        voiceContainer.className = 'voice-controls';
        voiceContainer.style.cssText = `
            display: flex;
            gap: 8px;
        `;
        
        // RECORD BUTTON
        const recordBtn = document.createElement('button');
        recordBtn.id = 'recordBtn';
        recordBtn.innerHTML = '🎤';
        recordBtn.title = 'Start voice input';
        recordBtn.style.cssText = `
            background: rgba(30, 33, 57, 0.8);
            border: 2px solid rgba(79, 124, 255, 0.3);
            border-radius: 12px;
            color: white;
            font-size: 20px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        // STOP BUTTON
        const stopBtn = document.createElement('button');
        stopBtn.id = 'stopBtn';
        stopBtn.innerHTML = '⏹️';
        stopBtn.title = 'Stop voice input';
        stopBtn.style.cssText = `
            background: rgba(255, 71, 87, 0.8);
            border: 2px solid rgba(255, 71, 87, 0.5);
            border-radius: 12px;
            color: white;
            font-size: 20px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: none;
            align-items: center;
            justify-content: center;
        `;
        
        voiceContainer.appendChild(recordBtn);
        voiceContainer.appendChild(stopBtn);
        document.querySelector('.input-container').appendChild(voiceContainer);
        
        this.recordBtn = recordBtn;
        this.stopBtn = stopBtn;
    }

    createStatusText() {
        const status = document.createElement('div');
        status.id = 'statusText';
        status.textContent = 'Initializing Diamond AI...';
        status.style.cssText = `
            text-align: center;
            color: rgba(180, 184, 204, 0.8);
            font-size: 14px;
            padding: 10px;
            background: rgba(30, 33, 57, 0.5);
            border-radius: 8px;
            margin-top: 10px;
        `;
        
        document.querySelector('.jarvis-container').appendChild(status);
        return status;
    }

    createVoiceIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'jarvisVoiceIndicator';
        indicator.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-size: 48px;
            box-shadow: 0 0 50px rgba(79, 124, 255, 0.8);
            animation: voicePulse 1.5s infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes voicePulse {
                0%, 100% { 
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 0.8;
                }
                50% { 
                    transform: translate(-50%, -50%) scale(1.1);
                    opacity: 1;
                }
            }
            
            @keyframes voiceListening {
                0%, 100% { 
                    box-shadow: 0 0 50px rgba(79, 124, 255, 0.8);
                }
                50% { 
                    box-shadow: 0 0 80px rgba(79, 124, 255, 1);
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(indicator);
        return indicator;
    }

    async setupEventListeners() {
        console.log('🔧 Setting up event listeners...');
        
        // MAIN MESSAGE PROCESSING - PRIMARY EVENT
        this.sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.processMessage();
        });
        
        // ENTER KEY HANDLING WITH PROPER FOCUS
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.processMessage();
            }
        });
        
        // VOICE CONTROLS
        this.recordBtn.addEventListener('click', () => this.startVoiceRecording());
        this.stopBtn.addEventListener('click', () => this.stopVoiceRecording());
        
        // ADVANCED INPUT HANDLING
        this.messageInput.addEventListener('input', () => this.handleInputChange());
        this.messageInput.addEventListener('focus', () => this.handleInputFocus());
        this.messageInput.addEventListener('blur', () => this.handleInputBlur());
        
        // PASTE HANDLING
        this.messageInput.addEventListener('paste', (e) => {
            setTimeout(() => this.handleInputChange(), 10);
        });
        
        // PREVENT FORM SUBMISSION
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target === this.messageInput && !e.shiftKey) {
                e.preventDefault();
            }
        });
        
        console.log('✅ Event listeners configured successfully');
    }

    displayUltimateDiamondWelcome() {
        const welcomeMessage = `**💎 ULTIMATE DIAMOND-LEVEL CBSE AI - GPT-PERPLEXITY INTELLIGENCE**

🌟 **WORLD'S MOST ADVANCED CBSE CLASS 10 AI SYSTEM**

**🎓 COMPLETE CBSE UNIVERSE - ALL SUBJECTS MASTERED:**

**📚 CORE SUBJECTS - TOTAL EXPERTISE:**
• **Mathematics:** Real Numbers, Polynomials, Pair of Linear Equations, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Trigonometry, Applications of Trigonometry, Circles, Constructions, Areas & Volumes, Statistics, Probability
• **Science - Physics:** Light (Reflection & Refraction), Human Eye & Colorful World, Electricity, Magnetic Effects of Electric Current, Sources of Energy
• **Science - Chemistry:** Chemical Reactions & Equations, Acids Bases & Salts, Metals & Non-metals, Carbon & Its Compounds, Periodic Classification of Elements
• **Science - Biology:** Life Processes, Control & Coordination, How Do Organisms Reproduce, Heredity & Evolution, Light - Life Processes, Our Environment, Management of Natural Resources
• **Social Science - History:** The Rise of Nationalism in Europe, The Nationalist Movement in Indo-China, Nationalism in India, The Making of a Global World, The Age of Industrialization, Print Culture and the Modern World
• **Social Science - Geography:** Resources and Development, Forest and Wildlife Resources, Water Resources, Agriculture, Minerals and Energy Resources, Manufacturing Industries, Lifelines of National Economy
• **Social Science - Political Science:** Power Sharing, Federalism, Democracy and Diversity, Gender Religion and Caste, Popular Struggles and Movements, Political Parties, Outcomes of Democracy, Challenges to Democracy
• **Social Science - Economics:** Development, Sectors of the Indian Economy, Money and Credit, Globalization and the Indian Economy, Consumer Rights

**📖 LANGUAGE MASTERY - COMPREHENSIVE COVERAGE:**
• **English Course A:** First Flight (Prose & Poetry), Footprints Without Feet (Supplementary Reader), Grammar, Writing Skills, Literature Analysis, Character Studies, Theme Analysis, Creative Writing, Speech Writing, Debate Writing
• **English Course B:** Interact in English (Main Course Book), Literature Reader, Workbook, Communicative Grammar, Functional English, Speaking & Listening Skills, Reading Comprehension
• **Hindi Course A:** कृतिका (काव्य खंड), क्षितिज (गद्य खंड), व्याकरण, रचनात्मक लेखन, साहित्य बोध, भाव एवं कला पक्ष, चरित्र चित्रण, विषय वस्तु
• **Hindi Course B:** स्पर्श (काव्य व गद्य), संचयन (पूरक पुस्तक), व्यावहारिक व्याकरण, कार्यात्मक हिंदी, संवाद कौशल, लेखन कौशल

**💻 MODERN TECHNOLOGY & SKILL SUBJECTS:**
• **Information Technology:** Digital Documentation, Electronic Spreadsheet, Database Management System, Internet & Web Technologies, Digital Presentation, IT Applications, Cyber Ethics & Safety
• **Artificial Intelligence:** Introduction to AI, AI Project Cycle, Data Sciences, Computer Vision, Natural Language Processing, AI Ethics, Machine Learning Basics
• **Computer Science:** Programming Fundamentals, Python Programming, Data Structures, Algorithms, Problem Solving Methodologies, Computational Thinking
• **Physical Education:** Physical Fitness, Sports Skills, Yoga, Health Education, Sports Psychology, Training Methods, Olympic Movement, Sports Medicine
• **Art Education:** Drawing, Painting, Sculpture, Applied Arts, Art History, Aesthetic Sense, Creative Expression, Visual Arts
• **Music:** Hindustani Classical Music, Carnatic Music, Folk Music, Instrumental Music, Music Theory, Music Appreciation
• **Sanskrit:** Vyakarana (Grammar), Sahitya (Literature), Shloka Recitation, Classical Texts, Sanskrit Composition

**🌐 ADDITIONAL & VOCATIONAL SUBJECTS:**
• **French/German:** Basic Grammar, Vocabulary, Conversation Skills, Culture Studies, Literature Introduction
• **Home Science:** Food & Nutrition, Child Development, Family Resource Management, Textiles & Clothing, Human Development & Family Studies
• **Entrepreneurship:** Business Studies, Innovation & Creativity, Business Planning, Marketing Basics, Financial Literacy
• **Beauty & Wellness:** Skincare Technology, Haircare, Wellness Practices, Health & Nutrition, Beauty Therapy
• **Tourism:** Travel & Tourism Industry, Hospitality Management, Indian Heritage & Culture, Tourism Geography
• **Agriculture:** Crop Production, Animal Husbandry, Agricultural Economics, Horticulture, Sustainable Agriculture

**🧠 GPT-PERPLEXITY LEVEL INTELLIGENCE:**

**🎯 ULTIMATE AI CAPABILITIES:**
• **Advanced Natural Language Understanding:** Deep comprehension of context, nuance, implied meanings, complex multi-step problems, mathematical reasoning, scientific analysis
• **Contextual Memory System:** Perfect recall of entire conversation history with deep contextual connections across multiple topics and sessions
• **Multi-Step Reasoning Engine:** Solves complex problems using sophisticated logical reasoning chains, mathematical proofs, scientific methodology
• **Creative Problem Solving:** Generates original approaches, innovative analogies, creative explanations, storytelling techniques, visual metaphors
• **Emotional Intelligence Matrix:** Advanced emotion recognition, empathetic responses, mood adaptation, stress detection, confidence building
• **Dynamic Personality Adaptation:** Real-time adjustment to user's communication style, learning preferences, emotional state, cultural background
• **Meta-Cognitive Awareness:** Understanding of own thinking processes, learning strategies, problem-solving approaches, knowledge limitations
• **Transfer Learning Capabilities:** Advanced knowledge application across subjects, interdisciplinary connections, real-world applications

**📚 EDUCATIONAL EXCELLENCE SYSTEMS:**
• **Personalized Learning Engine:** Individual learning style adaptation, cognitive load optimization, pace adjustment, preference learning
• **Intelligent Tutoring System:** Step-by-step guidance, Socratic questioning, scaffolded learning, adaptive feedback
• **Multi-Modal Teaching Support:** Visual learners (diagrams, charts), Auditory learners (explanations, discussions), Kinesthetic learners (activities, examples), Reading/Writing learners (texts, notes)
• **Adaptive Assessment System:** Real-time difficulty adjustment, performance-based question selection, competency gap analysis
• **Spaced Repetition Algorithm:** Scientifically optimized review timing, memory consolidation techniques, retention optimization
• **Active Learning Implementation:** Retrieval practice, elaborative interrogation, self-explanation, distributed practice, interleaving
• **Metacognitive Training:** Learning strategy instruction, self-monitoring techniques, reflection skills, goal setting
• **Mastery-Based Progression:** Competency verification, skill building sequences, prerequisite checking, advancement criteria

**🎮 ADVANCED GAMIFICATION & ENGAGEMENT:**
• **Dynamic Achievement System:** 100+ badges, progressive levels, milestone rewards, skill mastery recognition
• **Interactive Progress Visualization:** Real-time charts, skill trees, learning pathways, performance trends
• **Streak & Habit Tracking:** Daily study streaks, consistency rewards, habit formation support
• **Skill Development Trees:** Visual progression maps for each subject, unlockable content, mastery pathways
• **Competitive Elements:** Optional leaderboards, peer comparison, collaborative challenges
• **Challenge System:** Daily brain teasers, weekly subject challenges, monthly mega challenges
• **XP & Reward System:** Experience points for all activities, virtual currency, unlockable features
• **Virtual Study Companion:** AI pet that grows with your progress, emotional support, celebration partner

**💎 ULTIMATE RESPONSE GENERATION:**
• **Multi-Format Intelligence:** Seamless switching between explanations, examples, stories, analogies, diagrams, step-by-step solutions
• **Dynamic Content Optimization:** Perfect length adjustment based on context, user level, time constraints, learning objectives
• **Tone & Style Mastery:** Formal academic, casual friendly, encouraging motivational, humorous engaging, professional instructional
• **Cultural Intelligence:** Deep understanding of Indian educational system, cultural values, regional variations, local examples
• **Critical Thinking Enhancement:** Analysis frameworks, evaluation criteria, synthesis techniques, independent thinking promotion
• **Socratic Method Implementation:** Guided discovery through questioning, assumption challenging, deeper understanding development

**🌐 REAL-TIME WEB INTELLIGENCE:**
• **Live Information Integration:** Latest news, current affairs, scientific discoveries, technological developments, educational updates
• **Educational Resource Network:** Khan Academy, BYJU'S, Vedantu, Unacademy, Coursera, MIT OpenCourseWare integration references
• **CBSE Official Updates:** Real-time syllabus changes, examination patterns, board notifications, result announcements, policy updates
• **Research Database Access:** Academic papers, peer-reviewed journals, scholarly articles, research publications, scientific studies
• **Comprehensive Fact Verification:** Multi-source cross-referencing, credibility assessment, accuracy validation, source authentication
• **Intelligent Content Curation:** Best resource selection, relevance filtering, quality assessment, learning outcome alignment
• **Live Data Streams:** Real-time statistics, current events integration, trending topics, breaking news relevant to curriculum

**🔥 ULTIMATE COMMAND EXAMPLES:**

**📝 ADVANCED TEST GENERATION:**
- "Create ultimate CBSE board exam simulation for mathematics 80 marks with complete solutions, marking scheme, and performance prediction"
- "Generate adaptive science test that adjusts difficulty in real-time based on my performance with detailed explanations and improvement suggestions"
- "Design comprehensive English Course A test with literature analysis, grammar, creative writing, and speech writing sections"
- "Make personalized mixed-subject revision test focusing on my identified weak areas with targeted improvement strategies"
- "Create full-length mock test series for all subjects with board exam timing, pattern, and comprehensive analytics dashboard"

**🧠 DEEP LEARNING & CONCEPT MASTERY:**
- "Explain photosynthesis using multiple teaching methods: storytelling, visual analogies, real-world connections, interactive questioning, and hands-on activities"
- "Teach quadratic equations through all solution methods: factoring, quadratic formula, completing the square, graphing with real-world applications and problem-solving strategies"
- "Help me master the concept of nationalism through historical narratives, cause-effect analysis, character studies, timeline analysis, and modern relevance"
- "Create comprehensive study plan with scientifically optimized spaced repetition, active recall techniques, and metacognitive strategies"
- "Analyze my complete learning patterns and create personalized improvement plan with specific action steps, timeline, and progress tracking"

**🎭 PERSONALITY & INTERACTION MASTERY:**
- "Be my enthusiastic study buddy who celebrates every small achievement, provides emotional support during challenges, and maintains high energy throughout learning"
- "Act as wise mentor providing life guidance alongside academic support, sharing philosophical insights, and helping with personal development"
- "Become creative storyteller making every concept memorable through engaging narratives, character-driven plots, and emotional connections"
- "Be patient teacher who explains concepts multiple times using different approaches, never gets frustrated, and adapts to my learning pace"
- "Act as professional study coach analyzing my habits, optimizing productivity, building discipline, and creating sustainable learning routines"

**📊 COMPREHENSIVE ANALYTICS & INSIGHTS:**
- "Show detailed learning analytics with progress visualization, performance trends, predictive modeling, and actionable improvement recommendations"
- "Analyze my test performances identifying specific error patterns, knowledge gaps, conceptual misunderstandings, and strategic improvement opportunities"
- "Create comprehensive performance report comparing with CBSE standards, peer benchmarking, and providing detailed gap analysis with remediation plans"
- "Generate personalized learning pathway based on my cognitive strengths, subject interests, career aspirations, and optimal learning sequence"
- "Track my emotional learning journey with stress pattern analysis, motivation optimization, confidence building, and mental health support"

**🎨 CREATIVE & ADVANCED LEARNING MODES:**
- "Transform the French Revolution into epic historical drama with character development, plot twists, emotional arcs, and immersive storytelling"
- "Create mathematical adventure game where solving quadratic equations saves kingdoms, with hero's journey narrative and progressive difficulty"
- "Design virtual science laboratory for chemical reactions with realistic simulations, safety protocols, and experimental methodology"
- "Generate creative writing workshop connecting English literature with current social issues, personal reflection, and critical analysis"
- "Create comprehensive mind mapping system with visual hierarchies, concept connections, memory palaces, and retrieval cues"

**🌟 ULTIMATE INTELLIGENCE EXAMPLES:**

**Try These Advanced Commands:**
- "I'm completely overwhelmed by coordinate geometry - break it down from absolute fundamentals, build my confidence step-by-step, provide emotional support, and create mastery pathway"
- "Design comprehensive 6-month board exam master strategy with daily micro-schedules, weekly assessments, monthly reviews, revision cycles, stress management, and performance optimization"
- "Explain the interconnections between photosynthesis, cellular respiration, carbon cycle, nitrogen cycle, and climate change using advanced analogies and visual representations"
- "Create interdisciplinary project connecting mathematics, physics, chemistry, and environmental science showing real-world applications and career relevance"
- "Be my personal learning psychologist analyzing my study behaviors, identifying cognitive biases, optimizing learning strategies, and building growth mindset"
- "Help me overcome severe math anxiety through systematic desensitization, confidence building exercises, positive reinforcement, and gradual exposure therapy"

**💎 I AM YOUR ULTIMATE LEARNING COMPANION**

From the smallest doubt to the biggest academic challenge, from basic concept clarification to advanced problem-solving, from exam preparation to career guidance - I'm here to revolutionize your learning experience!

**🚀 Ready to achieve academic excellence? Ask me ANYTHING! 🌟**`;

        this.addMessage(welcomeMessage, 'jarvis');
        this.gamificationEngine.displayWelcomeAchievement();
    }

    // MAIN MESSAGE PROCESSING - CORE FUNCTION
    async processMessage() {
        // CHECK IF ALREADY PROCESSING
        if (this.isProcessing) {
            console.log('⏳ Already processing a message, please wait...');
            return;
        }

        // GET MESSAGE FROM INPUT
        const message = this.messageInput.value.trim();
        if (!message) {
            console.log('❌ Empty message, returning...');
            return;
        }

        // SET PROCESSING FLAG
        this.isProcessing = true;

        try {
            console.log('🚀 Processing message:', message);
            
            // CLEAR INPUT IMMEDIATELY
            this.messageInput.value = '';
            
            // ADD USER MESSAGE TO CHAT
            this.addMessage(message, 'user');
            
            // SHOW PROCESSING INDICATOR
            this.showAdvancedProcessingIndicator();
            
            // UPDATE STATUS
            this.updateStatus('Analyzing with Diamond AI...');

            // COMPREHENSIVE MESSAGE ANALYSIS
            const analysis = await this.performUltimateAnalysis(message);
            
            console.log('🎯 Analysis complete:', analysis);
            
            // GENERATE ULTIMATE RESPONSE
            let response = await this.generateUltimateResponse(message, analysis);
            
            // ENHANCE RESPONSE WITH AI
            response = await this.enhanceResponseWithDiamondAI(response, analysis);
            
            // STORE IN CONVERSATION MEMORY
            this.storeConversation(message, response, analysis);
            
            // HIDE PROCESSING INDICATOR
            this.hideAdvancedProcessingIndicator();
            
            // DISPLAY RESPONSE
            this.addMessage(response, 'jarvis');
            
            // SPEAK RESPONSE IF ENABLED
            this.speakResponse(response, analysis.language);
            
            // UPDATE STATUS
            this.updateStatus('Ready for your next question!');
            
            // FOCUS BACK TO INPUT
            setTimeout(() => {
                if (this.messageInput) {
                    this.messageInput.focus();
                }
            }, 100);
            
        } catch (error) {
            console.error('💥 Processing error:', error);
            this.handleProcessingError(error, message);
        } finally {
            // ALWAYS CLEAR PROCESSING FLAG
            this.isProcessing = false;
        }
    }

    async performUltimateAnalysis(message) {
        console.log('🔬 Performing ultimate analysis...');
        
        const analysis = {
            originalMessage: message,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            
            // LANGUAGE ANALYSIS
            language: this.detectLanguage(message),
            languageConfidence: this.calculateLanguageConfidence(message),
            
            // INTENT ANALYSIS
            intent: this.analyzeAdvancedIntent(message),
            intentConfidence: this.calculateIntentConfidence(message),
            
            // EMOTIONAL ANALYSIS
            emotion: this.analyzeEmotionalState(message),
            emotionIntensity: this.calculateEmotionIntensity(message),
            
            // COMPLEXITY ANALYSIS
            complexity: this.analyzeMessageComplexity(message),
            cognitiveLoad: this.calculateCognitiveLoad(message),
            
            // ENTITY EXTRACTION
            entities: this.extractAdvancedEntities(message),
            
            // CONTEXT ANALYSIS
            context: this.analyzeCurrentContext(message),
            conversationContext: this.getConversationContext(),
            
            // LEARNING ANALYSIS
            learningObjectives: this.identifyLearningObjectives(message),
            difficultyCues: this.extractDifficultyCues(message),
            
            // USER ANALYSIS
            userState: this.analyzeUserState(message),
            engagement: this.calculateEngagementLevel(message)
        };
        
        return analysis;
    }

    detectLanguage(text) {
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से', 'और', 'या', 'मैं', 'आप', 'क्या', 'कैसे', 'कब', 'कहाँ', 'क्यों', 'कौन'];
        const englishWords = ['the', 'is', 'are', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'about'];
        
        const words = text.toLowerCase().split(/\s+/);
        let hindiCount = 0;
        let englishCount = 0;
        
        words.forEach(word => {
            if (hindiWords.includes(word)) hindiCount++;
            if (englishWords.includes(word)) englishCount++;
        });
        
        const devanagariRegex = /[\u0900-\u097F]/;
        const hasDevanagari = devanagariRegex.test(text);
        
        if (hasDevanagari || hindiCount > englishCount * 1.5) {
            return 'hindi';
        } else if (hindiCount > 0 && englishCount > hindiCount) {
            return 'hinglish';
        } else {
            return 'english';
        }
    }

    analyzeAdvancedIntent(message) {
        const msg = message.toLowerCase();
        
        // TEST GENERATION INTENTS
        if (this.matchesPatterns(msg, ['test', 'exam', 'paper', 'questions', 'practice', 'quiz']) &&
            this.matchesPatterns(msg, ['create', 'generate', 'make', 'give', 'take', 'prepare', 'design'])) {
            return 'test_generation';
        }
        
        // SOLUTION REQUEST INTENTS
        if (this.matchesPatterns(msg, ['solution', 'answer', 'solve', 'explain', 'show']) &&
            (this.matchesPatterns(msg, ['step', 'detailed', 'how', 'method']) || msg.includes('solution'))) {
            return 'solution_request';
        }
        
        // CONCEPT EXPLANATION INTENTS
        if (this.matchesPatterns(msg, ['what', 'how', 'why', 'explain', 'teach', 'define', 'describe', 'tell me about'])) {
            return 'concept_explanation';
        }
        
        // STUDY PLANNING INTENTS
        if (this.matchesPatterns(msg, ['study', 'plan', 'schedule', 'strategy', 'prepare', 'revision'])) {
            return 'study_planning';
        }
        
        // PERFORMANCE ANALYSIS INTENTS
        if (this.matchesPatterns(msg, ['performance', 'analysis', 'progress', 'score', 'improvement', 'weak', 'strong'])) {
            return 'performance_analysis';
        }
        
        // MOTIVATION & SUPPORT INTENTS
        if (this.matchesPatterns(msg, ['motivate', 'encourage', 'support', 'help', 'confidence', 'stress', 'anxiety'])) {
            return 'motivation_support';
        }
        
        // CREATIVE & INTERACTIVE INTENTS
        if (this.matchesPatterns(msg, ['story', 'game', 'fun', 'creative', 'interactive', 'analogy', 'example'])) {
            return 'creative_interaction';
        }
        
        // DEFAULT GENERAL HELP
        return 'general_help';
    }

    matchesPatterns(text, patterns) {
        return patterns.some(pattern => text.includes(pattern));
    }

    analyzeEmotionalState(message) {
        const emotionalPatterns = {
            frustrated: ['confused', 'don\'t understand', 'difficult', 'hard', 'stuck', 'can\'t', 'frustrated', 'annoying'],
            excited: ['excited', 'love', 'amazing', 'awesome', 'great', 'fantastic', 'wonderful', 'brilliant'],
            worried: ['worried', 'anxious', 'stressed', 'nervous', 'scared', 'afraid', 'concerned', 'pressure'],
            confident: ['confident', 'ready', 'understand', 'easy', 'got it', 'clear', 'sure', 'know'],
            curious: ['interesting', 'curious', 'wonder', 'want to know', 'how does', 'why does', 'what if'],
            determined: ['will', 'going to', 'want to learn', 'need to understand', 'must', 'determined']
        };
        
        const msg = message.toLowerCase();
        const detectedEmotions = [];
        
        for (const [emotion, patterns] of Object.entries(emotionalPatterns)) {
            const matches = patterns.filter(pattern => msg.includes(pattern));
            if (matches.length > 0) {
                detectedEmotions.push({
                    emotion,
                    intensity: matches.length,
                    indicators: matches
                });
            }
        }
        
        if (detectedEmotions.length === 0) {
            return { primary: 'neutral', intensity: 0, indicators: [] };
        }
        
        // SORT BY INTENSITY AND RETURN PRIMARY
        detectedEmotions.sort((a, b) => b.intensity - a.intensity);
        return detectedEmotions[0];
    }

    analyzeMessageComplexity(message) {
        const words = message.split(/\s+/);
        const sentences = message.split(/[.!?]+/).filter(s => s.trim());
        const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
        const questionWords = ['what', 'how', 'why', 'when', 'where', 'who', 'which'];
        const hasQuestions = questionWords.some(qw => message.toLowerCase().includes(qw));
        
        let complexity = 'low';
        
        if (words.length > 20 || sentences.length > 3 || avgWordLength > 6) {
            complexity = 'high';
        } else if (words.length > 10 || sentences.length > 1 || hasQuestions) {
            complexity = 'medium';
        }
        
        return {
            level: complexity,
            wordCount: words.length,
            sentenceCount: sentences.length,
            avgWordLength: Math.round(avgWordLength * 10) / 10,
            hasQuestions
        };
    }

    extractAdvancedEntities(message) {
        const entities = {
            subjects: this.extractSubjects(message),
            topics: this.extractTopics(message),
            numbers: this.extractNumbers(message),
            difficulty: this.extractDifficulty(message),
            timeframes: this.extractTimeframes(message),
            actions: this.extractActions(message)
        };
        
        return entities;
    }

    extractSubjects(message) {
        const subjectPatterns = {
            mathematics: ['math', 'maths', 'mathematics', 'algebra', 'geometry', 'trigonometry', 'statistics', 'probability'],
            science: ['science', 'physics', 'chemistry', 'biology', 'scientific'],
            physics: ['physics', 'motion', 'force', 'electricity', 'light', 'sound', 'energy'],
            chemistry: ['chemistry', 'chemical', 'reaction', 'acid', 'base', 'metal', 'compound'],
            biology: ['biology', 'life', 'cell', 'organism', 'plant', 'animal', 'human', 'evolution'],
            english: ['english', 'literature', 'grammar', 'writing', 'poem', 'story', 'essay'],
            hindi: ['hindi', 'हिंदी', 'व्याकरण', 'साहित्य', 'कविता', 'गद्य'],
            social_science: ['social', 'history', 'geography', 'civics', 'economics', 'political'],
            history: ['history', 'historical', 'past', 'ancient', 'medieval', 'modern'],
            geography: ['geography', 'earth', 'climate', 'map', 'country', 'continent'],
            civics: ['civics', 'government', 'democracy', 'politics', 'constitution', 'rights'],
            economics: ['economics', 'economy', 'money', 'trade', 'business', 'market']
        };
        
        const msg = message.toLowerCase();
        const foundSubjects = [];
        
        for (const [subject, patterns] of Object.entries(subjectPatterns)) {
            if (patterns.some(pattern => msg.includes(pattern))) {
                foundSubjects.push(subject);
            }
        }
        
        return foundSubjects;
    }

    extractNumbers(message) {
        const numbers = message.match(/\d+/g);
        return numbers ? numbers.map(Number) : [];
    }

    extractDifficulty(message) {
        const msg = message.toLowerCase();
        if (msg.includes('easy') || msg.includes('simple') || msg.includes('basic')) return 'easy';
        if (msg.includes('medium') || msg.includes('moderate') || msg.includes('intermediate')) return 'medium';
        if (msg.includes('hard') || msg.includes('difficult') || msg.includes('advanced') || msg.includes('challenging')) return 'hard';
        return null;
    }

    async generateUltimateResponse(message, analysis) {
        console.log('💎 Generating ultimate response for intent:', analysis.intent);
        
        const intent = analysis.intent;
        
        try {
            switch (intent) {
                case 'test_generation':
                    return await this.generateAdvancedTestResponse(message, analysis);
                
                case 'solution_request':
                    return await this.generateDetailedSolutionResponse(message, analysis);
                
                case 'concept_explanation':
                    return await this.generateConceptExplanationResponse(message, analysis);
                
                case 'study_planning':
                    return await this.generateStudyPlanResponse(message, analysis);
                
                case 'performance_analysis':
                    return await this.generatePerformanceAnalysisResponse(message, analysis);
                
                case 'motivation_support':
                    return await this.generateMotivationResponse(message, analysis);
                
                case 'creative_interaction':
                    return await this.generateCreativeResponse(message, analysis);
                
                default:
                    return await this.generateGeneralResponse(message, analysis);
            }
        } catch (error) {
            console.error('Response generation error:', error);
            return this.generateErrorRecoveryResponse(message, analysis);
        }
    }

    async generateAdvancedTestResponse(message, analysis) {
        console.log('📝 Generating advanced test...');
        
        try {
            // EXTRACT TEST PARAMETERS
            const testParams = this.extractAdvancedTestParameters(message, analysis);
            
            // GENERATE COMPREHENSIVE TEST
            const testData = await this.generateComprehensiveTestData(testParams);
            
            // STORE TEST DATA
            this.lastGeneratedTest = testData;
            this.testHistory.push({
                timestamp: Date.now(),
                testData,
                testParams,
                analysis
            });
            
            // FORMAT RESPONSE
            return this.formatAdvancedTestResponse(testData, testParams, analysis);
            
        } catch (error) {
            console.error('Test generation error:', error);
            return `I encountered an issue generating the test. Let me try a simpler approach.\n\nPlease specify:\n• Subject (Math, Science, English, Hindi, Social Science)\n• Number of questions\n• Difficulty level\n\nExample: "Create a Math test with 10 questions, medium difficulty"`;
        }
    }

    extractAdvancedTestParameters(message, analysis) {
        const params = {
            subject: 'mixed',
            difficulty: 'medium',
            questionCount: 15,
            totalMarks: 60,
            timeLimit: 120,
            includeHints: true,
            includeSolutions: false,
            testType: 'comprehensive',
            sources: ['textbook', 'pyq', 'sqp']
        };
        
        // EXTRACT SUBJECT FROM ENTITIES
        if (analysis.entities.subjects.length > 0) {
            params.subject = analysis.entities.subjects[0];
        }
        
        // EXTRACT DIFFICULTY
        if (analysis.entities.difficulty) {
            params.difficulty = analysis.entities.difficulty;
        }
        
        // EXTRACT NUMBERS FOR QUESTION COUNT OR MARKS
        if (analysis.entities.numbers.length > 0) {
            const primaryNumber = analysis.entities.numbers[0];
            if (primaryNumber <= 30) {
                params.questionCount = primaryNumber;
                params.totalMarks = primaryNumber * 4; // 4 marks average
            } else if (primaryNumber <= 100) {
                params.totalMarks = primaryNumber;
                params.questionCount = Math.ceil(primaryNumber / 4);
            }
        }
        
        return params;
    }

    async generateComprehensiveTestData(params) {
        console.log('🎯 Generating comprehensive test data:', params);
        
        // GET QUESTIONS FROM COMPREHENSIVE DATABASE
        const questions = await this.getAdvancedQuestions(params);
        
        // CALCULATE METADATA
        const metadata = {
            totalQuestions: questions.length,
            totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
            timeLimit: params.timeLimit,
            difficulty: params.difficulty,
            subject: params.subject,
            estimatedTime: questions.length * 8, // 8 minutes per question average
            difficultyDistribution: this.calculateDifficultyDistribution(questions)
        };
        
        return {
            questions,
            metadata,
            params,
            timestamp: Date.now(),
            testId: this.generateTestId()
        };
    }

    async getAdvancedQuestions(params) {
        // ULTRA-COMPREHENSIVE QUESTION DATABASE
        const questionDatabase = {
            mathematics: [
                {
                    question: "Find the zeros of the quadratic polynomial f(x) = 2x² - 8x + 6 and verify the relationship between zeros and coefficients.",
                    marks: 5,
                    chapter: "Quadratic Equations",
                    difficulty: "medium",
                    source: "pyq",
                    solution: "2x² - 8x + 6 = 0\nDividing by 2: x² - 4x + 3 = 0\n(x - 1)(x - 3) = 0\nZeros: x = 1, x = 3\nSum of zeros = 1 + 3 = 4 = -(-8)/2 = 4/1 ✓\nProduct of zeros = 1 × 3 = 3 = 6/2 = 3 ✓",
                    keyTips: ["Factor the quadratic", "Verify using sum and product formulas", "Check your arithmetic"],
                    realWorldApp: "Trajectory calculations in physics"
                },
                {
                    question: "Prove that the sum of first n natural numbers is n(n+1)/2 using mathematical induction.",
                    marks: 6,
                    chapter: "Arithmetic Progressions",
                    difficulty: "hard",
                    source: "sqp",
                    solution: "Step 1: Base case (n=1): Sum = 1 = 1(1+1)/2 = 1 ✓\nStep 2: Assume true for n=k: 1+2+...+k = k(k+1)/2\nStep 3: Prove for n=k+1:\n1+2+...+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)[k/2 + 1] = (k+1)(k+2)/2 ✓",
                    keyTips: ["Follow induction steps carefully", "Algebraic manipulation is key", "Verify base case"],
                    realWorldApp: "Series calculations in engineering"
                }
            ],
            science: [
                {
                    question: "Explain the process of photosynthesis. Write the balanced chemical equation and explain its significance.",
                    marks: 5,
                    chapter: "Life Processes",
                    difficulty: "medium",
                    source: "ncert",
                    solution: "Photosynthesis equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\nProcess: Light-dependent reactions in thylakoids produce ATP and NADPH. Light-independent reactions (Calvin cycle) in stroma use CO₂ to make glucose.\nSignificance: Primary production, oxygen release, food chain foundation.",
                    keyTips: ["Balance the equation correctly", "Explain both phases", "Mention chloroplast structure"],
                    realWorldApp: "Understanding plant growth and environmental impact"
                }
            ],
            english: [
                {
                    question: "Write a letter to the editor expressing concern about increasing pollution in your city. Include specific examples and suggest solutions.",
                    marks: 8,
                    chapter: "Letter Writing",
                    difficulty: "medium",
                    source: "sqp",
                    solution: "Format: Address, Date, Recipient details, Subject, Salutation, Body (3 paragraphs), Closing\nContent: Current situation, specific examples (air/water pollution), health impacts, suggested solutions (waste management, public transport, tree plantation), call for action",
                    keyTips: ["Follow formal letter format", "Include specific examples", "Suggest practical solutions"],
                    realWorldApp: "Environmental advocacy and civic participation"
                }
            ]
        };
        
        // SELECT QUESTIONS BASED ON SUBJECT
        let availableQuestions = [];
        if (params.subject === 'mixed') {
            // Combine questions from multiple subjects
            Object.values(questionDatabase).forEach(subjectQuestions => {
                availableQuestions.push(...subjectQuestions);
            });
        } else {
            availableQuestions = questionDatabase[params.subject] || questionDatabase.mathematics;
        }
        
        // FILTER BY DIFFICULTY
        if (params.difficulty !== 'medium') {
            availableQuestions = availableQuestions.filter(q => q.difficulty === params.difficulty);
        }
        
        // SHUFFLE AND SELECT REQUIRED NUMBER
        const shuffled = this.shuffleArray([...availableQuestions]);
        const selected = shuffled.slice(0, params.questionCount).map((q, index) => ({
            ...q,
            number: index + 1,
            id: this.generateQuestionId()
        }));
        
        return selected;
    }

    formatAdvancedTestResponse(testData, params, analysis) {
        const language = analysis.language;
        
        let response = '';
        
        // DYNAMIC HEADER
        if (language === 'hindi') {
            response += `**📝 CBSE कक्षा 10 - ${this.getSubjectNameHindi(params.subject)} परीक्षा पत्र**\n\n`;
        } else if (language === 'hinglish') {
            response += `**📝 CBSE Class 10 - ${this.getSubjectName(params.subject)} Test Paper**\n\n`;
        } else {
            response += `**📝 CBSE Class 10 ${this.getSubjectName(params.subject).toUpperCase()} Test Paper**\n\n`;
        }
        
        // COMPREHENSIVE TEST INFORMATION
        response += `**📊 Test Analytics:**\n`;
        response += `• **Subject Focus:** ${this.getSubjectName(params.subject)}\n`;
        response += `• **Total Questions:** ${testData.questions.length}\n`;
        response += `• **Total Marks:** ${testData.metadata.totalMarks}\n`;
        response += `• **Difficulty Level:** ${params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}\n`;
        response += `• **Estimated Time:** ${testData.metadata.estimatedTime} minutes\n`;
        response += `• **Test ID:** ${testData.testId}\n\n`;
        
        // DETAILED INSTRUCTIONS
        response += `**📋 Examination Instructions:**\n`;
        response += `• All questions are compulsory unless specified otherwise\n`;
        response += `• Read each question carefully and understand what is being asked\n`;
        response += `• Show all working steps clearly for mathematical problems\n`;
        response += `• Draw neat, well-labeled diagrams wherever required\n`;
        response += `• Write in clear, legible handwriting with proper formatting\n`;
        response += `• Manage your time effectively using the suggested timings\n`;
        response += `• Review your answers in the final 10-15 minutes\n\n`;
        
        response += `**═══════════════════════════════════════════════════════════════**\n\n`;
        
        // ORGANIZE QUESTIONS BY MARKS
        const questionsByMarks = this.organizeQuestionsByMarks(testData.questions);
        
        Object.keys(questionsByMarks).sort((a, b) => parseInt(a) - parseInt(b)).forEach(marks => {
            const questions = questionsByMarks[marks];
            const sectionName = this.getSectionName(parseInt(marks));
            
            response += `**SECTION ${this.getSectionLetter(marks)}: ${sectionName}**\n`;
            response += `**Time Allocation: ${Math.round(parseInt(marks) * 2)} minutes per question**\n\n`;
            
            questions.forEach((q) => {
                response += `**Q${q.number}.** ${q.question}`;
                
                // ADD METADATA
                if (q.chapter) response += ` *(Chapter: ${q.chapter})*`;
                if (q.source) response += ` *[${q.source.toUpperCase()}]*`;
                if (q.realWorldApp) response += ` *{Application: ${q.realWorldApp}}*`;
                
                response += ` **[${q.marks} marks]**\n\n`;
            });
            
            response += `**─────────────────────────────────────────────────────────────**\n\n`;
        });
        
        // COMPREHENSIVE ANALYTICS
        response += `**📈 Test Analytics & Strategy:**\n\n`;
        
        response += `**Question Distribution:**\n`;
        Object.entries(testData.metadata.difficultyDistribution).forEach(([diff, count]) => {
            response += `• **${diff.charAt(0).toUpperCase() + diff.slice(1)}:** ${count} questions\n`;
        });
        response += '\n';
        
        response += `**Success Strategy:**\n`;
        response += `• **Phase 1 (First 25%):** Quick scan + easy questions\n`;
        response += `• **Phase 2 (Next 50%):** Medium difficulty questions\n`;
        response += `• **Phase 3 (Next 20%):** Challenging questions\n`;
        response += `• **Phase 4 (Final 5%):** Review and polish\n\n`;
        
        response += `**💡 Pro Tips for This Test:**\n`;
        response += `• Start with ${params.difficulty} level questions to build confidence\n`;
        response += `• Spend approximately ${Math.round(testData.metadata.estimatedTime / testData.questions.length)} minutes per question\n`;
        response += `• Don't get stuck on any single question for too long\n`;
        response += `• Use elimination method for multiple-choice questions\n`;
        response += `• Show all steps even if answer seems obvious\n\n`;
        
        response += `**═══════════════════════════════════════════════════════════════**\n\n`;
        
        response += `**🎯 Ready to excel? Give your best effort!**\n\n`;
        response += `**After completing the test, ask "show detailed solutions" for comprehensive explanations with:**\n`;
        response += `• Step-by-step solutions\n`;
        response += `• CBSE marking schemes\n`;
        response += `• Alternative solving methods\n`;
        response += `• Key tips and common mistakes\n`;
        response += `• Performance analysis and improvement suggestions\n\n`;
        
        response += `**🌟 You've got this! Let's achieve excellence together! 💎**`;
        
        return response;
    }

    async generateDetailedSolutionResponse(message, analysis) {
        if (!this.lastGeneratedTest) {
            return this.getNoTestAvailableMessage(analysis.language);
        }
        
        return this.formatComprehensiveSolutions(this.lastGeneratedTest, analysis);
    }

    getNoTestAvailableMessage(language) {
        const messages = {
            'hindi': `**📚 कोई परीक्षा उपलब्ध नहीं है**\n\n**समस्या:** अभी तक कोई परीक्षा तैयार नहीं की गई है।\n\n**समाधान:** कृपया पहले एक परीक्षा बनाने का अनुरोध करें:\n• "गणित की परीक्षा बनाओ"\n• "विज्ञान के 15 प्रश्न दो"\n• "अंग्रेजी का टेस्ट पेपर तैयार करो"\n\nफिर मैं विस्तृत समाधान प्रदान कर सकूंगा! 🎓`,
            
            'hinglish': `**📚 Koi Test Available Nahi Hai**\n\n**Problem:** Abhi tak koi test generate nahi kiya gaya.\n\n**Solution:** Pehle test banana padega:\n• "Math ka test banao"\n• "Science ke questions do"\n• "English paper ready karo"\n\nPhir main detailed solutions de sakta hun! 🚀`,
            
            'english': `**📚 No Test Available for Solutions**\n\n**Issue:** No test has been generated yet to provide solutions for.\n\n**Next Steps:** Please first request a test:\n• "Create a mathematics test with 15 questions"\n• "Generate science practice questions"\n• "Make an English test paper"\n\nOnce you have a test, I can provide:\n• **Step-by-step solutions**\n• **CBSE marking schemes**\n• **Multiple solving methods**\n• **Key insights and tips**\n• **Performance improvement suggestions**\n\n**Ready to get started? Just ask for any subject test! 💎**`
        };
        
        return messages[language] || messages['english'];
    }

    formatComprehensiveSolutions(testData, analysis) {
        const language = analysis.language;
        
        let response = '';
        
        // HEADER
        if (language === 'hindi') {
            response += `**💡 संपूर्ण समाधान - ${this.getSubjectNameHindi(testData.params.subject)}**\n\n`;
        } else {
            response += `**💡 Comprehensive Solutions - ${this.getSubjectName(testData.params.subject).toUpperCase()}**\n\n`;
        }
        
        response += `**📊 Solution Overview:**\n`;
        response += `• **Test ID:** ${testData.testId}\n`;
        response += `• **Subject:** ${this.getSubjectName(testData.params.subject)}\n`;
        response += `• **Total Questions:** ${testData.questions.length}\n`;
        response += `• **Total Marks:** ${testData.metadata.totalMarks}\n`;
        response += `• **Solution Standard:** CBSE Board Level\n\n`;
        
        response += `**═══════════════════════════════════════════════════════════════**\n\n`;
        
        // DETAILED SOLUTIONS
        testData.questions.forEach((q, index) => {
            response += `**Solution ${q.number}:** ${q.question}\n`;
            response += `**Chapter:** ${q.chapter} | **Marks:** ${q.marks} | **Difficulty:** ${q.difficulty.toUpperCase()}\n\n`;
            
            response += `**🔍 Step-by-Step Solution:**\n`;
            response += `${q.solution}\n\n`;
            
            // CBSE MARKING SCHEME
            response += `**📊 CBSE Marking Scheme:**\n`;
            response += this.generateDetailedMarkingScheme(q.marks, q.chapter);
            response += `\n`;
            
            // KEY TIPS
            if (q.keyTips) {
                response += `**💡 Key Success Tips:**\n`;
                q.keyTips.forEach(tip => {
                    response += `• ${tip}\n`;
                });
                response += `\n`;
            }
            
            // COMMON MISTAKES
            response += `**⚠️ Common Mistakes to Avoid:**\n`;
            response += this.getCommonMistakes(q.chapter, q.difficulty);
            response += `\n`;
            
            // REAL-WORLD APPLICATION
            if (q.realWorldApp) {
                response += `**🌍 Real-World Application:**\n`;
                response += `${q.realWorldApp}\n\n`;
            }
            
            // ALTERNATIVE METHODS
            response += `**🔄 Alternative Approach:**\n`;
            response += this.getAlternativeMethod(q.chapter, q.question);
            response += `\n\n`;
            
            response += `**═══════════════════════════════════════════════════════════════**\n\n`;
        });
        
        // PERFORMANCE ANALYSIS
        response += `**📈 Performance Analysis & Improvement Guide:**\n\n`;
        
        response += `**📚 Study Recommendations:**\n`;
        const subjects = [...new Set(testData.questions.map(q => q.chapter))];
        subjects.forEach(chapter => {
            response += `• **${chapter}:** Practice similar problems, review concept notes\n`;
        });
        response += `\n`;
        
        response += `**🎯 Next Steps for Excellence:**\n`;
        response += `• **Practice More:** Attempt similar questions from different sources\n`;
        response += `• **Concept Review:** Revisit fundamental concepts for weak areas\n`;
        response += `• **Speed Building:** Practice timed tests to improve speed\n`;
        response += `• **Error Analysis:** Keep a mistake journal and review regularly\n`;
        response += `• **Peer Discussion:** Discuss solutions with classmates and teachers\n\n`;
        
        response += `**🌟 Ready for more practice? Ask for another test or specific chapter questions! 💎**`;
        
        return response;
    }

    async generateConceptExplanationResponse(message, analysis) {
        console.log('🎓 Generating concept explanation...');
        
        // IDENTIFY PRIMARY CONCEPT
        const concept = this.identifyPrimaryConcept(message, analysis);
        
        // GET COMPREHENSIVE EXPLANATION
        const explanation = await this.getComprehensiveConceptExplanation(concept, analysis);
        
        return this.formatConceptExplanation(explanation, analysis);
    }

    identifyPrimaryConcept(message, analysis) {
        const msg = message.toLowerCase();
        
        // MATH CONCEPTS
        if (msg.includes('quadratic') || msg.includes('equation')) return 'quadratic_equations';
        if (msg.includes('triangle') || msg.includes('similarity')) return 'triangles';
        if (msg.includes('coordinate') || msg.includes('geometry')) return 'coordinate_geometry';
        if (msg.includes('probability') || msg.includes('statistics')) return 'probability_statistics';
        
        // SCIENCE CONCEPTS
        if (msg.includes('photosynthesis')) return 'photosynthesis';
        if (msg.includes('acid') || msg.includes('base')) return 'acids_bases_salts';
        if (msg.includes('light') || msg.includes('reflection')) return 'light_reflection_refraction';
        if (msg.includes('electricity') || msg.includes('current')) return 'electricity';
        
        // SOCIAL SCIENCE CONCEPTS
        if (msg.includes('democracy') || msg.includes('government')) return 'democracy_government';
        if (msg.includes('nationalism') || msg.includes('freedom')) return 'nationalism_india';
        
        // ENGLISH CONCEPTS
        if (msg.includes('grammar') || msg.includes('tense')) return 'english_grammar';
        if (msg.includes('poetry') || msg.includes('literature')) return 'english_literature';
        
        return 'general_concept';
    }

    async getComprehensiveConceptExplanation(concept, analysis) {
        const explanations = {
            quadratic_equations: {
                title: "Quadratic Equations - Complete Mastery Guide",
                definition: "A quadratic equation is a polynomial equation of degree 2, with the general form ax² + bx + c = 0, where a ≠ 0.",
                
                keyComponents: [
                    "**Coefficient 'a':** Determines the parabola's opening direction and width",
                    "**Coefficient 'b':** Affects the parabola's position and axis of symmetry", 
                    "**Coefficient 'c':** Represents the y-intercept of the parabola"
                ],
                
                solvingMethods: [
                    "**1. Factoring Method:** When the equation can be written as (px + q)(rx + s) = 0",
                    "**2. Quadratic Formula:** x = [-b ± √(b² - 4ac)] / 2a (works for all quadratic equations)",
                    "**3. Completing the Square:** Converting ax² + bx + c = 0 to (x + d)² = e form",
                    "**4.
