const horoscopeSignData = [
    {
      tradition: "Western",
      image: "path/to/western_tradition_image.svg",
      signs: [
        {
          name: "Aries",
          startDate: "03-21",
          endDate: "04-19",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Energetic and assertive, Aries is the first sign of the zodiac, symbolizing new beginnings.",
          element: "Fire",
          compatibleWith: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
          incompatibleWith: ["Cancer", "Capricorn"],
          luckyNumber: [1, 9],
          ruler: ["Mars", "Mars"],
          rulerSymbol: ["♂","♂"],
          rulerMeaning: ["Represents energy, action, and desire.", "Represents energy, action, and desire."]
        },
        {
          name: "Taurus",
          startDate: "04-20",
          endDate: "05-20",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Grounded and practical, Taurus values consistency and enjoys life’s sensual pleasures.",
          element: "Earth",
          compatibleWith: ["Virgo", "Capricorn", "Cancer", "Pisces"],
          incompatibleWith: ["Leo", "Aquarius"],
          luckyNumber: [2, 6],
          ruler: ["Venus", "Venus"],
          rulerSymbol: ["♀","♀"],
          rulerMeaning: ["Symbolizes love, beauty, and values.", "Symbolizes love, beauty, and values."]
        },
        {
          name: "Gemini",
          startDate: "05-21",
          endDate: "06-20",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Curious and adaptable, Gemini is the communicator of the zodiac, always seeking new information.",
          element: "Air",
          compatibleWith: ["Libra", "Aquarius", "Aries", "Leo"],
          incompatibleWith: ["Virgo", "Pisces"],
          luckyNumber: [3, 5],
          ruler: ["Mercury", "Mercury"],
          rulerSymbol: ["☿","☿"],
          rulerMeaning: ["Associated with communication, intellect, and agility.", "Associated with communication, intellect, and agility."]
        },
        {
          name: "Cancer",
          startDate: "06-21",
          endDate: "07-22",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Emotional and nurturing, Cancer is deeply connected to their home and family.",
          element: "Water",
          compatibleWith: ["Scorpio", "Pisces", "Taurus", "Virgo"],
          incompatibleWith: ["Aries", "Libra"],
          luckyNumber: [2, 7],
          ruler: ["Moon", "Moon"],
          rulerSymbol: ["☾","☾"],
          rulerMeaning: ["Represents emotions, instincts, and nurturing.", "Represents emotions, instincts, and nurturing."]
        },
        {
          name: "Leo",
          startDate: "07-23",
          endDate: "08-22",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Confident and generous, Leo loves to be admired and takes pride in their achievements.",
          element: "Fire",
          compatibleWith: ["Aries", "Sagittarius", "Gemini", "Libra"],
          incompatibleWith: ["Taurus", "Scorpio"],
          luckyNumber: [1, 4],
          ruler: ["Sun", "Sun"],
          rulerSymbol: ["☉","☉"],
          rulerMeaning: ["Symbolizes self, vitality, and individuality.", "Symbolizes self, vitality, and individuality."]
        },
        {
          name: "Virgo",
          startDate: "08-23",
          endDate: "09-22",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Analytical and diligent, Virgo has a strong sense of duty and likes to be of service.",
          element: "Earth",
          compatibleWith: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
          incompatibleWith: ["Gemini", "Sagittarius"],
          luckyNumber: [5, 3],
          ruler: ["Mercury", "Mercury"],
          rulerSymbol: ["☿","☿"],
          rulerMeaning: ["Emphasizes analysis and precision.", "Emphasizes analysis and precision."]
        },
        {
          name: "Libra",
          startDate: "09-23",
          endDate: "10-22",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Charming and balanced, Libra seeks harmony and fairness in all things.",
          element: "Air",
          compatibleWith: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
          incompatibleWith: ["Cancer", "Capricorn"],
          luckyNumber: [6, 9],
          ruler: ["Venus", "Venus"],
          rulerSymbol: ["♀","♀"],
          rulerMeaning: ["Its rule highlights harmony and relationships.", "Its rule highlights harmony and relationships."]
        },
        {
          name: "Scorpio",
          startDate: "10-23",
          endDate: "11-21",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Intense and resourceful, Scorpio is deeply emotional and seeks to understand life’s mysteries.",
          element: "Water",
          compatibleWith: ["Cancer", "Pisces", "Virgo", "Capricorn"],
          incompatibleWith: ["Leo", "Aquarius"],
          luckyNumber: [4, 2],
          ruler: ["Pluto", "Mars"],
          rulerSymbol: ["♇","♂"],
          rulerMeaning: ["Represents transformation and the subconscious.", "Brings energy and assertiveness."]
        },
        {
          name: "Sagittarius",
          startDate: "11-22",
          endDate: "12-21",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Adventurous and philosophical, Sagittarius loves to explore and learn new things.",
          element: "Fire",
          compatibleWith: ["Aries", "Leo", "Libra", "Aquarius"],
          incompatibleWith: ["Virgo", "Pisces"],
          luckyNumber: [3, 7],
          ruler: ["Jupiter", "Jupiter"],
          rulerSymbol: ["♃","♃"],
          rulerMeaning: ["Symbolizes growth, expansion, and exploration.", "Symbolizes growth, expansion, and exploration."]
        },
        {
          name: "Capricorn",
          startDate: "12-22",
          endDate: "01-19",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Disciplined and ambitious, Capricorn is focused on achieving their goals.",
          element: "Earth",
          compatibleWith: ["Taurus", "Virgo", "Scorpio", "Pisces"],
          incompatibleWith: ["Aries", "Libra"],
          luckyNumber: [1, 8],
          ruler: ["Saturn", "Saturn"],
          rulerSymbol: ["♄","♄"],
          rulerMeaning: ["Represents structure, responsibility, and discipline.", "Represents structure, responsibility, and discipline."]
        },
        {
          name: "Aquarius",
          startDate: "01-20",
          endDate: "02-18",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Innovative and idealistic, Aquarius values freedom and seeks to make the world a better place.",
          element: "Air",
          compatibleWith: ["Gemini", "Libra", "Aries", "Sagittarius"],
          incompatibleWith: ["Taurus", "Scorpio"],
          luckyNumber: [4, 8],
          ruler: ["Uranus", "Saturn"],
          rulerSymbol: ["♅","♄"],
          rulerMeaning: ["Symbolizes innovation and change.", "Brings structure."]
        },
        {
          name: "Pisces",
          startDate: "02-19",
          endDate: "03-20",
          imagePath: "../../assets/signs/symbol/aries.svg",
          description: "Intuitive and empathetic, Pisces is deeply connected to their inner world and the emotions of others.",
          element: "Water",
          compatibleWith: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
          incompatibleWith: ["Gemini", "Sagittarius"],
          luckyNumber: [3, 9],
          ruler: ["Neptune", "Jupiter"],
          rulerSymbol: ["♆","♃"],
          rulerMeaning: ["Is associated with imagination and spirituality.", "Adds a sense of expansion and belief."]
        }
      ],
    },
    {
      tradition: "Vedic",
      image: "path/to/vedic_tradition_image.svg",
      signs: [
        {
          name: "Mesha (Aries)",
          startDate: "2023-04-14",
          endDate: "2023-05-14",
          imagePath: "path/to/mesha_image.svg",
          description: "Energetic and pioneering, Mesha is known for its assertive and courageous nature."
        },
        {
          name: "Vrishabha (Taurus)",
          startDate: "2023-05-15",
          endDate: "2023-06-14",
          imagePath: "path/to/vrishabha_image.svg",
          description: "Steady and reliable, Vrishabha seeks stability and enjoys life's material comforts."
        },
        {
          name: "Mithuna (Gemini)",
          startDate: "2023-06-15",
          endDate: "2023-07-14",
          imagePath: "path/to/mithuna_image.svg",
          description: "Versatile and adaptable, Mithuna is curious and always eager to learn new things."
        },
        {
          name: "Karka (Cancer)",
          startDate: "2023-07-15",
          endDate: "2023-08-14",
          imagePath: "path/to/karka_image.svg",
          description: "Sensitive and caring, Karka is deeply connected to family and home life."
        },
        {
          name: "Simha (Leo)",
          startDate: "2023-08-15",
          endDate: "2023-09-14",
          imagePath: "path/to/simha_image.svg",
          description: "Dynamic and confident, Simha loves to be in the limelight and is a natural leader."
        },
        {
          name: "Kanya (Virgo)",
          startDate: "2023-09-15",
          endDate: "2023-10-14",
          imagePath: "path/to/kanya_image.svg",
          description: "Practical and detail-oriented, Kanya is analytical and strives for perfection in all tasks."
        },
        {
          name: "Tula (Libra)",
          startDate: "2023-10-15",
          endDate: "2023-11-14",
          imagePath: "path/to/tula_image.svg",
          description: "Harmonious and balanced, Tula seeks equilibrium and excels in creating peaceful environments."
        },
        {
          name: "Vrishchika (Scorpio)",
          startDate: "2023-11-15",
          endDate: "2023-12-14",
          imagePath: "path/to/vrishchika_image.svg",
          description: "Intense and mysterious, Vrishchika is passionate and seeks depth in all aspects of life."
        },
        {
          name: "Dhanu (Sagittarius)",
          startDate: "2023-12-15",
          endDate: "2024-01-13",
          imagePath: "path/to/dhanu_image.svg",
          description: "Optimistic and adventurous, Dhanu loves to explore and is always seeking knowledge and truth."
        },
        {
          name: "Makara (Capricorn)",
          startDate: "2024-01-14",
          endDate: "2024-02-11",
          imagePath: "path/to/makara_image.svg",
          description: "Disciplined and responsible, Makara is ambitious and takes a pragmatic approach to life."
        },
        {
          name: "Kumbha (Aquarius)",
          startDate: "2024-02-12",
          endDate: "2024-03-13",
          imagePath: "path/to/kumbha_image.svg",
          description: "Innovative and humanitarian, Kumbha is visionary and seeks to make a meaningful impact on society."
        },
        {
          name: "Meena (Pisces)",
          startDate: "2024-03-14",
          endDate: "2024-04-13",
          imagePath: "path/to/meena_image.svg",
          description: "Empathetic and artistic, Meena is deeply intuitive and connected with the emotional realm."
        }
      ],
    },
    {
      tradition: "Chinese",
      image: "path/to/chinese_tradition_image.svg",
      signs: [
        {
            name: "Rat",
            year: 2020,
            imagePath: "path/to/rat_image.svg",
            description: "Intelligent and resourceful, Rats are adept at finding opportunities."
          },
          {
            name: "Ox",
            year: 2021,
            imagePath: "path/to/ox_image.svg",
            description: "Strong and reliable, Oxen are known for their diligence and determination."
          },
          {
            name: "Tiger",
            year: 2022,
            imagePath: "path/to/tiger_image.svg",
            description: "Brave and competitive, Tigers are natural leaders with a sense of adventure."
          },
          {
            name: "Rabbit",
            year: 2023,
            imagePath: "path/to/rabbit_image.svg",
            description: "Gentle and compassionate, Rabbits enjoy peaceful and quiet environments."
          },
          {
            name: "Dragon",
            year: 2024,
            imagePath: "path/to/dragon_image.svg",
            description: "Confident and charismatic, Dragons are powerful beings full of vitality."
          },
          {
            name: "Snake",
            year: 2025,
            imagePath: "path/to/snake_image.svg",
            description: "Mysterious and wise, Snakes are deep thinkers with an intuitive understanding of life."
          },
          {
            name: "Horse",
            year: 2026,
            imagePath: "path/to/horse_image.svg",
            description: "Energetic and enthusiastic, Horses love to be in motion and enjoy freedom."
          },
          {
            name: "Goat",
            year: 2027,
            imagePath: "path/to/goat_image.svg",
            description: "Artistic and gentle, Goats are peaceful creatures who appreciate creativity."
          },
          {
            name: "Monkey",
            year: 2028,
            imagePath: "path/to/monkey_image.svg",
            description: "Witty and clever, Monkeys are problem-solvers with a playful side."
          },
          {
            name: "Rooster",
            year: 2029,
            imagePath: "path/to/rooster_image.svg",
            description: "Observant and hardworking, Roosters are highly organized and precise."
          },
          {
            name: "Dog",
            year: 2030,
            imagePath: "path/to/dog_image.svg",
            description: "Loyal and honest, Dogs are trustworthy companions with a strong sense of duty."
          },
          {
            name: "Pig",
            year: 2031,
            imagePath: "path/to/pig_image.svg",
            description: "Kind-hearted and generous, Pigs enjoy life's pleasures and are often indulgent."
          }
      ],
    },
  ];
  
  export default horoscopeSignData;