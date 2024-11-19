import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
export default function Form(){
    return (
        <div className="relative w-[100%] md:w-[70%] m-auto rounded-3xl bgimg3 isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 items-center ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-blue-700">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                            dolore.
                        </p>
                    </div>
                    <div className="mt-6 flex max-w-md gap-x-4 border-black">
                        <label htmlFor="email-address" className="sr-only ">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="min-w-0 flex-auto rounded-md border border-gray-600 bg-white/5 px-3.5 py-2 text-white sm:text-sm sm:leading-6"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
