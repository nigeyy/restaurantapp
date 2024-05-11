import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
   


      <div style={{ backgroundColor: "white", height: 'auto', position: 'relative' }}>
        <div style={{ width: '650px', height: '400px', marginLeft: '20px', marginTop: '20px' }}>
          <br></br>
          <p style={{ margin: '20px', color: 'black', fontSize: '22px', fontFamily: 'Urbanist', fontWeight: '500', lineHeight: '100%' }}>Pricing</p><br></br><br></br>
          <div style={{ margin: '20px', color: '#080808', fontSize: 52, fontFamily: 'Urbanist', fontWeight: 550, lineHeight: '50px', wordWrap: 'break-word' }}>Discover our pricing<br></br> options</div>
          <div style={{ marginTop: '15px', marginLeft: '20px', color: '#080808', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '540', lineHeight: '20px', wordWrap: 'break-word' }}>Unlock the perfect package for your restaurant’s growth.<br></br> Choose from our flexible options to suit your budget and goals.</div>
        </div>
        <div style={{ position: 'relative', marginTop: '-170px' }}>
          <img src="Foodies.png" alt="image" style={{ position: 'absolute', top: '5px', right: '40px', transform: 'translateY(-50%)', width: '300px', height: '250px' }} />
        </div>        
        </div>


        <div className="py-8 text-left mx-auto text-black max-w-screen-lg" style={{ fontSize: "clamp(24px, 5vw, 50px)", fontFamily: "Segoe UI", fontWeight: "600", lineHeight: "normal" }}>
  <div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-5 md:mt-2">
    <div className="service-card">
      <div style={{ width: 350, height: 420, borderRadius: 10, border: '1px solid #707070', background: 'rgba(255, 255, 255, 0.00)', marginRight: 20, alignItems: 'center', justifyContent: 'center' }}>
        <div className='text-center' style={{ color: '#FFF', fontFamily: 'Segoe UI', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', lineHeight: 'normal', wordWrap: 'break-word', marginTop: 40 }}>Web Development</div>
        <div style={{ color: '#000', fontFamily: 'Segoe UI', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '250', lineHeight: 'normal', padding: '20px', wordWrap: 'break-word', textAlign: 'center', marginTop: 20 }}>Custom Web Development: Tailored solutions that align with your business goals and user needs. Responsive Design: Websites that look and function seamlessly across all devices. E-Commerce Solutions: Build a powerful online store to boost your sales. CMS Development: Manage your website content easily with a user-friendly CMS.</div>
      </div>
    </div>
    <div className="service-card">
      <div style={{ width: 350, height: 420, borderRadius: 10, border: '1px solid #707070', background: 'rgba(255, 255, 255, 0.00)', marginRight: 20, alignItems: 'center', justifyContent: 'center' }}>
        <div className='text-center' style={{ color: '#FFF', fontFamily: 'Segoe UI', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', lineHeight: 'normal', wordWrap: 'break-word', marginTop: 40 }}>Web Designing</div>
        <div style={{ color: '#000', fontFamily: 'Segoe UI', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '250', lineHeight: 'normal', padding: '20px', wordWrap: 'break-word', textAlign: 'center', marginTop: 20 }}>Elevate your online presence and captivate your audience with our exceptional web designing services. Let us create a digital experience that not only looks amazing but also drives your business forward. Contact us today to discuss how we can transform your vision into a visually stunning reality.</div>
      </div>
    </div>
    <div className="service-card">
      <div style={{ width: 350, height: 420, borderRadius: 10, border: '1px solid #707070', background: 'rgba(255, 255, 255, 0.00)', marginRight: 20, alignItems: 'center', justifyContent: 'center' }}>
        <div className='text-center' style={{ color: '#FFF', fontFamily: 'Segoe UI', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', lineHeight: 'normal', wordWrap: 'break-word', marginTop: 40 }}>Mobile App</div>
        <div style={{ color: '#000', fontFamily: 'Segoe UI', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '250', lineHeight: 'normal', padding: '20px', wordWrap: 'break-word', textAlign: 'center', marginTop: 20 }}>Our expert team transforms innovative ideas into functional and user-centric mobile applications. From concept to design and coding to testing, we ensure a seamless and engaging experience for your users across various platforms. Elevate your business, streamline processes, and engage your audience with our cutting-edge app solutions.</div>
      </div>
    </div>
  </div>
</div>




        <div className='ali' style={{backgroundColor:"white", display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ width: 450, height: 500, marginTop: '10px', background: 'white', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid' }}></div>

          <div style={{ width: 450, height: 500, marginTop: '10px', background: 'black', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid' }}></div>

          <div style={{ width: 450, height: 500, marginTop: '10px', background: 'white', borderRadius: 18.58, border: '0.84px rgba(0, 0, 0, 0.70) solid' }}></div>
        </div>

       
      
    </div>
  );
}
