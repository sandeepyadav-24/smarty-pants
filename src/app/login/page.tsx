"use client";
const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center mt-20 text-3xl font-bold">Sign In</h1>
      <div
        className="my-10 mx-auto w-[400px] text-center text-white bg-blue-500 p-5 rounded-md text-xl "
        onClick={() => {
          alert("Sign with Google");
        }}
      >
        Sign With Google
      </div>
      <div
        className="my-10 mx-auto w-[400px] text-center text-white bg-blue-500 p-5 rounded-md text-xl"
        onClick={() => {
          alert("Sign with Twitter");
        }}
      >
        Sign With Twitter
      </div>
      <div
        className="my-10 mx-auto w-[400px] text-center text-white bg-blue-500 p-5 rounded-md text-xl "
        onClick={() => {
          alert("Sign with GitHub");
        }}
      >
        Sign With Github
      </div>
    </div>
  );
};
export default LoginPage;
