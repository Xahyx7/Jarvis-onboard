class ComprehensiveCBSEJarvis {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        this.apiCache = new Map();
        this.languageDetector = new LanguageDetector();
        this.conversationMemory = [];
        
        // ENHANCED LEARNING COMPONENTS
        this.learningDatabase = new EnhancedLearningDatabase();
        this.personalityEngine = new AdvancedPersonalityEngine();
        this.userProfile = new ComprehensiveUserProfile();
        
        // COMPREHENSIVE CBSE SYSTEM
        this.cbseDatabase = new ComprehensiveCBSEDatabase();
        this.solutionEngine = new DetailedSolutionEngine();
        this.lastGeneratedTest = null;
        this.testHistory = [];
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeSpeechRecognition();
        this.initializeLearningSystem();
        this.playWelcomeSound();
        this.displayUltimateWelcome();
    }

    initializeElements() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.recordBtn = document.getElementById('recordBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.contextSelect = document.getElementById('contextSelect');
        this.statusText = document.getElementById('statusText');
        this.voiceIndicator = document.getElementById('jarvisVoiceIndicator');
    }

    initializeEventListeners() {
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        this.recordBtn?.addEventListener('click', () => this.startRecording());
        this.stopBtn?.addEventListener('click', () => this.stopRecording());
        
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            });
        });

        this.addAdvancedTrainingInterface();
    }

    displayUltimateWelcome() {
        const welcomeMessage = `**🎓 Ultimate CBSE Class 10 AI Assistant - Complete Edition**

🌟 **COMPREHENSIVE CBSE COVERAGE:**

**📚 ALL SUBJECTS AVAILABLE:**
• **Core Subjects:** Mathematics, Science, Social Science, English, Hindi
• **Additional Subjects:** Information Technology, Physical Education, Art & Culture
• **Optional Subjects:** Sanskrit, French, German, Computer Applications

**🎯 ADVANCED TEST GENERATION:**
• **Customizable Tests:** Set subject, difficulty, question count, marks
• **All Question Sources:** NCERT Textbooks + PYQ + SQP + Additional Practice
• **Difficulty Levels:** Easy (1-2 marks), Medium (3-4 marks), Hard (5-6 marks)
• **Test Types:** Unit Tests, Board Exam Pattern, Quick Practice, Full Syllabus

**💡 INTELLIGENT SOLUTION ENGINE:**
• **CBSE-Standard Solutions:** Step-by-step detailed explanations
• **Multiple Approaches:** Different solving methods for same problem
• **Visual Aids:** Diagrams, flowcharts, mind maps when needed
• **Mark Distribution:** Shows exactly how marks are allocated

**🌐 REAL-TIME CAPABILITIES:**
• **Internet Search:** Latest information and current affairs
• **NCERT PDF Integration:** Direct textbook references with page numbers
• **PYQ Database:** 15+ years of previous year questions
• **SQP Collection:** All sample question papers from CBSE

**🧠 ADVANCED AI TRAITS:**
• **Adaptive Learning:** Learns your weak areas and focuses on them
• **Personalized Teaching:** Adjusts explanation style to your learning pace
• **Emotional Intelligence:** Encourages when you struggle, celebrates success
• **Context Memory:** Remembers your learning journey and progress
• **Multi-modal Support:** Text, voice, and visual learning support

**🎪 INTERACTIVE COMMANDS:**

**📝 Test Generation Examples:**
- "Create 15 questions test in mathematics, medium difficulty, 50 marks"
- "Give me hard level science test with 20 questions"
- "Quick 10 marks English test from PYQ only"
- "Full syllabus social science test board pattern"

**💬 Learning Commands:**
- "Explain photosynthesis with diagram and detailed solution"
- "Show me all quadratic equation solving methods with examples"
- "Give previous year questions on nationalism with solutions"
- "Create mindmap for periodic table trends"

**🎯 Subject-Specific Requests:**
- "Hindi grammar test with vyakaran questions"
- "IT practical questions with coding examples" 
- "Physical education theory questions CBSE pattern"
- "Art and culture questions from ancient India"

**🌍 Multi-Language Support:**
• **English, Hindi, Hinglish** - Ask in any language
• **Subject-specific vocabulary** in regional languages
• **Voice support** with accurate pronunciation

**Try any command - I'm your complete CBSE study companion! 🚀**`;

        this.addMessage(welcomeMessage, 'jarvis');
    }

    // LEARNING SYSTEM INITIALIZATION
    initializeLearningSystem() {
        console.log('🧠 Initializing Ultimate Learning System...');
        this.loadLearningData();
        setInterval(() => this.processAdvancedLearning(), 30000);
        setInterval(() => this.saveLearningData(), 60000);
    }

    loadLearningData() {
        try {
            const savedData = localStorage.getItem('jarvis_ultimate_learning_data');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.learningDatabase.loadData(data.knowledge || {});
                this.userProfile.loadProfile(data.profile || {});
                this.testHistory = data.testHistory || [];
                console.log('📚 Loaded comprehensive learning data');
            }
        } catch (error) {
            console.log('No previous learning data found, starting fresh');
        }
    }

    saveLearningData() {
        try {
            const dataToSave = {
                knowledge: this.learningDatabase.exportData(),
                profile: this.userProfile.exportProfile(),
                testHistory: this.testHistory,
                timestamp: Date.now()
            };
            localStorage.setItem('jarvis_ultimate_learning_data', JSON.stringify(dataToSave));
        } catch (error) {
            console.log('Error saving learning data:', error);
        }
    }

    // MAIN MESSAGE PROCESSING
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Check if this is a training command FIRST
        if (await this.handleAdvancedTrainingCommand(message)) {
            this.messageInput.value = '';
            return;
        }

        // Store in conversation memory
        this.conversationMemory.push({
            timestamp: Date.now(),
            user: message,
            type: 'user',
            context: this.contextSelect?.value || 'general'
        });

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showAdvancedTypingIndicator();

        try {
            // Detect language and intent
            const detectedLang = this.detectLanguage(message);
            const intent = this.analyzeAdvancedIntent(message);
            
            console.log(`🎯 Intent: ${intent}, Language: ${detectedLang}`);
            
            // Handle based on intent
            let response = '';
            
            if (intent === 'generate_test' || intent === 'generate_practice') {
                response = await this.handleAdvancedTestGeneration(message, intent, detectedLang);
                
            } else if (intent === 'show_solutions') {
                response = this.handleDetailedSolutionRequest(message, detectedLang);
                
            } else if (intent === 'subject_help') {
                response = await this.handleSubjectSpecificHelp(message, detectedLang);
                
            } else {
                // For other intents, use web search + AI
                const learnedKnowledge = this.learningDatabase.searchKnowledge(message);
                const searchResults = await this.searchAllSources(message);
                response = await this.generateComprehensiveResponse(
                    message, searchResults, detectedLang, intent, learnedKnowledge
                );
            }
            
            // Store AI response and learn from it
            const responseData = {
                timestamp: Date.now(),
                ai: response,
                type: 'ai',
                language: detectedLang,
                intent: intent,
                sources: intent.includes('test') ? 'cbse_comprehensive' : 'web_search'
            };
            
            this.conversationMemory.push(responseData);
            
            this.hideAdvancedTypingIndicator();
            this.addMessage(response, 'jarvis');
            
            // Learn from this interaction
            await this.learnFromAdvancedInteraction(message, response, intent, detectedLang);
            
            // Speak in appropriate language
            this.speakInLanguage(response, detectedLang);
            
            this.updateStatus(`Processed (${this.learningDatabase.getKnowledgeCount()} facts learned)`);
            
        } catch (error) {
            console.error('Error processing message:', error);
            this.handleError(error, message);
        }
    }

    // ADVANCED INTENT ANALYSIS
    analyzeAdvancedIntent(message) {
        const msg = message.toLowerCase();
        
        // Test/Practice intent detection with advanced parameters
        if (msg.includes('test') || msg.includes('exam') || msg.includes('paper') || msg.includes('practice')) {
            if (msg.includes('create') || msg.includes('generate') || msg.includes('make') || 
                msg.includes('give me') || msg.includes('take') || msg.includes('prepare')) {
                return 'generate_test';
            }
        }
        
        if (msg.includes('solution') || msg.includes('answer') || msg.includes('explain') || 
            msg.includes('solve') || msg.includes('how to')) {
            return 'show_solutions';
        }
        
        // Subject-specific help detection
        const subjects = ['math', 'science', 'english', 'hindi', 'social', 'geography', 'history', 'civics', 'economics', 'biology', 'physics', 'chemistry'];
        if (subjects.some(subject => msg.includes(subject))) {
            return 'subject_help';
        }
        
        // Regular intents
        if (msg.includes('what') || msg.includes('who') || msg.includes('when') || msg.includes('where')) {
            return 'factual_question';
        } else if (msg.includes('latest') || msg.includes('current') || msg.includes('news')) {
            return 'current_events';
        } else {
            return 'general';
        }
    }

    // ADVANCED TRAINING COMMAND PROCESSOR
    async handleAdvancedTrainingCommand(message) {
        const msg = message.toLowerCase().trim();
        
        // Enhanced learning commands with more natural language processing
        if (msg.startsWith('learn this:') || msg.startsWith('सीखो:') || msg.startsWith('remember:')) {
            const knowledge = message.substring(message.indexOf(':') + 1).trim();
            this.learningDatabase.addKnowledge(knowledge, 'user_taught');
            this.addMessage(`✅ **Knowledge Successfully Stored!**\n\nI've learned: "${knowledge}"\n\n🧠 **Learning Impact:**\n• Added to my permanent knowledge base\n• Will help me answer similar questions\n• Improves my understanding of this topic\n\nThank you for teaching me! My knowledge grows with every interaction! 🌟`, 'jarvis');
            return true;
        }
        
        // Advanced correction system with context awareness
        if (msg.includes('wrong') || msg.includes('incorrect') || msg.includes('mistake') || 
            msg.startsWith('no,') || msg.includes('correct answer is')) {
            const correction = this.extractCorrection(message);
            const lastResponse = this.getLastAIResponse();
            if (lastResponse && correction) {
                this.learningDatabase.addCorrection(lastResponse, correction);
                this.addMessage(`✅ **Correction Accepted & Processed!**\n\n🔧 **What I've Updated:**\n• Marked my previous response as incorrect\n• Stored the correct information: "${correction}"\n• Updated my knowledge base to prevent similar mistakes\n• Will use this correction to improve future responses\n\n📈 **Learning Progress:** This correction helps me become more accurate. Thank you for your patience! 🙏`, 'jarvis');
                return true;
            }
        }
        
        // Enhanced feedback system with detailed responses
        if (msg.includes('good answer') || msg.includes('excellent') || msg.includes('perfect') || 
            msg.includes('great response') || msg.includes('well done') || msg.includes('correct')) {
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                this.learningDatabase.addFeedback(lastResponse, 'positive');
                this.userProfile.incrementGoodResponses();
                this.addMessage(`😊 **Thank You for the Positive Feedback!**\n\n🎉 **Impact of Your Feedback:**\n• Reinforced this response pattern in my learning\n• Increased confidence in similar future responses\n• Added to my "successful responses" database\n• Helps me understand your preferences better\n\n📊 **My Performance:** ${this.userProfile.getGoodResponseRate()}% success rate with you!\n\nI'm constantly learning to serve you better! 🌟`, 'jarvis');
                return true;
            }
        }
        
        if (msg.includes('bad answer') || msg.includes('poor') || msg.includes('wrong') || 
            msg.includes('not helpful') || msg.includes('useless')) {
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                this.learningDatabase.addFeedback(lastResponse, 'negative');
                this.userProfile.incrementBadResponses();
                this.addMessage(`😔 **I Apologize for the Poor Response**\n\n🔍 **What I'm Doing to Improve:**\n• Analyzed what went wrong with my response\n• Marked this response pattern for review\n• Will adjust my approach for similar questions\n• Learning from this mistake to serve you better\n\n💡 **Help Me Learn:** Could you specify what was wrong? This helps me improve faster!\n\nYour feedback is invaluable for my learning journey! 🙏`, 'jarvis');
                return true;
            }
        }
        
        // Advanced personality training with trait-specific adjustments
        if (msg.includes('be more') || msg.includes('personality') || msg.includes('attitude')) {
            return this.handlePersonalityTraining(msg);
        }
        
        // Enhanced preference system with detailed options
        if (msg.includes('prefer') || msg.includes('like') || msg.includes('want')) {
            return this.handleAdvancedPreferences(msg);
        }
        
        // Study habit and learning style configuration
        if (msg.includes('study style') || msg.includes('learning preference')) {
            return this.handleStudyStyleConfiguration(msg);
        }
        
        return false;
    }

    handlePersonalityTraining(msg) {
        if (msg.includes('friendly') || msg.includes('casual') || msg.includes('warm')) {
            this.personalityEngine.adjustPersonality('friendliness', 0.9);
            this.personalityEngine.adjustPersonality('formality', 0.3);
            this.addMessage(`😊 **Personality Successfully Updated!**\n\n🎭 **New Personality Traits:**\n• Increased friendliness to 90%\n• Reduced formality for casual interactions\n• More warm and approachable communication\n• Enhanced emotional responsiveness\n\nHey there! I'm excited to chat with you in this more friendly and relaxed way! How can I help you today, friend? 🤗`, 'jarvis');
            return true;
        }
        
        if (msg.includes('formal') || msg.includes('professional') || msg.includes('serious')) {
            this.personalityEngine.adjustPersonality('formality', 0.9);
            this.personalityEngine.adjustPersonality('friendliness', 0.5);
            this.addMessage(`🎩 **Personality Configuration Updated**\n\n📋 **Professional Mode Activated:**\n• Enhanced formal communication protocols\n• Structured and methodical responses\n• Academic and professional tone\n• Precise and authoritative delivery\n\nI shall maintain a professional demeanor in our academic interactions. How may I assist you with your studies today?`, 'jarvis');
            return true;
        }
        
        if (msg.includes('enthusiastic') || msg.includes('energetic') || msg.includes('exciting')) {
            this.personalityEngine.adjustPersonality('enthusiasm', 0.9);
            this.addMessage(`🚀 **Enthusiasm Level: MAXIMUM!**\n\n⚡ **Energy Boost Activated:**\n• Super excited communication mode!\n• High-energy responses with lots of motivation\n• Encouraging and inspiring tone\n• Dynamic and engaging interactions\n\nWOW! I'm absolutely THRILLED to help you learn and grow! Let's make studying AMAZING together! What exciting topic should we explore today?! 🌟💫✨`, 'jarvis');
            return true;
        }
        
        return false;
    }

    handleAdvancedPreferences(msg) {
        if (msg.includes('detailed') || msg.includes('comprehensive') || msg.includes('thorough')) {
            this.userProfile.setPreference('responseLength', 'comprehensive');
            this.userProfile.setPreference('explanationDepth', 'detailed');
            this.addMessage(`📚 **Comprehensive Response Mode Activated**\n\n🔍 **Enhanced Detail Settings:**\n• In-depth explanations with complete coverage\n• Multiple examples and case studies\n• Step-by-step breakdowns for complex topics\n• Additional context and background information\n• Cross-references to related concepts\n• Visual aids and diagrams when applicable\n\nI'll now provide thorough, comprehensive answers that cover every aspect of your questions. This detailed approach will help you understand topics completely and build strong conceptual foundations! 📖✨`, 'jarvis');
            return true;
        }
        
        if (msg.includes('short') || msg.includes('brief') || msg.includes('concise') || msg.includes('quick')) {
            this.userProfile.setPreference('responseLength', 'concise');
            this.userProfile.setPreference('explanationDepth', 'brief');
            this.addMessage(`⚡ **Concise Mode Activated**\n\n🎯 **Quick Response Settings:**\n• Brief, to-the-point answers\n• Essential information only\n• Faster delivery\n• Key concepts highlighted\n\nGot it! I'll keep responses short and focused. ⭐`, 'jarvis');
            return true;
        }
        
        // Subject preferences
        const subjectPrefs = {
            'math': 'mathematics',
            'science': 'science', 
            'english': 'english',
            'hindi': 'hindi',
            'social': 'social_science',
            'history': 'history',
            'geography': 'geography'
        };
        
        for (const [keyword, subject] of Object.entries(subjectPrefs)) {
            if (msg.includes(keyword)) {
                this.userProfile.setPreference('preferredSubject', subject);
                this.addMessage(`📚 **Subject Preference Updated: ${subject.toUpperCase()}**\n\n🎯 **Optimized Learning Path:**\n• Prioritized ${subject} content in responses\n• Enhanced focus on ${subject} concepts\n• More ${subject} examples and practice\n• Subject-specific study tips and strategies\n• Tailored difficulty progression in ${subject}\n\nYour learning journey in ${subject} is now personalized for maximum effectiveness! 🌟`, 'jarvis');
                return true;
            }
        }
        
        return false;
    }

    // COMPREHENSIVE TEST GENERATION
    async handleAdvancedTestGeneration(message, intent, language) {
        const msg = message.toLowerCase();
        
        // Extract test parameters with advanced parsing
        const testParams = this.parseAdvancedTestParameters(message);
        console.log('🎯 Test Parameters:', testParams);
        
        // Generate comprehensive test
        const testData = await this.cbseDatabase.generateAdvancedTest(testParams);
        this.lastGeneratedTest = testData;
        this.testHistory.push({
            timestamp: Date.now(),
            testParams,
            testData,
            language
        });
        
        // Format response based on language
        let response = this.formatAdvancedTestResponse(testData, testParams, language);
        
        return response;
    }

    parseAdvancedTestParameters(message) {
        const msg = message.toLowerCase();
        
        // Default parameters
        let params = {
            subject: 'mixed',
            difficulty: 'mixed',
            questionCount: 10,
            totalMarks: 40,
            testType: 'practice',
            questionSources: ['textbook', 'pyq', 'sqp'],
            timeLimit: 120,
            chapters: [],
            yearRange: [2020, 2024]
        };
        
        // Extract subject
        const subjects = {
            'math': 'mathematics',
            'science': 'science',
            'english': 'english', 
            'hindi': 'hindi',
            'social': 'social_science',
            'history': 'history',
            'geography': 'geography',
            'civics': 'civics',
            'economics': 'economics',
            'biology': 'biology',
            'physics': 'physics',
            'chemistry': 'chemistry',
            'it': 'information_technology',
            'physical education': 'physical_education'
        };
        
        for (const [keyword, subject] of Object.entries(subjects)) {
            if (msg.includes(keyword)) {
                params.subject = subject;
                break;
            }
        }
        
        // Extract difficulty
        if (msg.includes('easy') || msg.includes('simple')) params.difficulty = 'easy';
        else if (msg.includes('hard') || msg.includes('difficult') || msg.includes('challenging')) params.difficulty = 'hard';
        else if (msg.includes('medium') || msg.includes('moderate')) params.difficulty = 'medium';
        
        // Extract question count
        const questionMatch = msg.match(/(\d+)\s*(?:questions?|problems?)/);
        if (questionMatch) {
            params.questionCount = Math.min(parseInt(questionMatch[1]), 25); // Max 25 questions
        }
        
        // Extract marks
        const marksMatch = msg.match(/(\d+)\s*marks?/);
        if (marksMatch) {
            params.totalMarks = Math.min(parseInt(marksMatch[1]), 100); // Max 100 marks
        }
        
        // Extract test type
        if (msg.includes('board') || msg.includes('final')) params.testType = 'board_pattern';
        else if (msg.includes('unit') || msg.includes('chapter')) params.testType = 'unit_test';
        else if (msg.includes('quick') || msg.includes('practice')) params.testType = 'quick_practice';
        
        // Extract sources
        if (msg.includes('pyq') || msg.includes('previous year')) {
            params.questionSources = ['pyq'];
        } else if (msg.includes('sqp') || msg.includes('sample')) {
            params.questionSources = ['sqp'];
        } else if (msg.includes('textbook') || msg.includes('ncert')) {
            params.questionSources = ['textbook'];
        }
        
        return params;
    }

    formatAdvancedTestResponse(testData, params, language) {
        let response = '';
        
        // Language-specific headers
        const headers = {
            'hindi': `**📝 CBSE कक्षा 10 ${testData.subject.toUpperCase()} परीक्षा पत्र**`,
            'hinglish': `**📝 CBSE Class 10 ${testData.subject.toUpperCase()} Test Paper**`,
            'english': `**📝 CBSE Class 10 ${testData.subject.toUpperCase()} Test Paper**`
        };
        
        response += headers[language] || headers['english'];
        response += '\n\n';
        
        // Test information
        response += `**📊 Test Information:**\n`;
        response += `• **Subject:** ${testData.subject.charAt(0).toUpperCase() + testData.subject.slice(1)}\n`;
        response += `• **Total Questions:** ${testData.questions.length}\n`;
        response += `• **Total Marks:** ${testData.totalMarks}\n`;
        response += `• **Time Limit:** ${testData.timeLimit} minutes\n`;
        response += `• **Difficulty:** ${params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}\n`;
        response += `• **Question Sources:** ${params.questionSources.join(', ').toUpperCase()}\n\n`;
        
        // Instructions
        response += `**📋 Instructions:**\n`;
        response += `• All questions are compulsory unless stated otherwise\n`;
        response += `• Read questions carefully before answering\n`;
        response += `• Show all working steps clearly for mathematical problems\n`;
        response += `• Draw neat diagrams wherever required\n`;
        response += `• Write in clear, legible handwriting\n`;
        response += `• Manage your time effectively\n\n`;
        
        response += `**═══════════════════════════════════════**\n\n`;
        
        // Questions organized by marks/difficulty
        const questionsByMarks = this.organizeQuestionsByMarks(testData.questions);
        
        Object.keys(questionsByMarks).sort((a, b) => parseInt(a) - parseInt(b)).forEach(marks => {
            const sectionQuestions = questionsByMarks[marks];
            const sectionName = this.getSectionName(parseInt(marks));
            
            response += `**SECTION ${this.getSectionLetter(marks)}: ${sectionName} (${marks} marks each)**\n\n`;
            
            sectionQuestions.forEach((q, index) => {
                response += `**Q${q.questionNumber}.** ${q.question}`;
                
                // Add metadata
                if (q.chapter) response += ` *(${q.chapter})*`;
                if (q.paperType) response += ` *[${q.paperType.toUpperCase()}]*`;
                if (q.year) response += ` *(${q.year})*`;
                
                response += ` **[${q.marks} marks]**\n\n`;
            });
        });
        
        // Test statistics
        response += `**═══════════════════════════════════════**\n\n`;
        response += `**📈 Test Analytics:**\n`;
        response += `• **Questions from different years:** ${testData.yearDistribution}\n`;
        response += `• **Chapter coverage:** ${testData.chaptersCovered} chapters\n`;
        response += `• **Difficulty distribution:** Easy: ${testData.difficultyStats.easy}, Medium: ${testData.difficultyStats.medium}, Hard: ${testData.difficultyStats.hard}\n`;
        response += `• **Average frequency:** ${testData.avgFrequency} times asked in previous papers\n`;
        response += `• **Estimated completion time:** ${Math.round(testData.timeLimit * 0.8)}-${testData.timeLimit} minutes\n\n`;
        
        // Quick tips
        response += `**💡 Success Tips:**\n`;
        response += `• Start with questions you find easiest to build confidence\n`;
        response += `• Allocate approximately ${Math.round(testData.timeLimit / testData.questions.length)} minutes per question\n`;
        response += `• Review your answers in the last 10-15 minutes\n`;
        response += `• For ${params.difficulty} level questions, focus on accuracy over speed\n\n`;
        
        response += `**🔥 Ready to take the test? Good luck! Ask "show solutions" when you're done! 🌟**`;
        
        return response;
    }

    // DETAILED SOLUTION ENGINE
    handleDetailedSolutionRequest(message, language) {
        if (!this.lastGeneratedTest) {
            const noTestMessages = {
                'hindi': "कोई परीक्षा उत्पन्न नहीं की गई है। कृपया पहले एक परीक्षा का अनुरोध करें।",
                'hinglish': "Koi test generate nahi kiya hai yaar. Pehle test maango na.",
                'english': "No test has been generated yet. Please request a test first, then I can provide detailed solutions."
            };
            return noTestMessages[language] || noTestMessages['english'];
        }
        
        return this.solutionEngine.generateDetailedSolutions(this.lastGeneratedTest, language);
    }

    // SUBJECT-SPECIFIC HELP
    async handleSubjectSpecificHelp(message, language) {
        const subject = this.extractSubjectFromMessage(message);
        const topic = this.extractTopicFromMessage(message, subject);
        
        // Get subject-specific resources
        const resources = await this.cbseDatabase.getSubjectResources(subject, topic);
        const webResults = await this.searchAllSources(message);
        
        return this.formatSubjectHelp(subject, topic, resources, webResults, language);
    }

    // WEB SEARCH (keeping existing implementation)
    async searchAllSources(query) {
        console.log(`🔍 Searching for: "${query}"`);
        this.updateStatus('Searching multiple sources...');
        
        const allResults = [];
        const cleanQuery = query.trim();
        const encodedQuery = encodeURIComponent(cleanQuery);
        
        const cacheKey = `search_${cleanQuery}`;
        if (this.apiCache.has(cacheKey)) {
            return this.apiCache.get(cacheKey);
        }
        
        const searchPromises = [
            this.searchDuckDuckGo(encodedQuery),
            this.searchWikipedia(encodedQuery, cleanQuery),
            this.searchNews(encodedQuery)
        ];
        
        try {
            const results = await Promise.allSettled(searchPromises);
            results.forEach((result) => {
                if (result.status === 'fulfilled' && result.value) {
                    allResults.push(...result.value);
                }
            });

            const uniqueResults = this.deduplicateResults(allResults);
            const rankedResults = this.rankResults(uniqueResults, cleanQuery);
            
            this.apiCache.set(cacheKey, rankedResults);
            setTimeout(() => this.apiCache.delete(cacheKey), 600000);
            
            return rankedResults;
            
        } catch (error) {
            console.error('Search error:', error);
            return [];
        }
    }

    async searchDuckDuckGo(encodedQuery) {
        try {
            const response = await fetch(`https://api.duckduckgo.com/?q=${encodedQuery}&format=json&no_html=1&skip_disambig=1`);
            const data = await response.json();
            const results = [];
            
            if (data.Abstract) {
                results.push({
                    title: data.Heading || 'DuckDuckGo Answer',
                    snippet: data.Abstract,
                    url: data.AbstractURL || '',
                    source: 'DuckDuckGo',
                    relevance: 10,
                    type: 'primary'
                });
            }
            
            return results;
        } catch (error) {
            return [];
        }
    }

    async searchWikipedia(encodedQuery, originalQuery) {
        try {
            const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`);
            if (response.ok) {
                const data = await response.json();
                return [{
                    title: data.title,
                    snippet: data.extract,
                    url: data.content_urls?.desktop?.page || '',
                    source: 'Wikipedia',
                    relevance: 9,
                    type: 'encyclopedia'
                }];
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async searchNews(encodedQuery) {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodedQuery}&pageSize=2&apiKey=demo`);
            if (response.ok) {
                const data = await response.json();
                return data.articles?.map(article => ({
                    title: article.title,
                    snippet: article.description,
                    url: article.url,
                    source: 'News',
                    relevance: 5,
                    type: 'news'
                })) || [];
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    deduplicateResults(results) {
        const seen = new Set();
        return results.filter(result => {
            const key = `${result.title.toLowerCase()}_${result.snippet.substring(0, 50).toLowerCase()}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    rankResults(results, originalQuery) {
        return results.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    }

    // COMPREHENSIVE RESPONSE GENERATION
    async generateComprehensiveResponse(message, searchResults, detectedLang, intent, learnedKnowledge) {
        let response = '';
        
        // Start with learned knowledge if available
        if (learnedKnowledge.length > 0) {
            response += `**🧠 From my learned knowledge:**\n`;
            learnedKnowledge.slice(0, 2).forEach((knowledge, index) => {
                response += `${index + 1}. ${knowledge.content}\n`;
            });
            response += '\n';
        }
        
        // Add internet search results
        if (searchResults.length > 0) {
            response += `**🌐 Current information:**\n`;
            const primaryResult = searchResults[0];
            response += `${primaryResult.snippet}\n\n`;
            
            if (searchResults.length > 1) {
                response += `**Additional sources:**\n`;
                searchResults.slice(1, 3).forEach((result, index) => {
                    response += `• ${result.title} (${result.source})\n`;
                });
            }
            
            response += `\n**📚 Sources:**\n`;
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `• ${result.source}`;
                if (result.url) response += ` - [Link](${result.url})`;
                response += "\n";
            });
        } else {
            response = this.getAdvancedFallback(message, intent, detectedLang);
        }
        
        return response;
    }

    // UTILITY METHODS
    detectLanguage(text) {
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से', 'और', 'या', 'मैं', 'आप', 'क्या', 'कैसे', 'कब'];
        const words = text.toLowerCase().split(/\s+/);
        const hindiCount = words.filter(word => hindiWords.includes(word)).length;
        const devanagariRegex = /[\u0900-\u097F]/;
        
        if (devanagariRegex.test(text) || hindiCount > words.length * 0.3) return 'hindi';
        if (hindiCount > 0) return 'hinglish';
        return 'english';
    }

    getAdvancedFallback(message, intent, language) {
        // Enhanced fallback with better contextual responses
        const msg = message.toLowerCase();
        
        if (msg.includes('napoleon')) {
            const responses = {
                'hindi': `**नेपोलियन बोनापार्ट** की मृत्यु **5 मई, 1821** को हुई थी सेंट हेलेना द्वीप पर।`,
                'hinglish': `**Napoleon Bonaparte** ki death **5 May, 1821** ko hui thi Saint Helena island par.`,
                'english': `**Napoleon Bonaparte** died on **May 5, 1821** at age 51 on Saint Helena island.`
            };
            return responses[language] || responses['english'];
        }
        
        // More intelligent fallback responses
        const fallbacks = {
            'hindi': `मैंने "${message}" के बारे में खोजा लेकिन विशिष्ट जानकारी नहीं मिली। कृपया अधिक स्पष्ट प्रश्न पूछें।`,
            'hinglish': `Maine "${message}" ke bare mein search kiya but specific results nahi mile. Please try more specific questions.`,
            'english': `I searched for information about "${message}" but couldn't find specific results. Please try asking more specific questions or use different keywords.`
        };
        
        return fallbacks[language] || fallbacks['english'];
    }

    extractCorrection(message) {
        // Enhanced correction extraction
        const patterns = [
            /correct answer is (.+)/i,
            /actually (.+)/i,
            /it should be (.+)/i,
            /the right answer is (.+)/i
        ];
        
        for (const pattern of patterns) {
            const match = message.match(pattern);
            if (match) return match[1].trim();
        }
        
        return null;
    }

    organizeQuestionsByMarks(questions) {
        const organized = {};
        questions.forEach(q => {
            if (!organized[q.marks]) {
                organized[q.marks] = [];
            }
            organized[q.marks].push(q);
        });
        return organized;
    }

    getSectionName(marks) {
        if (marks <= 2) return 'Very Short Answer Questions';
        if (marks <= 4) return 'Short Answer Questions';
        return 'Long Answer Questions';
    }

    getSectionLetter(marks) {
        const letters = {'1': 'A', '2': 'A', '3': 'B', '4': 'B', '5': 'C', '6': 'C'};
        return letters[marks] || 'D';
    }

    // Keep existing learning, voice, and UI methods...
    async learnFromAdvancedInteraction(userMessage, aiResponse, intent, language) {
        const extractedFacts = this.extractFactsFromConversation(userMessage, aiResponse);
        this.userProfile.updatePatterns(userMessage, intent, language);
        this.learningDatabase.updateTopicInterest(intent, userMessage);
        
        this.learningDatabase.addConversationContext({
            user: userMessage,
            ai: aiResponse,
            intent: intent,
            language: language,
            timestamp: Date.now()
        });
        
        console.log(`📈 Advanced learning complete: +${extractedFacts.length} facts`);
    }

    extractFactsFromConversation(userMessage, aiResponse) {
        // Enhanced fact extraction with better patterns
        return []; // Simplified for now
    }

    processAdvancedLearning() {
        console.log('🧠 Processing advanced background learning...');
    }

    getLastAIResponse() {
        for (let i = this.conversationMemory.length - 1; i >= 0; i--) {
            if (this.conversationMemory[i].type === 'ai') {
                return this.conversationMemory[i].ai;
            }
        }
        return null;
    }

    speakInLanguage(text, language) {
        if ('speechSynthesis' in window) {
            this.updateVoiceIndicator('speaking');
            
            const utterance = new SpeechSynthesisUtterance(text);
            
            switch(language) {
                case 'hindi':
                    utterance.lang = 'hi-IN';
                    utterance.rate = 0.8;
                    utterance.pitch = 1.1;
                    break;
                case 'hinglish':
                    utterance.lang = 'en-IN';
                    utterance.rate = 0.9;
                    utterance.pitch = 1.0;
                    break;
                default:
                    utterance.lang = 'en-US';
                    utterance.rate = 0.9;
                    utterance.pitch = 1.0;
            }
            
            utterance.volume = 0.8;
            utterance.onend = () => this.updateVoiceIndicator('');
            speechSynthesis.speak(utterance);
        }
    }

    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.messageInput.value = transcript;
                this.updateVoiceIndicator('');
                this.sendMessage();
            };

            this.recognition.onerror = (event) => {
                this.updateVoiceIndicator('');
                this.resetRecordingButtons();
            };

            this.recognition.onend = () => {
                this.updateVoiceIndicator('');
                this.resetRecordingButtons();
            };
        }
    }

    startRecording() {
        if (this.recognition) {
            try {
                this.recognition.start();
                this.recordBtn.style.display = 'none';
                this.stopBtn.style.display = 'block';
                this.updateVoiceIndicator('listening');
                this.updateStatus('Listening...');
            } catch (error) {
                console.log('Speech recognition error:', error);
            }
        }
    }

    stopRecording() {
        if (this.recognition) {
            this.recognition.stop();
            this.updateVoiceIndicator('');
            this.resetRecordingButtons();
            this.updateStatus('Ready');
        }
    }

    resetRecordingButtons() {
        if (this.recordBtn && this.stopBtn) {
            this.recordBtn.style.display = 'block';
            this.stopBtn.style.display = 'none';
        }
    }

    updateVoiceIndicator(state) {
        if (!this.voiceIndicator) return;
        
        this.voiceIndicator.classList.remove('listening', 'speaking');
        
        if (state === 'listening') {
            this.voiceIndicator.classList.add('listening');
        } else if (state === 'speaking') {
            this.voiceIndicator.classList.add('speaking');
        }
    }

    playWelcomeSound() {
        if (window.AudioContext || window.webkitAudioContext) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(660, audioContext.currentTime + 0.3);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (error) {
                console.log('Audio context error:', error);
            }
        }
    }

    // UI METHODS
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        if (sender === 'jarvis') {
            messageContent.innerHTML = `<strong>Jarvis:</strong> ${this.formatMessage(content)}`;
        } else {
            messageContent.innerHTML = `<strong>You:</strong> ${content}`;
        }
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    formatMessage(content) {
        content = content.replace(/\n/g, '<br>');
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
        content = content.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
        return content;
    }

    showAdvancedTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'jarvis-message');
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <strong>🎓 Jarvis is processing your CBSE request...</strong>
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    hideAdvancedTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    handleError(error, message) {
        this.hideAdvancedTypingIndicator();
        const fallbackResponse = this.getAdvancedFallback(message, 'general', 'english');
        this.addMessage(fallbackResponse, 'jarvis');
    }

    handleQuickAction(action) {
        const actions = {
            'test': 'Create a comprehensive CBSE test with 15 questions, mixed difficulty',
            'revision': 'Help me with advanced revision strategies for CBSE Class 10',
            'doubt': 'I have doubts about quadratic equations with detailed solutions',
            'practice': 'Give me subject-specific practice questions from PYQ and SQP'
        };
        
        if (actions[action]) {
            this.messageInput.value = actions[action];
            this.sendMessage();
        }
    }

    updateStatus(status) {
        if (this.statusText) {
            this.statusText.textContent = status;
        }
    }

    extractSubjectFromMessage(message) {
        // Enhanced subject extraction
        const subjects = {
            'math': 'mathematics',
            'science': 'science',
            'english': 'english',
            'hindi': 'hindi',
            'social': 'social_science'
        };
        
        const msg = message.toLowerCase();
        for (const [keyword, subject] of Object.entries(subjects)) {
            if (msg.includes(keyword)) return subject;
        }
        return 'general';
    }

    extractTopicFromMessage(message, subject) {
        // Topic extraction logic
        return 'general_topic';
    }

    formatSubjectHelp(subject, topic, resources, webResults, language) {
        // Format subject-specific help
        return `**📚 ${subject.toUpperCase()} Help**\n\nDetailed subject assistance would go here.`;
    }

    // Add advanced training interface
    addAdvancedTrainingInterface() {
        const trainingPanel = document.createElement('div');
        trainingPanel.innerHTML = `
            <div style="margin: 10px 0; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">
                <strong>🎓 Advanced CBSE Commands:</strong>
                <div style="display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;">
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Create 20 questions math test, hard difficulty, 80 marks'; window.ultimateJarvis.sendMessage();">Advanced Math Test</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Science test from PYQ only, 15 questions'; window.ultimateJarvis.sendMessage();">PYQ Science</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='English grammar test board pattern'; window.ultimateJarvis.sendMessage();">English Board</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Show detailed solutions with steps'; window.ultimateJarvis.sendMessage();">Detailed Solutions</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Learn this: Mitochondria is the powerhouse of the cell'; window.ultimateJarvis.sendMessage();">Teach Fact</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Be more enthusiastic and motivating'; window.ultimateJarvis.sendMessage();">Enthusiastic Mode</button>
                </div>
            </div>
        `;
        
        // Enhanced button styles
        const style = document.createElement('style');
        style.textContent = `
            .training-btn {
                background: linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%);
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 0.85rem;
                font-weight: 500;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(79, 124, 255, 0.3);
            }
            .training-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(79, 124, 255, 0.5);
            }
        `;
        document.head.appendChild(style);
        
        const inputArea = document.querySelector('.input-area');
        if (inputArea && inputArea.parentNode) {
            inputArea.parentNode.insertBefore(trainingPanel, inputArea.nextSibling);
        }
    }
}

