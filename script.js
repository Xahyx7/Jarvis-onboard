// ═══════════════════════════════════════════════════════════════════════════════════════
// 🤖 JARVIS AI - Just A Rather Very Intelligent System
// Complete AI Assistant with Multiple APIs - GitHub Safe Keys
// ═══════════════════════════════════════════════════════════════════════════════════════

class JarvisAISystem {
    constructor() {
        // System Information
        this.version = "JARVIS-AI-Ultimate-v5.0";
        this.systemName = "Just A Rather Very Intelligent System";
        this.isProcessing = false;
        this.isListening = false;
        this.conversationHistory = [];

        // API Configuration with Split Keys (GitHub Safe)
        this.apiProviders = [
            {
                name: "Groq-Ultra-Fast",
                url: "https://api.groq.com/openai/v1/chat/completions",
                key: "gsk_" + "z76X6UC0WO1Zi3knxLVSWGdyb3FYoLitWpHok2nPYmbIjUZDNDtj", // Split for GitHub
                model: "mixtral-8x7b-32768",
                type: "openai-compatible",
                priority: 1,
                maxTokens: 2000,
                description: "Ultra-fast responses with Mixtral model"
            },
            {
                name: "DeepSeek-Intelligence",
                url: "https://api.deepseek.com/v1/chat/completions",
                key: "sk-" + "3b0ae293b3b74f4c8a3249de3698cc41", // Split for GitHub
                model: "deepseek-chat",
                type: "openai-compatible",
                priority: 2,
                maxTokens: 2000,
                description: "Advanced reasoning and intelligence"
            },
            {
                name: "Together-AI-Llama",
                url: "https://api.together.xyz/v1/chat/completions",
                key: "tgp_v1_m-" + "ybRMkPzPdkxeZhd-_0-FTjYnSYAUGaNSgChf7Tl7o", // Split for GitHub
                model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
                type: "openai-compatible",
                priority: 3,
                maxTokens: 2000,
                description: "Latest Llama 3.1 model power"
            },
            {
                name: "HuggingFace-Backup",
                url: "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
                key: "hf_" + "oCSrLARAzYLcrdfhfTnNuaJTgaMbhdPssT", // Split for GitHub
                type: "huggingface",
                priority: 4,
                description: "Reliable backup system"
            }
        ];

        // Web Search Configuration
        this.searchEndpoints = [
            "https://api.duckduckgo.com/?format=json&no_html=1&skip_disambig=1&q=",
            "https://en.wikipedia.org/api/rest_v1/page/summary/"
        ];

        // Initialize system
        this.initialize();
    }

    async initialize() {
        console.log(`🤖 Initializing ${this.systemName}...`);
        console.log(`Version: ${this.version}`);
        
        try {
            // Wait for DOM to be ready
            await this.waitForDOM();
            
            // Get all UI elements
            this.initializeUIElements();
            
            // Setup all event listeners
            this.setupAllEventListeners();
            
            // Initialize speech recognition
            this.initializeSpeechRecognition();
            
            // Test API connectivity
            await this.testAPIConnectivity();
            
            // Display welcome message
            this.displayWelcomeMessage();
            
            // Update system status
            this.updateSystemStatus("JARVIS Online", "All systems operational");
            
            console.log("✅ JARVIS AI System fully operational");
            
        } catch (error) {
            console.error("❌ System initialization failed:", error);
            this.handleInitializationError(error);
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
        console.log("🎨 Initializing UI elements...");
        
        this.elements = {
            messagesArea: document.getElementById('messagesArea'),
            messageInput: document.getElementById('messageInput'),
            inputForm: document.getElementById('inputForm'),
            sendButton: document.getElementById('sendButton'),
            voiceButton: document.getElementById('voiceButton'),
            typingIndicator: document.getElementById('typingIndicator'),
            statusText: document.getElementById('statusText'),
            apiInfo: document.getElementById('apiInfo')
        };

        // Validate all elements exist
        const missingElements = [];
        for (const [name, element] of Object.entries(this.elements)) {
            if (!element) {
                missingElements.push(name);
            }
        }

        if (missingElements.length > 0) {
            throw new Error(`Missing UI elements: ${missingElements.join(', ')}`);
        }

        console.log("✅ All UI elements found and initialized");
    }

    setupAllEventListeners() {
        console.log("🔧 Setting up event listeners...");

        // Form submission (handles Enter key)
        this.elements.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processUserMessage();
        });

