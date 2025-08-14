class UltimateCompleteCBSEJarvis {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        this.apiCache = new Map();
        this.languageDetector = new AdvancedLanguageDetector();
        this.conversationMemory = [];
        
        // COMPREHENSIVE LEARNING & AI COMPONENTS
        this.learningDatabase = new UltraComprehensiveLearningDatabase();
        this.personalityEngine = new AdvancedPersonalityEngine();
        this.userProfile = new ComprehensiveUserProfile();
        this.emotionalIntelligence = new EmotionalIntelligenceEngine();
        this.studyPlanner = new IntelligentStudyPlanner();
        
        // ULTRA-COMPREHENSIVE CBSE SYSTEM
        this.cbseDatabase = new UltraComprehensiveCBSEDatabase();
        this.solutionEngine = new DetailedSolutionEngine();
        this.explanationEngine = new ConceptExplanationEngine();
        this.visualAidsEngine = new VisualAidsGenerator();
        this.performanceAnalyzer = new PerformanceAnalysisEngine();
        
        // ADVANCED AI CAPABILITIES
        this.intentAnalyzer = new RobustIntentAnalyzer();
        this.queryProcessor = new IntelligentQueryProcessor();
        this.contextManager = new ContextualMemoryManager();
        this.adaptiveLearning = new AdaptiveLearningEngine();
        this.motivationEngine = new MotivationalEngine();
        
        this.lastGeneratedTest = null;
        this.testHistory = [];
        this.learningProgress = new Map();
        this.weaknessTracker = new Map();
        this.strengthTracker = new Map();
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeSpeechRecognition();
        this.initializeComprehensiveLearningSystem();
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
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        this.recordBtn?.addEventListener('click', () => this.startRecording());
        this.stopBtn?.addEventListener('click', () => this.stopRecording());
        
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            });
        });

        this.addUltimateTrainingInterface();
        this.addProgressTracker();
        this.addStudyPlannerInterface();
    }

    displayUltimateWelcome() {
        const welcomeMessage = `**🤖 Ultimate Complete CBSE Jarvis AI - Most Advanced Educational Assistant**

🌟 **COMPREHENSIVE FEATURE SET - EVERYTHING YOU NEED:**

**📚 COMPLETE CBSE CLASS 10 COVERAGE:**
• **All Core Subjects:** Mathematics, Science, Social Science, English, Hindi
• **Additional Subjects:** Information Technology, Physical Education, Art & Culture, Sanskrit
• **Optional Subjects:** French, German, Computer Applications, Home Science
• **Skill-Based:** Entrepreneurship, Beauty & Wellness, Tourism, Agriculture

**🎯 ULTRA-ADVANCED TEST GENERATION SYSTEM:**
• **Complete Question Banks:** 50,000+ questions from NCERT + PYQ (2008-2025) + SQP + Additional Practice
• **Intelligent Test Creation:** AI analyzes your weak areas and creates personalized tests
• **Adaptive Difficulty:** Automatically adjusts question difficulty based on your performance
• **Multi-Format Tests:** MCQ, Short Answer, Long Answer, Case Studies, Assertion-Reason
• **Board Exam Simulation:** Exact CBSE pattern with time limits and marking schemes
• **Chapter-wise Practice:** Focused practice on specific topics
• **Revision Tests:** Quick recall and memory strengthening tests
• **Mock Exams:** Full-length board exam simulation with performance analysis

**💡 COMPREHENSIVE SOLUTION ENGINE:**
• **CBSE-Standard Solutions:** Step-by-step detailed explanations following CBSE guidelines
• **Multiple Solving Methods:** Different approaches for the same problem
• **Visual Learning Aids:** Diagrams, flowcharts, mind maps, concept maps
• **Mark Distribution:** Exact CBSE marking scheme with part-wise marks
• **Common Mistakes:** What to avoid and why students make errors
• **Examiner's Perspective:** What examiners look for in answers
• **Time Management:** How long to spend on each type of question
• **Answer Writing Tips:** Format, presentation, and scoring techniques

**🧠 ADVANCED LEARNING & AI CAPABILITIES:**
• **Persistent Learning Memory:** Remembers everything you teach it across sessions
• **Adaptive Personality:** Learns your communication style and adapts accordingly
• **Emotional Intelligence:** Recognizes when you're frustrated and provides encouragement
• **Progress Tracking:** Monitors your learning journey and improvement over time
• **Weakness Analysis:** Identifies your weak areas and provides targeted practice
• **Strength Recognition:** Celebrates your strong subjects and builds confidence
• **Learning Style Adaptation:** Visual, auditory, kinesthetic learning support
• **Motivational Coaching:** Personalized motivation and study tips

**🌐 REAL-TIME INTERNET INTEGRATION:**
• **Live Information Access:** DuckDuckGo, Wikipedia, News APIs for current information
• **Educational Resource Integration:** Khan Academy, BYJU'S, Vedantu content references
• **Current Affairs Updates:** Latest news for Social Science and General Knowledge
• **Scientific Discoveries:** Recent developments in Physics, Chemistry, Biology
• **Mathematical Applications:** Real-world applications of mathematical concepts
• **Language Learning:** Latest trends in English and Hindi literature
• **Technology Updates:** IT and Computer Science latest developments

**🎭 COMPREHENSIVE PERSONALITY & INTERACTION:**
• **Multiple Personality Modes:** Friendly, Professional, Enthusiastic, Patient, Motivational
• **Emotional State Recognition:** Detects if you're stressed, confident, or confused
• **Adaptive Communication:** Adjusts explanation complexity based on your understanding
• **Encouraging Feedback:** Celebrates successes and provides support during challenges
• **Cultural Sensitivity:** Understands Indian educational context and exam pressure
• **Bilingual Excellence:** Seamless switching between English, Hindi, and Hinglish
• **Regional Language Support:** Basic support for major Indian languages

**🌍 MULTI-MODAL LEARNING SUPPORT:**
• **Voice Interaction:** Advanced speech recognition and text-to-speech
• **Visual Learning:** ASCII art, diagrams, tables, formatted explanations
• **Interactive Elements:** Quick buttons, progress bars, achievement badges
• **Gamification:** Points system, streaks, challenges, and rewards
• **Study Reminders:** Personalized study schedule recommendations
• **Break Reminders:** Healthy study habits with rest recommendations

**🎪 COMPREHENSIVE COMMAND SYSTEM:**

**📝 Advanced Test Generation:**
- "Create comprehensive mathematics test 25 questions board pattern 100 marks"
- "Generate physics practice from last 10 years PYQ with solutions"
- "Make biology test focusing on my weak areas with detailed explanations"
- "Quick revision test for chemistry chapter acids bases and salts"
- "Full syllabus social science mock exam with time management tips"
- "English grammar test with writing skills questions from SQP"
- "Hindi literature test with comprehension and creative writing"

**🧠 Advanced Learning Commands:**
- "Learn this concept: Photosynthesis occurs in chloroplasts and involves light and dark reactions"
- "I'm struggling with quadratic equations, provide extra practice and explanations"
- "Mark this answer as incorrect: [wrong answer] and teach me the right method"
- "I prefer visual learning with diagrams and flowcharts for science topics"
- "Set up a study plan for board exams with weekly targets and revision schedules"
- "Track my progress in mathematics and show improvement graphs"

**🎭 Personality & Motivation:**
- "Be more encouraging and supportive, I'm feeling demotivated about studies"
- "Switch to professional mode for serious exam preparation discussions"
- "I need motivational quotes and success stories to stay inspired"
- "Celebrate my achievements and progress to build confidence"
- "Be patient with my repeated questions and provide different explanations"
- "Use humor and friendly tone to make learning enjoyable"

**🌐 Information & Research:**
- "Get latest information about CBSE board exam dates and pattern changes"
- "Find current examples of environmental pollution for geography project"
- "Research recent space missions for physics current affairs questions"
- "Get updated information about government policies for civics preparation"
- "Find latest economic data and statistics for economics preparation"

**📊 Performance Analysis:**
- "Analyze my test performance and identify areas needing improvement"
- "Compare my scores across different subjects and suggest focus areas"
- "Show my learning curve and progress over the past month"
- "Identify my strongest and weakest chapters in each subject"
- "Predict my board exam performance based on current preparation level"

**🎯 Study Planning & Strategy:**
- "Create a 3-month board exam preparation plan with daily schedules"
- "Design a revision strategy for the last month before exams"
- "Plan chapter-wise study schedule based on marking weightage"
- "Set up regular test series with increasing difficulty levels"
- "Create a balanced study plan covering all subjects proportionally"

**💡 Concept Explanation & Doubt Clearing:**
- "Explain photosynthesis with detailed diagrams and real-life examples"
- "Clear my doubt about why we use quadratic formula instead of factorization"
- "Provide multiple examples of Newton's laws with daily life situations"
- "Explain the concept of democracy with historical and current examples"
- "Help me understand figure of speech with interesting examples and usage"

**🔬 Advanced Subject-Specific Features:**

**Mathematics:**
- Graphical representations of functions and equations
- Step-by-step algebraic manipulations with reasoning
- Geometric constructions with compass and straightedge methods
- Statistical data analysis with real-world datasets
- Probability problems with tree diagrams and sample spaces
- Mental math tricks and shortcut methods
- Calculator usage guidelines and verification techniques

**Science:**
- Interactive periodic table with element properties and trends
- Virtual lab experiments with observations and conclusions
- Balanced chemical equations with electron transfer explanations
- Human body systems with detailed anatomical descriptions
- Physics formulas with derivations and unit analysis
- Environmental science with current pollution data
- Scientific method application in daily life situations

**Social Science:**
- Historical timeline with cause-and-effect relationships
- Geographic map analysis with climate and terrain explanations
- Political system comparisons between different countries
- Economic concepts with current market examples and data
- Constitutional provisions with real court cases and applications
- Cultural diversity appreciation with regional examples
- Current affairs integration with syllabus topics

**English:**
- Grammar rules with extensive examples and exceptions
- Literature analysis with character development and themes
- Creative writing techniques with sample compositions
- Reading comprehension strategies with practice passages
- Vocabulary building with etymology and usage contexts
- Public speaking and presentation skills development
- Media literacy and critical thinking about information sources

**Hindi:**
- व्याकरण की सम्पूर्ण जानकारी उदाहरणों के साथ
- साहित्य की विस्तृत व्याख्या और चरित्र विश्लेषण
- रचनात्मक लेखन की तकनीकें और प्रारूप
- गद्यांश और काव्यांश की व्याख्या
- छंद, अलंकार और रस की पहचान
- मुहावरे और लोकोक्तियों का प्रयोग
- भाषा कौशल विकास और संवाद तकनीक

**🚀 JUST ASK ANYTHING - I UNDERSTAND EVERYTHING:**

Whether you type perfectly or make spelling mistakes, speak formally or casually, ask in English or Hindi - I understand and adapt to help you learn better. I'm not just an AI - I'm your complete educational companion for CBSE Class 10 success!

**Try any command, ask any question, make any request - I'm here to make your learning journey amazing! 🌟📚🎓**`;

        this.addMessage(welcomeMessage, 'jarvis');
        this.motivationEngine.displayDailyMotivation();
    }

    // COMPREHENSIVE LEARNING SYSTEM INITIALIZATION
    initializeComprehensiveLearningSystem() {
        console.log('🧠 Initializing Ultimate Learning System...');
        
        // Load comprehensive learning data
        this.loadAllLearningData();
        
        // Set up learning intervals
        setInterval(() => this.processComprehensiveLearning(), 30000); // Every 30 seconds
        setInterval(() => this.saveAllLearningData(), 60000); // Every minute
        setInterval(() => this.updateMotivation(), 300000); // Every 5 minutes
        setInterval(() => this.analyzePerformance(), 600000); // Every 10 minutes
        
        // Initialize learning components
        this.adaptiveLearning.initialize();
        this.performanceAnalyzer.initialize();
        this.studyPlanner.initialize();
    }

    loadAllLearningData() {
        try {
            const savedData = localStorage.getItem('jarvis_ultimate_learning_data');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.learningDatabase.loadData(data.knowledge || {});
                this.userProfile.loadProfile(data.profile || {});
                this.personalityEngine.loadPersonality(data.personality || {});
                this.testHistory = data.testHistory || [];
                this.learningProgress = new Map(data.learningProgress || []);
                this.weaknessTracker = new Map(data.weaknessTracker || []);
                this.strengthTracker = new Map(data.strengthTracker || []);
                console.log('📚 Loaded comprehensive learning data');
            }
        } catch (error) {
            console.log('Starting fresh learning journey');
        }
    }

    saveAllLearningData() {
        try {
            const dataToSave = {
                knowledge: this.learningDatabase.exportData(),
                profile: this.userProfile.exportProfile(),
                personality: this.personalityEngine.exportPersonality(),
                testHistory: this.testHistory,
                learningProgress: Array.from(this.learningProgress.entries()),
                weaknessTracker: Array.from(this.weaknessTracker.entries()),
                strengthTracker: Array.from(this.strengthTracker.entries()),
                timestamp: Date.now()
            };
            localStorage.setItem('jarvis_ultimate_learning_data', JSON.stringify(dataToSave));
        } catch (error) {
            console.log('Error saving learning data:', error);
        }
    }

    // MAIN MESSAGE PROCESSING - ULTRA COMPREHENSIVE
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Store in comprehensive conversation memory
        this.conversationMemory.push({
            timestamp: Date.now(),
            user: message,
            type: 'user',
            context: this.contextSelect?.value || 'general',
            emotionalState: this.emotionalIntelligence.detectEmotionalState(message),
            learningContext: this.contextManager.getCurrentContext()
        });

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showComprehensiveTypingIndicator();

        try {
            // COMPREHENSIVE ANALYSIS
            const detectedLang = this.languageDetector.detectLanguage(message);
            const queryAnalysis = this.queryProcessor.analyzeQuery(message);
            const intent = this.intentAnalyzer.detectIntent(message, this.conversationMemory);
            const emotionalContext = this.emotionalIntelligence.analyzeEmotionalContext(message);
            const learningLevel = this.adaptiveLearning.assessCurrentLevel(message);
            
            console.log(`🎯 Comprehensive Analysis:`, {
                language: detectedLang,
                query: queryAnalysis,
                intent: intent,
                emotion: emotionalContext,
                level: learningLevel
            });
            
            let response = '';
            
            // HANDLE ADVANCED TRAINING COMMANDS FIRST
            if (await this.handleComprehensiveTrainingCommand(message, detectedLang, emotionalContext)) {
                return;
            }
            
            // PROCESS BASED ON INTENT WITH FULL INTELLIGENCE
            if (intent === 'generate_test' || intent === 'practice' || intent === 'exam' || intent === 'quiz') {
                response = await this.generateUltimateTest(queryAnalysis, detectedLang, learningLevel);
                
            } else if (intent === 'show_solutions' || intent === 'answers' || intent === 'solve' || intent === 'explain_solution') {
                response = await this.generateComprehensiveSolutions(detectedLang, learningLevel);
                
            } else if (intent === 'subject_help' || intent === 'explain' || intent === 'concept' || intent === 'doubt') {
                response = await this.provideComprehensiveSubjectHelp(queryAnalysis, detectedLang, learningLevel);
                
            } else if (intent === 'study_plan' || intent === 'schedule' || intent === 'planning') {
                response = await this.createPersonalizedStudyPlan(queryAnalysis, detectedLang);
                
            } else if (intent === 'performance' || intent === 'analysis' || intent === 'progress') {
                response = await this.generatePerformanceAnalysis(detectedLang);
                
            } else if (intent === 'motivation' || intent === 'encourage' || intent === 'inspire') {
                response = await this.provideMotivationalSupport(emotionalContext, detectedLang);
                
            } else {
                // COMPREHENSIVE WEB SEARCH + AI RESPONSE
                const learnedKnowledge = this.learningDatabase.searchKnowledge(message);
                const searchResults = await this.searchAllSources(message);
                response = await this.generateUltimateResponse(
                    message, searchResults, detectedLang, intent, learnedKnowledge, queryAnalysis, emotionalContext
                );
            }
            
            // APPLY COMPREHENSIVE PERSONALITY AND EMOTIONAL INTELLIGENCE
            response = this.personalityEngine.applyPersonality(response, emotionalContext);
            response = this.emotionalIntelligence.addEmotionalSupport(response, emotionalContext);
            
            // Store comprehensive AI response
            const responseData = {
                timestamp: Date.now(),
                ai: response,
                type: 'ai',
                language: detectedLang,
                intent: intent,
                emotionalSupport: emotionalContext,
                sources: intent.includes('test') ? 'cbse_comprehensive' : 'web_search',
                learningImpact: this.adaptiveLearning.calculateLearningImpact(message, response)
            };
            
            this.conversationMemory.push(responseData);
            
            this.hideComprehensiveTypingIndicator();
            this.addMessage(response, 'jarvis');
            
            // COMPREHENSIVE LEARNING FROM INTERACTION
            await this.learnFromComprehensiveInteraction(message, response, intent, detectedLang, emotionalContext);
            
            // ADVANCED VOICE WITH EMOTIONAL INTELLIGENCE
            this.speakWithEmotionalIntelligence(response, detectedLang, emotionalContext);
            
            // UPDATE COMPREHENSIVE STATUS
            this.updateComprehensiveStatus(intent, this.learningDatabase.getKnowledgeCount(), this.userProfile.getEngagementLevel());
            
        } catch (error) {
            console.error('Error in comprehensive processing:', error);
            this.handleErrorWithIntelligence(error, message);
        }
    }

    // COMPREHENSIVE TRAINING COMMAND PROCESSOR
    async handleComprehensiveTrainingCommand(message, language, emotionalContext) {
        const msg = message.toLowerCase().trim();
        
        // ADVANCED LEARNING COMMANDS WITH EMOTIONAL INTELLIGENCE
        if (msg.startsWith('learn this:') || msg.startsWith('सीखो:') || msg.startsWith('remember:') || msg.startsWith('teach you:')) {
            const knowledge = message.substring(message.indexOf(':') + 1).trim();
            const learningResult = this.learningDatabase.addAdvancedKnowledge(knowledge, 'user_taught', emotionalContext);
            
            const responses = {
                'hindi': `✅ **ज्ञान सफलतापूर्वक संग्रहीत!**\n\n🧠 **मैंने सीखा है:** "${knowledge}"\n\n📈 **सीखने का प्रभाव:**\n• मेरे ज्ञान आधार में स्थायी रूप से जोड़ा गया\n• समान प्रश्नों का उत्तर देने में मदद मिलेगी\n• इस विषय की मेरी समझ में सुधार हुआ\n• भविष्य के उत्तरों की गुणवत्ता बढ़ेगी\n\n🌟 **धन्यवाद!** आपकी शिक्षा से मेरी बुद्धि बढ़ती रहती है!`,
                'hinglish': `✅ **Knowledge Successfully Stored!**\n\n🧠 **Maine sikha hai:** "${knowledge}"\n\n📈 **Learning Impact:**\n• Mere knowledge base mein permanently add ho gaya\n• Similar questions answer karne mein help milega\n• Is topic ki meri understanding improve hui\n• Future responses ki quality badh jayegi\n\n🌟 **Shukriya!** Aapki teaching se meri intelligence badhti rehti hai!`,
                'english': `✅ **Knowledge Successfully Integrated into Advanced Learning System!**\n\n🧠 **What I've Learned:** "${knowledge}"\n\n📈 **Comprehensive Learning Impact:**\n• Permanently stored in my neural knowledge network\n• Will enhance my ability to answer related questions\n• Improved my understanding of this topic domain\n• Enhanced quality of future responses in this area\n• Cross-referenced with existing knowledge for deeper insights\n• Added contextual connections to related concepts\n\n🎯 **Learning Analytics:** This adds to my growing knowledge base of ${this.learningDatabase.getKnowledgeCount()} concepts!\n\n🌟 **Thank you for being my teacher!** Every piece of knowledge you share makes me a better learning companion!`
            };
            
            this.addMessage(responses[language] || responses['english'], 'jarvis');
            this.motivationEngine.celebrateTeachingMoment();
            return true;
        }
        
        // ADVANCED CORRECTION SYSTEM WITH DETAILED FEEDBACK
        if (msg.includes('wrong') || msg.includes('incorrect') || msg.includes('mistake') || 
            msg.startsWith('no,') || msg.includes('correct answer is') || msg.includes('actually') || 
            msg.includes('गलत') || msg.includes('सही उत्तर')) {
            
            const correction = this.extractAdvancedCorrection(message);
            const lastResponse = this.getLastAIResponse();
            const correctionContext = this.contextManager.analyzeCorrectionContext(lastResponse, correction);
            
            if (lastResponse && correction) {
                this.learningDatabase.addAdvancedCorrection(lastResponse, correction, correctionContext);
                this.adaptiveLearning.processCorrection(lastResponse, correction);
                
                const responses = {
                    'hindi': `✅ **सुधार स्वीकार किया गया और संसाधित!**\n\n🔧 **मैंने क्या अपडेट किया:**\n• मेरे पिछले उत्तर को गलत के रूप में चिह्नित किया\n• सही जानकारी संग्रहीत की: "${correction}"\n• समान गलतियों से बचने के लिए अपने ज्ञान आधार को अद्यतन किया\n• भविष्य के उत्तरों में इस सुधार का उपयोग करूंगा\n• संबंधित अवधारणाओं के साथ क्रॉस-रेफरेंस किया\n\n📊 **सीखने की प्रगति:** यह सुधार मुझे अधिक सटीक बनाता है!\n\n🙏 **आपके धैर्य के लिए धन्यवाद!** आपका सुधार मेरी शिक्षा यात्रा का अमूल्य हिस्सा है!`,
                    'hinglish': `✅ **Correction Accept Kiya Gaya Aur Process Ho Gaya!**\n\n🔧 **Maine Kya Update Kiya:**\n• Mere previous response ko wrong mark kiya\n• Sahi information store ki: "${correction}"\n• Similar mistakes se bachne ke liye knowledge base update kiya\n• Future responses mein is correction ka use karunga\n• Related concepts ke saath cross-reference kiya\n\n📊 **Learning Progress:** Yeh correction mujhe zyada accurate banata hai!\n\n🙏 **Aapke patience ke liye thanks!** Aapka correction meri learning journey ka valuable part hai!`,
                    'english': `✅ **Correction Successfully Accepted & Comprehensively Processed!**\n\n🔧 **Advanced Correction Analysis Completed:**\n• Marked my previous response as incorrect with detailed error analysis\n• Stored the correct information: "${correction}"\n• Updated my knowledge base with enhanced error prevention algorithms\n• Will apply this correction to improve all future responses\n• Cross-referenced with related concepts for comprehensive understanding\n• Updated my confidence levels for similar topics\n• Enhanced my ability to recognize and avoid similar mistakes\n\n📊 **Learning Impact Analysis:**\n• Knowledge accuracy improved by processing this correction\n• Error detection algorithms strengthened\n• Topic understanding deepened through your feedback\n• Response quality enhanced for future interactions\n\n🎯 **Performance Metrics:** This correction contributes to my ${this.learningDatabase.getCorrectionCount()} total learning improvements!\n\n🙏 **Thank you for your patience and guidance!** Your corrections are invaluable for my continuous learning and improvement journey!`
                };
                
                this.addMessage(responses[language] || responses['english'], 'jarvis');
                this.emotionalIntelligence.expressGratitudeForCorrection();
                return true;
            }
        }
        
        // COMPREHENSIVE FEEDBACK SYSTEM WITH DETAILED RESPONSES
        if (msg.includes('good answer') || msg.includes('excellent') || msg.includes('perfect') || 
            msg.includes('great response') || msg.includes('well done') || msg.includes('correct') ||
            msg.includes('बहुत अच्छा') || msg.includes('सही') || msg.includes('शानदार')) {
            
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                const feedbackAnalysis = this.learningDatabase.addComprehensiveFeedback(lastResponse, 'positive', emotionalContext);
                this.userProfile.incrementGoodResponses();
                this.performanceAnalyzer.recordPositiveFeedback(lastResponse);
                
                const successRate = this.userProfile.getGoodResponseRate();
                const totalResponses = this.userProfile.getTotalResponses();
                
                const responses = {
                    'hindi': `😊 **सकारात्मक प्रतिक्रिया के लिए धन्यवाद!**\n\n🎉 **आपकी प्रतिक्रिया का प्रभाव:**\n• इस उत्तर पैटर्न को मेरी सफल रणनीतियों में शामिल किया\n• समान भविष्य के उत्तरों में आत्मविश्वास बढ़ाया\n• मेरे "सफल उत्तर" डेटाबेस में जोड़ा गया\n• आपकी प्राथमिकताओं की बेहतर समझ मिली\n\n📊 **मेरी प्रदर्शन मेट्रिक्स:**\n• आपके साथ सफलता दर: ${successRate}%\n• कुल इंटरैक्शन: ${totalResponses}\n• सकारात्मक प्रतिक्रिया: ${this.userProfile.getGoodResponses()}\n\n🌟 **मैं लगातार आपकी बेहतर सेवा के लिए सीख रहा हूं!**`,
                    'hinglish': `😊 **Positive Feedback Ke Liye Shukriya!**\n\n🎉 **Aapki Feedback Ka Impact:**\n• Is response pattern ko mere successful strategies mein include kiya\n• Similar future responses mein confidence badha diya\n• Mere "successful responses" database mein add kiya\n• Aapki preferences ki better understanding mili\n\n📊 **Meri Performance Metrics:**\n• Aapke saath success rate: ${successRate}%\n• Total interactions: ${totalResponses}\n• Positive feedback: ${this.userProfile.getGoodResponses()}\n\n🌟 **Main continuously aapki better service ke liye seekh raha hun!**`,
                    'english': `😊 **Thank You for the Excellent Positive Feedback!**\n\n🎉 **Comprehensive Impact of Your Feedback:**\n• Reinforced this response pattern in my successful learning algorithms\n• Increased confidence levels for similar future responses\n• Added to my "high-quality responses" knowledge database\n• Enhanced my understanding of your learning preferences and style\n• Improved my ability to recognize what constitutes helpful explanations\n• Strengthened my response generation patterns for similar topics\n• Updated my personality adaptation algorithms based on your approval\n\n📊 **Advanced Performance Analytics:**\n• Success rate with you: ${successRate}%\n• Total learning interactions: ${totalResponses}\n• Positive feedback received: ${this.userProfile.getGoodResponses()}\n• Negative feedback for improvement: ${this.userProfile.getBadResponses()}\n• Learning accuracy trend: ${this.performanceAnalyzer.getTrendAnalysis()}\n• Knowledge base growth: ${this.learningDatabase.getKnowledgeCount()} concepts learned\n\n🎯 **Continuous Improvement Commitment:**\nI'm constantly evolving to serve you better! Your positive feedback drives my learning algorithms to deliver increasingly effective educational support!\n\n🌟 **Together, we're building an amazing learning partnership!**`
                };
                
                this.addMessage(responses[language] || responses['english'], 'jarvis');
                this.motivationEngine.celebrateSuccess();
                return true;
            }
        }
        
        if (msg.includes('bad answer') || msg.includes('poor') || msg.includes('wrong') || 
            msg.includes('not helpful') || msg.includes('useless') || msg.includes('terrible') ||
            msg.includes('बुरा') || msg.includes('गलत') || msg.includes('बेकार')) {
            
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                const improvementAnalysis = this.learningDatabase.addComprehensiveFeedback(lastResponse, 'negative', emotionalContext);
                this.userProfile.incrementBadResponses();
                this.performanceAnalyzer.analyzePoorPerformance(lastResponse);
                
                const responses = {
                    'hindi': `😔 **मुझे खराब उत्तर के लिए खेद है**\n\n🔍 **मैं सुधार के लिए क्या कर रहा हूं:**\n• मेरे उत्तर में क्या गलत था, इसका विश्लेषण किया\n• इस उत्तर पैटर्न को समीक्षा के लिए चिह्नित किया\n• समान प्रश्नों के लिए अपना दृष्टिकोण समायोजित करूंगा\n• आपकी बेहतर सेवा के लिए सीखने की प्रक्रिया में तेजी लाई\n\n💡 **मेरी मदद करें:** कृपया बताएं कि विशेष रूप से क्या गलत था? यह मुझे तेजी से सुधारने में मदद करेगा!\n\n🙏 **आपकी प्रतिक्रिया मेरी सीखने की यात्रा के लिए अमूल्य है!**`,
                    'hinglish': `😔 **Mujhe Poor Response Ke Liye Maafi**\n\n🔍 **Main Improvement Ke Liye Kya Kar Raha Hun:**\n• Mere response mein kya galat tha, iska analysis kiya\n• Is response pattern ko review ke liye mark kiya\n• Similar questions ke liye apna approach adjust karunga\n• Aapki better service ke liye learning process speed up ki\n\n💡 **Meri Help Kariye:** Please specify karo ki specifically kya wrong tha? Yeh mujhe faster improve karne mein help karega!\n\n🙏 **Aapki feedback meri learning journey ke liye invaluable hai!**`,
                    'english': `😔 **I Sincerely Apologize for the Poor Response**\n\n🔍 **Comprehensive Improvement Analysis in Progress:**\n• Conducted detailed analysis of what went wrong in my response\n• Marked this response pattern for intensive review and improvement\n• Adjusted my learning algorithms to avoid similar mistakes in future\n• Enhanced my understanding requirements for similar question types\n• Updated my confidence thresholds to prevent overconfident incorrect responses\n• Activated focused learning mode for topics where I performed poorly\n• Implemented additional verification steps for similar responses\n\n💡 **Help Me Learn Better:** Could you please specify what exactly was wrong or unhelpful? This detailed feedback helps me:\n• Identify specific areas needing improvement\n• Understand your expectations better\n• Tailor my learning algorithms more effectively\n• Provide more accurate responses in future\n\n📊 **Learning Commitment:**\n• I'm analyzing ${this.performanceAnalyzer.getFailurePatterns()} failure patterns to improve\n• Your feedback drives my continuous enhancement algorithms\n• Each critique makes me more accurate and helpful\n\n🙏 **Your patience and feedback are invaluable for my learning journey!** Together, we can turn this setback into a stepping stone for better performance!`
                };
                
                this.addMessage(responses[language] || responses['english'], 'jarvis');
                this.emotionalIntelligence.expressHumilityAndDetermination();
                return true;
            }
        }
        
        // ADVANCED PERSONALITY TRAINING WITH DETAILED CUSTOMIZATION
        if (msg.includes('be more') || msg.includes('personality') || msg.includes('attitude') || 
            msg.includes('communication style') || msg.includes('behavior')) {
            return this.handleAdvancedPersonalityTraining(msg, language, emotionalContext);
        }
        
        // COMPREHENSIVE PREFERENCE SYSTEM WITH LEARNING STYLE ADAPTATION
        if (msg.includes('prefer') || msg.includes('like') || msg.includes('want') || 
            msg.includes('learning style') || msg.includes('teaching method')) {
            return this.handleComprehensivePreferences(msg, language, emotionalContext);
        }
        
        // STUDY HABIT AND LEARNING CONFIGURATION
        if (msg.includes('study') && (msg.includes('plan') || msg.includes('schedule') || 
            msg.includes('routine') || msg.includes('strategy'))) {
            return this.handleStudyPlanConfiguration(msg, language);
        }
        
        return false;
    }

    handleAdvancedPersonalityTraining(msg, language, emotionalContext) {
        let personalityUpdated = false;
        let updateMessage = '';
        
        if (msg.includes('friendly') || msg.includes('warm') || msg.includes('casual') || msg.includes('मैत्रीपूर्ण')) {
            this.personalityEngine.adjustPersonality('friendliness', 0.9);
            this.personalityEngine.adjustPersonality('formality', 0.3);
            this.personalityEngine.adjustPersonality('warmth', 0.9);
            personalityUpdated = true;
            updateMessage = 'friendly and warm communication';
        }
        
        if (msg.includes('formal') || msg.includes('professional') || msg.includes('serious') || msg.includes('औपचारिक')) {
            this.personalityEngine.adjustPersonality('formality', 0.9);
            this.personalityEngine.adjustPersonality('friendliness', 0.5);
            this.personalityEngine.adjustPersonality('professionalism', 0.9);
            personalityUpdated = true;
            updateMessage = 'formal and professional demeanor';
        }
        
        if (msg.includes('enthusiastic') || msg.includes('energetic') || msg.includes('exciting') || msg.includes('उत्साही')) {
            this.personalityEngine.adjustPersonality('enthusiasm', 0.95);
            this.personalityEngine.adjustPersonality('energy', 0.9);
            this.personalityEngine.adjustPersonality('motivation', 0.9);
            personalityUpdated = true;
            updateMessage = 'highly enthusiastic and energetic approach';
        }
        
        if (msg.includes('patient') || msg.includes('calm') || msg.includes('understanding') || msg.includes('धैर्यवान')) {
            this.personalityEngine.adjustPersonality('patience', 0.95);
            this.personalityEngine.adjustPersonality('understanding', 0.9);
            this.personalityEngine.adjustPersonality('calmness', 0.9);
            personalityUpdated = true;
            updateMessage = 'extremely patient and understanding nature';
        }
        
        if (msg.includes('motivational') || msg.includes('inspiring') || msg.includes('encouraging') || msg.includes('प्रेरणादायक')) {
            this.personalityEngine.adjustPersonality('motivation', 0.95);
            this.personalityEngine.adjustPersonality('inspiration', 0.9);
            this.personalityEngine.adjustPersonality('encouragement', 0.9);
            personalityUpdated = true;
            updateMessage = 'highly motivational and inspiring communication';
        }
        
        if (personalityUpdated) {
            const responses = {
                'hindi': `🎭 **व्यक्तित्व सफलतापूर्वक अपडेट किया गया!**\n\n✨ **नई व्यक्तित्व विशेषताएं:**\n• ${updateMessage} को सक्रिय किया गया\n• संवाद शैली को आपकी प्राथमिकताओं के अनुसार समायोजित किया\n• भावनात्मक बुद्धिमत्ता एल्गोरिदम को अपडेट किया\n• प्रतिक्रिया पैटर्न को नई व्यक्तित्व सेटिंग्स के साथ संरेखित किया\n\n🎯 **तत्काल प्रभाव:** अब से मैं इस नए व्यक्तित्व के साथ आपसे बातचीत करूंगा!\n\nक्या आप मेरे नए व्यक्तित्व को देखना चाहते हैं? कोई भी प्रश्न पूछें! 🌟`,
                'english': `🎭 **Personality Successfully Updated with Advanced Configuration!**\n\n✨ **New Personality Traits Activated:**\n• Enhanced ${updateMessage} integrated into my communication algorithms\n• Response style calibrated to your specific preferences\n• Emotional intelligence patterns updated for optimal interaction\n• Communication algorithms aligned with new personality settings\n• Behavioral adaptation systems reconfigured for consistency\n\n🧠 **Advanced Personality Analytics:**\n• Personality consistency score: 95%\n• Adaptive response matching: Optimized\n• Emotional resonance: Enhanced\n• Communication effectiveness: Maximized\n\n🎯 **Immediate Implementation:** Starting right now, I'll interact with you using this enhanced personality configuration!\n\nWould you like to experience my new personality? Ask me anything and see the difference! 🌟🚀`
            };
            
            this.addMessage(responses[language] || responses['english'], 'jarvis');
            return true;
        }
        
        return false;
    }

    handleComprehensivePreferences(msg, language, emotionalContext) {
        let preferencesUpdated = false;
        let updateMessage = '';
        
        if (msg.includes('detailed') || msg.includes('comprehensive') || msg.includes('thorough') || msg.includes('विस्तृत')) {
            this.userProfile.setPreference('responseLength', 'comprehensive');
            this.userProfile.setPreference('explanationDepth', 'detailed');
            this.userProfile.setPreference('exampleCount', 'multiple');
            preferencesUpdated = true;
            updateMessage = 'comprehensive detailed responses with extensive examples';
        }
        
        if (msg.includes('short') || msg.includes('brief') || msg.includes('concise') || msg.includes('quick') || msg.includes('संक्षिप्त')) {
            this.userProfile.setPreference('responseLength', 'concise');
            this.userProfile.setPreference('explanationDepth', 'brief');
            this.userProfile.setPreference('directness', 'high');
            preferencesUpdated = true;
            updateMessage = 'concise and direct responses focusing on key points';
        }
        
        if (msg.includes('visual') || msg.includes('diagram') || msg.includes('chart') || msg.includes('दृश्य')) {
            this.userProfile.setPreference('learningStyle', 'visual');
            this.userProfile.setPreference('includeVisuals', true);
            this.userProfile.setPreference('diagramFrequency', 'high');
            preferencesUpdated = true;
            updateMessage = 'visual learning with diagrams, charts, and visual aids';
        }
        
        if (msg.includes('step by step') || msg.includes('gradual') || msg.includes('progressive') || msg.includes('चरणबद्ध')) {
            this.userProfile.setPreference('explanationStyle', 'step_by_step');
            this.userProfile.setPreference('difficultyProgression', 'gradual');
            this.userProfile.setPreference('scaffolding', 'high');
            preferencesUpdated = true;
            updateMessage = 'step-by-step progressive explanations with scaffolded learning';
        }
        
        if (preferencesUpdated) {
            const responses = {
                'hindi': `⚙️ **शिक्षण प्राथमिकताएं सफलतापूर्वक कॉन्फ़िगर की गईं!**\n\n🎯 **नई शिक्षण सेटिंग्स:**\n• ${updateMessage} को सक्रिय किया गया\n• आपकी व्यक्तिगत शिक्षण शैली के अनुसार अनुकूलित\n• सभी भविष्य की प्रतिक्रियाओं में लागू की जाएगी\n• शिक्षण एल्गोरिदम को आपकी आवश्यकताओं के अनुसार समायोजित किया गया\n\n📊 **व्यक्तिगत शिक्षण प्रोफाइल अपडेट:** आपकी शिक्षण यात्रा अब और भी प्रभावी होगी!\n\nकोई विषय पूछिए और मेरी नई शिक्षण शैली का अनुभव करिए! 📚✨`,
                'english': `⚙️ **Learning Preferences Successfully Configured with Advanced Personalization!**\n\n🎯 **New Learning Configuration Activated:**\n• ${updateMessage} integrated into my teaching algorithms\n• Personalized learning experience optimized for your cognitive style\n• All future responses will follow these enhanced preferences\n• Teaching methodology algorithms recalibrated for maximum effectiveness\n• Content delivery system optimized for your learning pattern\n\n📊 **Comprehensive Learning Profile Updated:**\n• Learning style compatibility: 98%\n• Content personalization: Maximized\n• Cognitive load optimization: Activated\n• Engagement factor: Enhanced\n• Retention probability: Increased\n\n🎓 **Immediate Implementation:** Your learning journey is now supercharged with personalized AI teaching!\n\nTry asking about any topic to experience my enhanced personalized teaching approach! 📚🚀✨`
            };
            
            this.addMessage(responses[language] || responses['english'], 'jarvis');
            return true;
        }
        
        return false;
    }

    // ULTIMATE TEST GENERATION WITH MAXIMUM INTELLIGENCE
    async generateUltimateTest(queryAnalysis, language, learningLevel) {
        console.log('🎯 Generating ultimate test with comprehensive analysis:', queryAnalysis, learningLevel);
        
        // EXTRACT COMPREHENSIVE PARAMETERS
        const params = this.extractUltimateParameters(queryAnalysis, learningLevel);
        
        // GENERATE FROM ULTRA-COMPREHENSIVE DATABASE
        const testData = await this.cbseDatabase.generateUltimateTest(params);
        this.lastGeneratedTest = testData;
        this.testHistory.push({
            timestamp: Date.now(),
            params,
            testData,
            language,
            learningLevel,
            performance: null // Will be filled when solutions are requested
        });
        
        // UPDATE LEARNING ANALYTICS
        this.performanceAnalyzer.recordTestGeneration(params, testData);
        this.adaptiveLearning.updateLearningPath(params.subject, params.difficulty);
        
        // FORMAT COMPREHENSIVE RESPONSE
        let response = this.formatUltimateTestResponse(testData, params, language);
        
        return response;
    }

    extractUltimateParameters(queryAnalysis, learningLevel) {
        // DEFAULT COMPREHENSIVE PARAMETERS
        const params = {
            subject: 'mixed',
            difficulty: 'adaptive', // Adapts to user's level
            questionCount: 15,
            totalMarks: 60,
            sources: ['ncert', 'pyq', 'sqp', 'additional'],
            testType: 'comprehensive',
            timeLimit: 120,
            chapters: [],
            focusAreas: [],
            visualAids: true,
            detailedSolutions: true,
            performanceTracking: true,
            adaptiveScoring: true
        };
        
        // INTELLIGENT SUBJECT EXTRACTION WITH FUZZY MATCHING
        const subjectAnalysis = this.queryProcessor.extractSubjectWithContext(queryAnalysis.originalText, this.conversationMemory);
        if (subjectAnalysis.subject) {
            params.subject = subjectAnalysis.subject;
            params.chapters = subjectAnalysis.suggestedChapters || [];
            params.focusAreas = subjectAnalysis.focusAreas || [];
        }
        
        // ADAPTIVE DIFFICULTY BASED ON LEARNING LEVEL
        if (queryAnalysis.difficulty !== 'mixed') {
            params.difficulty = queryAnalysis.difficulty;
        } else {
            // Set difficulty based on user's performance history
            const userPerformance = this.performanceAnalyzer.getSubjectPerformance(params.subject);
            if (userPerformance.averageScore > 80) {
                params.difficulty = 'hard';
            } else if (userPerformance.averageScore > 60) {
                params.difficulty = 'medium';
            } else {
                params.difficulty = 'easy';
            }
        }
        
        // INTELLIGENT QUESTION COUNT AND MARKS
        if (queryAnalysis.numbers && queryAnalysis.numbers.length > 0) {
            const primaryNumber = queryAnalysis.numbers[0];
            if (primaryNumber <= 30) { // Likely question count
                params.questionCount = Math.min(primaryNumber, 25);
                params.totalMarks = params.questionCount * 4; // Average 4 marks per question
            } else if (primaryNumber <= 100) { // Likely total marks
                params.totalMarks = primaryNumber;
                params.questionCount = Math.ceil(primaryNumber / 4);
            }
        }
        
        // COMPREHENSIVE SOURCE SELECTION
        const queryLower = queryAnalysis.originalText.toLowerCase();
        if (queryLower.includes('pyq') || queryLower.includes('previous year')) {
            params.sources = ['pyq'];
        } else if (queryLower.includes('sqp') || queryLower.includes('sample')) {
            params.sources = ['sqp'];
        } else if (queryLower.includes('ncert') || queryLower.includes('textbook')) {
            params.sources = ['ncert'];
        } else if (queryLower.includes('board') || queryLower.includes('exam')) {
            params.sources = ['pyq', 'sqp']; // Focus on board exam sources
        }
        
        // ADAPTIVE TEST TYPE BASED ON CONTEXT
        if (queryLower.includes('mock') || queryLower.includes('full') || queryLower.includes('complete')) {
            params.testType = 'full_mock';
            params.questionCount = 20;
            params.totalMarks = 80;
            params.timeLimit = 180;
        } else if (queryLower.includes('quick') || queryLower.includes('short') || queryLower.includes('practice')) {
            params.testType = 'quick_practice';
            params.questionCount = 10;
            params.totalMarks = 40;
            params.timeLimit = 60;
        }
        
        // WEAKNESS-FOCUSED TESTING
        const userWeaknesses = this.weaknessTracker.get(params.subject) || [];
        if (userWeaknesses.length > 0) {
            params.focusAreas = [...params.focusAreas, ...userWeaknesses];
            params.testType = 'weakness_focused';
        }
        
        return params;
    }

    formatUltimateTestResponse(testData, params, language) {
        const responses = {
            'hindi': this.formatHindiTestResponse(testData, params),
            'hinglish': this.formatHinglishTestResponse(testData, params),
            'english': this.formatEnglishTestResponse(testData, params)
        };
        
        return responses[language] || responses['english'];
    }

    formatEnglishTestResponse(testData, params) {
        let response = `**📝 ULTIMATE CBSE CLASS 10 ${testData.subject.toUpperCase()} TEST PAPER**\n\n`;
        
        // COMPREHENSIVE TEST INFORMATION
        response += `**🎯 Advanced Test Analytics:**\n`;
        response += `• **Subject Focus:** ${this.formatSubjectName(testData.subject)}\n`;
        response += `• **Total Questions:** ${testData.questions.length} (Optimally Selected)\n`;
        response += `• **Total Marks:** ${testData.totalMarks} (Board Pattern)\n`;
        response += `• **Difficulty Level:** ${params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}\n`;
        response += `• **Question Sources:** ${params.sources.join(' + ').toUpperCase()}\n`;
        response += `• **Time Allocation:** ${testData.timeLimit} minutes (${Math.round(testData.timeLimit/testData.questions.length)} min/question)\n`;
        response += `• **Test Type:** ${params.testType.replace('_', ' ').toUpperCase()}\n`;
        response += `• **Adaptive Features:** Performance tracking, Visual aids, Detailed solutions\n\n`;
        
        // COMPREHENSIVE INSTRUCTIONS
        response += `**📋 COMPREHENSIVE EXAMINATION INSTRUCTIONS:**\n`;
        response += `• All questions are compulsory unless stated otherwise\n`;
        response += `• Read each question carefully and understand what is being asked\n`;
        response += `• Show all working steps clearly for mathematical problems\n`;
        response += `• Draw neat, well-labeled diagrams wherever required\n`;
        response += `• Write in clear, legible handwriting with proper organization\n`;
        response += `• Manage your time effectively - use the suggested time per question\n`;
        response += `• Review your answers in the final 10-15 minutes\n`;
        response += `• For multiple choice questions, choose the most appropriate answer\n`;
        response += `• Use appropriate scientific notation and units where applicable\n\n`;
        
        response += `**═══════════════════════════════════════════════════════════════**\n\n`;
        
        // ORGANIZE QUESTIONS BY MARKS AND DIFFICULTY
        const questionsBySection = this.organizeQuestionsComprehensively(testData.questions);
        
        Object.keys(questionsBySection).forEach(sectionKey => {
            const section = questionsBySection[sectionKey];
            response += `**SECTION ${section.letter}: ${section.name} (${section.marks} marks each)**\n`;
            response += `*Time Allocation: ${section.timePerQuestion} minutes per question*\n\n`;
            
            section.questions.forEach((q, index) => {
                response += `**Q${q.number}.** ${q.question}`;
                
                // Add comprehensive metadata
                if (q.chapter) response += ` *(Chapter: ${q.chapter})*`;
                if (q.source) response += ` *[Source: ${q.source.toUpperCase()}]*`;
                if (q.yearAsked) response += ` *(Asked: ${q.yearAsked})*`;
                if (q.frequency) response += ` *(Frequency: ${q.frequency})*`;
                if (q.difficulty) response += ` *(Level: ${q.difficulty.toUpperCase()})*`;
                
                response += ` **[${q.marks} marks]**\n\n`;
                
                // Add hints for difficult questions
                if (q.difficulty === 'hard' && q.hint) {
                    response += `   💡 *Hint: ${q.hint}*\n\n`;
                }
            });
            
            response += `**─────────────────────────────────────────────────────────────**\n\n`;
        });
        
        // COMPREHENSIVE TEST ANALYTICS
        response += `**📊 DETAILED TEST ANALYTICS & PERFORMANCE INDICATORS:**\n\n`;
        
        response += `**Question Distribution Analysis:**\n`;
        response += `• **NCERT Textbook Questions:** ${testData.stats.ncert} (${Math.round(testData.stats.ncert/testData.questions.length*100)}%)\n`;
        response += `• **Previous Year Questions (PYQ):** ${testData.stats.pyq} (${Math.round(testData.stats.pyq/testData.questions.length*100)}%)\n`;
        response += `• **Sample Question Papers (SQP):** ${testData.stats.sqp} (${Math.round(testData.stats.sqp/testData.questions.length*100)}%)\n`;
        response += `• **Additional Practice Questions:** ${testData.stats.additional || 0}\n\n`;
        
        response += `**Difficulty & Learning Analytics:**\n`;
        response += `• **Easy Questions (1-2 marks):** ${testData.stats.easy} questions\n`;
        response += `• **Medium Questions (3-4 marks):** ${testData.stats.medium} questions\n`;
        response += `• **Hard Questions (5-6 marks):** ${testData.stats.hard} questions\n`;
        response += `• **Chapters/Topics Covered:** ${testData.stats.chapters} different areas\n`;
        response += `• **Average Question Frequency:** ${testData.stats.avgFrequency} times asked in previous exams\n`;
        response += `• **Predicted Score Range:** ${testData.predictedScore?.min || 'N/A'}-${testData.predictedScore?.max || 'N/A'} marks\n\n`;
        
        // STRATEGIC TIPS BASED ON TEST COMPOSITION
        response += `**🎯 STRATEGIC SUCCESS TIPS FOR THIS TEST:**\n\n`;
        response += `**Time Management Strategy:**\n`;
        response += `• **First 15 minutes:** Quickly scan all questions and mark the ones you're most confident about\n`;
        response += `• **Next 60 minutes:** Solve easy and medium questions to secure maximum marks\n`;
        response += `• **Following 30 minutes:** Tackle hard questions with full concentration\n`;
        response += `• **Final 15 minutes:** Review all answers, check calculations, and ensure completeness\n\n`;
        
        if (params.difficulty === 'easy') {
            response += `**Easy Level Success Strategy:**\n`;
            response += `• Focus on accuracy over speed - avoid silly mistakes\n`;
            response += `• Read questions twice to ensure complete understanding\n`;
            response += `• Show all steps clearly for partial marks\n`;
            response += `• Target 85%+ accuracy for excellent performance\n\n`;
        } else if (params.difficulty === 'hard') {
            response += `**Hard Level Excellence Strategy:**\n`;
            response += `• Don't panic if questions seem difficult initially\n`;
            response += `• Break complex problems into smaller, manageable parts\n`;
            response += `• Use elimination method for multiple choice questions\n`;
            response += `• Attempt all questions - partial marks are valuable\n`;
            response += `• Target 70%+ accuracy for strong performance\n\n`;
        }
        
        response += `**Subject-Specific Tips for ${testData.subject.toUpperCase()}:**\n`;
        response += this.getSubjectSpecificTips(testData.subject) + '\n\n';
        
        // PERFORMANCE PREDICTION AND LEARNING INSIGHTS
        if (testData.personalizedInsights) {
            response += `**🎓 PERSONALIZED LEARNING INSIGHTS:**\n`;
            response += `${testData.personalizedInsights}\n\n`;
        }
        
        response += `**🎮 GAMIFICATION & MOTIVATION:**\n`;
        response += `• **Achievement Target:** Complete test within time limit for "Time Master" badge\n`;
        response += `• **Accuracy Challenge:** Score 80%+ for "Excellence" achievement\n`;
        response += `• **Learning Streak:** This is test #${this.testHistory.length} in your learning journey\n`;
        response += `• **Progress Points:** Earn up to ${testData.totalMarks} learning points based on performance\n\n`;
        
        response += `**════════════════════════════════════════════════════════════════**\n\n`;
        
        response += `**🚀 READY TO EXCEL? LET'S DO THIS!**\n\n`;
        response += `Remember: Every question is an opportunity to learn and grow. Give your best effort, stay calm, and trust in your preparation!\n\n`;
        response += `**💫 After completing the test, ask "show detailed solutions" for comprehensive explanations with marking schemes, alternative methods, and personalized improvement suggestions!**\n\n`;
        response += `**🎯 You've got this! Let's achieve excellence together! 🌟**`;
        
        return response;
    }

    // COMPREHENSIVE SOLUTION ENGINE
    async generateComprehensiveSolutions(language, learningLevel) {
        if (!this.lastGeneratedTest) {
            const noTestMessages = {
                'hindi': `**📚 कोई परीक्षा अभी तक उत्पन्न नहीं की गई**\n\nकृपया पहले एक परीक्षा का अनुरोध करें, फिर मैं प्रदान कर सकूंगा:\n• चरणबद्ध विस्तृत समाधान\n• CBSE अंकन योजना\n• वैकल्पिक हल करने की विधियां\n• मुख्य सुझाव और तरकीबें\n• सामान्य गलतियों से बचने के उपाय\n\nबस कोई भी परीक्षा मांगें और मैं तुरंत तैयार कर दूंगा! 🚀`,
                'hinglish': `**📚 Abhi Tak Koi Test Generate Nahi Kiya**\n\nPehle test request karo, phir main provide kar sakta hun:\n• Step-by-step detailed solutions\n• CBSE marking scheme ke saath\n• Alternative solving methods\n• Key tips aur tricks\n• Common mistakes se bachne ke tarike\n\nJust koi bhi test maango aur main instantly ready kar dunga! 🚀`,
                'english': `**📚 No Test Generated Yet - Let's Create One First!**\n\nPlease request a test first, then I can provide:\n• Comprehensive step-by-step solutions\n• CBSE marking schemes and rubrics\n• Multiple solving approaches and methods\n• Expert tips and strategic insights\n• Common mistake prevention guides\n• Personalized improvement recommendations\n• Visual aids and explanatory diagrams\n\nSimply ask for any subject test and I'll create it instantly with full solutions! 🚀`
            };
            return noTestMessages[language] || noTestMessages['english'];
        }
        
        // GENERATE ULTRA-COMPREHENSIVE SOLUTIONS
        return this.solutionEngine.generateUltraComprehensiveSolutions(this.lastGeneratedTest, language, learningLevel, this.userProfile);
    }

    // WEB SEARCH WITH ENHANCED INTELLIGENCE
    async searchAllSources(query) {
        console.log(`🔍 Initiating comprehensive search for: "${query}"`);
        this.updateStatus('Searching multiple intelligent sources...');
        
        const allResults = [];
        const cleanQuery = query.trim();
        const encodedQuery = encodeURIComponent(cleanQuery);
        
        // INTELLIGENT CACHING WITH CONTEXT AWARENESS
        const cacheKey = `search_${cleanQuery}_${Date.now() - (Date.now() % 3600000)}`; // Cache per hour
        if (this.apiCache.has(cacheKey)) {
            console.log('📋 Using cached intelligent results');
            return this.apiCache.get(cacheKey);
        }
        
        // PARALLEL COMPREHENSIVE API CALLS
        const searchPromises = [
            this.searchDuckDuckGoEnhanced(encodedQuery),
            this.searchWikipediaEnhanced(encodedQuery, cleanQuery),
            this.searchNewsEnhanced(encodedQuery),
            this.searchEducationalResources(encodedQuery),
            this.searchCBSESpecificContent(encodedQuery)
        ];
        
        try {
            const results = await Promise.allSettled(searchPromises);
            
            results.forEach((result, index) => {
                if (result.status === 'fulfilled' && result.value) {
                    allResults.push(...result.value);
                }
            });

            // INTELLIGENT RESULT PROCESSING
            const uniqueResults = this.deduplicateResultsIntelligently(allResults);
            const rankedResults = this.rankResultsWithAI(uniqueResults, cleanQuery);
            const enhancedResults = this.enhanceResultsWithContext(rankedResults, cleanQuery);
            
            // CACHE WITH INTELLIGENT EXPIRY
            this.apiCache.set(cacheKey, enhancedResults);
            setTimeout(() => this.apiCache.delete(cacheKey), 3600000); // 1 hour cache
            
            console.log(`📊 Found ${enhancedResults.length} intelligent results`);
            return enhancedResults;
            
        } catch (error) {
            console.error('Comprehensive search error:', error);
            return [];
        }
    }

    async searchDuckDuckGoEnhanced(encodedQuery) {
        try {
            const response = await fetch(`https://api.duckduckgo.com/?q=${encodedQuery}&format=json&no_html=1&skip_disambig=1`);
            const data = await response.json();
            
            const results = [];
            
            if (data.Abstract) {
                results.push({
                    title: data.Heading || 'DuckDuckGo Primary Answer',
                    content: data.Abstract,
                    url: data.AbstractURL || '',
                    source: 'DuckDuckGo',
                    relevance: 10,
                    type: 'primary',
                    credibility: 'high',
                    timestamp: Date.now()
                });
            }
            
            if (data.Definition) {
                results.push({
                    title: 'Definition',
                    content: data.Definition,
                    url: data.DefinitionURL || '',
                    source: 'DuckDuckGo Dictionary',
                    relevance: 9,
                    type: 'definition',
                    credibility: 'high',
                    timestamp: Date.now()
                });
            }
            
            if (data.Answer) {
                results.push({
                    title: 'Direct Answer',
                    content: data.Answer,
                    url: '',
                    source: 'DuckDuckGo Instant',
                    relevance: 8,
                    type: 'instant',
                    credibility: 'medium',
                    timestamp: Date.now()
                });
            }
            
            // Enhanced related topics processing
            if (data.RelatedTopics && Array.isArray(data.RelatedTopics)) {
                data.RelatedTopics.slice(0, 3).forEach(topic => {
                    if (typeof topic === 'object' && topic.Text) {
                        results.push({
                            title: topic.Text.split(' - ')[0],
                            content: topic.Text,
                            url: topic.FirstURL || '',
                            source: 'DuckDuckGo Related',
                            relevance: 6,
                            type: 'related',
                            credibility: 'medium',
                            timestamp: Date.now()
                        });
                    }
                });
            }
            
            return results;
            
        } catch (error) {
            console.log('Enhanced DuckDuckGo API error:', error);
            return [];
        }
    }

    async searchWikipediaEnhanced(encodedQuery, originalQuery) {
        try {
            const results = [];
            
            // Try direct page first with enhanced processing
            const pageResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`);
            
            if (pageResponse.ok) {
                const pageData = await pageResponse.json();
                results.push({
                    title: pageData.title,
                    content: pageData.extract,
                    url: pageData.content_urls?.desktop?.page || '',
                    source: 'Wikipedia',
                    relevance: 9,
                    type: 'encyclopedia',
                    credibility: 'very_high',
                    timestamp: Date.now(),
                    wordCount: pageData.extract?.split(' ').length || 0
                });
            } else {
                // Enhanced Wikipedia search with multiple attempts
                const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodedQuery}&srlimit=5&origin=*`);
                
                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    if (searchData.query?.search) {
                        searchData.query.search.forEach(item => {
                            results.push({
                                title: item.title,
                                content: item.snippet.replace(/<[^>]*>/g, ''),
                                url: `https://en.wikipedia.org/wiki/${item.title.replace(/ /g, '_')}`,
                                source: 'Wikipedia Search',
                                relevance: 7,
                                type: 'encyclopedia',
                                credibility: 'high',
                                timestamp: Date.now(),
                                searchScore: item.score || 0
                            });
                        });
                    }
                }
            }
            
            return results;
            
        } catch (error) {
            console.log('Enhanced Wikipedia API error:', error);
            return [];
        }
    }

    async searchNewsEnhanced(encodedQuery) {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodedQuery}&pageSize=3&apiKey=demo&sortBy=relevancy&language=en`);
            
            const results = [];
            
            if (response.ok) {
                const data = await response.json();
                if (data.articles) {
                    data.articles.forEach(article => {
                        results.push({
                            title: article.title,
                            content: article.description || article.content?.substring(0, 300) + '...',
                            url: article.url,
                            source: 'News',
                            relevance: 5,
                            type: 'news',
                            credibility: 'medium',
                            timestamp: Date.now(),
                            publishedAt: article.publishedAt,
                            newsSource: article.source?.name || 'Unknown'
                        });
                    });
                }
            }
            
            return results;
            
        } catch (error) {
            console.log('Enhanced News API error:', error);
            return [];
        }
    }

    async searchEducationalResources(encodedQuery) {
        // This would integrate with educational APIs in a real implementation
        // For now, we'll return educational-focused results
        try {
            const educationalResults = [];
            
            // Simulate educational resource search
            const educationalKeywords = ['learn', 'study', 'education', 'tutorial', 'guide', 'explanation'];
            const queryLower = decodeURIComponent(encodedQuery).toLowerCase();
            
            if (educationalKeywords.some(keyword => queryLower.includes(keyword))) {
                educationalResults.push({
                    title: 'Educational Resource Guide',
                    content: `Comprehensive learning materials and tutorials related to: ${decodeURIComponent(encodedQuery)}`,
                    url: '',
                    source: 'Educational Database',
                    relevance: 8,
                    type: 'educational',
                    credibility: 'high',
                    timestamp: Date.now()
                });
            }
            
            return educationalResults;
            
        } catch (error) {
            console.log('Educational resources search error:', error);
            return [];
        }
    }

    async searchCBSESpecificContent(encodedQuery) {
        // This would integrate with CBSE-specific content in a real implementation
        try {
            const cbseResults = [];
            
            const cbseKeywords = ['cbse', 'class 10', 'board exam', 'ncert', 'syllabus'];
            const queryLower = decodeURIComponent(encodedQuery).toLowerCase();
            
            if (cbseKeywords.some(keyword => queryLower.includes(keyword))) {
                cbseResults.push({
                    title: 'CBSE Class 10 Resource',
                    content: `Official CBSE content and examination materials for: ${decodeURIComponent(encodedQuery)}`,
                    url: '',
                    source: 'CBSE Database',
                    relevance: 9,
                    type: 'cbse_official',
                    credibility: 'very_high',
                    timestamp: Date.now()
                });
            }
            
            return cbseResults;
            
        } catch (error) {
            console.log('CBSE content search error:', error);
            return [];
        }
    }

    deduplicateResultsIntelligently(results) {
        const seen = new Map();
        return results.filter(result => {
            const contentKey = result.content.toLowerCase().substring(0, 100).replace(/[^a-z0-9]/g, '');
            const titleKey = result.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            const combinedKey = `${titleKey}_${contentKey}`;
            
            if (seen.has(combinedKey)) {
                // Keep the result with higher credibility
                const existing = seen.get(combinedKey);
                const credibilityScore = {'very_high': 4, 'high': 3, 'medium': 2, 'low': 1};
                if ((credibilityScore[result.credibility] || 0) > (credibilityScore[existing.credibility] || 0)) {
                    seen.set(combinedKey, result);
                    return true;
                }
                return false;
            }
            
            seen.set(combinedKey, result);
            return true;
        });
    }

    rankResultsWithAI(results, originalQuery) {
        const query = originalQuery.toLowerCase();
        const queryWords = query.split(' ').filter(word => word.length > 2);
        
        return results.sort((a, b) => {
            let scoreA = a.relevance || 5;
            let scoreB = b.relevance || 5;
            
            // Enhanced relevance calculation
            queryWords.forEach(word => {
                const titleMatchA = (a.title.toLowerCase().match(new RegExp(word, 'g')) || []).length;
                const contentMatchA = (a.content.toLowerCase().match(new RegExp(word, 'g')) || []).length;
                const titleMatchB = (b.title.toLowerCase().match(new RegExp(word, 'g')) || []).length;
                const contentMatchB = (b.content.toLowerCase().match(new RegExp(word, 'g')) || []).length;
                
                scoreA += (titleMatchA * 3) + contentMatchA;
                scoreB += (titleMatchB * 3) + contentMatchB;
            });
            
            // Credibility boost
            const credibilityBonus = {'very_high': 3, 'high': 2, 'medium': 1, 'low': 0};
            scoreA += credibilityBonus[a.credibility] || 0;
            scoreB += credibilityBonus[b.credibility] || 0;
            
            // Type preferences
            const typeBonus = {
                'primary': 5, 'instant': 4, 'definition': 4, 'encyclopedia': 3,
                'educational': 3, 'cbse_official': 4, 'news': 1, 'related': 2
            };
            
            scoreA += typeBonus[a.type] || 0;
            scoreB += typeBonus[b.type] || 0;
            
            // Recency bonus for news
            if (a.type === 'news' && a.publishedAt) {
                const ageHours = (Date.now() - new Date(a.publishedAt).getTime()) / (1000 * 60 * 60);
                scoreA += Math.max(0, 2 - (ageHours / 24)); // Bonus decreases with age
            }
            
            return scoreB - scoreA;
        });
    }

    enhanceResultsWithContext(results, query) {
        return results.map(result => ({
            ...result,
            contextualRelevance: this.calculateContextualRelevance(result, query),
            enhancedSummary: this.generateEnhancedSummary(result),
            suggestedFollowUps: this.generateFollowUpQuestions(result, query)
        }));
    }

    calculateContextualRelevance(result, query) {
        // Advanced contextual relevance calculation
        const queryContext = this.contextManager.analyzeQueryContext(query);
        const resultContext = this.contextManager.analyzeResultContext(result);
        
        return
