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

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showTypingIndicator();

        try {
            const context = this.contextSelect.value;
            const response = await this.callAPI('/api/chat', {
                message: message,
                context: context
            });

            this.hideTypingIndicator();
            this.addMessage(response.response, 'jarvis');
            this.speak(response.response);

        } catch (error) {
            this.hideTypingIndicator();
            const fallbackResponse = this.getLocalResponse(message, this.contextSelect.value);
            this.addMessage(fallbackResponse, 'jarvis');
            this.speak(fallbackResponse);
        }
    }

    getLocalResponse(message, context) {
        const msg = message.toLowerCase();
        
        if (context === 'math' || msg.includes('math') || msg.includes('equation') || msg.includes('solve')) {
            if (msg.includes('quadratic')) return "**Quadratic Equations Guide**\n\nStandard form: ax² + bx + c = 0\n\n**Solving Methods:**\n1. Factorization\n2. Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a\n3. Completing the square\n\n**Example:** x² - 5x + 6 = 0\nSolution: (x-2)(x-3) = 0, so x = 2 or x = 3";
            if (msg.includes('triangle')) return "**Triangle Properties**\n\n• Sum of angles = 180°\n• Area = ½ × base × height\n• Pythagorean theorem: a² + b² = c²\n• Similar triangles have proportional sides\n\n**Types:** Equilateral, Isosceles, Scalene";
            return "I can help with mathematics! Try asking about quadratic equations, triangles, algebra, geometry, or trigonometry.";
        }
        
        if (context === 'science' || msg.includes('physics') || msg.includes('chemistry') || msg.includes('biology')) {
            if (msg.includes('newton')) return "**Newton's Laws:**\n\n1st Law: Objects at rest stay at rest unless acted upon by force\n2nd Law: F = ma (Force = mass × acceleration)\n3rd Law: Every action has equal and opposite reaction\n\n**Examples:** Walking, rocket propulsion, car braking";
            if (msg.includes('photosynthesis')) return "**Photosynthesis Process:**\n\n6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n\n**Where:** Occurs in chloroplasts\n**Stages:** Light reactions + Calvin cycle\n**Importance:** Oxygen production, food synthesis";
            return "I can help with science subjects! Ask about physics laws, chemistry reactions, or biology processes.";
        }
        
        if (context === 'test' || msg.includes('test')) {
            const tests = [
                "**Math Test - Quadratic Equations:**\n1. Solve: 2x² - 7x + 3 = 0\n2. Find discriminant of x² - 4x + 4 = 0\n3. Form equation with roots 2 and -3\n\nTime: 15 minutes",
                "**Physics Quiz:**\n1. State Newton's first law\n2. Calculate force if mass=5kg, acceleration=2m/s²\n3. Define momentum\n\nTime: 10 minutes"
            ];
            return tests[Math.floor(Math.random() * tests.length)];
        }
        
        if (msg.includes('hello') || msg.includes('hi')) {
            return "Hello! I'm Jarvis, your AI study assistant. I can help with CBSE subjects, solve problems, create tests, and clear your doubts. What would you like to study today?";
        }
        
        return `I understand you're asking about "${message}". I can help with:\n\n• Mathematics problems and concepts\n• Science explanations\n• Test preparation\n• NCERT solutions\n• Revision strategies\n\nPlease specify the subject or choose from the dropdown menu for more targeted help!`;
    }

    async callAPI(endpoint, data) {
        const response = await fetch(`http://localhost:5000${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Backend not available');
        }

        return await response.json();
    }

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
                    <strong>Jarvis is thinking</strong>
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

    startRecording() {
        if (this.recognition) {
            this.recognition.start();
            this.recordBtn.style.display = 'none';
            this.stopBtn.style.display = 'block';
            this.recordBtn.classList.add('recording');
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
        this.recordBtn.classList.remove('recording');
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
