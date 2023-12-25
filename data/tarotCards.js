const tarotCards = [
    // Major Arcana
    {
        name: 'The Fool',
        image: 'path/to/the-fool.jpg',
        reversed: false,
        meaning: ['Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'],
        reversedMeaning: ['Naivety', 'Foolishness', 'Recklessness', 'Risk-taking'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Magician',
        image: 'path/to/the-magician.jpg',
        reversed: false,
        meaning: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'],
        reversedMeaning: ['Manipulation', 'Poor Planning', 'Untapped Talents'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The High Priestess',
        image: 'path/to/the-high-priestess.jpg',
        reversed: false,
        meaning: ['Intuition', 'Sacred Knowledge', 'Divine Feminine', 'Subconscious Mind'],
        reversedMeaning: ['Secrets', 'Disconnected from Intuition', 'Withdrawal', 'Silence'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Empress',
        image: 'path/to/the-empress.jpg',
        reversed: false,
        meaning: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
        reversedMeaning: ['Dependence', 'Smothering', 'Emptiness', 'Stagnation'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Emperor',
        image: 'path/to/the-emperor.jpg',
        reversed: false,
        meaning: ['Authority', 'Structure', 'Control', 'Fatherhood'],
        reversedMeaning: ['Tyranny', 'Rigidity', 'Coldness', 'Unyielding'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Hierophant',
        image: 'path/to/the-hierophant.jpg',
        reversed: false,
        meaning: ['Spiritual Wisdom', 'Religious Beliefs', 'Conformity', 'Tradition', 'Institutions'],
        reversedMeaning: ['Personal Beliefs', 'Freedom', 'Challenging the Status Quo'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Lovers',
        image: 'path/to/the-lovers.jpg',
        reversed: false,
        meaning: ['Love', 'Harmony', 'Relationships', 'Value Alignment', 'Choices'],
        reversedMeaning: ['Disharmony', 'Imbalance', 'Misalignment of Values'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Chariot',
        image: 'path/to/the-chariot.jpg',
        reversed: false,
        meaning: ['Control', 'Willpower', 'Victory', 'Assertion', 'Determination'],
        reversedMeaning: ['Lack of Control', 'Lack of Direction', 'Aggression'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Strength',
        image: 'path/to/strength.jpg',
        reversed: false,
        meaning: ['Strength', 'Courage', 'Patience', 'Control', 'Compassion'],
        reversedMeaning: ['Weakness', 'Self-Doubt', 'Lack of Self-Discipline'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Hermit',
        image: 'path/to/the-hermit.jpg',
        reversed: false,
        meaning: ['Soul-searching', 'Introspection', 'Being Alone', 'Inner Guidance'],
        reversedMeaning: ['Isolation', 'Loneliness', 'Withdrawal'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Wheel of Fortune',
        image: 'path/to/wheel-of-fortune.jpg',
        reversed: false,
        meaning: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny', 'A Turning Point'],
        reversedMeaning: ['Bad Luck', 'Resistance to Change', 'Breaking Cycles'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Justice',
        image: 'path/to/justice.jpg',
        reversed: false,
        meaning: ['Justice', 'Fairness', 'Truth', 'Cause and Effect', 'Law'],
        reversedMeaning: ['Unfairness', 'Lack of Accountability', 'Dishonesty'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Hanged Man',
        image: 'path/to/the-hanged-man.jpg',
        reversed: false,
        meaning: ['Pause', 'Surrender', 'Letting Go', 'New Perspectives'],
        reversedMeaning: ['Delays', 'Resistance', 'Stalling', 'Indecision'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Death',
        image: 'path/to/death.jpg',
        reversed: false,
        meaning: ['Endings', 'Change', 'Transformation', 'Transition'],
        reversedMeaning: ['Resistance to Change', 'Unable to Move On', 'Stagnation'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Temperance',
        image: 'path/to/temperance.jpg',
        reversed: false,
        meaning: ['Balance', 'Moderation', 'Patience', 'Purpose'],
        reversedMeaning: ['Imbalance', 'Excess', 'Lack of Long-Term Vision'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Devil',
        image: 'path/to/the-devil.jpg',
        reversed: false,
        meaning: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction', 'Sexuality'],
        reversedMeaning: ['Releasing Limiting Beliefs', 'Exploring Dark Thoughts', 'Detachment'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Tower',
        image: 'path/to/the-tower.jpg',
        reversed: false,
        meaning: ['Sudden Change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
        reversedMeaning: ['Personal Transformation', 'Fear of Change', 'Avoiding Disaster'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Star',
        image: 'path/to/the-star.jpg',
        reversed: false,
        meaning: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
        reversedMeaning: ['Lack of Faith', 'Despair', 'Self-Trust', 'Disconnection'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Moon',
        image: 'path/to/the-moon.jpg',
        reversed: false,
        meaning: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
        reversedMeaning: ['Confusion', 'Fear', 'Misinterpretation', 'Overwhelm'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The Sun',
        image: 'path/to/the-sun.jpg',
        reversed: false,
        meaning: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'],
        reversedMeaning: ['Negativity', 'Depression', 'Sadness', 'Lack of Success'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'Judgement',
        image: 'path/to/judgement.jpg',
        reversed: false,
        meaning: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'],
        reversedMeaning: ['Self-Doubt', 'Inner Critic', 'Ignoring the Call'],
        type: 'major arcana',
        number: 0
      },
      {
        name: 'The World',
        image: 'path/to/the-world.jpg',
        reversed: false,
        meaning: ['Completion', 'Integration', 'Accomplishment', 'Travel'],
        reversedMeaning: ['Incompletion', 'No Closure', 'Unfinished Business'],
        type: 'major arcana',
        number: 0
      },
    //Minor Arcana
    // Cups
    {
        name: 'Ace of Cups',
        image: 'path/to/ace-of-cups.jpg',
        reversed: false,
        meaning: ['New love', 'Overflowing emotions', 'Creativity', 'Intuition'],
        reversedMeaning: ['Emotional loss', 'Blocked creativity', 'Empty joy'],
        type: 'cups',
        number: 1
      },
      {
        name: 'Two of Cups',
        image: 'path/to/two-of-cups.jpg',
        reversed: false,
        meaning: ['Unified love', 'Partnership', 'Mutual attraction'],
        reversedMeaning: ['Break-up', 'Imbalance in relationships', 'Misunderstanding'],
        type: 'cups',
        number: 2
      },
      {
        name: 'Three of Cups',
        image: 'path/to/three-of-cups.jpg',
        reversed: false,
        meaning: ['Celebration', 'Friendship', 'Collaboration', 'Community'],
        reversedMeaning: ['Overindulgence', 'Gossip', 'Isolation'],
        type: 'cups',
        number: 3
      },
      {
        name: 'Four of Cups',
        image: 'path/to/four-of-cups.jpg',
        reversed: false,
        meaning: ['Apathy', 'Contemplation', 'Disconnectedness', 'Discontentment'],
        reversedMeaning: ['Sudden awareness', 'Choosing happiness', 'Acceptance'],
        type: 'cups',
        number: 4
      },
      {
        name: 'Five of Cups',
        image: 'path/to/five-of-cups.jpg',
        reversed: false,
        meaning: ['Loss', 'Bereavement', 'Regret', 'Disappointment'],
        reversedMeaning: ['Moving on', 'Acceptance', 'Forgiveness'],
        type: 'cups',
        number: 5
      },
      {
        name: 'Six of Cups',
        image: 'path/to/six-of-cups.jpg',
        reversed: false,
        meaning: ['Nostalgia', 'Childhood memories', 'Innocence', 'Joy'],
        reversedMeaning: ['Stuck in the past',  'Naivety', 'Unrealistic' ],
        type: 'cups',
        number: 6
      },
      {
        name: 'Seven of Cups',
        image: 'path/to/seven-of-cups.jpg',
        reversed: false,
        meaning: ['Choices', 'Illusion', 'Fantasy', 'Temptation'],
        reversedMeaning: ['Misalignment of values', 'Disillusionment', 'Overwhelmed by choices'],
        type: 'cups',
        number: 7
      },
      {
        name: 'Eight of Cups',
        image: 'path/to/eight-of-cups.jpg',
        reversed: false,
        meaning: ['Disappointment', 'Abandonment', 'Withdrawal', 'Escapism'],
        reversedMeaning: ['Fear of moving on', 'Hopelessness', 'Aimless drifting'],
        type: 'cups',
        number: 8
      },
      {
        name: 'Nine of Cups',
        image: 'path/to/nine-of-cups.jpg',
        reversed: false,
        meaning: ['Satisfaction', 'Emotional stability', 'Luxury', 'Well-being'],
        reversedMeaning: ['Dissatisfaction', 'Materialism', 'Over-indulgence'],
        type: 'cups',
        number: 9
      },
      {
        name: 'Ten of Cups',
        image: 'path/to/ten-of-cups.jpg',
        reversed: false,
        meaning: ['Harmony', 'Marriage', 'Happiness', 'Alignment'],
        reversedMeaning: ['Misaligned values', 'Broken home', 'Unhappiness'],
        type: 'cups',
        number: 10
      },
      {
        name: 'Page of Cups',
        image: 'path/to/page-of-cups.jpg',
        reversed: false,
        meaning: ['Creative opportunities', 'Intuitive messages', 'Curiosity', 'Possibility'],
        reversedMeaning: ['Immaturity', 'Insecurity', 'Disappointment'],
        type: 'cups',
        number: 11
      },
      {
        name: 'Knight of Cups',
        image: 'path/to/knight-of-cups.jpg',
        reversed: false,
        meaning: ['Romance', 'Charm', 'Imagination', 'Beauty'],
        reversedMeaning: ['Unrealistic', 'Jealousy', 'Moodiness'],
        type: 'cups',
        number: 12
      },
      {
        name: 'Queen of Cups',
        image: 'path/to/queen-of-cups.jpg',
        reversed: false,
        meaning: ['Compassion', 'Calm', 'Comfort', 'Emotion'],
        reversedMeaning: [ 'Insecurity',  'Dependence',  'Smothering'],
        type: 'cups',
        number: 13
      },
      {
        name: 'King of Cups',
        image: 'path/to/king-of-cups.jpg',
        reversed: false,
        meaning: ['Emotional balance', 'Generosity', 'Diplomacy', 'Control'],
        reversedMeaning: ['Manipulation', 'Volatility', 'Disengagement'],
        type: 'cups',
        number: 14
      },
    // Pentacles
    {
        name: 'Ace of Pentacles',
        image: 'path/to/ace-of-pentacles.jpg',
        reversed: false,
        meaning: ['New financial opportunity', 'Prosperity', 'Trustworthy advice', 'Practical planning'],
        reversedMeaning: ['Missed opportunity', 'Lack of planning', 'Unrealized goals'],
        type: 'pentacles',
        number: 1
      },
      {
        name: 'Two of Pentacles',
        image: 'path/to/two-of-pentacles.jpg',
        reversed: false,
        meaning: ['Balance', 'Adaptability', 'Time management', 'Resourcefulness'],
        reversedMeaning: ['Imbalance', 'Overwhelmed', 'Disorganized'],
        type: 'pentacles',
        number: 2
      },
      {
        name: 'Three of Pentacles',
        image: 'path/to/three-of-pentacles.jpg',
        reversed: false,
        meaning: ['Teamwork', 'Collaboration', 'Learning', 'Implementation'],
        reversedMeaning: ['Lack of teamwork', 'Disorganized', 'Group conflict'],
        type: 'pentacles',
        number: 3
      },
      {
        name: 'Four of Pentacles',
        image: 'path/to/four-of-pentacles.jpg',
        reversed: false,
        meaning: ['Security', 'Control', 'Conservatism', 'Financial stability'],
        reversedMeaning: ['Greed', 'Materialism', 'Stinginess', 'Closed off'],
        type: 'pentacles',
        number: 4
      },
      {
        name: 'Five of Pentacles',
        image: 'path/to/five-of-pentacles.jpg',
        reversed: false,
        meaning: ['Financial loss', 'Poverty', 'Lack mindset', 'Isolation'],
        reversedMeaning: ['Recovery from financial loss', 'Spiritual poverty', 'Isolation'],
        type: 'pentacles',
        number: 5
      },
      {
        name: 'Six of Pentacles',
        image: 'path/to/six-of-pentacles.jpg',
        reversed: false,
        meaning: ['Generosity', 'Charity', 'Giving', 'Prosperity'],
        reversedMeaning: ['Selfishness', 'Debt', 'One-sided charity'],
        type: 'pentacles',
        number: 6
      },
      {
        name: 'Seven of Pentacles',
        image: 'path/to/seven-of-pentacles.jpg',
        reversed: false,
        meaning: ['Patience', 'Long-term view', 'Sustainable results', 'Perseverance'],
        reversedMeaning: ['Lack of long-term vision', 'Limited success', 'Impatience'],
        type: 'pentacles',
        number: 7
      },
      {
        name: 'Eight of Pentacles',
        image: 'path/to/eight-of-pentacles.jpg',
        reversed: false,
        meaning: ['Dedication', 'Skill development', 'Persistence', 'Attention to detail'],
        reversedMeaning: ['Lack of focus', 'Perfectionism', 'Work without reward'],
        type: 'pentacles',
        number: 8
      },
      {
        name: 'Nine of Pentacles',
        image: 'path/to/nine-of-pentacles.jpg',
        reversed: false,
        meaning: ['Luxury', 'Self-sufficiency', 'Cultivation', 'Reward'],
        reversedMeaning: ['Materialism', 'Living beyond means', 'Over-dependence'],
        type: 'pentacles',
        number: 9
      },
      {
        name: 'Ten of Pentacles',
        image: 'path/to/ten-of-pentacles.jpg',
        reversed: false,
        meaning: ['Wealth', 'Inheritance', 'Family', 'Established success'],
        reversedMeaning: ['Financial failure', 'Loneliness', 'Loss of stability'],
        type: 'pentacles',
        number: 10
      },
      {
        name: 'Page of Pentacles',
        image: 'path/to/page-of-pentacles.jpg',
        reversed: false,
        meaning: ['Ambition', 'Desire to learn', 'Practicality', 'New opportunity'],
        reversedMeaning: ['Lack of progress', 'Procrastination', 'Unrealized potential'],
        type: 'pentacles',
        number: 11
      },
      {
        name: 'Knight of Pentacles',
        image: 'path/to/knight-of-pentacles.jpg',
        reversed: false,
        meaning: ['Efficiency', 'Routine', 'Conservatism', 'Methodical work'],
        reversedMeaning: ['Boredom', 'Stagnation', 'Laziness', 'Feeling stuck'],
        type: 'pentacles',
        number: 12
      },
      {
        name: 'Queen of Pentacles',
        image: 'path/to/queen-of-pentacles.jpg',
        reversed: false,
        meaning: ['Nurturing', 'Practicality', 'Financial security', 'Homeliness'],
        reversedMeaning: ['Financial independence', 'Self-care', 'Work-home balance'],
        type: 'pentacles',
        number: 13
      },
      {
        name: 'King of Pentacles',
        image: 'path/to/king-of-pentacles.jpg',
        reversed: false,
        meaning: ['Abundance', 'Security', 'Control', 'Generosity'],
        reversedMeaning: ['Financially inept', 'Obsessed with wealth', 'Corruption'],
        type: 'pentacles',
        number: 14
      },
    // Swords
    {
        name: 'Ace of Swords',
        image: 'path/to/ace-of-swords.jpg',
        reversed: false,
        meaning: ['New ideas', 'Clarity', 'Breakthroughs', 'Intellectual ability'],
        reversedMeaning: ['Confusion', 'Miscommunication', 'Blocked thoughts'],
        type: 'swords',
        number: 1
      },
      {
        name: 'Two of Swords',
        image: 'path/to/two-of-swords.jpg',
        reversed: false,
        meaning: ['Indecision', 'Choices', 'Stalemate', 'Impasse'],
        reversedMeaning: ['Indecision', 'Confusion', 'Information overload'],
        type: 'swords',
        number: 2
      },
      {
        name: 'Three of Swords',
        image: 'path/to/three-of-swords.jpg',
        reversed: false,
        meaning: ['Heartbreak', 'Emotional pain', 'Sorrow', 'Grief'],
        reversedMeaning: ['Recovery', 'Forgiveness', 'Moving on'],
        type: 'swords',
        number: 3
      },
      {
        name: 'Four of Swords',
        image: 'path/to/four-of-swords.jpg',
        reversed: false,
        meaning: ['Rest', 'Relaxation', 'Contemplation', 'Recovery'],
        reversedMeaning: ['Restlessness', 'Burnout', 'Stress', 'Exhaustion'],
        type: 'swords',
        number: 4
      },
      {
        name: 'Five of Swords',
        image: 'path/to/five-of-swords.jpg',
        reversed: false,
        meaning: ['Conflict', 'Tension', 'Defeat', 'Win at all costs'],
        reversedMeaning: ['Reconciliation', 'Making amends', 'Past resentment'],
        type: 'swords',
        number: 5
      },
      {
        name: 'Six of Swords',
        image: 'path/to/six-of-swords.jpg',
        reversed: false,
        meaning: ['Transition', 'Change', 'Rite of passage', 'Releasing baggage'],
        reversedMeaning: ['Stagnation', 'Baggage', 'Resistance to change'],
        type: 'swords',
        number: 6
      },
      {
        name: 'Seven of Swords',
        image: 'path/to/seven-of-swords.jpg',
        reversed: false,
        meaning: ['Deception', 'Trickery', 'Tactics', 'Strategy'],
        reversedMeaning: ['Coming clean', 'Openness', 'End of deceit'],
        type: 'swords',
        number: 7
      },
      {
        name: 'Eight of Swords',
        image: 'path/to/eight-of-swords.jpg',
        reversed: false,
        meaning: ['Restriction', 'Confusion', 'Powerlessness', 'Victim mentality'],
        reversedMeaning: ['Self-acceptance', 'New perspective', 'Freedom'],
        type: 'swords',
        number: 8
      },
      {
        name: 'Nine of Swords',
        image: 'path/to/nine-of-swords.jpg',
        reversed: false,
        meaning: ['Anxiety', 'Worry', 'Fear', 'Depression'],
        reversedMeaning: ['Hope', 'Reaching out', 'Overcoming fear'],
        type: 'swords',
        number: 9
      },
      {
        name: 'Ten of Swords',
        image: 'path/to/ten-of-swords.jpg',
        reversed: false,
        meaning: ['Betrayal', 'Backstabbing', 'Defeat', 'Crisis'],
        reversedMeaning: ['Recovery', 'Regeneration', 'Resisting an inevitable end'],
        type: 'swords',
        number: 10
      },
      {
        name: 'Page of Swords',
        image: 'path/to/page-of-swords.jpg',
        reversed: false,
        meaning: ['Curiosity', 'Restlessness', 'Mental energy', 'Investigation'],
        reversedMeaning: ['Deception', 'Manipulation', 'All talk'],
        type: 'swords',
        number: 11
      },
      {
        name: 'Knight of Swords',
        image: 'path/to/knight-of-swords.jpg',
        reversed: false,
        meaning: ['Ambition', 'Action', 'Aggression', 'Directness'],
        reversedMeaning: ['Impulsiveness', 'Rudeness', 'Intolerance', 'Conflict'],
        type: 'swords',
        number: 12
      },
      {
        name: 'Queen of Swords',
        image: 'path/to/queen-of-swords.jpg',
        reversed: false,
        meaning: ['Independence', 'Unbiased judgement', 'Clear boundaries', 'Direct communication'],
        reversedMeaning: ['Coldness', 'Cruelty', 'Bitterness', 'Emotional guardedness'],
        type: 'swords',
        number: 13
      },
      {
        name: 'King of Swords',
        image: 'path/to/king-of-swords.jpg',
        reversed: false,
        meaning: ['Mental clarity', 'Intellectual power', 'Authority', 'Truth'],
        reversedMeaning: ['Manipulation', 'Tyranny', 'Abuse of power'],
        type: 'swords',
        number: 14
      },
    // Wands
      {
        name: 'Ace of Wands',
        image: 'path/to/ace-of-wands.jpg',
        reversed: false,
        meaning: ['Inspiration', 'New opportunities', 'Growth', 'Potential'],
        reversedMeaning: ['An emerging idea', 'Lack of direction', 'Distractions', 'Delays'],
        type: 'wands',
        number: 1
      },
      {
        name: 'Two of Wands',
        image: 'path/to/two-of-wands.jpg',
        reversed: false,
        meaning: ['Future planning', 'Progress', 'Decisions', 'Discovery'],
        reversedMeaning: ['Personal goals', 'Inner alignment', 'Fear of unknown', 'Lack of planning'],
        type: 'wands',
        number: 2
      },
      {
        name: 'Three of Wands',
        image: 'path/to/three-of-wands.jpg',
        reversed: false,
        meaning: ['Expansion', 'Foresight', 'Overseas opportunities', 'Long-term plans'],
        reversedMeaning: ['Playing safe', 'Lack of foresight', 'Unexpected delays', 'Lack of cooperation'],
        type: 'wands',
        number: 3
      },
      {
        name: 'Four of Wands',
        image: 'path/to/four-of-wands.jpg',
        reversed: false,
        meaning: ['Community', 'Home', 'Celebration', 'Reunions'],
        reversedMeaning: ['Lack of support', 'Transience', 'Home conflicts'],
        type: 'wands',
        number: 4
      },
      {
        name: 'Five of Wands',
        image: 'path/to/five-of-wands.jpg',
        reversed: false,
        meaning: ['Competition', 'Conflict', 'Tension', 'Disagreements'],
        reversedMeaning: ['Avoiding conflict', 'Respect differences', 'Diversity'],
        type: 'wands',
        number: 5
      },
      {
        name: 'Six of Wands',
        image: 'path/to/six-of-wands.jpg',
        reversed: false,
        meaning: ['Success', 'Public recognition', 'Progress', 'Self-confidence'],
        reversedMeaning: ['Private achievement', 'Personal definition of success', 'Fall from grace'],
        type: 'wands',
        number: 6
      },
      {
        name: 'Seven of Wands',
        image: 'path/to/seven-of-wands.jpg',
        reversed: false,
        meaning: ['Challenge', 'Competition', 'Protection', 'Perseverance'],
        reversedMeaning: ['Giving up', 'Overwhelmed', 'Overly protective'],
        type: 'wands',
        number: 7
      },
      {
        name: 'Eight of Wands',
        image: 'path/to/eight-of-wands.jpg',
        reversed: false,
        meaning: ['Movement', 'Fast-paced change', 'Action', 'Alignment'],
        reversedMeaning: ['Delays', 'Frustration', 'Resisting change', 'Internal alignment'],
        type: 'wands',
        number: 8
      },
      {
        name: 'Nine of Wands',
        image: 'path/to/nine-of-wands.jpg',
        reversed: false,
        meaning: ['Resilience', 'Courage', 'Persistence', 'Test of faith'],
        reversedMeaning: ['Inner resources', 'Struggle', 'Overwhelm', 'Defensive'],
        type: 'wands',
        number: 9
      },
      {
        name: 'Ten of Wands',
        image: 'path/to/ten-of-wands.jpg',
        reversed: false,
        meaning: ['Burden', 'Extra responsibility', 'Hard work', 'Completion'],
        reversedMeaning: ['Doing it all', 'Carrying the burden', 'Delegation', 'Release'],
        type: 'wands',
        number: 10
      },
      {
        name: 'Page of Wands',
        image: 'path/to/page-of-wands.jpg',
        reversed: false,
        meaning: ['Inspiration', 'Ideas', 'Discovery', 'Limitless potential', 'Free spirit'],
        reversedMeaning: ['Newly-formed ideas', 'Redirecting energy', 'Self-limiting beliefs', 'A spiritual path'],
        type: 'wands',
        number: 11
      },
      {
        name: 'Knight of Wands',
        image: 'path/to/knight-of-wands.jpg',
        reversed: false,
        meaning: ['Energy', 'Passion', 'Inspired action', 'Adventure', 'Impulsiveness'],
        reversedMeaning: ['Internal conflict', 'Transition', 'Impulsiveness'],
        type: 'wands',
        number: 12
      },
      {
        name: 'Queen of Wands',
        image: 'path/to/queen-of-wands.jpg',
        reversed: false,
        meaning: ['Courage', 'Confidence', 'Independence', 'Social butterfly', 'Determination'],
        reversedMeaning: ['Self-respect', 'Self-confidence', 'Introverted', 'Re-establish sense of self'],
        type: 'wands',
        number: 13
      },
      {
        name: 'King of Wands',
        image: 'path/to/king-of-wands.jpg',
        reversed: false,
        meaning: ['Big picture', 'Leader', 'Overcoming challenges', 'Setting an example'],
        reversedMeaning: ['Impulsive', 'Overbearing', 'Unachievable expectations', 'Persuasive'],
        type: 'wands',
        number: 14
      },
    
];

export default tarotCards;