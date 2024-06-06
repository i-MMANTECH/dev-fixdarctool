"use client"
import "./globals.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Image className="image" src="/head_section.jpg" alt="head_section" width={900} height={400} />

    
    <>
    <div className="home w-full flex bg-white justify-right align-right">Link your DApps to mobile wallets</div>
      <div className="button w-full bg-white flex justify-center align-center">
          <w3m-button size="md" label="Connect Wallet" loadingLabel="Connecting..." />
        </div>
      
      <>
      <div className="info w-full flex bg-white justify-right align-right">Open Protocol helps to communicate securely between Wallets and Dapps (Web3 Apps).
        The protocol establishes a remote connection using a bridge server</div>
        <>
        <Image className="image" src="/low-bar_section.jpg" alt="section" width={900} height={400} />
        </>
        </></></>
  );
}
