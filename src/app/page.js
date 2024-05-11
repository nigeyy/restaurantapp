import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', backgroundImage: 'url("bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: 450, marginBottom: -40 }}>
  <img className="ml-10 mt-8" src="logo.png" alt="logo" width="160" height="50" />
  <img style={{ marginLeft: 'auto', marginRight: 20 }} className="mt-8" src="signup.png" alt="signup" width="90" height="40" />
  <img style={{ marginRight: 40 }} className="mt-8" src="menu.png" alt="menu" width="50" height="40" />
</div>


      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", height: '270px', position: 'relative', marginTop: '20px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', maxWidth: '700px',marginLeft:40 }}>
    <p style={{ marginLeft: '15px', color: 'black', fontSize: '22px', fontFamily: 'Urbanist', fontWeight: '500', lineHeight: '90%', marginTop:30 }}>Pricing</p>
    <div style={{ marginLeft: '15px', marginTop: '90px', color: '#080808', fontSize: 55, fontFamily: 'Urbanist', fontWeight: 550, lineHeight: '50px', wordWrap: 'break-word' }}>Discover our pricing<br />options</div>
    <div style={{ marginTop: '15px', marginLeft: '20px', color: '#080808', fontSize: 23, fontFamily: 'Urbanist', fontWeight: '540', lineHeight: '30px', wordWrap: 'break-word' }}>Unlock the perfect package for your restaurant’s growth.<br />Choose from our flexible options to suit your budget and goals.</div>
  </div>
  <div style={{ position: 'absolute', top: '75%', right: '5%', transform: 'translateY(-50%)', zIndex: 1 }}>
    <img src="Foodies.png" alt="image" style={{ width: '300px', height: '250px' }} />
  </div>
</div>


<div className='ali' style={{backgroundColor:"white", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: -90}}>
  <div style={{ width: 420, height: 495, marginTop: '155px', background: 'white', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid', padding: '20px' ,marginBottom:25 }}>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'bold', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left' }}>Free</div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>For solo designer managing one or more site.</div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>₹ 200</div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
      <div style={{ width: 400, height: 45, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 25, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 385, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 1</div>
      </div>
      <div style={{ width: 400, height: 45, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex', marginTop: 10 }}>
        <div style={{ width: 25, height: 25, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 385, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 2</div>
      </div>
    </div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 20 }}>other</div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 1</div>
      </div>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 2</div>
      </div>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 3</div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <div style={{ width: 400, height: 50, background: '#080808', borderRadius: 9.29, justifyContent: 'center', alignItems: 'center', gap: 7.74, display: 'inline-flex' }}>
        <div style={{ color: 'white', fontSize: 20, fontFamily: 'Urbanist', fontWeight: 'normal', lineHeight: 28.84, wordWrap: 'break-word' }}>upgrade</div>
      </div>
    </div>
  </div>

  <div style={{ width: 430, height: 560, marginTop: '90px', marginLeft: "20px", background: 'black', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
  <div style={{ color: 'white', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'bold', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left' }}>Premium</div>
  <div style={{ color: 'white', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>For small team and freelancer who want more control over their code</div>
  <div style={{ color: 'white', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>₹ 200</div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: 400, height: 50, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex', marginTop: 15 }}>
      <div style={{ width: 30.97, height: 25, background: 'black', borderRadius: 9999 }} />
      <div style={{ width: 421, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 1</div>
    </div>
    <div style={{ width: 400, height: 50, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex', marginTop: 10 }}>
      <div style={{ width: 30.97, height: 25, background: 'black', borderRadius: 9999 }} />
      <div style={{ width: 421, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 2</div>
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}> {/* Adjusted to align left */}
    <div style={{ color: 'white', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 20 }}>other</div>
    <div style={{ width: 400, height: 40, padding: 13.52, background: 'black', borderRadius: 17.03, border: 'black', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex', marginTop: 10 }}>
      <div style={{ width: 25.97, height: 20, background: 'white', borderRadius: 9999 }} />
      <div style={{ width: 421, color: 'white', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 1</div>
    </div>
    <div style={{ width: 400, height: 40, padding: 13.52, background: 'black', borderRadius: 17.03, border: 'black', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
      <div style={{ width: 25.97, height: 20, background: 'white', borderRadius: 9999 }} />
      <div style={{ width: 421, color: 'white', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 2</div>
    </div>
    <div style={{ width: 400, height: 40, padding: 13.52, background: 'black', borderRadius: 17.03, border: 'black', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
      <div style={{ width: 25.97, height: 20, background: 'white', borderRadius: 9999 }} />
      <div style={{ width: 421, color: 'white', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 3</div>
    </div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
    <div style={{ width: 400, height: 53, background: 'white', borderRadius: 9.29, justifyContent: 'center', alignItems: 'center', gap: 7.74, display: 'inline-flex' }}>
      <div style={{ color: 'black', fontSize: 20, fontFamily: 'Urbanist', fontWeight: 'normal', lineHeight: 28.84, wordWrap: 'break-word' }}>upgrade</div>
    </div>
  </div>
</div>



  
  <div style={{ width: 420, height: 495, marginTop: '155px',marginLeft:"20px", background: 'white', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid', padding: '20px' }}>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'bold', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left' }}>Pro</div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>For solo designer managing one or more site.</div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 30, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 15 }}>₹ 200</div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
      <div style={{ width: 400, height: 45, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 25, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 385, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 1</div>
      </div>
      <div style={{ width: 400, height: 45, padding: 13.52, background: 'white', borderRadius: 17.03, border: '2px #080808 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex', marginTop: 10 }}>
        <div style={{ width: 25, height: 25, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 385, color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>Main feature 2</div>
      </div>
    </div>
    <div style={{ color: 'black', fontFamily: 'Urbanist', fontSize: 20, fontWeight: 'normal', lineHeight: 'normal', wordWrap: 'break-word', textAlign: 'left', marginTop: 20 }}>other</div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 1</div>
      </div>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 2</div>
      </div>
      <div style={{ width: 300, height: 40, padding: 13.52, background: 'white', borderRadius: 17.03, border: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.76, display: 'inline-flex' }}>
        <div style={{ width: 25, height: 23, background: '#D9D9D9', borderRadius: '50%' }} />
        <div style={{ width: 275, color: '#080808', fontSize: 18, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, wordWrap: 'break-word' }}>feature 3</div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <div style={{ width: 400, height: 50, background: '#080808', borderRadius: 9.29, justifyContent: 'center', alignItems: 'center', gap: 7.74, display: 'inline-flex' }}>
        <div style={{ color: 'white', fontSize: 20, fontFamily: 'Urbanist', fontWeight: 'normal', lineHeight: 28.84, wordWrap: 'break-word' }}>upgrade</div>
      </div>
    </div>
  </div>
</div>  

<div style={{backgroundColor:'white'}}>
  <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 100, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, background: 'black', borderTopLeftRadius: 22, borderTopRightRadius: 22, justifyContent: 'space-between', alignItems: 'center', marginTop: 90 }}>
    <img src="logo.png" alt="logo" width="250" height="140" style={{marginLeft: 30}} />
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}> {/* Adjusted this div */}
      <div style={{ color: 'white', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, textAlign: 'center', wordWrap: 'break-word', marginRight: 40 }}>templates</div> {/* Adjusted margin for the "templates" text */}
      <div style={{ color: 'white', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 28.84, textAlign: 'center', wordWrap: 'break-word' }}>pricing</div>
    </div>
    <div style={{ color: 'white', fontSize: 15, fontFamily: 'Urbanist', fontWeight: '500', lineHeight: 24.03, wordWrap: 'break-word', textAlign: 'right', marginRight:20}}>Copyright © 2024 themenu.me | All Rights Reserved</div>
  </div>
</div>

    </div>
  );
}
