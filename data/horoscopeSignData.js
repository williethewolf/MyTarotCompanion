const horoscopeSignData = [
    {
      tradition: "Western",
      image: "path/to/western_tradition_image.svg",
      signs: [
        {
            name: "Aries",
            startDate: "2023-03-21",
            endDate: "2023-04-19",
            imagePath: "path/to/aries_image.svg",
            description: "Energetic and assertive, Aries is the first sign of the zodiac, symbolizing new beginnings."
          },
          {
            name: "Taurus",
            startDate: "2023-04-20",
            endDate: "2023-05-20",
            imagePath: "path/to/taurus_image.svg",
            description: "Grounded and practical, Taurus values consistency and enjoys life’s sensual pleasures."
          },
          {
            name: "Gemini",
            startDate: "2023-05-21",
            endDate: "2023-06-20",
            imagePath: "path/to/gemini_image.svg",
            description: "Curious and adaptable, Gemini is the communicator of the zodiac, always seeking new information."
          },
          {
            name: "Cancer",
            startDate: "2023-06-21",
            endDate: "2023-07-22",
            imagePath: "path/to/cancer_image.svg",
            description: "Emotional and nurturing, Cancer is deeply connected to their home and family."
          },
          {
            name: "Leo",
            startDate: "2023-07-23",
            endDate: "2023-08-22",
            imagePath: "path/to/leo_image.svg",
            description: "Confident and generous, Leo loves to be admired and takes pride in their achievements."
          },
          {
            name: "Virgo",
            startDate: "2023-08-23",
            endDate: "2023-09-22",
            imagePath: "path/to/virgo_image.svg",
            description: "Analytical and diligent, Virgo has a strong sense of duty and likes to be of service."
          },
          {
            name: "Libra",
            startDate: "2023-09-23",
            endDate: "2023-10-22",
            imagePath: "path/to/libra_image.svg",
            description: "Charming and balanced, Libra seeks harmony and fairness in all things."
          },
          {
            name: "Scorpio",
            startDate: "2023-10-23",
            endDate: "2023-11-21",
            imagePath: "path/to/scorpio_image.svg",
            description: "Intense and resourceful, Scorpio is deeply emotional and seeks to understand life’s mysteries."
          },
          {
            name: "Sagittarius",
            startDate: "2023-11-22",
            endDate: "2023-12-21",
            imagePath: "path/to/sagittarius_image.svg",
            description: "Adventurous and philosophical, Sagittarius loves to explore and learn new things."
          },
          {
            name: "Capricorn",
            startDate: "2023-12-22",
            endDate: "2024-01-19",
            imagePath: "path/to/capricorn_image.svg",
            description: "Disciplined and ambitious, Capricorn is focused on achieving their goals."
          },
          {
            name: "Aquarius",
            startDate: "2024-01-20",
            endDate: "2024-02-18",
            imagePath: "path/to/aquarius_image.svg",
            description: "Innovative and idealistic, Aquarius values freedom and seeks to make the world a better place."
          },
          {
            name: "Pisces",
            startDate: "2024-02-19",
            endDate: "2024-03-20",
            imagePath: "path/to/pisces_image.svg",
            description: "Intuitive and empathetic, Pisces is deeply connected to their inner world and the emotions of others."
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