import { shoe8 } from "../../assets/images";
import Button from "../../components/button/Button";

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1 ">
        <h2 className='mt-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg'>
          We Provide You <span className='inline-block mt-3 text-coral-red'>
            Super
          </span>
          <span className='inline-block mt-3 text-coral-red'>
            Quality
          </span> Shoes
        </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Discover our collection of shoes crafted with superior materials and design. Enjoy unmatched comfort, style, and durability with every step.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11 max-sm:mx-auto">
            <Button label='view details'/>
          </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality
