import Header from "../components/Header";
export default function Home() {
  return (
    <main>
      <Header />
      <section className=" py-10 pl-3 max-w-4xl mx-auto">
        <div className="">
          <div className=" max-w-md ">
            <h1 className="text-4xl font-bold">Your one link for everything</h1>
            <h2 className="text-slate-600">
              Share your links, Social Profiles, contact info and more on one
              page.
            </h2>
          </div>
          <form className="items-center inline-flex shadow-md mt-5 ">
            <span className="py-4 bg-white pl-4">linklist.to/</span>
            <input type="text" className="py-4" placeholder="username" />
            <button className="bg-blue-500 text-white p-4">
              Join for free!
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
