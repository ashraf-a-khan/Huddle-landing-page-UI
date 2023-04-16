import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import illustration from "../public/images/illustration-mockups.svg";
import bgDesktop from "../public/images/bg-desktop.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

const open_sans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            {/* <div className="bg-scroll bg-[url('/images/bg-desktop.svg')] h-[972px]"></div> */}
            <div>
                <div
                    //
                    className="absolute -z-10 min-h-screen bg-gradient-to-r from-violet-500 to-purple-500 bg-cover bg-no-repeat bg-fixed bg-center"
                    style={{
                        backgroundImage: "url('/images/bg-desktop.svg')",
                        backgroundColor: "#674baf",
                    }}
                    // style={{
                    //     width: "100%",
                    //     height: "100%",
                    // }}
                >
                    <div className="flex flex-row">
                        <div className="pt-40 pl-24 basis-1/2">
                            <Image src={illustration} alt="illustration" />
                        </div>
                        <div className="pt-52 pl-24 basis-1/2">
                            <h1 className={`${poppins.className} "leading-10"`}>
                                Build The Community
                                <br />
                                Your Fans Will Love
                            </h1>
                            <div className={open_sans.className}>
                                Huddle re-imagines the way we build communities.
                                You have a voice, but so does your audience.
                                Create connections with your users as you engage
                                in genuine discussion.
                            </div>
                            <button className="shadow-xl mt-8 bg-white text-violet-400 py-3 px-12 rounded-full">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
