import { Widget } from "./components/Widget";

export function App() {
 return (
 <>
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="flex justify-center md:text-9xl text-5xl font-bold text-zinc-200">FeedWidget</h1>
    <span className="text-4xl">Feedback Widget</span>
  </div>
  <Widget />
 </>
 )
}