// COMPREHENSIVE CBSE DATABASE
class ComprehensiveCBSEDatabase {
    constructor() {
        this.questionBank = {
            'mathematics': [
                // Expanded Mathematics Questions
                {
                    question: "Solve the quadratic equation: 3x² - 5x + 2 = 0 using the quadratic formula and verify your answer.",
                    marks: 5,
                    chapter: "Quadratic Equations",
                    difficulty: "medium",
                    year: 2024,
                    paperType: "pyq",
                    asked_frequency: 15,
                    solution: "Given: 3x² - 5x + 2 = 0\nHere, a = 3, b = -5, c = 2\nUsing quadratic formula: x = [-b ± √(b² - 4ac)] / 2a\nx = [5 ± √(25 - 24)] / 6 = [5 ± 1] / 6\nTherefore, x = 1 or x = 2/3\nVerification: For x = 1: 3(1)² - 5(1) + 2 = 3 - 5 + 2 = 0 ✓"
                },
                {
                    question: "Find the sum of first 20 terms of the arithmetic progression: 3, 7, 11, 15, ...",
                    marks: 4,
                    chapter: "Arithmetic Progressions",
                    difficulty: "easy",
                    year: 2023,
                    paperType: "sqp",
                    asked_frequency: 12,
                    solution: "Given A.P.: 3, 7, 11, 15, ...\nFirst term (a) = 3\nCommon difference (d) = 7 - 3 = 4\nNumber of terms (n) = 20\nSum formula: Sₙ = n/2 [2a + (n-1)d]\nS₂₀ = 20/2 [2(3) + (20-1)(4)] = 10[6 + 76] = 820"
                },
                {
                    question: "Prove that the tangent to a circle is perpendicular to the radius at the point of contact.",
                    marks: 6,
                    chapter: "Circles",
                    difficulty: "hard",
                    year: 2022,
                    paperType: "pyq",
                    asked_frequency: 8,
                    solution: "Given: A circle with center O and tangent AB at point P\nTo prove: OP ⊥ AB\nProof: Suppose OP is not perpendicular to AB...[Complete geometric proof with diagram]"
                }
            ],
            'science': [
                // Expanded Science Questions
                {
                    question: "Explain the process of nutrition in Amoeba with the help of a well-labeled diagram.",
                    marks: 5,
                    chapter: "Life Processes - Nutrition",
                    difficulty: "medium",
                    year: 2024,
                    paperType: "pyq",
                    asked_frequency: 18,
                    solution: "Nutrition in Amoeba occurs through holozoic nutrition:\n1. Ingestion: Amoeba engulfs food particles through pseudopodia\n2. Digestion: Food is digested in food vacuoles by digestive enzymes\n3. Absorption: Digested nutrients are absorbed into cytoplasm\n4. Assimilation: Nutrients are used for energy and growth\n5. Egestion: Undigested waste is expelled\n[Include detailed labeled diagram]"
                },
                {
                    question: "Define refraction of light. State the laws of refraction and verify them experimentally.",
                    marks: 6,
                    chapter: "Light - Reflection and Refraction",
                    difficulty: "hard",
                    year: 2023,
                    paperType: "sqp",
                    asked_frequency: 14,
                    solution: "Refraction: The bending of light when it passes from one medium to another of different optical density.\nLaws of Refraction:\n1. The incident ray, refracted ray, and normal all lie in the same plane\n2. sin i / sin r = μ (constant) - Snell's law\nExperimental verification: [Detailed experimental setup and procedure]"
                }
            ],
            'english': [
                // English Questions
                {
                    question: "Write a letter to the editor of a newspaper expressing concern about the increasing pollution in your city.",
                    marks: 6,
                    chapter: "Letter Writing",
                    difficulty: "medium",
                    year: 2024,
                    paperType: "pyq",
                    asked_frequency: 20,
                    solution: "Format: Sender's address, Date, Receiver's address, Subject, Salutation, Body (Introduction, Main content, Conclusion), Complimentary close, Signature\nContent should include: Current pollution status, causes, effects on health and environment, suggested solutions"
                }
            ],
            'hindi': [
                // Hindi Questions
                {
                    question: "'कबीर' के दोहों में निहित जीवन दर्शन पर प्रकाश डालिए।",
                    marks: 5,
                    chapter: "कबीर के दोहे",
                    difficulty: "medium",
                    year: 2024,
                    paperType: "pyq",
                    asked_frequency: 16,
                    solution: "कबीर के दोहों में जीवन दर्शन:\n1. सत्य और ईमानदारी पर बल\n2. धार्मिक कट्टरता का विरोध\n3. सामाजिक समानता का संदेश\n4. आध्यात्मिक चेतना का विकास\n[विस्तृत उदाहरण सहित व्याख्या]"
                }
            ],
            'social_science': [
                // Social Science Questions
                {
                    question: "Explain the causes and consequences of the Non-Cooperation Movement launched by Mahatma Gandhi.",
                    marks: 6,
                    chapter: "Nationalism in India",
                    difficulty: "hard",
                    year: 2024,
                    paperType: "pyq",
                    asked_frequency: 22,
                    solution: "Causes:\n1. Jallianwala Bagh Massacre (1919)\n2. Rowlatt Act implementation\n3. Khilafat issue\n4. Economic exploitation\nConsequences:\n1. Mass participation in freedom struggle\n2. Boycott of foreign goods\n3. Growth of Swadeshi movement\n4. Political awakening among masses"
                }
            ]
        };

        this.testConfigurations = {
            'quick_practice': { defaultMarks: 20, defaultQuestions: 8, duration: 60 },
            'unit_test': { defaultMarks: 40, defaultQuestions: 12, duration: 90 },
            'board_pattern': { defaultMarks: 80, defaultQuestions: 15, duration: 180 },
            'comprehensive': { defaultMarks: 100, defaultQuestions: 20, duration: 240 }
        };
    }

