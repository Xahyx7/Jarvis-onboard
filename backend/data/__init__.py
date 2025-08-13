"""
Jarvis AI Study Assistant - Data Package
Contains all educational content and data structures.
"""

__version__ = "1.0.0"
__author__ = "Jarvis AI Team"

# Import main data classes for easy access
from .ncert_data import NCERTData
from .cbse_pyq import CBSEPaper
from .books_data import BooksData

__all__ = ['NCERTData', 'CBSEPaper', 'BooksData']
