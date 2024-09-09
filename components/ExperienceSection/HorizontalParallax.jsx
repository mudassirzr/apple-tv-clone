
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function HorizontalParallax() {
    return (
        <div className="w-full overflow-hidden">
            <Parallax translateX={[0, -10]} className="flex my-3">
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/transformers.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/blue-beetle.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/usher.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/fitness.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/futurama.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/foundation.jpg" />
            </Parallax>
            <Parallax translateX={[-10, 0]} className="flex my-3">
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/jennifer.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/battles.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/morning-show.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/river-ice.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/subway-surfer.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/river-fitness.jpg" />
                
            </Parallax>
            <Parallax translateX={[0, -12]} className="flex my-3">
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/river-fitness-01.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/hijack.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/hbo-original.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/stadale.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/ted-lasso.jpg" />
                <Image className="mx-2 rounded-md" width={345} height={195} src="/img/music.jpg" />
                
            </Parallax>
        </div>
    )
}