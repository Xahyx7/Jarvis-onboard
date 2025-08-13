import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'jarvis-ai-secret-key-2024'
    DEBUG = os.environ.get('DEBUG', 'True').lower() == 'true'
    UPLOAD_FOLDER = os.path.join('backend', 'static', 'temp')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024
    
    # Study Assistant Settings
    DEFAULT_RESPONSE_LENGTH = 1000
    MAX_CONVERSATION_HISTORY = 50
    SUPPORTED_SUBJECTS = ['mathematics', 'physics', 'chemistry', 'biology']
    SUPPORTED_CLASSES = list(range(6, 13))
    
    # API Settings
    API_VERSION = "1.0"
    API_TITLE = "Jarvis AI Study Assistant"
    
class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    DEBUG = False
    TESTING = False

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
