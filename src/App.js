import './App.css'
import './pages/home'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quizAnswer" element={<QuizAnswer/>}/>
        <Route path="/quizMaker" element={<QuizMaker/>}/>

      </Routes>
    </Router>
  );
}

export default App;
