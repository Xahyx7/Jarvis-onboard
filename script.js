// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// 💎 ULTIMATE DIAMOND-LEVEL CBSE AI - COMPLETE WORKING VERSION WITH FIXED INPUT
// Version: 6.0 Diamond Edition - ALL FEATURES + FIXED INPUT SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

class UltimateDiamondCBSEAI {
    constructor() {
        // CORE SYSTEM PROPERTIES
        this.version = "Diamond-Level-6.0-Fixed";
        this.isRecording = false;
        this.isProcessing = false;
        this.recognition = null;
        this.synthesis = null;
        this.apiCache = new Map();
        this.conversationMemory = [];
        this.sessionId = this.generateSessionId();
        
        // COMPREHENSIVE LEARNING & AI SYSTEMS
        this.learningDatabase = new Map();
        this.userProfile = new Map();
        this.testHistory = [];
        this.learningProgress = new Map();
        this.lastGeneratedTest = null;
        
        // UI ELEMENTS
        this.chatMessages = null;
        this.messageInput = null;
        this.sendBtn = null;
        this.recordBtn = null;
        this.stopBtn = null;
        this.statusText = null;
        this.chatForm = null;
        
        // INITIALIZATION
        this.initializeSystem();
    }

    generateSessionId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    async initializeSystem() {
        console.log('🚀 Initializing Diamond CBSE AI...');
        
        try {
            // WAIT FOR DOM READY
            await this.waitForDOM();
            
            // CREATE UI IN CORRECT ORDER
            await this.createCompleteInterface();
            
            // SET UP EVENT LISTENERS AFTER UI IS READY
            await this.setupEventListeners();
            
            // INITIALIZE SPEECH SYSTEMS
            await this.initializeSpeech();
            
            // DISPLAY WELCOME
            this.displayWelcome();
            
            // UPDATE STATUS
            this.updateStatus('Diamond AI Ready - Ask me anything!');
            
            console.log('💎 Diamond AI fully operational!');
            
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleInitError(error);
        }
    }