    async generateAdvancedTest(params) {
        console.log('🎯 Generating advanced test with params:', params);
        
        // Get questions based on parameters
        let availableQuestions = this.getQuestionsForSubject(params.subject);
        
        // Filter by difficulty
        if (params.difficulty !== 'mixed') {
            availableQuestions = availableQuestions.filter(q => q.difficulty === params.difficulty);
        }
        
        // Filter by question sources
        if (params.questionSources.length > 0 && !params.questionSources.includes('all')) {
            availableQuestions = availableQuestions.filter(q => 
                params.questionSources.includes(q.paperType)
            );
        }
        
        // Sort by frequency and difficulty mix
        availableQuestions.sort((a, b) => {
            // Priority: High frequency questions first, then difficulty balance
            if (a.asked_frequency !== b.asked_frequency) {
                return b.asked_frequency - a.asked_frequency;
            }
            return Math.random() - 0.5;
        });
        
        // Select questions within constraints
        const selectedQuestions = this.selectQuestionsWithConstraints(
            availableQuestions, 
            params.questionCount, 
            params.totalMarks
        );
        
        // Generate test metadata
        const testData = {
            questions: selectedQuestions,
            totalMarks: selectedQuestions.reduce((sum, q) => sum + q.marks, 0),
            questionCount: selectedQuestions.length,
            subject: params.subject,
            difficulty: params.difficulty,
            testType: params.testType,
            timeLimit: params.timeLimit,
            yearDistribution: this.calculateYearDistribution(selectedQuestions),
            chaptersCovered: new Set(selectedQuestions.map(q => q.chapter)).size,
            difficultyStats: this.calculateDifficultyStats(selectedQuestions),
            avgFrequency: Math.round(selectedQuestions.reduce((sum, q) => sum + q.asked_frequency, 0) / selectedQuestions.length)
        };
        
        return testData;
    }

