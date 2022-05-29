import Header from "./components/Header";
import { Route, Switch } from "wouter";
import AuvasaPage from "./pages/auvasa";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <div className="py-0 bg-slate-800">
        <main className="justify-center min-h-screen px-16 py-6 2xl:px-96">
          <Switch>
            <Route path="/auvasa" component={AuvasaPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