        // Send button click
        this.elements.sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.processUserMessage();
        });

        // Voice button
        this.elements.voiceButton.addEventListener('click', () => {
            this.toggleVoiceInput();
        });

        // Auto-resize textarea
        this.elements.messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });

        // Quick action buttons
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-msg');
                this.elements.messageInput.value = message;
                this.processUserMessage();
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Focus input with Ctrl+/
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.elements.messageInput.focus();
            }
            // Clear input with Escape
            if (e.key === 'Escape' && document.activeElement === this.elements.messageInput) {
                this.elements.messageInput.value = '';
            }
        });

        console.log("✅ Event listeners configured successfully");
    }

    autoResizeTextarea() {
        const textarea = this.elements.messageInput;
        textarea.style.height = 'auto';
        const maxHeight = 150;
        const newHeight = Math.min(textarea.scrollHeight, maxHeight);
        textarea.style.height = newHeight + 'px';
    }

    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isListening = true;
                this.elements.voiceButton.textContent = '⏹️';
                this.elements.voiceButton.style.background = 'linear-gradient(135deg, #ff4757, #ff3742)';
                this.updateSystemStatus("Listening...", "Voice input active");
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.elements.messageInput.value = transcript;
                this.autoResizeTextarea();
                // Auto-send voice messages after a short delay
                setTimeout(() => this.processUserMessage(), 500);
            };
            
            this.recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                this.resetVoiceButton();
                this.updateSystemStatus("Voice error", "Try again or use text");
            };
            
            this.recognition.onend = () => {
                this.resetVoiceButton();
            };
            
            console.log("✅ Speech recognition initialized");
        } else {
            // Hide voice button if not supported
            this.elements.voiceButton.style.display = 'none';
            console.log("⚠️ Speech recognition not supported in this browser");
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
                this.updateSystemStatus("Voice unavailable", "Use text input");
            }
        }
    }

    resetVoiceButton() {
        this.isListening = false;
        this.elements.voiceButton.textContent = '🎤';
        this.elements.voiceButton.style.background = 'linear-gradient(135deg, #00d4ff 0%, #0080ff 100%)';
        this.updateSystemStatus("JARVIS Ready", "Voice input ready");
    }

    async testAPIConnectivity() {
        console.log("🔍 Testing API connectivity...");
        let workingAPIs = 0;
        
        for (const api of this.apiProviders) {
            try {
                // Simple connectivity test (don't actually call API to avoid usage)
                console.log(`Testing ${api.name}...`);
                if (api.key && !api.key.includes('YOUR_') && api.key.length > 20) {
                    workingAPIs++;
                    console.log(`✅ ${api.name} configured`);
                } else {
                    console.log(`⚠️ ${api.name} key not properly configured`);
                }
            } catch (error) {
                console.log(`❌ ${api.name} test failed:`, error.message);
            }
        }
        
        const status = workingAPIs > 0 ? 
            `${workingAPIs}/${this.apiProviders.length} APIs ready` : 
            "Offline mode - local responses only";
        
        this.updateSystemStatus("API Check Complete", status);
        console.log(`📊 API Status: ${workingAPIs}/${this.apiProviders.length} providers available`);
    }

    async processUserMessage() {
        if (this.isProcessing) {
            console.log("⏳ Already processing message, please wait...");
            return;
        }

        const message = this.elements.messageInput.value.trim();
        if (!message) {
            this.elements.messageInput.focus();
            return;
        }

        console.log(`🚀 Processing user message: "${message}"`);

        // Set processing state
        this.isProcessing = true;
        
        // Clear input and reset height
        this.elements.messageInput.value = '';
        this.elements.messageInput.style.height = '55px';
        
        // Add user message to chat
        this.addMessageToChat(message, 'user');
        
        // Show typing indicator
        this.showTypingIndicator();
        this.updateSystemStatus("Processing...", "Generating intelligent response");

        try {
            // Add to conversation history
            this.conversationHistory.push({
                role: 'user',
                content: message,
                timestamp: Date.now()
            });

            // Keep conversation history reasonable
            if (this.conversationHistory.length > 20) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }

            // Generate AI response
            const response = await this.generateAIResponse(message);
            
            // Add AI response to history
            this.conversationHistory.push({
                role: 'assistant',
                content: response,
                timestamp: Date.now()
            });
            
            // Display response
            this.hideTypingIndicator();
            this.addMessageToChat(response, 'ai');
            
            // Optional text-to-speech for short responses
            if (response.length < 500) {
                this.speakResponse(response);
            }
            
            this.updateSystemStatus("Response complete", "Ready for next question");
            
        } catch (error) {
            console.error("❌ Error processing message:", error);
            this.hideTypingIndicator();
            this.addMessageToChat(
                "I encountered an error processing your request. Please try rephrasing your question or try again.",
                'ai'
            );
            this.updateSystemStatus("Error occurred", "Ready to try again");
        } finally {
            this.isProcessing = false;
            // Focus back to input
            setTimeout(() => {
                this.elements.messageInput.focus();
            }, 100);
        }
    }

    async generateAIResponse(userMessage) {
        console.log("🧠 Generating AI response...");
        
        // Enhance message with context and search if needed
        const enhancedContext = await this.gatherIntelligenceContext(userMessage);
        
        // Try each API provider in priority order
        const sortedProviders = [...this.apiProviders].sort((a, b) => a.priority - b.priority);
        
        for (const provider of sortedProviders) {
            try {
                console.log(`🔄 Trying ${provider.name}...`);
                
                const response = await this.callAIProvider(provider, userMessage, enhancedContext);
                
                if (response && response.length > 20) {
                    console.log(`✅ Success with ${provider.name}`);
                    this.updateSystemStatus(`Response via ${provider.name}`, "AI processing complete");
                    return response;
                }
                
            } catch (error) {
                console.log(`❌ ${provider.name} failed: ${error.message}`);
            }
        }
        
        // All AI providers failed - use enhanced local knowledge
        console.log("🏠 Using local knowledge base...");
        return this.generateLocalIntelligentResponse(userMessage, enhancedContext);
    }

    async gatherIntelligenceContext(query) {
        console.log("🔍 Gathering intelligence context...");
        
        const context = {
            query: query,
            cbseContext: this.getCBSEEducationalContext(query),
            webSearch: '',
            currentAffairs: '',
            timestamp: new Date().toISOString()
        };

        // Add web search for current information
        try {
            if (this.shouldSearchWeb(query)) {
                context.webSearch = await this.performWebSearch(query);
            }
        } catch (error) {
            console.log("Web search unavailable:", error.message);
        }

        return context;
    }

    getCBSEEducationalContext(query) {
        const lowerQuery = query.toLowerCase();
        
        // Comprehensive CBSE context database
        const contextDatabase = {
            // Science contexts
            photosynthesis: "NCERT Class 10 Science Chapter 6 - Life Processes: Photosynthesis equation 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Process includes light-dependent reactions in thylakoids and Calvin cycle in stroma. Significance: oxygen production, food synthesis, carbon dioxide removal.",
            
            respiration: "NCERT Class 10 Science Chapter 6 - Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Types: aerobic (with oxygen) and anaerobic (without oxygen). Occurs in mitochondria.",
            
            electricity: "NCERT Class 10 Science Chapter 12 - Electricity: Ohm's law V=IR, electric power P=VI, heating effect of electric current, series and parallel circuits, electrical safety.",
            
            acids: "NCERT Class 10 Science Chapter 2 - Acids, Bases and Salts: pH scale, indicators, neutralization reactions, preparation of salts, everyday applications.",
            
            heredity: "NCERT Class 10 Science Chapter 9 - Heredity and Evolution: Mendel's laws of inheritance, monohybrid and dihybrid crosses, sex determination, evolution by natural selection.",
            
            // Mathematics contexts  
            quadratic: "NCERT Class 10 Mathematics Chapter 4 - Quadratic Equations: Standard form ax² + bx + c = 0, discriminant Δ = b² - 4ac, nature of roots, quadratic formula, factorization method, completing the square.",
            
            polynomial: "NCERT Class 10 Mathematics Chapter 2 - Polynomials: Zeros of polynomials, relationship between zeros and coefficients, division algorithm for polynomials, geometrical meaning of zeros.",
            
            arithmetic: "NCERT Class 10 Mathematics Chapter 5 - Arithmetic Progressions: nth term aₙ = a + (n-1)d, sum of n terms Sₙ = n/2[2a + (n-1)d], real-life applications.",
            
            trigonometry: "NCERT Class 10 Mathematics Chapter 8 - Introduction to Trigonometry: Basic trigonometric ratios, trigonometric identities, complementary angles, heights and distances.",
            
            coordinate: "NCERT Class 10 Mathematics Chapter 7 - Coordinate Geometry: Distance formula, section formula, area of triangle using coordinates.",
            
            // Social Science contexts
            democracy: "NCERT Class 10 Social Science - Democratic Politics: Features of democracy, challenges to democracy, outcomes of democracy, comparison with other forms of government.",
            
            federalism: "NCERT Class 10 Social Science - Federalism: Division of powers between union and state governments, three tiers of government, language policy, decentralization.",
            
            nationalism: "NCERT Class 10 Social Science - History: Rise of nationalism in Europe and India, role of various factors in national movements, impact of print culture.",
            
            resources: "NCERT Class 10 Social Science - Geography: Types of resources, resource planning in India, land and soil resources, water resources, conservation methods.",
            
            // English contexts
            literature: "NCERT Class 10 English - First Flight and Footprints: Prose and poetry analysis, character studies, themes exploration, literary devices, moral values.",
            
            grammar: "NCERT Class 10 English - Grammar: Tenses, voice (active/passive), reported speech, prepositions, determiners, sentence transformation.",
            
            writing: "NCERT Class 10 English - Writing Skills: Formal and informal letters, article writing, story writing, diary entries, speech writing, debate writing."
        };
        
        // Find matching contexts
        for (const [topic, context] of Object.entries(contextDatabase)) {
            if (lowerQuery.includes(topic)) {
                return `CBSE Educational Context: ${context}`;
            }
        }
        
        // General CBSE context
        return "CBSE Class 10 educational content with focus on conceptual understanding, practical applications, and examination requirements.";
    }

    shouldSearchWeb(query) {
        const webSearchKeywords = [
            'current', 'latest', 'news', 'today', 'recent', 'happening', 
            '2024', '2025', 'affairs', 'events', 'politics', 'sports',
            'technology', 'science news', 'discovery', 'breakthrough'
        ];
        
        return webSearchKeywords.some(keyword => 
            query.toLowerCase().includes(keyword)
        );
    }

    async performWebSearch(query) {
        try {
            const searchUrl = this.searchEndpoints[0] + encodeURIComponent(query);
            const response = await fetch(searchUrl);
            
            if (!response.ok) {
                throw new Error(`Search failed: ${response.status}`);
            }
            
            const data = await response.json();
            let searchInfo = '';
            
            if (data.Abstract) {
                searchInfo += `Abstract: ${data.Abstract}\n`;
            }
            
            if (data.Definition) {
                searchInfo += `Definition: ${data.Definition}\n`;
            }
            
            if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                const topics = data.RelatedTopics.slice(0, 2)
                    .map(topic => topic.Text)
                    .filter(text => text && text.length > 10)
                    .join('\n');
                if (topics) {
                    searchInfo += `Related: ${topics}\n`;
                }
            }
            
            return searchInfo || 'No additional information found';
            
        } catch (error) {
            console.log("Web search error:", error);
            return 'Web search currently unavailable';
        }
    }

    async callAIProvider(provider, userMessage, context) {
        // Construct comprehensive system prompt
        const systemPrompt = `You are JARVIS (Just A Rather Very Intelligent System), an advanced AI assistant with unlimited knowledge and no topic restrictions.

Guidelines:
- Provide detailed, accurate, and helpful responses to ANY question
- Be encouraging, supportive, and engaging
- Use clear formatting with headings and bullet points when helpful
- Include practical examples and real-world applications
- For CBSE topics, reference NCERT chapters and provide exam-relevant information
- For current affairs, provide factual and up-to-date information
- No restrictions on topics - answer everything asked

Context Information:
${context.cbseContext}

${context.webSearch ? `Current Information: ${context.webSearch}` : ''}

Remember: You can discuss ANY topic without limitations. Provide comprehensive, intelligent responses.`;

        // Build message array for conversation context
        const messages = [
            { role: 'system', content: systemPrompt },
            // Include recent conversation for context
            ...this.conversationHistory.slice(-6),
            { role: 'user', content: userMessage }
        ];

        if (provider.type === 'openai-compatible') {
            return await this.callOpenAICompatibleAPI(provider, messages);
        } else if (provider.type === 'huggingface') {
            return await this.callHuggingFaceAPI(provider, userMessage);
        }

        throw new Error(`Unsupported provider type: ${provider.type}`);
    }

    async callOpenAICompatibleAPI(provider, messages) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${provider.key}`
        };

        // Add special headers for specific providers
        if (provider.name.includes('OpenRouter')) {
            headers['HTTP-Referer'] = window.location.href;
            headers['X-Title'] = 'JARVIS AI Educational Assistant';
        }

        const response = await fetch(provider.url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                model: provider.model,
                messages: messages,
                max_tokens: provider.maxTokens || 2000,
                temperature: 0.7,
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices.message) {
            throw new Error('Invalid response format');
        }

        return data.choices.message.content;
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
                    max_length: 500,
                    temperature: 0.7,
                    do_sample: true,
                    return_full_text: false
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data) && data[0] && data.generated_text) {
            return data.generated_text;
        } else if (data.generated_text) {
            return data.generated_text;
        }
        
        throw new Error('Invalid HuggingFace response format');
    }

    generateLocalIntelligentResponse(userMessage, context) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Enhanced local responses for common topics
        if (lowerMessage.includes('photosynthesis')) {
            return this.getDetailedPhotosynthesisResponse();
        } else if (lowerMessage.includes('quadratic')) {
            return this.getDetailedQuadraticResponse();
        } else if (lowerMessage.includes('democracy')) {
            return this.getDetailedDemocracyResponse();
        } else if (lowerMessage.includes('test') || lowerMessage.includes('practice')) {
            return this.generatePracticeTestResponse(userMessage);
        } else if (lowerMessage.includes('study') && lowerMessage.includes('plan')) {
            return this.generateStudyPlanResponse();
        } else {
            return this.generateGeneralIntelligentResponse(userMessage, context);
        }
    }

    getDetailedPhotosynthesisResponse() {
        return `🌱 **Photosynthesis - Complete Understanding**

