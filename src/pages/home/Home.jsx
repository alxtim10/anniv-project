import Frame from '../../components/frame/Frame'
import HomeCarousel from '../../components/carousel/HomeCarousel'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Modal from '../../components/modal/Modal'

const Home = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    let [isOpen, setIsOpen] = useState(false)

    return (
        <section className="min-h-screen font-base ">
            <Frame />
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="px-5 py-3 absolute top-28 text-white text-xs tracking-widest">
                    <h1 className="uppercase">Highlights</h1>
                    <div className="w-3 h-3 border-t border-l border-red-600 absolute top-0 left-0"></div>
                    <div className="w-3 h-3 border-b border-l border-red-600 absolute bottom-0 left-0"></div>
                    <div className="w-3 h-3 border-t border-r border-red-600 absolute top-0 right-0"></div>
                    <div className="w-3 h-3 border-b border-r border-red-600 absolute bottom-0 right-0"></div>
                </div>
                <HomeCarousel slides={SLIDES} options={OPTIONS} />
                <h1
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer absolute bottom-20 bg-transaprent border border-white text-white text-sm px-5 py-3 hover:bg-white hover:text-black transition-all">See Memories</h1>
            </div>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                transition
                className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition duration-300 ease-out data-[closed]:opacity-0"
            >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4">
                       <Modal setIsOpen={setIsOpen}/>
                    </DialogPanel>
                </div>
            </Dialog>
        </section>
    )
}

export default Home