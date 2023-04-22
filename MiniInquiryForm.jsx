import React from 'react'

export default function MiniInquiryForm({ form, validateForm, Submit,mes, name, email, number, passenger, pickupDate,
    pickupTime, pickupLocation, DropoffLocation, textarea, minDate, sixMonthsFromNow, yes, main, setName, setEmail, setNumber,
    setPassenger, setPickupDate, setPickupTime, setPickupLocation, setDropoffLocation, setTextarea, setYes, setMain,
    div1,div2,div3,div4,div5,div6,div7,div8,div9,setDiv1,setDiv2,setDiv3,setDiv4,setDiv5,setDiv6,setDiv7,setDiv8,setDiv9,btn,setBtn }) {

    return (
        <>
            <div className='block w-full max-w-[50%] relative ff m-auto'>
                <form ref={form} className='p-7 w-[360px] m-auto' onSubmit={validateForm ? Submit : ''}>
                    <div className={div4 ? "passenger my-2.5" : 'hidden'}>
                        <input type="number" required name="passenger" value={passenger} maxLength={2} onChange={(e) => { setPassenger(e.target.value) }} placeholder='No Of Passengers' className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="passenger" min={1} max={10} />

                    </div>
                    <div className={div5 ? 'pickup-date my-2.5' : 'hidden'}>
                        <input type="date" name="pickupDate" value={pickupDate} required={false} onChange={(e) => { setPickupDate(e.target.value) }} placeholder='Pickup Date' className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' min={minDate} max={sixMonthsFromNow} id="pickup-date" />
                    </div>
                    <div className={div6 ? 'pickup-time relative my-2.5' : 'hidden'}>
                        <input type="time" name="pickupTime" placeholder='Pickup Time' required defaultValue={pickupTime} className='w-full outline-none rounded-md shadow-2xl p-4' autoComplete='off' id="pickup-time" onChange={(e) => { setPickupTime(e.target.value) }} />
                        <span className='absolute text-2xl font-bold text-gray-700 font-mono top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>{pickupTime >= '12:00' && pickupTime <= '23:00' ? "PM" : "AM"}</span>
                    </div>

                    {
                        yes ? <>
                            <div className={div7 ? "pickup-place my-2.5" : "hidden"}>
                                <input type="text" autoComplete='off' value={pickupLocation} onChange={(e) => {
                                    const regex = /^[a-zA-Z\s]*$/;
                                    if (regex.test(e.target.value)) {
                                        setPickupLocation(e.target.value)
                                    } setPickupLocation(e.target.value)
                                }} placeholder='Pickup Location' className='w-full outline-none rounded-md shadow-2xl p-4' name="pickupLocation" id="pickup-place" required />
                            </div>
                            <div className={div8 ? "dropoff-destination my-2.5" : "hidden"}>
                                <input type="text" autoComplete='off' value={DropoffLocation} onChange={(e) => {
                                    const regex = /^[a-zA-Z\s]*$/;
                                    if (regex.test(e.target.value)) {
                                        setDropoffLocation(e.target.value);
                                    }
                                }} placeholder='DropOff Location' className='w-full outline-none rounded-md shadow-2xl p-4' required name="DropoffLocation" id="dropoff-destination" />
                            </div>
                            <div className={div9 ? "additional-requirement flex w-full py-4" : "hidden"}>
                                <div className="requirement w-full ">
                                    <textarea name="textarea" required={false} value={textarea} onChange={(e) => { setTextarea(e.target.value) }} placeholder='Additional Requirement...' className='w-full outline-none resize-none rounded-md shadow-2xl p-4' autoComplete='off' id="requirement" ></textarea>
                                </div>
                            </div>

                        </>

                            : ''
                    }
                    {
                        main ?
                            <>
                                <div className={div1 ? 'name my-2.5' : 'hidden'}>
                                    <input type="text" name="name" value={name} onChange={(e) => {
                                        const regex = /^[a-zA-Z\s]*$/;
                                        if (regex.test(e.target.value)) {
                                            setName(e.target.value);
                                        }
                                    }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="name" placeholder='Your Name' required />
                                </div>

                                <div className={div2 ? 'email my-2.5' : 'hidden'}>
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="email" placeholder='Your Email' required />
                                </div>

                                <div className={div3 ? 'mob my-2.5' : 'hidden'}>
                                    <input type="text" name="number" value={number} onChange={(e) => {
                                        if (/^[0-9]+$/.test(e.target.value)) {
                                            setNumber(e.target.value);
                                        }
                                    }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' maxLength={10} id="mob" placeholder='Phone Number' required />
                                </div>

                            </> : ''
                    }

                    <div className="submit py-2 text-center">
                        <button className='button' type={main ? 'submit' : 'button'} onClick={() => {
                            if (passenger === '' || pickupDate === '') {
                                setYes(false)
                                setMain(false)
                                setDiv4(true)
                                setDiv5(true)
                                setDiv6(true)
                                setDiv7(false)
                                setDiv8(false)
                                setDiv9(false)
                            }
                            else {
                                setYes(true)
                                setDiv4(false)
                                setDiv5(false)
                                setDiv6(false)
                                setDiv7(true)
                                setDiv8(true)
                                setDiv9(true)
                                if (pickupLocation === '' || DropoffLocation === '') {
                                    setMain(false)
                                }
                                else {
                                    setMain(true)
                                    setBtn(true)
                                    setDiv1(true)
                                    setDiv2(true)
                                    setDiv3(true)
                                    setDiv4(false)
                                    setDiv5(false)
                                    setDiv6(false)
                                    setDiv7(false)
                                    setDiv8(false)
                                    setDiv9(false)
                                }
                            }
                        }} > {btn ? 'Submit' : 'Next'}</button>
                    </div>
                    {mes ? <p className='text-black shadow-2xl font-semibold font-mono text-[20px]'>Thank you for your message. It has been sent. we will get back touch to you shortly</p> : ''}
                </form>
            </div >
        </>
    )
}
