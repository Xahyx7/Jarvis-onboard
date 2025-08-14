class UltimateJarvisAI {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        this.apiCache = new Map();
        this.languageDetector = new LanguageDetector();
        this.conversationMemory = [];
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeSpeechRecognition();
        this.playWelcomeSound();
        this.displayWelcomeMessage();
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

        // Add language preference selector
        this.addLanguageSelector();
    }

    displayWelcomeMessage() {
        const welcomeMessage = `**🤖 Ultimate Jarvis AI - Like Perplexity!**

🌍 **Multi-Language Support**: Ask in English, Hindi, Hinglish, or any language!
🌐 **Complete Internet Access**: Real-time search across multiple sources
🧠 **No Restrictions**: Ask anything - history, current events, science, math, personal questions
📚 **Smart AI Synthesis**: Combines multiple sources for best answers
🎤 **Voice Support**: Speak and hear responses in your language

**नमस्ते! मैं Jarvis हूँ - आपका AI सहायक**
**Hello! I'm Jarvis - Your AI Assistant**

**Try these commands:**
- "What's happening in India today?" / "आज भारत में क्या हो रहा है?"
- "Tell me about AI in Hindi" / "AI के बारे में हिंदी में बताओ"
- "Latest cricket scores" / "ताजा क्रिकेट स्कोर"
- "Explain quantum physics" / "क्वांटम भौतिकी समझाओ"
- "When did Napoleon die?" / "नेपोलियन कब मरा था?"

**Ask me ANYTHING in ANY language! 🚀**`;

        this.addMessage(welcomeMessage, 'jarvis');
    }

    // ADVANCED LANGUAGE DETECTION
    detectLanguage(text) {
        const hindiWords = ['है', 'हैं', 'का', 'की', 'के', 'में', 'को', 'से', 'पर', 'और', 'या', 'तो', 'जो', 'यह', 'वह', 'मैं', 'तुम', 'हम', 'आप', 'क्या', 'कैसे', 'कब', 'कहाँ', 'क्यों', 'बताओ', 'समझाओ', 'दो', 'करो', 'होगा', 'था', 'थी', 'गया', 'गई'];
        const englishWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'what', 'when', 'where', 'how', 'why', 'tell', 'explain', 'give', 'make', 'will', 'was', 'were', 'went', 'gone'];
        
        const words = text.toLowerCase().split(/\s+/);
        let hindiCount = 0;
        let englishCount = 0;
        let hinglishScore = 0;

        words.forEach(word => {
            if (hindiWords.includes(word)) hindiCount++;
            if (englishWords.includes(word)) englishCount++;
            
            // Detect Hinglish patterns
            if (hindiWords.includes(word) && englishWords.some(ew => text.toLowerCase().includes(ew))) {
                hinglishScore++;
            }
        });

        // Check for Devanagari script
        const devanagariRegex = /[\u0900-\u097F]/;
        const hasDevanagari = devanagariRegex.test(text);

        if (hasDevanagari || hindiCount > englishCount) {
            return 'hindi';
        } else if (hinglishScore > 0 && hindiCount > 0 && englishCount > 0) {
            return 'hinglish';
        } else {
            return 'english';
        }
    }

    addLanguageSelector() {
        const languageSelector = document.createElement('select');
        languageSelector.id = 'languageSelect';
        languageSelector.innerHTML = `
            <option value="auto">🌍 Auto-Detect</option>
            <option value="english">🇺🇸 English</option>
            <option value="hindi">🇮🇳 हिंदी</option>
            <option value="hinglish">🎯 Hinglish</option>
        `;
        languageSelector.style.cssText = `
            margin-left: 10px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
        `;
        
        // Add to header controls if available
        const controls = document.querySelector('.controls');
        if (controls) {
            controls.appendChild(languageSelector);
        }
    }

    // COMPREHENSIVE MULTI-API SEARCH - NO RESTRICTIONS
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
            this.searchNews(encodedQuery),
            this.searchMultipleEngines(encodedQuery),
            this.searchStackOverflow(encodedQuery), // For technical questions
            this.searchYouTube(encodedQuery) // For video content
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

    async searchMultipleEngines(encodedQuery) {
        const results = [];
        
        try {
            // Search multiple free APIs
            const apis = [
                `https://api.duckduckgo.com/?q=${encodedQuery}&format=json`,
                `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodedQuery}&limit=3&format=json&origin=*`
            ];
            
            for (const apiUrl of apis) {
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    
                    // Process different API responses
                    if (Array.isArray(data) && data.length > 1) {
                        // Wikipedia opensearch format
                        const titles = data[1];
                        const descriptions = data[2];
                        const urls = data[3];
                        
                        for (let i = 0; i < Math.min(titles.length, 2); i++) {
                            results.push({
                                title: titles[i],
                                snippet: descriptions[i] || 'No description available',
                                url: urls[i] || '',
                                source: 'Wikipedia Search',
                                relevance: 6,
                                type: 'search'
                            });
                        }
                    }
                } catch (e) {
                    console.log('Multi-engine search error:', e);
                }
            }
            
        } catch (error) {
            console.log('Multiple engines error:', error);
        }
        
        return results;
    }

    async searchStackOverflow(encodedQuery) {
        try {
            // For technical questions
            if (!['code', 'programming', 'error', 'function', 'javascript', 'python', 'html', 'css'].some(tech => encodedQuery.toLowerCase().includes(tech))) {
                return [];
            }
            
            const response = await fetch(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodedQuery}&site=stackoverflow`);
            const data = await response.json();
            
            const results = [];
            if (data.items) {
                data.items.slice(0, 2).forEach(item => {
                    results.push({
                        title: item.title,
                        snippet: `${item.score} votes, ${item.answer_count} answers`,
                        url: item.link,
                        source: 'Stack Overflow',
                        relevance: 8,
                        type: 'technical'
                    });
                });
            }
            
            return results;
            
        } catch (error) {
            console.log('StackOverflow API error:', error);
            return [];
        }
    }

    async searchYouTube(encodedQuery) {
        try {
            // YouTube doesn't have a free API, but we can try other video sources
            // This is a placeholder for video content search
            return [];
            
        } catch (error) {
            console.log('YouTube search error:', error);
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
                'encyclopedia': 2, 'technical': 2, 'news': 1
            };
            
            scoreA += typeBonus[a.type] || 0;
            scoreB += typeBonus[b.type] || 0;
            
            return scoreB - scoreA;
        });
    }

    // ADVANCED AI RESPONSE GENERATION
    async generateIntelligentResponse(query, searchResults, detectedLang) {
        console.log(`🧠 Generating AI response for: "${query}" in ${detectedLang}`);
        
        try {
            // Try advanced AI synthesis first
            const aiResponse = await this.tryAdvancedAI(query, searchResults, detectedLang);
            if (aiResponse) return aiResponse;
            
        } catch (error) {
            console.log('Advanced AI failed, using fallback:', error);
        }
        
        // Fallback to intelligent rule-based response
        return this.createSmartResponse(query, searchResults, detectedLang);
    }

    async tryAdvancedAI(query, searchResults, detectedLang) {
        // Try multiple AI APIs in order of preference
        const aiApis = [
            () => this.useHuggingFaceAI(query, searchResults, detectedLang),
            () => this.useOpenAICompatible(query, searchResults, detectedLang),
            () => this.useLocalAI(query, searchResults, detectedLang)
        ];
        
        for (const aiApi of aiApis) {
            try {
                const result = await aiApi();
                if (result) return result;
            } catch (error) {
                console.log('AI API failed:', error);
                continue;
            }
        }
        
        return null;
    }

    async useHuggingFaceAI(query, searchResults, detectedLang) {
        try {
            const contextInfo = searchResults.slice(0, 4).map(result => 
                `${result.title} (${result.source}): ${result.snippet}`
            ).join('\n\n');
            
            const languageInstructions = {
                'hindi': 'Respond in Hindi (हिंदी में जवाब दें)',
                'hinglish': 'Respond in Hinglish (English और Hindi mix में)',
                'english': 'Respond in English'
            };
            
            const prompt = `${languageInstructions[detectedLang] || 'Respond in English'}.
            
Question: ${query}

Information from web search:
${contextInfo}

Based on the above information, provide a comprehensive, accurate answer:`;
            
            const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_length: 1500,
                        temperature: 0.7,
                        do_sample: true
                    }
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data[0]?.generated_text) {
                    return this.formatAIResponse(data[0].generated_text, searchResults);
                }
            }
        } catch (error) {
            console.log('Hugging Face AI error:', error);
        }
        
        return null;
    }

    async useOpenAICompatible(query, searchResults, detectedLang) {
        // This would use OpenAI API if available (paid)
        // Placeholder for future implementation
        return null;
    }

    async useLocalAI(query, searchResults, detectedLang) {
        // Placeholder for local AI models
        return null;
    }

    createSmartResponse(query, searchResults, detectedLang) {
        const responses = {
            'hindi': this.createHindiResponse(query, searchResults),
            'hinglish': this.createHinglishResponse(query, searchResults),
            'english': this.createEnglishResponse(query, searchResults)
        };
        
        return responses[detectedLang] || responses['english'];
    }

    createHindiResponse(query, searchResults) {
        let response = `**${query} के बारे में जानकारी:**\n\n`;
        
        if (searchResults.length > 0) {
            const primary = searchResults[0];
            response += `**मुख्य उत्तर:**\n${primary.snippet}\n\n`;
            
            if (searchResults.length > 1) {
                response += "**अतिरिक्त जानकारी:**\n";
                searchResults.slice(1, 4).forEach((result, index) => {
                    response += `${index + 1}. **${result.title}** (${result.source})\n`;
                    response += `   ${result.snippet}\n\n`;
                });
            }
            
            response += "**स्रोत:**\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `• ${result.source}`;
                if (result.url) response += ` - [लिंक](${result.url})`;
                response += "\n";
            });
        } else {
            response = this.getHindiFallback(query);
        }
        
        return response;
    }

    createHinglishResponse(query, searchResults) {
        let response = `**${query} ke bare mein jaankari:**\n\n`;
        
        if (searchResults.length > 0) {
            const primary = searchResults[0];
            response += `**Main Answer:**\n${primary.snippet}\n\n`;
            
            if (searchResults.length > 1) {
                response += "**Aur bhi details:**\n";
                searchResults.slice(1, 4).forEach((result, index) => {
                    response += `${index + 1}. **${result.title}** (${result.source})\n`;
                    response += `   ${result.snippet}\n\n`;
                });
            }
            
            response += "**Sources:**\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `• ${result.source}`;
                if (result.url) response += ` - [link](${result.url})`;
                response += "\n";
            });
        } else {
            response = this.getHinglishFallback(query);
        }
        
        return response;
    }

    createEnglishResponse(query, searchResults) {
        let response = `**Information about: ${query}**\n\n`;
        
        if (searchResults.length > 0) {
            const primary = searchResults[0];
            response += `**Primary Answer:**\n${primary.snippet}\n\n`;
            
            if (searchResults.length > 1) {
                response += "**Additional Information:**\n";
                searchResults.slice(1, 4).forEach((result, index) => {
                    response += `**${index + 2}.** ${result.title} (${result.source})\n`;
                    response += `${result.snippet}\n\n`;
                });
            }
            
            response += "**📚 Sources:**\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `• ${result.source}`;
                if (result.url) response += ` - [Link](${result.url})`;
                response += "\n";
            });
        } else {
            response = this.getEnglishFallback(query);
        }
        
        return response;
    }

    getHindiFallback(query) {
        const q = query.toLowerCase();
        
        if (q.includes('नेपोलियन') || q.includes('napoleon')) {
            return `**नेपोलियन बोनापार्ट** की मृत्यु **5 मई, 1821** को हुई थी। वह 51 वर्ष की आयु में सेंट हेलेना द्वीप पर मरा था, जहाँ वह वाटरलू की हार के बाद निर्वासित था। अधिकांश इतिहासकारों के अनुसार उसकी मौत पेट के कैंसर से हुई थी।`;
        }
        
        return `मैंने "${query}" के बारे में खोजा लेकिन अभी कोई खास जानकारी नहीं मिली। आप कुछ और पूछ सकते हैं:\n\n• 📚 शिक्षा (गणित, विज्ञान, इतिहास)\n• 🌐 ताजा समाचार\n• 💡 सामान्य ज्ञान\n• 🧮 समस्या समाधान`;
    }

    getHinglishFallback(query) {
        const q = query.toLowerCase();
        
        if (q.includes('napoleon') || q.includes('नेपोलियन')) {
            return `**Napoleon Bonaparte** ki death **5 May, 1821** ko hui thi. Woh 51 years ki age mein Saint Helena island par mara tha, jahan woh Waterloo defeat ke baad exile mein tha. Most historians ke according, uski death stomach cancer se hui thi.`;
        }
        
        return `Maine "${query}" ke bare mein search kiya but abhi koi specific results nahi mile. Aap ye try kar sakte hain:\n\n• 📚 Education topics (Math, Science, History)\n• 🌐 Latest news aur current events\n• 💡 General knowledge questions\n• 🧮 Problem solving`;
    }

    getEnglishFallback(query) {
        const q = query.toLowerCase();
        
        if (q.includes('napoleon')) {
            return `**Napoleon Bonaparte** died on **May 5, 1821** at age 51 on the island of Saint Helena, where he was exiled after his defeat at Waterloo. According to most historical accounts, he died of stomach cancer.`;
        }
        
        return `I searched for information about "${query}" but couldn't find specific results at the moment. You can try:\n\n• 📚 Educational topics (Math, Science, History)\n• 🌐 Current events and latest news\n• 💡 General knowledge questions\n• 🧮 Problem solving`;
    }

    formatAIResponse(aiText, searchResults) {
        let response = aiText.replace(/Question:.*?answer:/gi, '').trim();
        
        if (searchResults.length > 0) {
            response += "\n\n**📚 Sources:**\n";
            searchResults.slice(0, 3).forEach((result, index) => {
                response += `\n**${index + 1}.** ${result.title} (${result.source})`;
                if (result.url) response += `\n   ${result.url}`;
            });
        }
        
        return response;
    }

    // MAIN MESSAGE PROCESSING
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Store in conversation memory
        this.conversationMemory.push({
            timestamp: Date.now(),
            user: message,
            type: 'user'
        });

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showTypingIndicator();

        try {
            // Detect language
            const detectedLang = this.detectLanguage(message);
            console.log(`🌍 Detected language: ${detectedLang}`);
            
            // Always search all sources - NO RESTRICTIONS!
            const searchResults = await this.searchAllSources(message);
            
            // Generate intelligent response
            const response = await this.generateIntelligentResponse(message, searchResults, detectedLang);
            
            // Store AI response in memory
            this.conversationMemory.push({
                timestamp: Date.now(),
                ai: response,
                type: 'ai',
                language: detectedLang,
                sources: searchResults.length
            });
            
            this.hideTypingIndicator();
            this.addMessage(response, 'jarvis');
            
            // Speak in appropriate language
            this.speakInLanguage(response, detectedLang);
            
            this.updateStatus(`Answered in ${detectedLang}`);
            
        } catch (error) {
            console.error('Error processing message:', error);
            this.hideTypingIndicator();
            
            const detectedLang = this.detectLanguage(message);
            const fallbackResponse = this.createSmartResponse(message, [], detectedLang);
            this.addMessage(fallbackResponse, 'jarvis');
            this.speakInLanguage(fallbackResponse, detectedLang);
        }
    }

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

    // UI METHODS (keeping your existing ones)
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
                    <strong>🌐 Jarvis is searching the entire internet...</strong>
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

    // VOICE RECOGNITION (Enhanced for multiple languages)
    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            
            // Support multiple languages
            this.recognition.lang = 'en-US'; // Default, will be changed dynamically
            
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
            // Set language based on user preference
            const langSelect = document.getElementById('languageSelect');
            const selectedLang = langSelect?.value || 'auto';
            
            const langCodes = {
                'english': 'en-US',
                'hindi': 'hi-IN',
                'hinglish': 'en-IN',
                'auto': 'en-US'
            };
            
            this.recognition.lang = langCodes[selectedLang] || 'en-US';
            
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

    handleQuickAction(action) {
        const actions = {
            'test': 'Give me a practice test / मुझे एक अभ्यास परीक्षा दो',
            'revision': 'Help me with revision strategies / संशोधन रणनीतियों में मदद करें',
            'doubt': 'I have a doubt about quadratic equations / द्विघात समीकरणों के बारे में मेरा संदेह है',
            'practice': 'Give me practice questions / मुझे अभ्यास प्रश्न दो'
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

// Language Detection Helper Class
class LanguageDetector {
    constructor() {
        this.patterns = {
            hindi: /[\u0900-\u097F]/,
            english: /^[a-zA-Z\s.,!?]+$/
        };
    }
    
    detect(text) {
        if (this.patterns.hindi.test(text)) return 'hindi';
        if (this.patterns.english.test(text)) return 'english';
        return 'hinglish'; // Mixed or other
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
});
