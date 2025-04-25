import Image from 'next/image';

export default function Gallery() {
    const images = [
        '/gallaryImage.jpg',
        '/gallaryImage.jpg',
        '/gallaryImage.jpg',
        '/gallaryImage.jpg',
        '/gallaryImage.jpg',
    ];

    return (
        <div className="rounded-[1.25rem] overflow-hidden p-4 py-6 pb-14 relative" style={{ boxShadow: "2.3px 4px 26px 0px #00000021" }}>
            <h2 className="text-orange-accent font-normal md:text-[1.5rem] text-[1rem] mb-2" style={{ fontFamily: 'Luckiest Guy, cursive' }}>GALLERY</h2>
            <div className="rounded-[1.25rem] overflow-hidden h-[17.8rem] bg-gray-200 relative">
                <Image
                    src="/gallaryImage.jpg"
                    alt="Gallery"
                    width={600} // Set the width of the image
                    height={300} // Set the height of the image
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute bottom-10 right-10 flex items-center space-x-[-10px] z-[100]">
                {images.slice(0, 4).map((src, index) => (
                    <div
                        key={index}
                        className="w-10 h-10 rounded-full relative border-2 border-white"
                    >
                        <Image src={src} alt={`img-${index}`} width={40} height={40} className='rounded-full w-full h-full' />
                    </div>
                ))}

                <button className="bg-deep-orange z-10 text-white text-sm font-medium rounded-full px-4 py-2 flex items-center gap-1">
                    View All
                    <span className="text-lg">›</span>
                </button>
            </div>
        </div>
    );
}
