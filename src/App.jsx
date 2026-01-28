import LeftSection from "./components/LeftSection";
import RightImages from "./components/RightImages";



export default function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6] flex items-center justify-center px-6 py-6  bg-cover bg-center md:px-10"
    style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1664033881407-d9cae989c7b4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 " >
        <LeftSection
          logoText="LOGO"
          heading="Coming Soon"
          tagline="Stay Tuned"
          description="Experience the timeless elegance of royal Indian chai in every cup. Our premium instant chai premix is crafted to bring warmth, tradition, and a hint of luxury to your everyday tea ritual."
        />
        <RightImages />
      </div>
    </div>
  );
}
