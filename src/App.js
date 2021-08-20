import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    currentQuestion: 0,
    totalQuestions: 4,
    questions: [
      {
        question: 'What is the capital of Iraq?',
        answer: 'Baghdad',
        choices: ['Erbil', 'Karbala', 'Baghdad', 'Ramadi'],
        index: 1
      },
      {
        question: 'When was the modern state of Iraq established?',
        answer: '1914',
        choices: [1920, 1950, 1899, 1914],
        index: 2
      },
      {
        question: 'What are the official languages in Iraq?',
        answer: 'Arabic and Kurdish',
        choices: ['Arabic', 'Arabic and Kurdish', 'Arabic and Syriac', 'Persian'],
        index: 3
      },
      {
        question: 'What is the current currency of Iraq?',
        answer: 'Iraqi dinar',
        choices: ['Iraqi dinar', 'Iraqi dirham', 'Iraqi toman', 'Iraqi dollar'],
        index: 4
      }
    ],
    result: 0,
    finished: false
  }

  handleAnswer = (e) => {
    const answer = e.target.getAttribute('choice');

    if (answer === this.state.questions[this.state.currentQuestion].answer) {
      this.setState({
        result: this.state.result + 1
      });
    } 

    if (this.state.currentQuestion + 1 >= this.state.totalQuestions) {
      this.setState({
        finished: true
      });
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      });
    }
  }

  resetQuiz = () => {
    this.setState({
      currentQuestion: 0,
      finished: false,
      result: 0
    })
  }

  toggleDarkMode = () => {
    const app = document.querySelector('.app');
    const quiz = document.querySelector('.quiz-container');

    if (app.classList.contains('light-mode') && quiz.classList.contains('light-mode-quiz')) {
      app.classList.remove('light-mode');
      quiz.classList.remove('light-mode-quiz');
    } else {
      app.classList.add('light-mode');
      quiz.classList.add('light-mode-quiz');
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Quiz app</h1>
        <div className="quiz-container">
          {
            this.state.finished ? <div className="results">
              <h2>You scored {this.state.result} out of 4</h2>
              <button onClick={this.resetQuiz}>Reset quiz</button>
            </div> : 
            <>
              <div className="question">
                <h2>Question {this.state.currentQuestion + 1}/{this.state.totalQuestions}</h2>
                 <p>{this.state.questions[this.state.currentQuestion].question}</p>
              </div>
              <div className="answers">
                {
                  this.state.questions[this.state.currentQuestion].choices.map(choice => (
                      <div className="choice">
                        <button onClick={this.handleAnswer} choice={choice}>{choice}</button>
                      </div>
                  ))
                }
              </div>
            </>
          }
        </div>
          <button className="toggle-theme" onClick={this.toggleDarkMode}>toggle dark mode</button>
      </div>
    )
  }
}

export default App;