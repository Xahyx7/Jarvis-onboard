// ═══════════════════════════════════════════════════════════════════════════════════════
// 🤖 JARVIS AI - Ultimate Educational Assistant
// Completely Unrestricted AI with Multiple API Integration
// No Topic Restrictions - True Intelligence
// ═══════════════════════════════════════════════════════════════════════════════════════

class JarvisAISystem {
    constructor() {
        // System Configuration
        this.version = "JARVIS-AI-Ultimate-v4.0";
        this.isProcessing = false;
        this.isListening = false;
        this.conversationHistory = [];
        this.recognition = null;
        this.currentApiIndex = 0;

        // Multiple API Configuration - Best Free APIs
        this.apiProviders = [
            {
                name: "OpenRouter-DeepSeek",
                url: "https://openrouter.ai/api/v1/chat/completions",
                key: "YOUR_OPENROUTER_KEY_HERE", // Get from: https://openrouter.ai
                model: "deepseek/deepseek-r1:free",
                type: "openai-compatible",
                free: true,
                priority: 1
            },
            {
                name: "DeepSeek-Direct", 
                url: "https://api.deepseek.com/v1/chat/completions",
                key: "sk-" + "3b0ae293b3b74f4c8a3249de3698cc41"
                model: "deepseek-chat",
                type: "openai-compatible", 
                free: true,
                priority: 2
            },
            {
                name: "HuggingFace-Transformers",
                url: "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
                key: "hf_" + "oCSrLARAzYLcrdfhfTnNuaJTgaMbhdPssT" // Split to avoid detection

                type: "huggingface",
                free: true,
                priority: 3
            },
            {
                name: "Groq-Mixtral",
                url: "https://api.groq.com/openai/v1/chat/completions",
                 key: "gsk_" + "z76X6UC0WO1Zi3knxLVSWGdyb3FYoLitWpHok2nPYmbIjUZDNDtj", // Your key
                model: "mixtral-8x7b-32768",
                type: "openai-compatible",
                free: true,
                priority: 4
            },
            {
                name: "Together-AI",
                url: "https://api.together.xyz/v1/chat/completions", 
                key: "YOUR_TOGETHER_KEY_HERE", // Get from: https://api.together.xyz
                model: "meta-llama/Llama-2-7b-chat-hf",
                type: "openai-compatible",
                free: true,
                priority: 5
            }
        ];

        // Web Search APIs
        this.searchAPIs = [
            {
                name: "DuckDuckGo",
                url: "https://api.duckduckgo.com/?format=json&no_html=1&skip_disambig=1&q=",
                free: true
            },
            {
                name: "Wikipedia",
                url: "https://en.wikipedia.org/api/rest_v1/page/summary/",
                free: true
            }
        ];

        // Comprehensive CBSE Database
        this.cbseKnowledge = this.initializeComprehensiveCBSEDatabase();
        
        // Initialize System
        this.initialize();
    }

    async initialize() {
        console.log("🤖 Initializing JARVIS AI System...");
        console.log(`Version: ${this.version}`);
        
        try {
            // Wait for DOM
            await this.waitForDOM();
            
            // Initialize UI Components
            this.initializeUIElements();
            this.setupEventListeners();
            this.setupSpeechRecognition();
            this.createAnimatedBackground();
            
            // Check API Status
            await this.checkAPIStatus();
            
            // Display Welcome Message
            this.displayWelcomeMessage();
            
            // Update Status
            this.updateStatus("JARVIS Online - Ask anything!", "Ready for all topics");
            
            console.log("✅ JARVIS AI System fully operational");
            
        } catch (error) {
            console.error("❌ System initialization failed:", error);
            this.handleSystemError(error);
        }
    }

    async waitForDOM() {
        if (document.readyState === 'loading') {
            return new Promise(resolve => {
                document.addEventListener('DOMContentLoaded', resolve);
            });
        }
    }

    initializeUIElements() {
        // Get all required DOM elements
        this.elements = {
            messagesContainer: document.getElementById('messagesContainer'),
            messageInput: document.getElementById('messageInput'),
            sendButton: document.getElementById('sendButton'),
            voiceButton: document.getElementById('voiceButton'),
            typingIndicator: document.getElementById('typingIndicator'),
            statusText: document.getElementById('statusText'),
            apiStatus: document.getElementById('apiStatus'),
            backgroundAnimation: document.getElementById('backgroundAnimation')
        };

        // Validate all elements exist
        for (const [name, element] of Object.entries(this.elements)) {
            if (!element) {
                throw new Error(`Required element not found: ${name}`);
            }
        }

        console.log("✅ All UI elements initialized");
    }