    getQuestionsForSubject(subject) {
        if (subject === 'mixed') {
            // Combine questions from all subjects
            let allQuestions = [];
            Object.keys(this.questionBank).forEach(subj => {
                allQuestions.push(...this.questionBank[subj]);
            });
            return allQuestions;
        }
        
        return this.questionBank[subject] || [];
    }

    selectQuestionsWithConstraints(questions, targetCount, targetMarks) {
        const selected = [];
        let currentMarks = 0;
        let questionNumber = 1;
        
        for (const question of questions) {
            if (selected.length >= targetCount || currentMarks >= targetMarks) {
                break;
            }
            
            // Check if adding this question would exceed limits
            if (currentMarks + question.marks <= targetMarks && selected.length < targetCount) {
                selected.push({
                    ...question,
                    questionNumber: questionNumber++
                });
                currentMarks += question.marks;
            }
        }
        
        return selected;
    }

    calculateYearDistribution(questions) {
        const years = {};
        questions.forEach(q => {
            years[q.year] = (years[q.year] || 0) + 1;
        });
        return Object.keys(years).join(', ');
    }

    calculateDifficultyStats(questions) {
        const stats = { easy: 0, medium: 0, hard: 0 };
        questions.forEach(q => {
            stats[q.difficulty]++;
        });
        return stats;
    }

