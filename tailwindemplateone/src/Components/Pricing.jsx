import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Pricing() {
  return (
    <div className="bg-blue-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md xxl:flex-shrink-0">
            <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 ">
              <div className="mx-auto max-w-xs px-8 ">
                <p className="text-base font-semibold text-white">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-5 sm:gap-x-2 gap-y-5 mt-5 text-white">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                  {feature}
                </li>
              ))}
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md xxl:flex-shrink-0 ">
            <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-blue-600">
              <div className="mx-auto max-w-xs px-8 bg-blue-600">
                <p className="text-base font-semibold text-white">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-5 sm:gap-x-2 gap-y-5 mt-5 text-white">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                  {feature}
                </li>
              ))}
              </div>
            </div>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md xxl:flex-shrink-0">
            <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 ">
              <div className="mx-auto max-w-xs px-8 ">
                <p className="text-base font-semibold text-white">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-5 sm:gap-x-2 gap-y-5 mt-5 text-white">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                  {feature}
                </li>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