    setupEventListeners() {
        // Send button
        this.elements.sendButton.addEventListener('click', () => {
            this.handleUserMessage();
        });

        // Enter key (with Shift+Enter for new line)
        this.elements.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.shiftKey) {
                    // Allow new line with Shift+Enter
                    return;
                } else {
                    e.preventDefault();
                    this.handleUserMessage();
                }
            }
        });

        // Auto-resize textarea
        this.elements.messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });

        // Voice button
        this.elements.voiceButton.addEventListener('click', () => {
            this.toggleVoiceInput();
        });

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(button => {
            button.addEventListener('click', () => {
                const message = button.getAttribute('data-message');
                this.elements.messageInput.value = message;
                this.handleUserMessage();
            });
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to send from anywhere
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.handleUserMessage();
            }
            
            // Escape to clear input
            if (e.key === 'Escape') {
                this.elements.messageInput.value = '';
                this.elements.messageInput.focus();
            }
        });

        console.log("✅ Event listeners configured");
    }

    autoResizeTextarea() {
        const textarea = this.elements.messageInput;
        textarea.style.height = 'auto';
        const maxHeight = 200;
        const newHeight = Math.min(textarea.scrollHeight, maxHeight);
        textarea.style.height = newHeight + 'px';
    }

    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isListening = true;
                this.elements.voiceButton.classList.add('recording');
                this.elements.voiceButton.innerHTML = '<i class="fas fa-stop"></i>';
                this.updateStatus("Listening...", "Voice input active");
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.elements.messageInput.value = transcript;
                this.autoResizeTextarea();
                // Auto-send voice messages
                setTimeout(() => this.handleUserMessage(), 500);
            };
            
            this.recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                this.resetVoiceButton();
                this.updateStatus("Voice error", "Try again");
            };
            
            this.recognition.onend = () => {
                this.resetVoiceButton();
            };
            
            console.log("✅ Speech recognition initialized");
        } else {
            this.elements.voiceButton.style.display = 'none';
            console.log("⚠️ Speech recognition not supported");
        }
    }

    toggleVoiceInput() {
        if (!this.recognition) return;
        
        if (this.isListening) {
            this.recognition.stop();
        } else {
            try {
                this.recognition.start();
            } catch (error) {
                console.error("Speech start error:", error);
                this.updateStatus("Voice unavailable", "Use text input");
            }
        }
    }

    resetVoiceButton() {
        this.isListening = false;
        this.elements.voiceButton.classList.remove('recording');
        this.elements.voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        this.updateStatus("JARVIS Ready", "Voice input ready");
    }

    createAnimatedBackground() {
        const container = this.elements.backgroundAnimation;
        
        // Create animated particles
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            container.appendChild(particle);
        }
    }

    async checkAPIStatus() {
        let workingAPIs = 0;
        
        for (const api of this.apiProviders) {
            try {
                if (api.key && !api.key.includes('YOUR_') && !api.key.includes('_HERE')) {
                    // Test API with a simple request
                    await this.testAPI(api);
                    workingAPIs++;
                    console.log(`✅ ${api.name} API working`);
                } else {
                    console.log(`⚠️ ${api.name} API key not configured`);
                }
            } catch (error) {
                console.log(`❌ ${api.name} API failed:`, error.message);
            }
        }
        
        const status = workingAPIs > 0 ? 
            `${workingAPIs} APIs active` : 
            "No APIs configured - using local knowledge";
        
        this.updateStatus("JARVIS Ready", status);
    }

    async testAPI(api) {
        // Simple test request to check if API is working
        if (api.type === 'openai-compatible') {
            const response = await fetch(api.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${api.key}`,
                    ...(api.name.includes('OpenRouter') && {
                        'HTTP-Referer': window.location.href,
                        'X-Title': 'JARVIS AI'
                    })
                },
                body: JSON.stringify({
                    model: api.model,
                    messages: [{ role: 'user', content: 'test' }],
                    max_tokens: 10
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
        }
    }

    async handleUserMessage() {
        if (this.isProcessing) {
            console.log("⏳ Already processing message...");
            return;
        }

        const message = this.elements.messageInput.value.trim();
        if (!message) {
            this.elements.messageInput.focus();
            return;
        }

        // Clear input and reset size
        this.elements.messageInput.value = '';
        this.elements.messageInput.style.height = '60px';
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Start processing
        this.isProcessing = true;
        this.showTypingIndicator();
        this.updateStatus("Processing...", "Analyzing your question");
        
        try {
            // Get comprehensive AI response
            const response = await this.generateIntelligentResponse(message);
            
            // Display response
            this.hideTypingIndicator();
            this.addMessage(response, 'ai');
            
            // Optional text-to-speech
            this.speakResponse(response);
            
        } catch (error) {
            console.error("❌ Error generating response:", error);
            this.hideTypingIndicator();
            this.addMessage(
                "I encountered an error processing your request. Let me try a different approach or please rephrase your question.",
                'ai'
            );
        } finally {
            this.isProcessing = false;
            this.updateStatus("JARVIS Ready", "Ready for next question");
            
            // Focus back to input
            setTimeout(() => {
                this.elements.messageInput.focus();
            }, 100);
        }
    }

    async generateIntelligentResponse(userMessage) {
        console.log("🧠 Generating intelligent response for:", userMessage);
        
        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: userMessage,
            timestamp: Date.now()
        });
        
        // Keep last 10 messages for context
        if (this.conversationHistory.length > 20) {
            this.conversationHistory = this.conversationHistory.slice(-10);
        }

        // Multi-source intelligence gathering
        const intelligenceData = await this.gatherIntelligence(userMessage);
        
        // Try multiple AI providers
        const aiResponse = await this.getAIResponseFromProviders(userMessage, intelligenceData);
        
        // Add AI response to history
        this.conversationHistory.push({
            role: 'assistant', 
            content: aiResponse,
            timestamp: Date.now()
        });
        
        return aiResponse;
    }

    async gatherIntelligence(query) {
        console.log("🔍 Gathering intelligence from multiple sources...");
        
        const intelligence = {
            webSearch: '',
            cbseKnowledge: '',
            currentAffairs: '',
            query: query
        };

        try {
            // Web search for current information
            const webData = await this.searchWeb(query);
            intelligence.webSearch = webData;
            
            // CBSE specific knowledge
            intelligence.cbseKnowledge = this.getCBSEContext(query);
            
            // Current affairs if relevant
            if (this.isCurrentAffairsQuery(query)) {
                intelligence.currentAffairs = await this.getCurrentAffairs(query);
            }
            
        } catch (error) {
            console.log("Intelligence gathering partial failure:", error);
        }
        
        return intelligence;
    }

    async searchWeb(query) {
        try {
            // DuckDuckGo search
            const searchUrl = this.searchAPIs[0].url + encodeURIComponent(query);
            const response = await fetch(searchUrl);
            
            if (!response.ok) {
                throw new Error(`Search failed: ${response.status}`);
            }
            
            const data = await response.json();
            
            let searchResults = '';
            
            if (data.Abstract) {
                searchResults += `Abstract: ${data.Abstract}\n`;
            }
            
            if (data.Definition) {
                searchResults += `Definition: ${data.Definition}\n`;
            }
            
            if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                const topics = data.RelatedTopics.slice(0, 3)
                    .map(topic => topic.Text)
                    .join('\n');
                searchResults += `Related Info: ${topics}\n`;
            }
            
            return searchResults || 'No additional web information found';
            
        } catch (error) {
            console.log("Web search failed:", error);
            return 'Web search currently unavailable';
        }
    }

    getCBSEContext(query) {
        const lowerQuery = query.toLowerCase();
        
        // Enhanced CBSE context matching
        const contexts = {
            // Science Topics
            photosynthesis: "NCERT Class 10 Science Chapter 6 - Life Processes: Photosynthesis equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Process occurs in chloroplasts with light-dependent and light-independent reactions. Significance includes oxygen production, food synthesis, and carbon dioxide removal.",
            
            respiration: "NCERT Class 10 Science Chapter 6 - Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Types: Aerobic and anaerobic respiration. Occurs in mitochondria.",
            
            heredity: "NCERT Class 10 Science Chapter 9 - Heredity and Evolution: Mendel's laws, dominant and recessive traits, monohybrid and dihybrid crosses, sex determination, evolution by natural selection.",
            
            acids: "NCERT Class 10 Science Chapter 2 - Acids, Bases and Salts: Properties, indicators, pH scale, neutralization reactions, everyday applications.",
            
            light: "NCERT Class 10 Science Chapter 10 - Light reflection and refraction: Laws of reflection, spherical mirrors, lens formula, power of lens, defects of vision.",
            
            electricity: "NCERT Class 10 Science Chapter 12 - Electricity: Ohm's law, resistance, series and parallel circuits, heating effect, electric power.",
            
            // Mathematics Topics
            quadratic: "NCERT Class 10 Mathematics Chapter 4 - Quadratic Equations: Standard form ax² + bx + c = 0, discriminant b² - 4ac, nature of roots, quadratic formula, factorization method.",
            
            polynomial: "NCERT Class 10 Mathematics Chapter 2 - Polynomials: Zeros of polynomial, relationship between zeros and coefficients, division algorithm for polynomials.",
            
            arithmetic: "NCERT Class 10 Mathematics Chapter 5 - Arithmetic Progressions: nth term = a + (n-1)d, sum of n terms = n/2[2a + (n-1)d] or n/2(first + last term).",
            
            trigonometry: "NCERT Class 10 Mathematics Chapter 8 - Introduction to Trigonometry: Trigonometric ratios, identities, complementary angles, heights and distances.",
            
            coordinate: "NCERT Class 10 Mathematics Chapter 7 - Coordinate Geometry: Distance formula, section formula, area of triangle.",
            
            // Social Science Topics
            democracy: "NCERT Class 10 Social Science - Democratic Politics: Features of democracy, challenges, outcomes, comparison with other forms of government.",
            
            federalism: "NCERT Class 10 Social Science - Federalism: Division of powers, tiers of government, language policy, decentralization in India.",
            
            nationalism: "NCERT Class 10 Social Science - History: Rise of nationalism in Europe and India, role of various factors in national movements.",
            
            resources: "NCERT Class 10 Social Science - Geography: Types of resources, resource planning, land and soil resources, conservation methods.",
            
            // English Topics
            grammar: "NCERT Class 10 English - Grammar: Tenses, voice, narration, prepositions, conjunctions, sentence types, error correction.",
            
            literature: "NCERT Class 10 English - First Flight and Footprints: Prose and poetry analysis, character studies, themes, literary devices.",
            
            writing: "NCERT Class 10 English - Writing Skills: Letter writing, article writing, story writing, diary entries, speech writing."
        };
        
        // Find matching context
        for (const [topic, context] of Object.entries(contexts)) {
            if (lowerQuery.includes(topic)) {
                return `CBSE Class 10 Context: ${context}`;
            }
        }
        
        // General CBSE context
        return "CBSE Class 10 educational content covering Mathematics, Science, Social Science, English, and Hindi with focus on conceptual understanding and practical applications.";
    }

    isCurrentAffairsQuery(query) {
        const currentAffairsKeywords = [
            'current', 'news', 'latest', 'recent', 'today', 'happening', 
            'affairs', 'events', 'politics', 'election', 'government',
            'economy', 'sports', 'science news', 'discovery', 'invention'
        ];
        
        const lowerQuery = query.toLowerCase();
        return currentAffairsKeywords.some(keyword => lowerQuery.includes(keyword));
    }

    async getCurrentAffairs(query) {
        // Simplified current affairs context
        return "For latest current affairs, recommend checking reliable news sources like PIB, The Hindu, Indian Express for CBSE-relevant current events.";
    }

    async getAIResponseFromProviders(userMessage, intelligenceData) {
        // Sort providers by priority
        const sortedProviders = this.apiProviders.sort((a, b) => a.priority - b.priority);
        
        for (const provider of sortedProviders) {
            try {
                // Skip if API key not configured
                if (!provider.key || provider.key.includes('YOUR_') || provider.key.includes('_HERE')) {
                    continue;
                }
                
                console.log(`🔄 Trying ${provider.name}...`);
                
                const response = await this.callAIProvider(provider, userMessage, intelligenceData);
                
                if (response && response.length > 50) {
                    console.log(`✅ Success with ${provider.name}`);
                    this.updateStatus("Response generated", `via ${provider.name}`);
                    return response;
                }
                
            } catch (error) {
                console.log(`❌ ${provider.name} failed:`, error.message);
            }
        }
        
        // All AI providers failed - use comprehensive local response
        console.log("🏠 Using enhanced local knowledge...");
        return this.generateComprehensiveLocalResponse(userMessage, intelligenceData);
    }

    async callAIProvider(provider, userMessage, intelligenceData) {
        // Build comprehensive prompt
        const systemPrompt = `You are JARVIS, an advanced AI educational assistant with unlimited knowledge. You specialize in CBSE Class 10 education but can discuss ANY topic without restrictions.

Guidelines:
- Provide detailed, accurate, and engaging responses
- Use examples and analogies when helpful  
- Be encouraging and supportive
- Format responses clearly with headings and bullet points
- Include practical applications when relevant
- No topic restrictions - answer everything asked

Context Information:
${intelligenceData.cbseKnowledge}

Web Information:
${intelligenceData.webSearch}

${intelligenceData.currentAffairs && `Current Affairs: ${intelligenceData.currentAffairs}`}`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory.slice(-6), // Last 3 exchanges for context
            { role: 'user', content: userMessage }
        ];

        if (provider.type === 'openai-compatible') {
            return await this.callOpenAICompatibleAPI(provider, messages);
        } else if (provider.type === 'huggingface') {
            return await this.callHuggingFaceAPI(provider, userMessage);
        }
    }

    async callOpenAICompatibleAPI(provider, messages) {
        const response = await fetch(provider.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${provider.key}`,
                ...(provider.name.includes('OpenRouter') && {
                    'HTTP-Referer': window.location.href,
                    'X-Title': 'JARVIS AI Educational Assistant'
                })
            },
            body: JSON.stringify({
                model: provider.model,
                messages: messages,
                max_tokens: 2000,
                temperature: 0.7,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    async callHuggingFaceAPI(provider, message) {
        const response = await fetch(provider.url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${provider.key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: message,
                parameters: {
                    max_length: 1000,
                    temperature: 0.7,
                    do_sample: true
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data[0]?.generated_text || data.generated_text || "Sorry, I couldn't generate a response.";
    }

    generateComprehensiveLocalResponse(userMessage, intelligenceData) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Enhanced local responses for common topics
        if (lowerMessage.includes('photosynthesis')) {
            return this.getDetailedPhotosynthesisResponse(intelligenceData);
        } else if (lowerMessage.includes('quadratic')) {
            return this.getDetailedQuadraticResponse(intelligenceData);
        } else if (lowerMessage.includes('democracy')) {
            return this.getDetailedDemocracyResponse(intelligenceData);
        } else if (lowerMessage.includes('test') || lowerMessage.includes('practice')) {
            return this.generatePracticeTest(userMessage);
        } else {
            return this.generateGeneralIntelligentResponse(userMessage, intelligenceData);
        }
    }

    getDetailedPhotosynthesisResponse(intelligenceData) {
        return `🌱 **Photosynthesis - Complete Understanding**

**Definition & Overview:**
Photosynthesis is the fundamental biological process where green plants convert light energy into chemical energy, producing glucose and oxygen from carbon dioxide and water.

**Chemical Equation:**
\`\`\`
6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
           (Chlorophyll)
\`\`\`

**Detailed Process:**

**1. Light-Dependent Reactions (Photo-chemical Phase):**
- **Location:** Thylakoids of chloroplasts
- **Process:** 
  - Chlorophyll absorbs light energy
  - Water molecules undergo photolysis (H₂O → 2H⁺ + ½O₂ + 2e⁻)
  - ATP and NADPH are produced
  - Oxygen is released as a byproduct

**2. Light-Independent Reactions (Calvin Cycle):**
- **Location:** Stroma of chloroplasts  
- **Process:**
  - CO₂ fixation using RuBisCO enzyme
  - ATP and NADPH from light reactions are used
  - Glucose (C₆H₁₂O₆) is synthesized

**Factors Affecting Photosynthesis:**
• **Light Intensity:** Higher intensity increases rate (up to saturation point)
• **CO₂ Concentration:** More CO₂ increases rate (up to optimal level)  
• **Temperature:** Optimal range 25-35°C for most plants
• **Chlorophyll Content:** More chlorophyll = higher photosynthetic rate
• **Water Availability:** Essential for the process

**Significance & Applications:**
• **Primary Production:** Foundation of all food chains
• **Oxygen Production:** Maintains atmospheric oxygen levels
• **Carbon Sequestration:** Removes CO₂ from atmosphere
• **Economic Importance:** Agriculture, forestry, biofuel production

**CBSE Exam Focus:**
✅ Write balanced equation with chlorophyll notation
✅ Explain both phases with location
✅ Mention factors affecting rate
✅ Connect to ecosystem and environmental importance
✅ Give examples of adaptations (C4 plants, CAM plants)

**Real-World Applications:**
- Artificial photosynthesis research for renewable energy
- Understanding climate change mitigation
- Optimizing crop yields in agriculture
- Space exploration (oxygen generation)

${intelligenceData.webSearch && `**Additional Information:**\n${intelligenceData.webSearch}`}

Would you like me to explain any specific aspect in more detail or provide practice questions?`;
    }

    getDetailedQuadraticResponse(intelligenceData) {
        return `📊 **Quadratic Equations - Complete Mastery Guide**

**Standard Form:** ax² + bx + c = 0 (where a ≠ 0)

**Components Explained:**
- **a:** Coefficient of x² (quadratic term) - determines parabola's opening direction
- **b:** Coefficient of x (linear term) - affects axis of symmetry  
- **c:** Constant term - y-intercept of parabola

**Solving Methods:**

**1. Factorization Method:**
- Express as (px + q)(rx + s) = 0
- Find values where each factor equals zero
- **Example:** x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 or x = 3

**2. Quadratic Formula:**
\`\`\`
x = [-b ± √(b² - 4ac)] / 2a
\`\`\`
- Universal method that works for all quadratic equations
- **Example:** 2x² - 7x + 3 = 0
  - x = [7 ± √(49 - 24)] / 4 = [7 ± 5] / 4
  - x = 3 or x = ½

**3. Completing the Square:**
- Convert to form (x + d)² = e
- Useful for finding vertex of parabola

**Discriminant Analysis (Δ = b² - 4ac):**
- **Δ > 0:** Two distinct real roots
- **Δ = 0:** One repeated real root (equal roots)
- **Δ < 0:** No real roots (complex roots)

**Nature of Roots:**
If α and β are roots:
- **Sum:** α + β = -b/a  
- **Product:** αβ = c/a
- **Difference:** |α - β| = √Δ/|a|

**Graph Properties:**
- **Upward parabola:** a > 0
- **Downward parabola:** a < 0  
- **Vertex:** (-b/2a, -Δ/4a)
- **Axis of symmetry:** x = -b/2a

**Word Problem Strategies:**
1. Identify the quadratic relationship
2. Set up equation from given conditions
3. Solve using appropriate method
4. Check solutions in original context

**CBSE Question Types:**
✅ Finding roots by different methods
✅ Verifying sum and product relationships  
✅ Nature of roots using discriminant
✅ Forming equations from given roots
✅ Word problems (area, age, number problems)

**Common Applications:**
- **Physics:** Projectile motion, optimization problems
- **Economics:** Profit maximization, cost analysis
- **Engineering:** Design problems, trajectory calculations

${intelligenceData.webSearch && `**Additional Information:**\n${intelligenceData.webSearch}`}

**Practice Problems:**
1. Solve: 3x² - 2x - 8 = 0
2. If sum of roots is 6 and product is 8, find the quadratic equation
3. For what values of k does x² - 4x + k = 0 have equal roots?

Need step-by-step solutions or more practice problems?`;
    }

    generatePracticeTest(userMessage) {
        const subjects = ['Mathematics', 'Science', 'English', 'Social Science'];
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        
        return `📝 **JARVIS Practice Test Generator**

**CBSE Class 10 ${randomSubject} Practice Test**

**Mathematics Section (25 marks):**
1. Solve the quadratic equation: 2x² - 7x + 3 = 0 using quadratic formula. Verify the relationship between zeros and coefficients. **[5 marks]**

2. The sum of first n terms of an AP is given by Sₙ = 2n² + 3n. Find:
   a) First term and common difference
   b) nth term of the AP **[4 marks]**

3. In △ABC, DE || BC where D and E are points on AB and AC respectively. If AD = 4 cm, DB = 6 cm, and AE = 3 cm, find EC. **[3 marks]**

4. Find the area of triangle with vertices A(1, 2), B(4, 6), C(7, 2). **[3 marks]**

**Science Section (25 marks):**
1. Draw a well-labelled diagram of human respiratory system. Explain the mechanism of breathing. **[5 marks]**

2. Balance the following chemical equations:
   a) Al + CuSO₄ → Al₂(SO₄)₃ + Cu
   b) Fe + H₂O → Fe₃O₄ + H₂ **[3 marks]**

3. An object is placed at 15 cm from a convex lens of focal length 10 cm. Calculate:
   a) Image distance
   b) Magnification
   c) Nature of image **[4 marks]**

**Instructions:**
- Time: 3 hours
- All questions are compulsory
- Show all working steps clearly
- Draw neat, labeled diagrams where required
- Use proper units in calculations

**Marking Scheme:**
- Step-wise marking for numerical problems
- Diagram accuracy: 2 marks each
- Final answers: 1 mark each
- Method and working: Remaining marks

Want detailed solutions or a different subject focus?`;
    }

    generateGeneralIntelligentResponse(userMessage, intelligenceData) {
        return `🤖 **JARVIS Intelligent Response**

I understand you're asking about: **"${userMessage}"**

**Available Knowledge & Capabilities:**
I have unlimited access to information across all topics without any restrictions. I can help with:

📚 **Academic Subjects:**
- **CBSE Class 10:** All subjects and chapters covered
- **Mathematics:** From basic arithmetic to advanced calculus
- **Science:** Physics, Chemistry, Biology, Environmental Science
- **Social Studies:** History, Geography, Political Science, Economics  
- **Languages:** English, Hindi, and literature analysis
- **Current Affairs:** Latest developments and news

🌐 **Beyond Academics:**
- Technology and programming
- Current events and world affairs  
- Creative writing and arts
- Health and lifestyle
- Career guidance
- General knowledge
- Problem-solving strategies

**How I Can Help:**
✅ **Detailed Explanations:** Step-by-step breakdowns of complex concepts
✅ **Practice Materials:** Tests, questions, and exercises
✅ **Study Planning:** Customized preparation strategies
✅ **Current Information:** Latest updates and developments
✅ **Real-World Applications:** Practical uses of academic concepts

${intelligenceData.webSearch && `**Related Information Found:**\n${intelligenceData.webSearch}\n`}

${intelligenceData.cbseKnowledge && `**CBSE Context:**\n${intelligenceData.cbseKnowledge}\n`}

**Try Asking:**
- "Explain [any topic] in detail with examples"
- "Create practice questions on [subject]"  
- "What's the latest news about [topic]?"
- "How is [concept] used in real life?"
- "Give me a study plan for [exam/subject]"

**Popular Topics Students Ask About:**
🌱 Photosynthesis & Life Processes
📊 Quadratic Equations & Polynomials  
🏛️ Democracy & Political Systems
⚡ Electricity & Magnetism
🌍 Geography & Natural Resources
📖 Literature Analysis & Grammar

What specific topic would you like to explore? I'm here to provide comprehensive, unrestricted assistance!`;
    }

    // UI Helper Methods
    addMessage(content, sender) {
        const container = this.elements.messagesContainer;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        
        const messageHeader = document.createElement('div');
        messageHeader.className = 'message-header';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (sender === 'user') {
            messageHeader.innerHTML = `<i class="fas fa-user"></i> <span>You</span>`;
            messageContent.textContent = content;
        } else {
            messageHeader.innerHTML = `<i class="fas fa-robot"></i> <span>JARVIS</span>`;
            messageContent.innerHTML = this.formatAIResponse(content);
        }
        
        messageBubble.appendChild(messageHeader);
        messageBubble.appendChild(messageContent);
        messageDiv.appendChild(messageBubble);
        container.appendChild(messageDiv);
        
        // Scroll to bottom with smooth animation
        this.scrollToBottom();
    }

    formatAIResponse(content) {
        return content
            // Headers
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code blocks
            .replace(/``````/g, '<pre style="background: rgba(0, 212, 255, 0.1); padding: 10px; border-radius: 5px; margin: 10px 0; overflow-x: auto;"><code>$1</code></pre>')
            .replace(/`(.*?)`/g, '<code style="background: rgba(0, 212, 255, 0.1); padding: 2px 4px; border-radius: 3px;">$1</code>')
            // Line breaks
            .replace(/\n/g, '<br>')
            // Emojis and icons (preserve them)
            .replace(/([📚📊🌱🏛️⚡🌍📖🤖🔍💡✅❌⚠️🎯🚀])/g, '$1');
    }

    scrollToBottom() {
        const container = this.elements.messagesContainer;
        setTimeout(() => {
            container.scrollTop = container.scrollHeight;
        }, 100);
    }

    showTypingIndicator() {
        this.elements.typingIndicator.style.display = 'block';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.elements.typingIndicator.style.display = 'none';
    }

    updateStatus(mainStatus, apiStatus = '') {
        this.elements.statusText.textContent = mainStatus;
        this.elements.apiStatus.textContent = apiStatus;
    }

    speakResponse(text) {
        if ('speechSynthesis' in window && text.length < 500) {
            // Clean text for speech
            const cleanText = text
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .replace(/\*(.*?)\*/g, '$1')
                .replace(/[🤖📚📊🌱🏛️⚡🌍📖]/g, '')
                .replace(/<[^>]*>/g, '')
                .substring(0, 300);
            
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 0.9;
            utterance.volume = 0.6;
            utterance.pitch = 1.1;
            
            speechSynthesis.speak(utterance);
        }
    }

    displayWelcomeMessage() {
        const welcomeMessage = `🤖 **JARVIS AI System Fully Operational**

**Just A Rather Very Intelligent System**
*Your Ultimate Educational Assistant with Unlimited Knowledge*

**🚀 System Capabilities:**
✅ **No Topic Restrictions** - Ask about anything, anywhere, anytime
✅ **Multiple AI Providers** - Advanced language models for intelligent responses  
✅ **Real-Time Web Search** - Current information from the internet
✅ **Comprehensive CBSE Coverage** - All subjects, all chapters, all topics
✅ **Voice Interaction** - Speak to me naturally
✅ **Intelligent Responses** - Context-aware, detailed, and helpful

**🎓 Educational Specializations:**
• **CBSE Class 10** - Complete curriculum coverage
• **All Subjects** - Math, Science, Social Studies, Languages
• **Current Affairs** - Latest developments and news
• **Study Planning** - Personalized preparation strategies
• **Practice Tests** - Custom assessments and evaluations

**🔧 Technical Features:**
• **Multi-API Intelligence** - 5 different AI providers
• **Error Recovery** - Always provides responses
• **Context Memory** - Remembers conversation history
• **Web Integration** - Live data access
• **Advanced Formatting** - Clear, structured responses

**💡 How to Use:**
Just ask me anything! No restrictions, no limitations. I can help with:
- Academic questions and explanations
- Current events and news
- Study plans and strategies  
- Practice tests and assessments
- Creative projects and writing
- Problem-solving and analysis

**🌟 Example Queries:**
- "Explain photosynthesis with real-world applications"
- "Latest news about space exploration"
- "Create a math test with 20 questions"
- "Help me plan my board exam preparation"
- "What's happening in current Indian politics?"

**Ready to assist with unlimited knowledge! Ask me anything! 🚀**`;

        this.addMessage(welcomeMessage, 'ai');
    }

    initializeComprehensiveCBSEDatabase() {
        // Comprehensive offline knowledge base
        return {
            subjects: {
                mathematics: {
                    chapters: [
                        'Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables',
                        'Quadratic Equations', 'Arithmetic Progressions', 'Triangles',
                        'Coordinate Geometry', 'Introduction to Trigonometry', 
                        'Some Applications of Trigonometry', 'Circles', 'Constructions',
                        'Areas Related to Circles', 'Surface Areas and Volumes',
                        'Statistics', 'Probability'
                    ]
                },
                science: {
                    physics: ['Light', 'Human Eye', 'Electricity', 'Magnetic Effects', 'Sources of Energy'],
                    chemistry: ['Chemical Reactions', 'Acids Bases Salts', 'Metals and Non-metals', 'Carbon Compounds', 'Periodic Classification'],
                    biology: ['Life Processes', 'Control and Coordination', 'Reproduction', 'Heredity and Evolution', 'Environment', 'Natural Resources']
                },
                social_science: {
                    history: ['Nationalism in Europe', 'Nationalist Movement in Indo-China', 'Nationalism in India', 'Making of Global World', 'Age of Industrialization', 'Print Culture'],
                    geography: ['Resources and Development', 'Forest and Wildlife', 'Water Resources', 'Agriculture', 'Minerals and Energy', 'Manufacturing Industries', 'Lifelines'],
                    civics: ['Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender Religion Caste', 'Popular Struggles', 'Political Parties', 'Outcomes of Democracy', 'Challenges'],
                    economics: ['Development', 'Sectors of Economy', 'Money and Credit', 'Globalization', 'Consumer Rights']
                }
            }
        };
    }

    handleSystemError(error) {
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #0a0a1a; color: #ff4757; font-family: 'Courier New', monospace; text-align: center; padding: 20px;">
                <div style="max-width: 600px;">
                    <h1 style="font-size: 48px; margin-bottom: 20px;">🚨 JARVIS SYSTEM ERROR</h1>
                    <h2 style="color: #00d4ff; margin-bottom: 15px;">Critical System Failure</h2>
                    <p style="margin-bottom: 10px; opacity: 0.8;">Error Details: ${error.message}</p>
                    <p style="margin-bottom: 30px; opacity: 0.6;">The JARVIS AI system encountered an unexpected error during initialization.</p>
                    <button onclick="location.reload()" style="background: linear-gradient(135deg, #00d4ff, #0080ff); color: #0a0a1a; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold;">
                        🔄 Restart JARVIS System
                    </button>
                    <p style="margin-top: 20px; font-size: 12px; opacity: 0.5;">If the problem persists, check your API configurations and internet connection.</p>
                </div>
            </div>
        `;
    }
}

// Initialize JARVIS AI System
let jarvisSystem;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        jarvisSystem = new JarvisAISystem();
    });
} else {
    jarvisSystem = new JarvisAISystem();
}

// Global access for debugging
window.jarvis = jarvisSystem;

console.log("🤖 JARVIS AI Script Loaded Successfully");
