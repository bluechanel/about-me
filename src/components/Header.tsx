import Image from 'next/image';
import { MapPin, CakeIcon, MailIcon, QrCodeIcon, RssIcon } from "lucide-react"


export default function Header() {
  const calculateAge = () => {
    const birthDate = new Date('1997-06-12');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <header className="text-center py-8 md:py-12">
      <div className="w-48 h-48 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 relative">
        <Image
          src="/avtar.jpg"
          alt="头像"
          width={512}
          height={512}
          className="object-cover rounded-full border-4 border-emerald-400/30"
          priority
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-serif-sc font-bold text-white mb-4 md:mb-6">WileyZhang</h1>
      <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-wider mb-6 md:mb-8 [text-shadow:0_0_10px_rgba(52,211,153,0.3),0_0_20px_rgba(52,211,153,0.2),0_0_30px_rgba(52,211,153,0.1)]">大模型开发专家 & 技术引领者</p>
      <div className="flex flex-row justify-center space-x-6 md:space-x-8 text-lg text-gray-300 mb-6 md:mb-8">
        <span className='flex flex-row mr-4'><MapPin className='mr-2'/>西安</span>
        <span className='flex flex-row mr-4'><CakeIcon className='mr-2'/>{calculateAge()}岁</span>
        <span className='flex flex-row mr-4'><MailIcon className='mr-2'/>bluechanel612@gmail.com</span>
        <span className='flex flex-row mr-4'><RssIcon className='mr-2'/><a href="http://www.wileyzhang.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">www.wileyzhang.com</a></span>
        <span className='flex flex-row mr-4 group relative cursor-pointer'>
          <QrCodeIcon className='mr-2'/>
          微信公众号: AI开发者日记
          <div className='hidden group-hover:block absolute -right-24 top-8 p-2 bg-white rounded-lg shadow-lg z-50'>
            <Image src='/wechat.png' alt='微信二维码' width={200} height={200} className='w-48 h-48'/>
          </div>
        </span>
      </div>
      <div className='mt-4'>
        <span className="inline-flex items-center text-cyan-400 px-4 py-2 text-sm rounded-full border-2 border-cyan-700 bg-emerald-400/10">
          <span className='inline-block w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-2'></span>PMP 项目管理认证
        </span>
      </div>
    </header>
  );
}