"use client"
import "./globals.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Image className="image" src="/head_section.jpg" alt="head_section" width={900} height={400} />
    <>
    <div className="home w-full flex bg-white justify-right align-right">Link your DApps to mobile wallet</div>
      <>
      <div className="info w-full flex bg-white justify-right align-right">Open Protocol to communicate securely between Wallets and Dapps (Web3 Apps).
        The protocol establishes a remote connection using a bridge server</div>

        <div className="button w-full bg-white flex justify-left align-left">
          <w3m-button size="md" label="Connect Wallet" loadingLabel="Connecting..." />
        </div>
        <>
        <Image className="image" src="/low-bar_section.jpg" alt="section" width={900} height={400} />
        </>
        </></></>
  );
}
