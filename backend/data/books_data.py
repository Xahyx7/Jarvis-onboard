class BooksData:
    """
    Reference Books Data Handler
    Contains RS Aggarwal, RD Sharma, and other reference book information
    """
    
    def __init__(self):
        self.books = {
            'rs_aggarwal': {
                'class_6': ['Number System', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes', 'Integers', 'Fractions', 'Decimals', 'Data Handling', 'Mensuration', 'Algebra', 'Ratio and Proportion', 'Symmetry', 'Practical Geometry'],
                'class_7': ['Integers', 'Fractions', 'Decimal Fractions', 'Exponents', 'Algebraic Expressions', 'Linear Equations', 'Ratio and Proportion', 'Unitary Method', 'Percentage', 'Profit and Loss', 'Simple Interest', 'Lines and Angles', 'Properties of Triangles', 'Congruency', 'Quadrilaterals', 'Data Handling', 'Reflection and Rotational Symmetry'],
                'class_8': ['Rational Numbers', 'Powers', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Playing with Numbers', 'Algebraic Expressions', 'Factorisation', 'Linear Equations', 'Understanding Shapes', 'Practical Geometry', 'Mensuration', 'Exponents', 'Direct and Inverse Variations', 'Time and Work', 'Percentage', 'Profit and Loss', 'Simple Interest', 'Compound Interest', 'Competition Exams'],
                'class_9': ['Number System', 'Polynomials', 'Introduction to Euclid Geometry', 'Linear Equations in Two Variables', 'Coordinate Geometry', 'Lines and Angles', 'Triangles', 'Congruence of Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron Formula', 'Surface Area and Volume', 'Statistics', 'Probability', 'Proofs in Mathematics'],
                'class_10': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Heights and Distances', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
                'class_11': ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Complex Numbers', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to 3D Geometry', 'Limits and Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability'],
                'class_12': ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability']
            },
            'rd_sharma': {
                'class_6': ['Knowing Our Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes', 'Integers', 'Fractions', 'Decimals', 'Data Handling', 'Mensuration', 'Algebra', 'Ratio and Proportion', 'Symmetry', 'Practical Geometry'],
                'class_7': ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'The Triangle and its Properties', 'Congruence of Triangles', 'Comparing Quantities', 'Rational Numbers', 'Practical Geometry', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Symmetry', 'Visualising Solid Shapes'],
                'class_8': ['Rational Numbers', 'Powers', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Playing with Numbers', 'Algebraic Expressions and Identities', 'Factorisation', 'Division of Algebraic Expressions', 'Linear Equations in One Variable', 'Direct and Inverse Variations', 'Understanding Shapes', 'Practical Geometry', 'Mensuration', 'Data Handling', 'Introduction to Graphs'],
                'class_9': ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Introduction to Euclid Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron Formula', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
                'class_10': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
                'class_11': ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability'],
                'class_12': ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability']
            },
            'lakhmir_singh': {
                'class_9': {
                    'physics': ['Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound'],
                    'chemistry': ['Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms and Molecules', 'Structure of the Atom']
                },
                'class_10': {
                    'physics': ['Light Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy'],
                    'chemistry': ['Acids Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce', 'Heredity and Evolution']
                }
            },
            'hc_verma': {
                'class_11': ['Introduction to Physics', 'Physics and Mathematics', 'Rest and Motion Kinematics', 'The Forces', 'Newton Laws of Motion', 'Friction', 'Circular Motion', 'Work and Energy', 'Centre of Mass Linear Momentum Collision', 'Rotational Mechanics', 'Gravitation', 'Simple Harmonic Motion', 'Fluid Mechanics', 'Some Mechanical Properties of Matter', 'Wave Motion and Waves on a String', 'Sound Waves', 'Heat and Temperature', 'Kinetic Theory of Gases', 'Heat and Work', 'Electric Field and Potential', 'Gauss Law', 'Capacitors', 'Electric Current in Conductors', 'Thermal and Chemical Effects of Electric Current', 'Magnetic Field', 'Magnetic Field due to Current', 'Permanent Magnets', 'Electromagnetic Induction', 'Alternating Current', 'Optical Instruments'],
                'class_12': ['Electric Field and Potential', 'Gauss Law', 'Capacitors', 'Electric Current in Conductors', 'Thermal and Chemical Effects of Electric Current', 'Magnetic Field', 'Magnetic Field due to Current', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Geometrical Optics', 'Optical Instruments', 'Dispersion and Spectra', 'Speed of Light', 'Photometry', 'Bohr Model and Physics of Atom', 'X-rays', 'Semiconductors and Semiconductor Devices', 'The Nucleus', 'The Special Theory of Relativity']
            }
        }
    
    def get_chapters(self, book, class_level):
        """Get chapters for a specific book and class"""
        return self.books.get(book, {}).get(f'class_{class_level}', [])
    
    def get_available_books(self):
        """Get all available reference books"""
        return list(self.books.keys())
    
    def search_book_content(self, search_term):
        """Search for content across all books"""
        results = []
        for book, classes in self.books.items():
            for class_key, subjects in classes.items():
                if isinstance(subjects, list):  # Direct chapter list
                    for chapter in subjects:
                        if search_term.lower() in chapter.lower():
                            class_num = class_key.split('_')[1]
                            results.append({
                                'book': book,
                                'class': class_num,
                                'chapter': chapter
                            })
                elif isinstance(subjects, dict):  # Subject-wise chapters
                    for subject, chapters in subjects.items():
                        for chapter in chapters:
                            if search_term.lower() in chapter.lower():
                                class_num = class_key.split('_')[1]
                                results.append({
                                    'book': book,
                                    'subject': subject,
                                    'class': class_num,
                                    'chapter': chapter
                                })
        return results
