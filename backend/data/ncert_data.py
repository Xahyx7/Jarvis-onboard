class NCERTData:
    """
    NCERT Textbook Data Handler
    Contains chapter information and content for all CBSE classes
    """
    
    def __init__(self):
        self.subjects = {
            'mathematics': {
                'class_6': ['Knowing Our Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes', 'Integers', 'Fractions', 'Decimals', 'Data Handling', 'Mensuration', 'Algebra', 'Ratio and Proportion', 'Symmetry', 'Practical Geometry'],
                'class_7': ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'The Triangle and its Properties', 'Congruence of Triangles', 'Comparing Quantities', 'Rational Numbers', 'Practical Geometry', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Symmetry', 'Visualising Solid Shapes'],
                'class_8': ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Practical Geometry', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Visualising Solid Shapes', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs', 'Playing with Numbers'],
                'class_9': ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Introduction to Euclids Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Herons Formula', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
                'class_10': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
                'class_11': ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability'],
                'class_12': ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability']
            },
            'physics': {
                'class_11': ['Physical World', 'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'],
                'class_12': ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics: Materials, Devices and Simple Circuits']
            },
            'chemistry': {
                'class_11': ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Hydrogen', 'The s-Block Elements', 'The p-Block Elements', 'Organic Chemistry- Some Basic Principles and Techniques', 'Hydrocarbons', 'Environmental Chemistry'],
                'class_12': ['The Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'General Principles and Processes of Isolation of Elements', 'The p-Block Elements', 'The d-and f-Block Elements', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life']
            },
            'biology': {
                'class_11': ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'],
                'class_12': ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues']
            },
            'social_science': {
                'class_10': {
                    'history': ['The Rise of Nationalism in Europe', 'The Nationalist Movement in Indo-China', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation'],
                    'geography': ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'],
                    'political_science': ['Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Popular Struggles and Movements', 'Political Parties', 'Outcomes of Democracy', 'Challenges to Democracy'],
                    'economics': ['Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy', 'Consumer Rights']
                }
            }
        }
    
    def get_chapters(self, subject, class_level):
        """Get list of chapters for a specific subject and class"""
        return self.subjects.get(subject, {}).get(f'class_{class_level}', [])
    
    def get_all_subjects(self):
        """Get all available subjects"""
        return list(self.subjects.keys())
    
    def get_available_classes(self, subject):
        """Get available class levels for a subject"""
        if subject in self.subjects:
            return [int(key.split('_')[1]) for key in self.subjects[subject].keys() if key.startswith('class_')]
        return []
    
    def search_chapters(self, search_term):
        """Search for chapters containing specific keywords"""
        results = []
        for subject, classes in self.subjects.items():
            for class_key, chapters in classes.items():
                if isinstance(chapters, list):
                    for chapter in chapters:
                        if search_term.lower() in chapter.lower():
                            class_num = class_key.split('_')[1]
                            results.append({
                                'subject': subject,
                                'class': class_num,
                                'chapter': chapter
                            })
                elif isinstance(chapters, dict):  # For social science structure
                    for sub_subject, chapter_list in chapters.items():
                        for chapter in chapter_list:
                            if search_term.lower() in chapter.lower():
                                class_num = class_key.split('_')[1]
                                results.append({
                                    'subject': f'{subject}_{sub_subject}',
                                    'class': class_num,
                                    'chapter': chapter
                                })
        return results
    
    def get_chapter_info(self, subject, class_level, chapter_name):
        """Get detailed information about a specific chapter"""
        chapters = self.get_chapters(subject, class_level)
        if chapter_name in chapters:
            return {
                'subject': subject,
                'class': class_level,
                'chapter': chapter_name,
                'position': chapters.index(chapter_name) + 1,
                'total_chapters': len(chapters)
            }
        return None
