import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaLocationPin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Gallery() {
    useGSAP(() => {
        gsap.utils.toArray('.gallery-item').forEach((item: any) => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, []);

    return (
        <section className="gallary-grid">
            <h2 className="text-3xl font-bold text-center mb-10">Vietnam Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-6 gallery-grid">
                {[
                    { src: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:row-span-2 md:col-span-3", location: "Ninh Binh", author: "https://unsplash.com/@jcb23" },
                    { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-3", lcation: "Ho Chi Minh", author: "https://unsplash.com/@tronle_sg" },
                    { src: "https://images.unsplash.com/photo-1509813685-e7f0e4eaf3ee?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: 'md:col-span-1 md:row-span-1', location: "Ha Noi", author: "https://unsplash.com/@valentinsteph" },
                    { src: "https://images.unsplash.com/photo-1541079606130-1f46216e419d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: 'md:row-span-1 md:col-span-2', location: 'Ho Chi Minh', author: 'https://unsplash.com/@geodomou' },
                    { src: "https://images.unsplash.com/photo-1569271532956-3fb81a207115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2", location: "Hoi An, Quang Nam", author: "https://unsplash.com/@stevenewilcox" },
                    { src: "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: '', location: "Ha Noi", author: "https://unsplash.com/@nothing_to_say" },
                    { src: "https://images.unsplash.com/photo-1603852452440-b383ac720729?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: 'md:col-span-3 md:row-span-2', location: "Ho Chi Minh", author: "https://unsplash.com/@jetjetdelacruz" },
                    { src: "https://images.unsplash.com/photo-1588776873617-51922b5885f8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: 'md:col-span-3 md:row-span-1', location: 'Ha Noi', author: 'https://unsplash.com/@thattravelblog' },
                    { src: "https://images.unsplash.com/photo-1520268953492-2b443589f63d?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: 'md:col-span-2', location: "Mu Cang Chai District", author: "https://unsplash.com/@tuelangdu" },
                    { src: "https://images.unsplash.com/photo-1556383166-7674200341c1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "", location: "Mount Fansipan, Sapa", author: "https://unsplash.com/@ling_gigi" },
                    { src: "https://images.unsplash.com/photo-1572551887368-450aa6d8346e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2 md:row-span-1", location: "Tu Duc Tomb, Thua Thien Hue", author: "https://unsplash.com/@reto_gian" },
                    { src: "https://images.unsplash.com/photo-1500981458086-b8a11cd163af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "", location: "Mekong River Delta Tour", author: "https://unsplash.com/@jackyoung" },
                    { src: "https://images.unsplash.com/photo-1543411789-1a67a2ac05c6?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-3", location: "Mekong River Delta", author: "https://unsplash.com/@malcoo" },
                    { src: "https://images.unsplash.com/photo-1722526933541-9a9cdfcdb28f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-3 md:row-span-2", location: "Sun World Ba Na Hills, Da Nang", author: "https://unsplash.com/@jesssilaya" },
                    { src: "https://images.unsplash.com/photo-1537113235536-4be2d071fa33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2", location: "Ha Giang", author: "https://unsplash.com/@frankieshutterbug" },
                    { src: 'https://images.unsplash.com/photo-1616486410185-81af2d32a2af?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', span: '', location: 'Hoang Kiem Lake, Ha Noi', author: 'https://unsplash.com/@edenconstantin0' },
                    { src: "https://images.unsplash.com/photo-1620976128192-7181e9f91342?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2", location: "Da Nang", author: "https://unsplash.com/@santesson89" },
                    { src: "https://images.unsplash.com/photo-1638793770847-54861ae7cdf5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2 md:row-span-2", location: "Sơn Đoòng, Thượng Trạch, Bố Trạch District, Quang Binh Province", author: "https://unsplash.com/@andrew_svk" },
                    {
                        src: 'https://images.unsplash.com/photo-1580630873708-e0475b1856c4?q=80&w=3233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', span: 'md:col-span-2', location: "Rừng Tràm Trà Sư, Văn Giáo, Tịnh Biên, An Giang", author: 'https://unsplash.com/@digitalsennin'
                    },
                    { src: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', span: 'md:col-span-2', location: 'Ninh Bình, Việt Nam', author: 'https://unsplash.com/@giautran' },
                    { src: 'https://images.unsplash.com/photo-1523466161097-31b21e3a660f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', span: 'md:col-span-2', location: 'Hoi An', author: 'https://unsplash.com/@hajang' },
                ].map((img, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl shadow-lg gallery-item opacity-0 translate-y-10 ${img.span}`}
                    >
                        <img src={img.src} alt={`Vietnam ${index + 1}`} className="w-full h-full object-cover" />

                        <div className='caption text-sm !px-2'>
                            <label className='text-white inline-flex truncate gap-1'><FaLocationPin className='text-white size-4' />{img.location}</label>
                            <label className='text-white inline-flex items-center gap-1'>By <Link target="_blank" to={img.author}>@{img.author.split("@")[1]}</Link></label>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
