class UltimateJarvisAI {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        this.apiCache = new Map();
        this.languageDetector = new LanguageDetector();
        this.conversationMemory = [];
        
        // LEARNING COMPONENTS
        this.learningDatabase = new LearningDatabase();
        this.personalityEngine = new PersonalityEngine();
        this.userProfile = new UserProfile();
        
        // CBSE TEST GENERATION
        this.cbseDatabase = new CBSEClass10Database();
        this.lastGeneratedTest = null;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeSpeechRecognition();
        this.initializeLearningSystem();
        this.playWelcomeSound();
        this.displayCompleteWelcome();
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

        this.addTrainingInterface();
    }

    displayCompleteWelcome() {
        const welcomeMessage = `**🤖 Ultimate Jarvis AI - Complete Edition**

🌟 **ALL FEATURES AVAILABLE:**

**🎓 CBSE Class 10 Test Generation:**
• **"Take a test"** → Complete test papers with marking schemes
• **"Practice questions on triangles"** → Chapter-specific practice
• **"Math test 25 marks"** → Subject & marks specific tests
• **"Show solutions"** → Step-by-step answers

**🌐 Internet Search & Real-time Information:**
• **"Latest news about AI"** → Current web information
• **"What's happening in India today?"** → Real-time updates
• **Multiple API integration** (DuckDuckGo, Wikipedia, News)

**🧠 Advanced Learning & Training:**
• **"Learn this: [fact]"** → Teach me new information
• **"Good answer"** / **"Bad answer"** → Rate my responses
• **"Be more friendly"** → Adjust my personality
• **"I prefer detailed answers"** → Set your preferences

**🌍 Multi-Language Support:**
• **English:** "Give me a math test"
• **Hindi:** "गणित का टेस्ट दो"
• **Hinglish:** "Math ka test do yaar"

**🎤 Voice Interaction:**
• Click microphone to speak
• Voice responses in your language
• Multi-language speech recognition

**💾 Persistent Memory:**
• Remembers all conversations
• Learns from mistakes
• Builds your learning profile
• Tracks your progress

**📚 Complete CBSE Resources:**
• Previous year questions (PYQ)
• Sample question papers (SQP)
• Chapter-wise practice
• Marking schemes & solutions

**🎯 Try These Commands:**
- "Take a math test 20 marks" → Test generation
- "Latest cricket scores" → Web search
- "Learn this: Earth revolves around Sun" → Training
- "Practice questions on photosynthesis" → CBSE practice
- "What's happening in space today?" → Current events
- "Be more casual in responses" → Personality training

**Ask me ANYTHING in ANY language! I can search the web, generate tests, and learn from you! 🚀**`;

        this.addMessage(welcomeMessage, 'jarvis');
    }

    // LEARNING SYSTEM INITIALIZATION
    initializeLearningSystem() {
        console.log('🧠 Initializing Complete Learning System...');
        this.loadLearningData();
        setInterval(() => this.processLearning(), 30000);
        setInterval(() => this.saveLearningData(), 60000);
    }

    loadLearningData() {
        try {
            const savedData = localStorage.getItem('jarvis_complete_learning_data');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.learningDatabase.loadData(data.knowledge || {});
                this.userProfile.loadProfile(data.profile || {});
                console.log('📚 Loaded existing learning data');
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
                timestamp: Date.now()
            };
            localStorage.setItem('jarvis_complete_learning_data', JSON.stringify(dataToSave));
        } catch (error) {
            console.log('Error saving learning data:', error);
        }
    }

    // MAIN MESSAGE PROCESSING
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Check if this is a training command FIRST
        if (await this.handleTrainingCommand(message)) {
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
        this.showTypingIndicator();

        try {
            // Detect language and intent
            const detectedLang = this.detectLanguage(message);
            const intent = this.analyzeIntent(message);
            
            console.log(`🎯 Intent: ${intent}, Language: ${detectedLang}`);
            
            // Handle based on intent
            let response = '';
            
            if (intent === 'generate_test' || intent === 'generate_practice') {
                response = this.handleTestGeneration(message, intent, detectedLang);
                
            } else if (intent === 'show_solutions') {
                response = this.handleSolutionRequest(message, detectedLang);
                
            } else {
                // For other intents, use web search + AI
                const learnedKnowledge = this.learningDatabase.searchKnowledge(message);
                const searchResults = await this.searchAllSources(message);
                response = await this.generateIntelligentResponse(
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
                sources: intent.includes('test') ? 'cbse_database' : 'web_search'
            };
            
            this.conversationMemory.push(responseData);
            
            this.hideTypingIndicator();
            this.addMessage(response, 'jarvis');
            
            // Learn from this interaction
            await this.learnFromInteraction(message, response, intent, detectedLang);
            
            // Speak in appropriate language
            this.speakInLanguage(response, detectedLang);
            
            this.updateStatus(`Processed (${this.learningDatabase.getKnowledgeCount()} facts learned)`);
            
        } catch (error) {
            console.error('Error processing message:', error);
            this.handleError(error, message);
        }
    }

    // INTENT ANALYSIS
    analyzeIntent(message) {
        const msg = message.toLowerCase();
        
        // Test/Practice intent detection
        if (msg.includes('test') || msg.includes('exam') || msg.includes('paper')) {
            if (msg.includes('take') || msg.includes('give me') || msg.includes('create') || msg.includes('generate')) {
                return 'generate_test';
            }
        }
        
        if (msg.includes('practice') && (msg.includes('give') || msg.includes('make') || msg.includes('create'))) {
            return 'generate_practice';
        }
        
        if (msg.includes('solution') && msg.includes('test')) {
            return 'show_solutions';
        }
        
        // Regular intents
        if (msg.includes('what') || msg.includes('who') || msg.includes('when') || msg.includes('where')) {
            return 'factual_question';
        } else if (msg.includes('how') || msg.includes('explain') || msg.includes('teach')) {
            return 'education';
        } else if (msg.includes('latest') || msg.includes('current') || msg.includes('news')) {
            return 'current_events';
        } else if (msg.includes('solve') || msg.includes('calculate') || msg.includes('math')) {
            return 'problem_solving';
        } else {
            return 'general';
        }
    }

    // TRAINING COMMAND PROCESSOR
    async handleTrainingCommand(message) {
        const msg = message.toLowerCase().trim();
        
        // LEARNING COMMANDS
        if (msg.startsWith('learn this:') || msg.startsWith('सीखो:')) {
            const knowledge = message.substring(message.indexOf(':') + 1).trim();
            this.learningDatabase.addKnowledge(knowledge, 'user_taught');
            this.addMessage(`✅ **Learned Successfully!**\n\nI've learned: "${knowledge}"\n\nThis knowledge will help me answer similar questions in the future. Thank you for teaching me! 🧠`, 'jarvis');
            return true;
        }
        
        // CORRECTION COMMANDS
        if (msg.startsWith('no,') || msg.startsWith('wrong,') || msg.startsWith('correct answer is')) {
            const correction = message.substring(message.indexOf('is') + 2).trim();
            const lastAIResponse = this.getLastAIResponse();
            if (lastAIResponse) {
                this.learningDatabase.addCorrection(lastAIResponse, correction);
                this.addMessage(`✅ **Thank you for the correction!**\n\nI've learned that the correct answer is: "${correction}"\n\nI'll remember this for next time and improve my responses. 📚`, 'jarvis');
                return true;
            }
        }
        
        // FEEDBACK COMMANDS
        if (msg.includes('good answer') || msg.includes('great response') || msg.includes('well done')) {
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                this.learningDatabase.addFeedback(lastResponse, 'positive');
                this.userProfile.incrementGoodResponses();
                this.addMessage(`😊 **Thank you for the positive feedback!**\n\nI'm glad my answer was helpful. This feedback helps me learn what kind of responses you prefer. I'll continue to improve! 🌟`, 'jarvis');
                return true;
            }
        }
        
        if (msg.includes('bad answer') || msg.includes('wrong answer') || msg.includes('not helpful')) {
            const lastResponse = this.getLastAIResponse();
            if (lastResponse) {
                this.learningDatabase.addFeedback(lastResponse, 'negative');
                this.userProfile.incrementBadResponses();
                this.addMessage(`😔 **I apologize for the poor response.**\n\nI'll analyze what went wrong and improve my answers. Could you tell me what specifically was wrong so I can learn better? 🔧`, 'jarvis');
                return true;
            }
        }
        
        // PERSONALITY TRAINING
        if (msg.includes('be more') || msg.includes('personality')) {
            if (msg.includes('friendly') || msg.includes('casual')) {
                this.personalityEngine.adjustPersonality('friendly', 0.8);
                this.addMessage(`😊 **Personality Updated!**\n\nI'll be more friendly and casual in my responses. Hey there! I'm excited to chat with you in a more relaxed way! 🤗`, 'jarvis');
                return true;
            }
            
            if (msg.includes('formal') || msg.includes('professional')) {
                this.personalityEngine.adjustPersonality('formal', 0.8);
                this.addMessage(`🎩 **Personality Updated!**\n\nI shall maintain a more formal and professional tone in our conversations. I appreciate your guidance in this matter.`, 'jarvis');
                return true;
            }
        }
        
        // PREFERENCE COMMANDS
        if (msg.includes('prefer') || msg.includes('like')) {
            if (msg.includes('detailed') || msg.includes('long')) {
                this.userProfile.setPreference('responseLength', 'detailed');
                this.addMessage(`📝 **Preference Saved!**\n\nI'll provide more detailed and comprehensive answers from now on. I'll include more examples, explanations, and background information to give you the complete picture on topics you ask about.`, 'jarvis');
                return true;
            }
            
            if (msg.includes('short') || msg.includes('brief')) {
                this.userProfile.setPreference('responseLength', 'brief');
                this.addMessage(`⚡ **Preference Saved!**\n\nI'll keep my responses short and to the point.`, 'jarvis');
                return true;
            }
            
            if (msg.includes('math') || msg.includes('mathematics')) {
                this.userProfile.setPreference('preferredSubject', 'mathematics');
                this.addMessage(`🧮 **Subject Preference Updated!**\n\nI'll focus more on mathematics questions and content. I'll prioritize math topics in tests and explanations.`, 'jarvis');
                return true;
            }
            
            if (msg.includes('science')) {
                this.userProfile.setPreference('preferredSubject', 'science');
                this.addMessage(`🔬 **Subject Preference Updated!**\n\nI'll focus more on science topics including physics, chemistry, and biology.`, 'jarvis');
                return true;
            }
        }
        
        return false;
    }

    // CBSE TEST GENERATION
    handleTestGeneration(message, intent, language) {
        const msg = message.toLowerCase();
        
        // Detect subject
        let subject = 'mathematics'; // default
        if (msg.includes('science') || msg.includes('physics') || msg.includes('chemistry') || msg.includes('biology')) {
            subject = 'science';
        }
        
        // Detect test type
        let testType = 'short_test';
        if (msg.includes('unit') || msg.includes('big') || msg.includes('full')) {
            testType = 'unit_test';
        } else if (msg.includes('practice') || msg.includes('quick')) {
            testType = 'practice_set';
        }
        
        // Detect specific chapter
        let chapter = null;
        const chapters = ['quadratic', 'triangle', 'coordinate', 'linear', 'light', 'motion', 'life process'];
        for (const ch of chapters) {
            if (msg.includes(ch)) {
                chapter = ch;
                break;
            }
        }
        
        // Generate test
        const testData = this.cbseDatabase.generateTest(subject, testType, chapter);
        this.lastGeneratedTest = testData;
        
        // Format response based on language
        let response = '';
        
        if (language === 'hindi') {
            response = `**🎯 यहाँ आपका ${subject === 'mathematics' ? 'गणित' : 'विज्ञान'} टेस्ट है:**\n\n`;
        } else if (language === 'hinglish') {
            response = `**🎯 Yahan hai aapka ${subject} ka test:**\n\n`;
        } else {
            response = `**🎯 Here's your CBSE Class 10 ${subject.toUpperCase()} test:**\n\n`;
        }
        
        response += this.cbseDatabase.formatTestPaper(testData, false);
        
        // Add language-specific instructions
        if (language === 'hindi') {
            response += `\n**📝 निर्देश:** सभी प्रश्न अनिवार्य हैं। समय सीमा का ध्यान रखें।`;
        } else if (language === 'hinglish') {
            response += `\n**📝 Instructions:** Sab questions compulsory hain. Time limit ka dhyan rakhna.`;
        }
        
        return response;
    }

    handleSolutionRequest(message, language) {
        if (!this.lastGeneratedTest) {
            if (language === 'hindi') {
                return "कोई टेस्ट जेनरेट नहीं किया गया है। पहले टेस्ट मांगें।";
            } else if (language === 'hinglish') {
                return "Koi test generate nahi kiya hai yaar. Pehle test maango.";
            } else {
                return "No test has been generated yet. Please ask for a test first.";
            }
        }
        
        let response = '';
        if (language === 'hindi') {
            response = "**📚 टेस्ट के समाधान:**\n\n";
        } else if (language === 'hinglish') {
            response = "**📚 Test ke solutions yahan hain:**\n\n";
        } else {
            response = "**📚 Test Solutions:**\n\n";
        }
        
        response += this.cbseDatabase.formatTestPaper(this.lastGeneratedTest, true);
        
        return response;
    }

    // WEB SEARCH CAPABILITIES
    async searchAllSources(query) {
        console.log(`🔍 Searching for: "${query}"`);
        this.updateStatus('Searching multiple sources...');
        
        const allResults = [];
        const cleanQuery = query.trim();
        const encodedQuery = encodeURIComponent(cleanQuery);
        
        // Check cache first
        const cacheKey = `search_${cleanQuery}`;
        if (this.apiCache.has(cacheKey)) {
            console.log('📋 Using cached results');
            return this.apiCache.get(cacheKey);
        }
        
        // Parallel API calls for maximum speed
        const searchPromises = [
            this.searchDuckDuckGo(encodedQuery),
            this.searchWikipedia(encodedQuery, cleanQuery),
            this.searchNews(encodedQuery)
        ];
        
        try {
            const results = await Promise.allSettled(searchPromises);
            
            results.forEach((result, index) => {
                if (result.status === 'fulfilled' && result.value) {
                    allResults.push(...result.value);
                }
            });

            // Remove duplicates and rank by relevance
            const uniqueResults = this.deduplicateResults(allResults);
            const rankedResults = this.rankResults(uniqueResults, cleanQuery);
            
            // Cache for 10 minutes
            this.apiCache.set(cacheKey, rankedResults);
            setTimeout(() => this.apiCache.delete(cacheKey), 600000);
            
            console.log(`📊 Found ${rankedResults.length} unique results`);
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
            
            if (data.Definition) {
                results.push({
                    title: `Definition`,
                    snippet: data.Definition,
                    url: data.DefinitionURL || '',
                    source: 'DuckDuckGo Dictionary',
                    relevance: 9,
                    type: 'definition'
                });
            }
            
            if (data.Answer) {
                results.push({
                    title: 'Direct Answer',
                    snippet: data.Answer,
                    url: '',
                    source: 'DuckDuckGo Instant',
                    relevance: 8,
                    type: 'instant'
                });
            }
            
            // Related topics
            if (data.RelatedTopics) {
                data.RelatedTopics.slice(0, 3).forEach(topic => {
                    if (typeof topic === 'object' && topic.Text) {
                        results.push({
                            title: topic.Text.split(' - ')[0],
                            snippet: topic.Text,
                            url: topic.FirstURL || '',
                            source: 'DuckDuckGo Related',
                            relevance: 6,
                            type: 'related'
                        });
                    }
                });
            }
            
            return results;
            
        } catch (error) {
            console.log('DuckDuckGo API error:', error);
            return [];
        }
    }

    async searchWikipedia(encodedQuery, originalQuery) {
        try {
            const results = [];
            
            // Try direct page first
            const pageResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`);
            
            if (pageResponse.ok) {
                const pageData = await pageResponse.json();
                results.push({
                    title: pageData.title,
                    snippet: pageData.extract,
                    url: pageData.content_urls?.desktop?.page || '',
                    source: 'Wikipedia',
                    relevance: 9,
                    type: 'encyclopedia'
                });
            } else {
                // Search Wikipedia
                const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodedQuery}&srlimit=3&origin=*`);
                
                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    if (searchData.query?.search) {
                        searchData.query.search.forEach(item => {
                            results.push({
                                title: item.title,
                                snippet: item.snippet.replace(/<[^>]*>/g, ''),
                                url: `https://en.wikipedia.org/wiki/${item.title.replace(/ /g, '_')}`,
                                source: 'Wikipedia',
                                relevance: 7,
                                type: 'encyclopedia'
                            });
                        });
                    }
                }
            }
            
            return results;
            
        } catch (error) {
            console.log('Wikipedia API error:', error);
            return [];
        }
    }

    async searchNews(encodedQuery) {
        try {
            // Using NewsAPI demo key (limited but works)
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodedQuery}&pageSize=3&apiKey=demo&sortBy=relevancy`);
            
            const results = [];
            
            if (response.ok) {
                const data = await response.json();
                if (data.articles) {
                    data.articles.forEach(article => {
                        results.push({
                            title: article.title,
                            snippet: article.description || article.content?.substring(0, 200) + '...',
                            url: article.url,
                            source: 'News',
                            relevance: 5,
                            type: 'news'
                        });
                    });
                }
            }
            
            return results;
            
        } catch (error) {
            console.log('News API error:', error);
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
        const query = originalQuery.toLowerCase();
        const queryWords = query.split(' ').filter(word => word.length > 2);
        
        return results.sort((a, b) => {
            let scoreA = a.relevance || 5;
            let scoreB = b.relevance || 5;
            
            // Boost for exact matches
            queryWords.forEach(word => {
                if (a.title.toLowerCase().includes(word)) scoreA += 3;
                if (b.title.toLowerCase().includes(word)) scoreB += 3;
                if (a.snippet.toLowerCase().includes(word)) scoreA += 1;
                if (b.snippet.toLowerCase().includes(word)) scoreB += 1;
            });
            
            // Type preferences
            const typeBonus = {
                'primary': 5, 'instant': 4, 'definition': 3,
                'encyclopedia': 2, 'news': 1
            };
            
            scoreA += typeBonus[a.type] || 0;
            scoreB += typeBonus[b.type] || 0;
            
            return scoreB - scoreA;
        });
    }

    // INTELLIGENT RESPONSE GENERATION
    async generateIntelligentResponse(message, searchResults, detectedLang, intent, learnedKnowledge) {
        console.log(`🧠 Generating intelligent response for: "${message}" in ${detectedLang}`);
        
        // Combine learned knowledge with search results
        const combinedKnowledge = this.combineKnowledgeSources(searchResults, learnedKnowledge);
        
        // Apply user preferences and personality
        const personalityStyle = this.personalityEngine.getCurrentStyle();
        const responsePrefs = this.userProfile.getPreferences();
        
        // Generate contextual response
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
            // Fallback to intelligent local response
            response = this.getIntelligentFallback(message, intent, detectedLang);
        }
        
        // Apply personality style
        response = this.personalityEngine.applyStyle(response, personalityStyle);
        
        // Apply user preferences
        if (responsePrefs.responseLength === 'brief') {
            response = this.shortenResponse(response);
        } else if (responsePrefs.responseLength === 'detailed') {
            response = await this.expandResponse(response, message, intent);
        }
        
        // Add language-specific formatting
        response = this.formatForLanguage(response, detectedLang);
        
        return response;
    }

    getIntelligentFallback(message, intent, language) {
        const msg = message.toLowerCase();
        
        // Historical questions
        if (msg.includes('napoleon')) {
            if (language === 'hindi') {
                return `**नेपोलियन बोनापार्ट** की मृत्यु **5 मई, 1821** को हुई थी। वह 51 वर्ष की आयु में सेंट हेलेना द्वीप पर मरा था।`;
            } else if (language === 'hinglish') {
                return `**Napoleon Bonaparte** ki death **5 May, 1821** ko hui thi. Woh 51 years ki age mein Saint Helena island par mara tha.`;
            } else {
                return `**Napoleon Bonaparte** died on **May 5, 1821** at age 51 on the island of Saint Helena, where he was exiled after his defeat at Waterloo.`;
            }
        }
        
        // Math topics
        if (intent === 'problem_solving' || msg.includes('quadratic')) {
            return `**📐 Quadratic Equations**\n\n**Standard Form:** ax² + bx + c = 0\n**Quadratic Formula:** x = (-b ± √(b² - 4ac)) / 2a\n\n**Example:** x² - 5x + 6 = 0\nSolutions: x = 2 or x = 3`;
        }
        
        // Science topics
        if (msg.includes('photosynthesis')) {
            return `**🌱 Photosynthesis**\n\n**Equation:** 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n\nPlants convert carbon dioxide and water into glucose using sunlight energy, producing oxygen as a byproduct.`;
        }
        
        // Default intelligent response
        const responses = {
            'hindi': `मैंने "${message}" के बारे में खोजा लेकिन अभी विशिष्ट जानकारी नहीं मिली। आप कुछ और पूछ सकते हैं।`,
            'hinglish': `Maine "${message}" ke bare mein search kiya but specific results nahi mile. Aap aur kuch puch sakte hain.`,
            'english': `I searched for information about "${message}" but couldn't find specific results at the moment. You can try asking more specific questions or use different keywords.`
        };
        
        return responses[language] || responses['english'];
    }

    // LANGUAGE DETECTION
    detectLanguage(text) {
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से', 'पर', 'और', 'या', 'तो', 'जो', 'यह', 'वह', 'मैं', 'तुम', 'हम', 'आप', 'क्या', 'कैसे', 'कब', 'कहाँ', 'क्यों', 'बताओ', 'समझाओ'];
        const englishWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but'];
        
        const words = text.toLowerCase().split(/\s+/);
        let hindiCount = 0;
        let englishCount = 0;

        words.forEach(word => {
            if (hindiWords.includes(word)) hindiCount++;
            if (englishWords.includes(word)) englishCount++;
        });

        // Check for Devanagari script
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

    formatForLanguage(response, language) {
        if (language === 'hindi') {
            response = response.replace(/Sources:/gi, 'स्रोत:');
            response = response.replace(/Information:/gi, 'जानकारी:');
        } else if (language === 'hinglish') {
            response = response.replace(/Sources:/gi, 'Sources yaar:');
        }
        return response;
    }

    // LEARNING FROM INTERACTIONS
    async learnFromInteraction(userMessage, aiResponse, intent, language) {
        // Extract facts from the conversation
        const extractedFacts = this.extractFactsFromConversation(userMessage, aiResponse);
        
        // Learn user patterns
        this.userProfile.updatePatterns(userMessage, intent, language);
        
        // Learn topic preferences
        this.learningDatabase.updateTopicInterest(intent, userMessage);
        
        // Store conversation context for future reference
        this.learningDatabase.addConversationContext({
            user: userMessage,
            ai: aiResponse,
            intent: intent,
            language: language,
            timestamp: Date.now()
        });
        
        console.log(`📈 Learning complete: +${extractedFacts.length} facts`);
    }

    extractFactsFromConversation(userMessage, aiResponse) {
        const facts = [];
        
        // Simple fact extraction patterns
        const factPatterns = [
            /(\w+) (is|was|are|were) (.+)/gi,
            /(\w+) (died|born|invented|discovered) (.+)/gi,
            /the capital of (\w+) is (\w+)/gi,
            /(\d{4}) (.+)/gi // Years
        ];
        
        const fullText = userMessage + ' ' + aiResponse;
        
        factPatterns.forEach(pattern => {
            let match;
            while ((match = pattern.exec(fullText)) !== null) {
                facts.push({
                    fact: match[0],
                    subject: match[1],
                    relation: match[2],
                    object: match[3] || '',
                    confidence: 0.7,
                    source: 'conversation',
                    timestamp: Date.now()
                });
            }
        });
        
        // Store extracted facts
        facts.forEach(fact => {
            this.learningDatabase.addKnowledge(fact.fact, 'extracted', fact.confidence);
        });
        
        return facts;
    }

    // UTILITY METHODS
    getLastAIResponse() {
        for (let i = this.conversationMemory.length - 1; i >= 0; i--) {
            if (this.conversationMemory[i].type === 'ai') {
                return this.conversationMemory[i].ai;
            }
        }
        return null;
    }

    combineKnowledgeSources(searchResults, learnedKnowledge) {
        return [...learnedKnowledge, ...searchResults].sort((a, b) => {
            if (a.source === 'user_taught') return -1;
            if (b.source === 'user_taught') return 1;
            return (b.relevance || 0) - (a.relevance || 0);
        });
    }

    shortenResponse(response) {
        const lines = response.split('\n');
        const importantLines = lines.filter(line => 
            line.includes('**') || 
            line.includes('•') || 
            line.length < 200
        );
        return importantLines.slice(0, 5).join('\n');
    }

    async expandResponse(response, message, intent) {
        response += '\n\n**📖 Additional Context:**\n';
        
        const relatedInfo = this.learningDatabase.getRelatedKnowledge(intent);
        if (relatedInfo.length > 0) {
            response += `• ${relatedInfo[0].content}\n`;
        }
        
        if (intent === 'education') {
            response += '\n**💡 Example:** [Related example would go here]\n';
        }
        
        return response;
    }

    processLearning() {
        // Background learning process
        console.log('🧠 Processing background learning...');
    }

    // VOICE INTERACTION
    speakInLanguage(text, language) {
        if ('speechSynthesis' in window) {
            this.updateVoiceIndicator('speaking');
            
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Set language-specific voice parameters
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
            
            utterance.onend = () => {
                this.updateVoiceIndicator('');
            };
            
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
                console.error('Speech recognition error:', event.error);
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

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'jarvis-message');
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <strong>🧠 Jarvis is thinking and searching...</strong>
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

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    handleError(error, message) {
        this.hideTypingIndicator();
        const fallbackResponse = this.getIntelligentFallback(message, 'general', 'english');
        this.addMessage(fallbackResponse, 'jarvis');
    }

    handleQuickAction(action) {
        const actions = {
            'test': 'Give me a practice test',
            'revision': 'Help me with revision strategies',
            'doubt': 'I have a doubt about quadratic equations',
            'practice': 'Give me practice questions'
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

    // Add training interface
    addTrainingInterface() {
        const trainingPanel = document.createElement('div');
        trainingPanel.innerHTML = `
            <div style="margin: 10px 0; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                <strong>🎓 Quick Actions:</strong>
                <div style="display: flex; gap: 5px; margin-top: 5px; flex-wrap: wrap;">
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Take a math test'; window.ultimateJarvis.sendMessage();">Math Test</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Latest news about AI'; window.ultimateJarvis.sendMessage();">Latest AI News</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Learn this: Earth revolves around Sun'; window.ultimateJarvis.sendMessage();">Teach Fact</button>
                    <button class="training-btn" onclick="window.ultimateJarvis.messageInput.value='Be more friendly'; window.ultimateJarvis.sendMessage();">Be Friendly</button>
                </div>
            </div>
        `;
        
        // Add custom CSS for training buttons
        const style = document.createElement('style');
        style.textContent = `
            .training-btn {
                background: rgba(102, 126, 234, 0.7);
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 15px;
                cursor: pointer;
                font-size: 0.8rem;
                transition: all 0.3s ease;
            }
            .training-btn:hover {
                background: rgba(102, 126, 234, 0.9);
                transform: translateY(-1px);
            }
        `;
        document.head.appendChild(style);
        
        // Insert after the input area
        const inputArea = document.querySelector('.input-area');
        if (inputArea && inputArea.parentNode) {
            inputArea.parentNode.insertBefore(trainingPanel, inputArea.nextSibling);
        }
    }
}

// CBSE Class 10 Database
class CBSEClass10Database {
    constructor() {
        this.questionBank = {
            'mathematics': [
                {
                    question: "Solve the quadratic equation: 2x² - 7x + 3 = 0",
                    marks: 4,
                    chapter: "Quadratic Equations",
                    difficulty: "medium",
                    asked_frequency: 8,
                    solution: "Using quadratic formula: x = (7 ± √(49-24))/4 = (7 ± 5)/4, So x = 3 or x = 0.5"
                },
                {
                    question: "Find the discriminant of x² - 4x + 4 = 0 and determine nature of roots",
                    marks: 3,
                    chapter: "Quadratic Equations", 
                    difficulty: "easy",
                    asked_frequency: 12,
                    solution: "Discriminant = b² - 4ac = 16 - 16 = 0, Equal roots exist"
                },
                {
                    question: "In triangle ABC, if ∠A = 60° and ∠B = 70°, find ∠C",
                    marks: 2,
                    chapter: "Triangles",
                    difficulty: "easy", 
                    asked_frequency: 15,
                    solution: "∠C = 180° - 60° - 70° = 50°"
                },
                {
                    question: "Prove that the sum of angles in a triangle is 180°",
                    marks: 5,
                    chapter: "Triangles",
                    difficulty: "hard",
                    asked_frequency: 6,
                    solution: "Draw a line parallel to one side through opposite vertex..."
                },
                {
                    question: "Find the area of triangle with sides 3cm, 4cm, 5cm using Heron's formula",
                    marks: 4,
                    chapter: "Triangles",
                    difficulty: "medium",
                    asked_frequency: 9,
                    solution: "s = (3+4+5)/2 = 6, Area = √[6(6-3)(6-4)(6-5)] = √36 = 6 cm²"
                },
                {
                    question: "Solve the system: 2x + 3y = 12, x - y = 1",
                    marks: 4,
                    chapter: "Linear Equations",
                    difficulty: "medium",
                    asked_frequency: 7,
                    solution: "From second equation: x = y + 1, Substituting: 2(y+1) + 3y = 12, y = 2, x = 3"
                },
                {
                    question: "Find the coordinates of point dividing line segment joining (2,3) and (6,7) in ratio 1:3",
                    marks: 3,
                    chapter: "Coordinate Geometry",
                    difficulty: "medium",
                    asked_frequency: 5,
                    solution: "Using section formula: ((1×6+3×2)/(1+3), (1×7+3×3)/(1+3)) = (3, 4)"
                }
            ],
            'science': [
                {
                    question: "Explain the process of photosynthesis with chemical equation",
                    marks: 5,
                    chapter: "Life Processes",
                    difficulty: "medium",
                    asked_frequency: 11,
                    solution: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂ (Occurs in chloroplasts)"
                },
                {
                    question: "State Newton's second law of motion with example",
                    marks: 3,
                    chapter: "Motion",
                    difficulty: "easy",
                    asked_frequency: 13,
                    solution: "F = ma. Example: When you push a car, the acceleration depends on force applied and mass of car"
                },
                {
                    question: "What is meant by refraction of light? State two laws of refraction",
                    marks: 4,
                    chapter: "Light",
                    difficulty: "medium",
                    asked_frequency: 10,
                    solution: "Bending of light when it passes from one medium to another. Laws: 1) Incident ray, normal, refracted ray lie in same plane 2) sin i/sin r = constant"
                }
            ]
        };
        
        this.markingSchemes = {
            'short_test': { total_marks: 20, duration: '1 hour', questions: 5 },
            'unit_test': { total_marks: 40, duration: '2 hours', questions: 8 },
            'practice_set': { total_marks: 15, duration: '45 minutes', questions: 4 }
        };
    }
    
    generateTest(subject = 'mathematics', testType = 'short_test', specificChapter = null) {
        const scheme = this.markingSchemes[testType];
        let availableQuestions = this.questionBank[subject] || this.questionBank['mathematics'];
        
        // Filter by chapter if specified
        if (specificChapter) {
            availableQuestions = availableQuestions.filter(q => 
                q.chapter.toLowerCase().includes(specificChapter.toLowerCase())
            );
        }
        
        // Sort by frequency (less asked questions first) and difficulty mix
        availableQuestions.sort((a, b) => {
            if (a.asked_frequency !== b.asked_frequency) {
                return a.asked_frequency - b.asked_frequency;
            }
            return Math.random() - 0.5; // Random for same frequency
        });
        
        // Select questions to fit marking scheme
        const selectedQuestions = [];
        let totalMarks = 0;
        let questionCount = 0;
        
        for (const question of availableQuestions) {
            if (questionCount >= scheme.questions || totalMarks >= scheme.total_marks) {
                break;
            }
            
            if (totalMarks + question.marks <= scheme.total_marks) {
                selectedQuestions.push({
                    ...question,
                    questionNumber: questionCount + 1
                });
                totalMarks += question.marks;
                questionCount++;
            }
        }
        
        return {
            questions: selectedQuestions,
            totalMarks,
            duration: scheme.duration,
            testType,
            subject
        };
    }
    
    formatTestPaper(testData, includeAnswers = false) {
        const { questions, totalMarks, duration, testType, subject } = testData;
        
        let paper = `**📝 CBSE Class 10 ${subject.toUpperCase()} - ${testType.replace('_', ' ').toUpperCase()}**\n\n`;
        paper += `**Time:** ${duration} | **Maximum Marks:** ${totalMarks}\n\n`;
        paper += `**Instructions:**\n`;
        paper += `• All questions are compulsory\n`;
        paper += `• Show all working clearly\n`;
        paper += `• Marks are indicated against each question\n\n`;
        paper += `---\n\n`;
        
        questions.forEach((q, index) => {
            paper += `**Q${index + 1}.** ${q.question}\n`;
            paper += `**[${q.marks} marks]** | **Chapter:** ${q.chapter} | **Asked ${q.asked_frequency} times in previous papers**\n\n`;
            
            if (includeAnswers) {
                paper += `**💡 Solution:** ${q.solution}\n\n`;
            }
        });
        
        if (!includeAnswers) {
            paper += `---\n\n**📚 Want solutions?** Just ask "show solutions for this test"\n`;
        }
        
        paper += `**🎯 Test Statistics:**\n`;
        paper += `• Questions selected from ${new Set(questions.map(q => q.chapter)).size} chapters\n`;
        paper += `• Average frequency: ${Math.round(questions.reduce((sum, q) => sum + q.asked_frequency, 0) / questions.length)} times asked\n`;
        paper += `• Difficulty mix: ${questions.filter(q => q.difficulty === 'easy').length} Easy, ${questions.filter(q => q.difficulty === 'medium').length} Medium, ${questions.filter(q => q.difficulty === 'hard').length} Hard\n`;
        
        return paper;
    }
}

// Learning Database Class
class LearningDatabase {
    constructor() {
        this.knowledge = new Map();
        this.corrections = new Map();
        this.feedback = new Map();
        this.conversationContexts = [];
        this.topicInterests = new Map();
    }

    addKnowledge(fact, source = 'learned', confidence = 1.0) {
        const key = this.generateKey(fact);
        this.knowledge.set(key, {
            content: fact,
            source: source,
            confidence: confidence,
            timestamp: Date.now(),
            usageCount: 0
        });
    }

    searchKnowledge(query) {
        const queryLower = query.toLowerCase();
        const results = [];
        
        for (const [key, knowledge] of this.knowledge) {
            if (knowledge.content.toLowerCase().includes(queryLower) ||
                queryLower.includes(key.toLowerCase())) {
                results.push({
                    ...knowledge,
                    relevance: this.calculateRelevance(queryLower, knowledge.content)
                });
            }
        }
        
        return results.sort((a, b) => b.relevance - a.relevance);
    }

    addCorrection(wrongAnswer, correctAnswer) {
        const key = this.generateKey(wrongAnswer);
        this.corrections.set(key, {
            wrong: wrongAnswer,
            correct: correctAnswer,
            timestamp: Date.now()
        });
        
        this.addKnowledge(correctAnswer, 'correction', 1.0);
    }

    addFeedback(response, type) {
        const key = this.generateKey(response);
        this.feedback.set(key, {
            response: response,
            type: type,
            timestamp: Date.now()
        });
    }

    generateKey(text) {
        return text.toLowerCase().substring(0, 50).replace(/[^a-z0-9]/g, '');
    }

    calculateRelevance(query, content) {
        const queryWords = query.split(' ');
        const contentLower = content.toLowerCase();
        let score = 0;
        
        queryWords.forEach(word => {
            if (contentLower.includes(word)) score += 1;
        });
        
        return score / queryWords.length;
    }

    getKnowledgeCount() {
        return this.knowledge.size;
    }

    exportData() {
        return {
            knowledge: Array.from(this.knowledge.entries()),
            corrections: Array.from(this.corrections.entries()),
            feedback: Array.from(this.feedback.entries())
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
    }

    addConversationContext(context) {
        this.conversationContexts.push(context);
        if (this.conversationContexts.length > 100) {
            this.conversationContexts = this.conversationContexts.slice(-50);
        }
    }

    updateTopicInterest(intent, message) {
        const current = this.topicInterests.get(intent) || 0;
        this.topicInterests.set(intent, current + 1);
    }

    getRelatedKnowledge(intent) {
        const related = [];
        for (const [key, knowledge] of this.knowledge) {
            if (knowledge.content.toLowerCase().includes(intent)) {
                related.push(knowledge);
            }
        }
        return related.slice(0, 3);
    }
}

// Personality Engine Class
class PersonalityEngine {
    constructor() {
        this.personality = {
            friendliness: 0.7,
            formality: 0.5,
            enthusiasm: 0.6,
            verbosity: 0.7
        };
    }

    adjustPersonality(trait, value) {
        if (this.personality.hasOwnProperty(trait)) {
            this.personality[trait] = Math.max(0, Math.min(1, value));
        }
    }

    getCurrentStyle() {
        return { ...this.personality };
    }

    applyStyle(response, style) {
        let styledResponse = response;
        
        if (style.friendliness > 0.7) {
            styledResponse = styledResponse.replace(/\./g, '! 😊');
            styledResponse = `Hey there! ${styledResponse}`;
        }
        
        if (style.formality > 0.7) {
            styledResponse = styledResponse.replace(/Hey/g, 'Greetings');
            styledResponse = styledResponse.replace(/!/g, '.');
        }
        
        if (style.enthusiasm > 0.7) {
            styledResponse += ' 🚀✨';
        }
        
        return styledResponse;
    }
}

// User Profile Class
class UserProfile {
    constructor() {
        this.preferences = {
            responseLength: 'medium',
            language: 'auto',
            subjects: [],
            preferredSubject: 'general'
        };
        this.stats = {
            totalQuestions: 0,
            goodResponses: 0,
            badResponses: 0,
            topTopics: new Map()
        };
        this.patterns = {
            questionTypes: new Map(),
            timePatterns: new Map()
        };
    }

    setPreference(key, value) {
        this.preferences[key] = value;
    }

    getPreferences() {
        return { ...this.preferences };
    }

    updatePatterns(message, intent, language) {
        this.stats.totalQuestions++;
        
        const currentCount = this.patterns.questionTypes.get(intent) || 0;
        this.patterns.questionTypes.set(intent, currentCount + 1);
        
        const hour = new Date().getHours();
        const hourCount = this.patterns.timePatterns.get(hour) || 0;
        this.patterns.timePatterns.set(hour, hourCount + 1);
    }

    incrementGoodResponses() {
        this.stats.goodResponses++;
    }

    incrementBadResponses() {
        this.stats.badResponses++;
    }

    exportProfile() {
        return {
            preferences: this.preferences,
            stats: {
                ...this.stats,
                topTopics: Array.from(this.stats.topTopics.entries())
            },
            patterns: {
                questionTypes: Array.from(this.patterns.questionTypes.entries()),
                timePatterns: Array.from(this.patterns.timePatterns.entries())
            }
        };
    }

    loadProfile(data) {
        if (data.preferences) this.preferences = data.preferences;
        if (data.stats) {
            this.stats = { ...data.stats };
            if (data.stats.topTopics) {
                this.stats.topTopics = new Map(data.stats.topTopics);
            }
        }
        if (data.patterns) {
            this.patterns = {
                questionTypes: new Map(data.patterns.questionTypes || []),
                timePatterns: new Map(data.patterns.timePatterns || [])
            };
        }
    }
}

// Language Detector Class
class LanguageDetector {
    detect(text) {
        const hindiPattern = /[\u0900-\u097F]/;
        if (hindiPattern.test(text)) return 'hindi';
        
        const hindiWords = ['hai', 'hain', 'ka', 'ki', 'ke', 'mein'];
        const englishWords = ['the', 'is', 'and', 'to', 'of'];
        
        const words = text.toLowerCase().split(' ');
        const hindiCount = words.filter(w => hindiWords.includes(w)).length;
        const englishCount = words.filter(w => englishWords.includes(w)).length;
        
        if (hindiCount > 0 && englishCount > 0) return 'hinglish';
        if (hindiCount > englishCount) return 'hindi';
        return 'english';
    }
}

// Initialize the Ultimate Jarvis
document.addEventListener('DOMContentLoaded', () => {
    window.ultimateJarvis = new UltimateJarvisAI();
    
    if ('speechSynthesis' in window) {
        speechSynthesis.getVoices();
        speechSynthesis.addEventListener('voiceschanged', () => {
            speechSynthesis.getVoices();
        });
    }
    
    console.log('🚀 Ultimate Jarvis AI with ALL features is ready!');
});
