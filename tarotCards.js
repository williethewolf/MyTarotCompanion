const tarotCards = [
    // Major Arcana
    {
        name: 'The Fool',
        image: 'path/to/the-fool.jpg',
        reversed: false,
        meaning: ['Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'],
        reversedMeaning: ['Naivety', 'Foolishness', 'Recklessness', 'Risk-taking']
      },
      {
        name: 'The Magician',
        image: 'path/to/the-magician.jpg',
        reversed: false,
        meaning: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'],
        reversedMeaning: ['Manipulation', 'Poor Planning', 'Untapped Talents']
      },
      {
        name: 'The High Priestess',
        image: 'path/to/the-high-priestess.jpg',
        reversed: false,
        meaning: ['Intuition', 'Sacred Knowledge', 'Divine Feminine', 'Subconscious Mind'],
        reversedMeaning: ['Secrets', 'Disconnected from Intuition', 'Withdrawal', 'Silence']
      },
      {
        name: 'The Empress',
        image: 'path/to/the-empress.jpg',
        reversed: false,
        meaning: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
        reversedMeaning: ['Dependence', 'Smothering', 'Emptiness', 'Stagnation']
      },
      {
        name: 'The Emperor',
        image: 'path/to/the-emperor.jpg',
        reversed: false,
        meaning: ['Authority', 'Structure', 'Control', 'Fatherhood'],
        reversedMeaning: ['Tyranny', 'Rigidity', 'Coldness', 'Unyielding']
      },
      {
        name: 'The Hierophant',
        image: 'path/to/the-hierophant.jpg',
        reversed: false,
        meaning: ['Spiritual Wisdom', 'Religious Beliefs', 'Conformity', 'Tradition', 'Institutions'],
        reversedMeaning: ['Personal Beliefs', 'Freedom', 'Challenging the Status Quo']
      },
      {
        name: 'The Lovers',
        image: 'path/to/the-lovers.jpg',
        reversed: false,
        meaning: ['Love', 'Harmony', 'Relationships', 'Value Alignment', 'Choices'],
        reversedMeaning: ['Disharmony', 'Imbalance', 'Misalignment of Values']
      },
      {
        name: 'The Chariot',
        image: 'path/to/the-chariot.jpg',
        reversed: false,
        meaning: ['Control', 'Willpower', 'Victory', 'Assertion', 'Determination'],
        reversedMeaning: ['Lack of Control', 'Lack of Direction', 'Aggression']
      },
      {
        name: 'Strength',
        image: 'path/to/strength.jpg',
        reversed: false,
        meaning: ['Strength', 'Courage', 'Patience', 'Control', 'Compassion'],
        reversedMeaning: ['Weakness', 'Self-Doubt', 'Lack of Self-Discipline']
      },
      {
        name: 'The Hermit',
        image: 'path/to/the-hermit.jpg',
        reversed: false,
        meaning: ['Soul-searching', 'Introspection', 'Being Alone', 'Inner Guidance'],
        reversedMeaning: ['Isolation', 'Loneliness', 'Withdrawal']
      },
      {
        name: 'Wheel of Fortune',
        image: 'path/to/wheel-of-fortune.jpg',
        reversed: false,
        meaning: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny', 'A Turning Point'],
        reversedMeaning: ['Bad Luck', 'Resistance to Change', 'Breaking Cycles']
      },
      {
        name: 'Justice',
        image: 'path/to/justice.jpg',
        reversed: false,
        meaning: ['Justice', 'Fairness', 'Truth', 'Cause and Effect', 'Law'],
        reversedMeaning: ['Unfairness', 'Lack of Accountability', 'Dishonesty']
      },
      {
        name: 'The Hanged Man',
        image: 'path/to/the-hanged-man.jpg',
        reversed: false,
        meaning: ['Pause', 'Surrender', 'Letting Go', 'New Perspectives'],
        reversedMeaning: ['Delays', 'Resistance', 'Stalling', 'Indecision']
      },
      {
        name: 'Death',
        image: 'path/to/death.jpg',
        reversed: false,
        meaning: ['Endings', 'Change', 'Transformation', 'Transition'],
        reversedMeaning: ['Resistance to Change', 'Unable to Move On', 'Stagnation']
      },
      {
        name: 'Temperance',
        image: 'path/to/temperance.jpg',
        reversed: false,
        meaning: ['Balance', 'Moderation', 'Patience', 'Purpose'],
        reversedMeaning: ['Imbalance', 'Excess', 'Lack of Long-Term Vision']
      },
      {
        name: 'The Devil',
        image: 'path/to/the-devil.jpg',
        reversed: false,
        meaning: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction', 'Sexuality'],
        reversedMeaning: ['Releasing Limiting Beliefs', 'Exploring Dark Thoughts', 'Detachment']
      },
      {
        name: 'The Tower',
        image: 'path/to/the-tower.jpg',
        reversed: false,
        meaning: ['Sudden Change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
        reversedMeaning: ['Personal Transformation', 'Fear of Change', 'Avoiding Disaster']
      },
      {
        name: 'The Star',
        image: 'path/to/the-star.jpg',
        reversed: false,
        meaning: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
        reversedMeaning: ['Lack of Faith', 'Despair', 'Self-Trust', 'Disconnection']
      },
      {
        name: 'The Moon',
        image: 'path/to/the-moon.jpg',
        reversed: false,
        meaning: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
        reversedMeaning: ['Confusion', 'Fear', 'Misinterpretation', 'Overwhelm']
      },
      {
        name: 'The Sun',
        image: 'path/to/the-sun.jpg',
        reversed: false,
        meaning: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'],
        reversedMeaning: ['Negativity', 'Depression', 'Sadness', 'Lack of Success']
      },
      {
        name: 'Judgement',
        image: 'path/to/judgement.jpg',
        reversed: false,
        meaning: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'],
        reversedMeaning: ['Self-Doubt', 'Inner Critic', 'Ignoring the Call']
      },
      {
        name: 'The World',
        image: 'path/to/the-world.jpg',
        reversed: false,
        meaning: ['Completion', 'Integration', 'Accomplishment', 'Travel'],
        reversedMeaning: ['Incompletion', 'No Closure', 'Unfinished Business']
      },
    //Minor Arcana
    // Cups
    {
        name: 'Ace of Cups',
        image: 'path/to/ace-of-cups.jpg',
        reversed: false,
        meaning: ['New love', 'Overflowing emotions', 'Creativity', 'Intuition'],
        reversedMeaning: ['Emotional loss', 'Blocked creativity', 'Empty joy']
      },
      {
        name: 'Two of Cups',
        image: 'path/to/two-of-cups.jpg',
        reversed: false,
        meaning: ['Unified love', 'Partnership', 'Mutual attraction'],
        reversedMeaning: ['Break-up', 'Imbalance in relationships', 'Misunderstanding']
      },
      {
        name: 'Three of Cups',
        image: 'path/to/three-of-cups.jpg',
        reversed: false,
        meaning: ['Celebration', 'Friendship', 'Collaboration', 'Community'],
        reversedMeaning: ['Overindulgence', 'Gossip', 'Isolation']
      },
      {
        name: 'Four of Cups',
        image: 'path/to/four-of-cups.jpg',
        reversed: false,
        meaning: ['Apathy', 'Contemplation', 'Disconnectedness', 'Discontentment'],
        reversedMeaning: ['Sudden awareness', 'Choosing happiness', 'Acceptance']
      },
      {
        name: 'Five of Cups',
        image: 'path/to/five-of-cups.jpg',
        reversed: false,
        meaning: ['Loss', 'Bereavement', 'Regret', 'Disappointment'],
        reversedMeaning: ['Moving on', 'Acceptance', 'Forgiveness']
      },
      {
        name: 'Six of Cups',
        image: 'path/to/six-of-cups.jpg',
        reversed: false,
        meaning: ['Nostalgia', 'Childhood memories', 'Innocence', 'Joy'],
        reversedMeaning: ['Stuck in the past',  'Naivety', 'Unrealistic' ]
      },
      {
        name: 'Seven of Cups',
        image: 'path/to/seven-of-cups.jpg',
        reversed: false,
        meaning: ['Choices', 'Illusion', 'Fantasy', 'Temptation'],
        reversedMeaning: ['Misalignment of values', 'Disillusionment', 'Overwhelmed by choices']
      },
      {
        name: 'Eight of Cups',
        image: 'path/to/eight-of-cups.jpg',
        reversed: false,
        meaning: ['Disappointment', 'Abandonment', 'Withdrawal', 'Escapism'],
        reversedMeaning: ['Fear of moving on', 'Hopelessness', 'Aimless drifting']
      },
      {
        name: 'Nine of Cups',
        image: 'path/to/nine-of-cups.jpg',
        reversed: false,
        meaning: ['Satisfaction', 'Emotional stability', 'Luxury', 'Well-being'],
        reversedMeaning: ['Dissatisfaction', 'Materialism', 'Over-indulgence']
      },
      {
        name: 'Ten of Cups',
        image: 'path/to/ten-of-cups.jpg',
        reversed: false,
        meaning: ['Harmony', 'Marriage', 'Happiness', 'Alignment'],
        reversedMeaning: ['Misaligned values', 'Broken home', 'Unhappiness']
      },
      {
        name: 'Page of Cups',
        image: 'path/to/page-of-cups.jpg',
        reversed: false,
        meaning: ['Creative opportunities', 'Intuitive messages', 'Curiosity', 'Possibility'],
        reversedMeaning: ['Immaturity', 'Insecurity', 'Disappointment']
      },
      {
        name: 'Knight of Cups',
        image: 'path/to/knight-of-cups.jpg',
        reversed: false,
        meaning: ['Romance', 'Charm', 'Imagination', 'Beauty'],
        reversedMeaning: ['Unrealistic', 'Jealousy', 'Moodiness']
      },
      {
        name: 'Queen of Cups',
        image: 'path/to/queen-of-cups.jpg',
        reversed: false,
        meaning: ['Compassion', 'Calm', 'Comfort', 'Emotion'],
        reversedMeaning: [ 'Insecurity',  'Dependence',  'Smothering']
      },
      {
        name: 'King of Cups',
        image: 'path/to/king-of-cups.jpg',
        reversed: false,
        meaning: ['Emotional balance', 'Generosity', 'Diplomacy', 'Control'],
        reversedMeaning: ['Manipulation', 'Volatility', 'Disengagement']
      },
    // Pentacles
    {
        name: 'Ace of Pentacles',
        image: 'path/to/ace-of-pentacles.jpg',
        reversed: false,
        meaning: ['New financial opportunity', 'Prosperity', 'Trustworthy advice', 'Practical planning'],
        reversedMeaning: ['Missed opportunity', 'Lack of planning', 'Unrealized goals']
      },
      {
        name: 'Two of Pentacles',
        image: 'path/to/two-of-pentacles.jpg',
        reversed: false,
        meaning: ['Balance', 'Adaptability', 'Time management', 'Resourcefulness'],
        reversedMeaning: ['Imbalance', 'Overwhelmed', 'Disorganized']
      },
      {
        name: 'Three of Pentacles',
        image: 'path/to/three-of-pentacles.jpg',
        reversed: false,
        meaning: ['Teamwork', 'Collaboration', 'Learning', 'Implementation'],
        reversedMeaning: ['Lack of teamwork', 'Disorganized', 'Group conflict']
      },
      {
        name: 'Four of Pentacles',
        image: 'path/to/four-of-pentacles.jpg',
        reversed: false,
        meaning: ['Security', 'Control', 'Conservatism', 'Financial stability'],
        reversedMeaning: ['Greed', 'Materialism', 'Stinginess', 'Closed off']
      },
      {
        name: 'Five of Pentacles',
        image: 'path/to/five-of-pentacles.jpg',
        reversed: false,
        meaning: ['Financial loss', 'Poverty', 'Lack mindset', 'Isolation'],
        reversedMeaning: ['Recovery from financial loss', 'Spiritual poverty', 'Isolation']
      },
      {
        name: 'Six of Pentacles',
        image: 'path/to/six-of-pentacles.jpg',
        reversed: false,
        meaning: ['Generosity', 'Charity', 'Giving', 'Prosperity'],
        reversedMeaning: ['Selfishness', 'Debt', 'One-sided charity']
      },
      {
        name: 'Seven of Pentacles',
        image: 'path/to/seven-of-pentacles.jpg',
        reversed: false,
        meaning: ['Patience', 'Long-term view', 'Sustainable results', 'Perseverance'],
        reversedMeaning: ['Lack of long-term vision', 'Limited success', 'Impatience']
      },
      {
        name: 'Eight of Pentacles',
        image: 'path/to/eight-of-pentacles.jpg',
        reversed: false,
        meaning: ['Dedication', 'Skill development', 'Persistence', 'Attention to detail'],
        reversedMeaning: ['Lack of focus', 'Perfectionism', 'Work without reward']
      },
      {
        name: 'Nine of Pentacles',
        image: 'path/to/nine-of-pentacles.jpg',
        reversed: false,
        meaning: ['Luxury', 'Self-sufficiency', 'Cultivation', 'Reward'],
        reversedMeaning: ['Materialism', 'Living beyond means', 'Over-dependence']
      },
      {
        name: 'Ten of Pentacles',
        image: 'path/to/ten-of-pentacles.jpg',
        reversed: false,
        meaning: ['Wealth', 'Inheritance', 'Family', 'Established success'],
        reversedMeaning: ['Financial failure', 'Loneliness', 'Loss of stability']
      },
      {
        name: 'Page of Pentacles',
        image: 'path/to/page-of-pentacles.jpg',
        reversed: false,
        meaning: ['Ambition', 'Desire to learn', 'Practicality', 'New opportunity'],
        reversedMeaning: ['Lack of progress', 'Procrastination', 'Unrealized potential']
      },
      {
        name: 'Knight of Pentacles',
        image: 'path/to/knight-of-pentacles.jpg',
        reversed: false,
        meaning: ['Efficiency', 'Routine', 'Conservatism', 'Methodical work'],
        reversedMeaning: ['Boredom', 'Stagnation', 'Laziness', 'Feeling stuck']
      },
      {
        name: 'Queen of Pentacles',
        image: 'path/to/queen-of-pentacles.jpg',
        reversed: false,
        meaning: ['Nurturing', 'Practicality', 'Financial security', 'Homeliness'],
        reversedMeaning: ['Financial independence', 'Self-care', 'Work-home balance']
      },
      {
        name: 'King of Pentacles',
        image: 'path/to/king-of-pentacles.jpg',
        reversed: false,
        meaning: ['Abundance', 'Security', 'Control', 'Generosity'],
        reversedMeaning: ['Financially inept', 'Obsessed with wealth', 'Corruption']
      },
    // Swords
    {
        name: 'Ace of Swords',
        image: 'path/to/ace-of-swords.jpg',
        reversed: false,
        meaning: ['New ideas', 'Clarity', 'Breakthroughs', 'Intellectual ability'],
        reversedMeaning: ['Confusion', 'Miscommunication', 'Blocked thoughts']
      },
      {
        name: 'Two of Swords',
        image: 'path/to/two-of-swords.jpg',
        reversed: false,
        meaning: ['Indecision', 'Choices', 'Stalemate', 'Impasse'],
        reversedMeaning: ['Indecision', 'Confusion', 'Information overload']
      },
      {
        name: 'Three of Swords',
        image: 'path/to/three-of-swords.jpg',
        reversed: false,
        meaning: ['Heartbreak', 'Emotional pain', 'Sorrow', 'Grief'],
        reversedMeaning: ['Recovery', 'Forgiveness', 'Moving on']
      },
      {
        name: 'Four of Swords',
        image: 'path/to/four-of-swords.jpg',
        reversed: false,
        meaning: ['Rest', 'Relaxation', 'Contemplation', 'Recovery'],
        reversedMeaning: ['Restlessness', 'Burnout', 'Stress', 'Exhaustion']
      },
      {
        name: 'Five of Swords',
        image: 'path/to/five-of-swords.jpg',
        reversed: false,
        meaning: ['Conflict', 'Tension', 'Defeat', 'Win at all costs'],
        reversedMeaning: ['Reconciliation', 'Making amends', 'Past resentment']
      },
      {
        name: 'Six of Swords',
        image: 'path/to/six-of-swords.jpg',
        reversed: false,
        meaning: ['Transition', 'Change', 'Rite of passage', 'Releasing baggage'],
        reversedMeaning: ['Stagnation', 'Baggage', 'Resistance to change']
      },
      {
        name: 'Seven of Swords',
        image: 'path/to/seven-of-swords.jpg',
        reversed: false,
        meaning: ['Deception', 'Trickery', 'Tactics', 'Strategy'],
        reversedMeaning: ['Coming clean', 'Openness', 'End of deceit']
      },
      {
        name: 'Eight of Swords',
        image: 'path/to/eight-of-swords.jpg',
        reversed: false,
        meaning: ['Restriction', 'Confusion', 'Powerlessness', 'Victim mentality'],
        reversedMeaning: ['Self-acceptance', 'New perspective', 'Freedom']
      },
      {
        name: 'Nine of Swords',
        image: 'path/to/nine-of-swords.jpg',
        reversed: false,
        meaning: ['Anxiety', 'Worry', 'Fear', 'Depression'],
        reversedMeaning: ['Hope', 'Reaching out', 'Overcoming fear']
      },
      {
        name: 'Ten of Swords',
        image: 'path/to/ten-of-swords.jpg',
        reversed: false,
        meaning: ['Betrayal', 'Backstabbing', 'Defeat', 'Crisis'],
        reversedMeaning: ['Recovery', 'Regeneration', 'Resisting an inevitable end']
      },
      {
        name: 'Page of Swords',
        image: 'path/to/page-of-swords.jpg',
        reversed: false,
        meaning: ['Curiosity', 'Restlessness', 'Mental energy', 'Investigation'],
        reversedMeaning: ['Deception', 'Manipulation', 'All talk']
      },
      {
        name: 'Knight of Swords',
        image: 'path/to/knight-of-swords.jpg',
        reversed: false,
        meaning: ['Ambition', 'Action', 'Aggression', 'Directness'],
        reversedMeaning: ['Impulsiveness', 'Rudeness', 'Intolerance', 'Conflict']
      },
      {
        name: 'Queen of Swords',
        image: 'path/to/queen-of-swords.jpg',
        reversed: false,
        meaning: ['Independence', 'Unbiased judgement', 'Clear boundaries', 'Direct communication'],
        reversedMeaning: ['Coldness', 'Cruelty', 'Bitterness', 'Emotional guardedness']
      },
      {
        name: 'King of Swords',
        image: 'path/to/king-of-swords.jpg',
        reversed: false,
        meaning: ['Mental clarity', 'Intellectual power', 'Authority', 'Truth'],
        reversedMeaning: ['Manipulation', 'Tyranny', 'Abuse of power']
      },
    // Cups
    {
        name: 'Ace of Wands',
        image: 'path/to/ace-of-wands.jpg',
        reversed: false,
        meaning: 'Inspiration, new opportunities, growth, potential',
        reversedMeaning: 'An emerging idea, lack of direction, distractions, delays'
      },
      {
        name: 'Two of Wands',
        image: 'path/to/two-of-wands.jpg',
        reversed: false,
        meaning: 'Future planning, progress, decisions, discovery',
        reversedMeaning: 'Personal goals, inner alignment, fear of unknown, lack of planning'
      },
      {
        name: 'Three of Wands',
        image: 'path/to/three-of-wands.jpg',
        reversed: false,
        meaning: 'Expansion, foresight, overseas opportunities, long-term plans',
        reversedMeaning: 'Playing safe, lack of foresight, unexpected delays, lack of cooperation'
      },
      {
        name: 'Four of Wands',
        image: 'path/to/four-of-wands.jpg',
        reversed: false,
        meaning: 'Community, home, celebration, reunions',
        reversedMeaning: 'Lack of support, transience, home conflicts'
      },
      {
        name: 'Five of Wands',
        image: 'path/to/five-of-wands.jpg',
        reversed: false,
        meaning: 'Competition, conflict, tension, disagreements',
        reversedMeaning: 'Avoiding conflict, respect differences, diversity'
      },
      {
        name: 'Six of Wands',
        image: 'path/to/six-of-wands.jpg',
        reversed: false,
        meaning: 'Success, public recognition, progress, self-confidence',
        reversedMeaning: 'Private achievement, personal definition of success, fall from grace'
      },
      {
        name: 'Seven of Wands',
        image: 'path/to/seven-of-wands.jpg',
        reversed: false,
        meaning: 'Challenge, competition, protection, perseverance',
        reversedMeaning: 'Giving up, overwhelmed, overly protective'
      },
      {
        name: 'Eight of Wands',
        image: 'path/to/eight-of-wands.jpg',
        reversed: false,
        meaning: 'Movement, fast-paced change, action, alignment',
        reversedMeaning: 'Delays, frustration, resisting change, internal alignment'
      },
      {
        name: 'Nine of Wands',
        image: 'path/to/nine-of-wands.jpg',
        reversed: false,
        meaning: 'Resilience, courage, persistence, test of faith',
        reversedMeaning: 'Inner resources, struggle, overwhelm, defensive'
      },
      {
        name: 'Ten of Wands',
        image: 'path/to/ten-of-wands.jpg',
        reversed: false,
        meaning: 'Burden, extra responsibility, hard work, completion',
        reversedMeaning: 'Doing it all, carrying the burden, delegation, release'
      },
      {
        name: 'Page of Wands',
        image: 'path/to/page-of-wands.jpg',
        reversed: false,
        meaning: 'Inspiration, ideas, discovery, limitless potential, free spirit',
        reversedMeaning: 'Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path'
      },
      {
        name: 'Knight of Wands',
        image: 'path/to/knight-of-wands.jpg',
        reversed: false,
        meaning: 'Energy, passion, inspired action, adventure, impulsiveness',
        reversedMeaning: 'Internal conflict, transition, impulsiveness'
      },
      {
        name: 'Queen of Wands',
        image: 'path/to/queen-of-wands.jpg',
        reversed: false,
        meaning: 'Courage, confidence, independence, social butterfly, determination',
        reversedMeaning: 'Self-respect, self-confidence, introverted, re-establish sense of self'
      },
      {
        name: 'King of Wands',
        image: 'path/to/king-of-wands.jpg',
        reversed: false,
        meaning: 'Big picture, leader, overcoming challenges, setting an example',
        reversedMeaning: 'Impulsive, overbearing, unachievable expectations, persuasive'
      },
];

export default tarotCards;