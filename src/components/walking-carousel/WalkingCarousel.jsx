import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './WalkingCarousel.css'

const WalkingCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false })
    ])
    const [isPlaying, setIsPlaying] = useState(true)


    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        setIsPlaying(autoScroll.play)
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <img src={index} className='w-full h-64 object-cover rounded-lg'></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WalkingCarousel
