class CBSEPaper:
    """
    CBSE Previous Year Questions Database
    Contains 10+ years of question papers for all subjects
    """
    
    def __init__(self):
        self.pyq_data = {
            'mathematics': {
                'class_10': {
                    '2023': [
                        'Find the HCF of 96 and 404 by the prime factorisation method.',
                        'Prove that √5 is irrational.',
                        'Find the zeroes of the quadratic polynomial x² + 7x + 10, and verify the relationship between the zeroes and the coefficients.',
                        'Solve the pair of linear equations: 3x + 2y = 11 and 2x + 3y = 4.',
                        'Find the nature of the roots of the quadratic equation 2x² – 6x + 3 = 0.',
                        'The 17th term of an A.P. exceeds its 10th term by 7. Find the common difference.',
                        'Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.',
                        'Find the area of the triangle formed by the lines y – x = 0, x + y = 0 and x – k = 0.',
                        'If sin θ + cos θ = √3, then find the value of tan θ + cot θ.',
                        'A chord of a circle of radius 12 cm subtends an angle of 120° at the centre. Find the area of the corresponding segment of the circle.'
                    ],
                    '2022': [
                        'Use Euclid\'s division algorithm to find the HCF of 135 and 225.',
                        'Show that any positive odd integer is of the form 6q + 1, or 6q + 3, or 6q + 5, where q is some integer.',
                        'Find a quadratic polynomial whose sum and product of zeroes are √2 and –3 respectively.',
                        'Solve for x: 1/(x-1) + 1/(x-2) = 3, x ≠ 1, 2.',
                        'Find the values of k for which the quadratic equation x² – k(2x + k – 1) + 2 = 0 has equal roots.',
                        'How many terms of the A.P. 9, 17, 25, ... must be taken to give a sum of 636?',
                        'Prove that the lengths of tangents drawn from an external point to a circle are equal.',
                        'Find the coordinates of the point which divides the line segment joining the points (4, –3) and (8, 5) in the ratio 3:1 internally.',
                        'If sec θ + tan θ = 7, then find the value of sec θ – tan θ.',
                        'From a solid cylinder whose height is 2.4 cm and diameter 1.4 cm, a conical cavity of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the nearest cm².'
                    ],
                    '2021': [
                        'Find the LCM and HCF of 6 and 20 by the prime factorisation method.',
                        'Show that 5 – √3 is irrational.',
                        'If α and β are the zeroes of the quadratic polynomial x² – 6x + 9, find the value of α + β + αβ.',
                        'Solve the following pair of linear equations: 2x + 3y = 11 and 2x – 4y = –24.',
                        'Find the discriminant of the quadratic equation 2x² – 4x + 3 = 0, and hence find the nature of its roots.',
                        'Which term of the A.P. 3, 8, 13, 18, ... is 78?',
                        'Draw a circle of radius 6 cm. From a point 10 cm away from its centre, construct the pair of tangents to the circle and measure their lengths.',
                        'Find the area of a triangle whose vertices are (1, –1), (–4, 6) and (–3, –5).',
                        'If 3 cot A = 4, check whether (1 – tan²A)/(1 + tan²A) = cos²A – sin²A or not.',
                        'A solid sphere of radius 2r is cut into two hemispheres. Find the total surface area of the two hemispheres.'
                    ],
                    '2020': [
                        'Find the HCF of 867 and 255 using Euclid\'s division algorithm.',
                        'Prove that √2 + √3 is irrational.',
                        'Find the zeroes of the quadratic polynomial 6x² – 3 – 7x and verify the relationship between the zeroes and the coefficients.',
                        'Solve: x/2 + y/3 = 4 and x/3 + y/2 = 4.',
                        'For what values of k will the equations kx + 3y = k – 3 and 12x + ky = k have no solution?',
                        'Find the sum of first 22 terms of an A.P. in which d = 7 and 22nd term is 149.',
                        'Prove: The tangent at any point of a circle is perpendicular to the radius through the point of contact.',
                        'If the points A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a parallelogram, taken in order, find the value of p.',
                        'If sin A = 3/4, calculate cos A and tan A.',
                        'A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent.'
                    ]
                },
                'class_12': {
                    '2023': [
                        'Find the principal value of sin⁻¹(-1/2).',
                        'If A = [2 3; 4 5], find A² – 7A + 2I.',
                        'Find dy/dx if y = sin(x²).',
                        'Evaluate ∫(2x + 3) dx from 0 to 2.',
                        'Find the area bounded by the curve y = x², the x-axis and the lines x = 1, x = 2.',
                        'Solve the differential equation dy/dx = y/x.',
                        'Find the angle between the vectors a = 2î + ĵ + 2k̂ and b = 6î + 2ĵ + 3k̂.',
                        'Find the equation of the plane passing through the points (1, 1, 1), (1, –1, 1) and (–7, –3, –5).',
                        'A bag contains 4 red and 4 black balls. Find the probability of drawing 2 red balls when 2 balls are drawn at random.',
                        'Maximise Z = 3x + 2y subject to x + 2y ≤ 10, 3x + y ≤ 15, x ≥ 0, y ≥ 0.'
                    ],
                    '2022': [
                        'Find the principal value of tan⁻¹(√3).',
                        'If A = [1 2; 3 4], find A⁻¹.',
                        'If y = log(sin x), find dy/dx.',
                        'Evaluate ∫e^x(1 + x) dx.',
                        'Find the area of the region bounded by y² = 9x, x = 2, x = 4 and the x-axis.',
                        'Solve: (1 + x²) dy + 2xy dx = 0.',
                        'Find the cartesian equation of the line which passes through the point (–2, 4, –5) and parallel to the line (x+3)/3 = (y-4)/5 = (z+8)/6.',
                        'Find the shortest distance between the lines r = 6î + 2ĵ + 2k̂ + λ(î – 2ĵ + 2k̂) and r = –4î – k̂ + μ(3î – 2ĵ – 2k̂).',
                        'Find the probability distribution of number of successes in two tosses of a die, where a success is defined as: number greater than 4.',
                        'Minimise Z = x + 2y subject to 2x + y ≥ 3, x + 2y ≥ 6, x ≥ 0, y ≥ 0.'
                    ]
                }
            },
            'physics': {
                'class_11': {
                    '2023': [
                        'Define the terms: (i) accuracy (ii) precision of a measurement.',
                        'State the principle of homogeneity of dimensions. Test the dimensional consistency of the equation v² = u² + 2as.',
                        'A particle moves along x-axis such that x = 4t² – 2t + 1. Find (i) the velocity at t = 2s (ii) acceleration at t = 2s.',
                        'State Newton\'s second law of motion. Hence derive F = ma.',
                        'Define work. Show that work done by a conservative force is independent of the path taken.',
                        'State the law of conservation of angular momentum. Give one example.',
                        'State Newton\'s law of universal gravitation. Define gravitational constant.',
                        'Define stress and strain. What is Hooke\'s law?',
                        'What is meant by streamline flow? State equation of continuity for fluid flow.',
                        'Define coefficient of linear expansion. How does it vary with temperature?'
                    ]
                },
                'class_12': {
                    '2023': [
                        'State Coulomb\'s law in electrostatics. Write its vector form.',
                        'Define electric potential. Derive the relation between electric field and electric potential.',
                        'State Ohm\'s law. Define resistance and resistivity.',
                        'State Biot-Savart law. Use it to find magnetic field at the centre of a current carrying circular loop.',
                        'Define magnetic dipole moment. Write the expression for torque acting on a magnetic dipole in a uniform magnetic field.',
                        'State Faraday\'s law of electromagnetic induction. What is Lenz\'s law?',
                        'What is the principle of a transformer? Distinguish between step-up and step-down transformer.',
                        'What are electromagnetic waves? Write four properties of electromagnetic waves.',
                        'State the laws of refraction. What is total internal reflection?',
                        'What is photoelectric effect? State Einstein\'s photoelectric equation.'
                    ]
                }
            },
            'chemistry': {
                'class_11': {
                    '2023': [
                        'Define atomic mass unit. Calculate the number of atoms in 0.5 mole of carbon atoms.',
                        'State Aufbau principle, Pauli exclusion principle and Hund\'s rule.',
                        'Define ionization enthalpy. How does it vary across a period and down a group?',
                        'What is VSEPR theory? Predict the shape of NH₃ molecule.',
                        'Define hydrogen bond. Mention two examples of compounds showing hydrogen bonding.',
                        'State the first law of thermodynamics. What is enthalpy?',
                        'Define equilibrium constant. Write the expression for Kc for the reaction: N₂ + 3H₂ ⇌ 2NH₃.',
                        'Define oxidation and reduction in terms of electron transfer.',
                        'What are isotopes? Give two examples.',
                        'Name the d-block elements of first transition series.'
                    ]
                },
                'class_12': {
                    '2023': [
                        'Define unit cell. What are the characteristics of a crystal?',
                        'What are ideal and non-ideal solutions? State Raoult\'s law.',
                        'Define electrolysis. What happens during electrolysis of aqueous NaCl?',
                        'Define rate of reaction. What are the factors affecting rate of reaction?',
                        'What is adsorption? Distinguish between physical and chemical adsorption.',
                        'What is roasting? How is copper extracted from its ore?',
                        'Complete the following reactions: (i) XeF₄ + H₂O → (ii) XeF₆ + 2H₂O →',
                        'What are transition elements? Write the electronic configuration of Cr (Z=24).',
                        'What is a complex compound? Give one example.',
                        'Convert: (i) Benzene to nitrobenzene (ii) Propene to propanol'
                    ]
                }
            },
            'biology': {
                'class_11': {
                    '2023': [
                        'What is taxonomy? Name the various categories of taxonomic hierarchy.',
                        'Distinguish between prokaryotic and eukaryotic cells.',
                        'What are the characteristic features of kingdom Plantae?',
                        'Describe the structure and function of root hair.',
                        'What is photosynthesis? Write the overall equation for photosynthesis.',
                        'Define osmosis. What is osmotic pressure?',
                        'What is the role of liver in digestion?',
                        'Describe the structure of nephron.',
                        'What is the difference between inspiration and expiration?',
                        'Define reflex action. Give one example.'
                    ]
                },
                'class_12': {
                    '2023': [
                        'What is sexual reproduction? What are its advantages?',
                        'Describe the structure of a typical angiosperm ovule.',
                        'What is menstrual cycle? Describe its phases.',
                        'What are sexually transmitted diseases? Name four such diseases.',
                        'State Mendel\'s law of independent assortment.',
                        'What is genetic code? What are its characteristics?',
                        'Define evolution. What is natural selection?',
                        'What is immunity
