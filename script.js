class JarvisAssistant {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeSpeechRecognition();
        this.playWelcomeSound();
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
        
        this.recordBtn.addEventListener('click', () => this.startRecording());
        this.stopBtn.addEventListener('click', () => this.stopRecording());
        
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            });
        });
    }

    // FREE INTERNET ACCESS - Multiple APIs
    async searchMultipleAPIs(query) {
        const results = [];
        
        // 1. DuckDuckGo Instant Answer API (Free)
        try {
            const ddgResponse = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`);
            const ddgData = await ddgResponse.json();
            
            if (ddgData.Abstract) {
                results.push({
                    title: ddgData.Heading || query,
                    snippet: ddgData.Abstract,
                    url: ddgData.AbstractURL || '',
                    source: 'DuckDuckGo'
                });
            }
            
            // Add related topics
            if (ddgData.RelatedTopics) {
                ddgData.RelatedTopics.slice(0, 2).forEach(topic => {
                    if (typeof topic === 'object' && topic.Text) {
                        results.push({
                            title: topic.Text.split(' - ')[0],
                            snippet: topic.Text,
                            url: topic.FirstURL || '',
                            source: 'DuckDuckGo Related'
                        });
                    }
                });
            }
        } catch (error) {
            console.log('DuckDuckGo API error:', error);
        }

        // 2. Wikipedia API (Free)
        try {
            const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
            if (wikiResponse.ok) {
                const wikiData = await wikiResponse.json();
                results.push({
                    title: wikiData.title,
                    snippet: wikiData.extract,
                    url: wikiData.content_urls?.desktop?.page || '',
                    source: 'Wikipedia'
                });
            }
        } catch (error) {
            console.log('Wikipedia API error:', error);
        }

        // 3. NewsAPI (Free tier)
        try {
            const newsResponse = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=2&apiKey=demo`);
            if (newsResponse.ok) {
                const newsData = await newsResponse.json();
                if (newsData.articles) {
                    newsData.articles.slice(0, 2).forEach(article => {
                        results.push({
                            title: article.title,
                            snippet: article.description,
                            url: article.url,
                            source: 'News'
                        });
                    });
                }
            }
        } catch (error) {
            console.log('News API error:', error);
        }

        return results;
    }

    // FREE AI RESPONSE using Hugging Face API
    async getFreeAIResponse(message, context, webResults = []) {
        // Check if we need internet search
        const needsInternet = this.needsInternetSearch(message);
        
        let searchResults = webResults;
        if (needsInternet && searchResults.length === 0) {
            searchResults = await this.searchMultipleAPIs(message);
        }

        // Try Hugging Face free API
        try {
            const hfResponse = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    inputs: this.buildContextPrompt(message, context, searchResults),
                    parameters: {
                        max_length: 1000,
                        temperature: 0.7,
                        do_sample: true
                    }
                })
            });

            if (hfResponse.ok) {
                const hfData = await hfResponse.json();
                if (hfData[0] && hfData[0].generated_text) {
                    return this.formatAIResponse(hfData[0].generated_text, searchResults);
                }
            }
        } catch (error) {
            console.log('Hugging Face API error:', error);
        }

        // Fallback to smart local response
        return this.generateSmartResponse(message, context, searchResults);
    }

    needsInternetSearch(message) {
        const internetKeywords = [
            'latest', 'current', 'today', 'recent', 'news', 'now', 'happening',
            'what is happening', 'current events', 'breaking news', 'live',
            'this year', '2025', 'real time', 'weather', 'stock price',
            'what happened today', 'recent developments'
        ];
        
        const msg = message.toLowerCase();
        return internetKeywords.some(keyword => msg.includes(keyword));
    }

    buildContextPrompt(message, context, searchResults) {
        let prompt = `Context: ${context}. User question: ${message}.`;
        
        if (searchResults.length > 0) {
            prompt += ` Current web information: `;
            searchResults.forEach(result => {
                prompt += `${result.title}: ${result.snippet} `;
            });
        }
        
        prompt += ` Please provide a helpful response as Jarvis AI assistant.`;
        return prompt;
    }

    formatAIResponse(aiText, searchResults) {
        let response = aiText;
        
        // Add web results if available
        if (searchResults.length > 0) {
            response += "\n\n**🌐 Current Web Information:**\n\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `**${index + 1}. ${result.title}** (${result.source})\n`;
                response += `${result.snippet}\n`;
                if (result.url) response += `[Source](${result.url})\n\n`;
            });
        }
        
        return response;
    }

    generateSmartResponse(message, context, searchResults) {
        let response = '';
        
        // Add web results first if available
        if (searchResults.length > 0) {
            response += "**🌐 Latest Information:**\n\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `**${index + 1}. ${result.title}** (${result.source})\n`;
                response += `${result.snippet}\n\n`;
            });
        }

        // Add context-specific educational content
        const msg = message.toLowerCase();
        
        if (context === 'math' || msg.includes('math') || msg.includes('equation')) {
            if (msg.includes('quadratic')) {
                response += `**📐 Quadratic Equations Guide**

**Standard Form:** ax² + bx + c = 0 (where a ≠ 0)

**Solving Methods:**
1. **Factoring:** Find factors that multiply to ac and add to b
2. **Quadratic Formula:** x = (-b ± √(b² - 4ac)) / 2a  
3. **Completing Square:** Convert to perfect square form

**Example:** x² - 5x + 6 = 0
- Factoring: (x-2)(x-3) = 0
- Solutions: x = 2 or x = 3

**Discriminant (b² - 4ac):**
- If > 0: Two real solutions
- If = 0: One real solution
- If < 0: No real solutions`;
            } else if (msg.includes('triangle')) {
                response += `**📐 Triangle Properties**

**Basic Rules:**
- Sum of angles = 180°
- Area = ½ × base × height
- Exterior angle = sum of two opposite interior angles

**Types by Sides:**
- **Equilateral:** All sides equal, all angles 60°
- **Isosceles:** Two sides equal, two base angles equal
- **Scalene:** All sides different

**Pythagorean Theorem:** a² + b² = c² (right triangles only)

**Example:** Triangle with sides 3, 4, 5
- Check: 3² + 4² = 9 + 16 = 25 = 5² ✓
- This is a right triangle!`;
            } else {
                response += "I can help with mathematics! Ask about quadratic equations, triangles, algebra, geometry, calculus, or statistics.";
            }
        } else if (context === 'science' || msg.includes('physics') || msg.includes('chemistry') || msg.includes('biology')) {
            if (msg.includes('photosynthesis')) {
                response += `**🌱 Photosynthesis Process**

**Overall Equation:**
6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂

**Two Main Stages:**

**1. Light Reactions (Thylakoids):**
- Chlorophyll absorbs light energy
- Water splits: H₂O → 2H⁺ + ½O₂ + 2e⁻
- Produces ATP and NADPH

**2. Calvin Cycle (Stroma):**
- CO₂ fixed into glucose using ATP and NADPH
- Occurs in chloroplast stroma
- Independent of direct light

**Factors Affecting Rate:**
- Light intensity, CO₂ concentration, temperature, water availability

**Importance:**
- Produces oxygen for all life
- Base of food chains
- Removes CO₂ from atmosphere`;
            } else if (msg.includes('newton')) {
                response += `**⚖️ Newton's Laws of Motion**

**First Law (Inertia):**
Objects at rest stay at rest, objects in motion stay in motion unless acted upon by external force.

**Second Law:** F = ma (Force = mass × acceleration)

**Third Law:** For every action, there is equal and opposite reaction.

**Real Examples:**
- **Walking:** Push ground back → ground pushes you forward
- **Car Crash:** Body continues moving → seatbelt stops you
- **Rocket:** Gases expelled down → rocket pushed up

**Practice Problem:**
If 12kg object accelerates at 4m/s², what force is needed?
F = ma = 12 × 4 = 48 Newtons`;
            } else {
                response += "I can help with science! Ask about physics laws, chemistry reactions, biology processes, or specific concepts.";
            }
        } else if (context === 'test') {
            const tests = [
                `**📝 Mathematics Test - Quadratics & Triangles**

1. Solve using quadratic formula: 2x² - 7x + 3 = 0 (4 marks)
2. Find discriminant of x² - 6x + 9 = 0 and describe roots (3 marks)
3. In triangle ABC, if angle A = 60° and angle B = 70°, find angle C (2 marks)
4. Calculate area of right triangle with legs 8cm and 6cm (3 marks)

**Time: 20 minutes | Total: 12 marks**`,

                `**🔬 Physics Quiz - Motion & Force**

1. State and explain Newton's second law with example (4 marks)
2. A car accelerates from 0 to 30m/s in 10s. Find acceleration and distance (4 marks)
3. Why do we wear seatbelts? Explain using physics principles (2 marks)
4. Define momentum and give its SI unit (2 marks)

**Time: 18 minutes | Total: 12 marks**`,

                `**🧪 Chemistry Test - Atoms & Reactions**

1. Balance: C₃H₈ + O₂ → CO₂ + H₂O (3 marks)
2. Calculate molecular mass of Ca(OH)₂ (3 marks)
3. Define: Element, Compound, Mixture (3 marks)
4. How many atoms in 1.5 moles of H₂SO₄? (3 marks)

**Time: 15 minutes | Total: 12 marks**`
            ];
            response += tests[Math.floor(Math.random() * tests.length)];
        } else {
            response += `**🤖 Jarvis AI Assistant**

I can help you with:
• 📚 **Education** - Math, Science, Test Preparation
• 🌐 **Current Information** - Latest news, events, research
• 💡 **Problem Solving** - Step-by-step explanations
• 🎯 **Practice** - Custom tests and exercises

**Try these commands:**
- "Latest news about AI" (gets current web info)
- "Solve x² - 4x + 3 = 0" (math help)
- "Explain DNA structure" (science concepts)
- "Give me a physics test" (practice questions)`;
        }

        return response;
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showTypingIndicator();

        try {
            const context = this.contextSelect.value;
            const response = await this.getFreeAIResponse(message, context);
            
            this.hideTypingIndicator();
            this.addMessage(response, 'jarvis');
            this.speak(response);
            
        } catch (error) {
            console.error('Error:', error);
            this.hideTypingIndicator();
            const fallbackResponse = this.generateSmartResponse(message, this.contextSelect.value, []);
            this.addMessage(fallbackResponse, 'jarvis');
            this.speak(fallbackResponse);
        }
    }

    // Keep all your existing functions (addMessage, speak, etc.)
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
        return content;
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'jarvis-message');
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <strong>Jarvis is searching the web...</strong>
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

    // Keep all your existing voice and other functions
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

    playWelcomeSound() {
        if (window.AudioContext || window.webkitAudioContext) {
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
        }
    }

    startRecording() {
        if (this.recognition) {
            this.recognition.start();
            this.recordBtn.style.display = 'none';
            this.stopBtn.style.display = 'block';
            this.updateVoiceIndicator('listening');
            this.updateStatus('Listening...');
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
        this.recordBtn.style.display = 'block';
        this.stopBtn.style.display = 'none';
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

    speak(text) {
        if ('speechSynthesis' in window) {
            this.updateVoiceIndicator('speaking');
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            
            utterance.onend = () => {
                this.updateVoiceIndicator('');
            };
            
            speechSynthesis.speak(utterance);
        }
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
}

document.addEventListener('DOMContentLoaded', () => {
    window.jarvis = new JarvisAssistant();
    
    if ('speechSynthesis' in window) {
        speechSynthesis.getVoices();
        speechSynthesis.addEventListener('voiceschanged', () => {
            speechSynthesis.getVoices();
        });
    }
});
