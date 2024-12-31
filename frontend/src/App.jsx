import { useState } from 'react';
import { Calendar } from 'lucide-react';

const BACKEND_URL = 'https://2025-preds-api.vercel.app';
// const BACKEND_URL = 'http://localhost:5000';


const FortuneTeller = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [fortune, setFortune] = useState(null);
  const [loading, setLoading] = useState(false);

  const predictions = {
    career: [
      "A surprising job opportunity will emerge in the tech sector",
      "Your leadership skills will be recognized by senior management",
      "A creative side project will turn into a profitable venture",
      "A mentor will guide you towards an unexpected career path",
      "Your expertise in a niche area will become highly valuable",
      "A breakthrough idea will elevate your career to new heights",
      "A collaboration with an influential figure will boost your professional network",
      "You will receive a promotion or recognition for your hard work",
      "Your ability to adapt will help you thrive in a changing job market",
      "An exciting new project will challenge your skills and accelerate growth",
      "An unexpected job offer will align with your long-term goals",
      "Your innovative thinking will help you solve a major problem at work",
      "You’ll be entrusted with a major responsibility that will shape your future",
      "A career shift will bring fresh opportunities and a new direction",
      "Networking will lead you to a life-changing professional opportunity",
      "Your hard work will finally pay off in a major professional accomplishment",
      "An unexpected partnership will help you reach new career milestones",
      "You will gain the respect and recognition of your peers and supervisors",
      "Your ability to see the big picture will open up leadership opportunities",
      "A major company breakthrough will be attributed to your contributions",
      "You will be offered a prestigious speaking engagement that boosts your profile",
      "Your next career move will be a perfect fit for your talents and aspirations",
      "You will be offered a contract with an exciting new client or partner",
      "Your expertise will be sought after by top professionals in your field",
      "A project you’ve been working on will receive widespread acclaim",
      "A new business venture will succeed beyond your expectations",
      "Your contributions will be recognized with a major award or accolade",
      "Your reputation will grow as an expert in your field",
      "A mentor will teach you a valuable lesson that will change your career",
      "You will face a challenge that will unlock your full career potential",
      "Your reputation as a problem-solver will lead to new opportunities",
      "You’ll make a career move that aligns perfectly with your values",
      "A new role will allow you to showcase your leadership abilities",
      "Your contributions will leave a lasting impact on your industry",
      "An unexpected job offer will give you the flexibility to pursue your passions",
      "Your work will be recognized globally, leading to exciting collaborations",
      "A new position will provide you with the resources to reach your goals",
      "A major business decision will be influenced by your insights",
      "Your career will take an exciting turn as new opportunities present themselves",
      "An unexpected promotion will propel you into a leadership position",
      "Your success will inspire others in your field",
      "You will become known for your innovative approach to problem-solving",
      "A new team will form around you, and together, you’ll achieve great things",
      "You will find immense satisfaction in mentoring younger professionals",
      "A career break will allow you to refocus and come back stronger",
      "Your success story will become an inspiration for others in your industry",
      "You will be invited to join an exclusive professional network",
      "Your career will thrive as you take on new challenges with confidence"
    ],
    personal: [
      "A journey of self-discovery will reveal hidden talents",
      "An unexpected hobby will bring joy and fulfillment",
      "A personal challenge will lead to tremendous growth",
      "Your creativity will flourish in new ways",
      "A long-held dream will begin materializing",
      "You will find peace through mindfulness and reflection",
      "A significant change in your daily routine will bring positive results",
      "Your intuition will guide you to make the right decisions",
      "A period of solitude will help you reconnect with yourself",
      "You will experience a breakthrough in your personal development journey",
      "A new perspective will help you see the world in a different light",
      "A personal passion project will lead to a sense of fulfillment",
      "Your ability to stay positive will inspire others around you",
      "A major shift in your mindset will unlock new possibilities",
      "You will learn to let go of old habits that no longer serve you",
      "A new relationship will bring a sense of peace and contentment",
      "A deep sense of gratitude will transform your outlook on life",
      "You will discover a new talent that will surprise even yourself",
      "A period of introspection will bring clarity to your goals",
      "A new sense of purpose will guide your decisions moving forward",
      "You will break free from limiting beliefs and embrace your full potential",
      "A dream you’ve had for years will begin to take shape",
      "A shift in your environment will bring fresh energy into your life",
      "You will become more self-aware and confident in your own skin",
      "A new friendship will enrich your personal life in unexpected ways",
      "You will learn the power of saying no and setting healthy boundaries",
      "Your self-compassion will grow, leading to greater inner peace",
      "You will overcome a personal fear that has held you back",
      "A challenge will ignite your passion for personal growth",
      "You will find joy in the little things, changing your perspective on life",
      "A creative project will bring you immense satisfaction and pride",
      "You will embark on a journey of healing, both physically and mentally",
      "You will finally let go of past regrets and embrace the present moment",
      "A period of self-reflection will lead to a deeper understanding of yourself",
      "Your sense of humor will help you navigate difficult situations",
      "You will discover a new passion that will invigorate your soul",
      "A transformation in your lifestyle will improve your overall well-being",
      "You will strengthen your inner resilience, making you more adaptable",
      "You will find a sense of balance that was previously elusive",
      "A surprising opportunity will lead you to a completely new path",
      "You will embrace change and thrive in new environments",
      "A deep sense of inner peace will guide you through difficult times",
      "You will experience profound personal growth over the next few months",
      "Your sense of self-worth will reach new heights",
      "A relationship will teach you valuable life lessons that will shape your future",
      "You will rediscover a childhood passion that brings joy back into your life"
    ],
    relationships: [
      "Deep connections will form with like-minded people",
      "An old friendship will be rekindled",
      "A misunderstanding will lead to stronger bonds",
      "Your compassion will heal a strained relationship",
      "A surprising connection will bring joy",
      "A romantic relationship will deepen, bringing you closer to your partner",
      "New friendships will emerge through shared experiences",
      "You will find common ground with someone you least expect",
      "A family member will offer support when you need it most",
      "A heartfelt conversation will bring clarity to a relationship issue",
      "You will find a soulmate who shares your values and vision",
      "A deep, lasting bond will form with someone from your past",
      "A long-distance relationship will prove stronger than you thought",
      "Your ability to listen will improve your relationships significantly",
      "A relationship will teach you the importance of trust and communication",
      "You will experience personal growth through your relationships",
      "A new romantic partner will bring excitement and joy into your life",
      "You will be able to repair a broken relationship with patience and understanding",
      "You will form meaningful connections with people who truly understand you",
      "Your relationship with a sibling will become stronger than ever",
      "You will find ways to express your feelings that bring you closer to others",
      "A surprising gesture will strengthen your relationship with a loved one",
      "A long-standing friendship will become even deeper and more meaningful",
      "You will learn the value of vulnerability in your relationships",
      "A shared adventure will bring you closer to someone important",
      "A family event will lead to bonding and deeper understanding",
      "You will witness a beautiful growth in a romantic relationship",
      "Your social circle will expand as you meet people who uplift you",
      "You will find new ways to connect with your partner on a deeper level",
      "A romantic gesture will take your relationship to new heights",
      "You will help a friend through a difficult time, strengthening your bond",
      "A relationship will challenge you to become your best self",
      "Your ability to forgive will heal a long-standing hurt in a relationship",
      "A new friend will bring a fresh perspective to your life",
      "You will learn valuable lessons about love and partnership",
      "A relationship will teach you the power of compromise and understanding",
      "You will experience a deep sense of gratitude for the people in your life",
      "Your relationship with a mentor will grow in unexpected and meaningful ways",
      "A romantic relationship will teach you the importance of self-love",
      "You will find comfort in the companionship of someone who truly understands you",
      "You will be introduced to a new social circle that brings new perspectives",
      "Your willingness to open up will strengthen your connections with others",
      "You will discover new dimensions of love and friendship",
      "Your relationship with a colleague will evolve into a strong partnership",
      "You will build lasting friendships that bring joy and support into your life",
      "A relationship will inspire you to step outside your comfort zone"
    ],
    growth: [
      "Learning a new skill will open unexpected doors",
      "Your adaptability will lead to success",
      "A challenge will become a stepping stone",
      "Your persistence will overcome obstacles",
      "An opportunity for growth will present itself",
      "You will gain valuable insights through failure and learn from it",
      "A new perspective will help you grow in ways you never imagined",
      "A commitment to self-improvement will bring long-lasting rewards",
      "You will develop resilience that will serve you well in tough times",
      "Your efforts to expand your knowledge will pay off in unexpected ways",
      "Your ability to let go of perfectionism will lead to growth",
      "You will embrace discomfort and grow stronger through it",
      "A new challenge will bring out your hidden strengths",
      "You will experience personal growth through new, difficult experiences",
      "Your self-discipline will lead to remarkable achievements",
      "You will develop a mindset of abundance that attracts growth",
      "Your commitment to learning will open new, exciting opportunities",
      "You will learn to embrace change and use it to your advantage",
      "A setback will become the catalyst for your greatest success",
      "You will overcome self-doubt and unlock your full potential",
      "Your ability to adapt will allow you to thrive in any situation",
      "You will discover new skills that will enhance your career and personal life",
      "Your growth will inspire others to pursue their own development",
      "You will become more confident in your abilities and decisions",
      "A new perspective will help you overcome old obstacles",
      "You will find success by stepping out of your comfort zone",
      "Your commitment to personal growth will lead to greater happiness",
      "You will learn the power of patience as you work toward your goals",
      "You will embrace challenges as opportunities for personal development",
      "Your ability to push through adversity will result in significant growth",
      "You will find ways to motivate yourself even when the going gets tough",
      "A new habit will make a positive impact on your overall growth",
      "You will learn to trust the process of growth and change",
      "Your pursuit of excellence will lead to high achievements",
      "You will experience growth through new experiences and challenges",
      "Your mindset will shift towards greater empowerment and success",
      "You will grow through introspection and deep self-awareness",
      "Your ability to set clear goals will drive your personal growth",
      "You will find new ways to expand your knowledge and wisdom",
      "Your resilience will help you bounce back stronger from setbacks",
      "You will challenge yourself to grow beyond your perceived limits",
      "Your dedication to learning will set you on a path to success",
      "You will find growth in areas of your life you never expected",
      "Your growth will be accelerated by taking risks and facing fears",
      "You will develop a growth mindset that attracts opportunities for success",
      "Your growth will open up new possibilities for your future"
    ]
  };
  

  const generateFortune = async () => {
    if (!name || !birthdate) {
      alert('Please enter your name and birthdate');
      return;
    }
  
    // Get the list of previously entered names from localStorage, or initialize it as an empty array
    let nameList = JSON.parse(localStorage.getItem("nameList")) || [];
  
    // Only proceed if the name is not already in the list
    if (!nameList.includes(name)) {
      nameList.push(name); // Add the new name to the list
      localStorage.setItem("nameList", JSON.stringify(nameList)); // Save the updated list back to localStorage
  
      setLoading(true);
  
      const normalizedName = name.toLowerCase(); // Normalize name for consistency
      const nameSum = normalizedName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const birthdateObj = new Date(birthdate);
  
      if (isNaN(birthdateObj)) {
        alert('Please enter a valid birthdate');
        return;
      }
  
      const dateSum = birthdateObj.getTime();
      const seed = nameSum + dateSum;
  
      const generatedFortune = {
        career: predictions.career[Math.abs(seed) % predictions.career.length],
        personal: predictions.personal[Math.abs(seed + 1) % predictions.personal.length],
        relationships: predictions.relationships[Math.abs(seed + 2) % predictions.relationships.length],
        growth: predictions.growth[Math.abs(seed + 3) % predictions.growth.length]
      };
  
      try {
        const response = await fetch(`${BACKEND_URL}/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            data: JSON.stringify(generatedFortune)
          })
        });
  
        if (!response.ok) {
          throw new Error('Failed to connect to the server');
        }
  
        const data = await response.json();
  
        if (data.success) {
          setFortune(generatedFortune);
        } else {
          alert('Failed to generate prediction. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to generate prediction. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // alert('This name has already been entered. No backend request made.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 flex flex-col">
      <div className="max-w-2xl mx-auto w-full pt-8 flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6 md:mb-8">
          Your 2025 Prediction
        </h1>
  
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-6 md:space-y-8">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ease-in-out"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
  
            {/* Date Input with Calendar Icon */}
            <div className="relative flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">
                Date of Birth:
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ease-in-out hover:shadow-md hover:border-blue-300 text-gray-600"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>

  
            {/* Reveal Fortune Button */}
            <button
              onClick={generateFortune}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex justify-center items-center space-x-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">🔄</span> <span>Generating...</span>
                </>
              ) : (
                'Reveal Your Fortune'
              )}
            </button>
          </div>
  
          {/* Display the Fortune */}
          {fortune && (
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-blue-900 mb-4">
                  Your 2025 Forecast
                </h2>
                <div className="space-y-4">
                  {Object.entries(fortune).map(([category, prediction]) => (
                    <div key={category}>
                      <h3 className="font-medium text-blue-800 capitalize">
                        {category.replace('_', ' ')}
                      </h3>
                      <p className="text-gray-700">{prediction}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              <p className="text-sm text-center text-gray-500">
                Prediction for {name} | Generated on {new Date().toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
  
      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-600">
        Made with ❤️ by{' '}
        <a
          href="https://github.com/sreecharan-desu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Your Sree Charan
        </a>
      </footer>
    </div>
  );
  
};

export default FortuneTeller;