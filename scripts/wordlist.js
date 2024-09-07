const wordList = [
    {
        word: "guitar",
        Hint1: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        Hint1: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        Hint1: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        Hint1: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        Hint1: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        Hint1: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        Hint1: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        Hint1: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        Hint1: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        Hint1: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        Hint1: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        Hint1: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        Hint1: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        Hint1: "An exciting or daring experience."
    },
    {
        word: "science",
        Hint1: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        Hint1: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        Hint1: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        Hint1: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        Hint1: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        Hint1: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        Hint1: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        Hint1: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        Hint1: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        Hint1: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        Hint1: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        Hint1: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        Hint1: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        Hint1: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        Hint1: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        Hint1: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        Hint1: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        Hint1: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        Hint1: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        Hint1: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        Hint1: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        Hint1: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        Hint1: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        Hint1: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        Hint1: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        Hint1: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        Hint1: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        Hint1: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        Hint1: "A gentle wind."
    },
    {
        word: "oasis",
        Hint1: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        Hint1: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        Hint1: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        Hint1: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        Hint1: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        Hint1: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        Hint1: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        Hint1: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        Hint1: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        Hint1: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        Hint1: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        Hint1: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        Hint1: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        Hint1: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        Hint1: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        Hint1: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        Hint1: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        Hint1: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        Hint1: "The light from the moon."
    },
    {
        word: "vibrant",
        Hint1: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        Hint1: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        Hint1: "Exceptionally clever, talented, or impressive."
    },
];