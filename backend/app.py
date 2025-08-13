from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'data'))

from data.ncert_data import NCERTData
from data.cbse_pyq import CBSEPaper
from data.books_data import BooksData

load_dotenv()

app = Flask(__name__)
CORS(app)

class JarvisAI:
    def __init__(self):
        self.ncert_data = NCERTData()
        self.cbse_pyq = CBSEPaper()
        self.books_data = BooksData()
        self.conversation_history = []

    def get_ai_response(self, user_input, context="general"):
        enhanced_responses = {
            "math": f"**Mathematics Help for:** '{user_input}'\n\nI can assist with:\n• Algebra and equations\n• Geometry and trigonometry\n• Calculus and derivatives\n• Statistics and probability\n\n**NCERT Chapters Available:** {', '.join(self.ncert_data.get_chapters('mathematics', '10')[:5])}...\n\nWhat specific concept would you like to explore?",
            
            "science": f"**Science Assistance for:** '{user_input}'\n\nI can help with:\n• Physics concepts and laws\n• Chemistry reactions and equations\n• Biology processes and systems\n\n**Available Topics:** Motion, Forces, Atoms, Photosynthesis, Human Body\n\nWhich scientific concept interests you?",
            
            "test": f"**Test Preparation for:** '{user_input}'\n\n**Available Test Types:**\n• Subject-specific practice tests\n• Previous year question practice\n• Mock examinations\n• Custom difficulty levels\n\n**Sample Questions Available:** {len(self.cbse_pyq.get_questions('mathematics', '10'))} Math questions, {len(self.cbse_pyq.get_questions('mathematics', '12'))} advanced questions\n\nWhich subject test would you prefer?",
            
            "revision": f"**Revision Strategy for:** '{user_input}'\n\n**Structured Approach:**\n1. **Quick Review:** Key concepts and formulas\n2. **Practice Phase:** Solve previous year questions\n3. **Mock Tests:** Time-bound assessments\n4. **Weak Area Focus:** Targeted improvement\n\n**Resources Available:** NCERT summaries, Formula sheets, PYQ database\n\nWhich subject needs revision focus?",
            
            "general": f"**Jarvis Study Assistant Response to:** '{user_input}'\n\n**I can help you with:**\n• 📚 **NCERT Solutions:** Complete chapter explanations\n• 📝 **CBSE PYQs:** 10+ years question bank\n• 🧮 **Reference Books:** RS Aggarwal, RD Sharma\n• ✅ **Smart Tests:** AI-generated practice questions\n• 🎯 **Revision Plans:** Structured study schedules\n\n**Quick Actions:**\n- Select subject context for specialized help\n- Ask specific questions for detailed explanations\n- Request practice tests for any topic\n\nHow can I assist with your studies today?"
        }
        
        response = enhanced_responses.get(context, enhanced_responses["general"])
        
        self.conversation_history.append({
            "user": user_input,
            "context": context,
            "response": response
        })
        
        return response

jarvis = JarvisAI()

@app.route('/')
def index():
    return jsonify({
        "message": "Jarvis AI Backend is running successfully!",
        "status": "online",
        "features": [
            "NCERT Solutions",
            "CBSE Previous Year Questions",
            "RS Aggarwal & RD Sharma References",
            "AI Study Assistance",
            "Voice Integration Ready"
        ]
    })

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        context = data.get('context', 'general')
        
        if not user_message:
            return jsonify({
                'response': 'Please provide a message for me to respond to.',
                'status': 'error'
            }), 400
        
        response = jarvis.get_ai_response(user_message, context)
        
        return jsonify({
            'response': response,
            'status': 'success',
            'context': context,
            'timestamp': str(datetime.now()) if 'datetime' in globals() else 'N/A'
        })
    
    except Exception as e:
        return jsonify({
            'response': f'I encountered an error processing your request: {str(e)}',
            'status': 'error'
        }), 500

@app.route('/api/subjects', methods=['GET'])
def get_subjects():
    try:
        return jsonify({
            'subjects': {
                'mathematics': jarvis.ncert_data.get_chapters('mathematics', '10'),
                'physics': jarvis.ncert_data.get_chapters('physics', '11'),
                'chemistry': jarvis.ncert_data.get_chapters('chemistry', '11'),
                'biology': jarvis.ncert_data.get_chapters('biology', '11')
            },
            'status': 'success'
        })
    except Exception as e:
        return jsonify({'error': str(e), 'status': 'error'}), 500

@app.route('/api/test', methods=['POST'])
def create_test():
    try:
        data = request.json
        subject = data.get('subject', 'mathematics')
        class_level = data.get('class', '10')
        
        questions = jarvis.cbse_pyq.get_questions(subject, class_level)
        
        return jsonify({
            'test_questions': questions[:5] if questions else ['No questions available for this subject/class combination'],
            'subject': subject,
            'class': class_level,
            'total_questions': len(questions),
            'status': 'success'
        })
    
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

if __name__ == '__main__':
    from datetime import datetime
    print(f"Starting Jarvis AI Backend at {datetime.now()}")
    app.run(debug=True, host='0.0.0.0', port=5000)
