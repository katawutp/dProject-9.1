'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import { inAppWallet } from "thirdweb/wallets";

const InAppWalletsPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="dProject Login / Register"
                subtitle="Web3 dApp - Decentralized SocialApplication"
            />
            <InAppWalletOptions />
            <Footer />
        </div>
    )
};

function InAppWalletOptions() {
    return (
      <div className="grid gap-4 lg:grid-cols-1 justify-center">
        {/* <PhonePassKey /> */}
        {/* <AllOptions /> */}
        
        <Phone />
        {/* <SocialOnly /> */}

      </div>
    );
}

// Default In-App Wallet options (all options)
function AllOptions () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">All Options</p>
            <ConnectButton  
                client={client}
                wallets={[ inAppWallet() ]}
            />
        </div>
    )
}

// In-App Wallet options with email only
function EmailOnly () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Email Only</p>
            <ConnectButton  
                client={client}
                wallets={[ 
                    inAppWallet({
                        auth: {
                            options: [
                                "email"
                            ]
                        }
                    }) 
                ]}
            />
        </div>
    )
}

// In-App Wallet options with social only
function SocialOnly () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Social Only</p>
            <ConnectButton  
                client={client}
                wallets={[ 
                    inAppWallet({
                        auth: {
                            // Select social login options
                            options: [
                                "google",
                                // "facebook",
                                // "apple"
                            ]
                        }
                    }) 
                ]}
            />
        </div>
    )
}

// In-App Wallet options with phone and pass key
function Phone () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">กรอกโทรศัพท์มือถือ</p>
            <ConnectButton  
                client={client}
                wallets={[ 
                    inAppWallet({
                        auth: {
                            options: [
                                "phone",
                                // "passkey",
                            ]
                        }
                    }) 
                ]}
            />
        </div>
    )
}

export default InAppWalletsPage;