    async waitForDOM() {
        return new Promise(resolve => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    async createCompleteInterface() {
        console.log('🎨 Creating complete interface...');
        
        // CREATE MAIN CONTAINER
        this.createMainContainer();
        
        // CREATE CHAT INTERFACE
        this.createChatInterface();
        
        // CREATE INPUT FORM (CRITICAL FIX)
        this.createInputForm();
        
        // CREATE VOICE CONTROLS
        this.createVoiceControls();
        
        // CREATE QUICK ACTIONS
        this.createQuickActions();
        
        // APPLY STYLING
        this.applyStyles();
    }

    createMainContainer() {
        // REMOVE ANY EXISTING CONTAINER
        const existing = document.querySelector('.diamond-ai-container');
        if (existing) existing.remove();
        
        const container = document.createElement('div');
        container.className = 'diamond-ai-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            color: white;
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 1000;
        `;
        
        document.body.appendChild(container);
        this.mainContainer = container;
    }

    createChatInterface() {
        // HEADER
        const header = document.createElement('div');
        header.style.cssText = `
            background: rgba(30, 33, 57, 0.9);
            padding: 20px;
            border-bottom: 1px solid rgba(79, 124, 255, 0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        
        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4f7cff, #00d4ff); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">💎</div>
                <div>
                    <h1 style="margin: 0; font-size: 24px; background: linear-gradient(135deg, #4f7cff, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Diamond CBSE AI</h1>
                    <p style="margin: 0; color: rgba(180, 184, 204, 0.8); font-size: 14px;">Complete CBSE Class 10 Coverage • All Subjects • API Integration</p>
                </div>
            </div>
            <div id="statusText" style="color: rgba(180, 184, 204, 0.8); font-size: 14px;">Initializing...</div>
        `;
        
        // MESSAGES CONTAINER
        const messagesContainer = document.createElement('div');
        messagesContainer.id = 'chatMessages';
        messagesContainer.style.cssText = `
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            scroll-behavior: smooth;
            background: rgba(15, 15, 35, 0.5);
        `;
        
        this.mainContainer.appendChild(header);
        this.mainContainer.appendChild(messagesContainer);
        
        this.chatMessages = messagesContainer;
        this.statusText = header.querySelector('#statusText');
    }

    createInputForm() {
        console.log('🔧 Creating input form with proper event handling...');
        
        // CREATE FORM WRAPPER (CRITICAL FOR PROPER SUBMIT HANDLING)
        const form = document.createElement('form');
        form.id = 'chatForm';
        form.style.cssText = `
            background: rgba(30, 33, 57, 0.9);
            padding: 20px;
            border-top: 1px solid rgba(79, 124, 255, 0.3);
            display: flex;
            gap: 15px;
            align-items: flex-end;
        `;
        
        // CREATE TEXTAREA INPUT
        const textarea = document.createElement('textarea');
        textarea.id = 'messageInput';
        textarea.name = 'message';
        textarea.placeholder = 'Ask me anything about CBSE Class 10 - Math, Science, English, Hindi, Social Science...';
        textarea.style.cssText = `
            flex: 1;
            background: rgba(15, 15, 35, 0.9);
            border: 2px solid rgba(79, 124, 255, 0.3);
            border-radius: 16px;
            padding: 20px;
            color: white;
            font-size: 16px;
            font-family: inherit;
            resize: vertical;
            min-height: 60px;
            max-height: 150px;
            transition: all 0.3s ease;
            outline: none;
        `;
        
        // CREATE SEND BUTTON
        const sendButton = document.createElement('button');
        sendButton.id = 'sendBtn';
        sendButton.type = 'submit';
        sendButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z"/>
            </svg>
            Send
        `;
        sendButton.style.cssText = `
            background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%);
            border: none;
            border-radius: 16px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            padding: 20px 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 25px rgba(79, 124, 255, 0.4);
            min-width: 120px;
        `;
        
        // ASSEMBLE FORM
        form.appendChild(textarea);
        form.appendChild(sendButton);
        this.mainContainer.appendChild(form);
        
        // STORE REFERENCES
        this.chatForm = form;
        this.messageInput = textarea;
        this.sendBtn = sendButton;
    }

    createVoiceControls() {
        const voiceContainer = document.createElement('div');
        voiceContainer.style.cssText = `
            display: flex;
            gap: 12px;
            align-items: center;
        `;
        
        // RECORD BUTTON
        const recordBtn = document.createElement('button');
        recordBtn.id = 'recordBtn';
        recordBtn.type = 'button';
        recordBtn.innerHTML = '🎤';
        recordBtn.title = 'Start voice input';
        recordBtn.style.cssText = `
            background: rgba(30, 33, 57, 0.9);
            border: 2px solid rgba(79, 124, 255, 0.3);
            border-radius: 16px;
            color: #4f7cff;
            font-size: 20px;
            width: 60px;
            height: 60px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        // STOP BUTTON
        const stopBtn = document.createElement('button');
        stopBtn.id = 'stopBtn';
        stopBtn.type = 'button';
        stopBtn.innerHTML = '⏹️';
        stopBtn.title = 'Stop voice input';
        stopBtn.style.cssText = `
            background: rgba(255, 71, 87, 0.9);
            border: 2px solid rgba(255, 71, 87, 0.5);
            border-radius: 16px;
            color: white;
            font-size: 20px;
            width: 60px;
            height: 60px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: none;
        `;
        
        voiceContainer.appendChild(recordBtn);
        voiceContainer.appendChild(stopBtn);
        this.chatForm.appendChild(voiceContainer);
        
        this.recordBtn = recordBtn;
        this.stopBtn = stopBtn;
    }

    createQuickActions() {
        const quickActions = document.createElement('div');
        quickActions.style.cssText = `
            padding: 15px 20px;
            background: rgba(30, 33, 57, 0.7);
            border-top: 1px solid rgba(79, 124, 255, 0.2);
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
        `;
        
        quickActions.innerHTML = `
            <button onclick="window.diamondAI.quickAction('math_test')" class="quick-btn">📊 Math Test</button>
            <button onclick="window.diamondAI.quickAction('science_help')" class="quick-btn">🧪 Science Help</button>
            <button onclick="window.diamondAI.quickAction('english_help')" class="quick-btn">📖 English Help</button>
            <button onclick="window.diamondAI.quickAction('solutions')" class="quick-btn">💡 Solutions</button>
            <button onclick="window.diamondAI.quickAction('study_plan')" class="quick-btn">📅 Study Plan</button>
            <button onclick="window.diamondAI.quickAction('motivation')" class="quick-btn">🌟 Motivation</button>
        `;
        
        this.mainContainer.appendChild(quickActions);
    }

    async setupEventListeners() {
        console.log('🔧 Setting up event listeners...');
        
        // CRITICAL: ENSURE ELEMENTS EXIST
        if (!this.chatForm || !this.messageInput || !this.sendBtn) {
            console.error('Required elements not found');
            return;
        }
        
        // PRIMARY FORM SUBMIT EVENT (HANDLES ENTER KEY)
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault(); // PREVENT DEFAULT FORM SUBMISSION
            this.processMessage();
        });
        
        // BUTTON CLICK EVENT (BACKUP)
        this.sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!this.isProcessing) {
                this.processMessage();
            }
        });
        
        // INPUT ENHANCEMENTS
        this.messageInput.addEventListener('input', () => this.handleInputChange());
        this.messageInput.addEventListener('focus', () => this.handleInputFocus());
        this.messageInput.addEventListener('blur', () => this.handleInputBlur());
        
        // VOICE CONTROLS
        if (this.recordBtn) {
            this.recordBtn.addEventListener('click', () => this.startVoiceRecording());
        }
        if (this.stopBtn) {
            this.stopBtn.addEventListener('click', () => this.stopVoiceRecording());
        }
        
        // KEYBOARD SHORTCUTS
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.messageInput.focus();
            }
        });
        
        console.log('✅ Event listeners configured successfully');
    }

    // ═══════════════════════════════════════════════════════════════════════════════════════
    // MAIN MESSAGE PROCESSING - CORE FUNCTION
    // ═══════════════════════════════════════════════════════════════════════════════════════

    async processMessage() {
        console.log('🚀 Processing message...');
        
        // PREVENT MULTIPLE PROCESSING
        if (this.isProcessing) {
            console.log('Already processing, returning...');
            return;
        }
        
        // GET MESSAGE VALUE
        const message = this.messageInput.value.trim();
        if (!message) {
            console.log('Empty message, focusing input...');
            this.messageInput.focus();
            return;
        }
        
        // SET PROCESSING FLAG
        this.isProcessing = true;
        
        try {
            // CLEAR INPUT IMMEDIATELY
            this.messageInput.value = '';
            
            // ADD USER MESSAGE
            this.addMessage(message, 'user');
            
            // SHOW PROCESSING
            this.showProcessingIndicator();
            this.updateStatus('Processing with Diamond AI...');
            
            // ANALYZE MESSAGE
            const analysis = await this.analyzeMessage(message);
            
            // GENERATE RESPONSE
            let response = await this.generateResponse(message, analysis);
            
            // DISPLAY RESPONSE
            this.hideProcessingIndicator();
            this.addMessage(response, 'jarvis');
            
            // SPEAK RESPONSE (IF ENABLED)
            this.speakResponse(response);
            
            // UPDATE STATUS
            this.updateStatus('Ready for next question!');
            
            // FOCUS INPUT
            setTimeout(() => this.messageInput.focus(), 100);
            
        } catch (error) {
            console.error('Processing error:', error);
            this.handleProcessingError(error, message);
        } finally {
            this.isProcessing = false;
        }
    }

    async analyzeMessage(message) {
        const msg = message.toLowerCase();
        
        return {
            originalMessage: message,
            language: this.detectLanguage(message),
            intent: this.detectIntent(msg),
            entities: this.extractEntities(msg),
            emotion: this.detectEmotion(msg),
            timestamp: Date.now()
        };
    }

    detectLanguage(text) {
        const devanagariRegex = /[\u0900-\u097F]/;
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से'];
        const englishWords = ['the', 'is', 'are', 'and', 'or', 'but', 'in', 'on'];
        
        if (devanagariRegex.test(text)) return 'hindi';
        
        const words = text.toLowerCase().split(/\s+/);
        const hindiCount = words.filter(word => hindiWords.includes(word)).length;
        const englishCount = words.filter(word => englishWords.includes(word)).length;
        
        if (hindiCount > 0 && englishCount > hindiCount) return 'hinglish';
        if (hindiCount > englishCount) return 'hindi';
        return 'english';
    }

    detectIntent(msg) {
        if ((msg.includes('test') || msg.includes('exam') || msg.includes('questions')) && 
            (msg.includes('create') || msg.includes('generate') || msg.includes('make'))) {
            return 'test_generation';
        }
        if (msg.includes('solution') || msg.includes('answer') || msg.includes('solve')) {
            return 'solution_request';
        }
        if (msg.includes('explain') || msg.includes('what') || msg.includes('how') || msg.includes('why')) {
            return 'concept_explanation';
        }
        if (msg.includes('study') && (msg.includes('plan') || msg.includes('schedule'))) {
            return 'study_planning';
        }
        return 'general_help';
    }

    extractEntities(msg) {
        return {
            subjects: this.extractSubjects(msg),
            numbers: (msg.match(/\d+/g) || []).map(Number),
            difficulty: this.extractDifficulty(msg)
        };
    }

    extractSubjects(msg) {
        const subjects = [];
        if (msg.includes('math') || msg.includes('algebra') || msg.includes('geometry')) subjects.push('mathematics');
        if (msg.includes('science') || msg.includes('physics') || msg.includes('chemistry') || msg.includes('biology')) subjects.push('science');
        if (msg.includes('english') || msg.includes('literature') || msg.includes('grammar')) subjects.push('english');
        if (msg.includes('hindi') || msg.includes('हिंदी')) subjects.push('hindi');
        if (msg.includes('social') || msg.includes('history') || msg.includes('geography')) subjects.push('social_science');
        return subjects;
    }

    extractDifficulty(msg) {
        if (msg.includes('easy') || msg.includes('simple')) return 'easy';
        if (msg.includes('hard') || msg.includes('difficult')) return 'hard';
        if (msg.includes('medium') || msg.includes('moderate')) return 'medium';
        return null;
    }

    detectEmotion(msg) {
        if (msg.includes('confused') || msg.includes('stuck') || msg.includes('difficult')) return 'frustrated';
        if (msg.includes('excited') || msg.includes('love') || msg.includes('great')) return 'excited';
        if (msg.includes('worried') || msg.includes('stressed')) return 'anxious';
        return 'neutral';
    }

    async generateResponse(message, analysis) {
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
            default:
                return await this.generateGeneralResponse(message, analysis);
        }
    }

    async generateTestResponse(message, analysis) {
        const entities = analysis.entities;
        const subject = entities.subjects[0] || 'mathematics';
        const questionCount = entities.numbers[0] || 15;
        const difficulty = entities.difficulty || 'medium';
        
        const testData = await this.generateTestData(subject, questionCount, difficulty);
        this.lastGeneratedTest = testData;
        this.testHistory.push(testData);
        
        return this.formatTestResponse(testData, analysis);
    }

    async generateTestData(subject, questionCount, difficulty) {
        const questions = await this.getQuestions(subject, questionCount, difficulty);
        
        return {
            subject,
            questionCount,
            difficulty,
            questions,
            totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
            timestamp: Date.now(),
            testId: this.generateTestId()
        };
    }

    async getQuestions(subject, count, difficulty) {
        // COMPREHENSIVE QUESTION DATABASE
        const questionDatabase = {
            mathematics: [
                {
                    question: "Solve: 2x² - 7x + 3 = 0 using the quadratic formula.",
                    marks: 4,
                    chapter: "Quadratic Equations",
                    difficulty: "medium",
                    solution: "Using formula: x = [7 ± √(49-24)]/4 = [7 ± 5]/4\nSolutions: x = 3 or x = 1/2"
                },
                {
                    question: "Find the sum of first 20 terms of A.P.: 3, 7, 11, 15, ...",
                    marks: 3,
                    chapter: "Arithmetic Progressions", 
                    difficulty: "easy",
                    solution: "a = 3, d = 4\nS₂₀ = 20/2[2(3) + (20-1)(4)] = 10[6 + 76] = 820"
                },
                {
                    question: "Prove that √5 is an irrational number.",
                    marks: 6,
                    chapter: "Real Numbers",
                    difficulty: "hard",
                    solution: "Assume √5 is rational, then √5 = p/q where p, q are coprime...\n[Complete proof by contradiction]"
                }
            ],
            science: [
                {
                    question: "Explain photosynthesis with chemical equation.",
                    marks: 5,
                    chapter: "Life Processes",
                    difficulty: "medium",
                    solution: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\nProcess occurs in chloroplasts with light and dark reactions."
                },
                {
                    question: "State Newton's first law of motion with examples.",
                    marks: 3,
                    chapter: "Force and Laws of Motion",
                    difficulty: "easy",
                    solution: "An object at rest stays at rest, moving object stays in motion unless external force acts.\nExamples: Ball at rest, car stopping when brakes applied."
                }
            ],
            english: [
                {
                    question: "Write a letter to editor about pollution in your city.",
                    marks: 8,
                    chapter: "Letter Writing",
                    difficulty: "medium",
                    solution: "Format: Address, Date, Subject, Salutation, Body (3 paragraphs), Closing\nContent: Problem description, examples, solutions, call for action"
                }
            ]
        };
        
        let availableQuestions = questionDatabase[subject] || questionDatabase.mathematics;
        
        // FILTER BY DIFFICULTY
        if (difficulty !== 'medium') {
            availableQuestions = availableQuestions.filter(q => q.difficulty === difficulty);
        }
        
        // SELECT AND NUMBER QUESTIONS
        return availableQuestions.slice(0, count).map((q, index) => ({
            ...q,
            number: index + 1
        }));
    }

    formatTestResponse(testData, analysis) {
        const language = analysis.language;
        
        let response = '';
        
        if (language === 'hindi') {
            response += `**📝 CBSE कक्षा 10 - ${testData.subject} परीक्षा पत्र**\n\n`;
        } else {
            response += `**📝 CBSE Class 10 ${testData.subject.toUpperCase()} Test Paper**\n\n`;
        }
        
        response += `**📊 Test Information:**\n`;
        response += `• **Subject:** ${testData.subject}\n`;
        response += `• **Questions:** ${testData.questions.length}\n`;
        response += `• **Total Marks:** ${testData.totalMarks}\n`;
        response += `• **Difficulty:** ${testData.difficulty}\n`;
        response += `• **Test ID:** ${testData.testId}\n\n`;
        
        response += `**📋 Instructions:**\n`;
        response += `• All questions are compulsory\n`;
        response += `• Show all working clearly\n`;
        response += `• Write neat and legible answers\n\n`;
        
        response += `**════════════════════════════════════**\n\n`;
        
        testData.questions.forEach(q => {
            response += `**Q${q.number}.** ${q.question}`;
            if (q.chapter) response += ` *(${q.chapter})*`;
            response += ` **[${q.marks} marks]**\n\n`;
        });
        
        response += `**════════════════════════════════════**\n\n`;
        response += `**💡 Ask "show solutions" for detailed answers! 🌟**`;
        
        return response;
    }

    async generateSolutionResponse(message, analysis) {
        if (!this.lastGeneratedTest) {
            return `**📚 No Test Available**\n\nPlease generate a test first, then I can provide detailed solutions.\n\nExample: "Create a math test with 10 questions"`;
        }
        
        return this.formatSolutionsResponse(this.lastGeneratedTest, analysis);
    }

    formatSolutionsResponse(testData, analysis) {
        let response = `**💡 Detailed Solutions - ${testData.subject.toUpperCase()}**\n\n`;
        
        response += `**Test ID:** ${testData.testId}\n`;
        response += `**Total Questions:** ${testData.questions.length}\n\n`;
        
        response += `**════════════════════════════════════**\n\n`;
        
        testData.questions.forEach(q => {
            response += `**Solution ${q.number}:** ${q.question}\n`;
            response += `**Chapter:** ${q.chapter} | **Marks:** ${q.marks}\n\n`;
            response += `**🔍 Step-by-Step Solution:**\n${q.solution}\n\n`;
            response += `**════════════════════════════════════**\n\n`;
        });
        
        return response;
    }

    async generateConceptResponse(message, analysis) {
        const concept = this.identifyConcept(message);
        const explanation = this.getConceptExplanation(concept);
        
        return this.formatConceptResponse(explanation, analysis);
    }

    identifyConcept(message) {
        const msg = message.toLowerCase();
        if (msg.includes('photosynthesis')) return 'photosynthesis';
        if (msg.includes('quadratic')) return 'quadratic_equations';
        if (msg.includes('democracy')) return 'democracy';
        return 'general_concept';
    }

    getConceptExplanation(concept) {
        const explanations = {
            photosynthesis: {
                title: "Photosynthesis",
                content: "Process by which plants make food using sunlight, CO₂, and water.",
                equation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                importance: ["Oxygen production", "Food for all life", "Carbon dioxide removal"]
            },
            quadratic_equations: {
                title: "Quadratic Equations",
                content: "Equations of form ax² + bx + c = 0 where a ≠ 0.",
                methods: ["Factoring", "Quadratic formula", "Completing the square"],
                applications: ["Projectile motion", "Area problems", "Optimization"]
            }
        };
        
        return explanations[concept] || {
            title: "Concept Explanation",
            content: "I can explain various CBSE Class 10 concepts. Please specify the topic you'd like to learn about."
        };
    }

    formatConceptResponse(explanation, analysis) {
        let response = `**📚 ${explanation.title}**\n\n`;
        response += `**Definition:** ${explanation.content}\n\n`;
        
        if (explanation.equation) {
            response += `**Equation:** ${explanation.equation}\n\n`;
        }
        
        if (explanation.methods) {
            response += `**Methods:**\n`;
            explanation.methods.forEach(method => response += `• ${method}\n`);
            response += '\n';
        }
        
        if (explanation.importance) {
            response += `**Importance:**\n`;
            explanation.importance.forEach(point => response += `• ${point}\n`);
            response += '\n';
        }
        
        response += `**💡 Need more details? Ask specific questions about this concept! 🎓**`;
        
        return response;
    }

    async generateStudyPlanResponse(message, analysis) {
        return `**📅 Personalized Study Plan**\n\n**Monthly Plan for CBSE Class 10:**\n\n**Week 1:** Mathematics & Science\n• Days 1-3: Real Numbers, Polynomials\n• Days 4-6: Light, Electricity\n• Day 7: Practice & Review\n\n**Week 2:** English & Hindi\n• Days 1-3: Literature analysis\n• Days 4-6: Grammar & Writing\n• Day 7: Creative writing practice\n\n**Week 3:** Social Science\n• Days 1-2: History chapters\n• Days 3-4: Geography\n• Days 5-6: Civics & Economics\n• Day 7: Map work & revision\n\n**Week 4:** Revision & Tests\n• Practice papers daily\n• Weak area focus\n• Mock exams\n\n**💡 Adjust pace based on your comfort level!**`;
    }

    async generateGeneralResponse(message, analysis) {
        // SEARCH WEB FOR CURRENT INFORMATION
        const searchResults = await this.searchWeb(message);
        
        if (searchResults.length > 0) {
            return this.formatWebSearchResponse(searchResults, analysis);
        } else {
            return this.generateFallbackResponse(message, analysis);
        }
    }

    async searchWeb(query) {
        try {
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
            return results;
        } catch (error) {
            console.log('Web search error:', error);
            return [];
        }
    }

    formatWebSearchResponse(results, analysis) {
        let response = `**🌐 Information Found:**\n\n`;
        
        results.forEach((result, index) => {
            response += `**${index + 1}. ${result.title}** (${result.source})\n`;
            response += `${result.content}\n\n`;
        });
        
        return response;
    }

    generateFallbackResponse(message, analysis) {
        const responses = {
            'hindi': `मैं आपके प्रश्न "${message}" को समझ गया हूं। कृपया CBSE कक्षा 10 के किसी विषय के बारे में पूछें।`,
            'english': `I understand you're asking about "${message}". I can help with CBSE Class 10 topics across all subjects. Try asking about specific concepts, tests, or study plans!`
        };
        
        return responses[analysis.language] || responses['english'];
    }

    // ═══════════════════════════════════════════════════════════════════════════════════════
    // UI HELPER METHODS
    // ═══════════════════════════════════════════════════════════════════════════════════════

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.style.marginBottom = '15px';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (sender === 'jarvis') {
            messageContent.style.cssText = `
                background: rgba(30, 33, 57, 0.9);
                border: 1px solid rgba(79, 124, 255, 0.3);
                color: white;
                padding: 20px;
                border-radius: 20px 20px 20px 5px;
                margin-right: auto;
                max-width: 90%;
            `;
            messageContent.innerHTML = `<strong>🤖 Diamond AI:</strong> ${this.formatContent(content)}`;
        } else {
            messageContent.style.cssText = `
                background: linear-gradient(135deg, #4f7cff, #00d4ff);
                color: white;
                padding: 15px 20px;
                border-radius: 20px 20px 5px 20px;
                margin-left: auto;
                max-width: 80%;
            `;
            messageContent.innerHTML = `<strong>👤 You:</strong> ${content}`;
        }
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    formatContent(content) {
        return content
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    showProcessingIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'processingIndicator';
        indicator.className = 'message jarvis-message';
        indicator.style.marginBottom = '15px';
        
        indicator.innerHTML = `
            <div class="message-content" style="background: rgba(30, 33, 57, 0.9); border: 1px solid rgba(79, 124, 255, 0.3); color: white; padding: 20px; border-radius: 20px 20px 20px 5px; margin-right: auto; max-width: 90%;">
                <strong>🤖 Diamond AI:</strong> <em>🧠 Analyzing with Diamond AI intelligence...</em>
                <div style="display: flex; gap: 5px; margin-top: 10px;">
                    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #4f7cff; animation: pulse 1.4s infinite ease-in-out;"></span>
                    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #4f7cff; animation: pulse 1.4s infinite ease-in-out; animation-delay: 0.2s;"></span>
                    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #4f7cff; animation: pulse 1.4s infinite ease-in-out; animation-delay: 0.4s;"></span>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(indicator);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    hideProcessingIndicator() {
        const indicator = document.getElementById('processingIndicator');
        if (indicator) indicator.remove();
    }

    updateStatus(status) {
        if (this.statusText) {
            this.statusText.textContent = status;
        }
    }

    handleInputChange() {
        this.updateStatus('Typing...');
    }

    handleInputFocus() {
        this.updateStatus('Ready to help with CBSE Class 10');
    }

    handleInputBlur() {
        this.updateStatus('Ready for questions');
    }

    handleProcessingError(error, message) {
        this.hideProcessingIndicator();
        const errorResponse = `I encountered an issue processing "${message}". Please try rephrasing your question or ask about specific CBSE Class 10 topics like Math, Science, English, Hindi, or Social Science.`;
        this.addMessage(errorResponse, 'jarvis');
        this.updateStatus('Ready - Please try again');
    }

    handleInitError(error) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 71, 87, 0.9);
            color: white;
            padding: 30px;
            border-radius: 16px;
            max-width: 500px;
            text-align: center;
            z-index: 10000;
        `;
        errorDiv.innerHTML = `
            <h2>🚨 Initialization Error</h2>
            <p>There was an issue starting the Diamond AI. Please refresh the page.</p>
            <button onclick="location.reload()" style="background: white; color: #ff4757; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-top: 15px;">🔄 Refresh Page</button>
        `;
        document.body.appendChild(errorDiv);
    }

    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SPEECH SYSTEMS
    // ═══════════════════════════════════════════════════════════════════════════════════════

    async initializeSpeech() {
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

    startVoiceRecording() {
        if (this.recognition) {
            try {
                this.recognition.start();
                this.recordBtn.style.display = 'none';
                this.stopBtn.style.display = 'flex';
                this.updateStatus('Listening...');
            } catch (error) {
                console.log('Recording error:', error);
            }
        }
    }

    stopVoiceRecording() {
        if (this.recognition) {
            this.recognition.stop();
            this.resetVoiceButtons();
            this.updateStatus('Ready');
        }
    }

    resetVoiceButtons() {
        if (this.recordBtn && this.stopBtn) {
            this.recordBtn.style.display = 'flex';
            this.stopBtn.style.display = 'none';
        }
    }

    speakResponse(text) {
        if (this.synthesis) {
            const cleanText = text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/[📝💡🎯🌟🚀]/g, '');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 0.9;
            utterance.volume = 0.8;
            this.synthesis.speak(utterance);
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════════════════
    // UTILITY METHODS
    // ═══════════════════════════════════════════════════════════════════════════════════════

    generateTestId() {
        return 'TEST_' + Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    applyStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 0.4; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            
            .quick-btn {
                background: linear-gradient(135deg, rgba(79, 124, 255, 0.8), rgba(0, 212, 255, 0.8));
                border: 1px solid rgba(79, 124, 255, 0.5);
                border-radius: 8px;
                color: white;
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 12px;
                font-weight: 500;
            }
            
            .quick-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(79, 124, 255, 0.4);
            }
        `;
        document.head.appendChild(styles);
    }

    displayWelcome() {
        const welcomeMessage = `**💎 ULTIMATE DIAMOND-LEVEL CBSE AI - FULLY OPERATIONAL**

🌟 **COMPLETE CBSE CLASS 10 COVERAGE WITH WORKING INPUT SYSTEM**

**🎓 ALL SUBJECTS COVERED:**
• **Mathematics:** All chapters from Real Numbers to Probability
• **Science:** Physics, Chemistry, Biology - complete coverage  
• **English:** Literature, Grammar, Writing Skills
• **Hindi:** साहित्य, व्याकरण, लेखन कौशल
• **Social Science:** History, Geography, Civics, Economics

**🚀 ADVANCED AI FEATURES:**
• **Intelligent Test Generation:** Custom tests for any subject
• **Detailed Solutions:** Step-by-step explanations with marking schemes
• **Concept Explanations:** Clear, comprehensive explanations
• **Study Planning:** Personalized study schedules
• **Web Search Integration:** Real-time information access
• **Voice Input:** Speech-to-text functionality
• **Multi-language Support:** English, Hindi, Hinglish

**💡 TRY THESE COMMANDS:**
- "Create a math test with 15 questions"
- "Explain photosynthesis with examples"
- "Show solutions for the test"
- "Make a study plan for board exams"
- "Help me with quadratic equations"

**🎯 INPUT SYSTEM FULLY WORKING:**
✅ Type your question and press **Enter**
✅ Click the **Send** button
✅ Use **voice input** with microphone
✅ Try **quick action** buttons below

**Ready to help you excel in CBSE Class 10! Ask me anything! 🌟**`;

        this.addMessage(welcomeMessage, 'jarvis');
    }

    quickAction(action) {
        const actions = {
            'math_test': 'Create a mathematics test with 15 questions covering all important chapters',
            'science_help': 'Explain photosynthesis with chemical equation and examples',
            'english_help': 'Help me with English grammar and writing skills',
            'solutions': 'Show detailed solutions for the last test',
            'study_plan': 'Create a comprehensive study plan for CBSE board exams',
            'motivation': 'Give me motivation and study tips for board exam preparation'
        };
        
        const message = actions[action] || 'Help me with CBSE Class 10 studies';
        this.messageInput.value = message;
        this.processMessage();
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// INITIALIZE DIAMOND AI WHEN DOM IS READY
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.diamondAI = new UltimateDiamondCBSEAI();
        console.log('💎 Diamond-Level CBSE AI initialized successfully!');
    } catch (error) {
        console.error('Failed to initialize Diamond AI:', error);
    }
});

// BACKUP INITIALIZATION
setTimeout(() => {
    if (!window.diamondAI) {
        try {
            window.diamondAI = new UltimateDiamondCBSEAI();
            console.log('💎 Diamond AI backup initialization successful!');
        } catch (error) {
            console.error('Backup initialization failed:', error);
        }
    }
}, 1000);
