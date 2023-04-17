import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import illustration from "../public/images/illustration-mockups.svg";
import bgDesktop from "../public/images/bg-desktop.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

const open_sans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <div>
                <div
                    className="absolute -z-10 min-h-screen bg-gradient-to-r from-violet-500 to-purple-500 bg-cover bg-no-repeat bg-fixed bg-center"
                    style={{
                        backgroundImage: "url('/images/bg-desktop.svg')",
                        backgroundColor: "#674baf",
                    }}
                >
                    <div className="flex flex-row">
                        <div className="pt-40 pl-24 basis-1/2">
                            <Image src={illustration} alt="illustration" />
                        </div>
                        <div className="pt-52 pl-24 pr-24 basis-1/2">
                            <h1 className={`${poppins.className} "leading-10"`}>
                                Build The Community
                                <br />
                                Your Fans Will Love
                            </h1>
                            <div className={`${open_sans.className} "text-sm"`}>
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
                    <div className="flex flex-row">
                        <div className="basis-1/2"></div>
                        <div className="flex flex-row pt-12 pr-24 justify-end basis-1/2">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-md mr-2 rounded-full border border-gray-300 p-1 w-12 h-12 flex items-center justify-center"
                            />
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-md mr-2 rounded-full border border-gray-300 p-1 w-12 h-12 flex items-center justify-center"
                            />
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-md rounded-full border border-gray-300 p-1 w-12 h-12 flex items-center justify-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
