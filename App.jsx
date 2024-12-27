import { useState } from 'react';
import { Calendar } from 'lucide-react';

const FortuneTeller = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [fortune, setFortune] = useState(null);

  // Extensive prediction database
  const predictions = {
    career: [
      "A surprising job opportunity will emerge in the tech sector",
      "Your leadership skills will be recognized by senior management",
      "A creative side project will turn into a profitable venture",
      "A mentor will guide you towards an unexpected career path",
      "Your expertise in a niche area will become highly valuable",
      "A collaboration will lead to professional growth",
      "International opportunities will present themselves",
      "Your innovative approach will solve a major challenge",
      "A skill you learned years ago will become crucial",
      "Your work will receive public recognition",
      "A bold career move will pay off",
      "Your persistence in learning new skills will be rewarded",
      "A team project will showcase your unique abilities",
      "Your adaptability will lead to a promotion",
      "A networking event will open new doors",
      "Your communication skills will advance your position",
      "A business partnership will form unexpectedly",
      "Your analytical abilities will solve a complex problem",
      "A long-term project will finally bear fruit",
      "Your expertise will be sought after by industry leaders",
      "A period of professional transformation will begin",
      "Your strategic thinking will impress key stakeholders",
      "A risky decision will lead to success",
      "Your patience in building relationships will pay off",
      "A new role will align perfectly with your goals"
    ],
    personal: [
      "A journey of self-discovery will reveal hidden talents",
      "An unexpected hobby will bring joy and fulfillment",
      "A personal challenge will lead to tremendous growth",
      "Your creativity will flourish in new ways",
      "A long-held dream will begin materializing",
      "Your perspective on life will shift positively",
      "A new friendship will inspire personal change",
      "Your confidence will grow through new experiences",
      "An old passion will reignite",
      "Your resilience will be tested and strengthened",
      "A spiritual awakening will guide your path",
      "Your empathy will deepen through unique experiences",
      "A personal project will bring satisfaction",
      "Your intuition will guide important decisions",
      "A period of self-reflection will bring clarity",
      "Your authentic self will shine through",
      "A transformative experience will change your outlook",
      "Your emotional intelligence will develop further",
      "A personal boundary will strengthen relationships",
      "Your sense of purpose will become clearer",
      "A creative breakthrough will occur",
      "Your personal values will guide important choices",
      "A period of growth will lead to self-discovery",
      "Your inner strength will surprise you",
      "A meaningful connection will form"
    ],
    relationships: [
      "Deep connections will form with like-minded people",
      "An old friendship will be rekindled",
      "A misunderstanding will lead to stronger bonds",
      "Your compassion will heal a strained relationship",
      "A surprising connection will bring joy",
      "Your openness will attract meaningful friendships",
      "A family bond will strengthen significantly",
      "Your patience will improve a key relationship",
      "A new circle of friends will form",
      "Your kindness will be deeply appreciated",
      "A relationship will evolve in unexpected ways",
      "Your wisdom will help others grow",
      "A mutual understanding will deepen",
      "Your support will make a lasting impact",
      "A conversation will change everything",
      "Your authenticity will attract genuine connections",
      "A relationship will reach new depths",
      "Your empathy will bridge differences",
      "A unexpected reunion will bring closure",
      "Your honesty will strengthen trust",
      "A new chapter in relationships will begin",
      "Your presence will inspire others",
      "A meaningful mentor will appear",
      "Your loyalty will be recognized",
      "A special bond will form"
    ],
    growth: [
      "Learning a new skill will open unexpected doors",
      "Your adaptability will lead to success",
      "A challenge will become a stepping stone",
      "Your persistence will overcome obstacles",
      "An opportunity for growth will present itself",
      "Your dedication will yield remarkable results",
      "A new perspective will change everything",
      "Your patience will be rewarded",
      "A period of rapid development will begin",
      "Your flexibility will create opportunities",
      "A learning curve will lead to mastery",
      "Your curiosity will unlock new paths",
      "An investment in yourself will pay off",
      "Your growth mindset will attract success",
      "A breakthrough will accelerate progress",
      "Your resilience will inspire others",
      "A skill gap will be bridged",
      "Your determination will overcome doubts",
      "A mentor will accelerate your growth",
      "Your openness to feedback will be key",
      "A challenge will reveal hidden strengths",
      "Your commitment will bring results",
      "A setback will lead to comeback",
      "Your growth will inspire others",
      "A transformation will begin"
    ]
  };

  const generateFortune = () => {
    if (!name || !birthdate) {
      alert('Please enter your name and birthdate');
      return;
    }

    // Generate consistent indices based on name and birthdate
    const nameSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const dateSum = new Date(birthdate).getTime();
    const seed = nameSum + dateSum;

    setFortune({
      career: predictions.career[Math.abs(seed) % predictions.career.length],
      personal: predictions.personal[Math.abs(seed + 1) % predictions.personal.length],
      relationships: predictions.relationships[Math.abs(seed + 2) % predictions.relationships.length],
      growth: predictions.growth[Math.abs(seed + 3) % predictions.growth.length]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Your 2025 Prediction
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <Calendar className="absolute right-3 top-3 text-gray-400" />
            </div>

            <button
              onClick={generateFortune}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reveal Your Fortune
            </button>
          </div>

          {fortune && (
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Your 2025 Forecast</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">Career Path</h3>
                    <p className="text-gray-700">{fortune.career}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-800">Personal Journey</h3>
                    <p className="text-gray-700">{fortune.personal}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-800">Relationships</h3>
                    <p className="text-gray-700">{fortune.relationships}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-800">Growth & Development</h3>
                    <p className="text-gray-700">{fortune.growth}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-center text-gray-500">
                Prediction for {name} | Generated on {new Date().toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FortuneTeller;
