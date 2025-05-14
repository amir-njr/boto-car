import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">
        <header>
          <section className="bg-green-500 text-center mx-auto w-fit px-10 py-2 rounded-md">
            <h1 className="font-bold border-b-2">BOTOCAR</h1>
            <p>Choose and Buy you car</p>
          </section>
        </header>
      </Link>
        <div className="min-h-screen max-w-[1000px] m-auto my-20 md:px-0 px-10">
          {children}
        </div>
        <footer className="bg-green-500">
          <p className="text-center text-white font-semibold">
            Developer: <span className="text-black">Amir Najjar</span> | BotoCar
            Project &copy;
          </p>
        </footer>
    </>
  );
};

export default Layout;
