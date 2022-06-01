import Header from "./components/Header";
import { Route, Switch } from "wouter";
import ApiPage from "./pages/apiPage";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <div className="py-0 bg-slate-800">
        <main className="justify-center min-h-screen px-16 py-6 2xl:px-96">
          <Switch>
            <Route path="/api/:apiId" component={ApiPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