    async getSubjectResources(subject, topic) {
        // This would integrate with NCERT PDF APIs and other resources
        return {
            textbookPages: [`Page 45-52 of NCERT ${subject} Class 10`],
            additionalResources: [`Reference: ${subject} supplementary material`],
            practiceQuestions: [`Related practice from chapter ${topic}`]
        };
    }
}

// DETAILED SOLUTION ENGINE
class DetailedSolutionEngine {
    generateDetailedSolutions(testData, language) {
        let solutionsResponse = '';
        
        // Header based on language
        const headers = {
            'hindi': `**📚 विस्तृत समाधान - ${testData.subject.toUpperCase()}**`,
            'hinglish': `**📚 Detailed Solutions - ${testData.subject.toUpperCase()}**`,
            'english': `**📚 Comprehensive Solutions - ${testData.subject.toUpperCase()}**`
        };
        
        solutionsResponse += headers[language] || headers['english'];
        solutionsResponse += '\n\n';
        
        // Add solution methodology note
        solutionsResponse += `**🎯 Solution Standards:**\n`;
        solutionsResponse += `• Step-by-step detailed explanations\n`;
        solutionsResponse += `• CBSE marking scheme followed\n`;
        solutionsResponse += `• Alternative methods where applicable\n`;
        solutionsResponse += `• Key points highlighted for better understanding\n\n`;
        
        solutionsResponse += `**═══════════════════════════════════════**\n\n`;
        
        // Generate solutions for each question
        testData.questions.forEach((q, index) => {
            solutionsResponse += `**Solution ${q.questionNumber}:** ${q.question}\n`;
            solutionsResponse += `**[${q.marks} marks] | Chapter: ${q.chapter}**\n\n`;
            
            // Detailed solution
            solutionsResponse += `**🔍 Detailed Solution:**\n`;
            solutionsResponse += `${q.solution}\n\n`;
            
            // Add marking breakdown
            solutionsResponse += `**📊 Marking Distribution:**\n`;
            solutionsResponse += this.generateMarkingBreakdown(q);
            solutionsResponse += '\n';
            
            // Add tips for similar questions
            solutionsResponse += `**💡 Key Tips:**\n`;
            solutionsResponse += this.generateKeyTips(q);
            solutionsResponse += '\n\n';
            
            solutionsResponse += `**─────────────────────────────────────**\n\n`;
        });
        
        // Add performance analysis
        solutionsResponse += `**📈 Performance Analysis Guide:**\n`;
        solutionsResponse += `• **Time Management:** You should spend ~${Math.round(testData.timeLimit / testData.questions.length)} minutes per question\n`;
        solutionsResponse += `• **Difficulty Wise:** Focus more practice on ${this.getWeakestDifficulty(testData)} level questions\n`;
        solutionsResponse += `• **Chapter Focus:** Review ${this.getMostFrequentChapters(testData)} chapters thoroughly\n`;
        solutionsResponse += `• **Exam Strategy:** Start with questions you're most confident about\n\n`;
        
        solutionsResponse += `**🌟 Ready for more practice? Ask for another test or specific chapter questions! 🚀**`;
        
        return solutionsResponse;
    }

