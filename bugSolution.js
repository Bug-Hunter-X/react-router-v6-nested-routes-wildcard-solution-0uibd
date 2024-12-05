import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() {
  const { id } = useParams();
  return (
    <h1>Contact</h1>
    <div>ID: {id}</div>
  );
}

// Explanation:
// The solution uses useParams to access any additional path parameters after '/contact',
// making the wildcard more specific and fixing the overriding issue.