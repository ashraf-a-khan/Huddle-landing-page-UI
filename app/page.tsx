import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            {/* <div className="bg-scroll bg-[url('/images/bg-desktop.svg')] h-[972px]"></div> */}
            <div className="h-screen">
                <div className="absolute -z-10 bg-cover">
                    <Image
                        src="/images/bg-desktop.svg"
                        alt="background"
                        width="1600"
                        height="1600"
                    />
                </div>
                <div> Some overlay things go in here </div>
            </div>
        </main>
    );
}