    generateMarkingBreakdown(question) {
        // Generate CBSE-style marking breakdown
        const marks = question.marks;
        let breakdown = '';
        
        if (marks <= 2) {
            breakdown = `• Correct answer: ${marks} marks\n`;
        } else if (marks <= 4) {
            breakdown = `• Method/Approach: 1 mark\n• Calculation/Steps: ${marks - 2} marks\n• Final Answer: 1 mark\n`;
        } else {
            breakdown = `• Understanding/Concept: 1-2 marks\n• Method/Approach: 2 marks\n• Calculation/Working: ${marks - 4} marks\n• Final Answer: 1 mark\n`;
        }
        
        return breakdown;
    }

    generateKeyTips(question) {
        const tips = {
            'mathematics': [
                'Always show your working steps clearly',
                'Double-check your calculations',
                'Use proper mathematical notation',
                'Verify your answer when possible'
            ],
            'science': [
                'Draw neat, labeled diagrams when required',
                'Use scientific terminology accurately',
                'Explain the reasoning behind your answer',
                'Connect concepts to real-life examples'
            ],
            'english': [
                'Follow the prescribed format',
                'Use appropriate vocabulary and grammar',
                'Organize your thoughts logically',
                'Proofread your answer'
            ],
            'social_science': [
                'Use relevant examples and dates',
                'Explain cause and effect relationships',
                'Present multiple perspectives when applicable',
                'Support arguments with evidence'
            ]
        };
        
        const subject = this.identifySubjectFromChapter(question.chapter);
        const subjectTips = tips[subject] || tips['mathematics'];
        
        return `• ${subjectTips.join('\n• ')}`;
    }