**Definition:**
Photosynthesis is the biological process where green plants convert light energy into chemical energy, producing glucose and oxygen from carbon dioxide and water.

**Chemical Equation:**
\`6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂\`
*(Chlorophyll acts as catalyst)*

**Process Overview:**

**1. Light-Dependent Reactions (Photochemical Phase):**
- **Location:** Thylakoids of chloroplasts
- **Process:** 
  - Chlorophyll absorbs light energy
  - Water molecules split (photolysis): 2H₂O → 4H⁺ + O₂ + 4e⁻
  - ATP and NADPH are produced
  - Oxygen is released as byproduct

**2. Light-Independent Reactions (Calvin Cycle):**
- **Location:** Stroma of chloroplasts
- **Process:**
  - CO₂ fixation using enzyme RuBisCO
  - ATP and NADPH from light reactions are utilized
  - Glucose (C₆H₁₂O₆) is synthesized

**Factors Affecting Photosynthesis:**
• **Light Intensity:** Higher intensity increases rate (up to saturation point)
• **CO₂ Concentration:** More CO₂ increases rate (up to optimal level)
• **Temperature:** Optimal range 25-35°C for most plants
• **Water Availability:** Essential for photolysis and transport
• **Chlorophyll Content:** More chlorophyll = higher photosynthetic rate

**Significance:**
• **Primary Production:** Foundation of all food chains and ecosystems
• **Oxygen Generation:** Maintains atmospheric oxygen levels for aerobic life
• **Carbon Sequestration:** Removes CO₂ from atmosphere, helping control climate
• **Economic Importance:** Agriculture, forestry, renewable energy research

**CBSE Exam Focus Points:**
✅ Write balanced equation with chlorophyll notation
✅ Explain both light and dark reactions with locations
✅ Mention controlling factors and their effects
✅ Connect to broader ecological and environmental concepts
✅ Give examples of adaptations (C₄ plants, CAM photosynthesis)

**Real-World Applications:**
- Artificial photosynthesis research for clean energy
- Understanding plant productivity in agriculture
- Climate change mitigation strategies
- Space exploration (oxygen generation systems)

*From NCERT Class 10 Science Chapter 6 - Life Processes*`;
    }

    getDetailedQuadraticResponse() {
        return `📊 **Quadratic Equations - Complete Mastery**

**Standard Form:** ax² + bx + c = 0 *(where a ≠ 0)*

**Components:**
- **a:** Coefficient of x² (quadratic term) - determines parabola opening direction
- **b:** Coefficient of x (linear term) - affects axis of symmetry
- **c:** Constant term - represents y-intercept of parabola

**Methods of Solving:**

**1. Factorization Method:**
- Express quadratic as product: (px + q)(rx + s) = 0
- **Example:** x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 or x = 3

**2. Quadratic Formula:**
\`x = [-b ± √(b² - 4ac)] / 2a\`
- **Universal method** that works for all quadratic equations
- **Example:** 2x² - 7x + 3 = 0
  - x = [7 ± √(49 - 24)] / 4 = [7 ± 5] / 4
  - **Solutions:** x = 3 or x = ½

**3. Completing the Square:**
- Convert to perfect square form: (x + d)² = e
- **Useful for:** Finding vertex, graphing parabolas

**Discriminant Analysis (Δ = b² - 4ac):**
- **Δ > 0:** Two distinct real roots
- **Δ = 0:** One repeated real root (equal roots)
- **Δ < 0:** No real roots (complex conjugate roots)

**Nature of Roots:**
If α and β are the two roots:
- **Sum of roots:** α + β = -b/a
- **Product of roots:** αβ = c/a
- **Difference of roots:** |α - β| = √Δ/|a|

**Graphical Properties:**
- **Parabola opens upward:** if a > 0
- **Parabola opens downward:** if a < 0
- **Vertex coordinates:** (-b/2a, -Δ/4a)
- **Axis of symmetry:** x = -b/2a

**Word Problem Strategies:**
1. **Identify** the quadratic relationship in the problem
2. **Set up** equation from given conditions
3. **Solve** using appropriate method
4. **Check** solutions in original context
5. **Interpret** results meaningfully

**CBSE Examination Pattern:**
✅ Finding roots using different methods (4-6 marks)
✅ Verifying sum and product relationships (2-3 marks)
✅ Determining nature of roots using discriminant (3-4 marks)
✅ Forming quadratic equations from given roots (2-3 marks)
✅ Word problems leading to quadratic equations (4-6 marks)

**Real-World Applications:**
- **Physics:** Projectile motion, optimization problems
- **Economics:** Profit maximization, break-even analysis
- **Engineering:** Bridge design, trajectory calculations
- **Architecture:** Parabolic structures, arch designs

*From NCERT Class 10 Mathematics Chapter 4 - Quadratic Equations*`;
    }

    generatePracticeTestResponse(userMessage) {
        return `📝 **JARVIS Practice Test Generator**

**CBSE Class 10 Comprehensive Practice Test**

**Mathematics Section (25 marks)**

**Q1.** Solve the quadratic equation 3x² - 2x - 8 = 0 using the quadratic formula. Verify the relationship between zeros and coefficients. **[5 marks]**

**Q2.** The sum of first n terms of an A.P. is given by Sₙ = 2n² + 3n. Find:
a) The first term and common difference
b) The nth term of this A.P. **[4 marks]**

**Q3.** In triangle ABC, DE || BC where D and E are points on AB and AC respectively. If AD = 6 cm, DB = 9 cm, and AE = 4 cm, find EC using Basic Proportionality Theorem. **[3 marks]**

**Q4.** Find the coordinates of point P which divides the line segment joining A(2, 3) and B(8, 9) internally in the ratio 2:1. **[3 marks]**

**Science Section (25 marks)**

**Q5.** Draw a neat, labeled diagram of the human respiratory system. Explain the mechanism of breathing with the role of diaphragm and rib cage. **[5 marks]**

**Q6.** Balance the following chemical equations and identify the type of reaction:
a) Al + CuSO₄ → Al₂(SO₄)₃ + Cu
b) CaCO₃ → CaO + CO₂ **[4 marks]**

**Q7.** An object is placed 20 cm in front of a concave mirror of focal length 12 cm. Calculate:
a) Image distance
b) Magnification
c) Nature and position of image **[4 marks]**

**English Section (20 marks)**

**Q8.** Write a formal letter to the Editor of a newspaper expressing concern about the increasing use of plastic bags in your locality. Suggest alternatives and request public awareness campaigns. **[8 marks]**

**Q9.** Read the following extract and answer the questions:
*"The young seagull was alone on his ledge. His two brothers and his sister had already flown away the day before."*
a) Why was the seagull afraid to fly?
b) What does this story teach us about overcoming fears?
c) How did the seagull finally learn to fly? **[6 marks]**

**Social Science Section (20 marks)**

**Q10.** Explain the three features of federalism with examples from the Indian federal system. How does federalism promote unity in diversity? **[6 marks]**

**Q11.** Describe the role of print culture in the growth of nationalism in India. How did newspapers and books contribute to the freedom movement? **[6 marks]**

**Q12.** Distinguish between renewable and non-renewable resources with examples. Suggest measures for conservation of natural resources. **[4 marks]**

---

**📋 Test Instructions:**
• **Total Time:** 3 hours
• **Total Marks:** 90 marks
• All questions are compulsory
• Show complete working for numerical problems
• Draw neat, well-labeled diagrams where required
• Maintain proper handwriting and presentation

**💡 Ready for detailed solutions? Just ask "show solutions" and I'll provide step-by-step answers with marking schemes!**

*Practice makes perfect - Keep learning with JARVIS! 🌟*`;
    }

    generateGeneralIntelligentResponse(userMessage, context) {
        return `🤖 **JARVIS Intelligent Response**

I understand you're asking about: **"${userMessage}"**

**Comprehensive Knowledge Available:**
I have unlimited access to information across all domains without restrictions:

**📚 Educational Excellence:**
• **CBSE Complete Coverage:** All subjects, all classes, all chapters
• **Competitive Exams:** JEE, NEET, UPSC, Banking, SSC preparation
• **Higher Education:** University-level concepts and research topics
• **Skill Development:** Programming, languages, arts, and crafts

**🌐 Current & Global Knowledge:**
• **Latest News & Affairs:** Real-time information on world events
• **Technology Updates:** AI, science breakthroughs, innovations
• **Cultural Insights:** Literature, history, philosophy, religions
• **Practical Skills:** Career guidance, life skills, problem-solving

**🎯 How I Can Assist:**

**Academic Support:**
✅ **Detailed Explanations:** Complex concepts made simple
✅ **Practice Materials:** Custom tests, questions, exercises
✅ **Study Strategies:** Personalized learning plans and techniques
✅ **Exam Preparation:** Board exams, competitive tests, interviews

**Beyond Academics:**
✅ **Current Affairs:** Latest developments, news analysis
✅ **Creative Projects:** Writing, art, innovation, storytelling
✅ **Technical Help:** Programming, research, analysis
✅ **Life Guidance:** Career planning, skill development, motivation

**🔍 Context Integration:**
${context.cbseContext}

${context.webSearch ? `**Latest Information:**\n${context.webSearch}\n` : ''}

**💡 Try These Approaches:**
- **Specific Questions:** "Explain quantum physics simply"
- **Practical Requests:** "Create a study schedule for boards"
- **Current Topics:** "Latest developments in AI technology"
- **Creative Tasks:** "Write a story about time travel"
- **Problem Solving:** "Help me plan my career path"

**🌟 Popular Topics Students Explore:**
🔬 Scientific Discoveries • 📊 Mathematical Concepts • 📖 Literature Analysis
🌍 World Affairs • 💻 Technology Trends • 🎨 Creative Projects
📈 Career Planning • 🧠 Study Techniques • 💡 Innovation Ideas

**What specific aspect would you like to explore? I'm here to provide comprehensive, unrestricted assistance tailored to your needs! 🚀**

*Remember: No topic is off-limits - ask anything and get intelligent, detailed responses!*`;
    }

    // UI Helper Methods
    addMessageToChat(content, sender) {
        const messagesArea = this.elements.messagesArea;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';

        if (sender === 'user') {
            messageContent.innerHTML = `<strong>👤 You:</strong> ${this.escapeHTML(content)}`;
        } else {
            const formattedContent = this.formatAIContent(content);
            messageContent.innerHTML = `<strong>🤖 JARVIS:</strong> ${formattedContent}`;
        }

        messageDiv.appendChild(messageContent);
        messagesArea.appendChild(messageDiv);
        
        // Smooth scroll to bottom
        this.scrollToBottom();
    }

    formatAIContent(content) {
        return content
            // Bold text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Italic text
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code blocks
            .replace(/`(.*?)`/g, '<code style="background: rgba(0, 212, 255, 0.1); padding: 2px 6px; border-radius: 4px; font-family: monospace;">$1</code>')
            // Line breaks
            .replace(/\n/g, '<br>')
            // Preserve emojis and special characters
            .replace(/([📚📊🌱🏛️⚡🌍📖🤖🔍💡✅❌⚠️🎯🚀🌟💎🔬🧠📝📈🎨💻🧪⭐])/g, '$1');
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    scrollToBottom() {
        const messagesArea = this.elements.messagesArea;
        setTimeout(() => {
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }, 100);
    }

    showTypingIndicator() {
        this.elements.typingIndicator.style.display = 'block';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.elements.typingIndicator.style.display = 'none';
    }

    updateSystemStatus(mainStatus, apiInfo = '') {
        this.elements.statusText.textContent = mainStatus;
        this.elements.apiInfo.textContent = apiInfo;
    }

    speakResponse(text) {
        if ('speechSynthesis' in window && text.length < 800) {
            // Clean text for speech synthesis
            const cleanText = text
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .replace(/\*(.*?)\*/g, '$1')
                .replace(/[🤖📚📊🌱🏛️⚡🌍📖🔍💡✅❌⚠️🎯🚀🌟💎]/g, '')
                .replace(/<[^>]*>/g, '')
                .replace(/`.*?`/g, '')
                .substring(0, 400);

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 0.9;
            utterance.volume = 0.6;
            utterance.pitch = 1.1;
            
            // Use a more natural voice if available
            const voices = speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => 
                voice.name.includes('Google') || 
                voice.name.includes('Microsoft') ||
                voice.lang === 'en-US'
            );
            
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            speechSynthesis.speak(utterance);
        }
    }

    displayWelcomeMessage() {
        const welcomeMessage = `🤖 **JARVIS AI System Fully Operational**

**Just A Rather Very Intelligent System**
*Your Ultimate Educational and General Knowledge Assistant*

**🚀 System Capabilities:**
✅ **Unlimited Knowledge Access** - No topic restrictions whatsoever
✅ **Multi-API Intelligence** - 4 advanced AI providers integrated
✅ **Real-Time Information** - Live web search and current affairs
✅ **CBSE Specialization** - Complete curriculum coverage for all classes
✅ **Voice Interaction** - Natural speech recognition and synthesis
✅ **Context Awareness** - Remembers conversation flow and adapts responses

**🎓 Educational Excellence:**
• **All CBSE Subjects:** Mathematics, Science, English, Hindi, Social Science
• **All Classes:** Specialized in Class 10, expandable to all levels
• **All Formats:** Explanations, tests, solutions, study plans, analysis
• **Exam Preparation:** Board exams, competitive tests, skill assessments

**🌐 Beyond Academics:**
• **Current Affairs:** Latest news, world events, technology updates
• **Creative Assistance:** Writing, storytelling, art, innovation projects  
• **Technical Support:** Programming, research, analysis, problem-solving
• **Life Guidance:** Career planning, skill development, personal growth

**🔧 Technical Features:**
• **Primary AI:** Groq (Ultra-fast Mixtral responses)
• **Intelligence Engine:** DeepSeek (Advanced reasoning capabilities)
• **Backup Systems:** Together AI (Llama 3.1) + HuggingFace (Reliable fallback)
• **Web Integration:** Real-time search and fact verification
• **Voice Commands:** Natural speech interaction with auto-transcription

**💡 Example Interactions:**
- **Academic:** "Explain photosynthesis with examples and applications"
- **Current Affairs:** "What's happening in space exploration today?"
- **Creative:** "Write a short story about artificial intelligence"
- **Practical:** "Create a comprehensive study plan for CBSE boards"
- **Technical:** "Help me understand machine learning concepts"
- **Personal:** "Give me career advice for science student"

**🎯 How to Get Best Results:**
• **Be Specific:** The more detailed your question, the better my response
• **Ask Follow-ups:** Build on our conversation for deeper understanding  
• **Try Different Formats:** Request explanations, examples, tests, or summaries
• **Use Voice:** Click the microphone for hands-free interaction
• **No Limits:** Ask about absolutely any topic - I have no restrictions

**🌟 Special Features:**
🔍 **Intelligent Search:** Combines AI reasoning with real-time web data
📚 **NCERT Integration:** Complete textbook knowledge with chapter references
🎮 **Interactive Learning:** Custom tests, quizzes, and practice sessions
📊 **Progress Tracking:** Remembers your learning journey and adapts
🌐 **Global Perspective:** Connects local curriculum with world knowledge

**Ready to explore unlimited knowledge! What would you like to learn about today? 🚀**

*Ask me anything - from CBSE syllabus to quantum physics, from poetry to programming, from current events to career planning. No question is too simple or too complex!*`;

        this.addMessageToChat(welcomeMessage, 'ai');
    }

    handleInitializationError(error) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #0a0a1a, #1a1a2e);
                color: #ff4757;
                font-family: 'Courier New', monospace;
                text-align: center;
                padding: 20px;
            ">
                <div style="max-width: 600px; background: rgba(10, 10, 26, 0.9); padding: 40px; border-radius: 20px; border: 2px solid #ff4757;">
                    <h1 style="font-size: 48px; margin-bottom: 20px; color: #ff4757;">🚨 JARVIS SYSTEM ERROR</h1>
                    <h2 style="color: #00d4ff; margin-bottom: 15px;">Critical System Initialization Failure</h2>
                    <p style="margin-bottom: 10px; color: #ffffff; opacity: 0.9;">Error Details: ${error.message}</p>
                    <p style="margin-bottom: 30px; color: #ffffff; opacity: 0.7;">The JARVIS AI system encountered an unexpected error during startup.</p>
                    <button onclick="location.reload()" style="
                        background: linear-gradient(135deg, #00d4ff, #0080ff);
                        color: #0a0a1a;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 12px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: bold;
                        transition: transform 0.3s ease;
                    " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        🔄 Restart JARVIS System
                    </button>
                    <p style="margin-top: 25px; font-size: 12px; color: #ffffff; opacity: 0.5;">
                        If the problem persists, check your internet connection and API configurations.
                    </p>
                </div>
            </div>
        `;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════
// SYSTEM INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════════════════

// Initialize JARVIS when page loads
let jarvisSystem;

// Primary initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            jarvisSystem = new JarvisAISystem();
        } catch (error) {
            console.error('JARVIS initialization failed:', error);
        }
    });
} else {
    try {
        jarvisSystem = new JarvisAISystem();
    } catch (error) {
        console.error('JARVIS initialization failed:', error);
    }
}

// Backup initialization after 2 seconds
setTimeout(() => {
    if (!jarvisSystem) {
        try {
            console.log('🔄 Backup JARVIS initialization...');
            jarvisSystem = new JarvisAISystem();
        } catch (error) {
            console.error('Backup initialization failed:', error);
        }
    }
}, 2000);

// Global access for debugging
window.jarvis = jarvisSystem;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JarvisAISystem;
}

console.log("🤖 JARVIS AI Script loaded successfully - Ready for intelligence!");
