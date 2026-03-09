import React from 'react'

const ColorPalette = () => {
    return (
        <div className='p-10'>
            <div className='flex flex-col items-center mb-5'>
                <h1 className='text-9xl'>Color Palette</h1>
                <div className='flex gap-5'>
                    <div className="bg-[#6f1d1b] w-32 h-32 text-center border">6f1d1b</div>
                    <div className="bg-[#bb9457] w-32 h-32 text-center border">bb9457</div>
                    <div className="bg-[#432818] w-32 h-32 text-center border">432818</div>
                    <div className="bg-[#99582a] w-32 h-32 text-center border">99582a</div>
                    <div className="bg-[#ffe6a7] w-32 h-32 text-center border">ffe6a7</div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-20'>
                <h1 className='text-9xl'>Font</h1>
                <h1 className='text-5xl text-[#6f1d1b]'>Heading Text-5xl</h1>
                <h1 className='text-2xl text-[#6f1d1b]'>Sub-Heading Text-2xl</h1>
                <p className='text-[#432818] text-lg'>Paragraph text-lg</p>
            </div>
            <div className='flex flex-col items-center mt-20'>
                <h1 className='text-9xl'>Font Sizes</h1>
                <p className='text-xs'>text xs</p>
                <p className='text-sm'>text sm</p>
                <p className='text-base'>tx base</p>
                <p className='text-lg'>text lg</p>
                <p className='text-xl'>text xl</p>
                <p className='text-2xl'>text 2xl</p>
                <p className='text-3xl'>text 3xl</p>
                <p className='text-4xl'>text 4xl</p>
                <p className='text-5xl'>text 5xl</p>
                <p className='text-6xl'>text 6xl</p>
                <p className='text-7xl'>text 7xl</p>
                <p className='text-8xl'>text 8xl</p>
                <p className='text-9xl'>text 9xl</p>                
            </div>
        </div>
    )
}

export default ColorPalette
