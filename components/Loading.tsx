import AnimateCircle from './AnimateCircle'
import CanteenLogo from './CanteenLogo'


export default function Loading() {
    return (
        <>
            <div className='fixed -top-72 -right-96'>
                <AnimateCircle />
            </div>
            <CanteenLogo />
            <div className='fixed -bottom-72 -left-64'>
                <AnimateCircle />
            </div>
        </>
    )
}