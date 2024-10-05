


import { useState } from 'react';


interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}


const questions: Question[] = [
  {
    question: "Qu'est-ce que l'IA ?",
    options: ["Intelligence Artificielle", "Intelligence Animale", "Intelligence Humaine"],
    correctAnswer: "Intelligence Artificielle",
  },
  {
    question: "Quel est le but de l'apprentissage automatique ?",
    options: ["Créer des algorithmes pour résoudre des problèmes", "Créer des robots pour effectuer des tâches", "Créer des systèmes pour simuler des conversations"],
    correctAnswer: "Créer des algorithmes pour résoudre des problèmes",
  },
  {
    question: "Qu'est-ce qu'un réseau de neurones ?",
    options: ["Un type de base de données", "Un type d'algorithme d'apprentissage automatique", "Un type de système d'exploitation"],
    correctAnswer: "Un type d'algorithme d'apprentissage automatique",
  },
  {
    question: "Qu'est-ce que le traitement automatique du langage ?",
    options: ["Un domaine de l'IA qui traite de la reconnaissance vocale", "Un domaine de l'IA qui traite de la traduction automatique", "Un domaine de l'IA qui traite de l'analyse du langage"],
    correctAnswer: "Un domaine de l'IA qui traite de l'analyse du langage",
  },
  {
    question: "Qu'est-ce que la vision par ordinateur ?",
    options: ["Un domaine de l'IA qui traite de la reconnaissance d'images", "Un domaine de l'IA qui traite de la reconnaissance vocale", "Un domaine de l'IA qui traite de la traduction automatique"],
    correctAnswer: "Un domaine de l'IA qui traite de la reconnaissance d'images",
  },
  {
    question: "Qu'est-ce qu'un agent intelligent ?",
    options: ["Un système qui peut apprendre et s'adapter", "Un système qui peut résoudre des problèmes de manière autonome", "Un système qui peut simuler des conversations"],
    correctAnswer: "Un système qui peut apprendre et s'adapter",
  },
  {
    question: "Qu'est-ce que l'apprentissage par renforcement ?",
    options: ["Un type d'apprentissage automatique qui utilise des récompenses pour apprendre", "Un type d'apprentissage automatique qui utilise des exemples pour apprendre", "Un type d'apprentissage automatique qui utilise des règles pour apprendre"],
    correctAnswer: "Un type d'apprentissage automatique qui utilise des récompenses pour apprendre",
  },
  {
    question: "Qu'est-ce que l'apprentissage par imitation ?",
    options: ["Un type d'apprentissage automatique qui utilise des exemples pour apprendre", "Un type d'apprentissage automatique qui utilise des récompenses pour apprendre", "Un type d'apprentissage automatique qui utilise des démonstrations pour apprendre"],
    correctAnswer: "Un type d'apprentissage automatique qui utilise des démonstrations pour apprendre",
  },
  {
    question: "Qu'est-ce que la planification automatique ?",
    options: ["Un domaine de l'IA qui traite de la planification de tâches", "Un domaine de l'IA qui traite de la reconnaissance d'images", "Un domaine de l'IA qui traite de la traduction automatique"],
    correctAnswer: "Un domaine de l'IA qui traite de la planification de tâches",
  },
  {
    question: "Qu'est-ce que la représentation des connaissances ?",
    options: ["Un domaine de l'IA qui traite de la représentation des données", "Un domaine de l'IA qui traite de la reconnaissance d'images", "Un domaine de l'IA qui traite de la planification de tâches"],
    correctAnswer: "Un domaine de l'IA qui traite de la représentation des données",
  },
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');


  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer('');
  };


  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };


  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      {currentQuestion < questions.length ? (
        <div>
          <h2 className="text-lg font-bold mb-2">{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`w-full p-2 bg-gray-100 hover:bg-gray-200 rounded ${selectedAnswer === option ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleSelectAnswer(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
            onClick={handleNextQuestion}
          >
            Suivant
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-2">Résultats</h2>
          <p>Vous avez obtenu {score} sur {questions.length}.</p>
        </div>
      )}
    </div>
  );
};


export default Quiz;