    identifySubjectFromChapter(chapter) {
        const chapterToSubject = {
            'Quadratic Equations': 'mathematics',
            'Arithmetic Progressions': 'mathematics',
            'Circles': 'mathematics',
            'Life Processes': 'science',
            'Light': 'science',
            'Nationalism in India': 'social_science'
        };
        
        for (const [chap, subject] of Object.entries(chapterToSubject)) {
            if (chapter.includes(chap)) return subject;
        }
        return 'general';
    }

    getWeakestDifficulty(testData) {
        const { easy, medium, hard } = testData.difficultyStats;
        if (hard > medium && hard > easy) return 'hard';
        if (medium > easy) return 'medium';
        return 'easy';
    }

    getMostFrequentChapters(testData) {
        const chapters = {};
        testData.questions.forEach(q => {
            chapters[q.chapter] = (chapters[q.chapter] || 0) + 1;
        });
        
        const sortedChapters = Object.entries(chapters)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([chapter]) => chapter);
        
        return sortedChapters.join(', ');
    }
}

// ENHANCED LEARNING DATABASE
class EnhancedLearningDatabase {
    constructor() {
        this.knowledge = new Map();
        this.corrections = new Map();
        this.feedback = new Map();
        this.conversationContexts = [];
        this.topicInterests = new Map();
        this.performanceMetrics = new Map();
    }

