export default function IndexPage() {
  return (
    <div className="w-screen h-full bg-gray-200 ">
      <div className="flex flex-col w-full xl:flex-row">
        <div className="flex flex-col mx-8 mt-16 lg:mx-24 xl:mr-0 xl:w-2/5 ">
          <div className="flex flex-col w-full p-6 space-y-10 bg-white rounded-lg shadow-2xl">
            <h1 className="text-4xl ">Hello,</h1>
            <span className="text-3xl ">
              My name is Borislav and I am a self-taught frontend developer and
              a university student.
            </span>
            <span className="text-3xl">
              I love programming and strive to hone my skills in order achieve
              my ultimate goals.
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-16 ml-auto mr-auto space-y-10 xl:mr-32 xl:ml-24 xl:w-2/5">
          <div className="ml-auto mr-auto ">
            <div className="flex flex-row ">
              <img
                className="w-24 lg:w-48"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
              ></img>
              <img
                className="w-24 lg:w-48"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
              ></img>
              <img
                className="w-24 lg:w-48"
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              ></img>
            </div>
          </div>
          <div className="flex flex-col p-6 mx-8 bg-white rounded-lg shadow-2xl lg:mx-24 lg:space-x-16 lg:flex-row xl:ml-auto xl:mr-auto">
            <div className="flex flex-col ">
              <h1 className="mb-4 text-3xl">Frontend</h1>
              <span className="text-2xl">React</span>
              <span className="text-2xl">CSS</span>
              <span className="text-2xl">Tailwind CSS</span>
              <span className="text-2xl">HTML</span>
              <span className="text-2xl">JavaScript</span>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-4 text-3xl">Other</h1>
              <span className="text-2xl">Git / GitHub</span>
              <span className="text-2xl">VS Code</span>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-4 text-3xl">About me</h1>
              <span className="text-l">
                Im currently in my last year to become a bachelor in applied
                mathematics. I have some experience with Pyton, C#,NodeJS and
                MongoDB. I am looking forward to getting some field experinece
                and to learn as much as possible.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-16">
        <span className="ml-auto mr-auto text-4xl ">Projects</span>
      </div>
      <div className="flex flex-col mx-8 mt-8 bg-white rounded-lg shadow-2xl lg:mx-24">
        <span className="mt-4 ml-auto mr-auto text-3xl ">Twitter</span>
        <div className="flex flex-col w-full p-8 xl:flex-row">
          <div className="flex flex-col xl:w-1/2">
            <span className="text-2xl">
              This is a fully responisve frontend-only NextJS React app that
              looks almost identical to the current Twitter (using dark mode).
              <br></br> The app has large screen view, tablet view and phone
              view.<br></br> It is created using only Tailwind CSS.
            </span>
            <div className="flex flex-row mt-4 ml-auto mr-auto space-x-8">
              <a
                href="https://github.com/GrenthFP/TailwindExample"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-700"
              >
                View Code
              </a>
              <a
                href="https://tailwind-example-six.vercel.app/"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
              >
                View Site
              </a>
            </div>
          </div>
          <img
            src="https://i.imgur.com/kYdd2QW.png"
            className="w-full mt-8 rounded-md xl:mt-0 xl:w-1/2 xl:ml-8 "
          ></img>
        </div>
      </div>
      <div className="flex flex-col mx-8 mt-8 bg-white rounded-lg shadow-2xl lg:mx-24">
        <span className="mt-4 ml-auto mr-auto text-3xl ">Shop</span>
        <div className="flex flex-col w-full p-8 xl:flex-row">
          <div className="flex flex-col xl:w-1/2">
            <span className="text-2xl">
              This is a fully responsive React app using the regular JS
              platform, that is a Shop template. There is minimum Backend that I
              created as I wanted to have some experience with it. The shop menu
              will allow you to create new items and will load currently created
              ones. There is also a username/password system where you can
              create credentials and store it into the backend. You can also
              verify those credentials and the system will determine if they are
              valid. Once again the CSS is using Tailwind and the backend is
              using Heroku.
            </span>
            <div className="flex flex-row mt-4 ml-auto mr-auto space-x-8">
              <a
                href="https://github.com/GrenthFP/Shop_project"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-700"
              >
                View Code
              </a>
              <a
                href="https://admiring-joliot-7ae5fb.netlify.app/"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
              >
                View Site
              </a>
            </div>
          </div>
          <img
            src="https://i.imgur.com/srwb1Mb.png"
            className="w-full mt-8 rounded-md xl:mt-0 xl:w-1/2 xl:ml-8 "
          ></img>
        </div>
      </div>
    </div>
  );
}