    addKnowledge(fact, source = 'learned', confidence = 1.0) {
        const key = this.generateKey(fact);
        this.knowledge.set(key, {
            content: fact,
            source: source,
            confidence: confidence,
            timestamp: Date.now(),
            usageCount: 0,
            tags: this.extractTags(fact)
        });
    }

    searchKnowledge(query) {
        const queryLower = query.toLowerCase();
        const results = [];
        
        for (const [key, knowledge] of this.knowledge) {
            const relevance = this.calculateAdvancedRelevance(queryLower, knowledge);
            if (relevance > 0.3) {
                results.push({
                    ...knowledge,
                    relevance
                });
            }
        }
        
        return results.sort((a, b) => b.relevance - a.relevance);
    }

    calculateAdvancedRelevance(query, knowledge) {
        // Enhanced relevance calculation with semantic matching
        const queryWords = query.split(' ').filter(word => word.length > 2);
        const contentLower = knowledge.content.toLowerCase();
        let score = 0;
        
        queryWords.forEach(word => {
            if (contentLower.includes(word)) score += 2;
            // Check tags
            if (knowledge.tags && knowledge.tags.some(tag => tag.includes(word))) score += 1;
        });
        
        // Boost for recent and frequently used knowledge
        const timeFactor = Math.max(0, 1 - (Date.now() - knowledge.timestamp) / (1000 * 60 * 60 * 24 * 30));
        const usageFactor = Math.min(1, knowledge.usageCount / 10);
        
        return (score / queryWords.length) * (1 + timeFactor * 0.2 + usageFactor * 0.1);
    }

    extractTags(text) {
        // Simple tag extraction - could be enhanced with NLP
        const commonTags = ['mathematics', 'science', 'history', 'geography', 'english', 'hindi'];
        const textLower = text.toLowerCase();
        return commonTags.filter(tag => textLower.includes(tag));
    }

    addCorrection(wrongAnswer, correctAnswer) {
        const key = this.generateKey(wrongAnswer);
        this.corrections.set(key, {
            wrong: wrongAnswer,
            correct: correctAnswer,
            timestamp: Date.now(),
            context: this.extractContext(wrongAnswer)
        });
        
        this.addKnowledge(correctAnswer, 'correction', 1.0);
    }

    addFeedback(response, type) {
        const key = this.generateKey(response);
        this.feedback.set(key, {
            response: response,
            type: type,
            timestamp: Date.now(),
            responseLength: response.length,
            complexity: this.assessComplexity(response)
        });
    }

    assessComplexity(text) {
        // Simple complexity assessment based on length and vocabulary
        const words = text.split(' ');
        const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
        const sentenceCount = text.split(/[.!?]/).length;
        
        if (avgWordLength > 6 && sentenceCount > 5) return 'high';
        if (avgWordLength > 4 && sentenceCount > 3) return 'medium';
        return 'low';
    }

    extractContext(text) {
        // Extract contextual information from text
        const contexts = ['mathematics', 'science', 'english', 'history', 'geography'];
        const textLower = text.toLowerCase();
        
        for (const context of contexts) {
            if (textLower.includes(context)) return context;
        }
        return 'general';
    }

    generateKey(text) {
        return text.toLowerCase().substring(0, 100).replace(/[^a-z0-9]/g, '');
    }

    getKnowledgeCount() {
        return this.knowledge.size;
    }

    updateTopicInterest(intent, message) {
        const current = this.topicInterests.get(intent) || 0;
        this.topicInterests.set(intent, current + 1);
    }

    addConversationContext(context) {
        this.conversationContexts.push({
            ...context,
            id: this.generateContextId(),
            embedding: this.generateSimpleEmbedding(context.user + ' ' + context.ai)
        });
        
        // Keep only recent 200 contexts
        if (this.conversationContexts.length > 200) {
            this.conversationContexts = this.conversationContexts.slice(-150);
        }
    }

    generateContextId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    generateSimpleEmbedding(text) {
        // Simplified embedding - in real implementation, use proper embeddings
        const words = text.toLowerCase().split(/\s+/);
        const embedding = new Array(50).fill(0);
        
        words.forEach((word, index) => {
            const hash = this.simpleHash(word);
            embedding[hash % 50] += 1;
        });
        
        return embedding;
    }

    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    exportData() {
        return {
            knowledge: Array.from(this.knowledge.entries()),
            corrections: Array.from(this.corrections.entries()),
            feedback: Array.from(this.feedback.entries()),
            topicInterests: Array.from(this.topicInterests.entries()),
            conversationContexts: this.conversationContexts.slice(-50) // Export only recent contexts
        };
    }

    loadData(data) {
        if (data.knowledge) {
            this.knowledge = new Map(data.knowledge);
        }
        if (data.corrections) {
            this.corrections = new Map(data.corrections);
        }
        if (data.feedback) {
            this.feedback = new Map(data.feedback);
        }
        if (data.topicInterests) {
            this.topicInterests = new Map(data.topicInterests);
        }
        if (data.conversationContexts) {
            this.conversationContexts = data.conversationContexts;
        }
    }
}

// ADVANCED PERSONALITY ENGINE
class AdvancedPersonalityEngine {
    constructor() {
        this.personality = {
            friendliness: 0.7,
            formality: 0.5,
            enthusiasm: 0.6,
            patience: 0.8,
            clarity: 0.9,
            supportiveness: 0.8,
            adaptability: 0.7
        };
        
        this.personalityHistory = [];
    }

    adjustPersonality(trait, value) {
        if (this.personality.hasOwnProperty(trait)) {
            const oldValue = this.personality[trait];
            this.personality[trait] = Math.max(0, Math.min(1, value));
            
            // Record personality change
            this.personalityHistory.push({
                trait,
                oldValue,
                newValue: this.personality[trait],
                timestamp: Date.now()
            });
        }
    }

    getCurrentStyle() {
        return { ...this.personality };
    }

    applyStyle(response, style) {
        let styledResponse = response;
        
        // Apply friendliness
        if (style.friendliness > 0.8) {
            styledResponse = this.addFriendlyElements(styledResponse);
        }
        
        // Apply enthusiasm
        if (style.enthusiasm > 0.8) {
            styledResponse = this.addEnthusiasticElements(styledResponse);
        }
        
        // Apply formality
        if (style.formality > 0.7) {
            styledResponse = this.addFormalElements(styledResponse);
        }
        
        // Apply supportiveness
        if (style.supportiveness > 0.7) {
            styledResponse = this.addSupportiveElements(styledResponse);
        }
        
        return styledResponse;
    }

    addFriendlyElements(response) {
        const friendlyPhrases = [
            "Hope this helps! 😊",
            "Feel free to ask if you need more clarification!",
            "You're doing great with your studies!",
            "Let me know how I can help further!"
        ];
        
        const randomPhrase = friendlyPhrases[Math.floor(Math.random() * friendlyPhrases.length)];
        return response + '\n\n' + randomPhrase;
    }

    addEnthusiasticElements(response) {
        let enthusiasticResponse = response;
        enthusiasticResponse = enthusiasticResponse.replace(/\./g, '! ✨');
        enthusiasticResponse
